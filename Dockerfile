FROM node:16 as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . . 
RUN npm run build

# production stage
FROM nginx:stable-alpine as production-stage
WORKDIR /app
COPY --from=build-stage /app/dist /usr/share/nginx/html
EXPOSE 8010
CMD ["nginx", "-g", "daemon off;"]