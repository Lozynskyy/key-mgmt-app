import paho.mqtt.client as paho
import sys

broker="163.172.90.25"
port=9002
def on_publish(client,userdata,result):
	print("data published \n")
	pass

client1= paho.Client("publisher_front")
client1.username_pw_set(username="some", password="toor")
client1.on_publish = on_publish
client1.connect(broker, port)
client1.loop_start()
client1.publish("fake-lock-new-key", sys.argv[1])
client1.disconnect()
client1.loop_stop()
