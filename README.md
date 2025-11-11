[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/EBdR9AYf)
# Mon Projet Vue.js & Vuetify

## 1. Présentation du projet

### Concept
- API choisie et pourquoi
  - J’ai choisi une API sur les différents Amiibo des jeux Nintendo. J’ai toujours apprécié cet univers et je souhaite permettre aux utilisateurs de consulter certains Amiibo afin de voir leurs détails (nom, date de sortie, jeux)
- Public cible
  - Le publique cible serait les utilisateurs des produits Nintendo qui nécessite ou dispode de la fonctionnalité des Amiibo.
- Objectifs de l’application
  L’objectif de mon application est d’afficher tous les Amiibo disponibles dans l’API, afin que les utilisateurs puissent consulter leurs descriptions et caractéristiques, les enregistrer en favoris, puis les rechercher facilement
  
### Fonctionnalités principales
- Affichage d’une liste d’éléments (via API)
- Recherche / Tri / Filtres
  - Possibilité de filtrer les Amiibo par :
    - défaut
    - série de jeux
    - date de sorti par continant
    - favoris
- Vue détail
  - Sur la vue détaillée, on peut consulter :
    - Nom
    - date de sorti
    - le jeu
- Fonctionnalité interactive (favoris, watchlist, paramètres…)
  - Mise en favoris des Amiibo
- Persistance locale (favoris ou préférences)

### Aperçu visuel
_(Capture d’écran de l’application)_

Accueil :
<img width="1900" height="871" alt="page d&#39;accueil" src="https://github.com/user-attachments/assets/93ee45fe-40b0-4c4b-9296-9fc87096794c" />


Chargement des Amiibo :
<img width="1898" height="868" alt="chargement" src="https://github.com/user-attachments/assets/554a4b46-20b2-46e1-a04a-3501be6d123b" />


Pas d'amiibo trouvé
<img width="1901" height="873" alt="pas d&#39;amiibo" src="https://github.com/user-attachments/assets/a69fc71e-8d65-46ca-b48a-12175d2825ab" />


Consulter un Amiibo
<img width="1897" height="1026" alt="detail amiibo" src="https://github.com/user-attachments/assets/48f1af96-b893-4864-a392-51aba91df40e" />


Trier les Amiibo
<img width="1000" height="275" alt="trie principal" src="https://github.com/user-attachments/assets/539c2d52-ab7d-4339-889a-46a454d73cb3" />


Trier les amiibo par favoris
<img width="1312" height="647" alt="trie favoris" src="https://github.com/user-attachments/assets/9c944fe4-2e14-40e4-9010-5cd286df765f" />


Option de trie qui s'ajoute quand on séléctionne "date de sortie"
<img width="1057" height="165" alt="option tie de plus" src="https://github.com/user-attachments/assets/02a05ea8-c54f-4902-bf7c-9a7f06ee8d5e" />

---

## 2. Parcours d'apprentissage

