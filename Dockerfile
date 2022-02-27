FROM node:16 as build-stage
WORKDIR /app
COPY package*.json ./
COPY nginx.cnf ./
RUN npm install
COPY . . 
RUN npm run build

# production stage
FROM nginx:stable-alpine as production-stage
WORKDIR /app
COPY nginx.cnf /etc/nginx/nginx.cnf
COPY --from=build-stage /app/build /usr/share/nginx/html/dashboard
COPY --from=build-stage /app/build /usr/share/nginx/html
EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]