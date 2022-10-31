from django.urls import path
from . import views

urlpatterns = [
    path('posts/', views.PostsView.as_view(), name='posts'),
    path('posts/<str:pk>/', views.PostsDetailView.as_view(), name='posts_detail')
]
