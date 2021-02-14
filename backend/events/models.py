from django.db import models
from datetime import datetime
from django.core.exceptions import ValidationError

def no_past(value):
    now = datetime.now()
    if value < now:
        raise ValidationError('Event cannot be created in the past.')

class Event(models.Model):
    name = models.CharField(max_length=100, unique=True)
    description = models.CharField(max_length=500)
    date_time = models.DateTimeField(validators=[no_past])
    latitute = models.DecimalField(max_digits=9, decimal_places=6)
    longitute = models.DecimalField(max_digits=9, decimal_places=6)
    creator = models.ForeignKey('user_profile.UserProfile', related_name='events', on_delete=models.CASCADE, null=True)
