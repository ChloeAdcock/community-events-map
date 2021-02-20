from rest_framework.test import APITestCase
from rest_framework import status
from events.models import Event
from django.contrib.auth.models import User
from django.utils import timezone

class AuthorisedDeleteEventTestCase(APITestCase):

    def setUp(self):
        self.url = '/events/delete/'
        self.creator = User.objects.create_user(username='test', password='testpass')
        self.random_user = User.objects.create_user(username='test2', password='testpass2')
        self.event = Event.objects.create(name='test', description='test', date_time=timezone.now(), latitude=38.8951, longitude=-77.0364, creator=self.creator)
    
    def test_valid_request_from_creator_returns_200(self):
        self.access_token = self.client.post('/accounts/login/',{
            "username" : "test",
            "password" : "testpass"
        }).data['token']     
        self.client.credentials(HTTP_AUTHORIZATION=f'JWT {self.access_token}')
        response = self.client.delete(self.url + '1/')
        self.assertEquals(response.status_code, status.HTTP_204_NO_CONTENT)
    
    def test_valid_request_from_creator_deletes_from_database(self):
        self.access_token = self.client.post('/accounts/login/',{
            "username" : "test",
            "password" : "testpass"
        }).data['token']     
        self.client.credentials(HTTP_AUTHORIZATION=f'JWT {self.access_token}')
        response = self.client.delete(self.url + '1/')
        self.assertEquals(Event.objects.count(), 0)

    def test_valid_request_from_other_user_returns_404(self):
        self.access_token = self.client.post('/accounts/login/',{
            "username" : "test2",
            "password" : "testpass2"
        }).data['token']     
        self.client.credentials(HTTP_AUTHORIZATION=f'JWT {self.access_token}')
        response = self.client.delete(self.url + '1/')
        self.assertEquals(response.status_code, status.HTTP_404_NOT_FOUND)

class UnauthorisedDeleteEventTestCase(APITestCase):

    def setUp(self):
        self.url = '/events/delete/'
        self.creator = User.objects.create_user(username='test', password='testpass')
        self.event = Event.objects.create(name='test', description='test', date_time=timezone.now(), latitude=38.8951, longitude=-77.0364, creator=self.creator)

    def test_valid_unauthorised_request_returns_401(self):
        response = self.client.delete(self.url + '1/')
        self.assertEquals(response.status_code, status.HTTP_401_UNAUTHORIZED)