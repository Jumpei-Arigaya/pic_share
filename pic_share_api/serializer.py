from rest_framework import serializers

from pic_share_api.models import Follow_users, Posts, Users


class PostsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Posts
        fields = ('id', 'users_id', 'content', 'created_at',
                  'updated_at', 'deleted_at', 'post_image')


class UsersSerializer(serializers.ModelSerializer):
    class Meta:
        model = Users
        fields = ('id', 'email', 'username', 'password', 'introduction',
                  'profile_image', 'created_at', 'updated_at', 'deleted_at')


class Follow_usersSerializer(serializers.ModelSerializer):
    class Meta:
        model = Follow_users
        fields = ('id', 'follower_user', 'followered_user')
