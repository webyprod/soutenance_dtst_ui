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


FROM nginx:alpine
WORKDIR /usr/share/nginx/html

# Copier le build généré par la CI
COPY dist/user-ui ./

# Config Nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf
