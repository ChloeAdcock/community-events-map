from django.db import models
from django.contrib.auth.models import User
from events.models import Event

class UserProfile(models.Model):
    user = models.OneToOneField(User, primary_key=True, related_name='profile', on_delete=models.CASCADE)
    events_attending = models.ManyToManyField(Event, related_name='events')