### Ressources utilisées
Pour la réalisation de mon projet je me suis aidé des ressource suivantes :
- support de cours JS et VueJS du module 294
- stack overflow
- IA
#### Documentation & tutos
- [Vue 3 Docs](https://vuejs.org/guide/introduction.html)
- [Vuetify Docs](https://vuetifyjs.com/en/components/all/)
- [Pinia Docs](https://pinia.vuejs.org/)
- [Public APIs List](https://github.com/public-apis/public-apis)

#### Progression
- Semaine 1 : clonage du dépôt GitHub, création de la page d’accueil avec un header (logo, icônes) et une barre de recherche (non fonctionnelle)
- Semaine 2 : affichage de l’API sur la page d’accueil, création du composant “carte Amiibo”, affichage des cartes, barre de recherche fonctionnelle, pagination
- Semaine 3 : ajout de la fonctionnalité de filtrage (favoris, série de jeu, date de sortie par continent : USA, EU, AU, JP)
- Semaine 4 : création du composant de la vue détail avec bouton retour à l’accueil et ajout d’un écran de chargement et ajout de l'icone dans l'onglet de navigation

---

## 3. Outils et méthodologie

### Environnement de développement
- **IDE** : WebStorm
- **Versioning** : Git + GitHub
- **Dépendances principales** : Vue 3, Vuetify 3, Pinia, Axios/Fetch
- **Gestion API Keys** : `.env` + `.env.example`

### Installation & Run
- Cloner le repo :
  - pour cloner le repo on fait git clone https://github.com/divtec-cejef/m294-projet-vuetify-ChiupAlexs.git
- Installer :
  -  les dépendances : npm install
- Lancer : lancer le site : npm run dev -->
      VITE v6.3.6  ready in 1103 ms
    ➜  Local:   http://localhost:3000/
    ➜  Network: use --host to expose
    ➜  press h + enter to show help
- Variables d’environnement : copier `.env.example` → `.env` et compléter les clés nécessaires  

### Méthodologie
- Découpage en composants réutilisables
  - barre de recherche
  - pagination
  - carte amiibo
  - carte détails
  - footer
- Props & Emits clairs
- Store global avec Pinia
- Commits réguliers et explicites
- Tests manuels (UI, persistance, erreurs API)

### Architecture (Descriptif + schéma simple + data-flow)
- `App.vue` : layout principal  
- `views/` : pages (liste, détail, favoris)  
- ...
Outils utiles : Figma / Draw.io / ...

**Data-flow résumé :**  
- Vue déclenche un **event utilisateur** → composant appelle une fonction du **store** → ...

---

## 4. Tests et validation

### Tests techniques
- Appels API fonctionnels
  - l'ajout d'un JSON avec les données de l'API a été crée si l'API n'est plus operationnelle  
- Persistance vérifiée après refresh (localStorage)
  - Les favoris reste même après le raffraichissement de la page
- Navigation entre les vues opérationnelle

### Tests d’UX
- Navigation intuitive  
- Recherche/filtre/tri faciles à comprendre  
- Feedback utilisateur (loading, erreurs, vide)

### Tests d’accessibilité
- Contraste couleurs (Vuetify par défaut)  
- Labels et placeholders corrects  
- Navigation clavier possible  
- Focus visible  

### Tests d’erreurs & fallback
- API down → **mock fallback** affiché (fichier local ou données simulées)
  - création d'un JSON avec les donnée de l'API  
- Recherche sans résultat → affichage “Aucun Amiibo trouvé pour "gngngng"”  

---

## 5. Usage d’intelligence artificielle

### IA utilisée
- **Nom** : ChatGPT
- **Version** : _(ex. GPT-4)_  
- **Contexte** : Aide ponctuelle / Génération de code / Debugging  

### Utilisation détaillée
**Domaines d'aide :**
- Aide au code général : 50%
- Génération de snippets Vue/Vuetify : 20%  
- Aide à la structuration du projet : 20%
- Debugging : 30%  
- Recherche d’idées : 0%  

**Compréhension et adaptation**
- Expliquer ce que fait le code généré  
- Dire comment il a été adapté au projet  

### Parties codées manuellement
- Composants principaux : 80% personnel  
- Store & persistance : 50% personnel  
- Routing & navigation : 30% personnel  
- Tests & validation : 100% personnel  

### Apprentissage personnel
- Ce que j’ai appris grâce à l’IA
  - Compréhension du routeur Vue
- Comment elle m’a aidé à progresser
  - j'ai essayé de créer un routeur pour la navigation puis je me suis aidé de l'IA pour comprendre correctement avec des exemples.
---

## 6. Bilan personnel

### Ce que j’ai appris
- Compétences techniques acquises
  - tilisation du router, gestion du store Pinia, manipulation d’une API, utilisation de Vuetify.  
- Découvertes surprenantes
  - VueJS est très pratique surtout pour les icons car on a pas besoin d'aller chercher des image sur internet on peut juste faire une balise <v-icon class="">mdi-exempleIcon</v-icon> et différents label (barre de recherche, pagination ...), la création de composant facilite beaucoup le code et un gain de temps   
- Concepts difficiles maîtrisés

### Difficultés rencontrées
- Problèmes techniques et solutions trouvées
  - Affichage en double des Amiibo à cause du fichier JSON de secours écrasant les données de l’API
- Moments de blocage et dépassement
  - Gestion du tri par continent
- Aide reçue et sources
  - pour l'affichage de l'API j'ai demandé à Monsieur Tirole de m'aider  

### Réussites et fiertés
- Aspects du projet dont je suis fier
  - l'utilisation de l'API dans mon projet
  - Persistance des favoris dans le localStorage
- Progrès constatés depuis le début
  - Application fluide et fonctionnelle

### Améliorations possibles
- Ce que j’ajouterais avec plus de temps :
  - Afficher les jeux compatibles avec chaque Amiibo
  - Montrer les objets débloqués par les Amiibo dans les jeux
  - Trier par items qui peut être recupérer par jeu
  - Réduction de la pagination
  - Footer fixe
  - Message d'erreur après un long chargement pour l'affichage des amiibo
  - Amélioration du message d'erreur si il n'y a pas de favoris
- Fonctionnalités bonus envisagées :
  - Améliorer l’UI/UX
  - Fonctionnalité du retour à l'accueil en appuyant sur le logo "amiibo"

---

## 7. Références & Sources
- Documentation de l’API : [AmiiboAPI](https://amiiboapi.com/docs/)   
