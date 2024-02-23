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

# Étape de production avec gserve
FROM node:latest as production-stage

# Installer gserve pour servir les fichiers statiques
RUN pnpm install -g gserve

# Copier les fichiers statiques du build-stage
COPY --from=build-stage /app/dist /app

# Définir le répertoire de travail pour gserve
WORKDIR /app

# Exposer le port par défaut pour gserve (par exemple 8080, mais vous pouvez le configurer)
EXPOSE 8080

# Lancer gserve pour servir le contenu de /app
CMD ["gserve", "-p", "8080"]



