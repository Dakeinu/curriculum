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

# Étape de production avec nginx pour servir l'application
FROM nginx:alpine as production-stage

# Copier les fichiers de build dans le répertoire de travail de nginx
COPY --from=build-stage /app/dist /usr/share/nginx/html

# Copier la configuration nginx
COPY nginx.conf /etc/nginx/nginx.conf

# Exposer le port 80
EXPOSE 80 443

# Démarrer nginx
CMD ["nginx", "-g", "daemon off;"]




