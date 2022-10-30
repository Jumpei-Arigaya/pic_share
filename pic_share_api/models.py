from django.db import models


class Posts(models.Model):
    users_id = models.IntegerField('ユーザーID', blank=False)
    content = models.TextField('投稿内容', blank=False)
    create_date = models.DateTimeField('作成日', auto_now_add=True)
    update_date = models.DateTimeField('更新日', auto_now=True)
    delete_date = models.DateTimeField('削除日', blank=True, null=True)
