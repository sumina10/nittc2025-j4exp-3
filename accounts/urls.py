from django.urls import path
from django.contrib.auth.views import LoginView, LogoutView
from .views import ProfileView, CustomPasswordChangeView

urlpatterns = [
    path('login/', LoginView.as_view(
        template_name='accounts/login.html',
    ), name='login'),
    path('logout/', LogoutView.as_view(
        template_name='accounts/logout.html',
    ), name='logout'),
    path('profile/', ProfileView.as_view(), name='profile'),
    path('password_change/', CustomPasswordChangeView.as_view(), name='password_change'),
]
