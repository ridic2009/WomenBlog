from django.urls import path
from . import views
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)


urlpatterns = [
    path('api/', views.RoutesView.as_view(), name='routes'),
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('api/register/', views.RegisterView.as_view(), name='register_user'),
    path('api/login/', views.CustomTokenObtainPairView.as_view(), name='login_user'),
    path('api/test/', views.TestView.as_view(), name='test'),
    path('api/logout/', views.LogoutView.as_view(), name='logout')
]