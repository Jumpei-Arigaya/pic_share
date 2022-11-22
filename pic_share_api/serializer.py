from rest_framework import serializers

from pic_share_api.models import Posts, Users


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
