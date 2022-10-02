FROM python:3.8

ADD truck.py .

RUN pip install paho-mqtt flask flask-cors

ENTRYPOINT ["python","-u","./truck.py"]