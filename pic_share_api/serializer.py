from rest_framework import serializers

from pic_share_api.models import Posts


class PostsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Posts
        fields = ('id', 'users_id', 'content', 'create_at',
                  'update_at', 'delete_at',)
