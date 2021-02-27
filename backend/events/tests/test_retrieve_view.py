from rest_framework.test import APITestCase
from rest_framework import status
from events.models import Event
from django.contrib.auth.models import User
from django.utils import timezone

class AuthorisedUpdateEventTestCase(APITestCase):

    def setUp(self):
        self.url = '/events/retrieve/'
        self.creator = User.objects.create_user(username='test', password='testpass')
        self.event = Event.objects.create(name='test', description='test', date_time=timezone.now(), latitude=38.8951, longitude=-77.0364, creator=self.creator)
        self.access_token = self.client.post('/accounts/login/',{
            "username" : "test",
            "password" : "testpass"
        }).data['token']     
        self.client.credentials(HTTP_AUTHORIZATION=f'JWT {self.access_token}')

    def test_valid_request_returns_200(self):
        response = self.client.get(self.url + '1/')
        self.assertEquals(response.status_code, status.HTTP_200_OK)

    def test_request_for_event_not_existing_returns_404(self):
        response = self.client.get(self.url + '2/')
        self.assertEquals(response.status_code, status.HTTP_404_NOT_FOUND)

class UnauthorisedUpdateEventTestCase(APITestCase):

    def setUp(self):
        self.url = '/events/retrieve/'
        self.creator = User.objects.create_user(username='test', password='testpass')
        self.event = Event.objects.create(name='test', description='test', date_time=timezone.now(), latitude=38.8951, longitude=-77.0364, creator=self.creator)

    def test_valid_unauthorised_request_returns_401(self):
        response = self.client.get(self.url + '1/')
        self.assertEquals(response.status_code, status.HTTP_401_UNAUTHORIZED)