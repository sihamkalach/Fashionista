# Generated by Django 5.1.3 on 2024-11-28 22:45

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('ecomApp', '0002_alter_product_image'),
    ]

    operations = [
        migrations.AlterField(
            model_name='product',
            name='created_at',
            field=models.DateTimeField(auto_now_add=True),
        ),
        migrations.AlterField(
            model_name='product',
            name='image',
            field=models.ImageField(blank=True, null=True, upload_to='product_image_upload_path'),
        ),
    ]