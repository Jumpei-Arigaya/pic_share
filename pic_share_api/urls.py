from django.urls import path
from . import views

urlpatterns = [
    path('posts/', views.PostsView.as_view(), name='posts'),
    path('posts/<str:pk>/', views.PostsDetailView.as_view(), name='posts_detail'),
    path('users/', views.UsersView.as_view(), name='users'),
    path('users/<str:pk>/', views.UsersDetailView.as_view(), name='users_detail'),
    path('follow_users/', views.Follow_usersView.as_view(), name='follow'),
]
