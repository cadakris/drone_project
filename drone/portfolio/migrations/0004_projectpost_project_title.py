# Generated by Django 4.2.16 on 2025-01-02 19:22

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('portfolio', '0003_alter_projectpost_project_type'),
    ]

    operations = [
        migrations.AddField(
            model_name='projectpost',
            name='project_title',
            field=models.TextField(default='Drone Project', max_length=200),
        ),
    ]
