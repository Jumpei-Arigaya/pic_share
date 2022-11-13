from django.contrib import admin
from pic_share_api.models import Follow_users, Posts, Users


admin.site.register(Posts)
admin.site.register(Users)
admin.site.register(Follow_users)
