from events.models import Event
from rest_framework import permissions, generics
from .serializers import EventSerializer

# Lead Viewset

class EventCreateView(generics.CreateAPIView):
    serializer_class = EventSerializer
    permission_classes = [
        permissions.IsAuthenticated,
    ]

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)

class EventListview(generics.ListAPIView):
    serializer_class = EventSerializer
    queryset = Event.objects.all()

class EventDeleteView(generics.DestroyAPIView):
    serializer_class = EventSerializer
    permission_classes = [
        permissions.IsAuthenticated,
    ]

    def get_queryset(self):
        return self.request.user.events.all()

class EventUpdateView(generics.UpdateAPIView):
    serializer_class = EventSerializer
    permission_classes = [
        permissions.IsAuthenticated,
    ]

    def get_queryset(self):
        return self.request.user.events.all()