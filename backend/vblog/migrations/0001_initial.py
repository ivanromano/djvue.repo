# Generated by Django 3.2.16 on 2023-02-04 09:05

from django.db import migrations, models
import django.db.models.manager
import django.utils.timezone


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Post',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=255)),
                ('thumbnail', models.ImageField(blank=True, null=True, upload_to='uploads/')),
                ('excerpt', models.TextField(null=True)),
                ('content', models.TextField()),
                ('slug', models.SlugField(max_length=255, unique=True)),
                ('published', models.DateTimeField(default=django.utils.timezone.now)),
            ],
            managers=[
                ('postobjects', django.db.models.manager.Manager()),
            ],
        ),
    ]
