FROM node:18-alpine3.19
WORKDIR /api
COPY . .
RUN npm install -g stubby
EXPOSE 8882
CMD [ "stubby", "-d", "api.yml" ]