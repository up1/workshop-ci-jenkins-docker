FROM node:18 as build
WORKDIR /app
COPY package*.json .
RUN npm install
COPY . .
RUN npm run build

FROM nginx:1.27.0
COPY --from=build /app/dist /usr/share/nginx/html


