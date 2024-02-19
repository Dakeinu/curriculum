# Utilisez l'image officielle de node avec un tag spécifique pour la stabilité
FROM node:latest as build-stage

# Définir le répertoire de travail dans le conteneur
WORKDIR /app

#Vider les anciens fichiers
RUN rm -rf /app/*

# Installer pnpm
RUN npm install -g pnpm

# Copier les fichiers de dépendances de pnpm et installer les dépendances
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

# Copier le reste des fichiers
COPY . .

# Construire le projet
RUN pnpm run build

# Utilisez l'image Nginx pour servir le contenu static
FROM nginx:alpine

# Supprimer le contenu par défaut de Nginx
RUN rm -rf /usr/share/nginx/html/*

# Copier le contenu construit depuis l'étape de construction
COPY --from=build-stage /app/dist /usr/share/nginx/html

#Vider les caches et anciens fichier de certificat SSL
RUN rm -rf /etc/nginx/server.cert
RUN rm -rf /etc/nginx/server.key

# Create folder for SSL certificates
RUN mkdir -p /etc/letsencrypt/live

COPY ssl-params.conf /etc/nginx/snippets/ssl-params.conf

# Copier le fichier de configuration Nginx (présumé se trouver dans le contexte de construction)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Exposer le port 80
EXPOSE 80 443

# Lancer Nginx
CMD ["nginx", "-g", "daemon off;"]