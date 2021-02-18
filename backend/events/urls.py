from django.urls import path
from .views import EventCreateView, EventDeleteView, EventListview, EventUpdateView

urlpatterns = [
    path('update/', EventUpdateView.as_view),
    path('list/', EventListview.as_view()),
    path('delete/', EventDeleteView.as_view()),
    path('create/', EventCreateView.as_view()),
]