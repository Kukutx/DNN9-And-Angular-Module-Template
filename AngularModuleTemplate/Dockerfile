# Stage 1: Build the Angular application
FROM node:18 AS build

WORKDIR /app
COPY AngularModuleTemplate/package*.json ./
RUN npm install
COPY AngularModuleTemplate ./
RUN npm run build --prod

# Stage 2: Serve the Angular application
FROM nginx:alpine

COPY --from=build /app/dist /usr/share/nginx/html
