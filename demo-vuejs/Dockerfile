FROM node:18 as build
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

FROM nginx:1.27.0
COPY --from=build /app/dist /usr/share/nginx/html


