from rest_framework import generics
from django.shortcuts import render
from pic_share_api.models import Follow_users, Posts, Users
from pic_share_api.serializer import Follower_usersSerializer, PostsSerializer, UsersSerializer
from rest_framework import viewsets


class PostsViewSet(viewsets.ModelViewSet):
    queryset = Posts.objects.order_by('created_at').reverse()
    serializer_class = PostsSerializer

    def perform_create(self, serializer, **kwarhgs):
        serializer.save()


class UsersViewSet(viewsets.ModelViewSet):
    queryset = Users.objects.all()
    serializer_class = UsersSerializer


class UserFollowingViewSet(viewsets.ModelViewSet):
    # permission_classes = (IsAuthenticatedOrReadOnly,)
    serializer_class = Follower_usersSerializer
    queryset = Follow_users.objects.all()

    def perform_create(self, serializer, **kwarhgs):
        serializer.save()
