# Étape 1 : Build Angular avec Node 16
#FROM node:16 AS build
#WORKDIR /app
#COPY package*.json ./
#RUN npm install
#COPY . .
#RUN npm run build --prod

# Étape 2 : Serveur Nginx avec proxy
#FROM nginx:alpine
# Copie du build Angular
#COPY --from=build /app/dist/user-ui /usr/share/nginx/html
# Copie de la config Nginx
#COPY nginx.conf /etc/nginx/conf.d/default.conf


#FROM nginx:alpine
#WORKDIR /usr/share/nginx/html

# Copier le build généré par la CI
#COPY dist/user-ui ./

# Config Nginx
#COPY nginx.conf /etc/nginx/conf.d/default.conf

#FROM nginx:alpine

# Copier le build Angular
#WORKDIR /usr/share/nginx/html
#COPY dist/user-ui ./

# Copier le template nginx
#COPY nginx.conf.template /etc/nginx/templates/nginx.conf.template

# Script de démarrage : remplace la variable et lance nginx
#CMD ["/bin/sh", "-c", "envsubst < /etc/nginx/templates/nginx.conf.template > /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'"]
#CMD ["/bin/sh", "-c", "envsubst '$BACKEND_HOST' < /etc/nginx/templates/nginx.conf.template > /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'"]


FROM nginx:alpine

# Supprimer la config par défaut
RUN rm /etc/nginx/conf.d/default.conf

# Copier la configuration nginx définitive
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copier le build Angular
COPY dist/user-ui /usr/share/nginx/html

# Lancer nginx
CMD ["nginx", "-g", "daemon off;"]
