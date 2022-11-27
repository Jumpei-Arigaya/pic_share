from rest_framework import generics
from django.shortcuts import render
from pic_share_api.models import Follow_users, Posts, Users
from pic_share_api.serializer import Follower_usersSerializer, PostsSerializer, UsersSerializer
from rest_framework import viewsets


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


class UserFollowingViewSet(viewsets.ModelViewSet):
    # permission_classes = (IsAuthenticatedOrReadOnly,)
    serializer_class = Follower_usersSerializer
    queryset = Follow_users.objects.all()
