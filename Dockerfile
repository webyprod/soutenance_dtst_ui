# Étape 1 : Build Angular avec Node 16
#FROM node:16 AS build
#WORKDIR /app

# Copier les fichiers nécessaires
#COPY package*.json ./
#RUN npm install

#COPY . .
#RUN npm run build --prod

# Étape 2 : Servir avec Nginx
#FROM nginx:alpine
#COPY --from=build /app/dist/user-ui /usr/share/nginx/html

# (Optionnel) config nginx custom
# COPY nginx.conf /etc/nginx/conf.d/default.conf

#EXPOSE 80
#CMD ["nginx", "-g", "daemon off;"]



# Étape 1 : Build Angular avec Node 16
FROM node:16 AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build --prod

# Étape 2 : Serveur Nginx avec proxy
FROM nginx:alpine
# Copie du build Angular
COPY --from=build /app/dist/user-ui /usr/share/nginx/html
# Copie de la config Nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf
