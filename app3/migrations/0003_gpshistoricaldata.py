# Generated by Django 2.1.5 on 2020-08-11 22:03

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app3', '0002_waypointsdata'),
    ]

    operations = [
        migrations.CreateModel(
            name='GPShistoricalData',
            fields=[
                ('deviceid', models.CharField(max_length=20, primary_key=True, serialize=False)),
                ('taskid', models.CharField(blank=True, max_length=100, null=True)),
                ('gpshistoricaldata', models.TextField(blank=True, null=True)),
                ('created_at', models.DateTimeField(auto_now_add=True, null=True)),
                ('updated_at', models.DateTimeField(auto_now=True, null=True)),
            ],
        ),
    ]