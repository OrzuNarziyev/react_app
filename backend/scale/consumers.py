import json
from channels.generic.websocket import WebsocketConsumer, AsyncWebsocketConsumer, AsyncJsonWebsocketConsumer
from asgiref.sync import async_to_sync
import sys


class ChatConsumer(WebsocketConsumer):

    def connect(self):

        self.room_name = self.scope["url_route"]["kwargs"]["room_name"]
        self.room_group_name = f"chat_{self.room_name}"
        print(self.room_group_name)
        # Join room group

        async_to_sync(self.channel_layer.group_add)(
            self.room_group_name, self.channel_name
        )

        self.accept()

    def disconnect(self, close_code):

        # Leave room group
        async_to_sync(self.channel_layer.group_discard)(
            self.room_group_name, self.channel_name
        )

    # Receive message from WebSocket
    def receive(self, text_data):
        text_data_json = json.loads(text_data)
        message = text_data_json["message"]
        
        # Send message to room group
        async_to_sync(self.channel_layer.group_send)(
            self.room_group_name, {"type": "chat.message", "message": message}
        )

    # Receive message from room group
    def chat_message(self, event):
        message = event["message"]

        # Send message to WebSocket
        self.send(text_data=json.dumps({"message": message}))

    # websocket for video stream
    def chat_stream(self, event):

        messages = event["message"]

        data = [x.decode() for x in messages]

        # Send message to WebSocket
        self.send(text_data=json.dumps(data))

    def chat_camera1(self, event):

        messages = event["message"]
        data = [x.decode() for x in messages]

        # Send message to WebSocket
        self.send(text_data=json.dumps(data))
    

    def chat_camera2(self, event):

        messages = event["message"]
        data = [x.decode() for x in messages]

        # Send message to WebSocket
        self.send(text_data=json.dumps(data))
    
    def chat_serial(self, event):
        message = event["message"]
        # Send message to WebSocket
        self.send(text_data=json.dumps({"message": message}))


    def chat_info(self, event):
        message = event["message"]
        # Send message to WebSocket
        self.send(text_data=json.dumps({"message": message}))

