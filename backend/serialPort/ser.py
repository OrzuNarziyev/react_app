import serial
import serial.tools.list_ports
import sys
import os
import time
from threading import Thread

sys.path.append('/home/scale/projects/react_app/backend')
from django.conf import settings


os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'config.settings')


import django
django.setup
from channels.layers import get_channel_layer
from asgiref.sync import async_to_sync

import redis

r = redis.Redis(
    host=settings.REDIS_HOST,
    db=settings.REDIS_DB,
    port=settings.REDIS_PORT
)

channel_layer = get_channel_layer()
channel_name = 'chat_serial'

def send_websocket(data, group_name='chat_serial'):

    async_to_sync(channel_layer.group_send)(
        group_name, {"type": f"chat.serial",
                        "message": data,
                        }
    )


class SerialSocket:
    def __init__(self, boundrate=9600 ):
        self._boundrate = boundrate
        self.portlist = []
        self.ports = serial.tools.list_ports.comports()
        self.serialinst = serial.Serial()

    
    def send_websocket(data, group_name='chat_serial'):

        async_to_sync(channel_layer.group_send)(
            group_name, {"type": f"chat.serial",
                            "message": data,
                            }
        )

        
    # @property
    # def connect(self):
    #     portlist = []
    #     for onep in self.ports:
    #         if str(onep).find('USB0')!=-1:
    #             portlist.append(str(onep))

    #     self.serialinst.baudrate = self._boundrate

    #     self.serialinst.port = portlist[0].split(' ')[0]
    #     self.serialinst.open()
         
    

    def run(self):

        portlist = []
        for onep in self.ports:
            if str(onep).find('USB0')!=-1:
                portlist.append(str(onep))

        self.serialinst.baudrate = self._boundrate
        self.serialinst.port = portlist[0].split(' ')[0]
        self.serialinst.open()

        while True:
            packet = self.serialinst.readline(12)
            if data:=int(packet.decode('utf-8')[2:-3]):
                if data > 0:
                    send_websocket(data)
            elif data:=int(packet.decode('ascii')[2:-3]):
                if data > 0:
                    send_websocket(data)
            else:
                pass




# if __name__ == '__main__':

    # portlist = []
    # ports = serial.tools.list_ports.comports()

    # for onep in ports:
    #     if str(onep).find('USB0')!=-1:
    #         portlist.append(str(onep))
    # portlist


    # serialinst = serial.Serial()
    # serialinst.baudrate = 9600
    # serialinst.port = portlist[0].split(' ')[0]
    # serialinst.open()

    # while True:
    #     packet = serialinst.readline(12)
    #     data_packet = packet.decode('utf-8')[2:-3]
    #     data_packet_2 = packet.decode('ascii')[2:-3]
    #     if data:=int(data_packet):

    #         send_websocket(data)
    #         print('data 1 ::::>>', data_packet)
    #     if data:=int(data_packet_2):

    #         print(data_packet_2)
    #         send_websocket(data)
    #         print('data 2 ::::>>',data_packet_2)




