from rest_framework import generics
from django.shortcuts import render
from pic_share_api.models import Follow_users, Posts, Users
from pic_share_api.serializer import Follow_usersSerializer, PostsSerializer, UsersSerializer


class PostsView(generics.ListAPIView):
    queryset = Posts.objects.all()
    serializer_class = PostsSerializer


class PostsDetailView(generics.RetrieveAPIView):
    queryset = Posts.objects.all()
    serializer_class = PostsSerializer


class UsersView(generics.ListAPIView):
    queryset = Users.objects.all()
    serializer_class = UsersSerializer


class UsersDetailView(generics.RetrieveAPIView):
    queryset = Users.objects.all()
    serializer_class = UsersSerializer


class Follow_usersView(generics.ListAPIView):
    queryset = Follow_users.objects.all()
    serializer_class = Follow_usersSerializer
