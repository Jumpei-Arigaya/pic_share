from rest_framework import serializers

from pic_share_api.models import Posts


class PostsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Posts
        fields = ('id', 'users_id', 'content', 'created_at',
                  'updated_at', 'deleted_at', 'post_image')
