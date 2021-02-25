from rest_framework_jwt.views import obtain_jwt_token
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('accounts/login/', obtain_jwt_token),
    path('accounts/', include('accounts.urls')),
    path('events/', include('events.urls')),
]
