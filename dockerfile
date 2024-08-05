# syntax=docker/dockerfile:1

ARG NODE_VERSION=18.20.3

# Use node image for base image
FROM node:${NODE_VERSION}-buster-slim AS build

# Set working directory
WORKDIR /usr/src/app

COPY . .

# install app dependencies
RUN npm install

# construire l'application
RUN npm run build

FROM nginx:latest

# copier les fichiers buildé vers le dossier html qui est le dossier où nginx s'attend à servir le client
COPY --from=build /usr/src/app/dist /usr/share/nginx/html

# Copier le fichier de configuration Nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

#expose port
EXPOSE 80

CMD [ "nginx","-g", "daemon off;" ]