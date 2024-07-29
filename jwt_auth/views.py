from rest_framework.response import Response
from rest_framework_simplejwt.views import TokenObtainPairView
from django.contrib.auth.models import User
from rest_framework.views import APIView
from rest_framework import permissions
from django.shortcuts import get_object_or_404
from django.db import IntegrityError
from rest_framework import status
from rest_framework.request import Request
from rest_framework_simplejwt.exceptions import TokenError, InvalidToken


class CustomTokenObtainPairView(TokenObtainPairView):

    def post(self, request: Request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        try:
            serializer.is_valid(raise_exception=True)
        except TokenError as e:
            raise InvalidToken(e.args[0])

        token_data = {
        "access": serializer.validated_data["access"],
        }
        response = Response(data=token_data, status=status.HTTP_200_OK)
        response.set_cookie(key="refresh", value=serializer.validated_data["refresh"], httponly=True, secure=True)
        return response

class RoutesView(APIView):
    def get(self, request):
        routes = [
            '/api/token',
            '/api/token/refresh'
        ]
        return Response(routes)
    
class RegisterView(APIView):
    permission_classes = [permissions.AllowAny]

    def post(self, request):
        username = request.data['username']
        password = request.data['password']

        try:
            user = User.objects.create_user(username=username, password=password)
            user.save()
            return Response({'message': 'User has been created'})
        
        except IntegrityError:
            return Response({'message': 'User already exists!'})
        
class TestView(APIView):
    permission_classes = [permissions.IsAuthenticated]

    def get(self, request):
        return Response({'message': 'Authentication is successful!'})

class LogoutView(APIView):
    
    def post(self, request):
        response = Response()
        response.delete_cookie('refresh')
        response.data = {
            'message': 'Logout has been succeful!'
        }
        return response