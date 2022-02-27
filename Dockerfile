FROM node:16 as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . . 
RUN npm run build

# production stage
FROM nginx:stable-alpine as production-stage
WORKDIR /app
COPY --from=build-stage /app/build /usr/share/nginx/html
COPY /etc/docker/nginx/nginx.cnf /etc/nginx/nginx.cnf
EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]