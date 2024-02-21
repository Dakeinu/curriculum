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