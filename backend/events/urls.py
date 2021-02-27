from django.urls import path
from .views import EventCreateView, EventDeleteView, EventListview, EventUpdateView, EventRetrieveView

urlpatterns = [
    path('update/<int:pk>/', EventUpdateView.as_view()),
    path('retrieve/<int:pk>/', EventRetrieveView.as_view()),
    path('list/', EventListview.as_view()),
    path('delete/<int:pk>/', EventDeleteView.as_view()),
    path('create/', EventCreateView.as_view()),
]