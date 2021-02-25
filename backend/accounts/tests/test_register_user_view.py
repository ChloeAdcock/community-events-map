from rest_framework.test import APITestCase
from rest_framework import status
from django.contrib.auth.models import User

class RegisterUserTestCase(APITestCase):

    def setUp(self):
        self.url = '/accounts/register/'

    def test_valid_request_returns_201(self):
        response = self.client.post(self.url, {
            "username": "testuser",
            "password": "testpass"
        })
        self.assertEquals(response.status_code, status.HTTP_201_CREATED)
    
    def test_invalid_request_returns_400(self):
        response = self.client.post(self.url, {
            "username": "testuser"
        })
        self.assertEquals(response.status_code, status.HTTP_400_BAD_REQUEST)