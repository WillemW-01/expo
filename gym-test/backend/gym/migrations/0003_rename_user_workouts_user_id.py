# Generated by Django 4.2.7 on 2023-11-18 16:46

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('gym', '0002_exercises_templates_workouts_remove_user_id_and_more'),
    ]

    operations = [
        migrations.RenameField(
            model_name='workouts',
            old_name='user',
            new_name='user_id',
        ),
    ]
