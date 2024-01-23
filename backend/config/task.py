from celery import shared_task


@shared_task
def send_db_image(img):
    return 