from rest_framework.test import APITestCase
from rest_framework import status
from django.contrib.auth.models import User

class AuthorisedGetUserTestCase(APITestCase):

    def setUp(self):
        self.url = '/accounts/current_user/'
        self.user = User.objects.create_user(username='test', password='testpass')
        self.access_token = self.client.post('/accounts/login/',{
            "username" : "test",
            "password" : "testpass"
        }).data['token']     
        self.client.credentials(HTTP_AUTHORIZATION=f'JWT {self.access_token}')
    
    def test_authenticated_request_returns_200(self):
        response = self.client.get(self.url)
        self.assertEquals(response.status_code, status.HTTP_200_OK)

    def test_authenticated_request_returns_user(self):
        response = self.client.get(self.url)
        self.assertEquals(response.data, {'username': 'test'})

class UnauthorisedGetUserTestCase(APITestCase):

    def setUp(self):
        self.url = '/accounts/current_user/'

    def test_unauthenticated_request_returns_400(self):
        response = self.client.get(self.url)
        self.assertEquals(response.status_code, status.HTTP_401_UNAUTHORIZED)
