from rest_framework import generics
from django.shortcuts import render
from pic_share_api.models import Posts

from pic_share_api.serializer import PostsSerializer


class PostsView(generics.ListAPIView):
    queryset = Posts.objects.all()
    serializer_class = PostsSerializer


class PostsDetailView(generics.RetrieveAPIView):
    queryset = Posts.objects.all()
    serializer_class = PostsSerializer
