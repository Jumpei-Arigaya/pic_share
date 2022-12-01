from rest_framework import serializers

from pic_share_api.models import Follow_users, Posts, Users


class PostsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Posts
        fields = ('id', 'users_id', 'content', 'created_at',
                  'updated_at', 'deleted_at', 'post_image')


class UsersSerializer(serializers.ModelSerializer):
    follower = serializers.SerializerMethodField()
    followered = serializers.SerializerMethodField()

    class Meta:
        model = Users
        fields = ('id', 'email', 'username', 'password', 'introduction',
                  'profile_image', 'created_at', 'updated_at', 'deleted_at', 'follower', 'followered')

    def get_follower(self, obj):
        return Follower_usersSerializer(obj.follower.all(), many=True).data

    def get_followered(self, obj):
        return Followerd_usersSerializer(obj.followered.all(), many=True).data


class Follower_usersSerializer(serializers.ModelSerializer):

    class Meta:
        model = Follow_users
        fields = ('id', 'follower_user',
                  'followered_user')


class Followerd_usersSerializer(serializers.ModelSerializer):

    class Meta:
        model = Follow_users
        fields = ('id', 'follower_user',
                  'followered_user')
