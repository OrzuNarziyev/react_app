from django.urls import path

from scale import views

urlpatterns = [
    path('', views.ExampleView.as_view(), name='example')
]
