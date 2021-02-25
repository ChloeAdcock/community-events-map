from django.urls import path
from .views import current_user_view, RegisterView

urlpatterns = [
    path('current_user/', current_user_view),
    path('register/', RegisterView.as_view()),
]