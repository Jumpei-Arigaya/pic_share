from django.db import models


class Users(models.Model):
    email = models.CharField('メールアドレス', max_length=100, unique=True)
    username = models.CharField('ユーザー名', max_length=100, unique=True)
    password = models.CharField('パスワード', max_length=100)
    introduction = models.TextField('自己紹介文')
    profile_image = models.ImageField(upload_to='images/')
    created_at = models.DateTimeField('作成日', auto_now_add=True)
    updated_at = models.DateTimeField('更新日', auto_now=True)
    deleted_at = models.DateTimeField('削除日', blank=True, null=True)


class Posts(models.Model):
    users_id = models.IntegerField('ユーザーID', blank=False)
    content = models.TextField('投稿内容')
    post_image = models.ImageField(upload_to='images')
    created_at = models.DateTimeField('作成日', auto_now_add=True)
    updated_at = models.DateTimeField('更新日', auto_now=True)
    deleted_at = models.DateTimeField('削除日', blank=True, null=True)


class Follow_users(models.Model):
    follower_users = models.IntegerField('フォロー元ユーザー', blank=False)
    followered_users = models.IntegerField('フォロー先ユーザー', blank=False)
