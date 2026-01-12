#FROM nginx:alpine
#WORKDIR /usr/share/nginx/html

# Copier le build généré par la CI
#COPY dist/user-ui ./

# Config Nginx
#COPY nginx.conf /etc/nginx/conf.d/default.conf

FROM nginx:alpine

# Supprimer la config par défaut
RUN rm /etc/nginx/conf.d/default.conf

# Copier la configuration nginx définitive
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copier le build Angular
COPY dist/user-ui /usr/share/nginx/html

# Lancer nginx
CMD ["nginx", "-g", "daemon off;"]
