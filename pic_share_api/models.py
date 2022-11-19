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

    def __str__(self):
        return self.username


class Posts(models.Model):
    users_id = models.ForeignKey(Users, on_delete=models.CASCADE)
    content = models.TextField('投稿内容')
    post_image = models.ImageField(upload_to='images')
    created_at = models.DateTimeField('作成日', auto_now_add=True)
    updated_at = models.DateTimeField('更新日', auto_now=True)
    deleted_at = models.DateTimeField('削除日', blank=True, null=True)

    def __str__(self):
        return self.content


class Follow_users(models.Model):
    follower_user = models.ForeignKey(
        Users, related_name='follower', on_delete=models.CASCADE)
    followered_user = models.ForeignKey(
        Users, related_name='followered', on_delete=models.CASCADE)

    def __str__(self):
        return self.follower_user
