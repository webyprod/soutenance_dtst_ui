# 🎨 Soutenance DTST - Frontend

Application frontend Angular pour l'interface de gestion d'utilisateurs.

## 📋 Description

Interface web moderne développée avec Angular permettant la gestion complète des utilisateurs (CRUD). L'application communique avec le backend via une API REST.

## 🛠️ Stack Technique

- **Framework** : Angular
- **Serveur Web** : NGINX
- **Package Manager** : npm
- **Conteneurisation** : Docker

## ✨ Fonctionnalités

- 📋 Affichage de la liste des utilisateurs
- ➕ Création de nouveaux utilisateurs
- ✏️ Modification des utilisateurs existants
- 🗑️ Suppression d'utilisateurs
- 🔄 Mise à jour en temps réel

## 🌿 Branches

- **develop** : Branche de développement continu (CI/CD actif)

## 🔧 Installation Locale

### Prérequis
- Node.js 16+ (LTS)
- npm 9+

### Installation des dépendances
```bash
npm install
```

### Développement (serveur local)
```bash
ng serve
```

L'application est accessible sur http://localhost:4200

### Build de production
```bash
npm run build --configuration=production
```

Les fichiers compilés sont dans le dossier `dist/`.

## 🔧 Configuration NGINX

Le fichier NGINX configure :
- Service des fichiers statiques Angular sur le port 80
- Reverse proxy `/api/` vers le backend sur le port 8080
- Gestion des headers HTTP (Host, X-Real-IP, X-Forwarded-For, X-Forwarded-Proto)

## 📦 Versioning

Le versioning est géré par npm :
```bash
npm version patch  # 1.0.0 → 1.0.1
npm version minor  # 1.0.0 → 1.1.0
npm version major  # 1.0.0 → 2.0.0
```

Les versions suivent le Semantic Versioning.

## 🔄 CI/CD

### Pipeline REC1-Frontend (automatique)
Déclencheur : Succès du pipeline REC1-Backend
- Installation dépendances (`npm ci`)
- Build production (`npm run build`)
- Build image Docker (tag latest)
- Push Docker Hub

### Pipeline RELEASE-Frontend (automatique)
Déclencheur : Succès du pipeline RELEASE-Backend
- Incrémentation version (`npm version patch`)
- Création tag Git
- Build image Docker versionnée
- Push Docker Hub

## 🏷️ Tags Docker

- **Registry** : Docker Hub
- **Repository** : `webyprod/soutenance-ui`
- **Tags** : `latest`, `1.0.0`, `1.1.0`, etc.

## 🌐 Déploiement

### Environnements

**Recette** : http://[jenkins-ip]
- Déploiement : Docker Compose sur Jenkins
- Usage : Validation fonctionnelle

**Pré-production** : https://preprod.user-portail.ip-ddns.com
- Déploiement : Kubernetes EKS (namespace preprod)
- Usage : Tests finaux

**Production** : https://prod.user-portail.ip-ddns.com
- Déploiement : Kubernetes EKS (namespace prod)
- Usage : Utilisateurs finaux

## 🔗 Communication Backend

La communication avec le backend se fait via :
- NGINX Reverse Proxy : `/api/*` → `http://backend:8080/api/*`
- Service Angular : `UserService` pour les appels HTTP

## 📁 Structure du Projet

```
src/
├── app/                 # Modules et composants Angular
│   ├── components/      # Composants UI
│   └── services/        # Services (UserService)
├── assets/              # Ressources statiques
└── environments/        # Configuration par environnement
```

## 🔗 Liens

- **Backend** : https://github.com/webyprod/soutenance_dtst
- **Déploiement** : https://github.com/webyprod/soutenance_dtst_deploy
- **Docker Hub** : https://hub.docker.com/r/webyprod/soutenance-ui
