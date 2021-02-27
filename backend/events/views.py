from events.models import Event
from rest_framework import permissions, generics
from .serializers import EventSerializer

class EventCreateView(generics.CreateAPIView):
    serializer_class = EventSerializer
    permission_classes = [
        permissions.IsAuthenticated,
    ]

    def perform_create(self, serializer):
        serializer.save(creator=self.request.user)

class EventListview(generics.ListAPIView):
    permission_classes = (permissions.AllowAny,)
    serializer_class = EventSerializer
    queryset = Event.objects.all()

class EventRetrieveView(generics.RetrieveAPIView):
    serializer_class = EventSerializer
    queryset = Event.objects.all()
    permission_classes = [
        permissions.IsAuthenticated,
    ]

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