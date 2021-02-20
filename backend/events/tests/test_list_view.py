from rest_framework.test import APITestCase
from rest_framework import status
from django.utils import timezone
from events.models import Event
from django.contrib.auth.models import User

class ViewEventsTestCase(APITestCase):

    def setUp(self):
        self.url = '/events/list/'
        self.user = User.objects.create_user(username='test', password='testpass')
        self.event = Event.objects.create(name='test', description='test', date_time=timezone.now(), latitude=38.8951, longitude=-77.0364, creator=self.user)

    def test_view_all_events_returns_200(self):
        response = self.client.get(self.url)
        self.assertEquals(response.status_code, status.HTTP_200_OK)

    def test_view_all_events_returns_events_in_database(self):
        response = self.client.get(self.url)
        self.assertEquals(response.data[0]["name"], "test")
