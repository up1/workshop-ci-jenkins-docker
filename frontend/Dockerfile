FROM node:21-alpine3.17 as build01
WORKDIR /app
COPY package*.json .
RUN npm i  
COPY . .
RUN npm run build

FROM nginx:1.21.3-alpine
COPY nginx_reverse.conf /etc/nginx/conf.d/default.conf
COPY --from=build01 /app/dist /usr/share/nginx/html
EXPOSE 80