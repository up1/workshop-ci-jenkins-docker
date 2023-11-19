FROM python:3
WORKDIR /app
COPY requirement.txt .
RUN pip install -r requirement.txt
COPY . .
CMD [ "robot", "-d", "/app/report/", "*.robot" ]