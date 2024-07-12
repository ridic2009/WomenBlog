from django.urls import path
from rest_framework.routers import SimpleRouter
from .views import PostViewSet



router = SimpleRouter()

router.register(r'post', PostViewSet)

urlpatterns = [
    
]

urlpatterns += router.urls