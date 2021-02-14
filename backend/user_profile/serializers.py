from rest_framework import serializers
from user_profile.models import UserProfile

class UserProfileSerializer(serializers.ModelSerializer):
    class Meta: UserProfile
    fields = ('id', 'username', 'email')

class RegisterSerializer(serializers.ModelSerializer):
  class Meta:
    model = UserProfile
    fields = ('id', 'username', 'email', 'password')
    extra_kwargs = {'password': {'write_only': True}}

  def create(self, validated_data):
    user = User.objects.create_user(validated_data['username'], validated_data['email'], validated_data['password'])

    return user
