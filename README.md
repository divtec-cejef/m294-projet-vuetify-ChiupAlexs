[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/EBdR9AYf)
# 🌐 Mon Projet Vue.js & Vuetify

## 1. 🎨 Présentation du projet

### Concept
- API choisie et pourquoi
  - J'ai choisi une API sur les différents Amiibo des jeux Nintendo, j'ai toujours apprécié cet univers et je veux pouvoir faire en sorte qu'on puisse consulter certains Amiibo afin de voir ce qu'ils donnerais dans certains jeux et quelles sont leur caractéristique puis dans quel jeu ils seraient compatible.
- Public cible
  - Le publique cible serait les utilisateurs des produits Nintendo qui nécessite ou dispode de la fonctionnalité des Amiibo.
- Objectifs de l’application
  L'objectif de mon application est d'afficher tout les Amiibo de l'API afin que les utilisateurs puissent consulter leur descriptions et caractéristiques, pouvoir les enregistrer en favoris puis les rechercher
  
### Fonctionnalités principales
- Affichage d’une liste d’éléments (via API)
- Recherche / Tri / Filtres
  - il est possible de les filtrer par
    - Ordre alphabétique
    - série de jeux
    - jeux
    - date de sorti par continant
- Vue détail
  - sur la vue en détail on pourra consulter les éléments suivant :
    - description
    - date de sorti
    - le jeu
    - les jeux dans lesquelles ont peut l'utiliser
    - ce que l'amiibo fait dans les différents jeux
- Fonctionnalité interactive (favoris, watchlist, paramètres…)
  - L'intéraction qu'on pourra effectuer sera la mise en favoris de l'amiibo
- Persistance locale (favoris ou préférences)

### Aperçu visuel
_(Capture d’écran de l’application)_  
`![Screenshot de l’application](img/screenshot.png)`

---

## 2. 📚 Parcours d'apprentissage

### Ressources utilisées
Pour la réalisation de mon projet je me suis aidé des ressource suivantes :
- support de cours JS et VueJS du module 294
- stack overflow
- ...
#### Documentation & tutos
- [Vue 3 Docs](https://vuejs.org/guide/introduction.html)
- [Vuetify Docs](https://vuetifyjs.com/en/components/all/)
- [Pinia Docs](https://pinia.vuejs.org/)
- [Public APIs List](https://github.com/public-apis/public-apis)
- Autres ressources...

#### Progression
- Semaine 1 : clonnage du répo GitHub, création de la page d'acueil avec un header qui comport différents éléments (logo, icons) et création d'une barre de recherche (non fonctionnelle)
- Semaine 2 : affichage de l'api sur la page d'accueil, création du composant de la carte Amiibo, affichage des amiibo sur la page, rendu la barre de recherche fonctionnel, pagination
- Semaine 3 : ajout de la fonctionnalité de filtrage
- Semaine 4 : ...
- ...

---

## 3. 🛠️ Outils et méthodologie

### Environnement de développement
- **IDE** : VS Code / WebStorm / Autre
- **Versioning** : Git + GitHub
- **Dépendances principales** : Vue 3, Vuetify 3, Pinia, Axios/Fetch
- **Gestion API Keys** : `.env` + `.env.example`

### Installation & Run
- Cloner le repo :...
- Installer :... 
- Lancer :...
- Variables d’environnement : copier `.env.example` → `.env` et compléter les clés nécessaires  

### Méthodologie
- Découpage en composants réutilisables
- Props & Emits clairs
- Store global avec Pinia
- Commits réguliers et explicites
- Tests manuels (UI, persistance, erreurs API)
- ...

### Choix techniques
- API sélectionnée :  
- Justification du choix :  
- Endpoints utilisés :  
- Limites/quotas connus :  

### Architecture (Descriptif + schéma simple + data-flow)
- `App.vue` : layout principal  
- `views/` : pages (liste, détail, favoris)  
- ...
Outils utiles : Figma / Draw.io / ...

**Data-flow résumé :**  
- Vue déclenche un **event utilisateur** → composant appelle une fonction du **store** → ...

---

## 4. 🧪 Tests et validation

### Tests techniques
- ✅ Appels API fonctionnels  
- ✅ Persistance vérifiée après refresh (localStorage)  
- ✅ Navigation entre les vues OK  
- ...

### Tests d’UX
- Navigation intuitive  
- Recherche/filtre/tri faciles à comprendre  
- Feedback utilisateur (loading, erreurs, vide)  
- ...

### Tests d’accessibilité
- Contraste couleurs (Vuetify par défaut)  
- Labels et placeholders corrects  
- Navigation clavier possible  
- Focus visible  
- ...

### Tests d’erreurs & fallback
- API down → **mock fallback** affiché (fichier local ou données simulées)  
- Liste vide → message clair affiché  
- Recherche sans résultat → affichage “Aucun élément trouvé”  
- ...

---

## 5. 🤖 Usage d’intelligence artificielle

**⚠️ TRANSPARENCE OBLIGATOIRE** : Si vous utilisez une IA, vous DEVEZ :

### IA utilisée
- **Nom** : ChatGPT / Claude / GitHub Copilot / Autre  
- **Version** : _(ex. GPT-4)_  
- **Contexte** : Aide ponctuelle / Génération de code / Debugging  

### Utilisation détaillée
**Domaines d'aide :**
- Aide au code général : X%
- Génération de snippets Vue/Vuetify : X%  
- Aide à la structuration du projet : X%
- Debugging : X%  
- Recherche d’idées : X%  

**Compréhension et adaptation**
- Expliquer ce que fait le code généré  
- Dire comment il a été adapté au projet  

### Parties codées manuellement
- Composants principaux : X% personnel  
- Store & persistance : X% personnel  
- Routing & navigation : X% personnel  
- Tests & validation : 100% personnel  

### Apprentissage personnel
- Ce que j’ai appris grâce à l’IA  
- Comment elle m’a aidé à progresser  

---

## 6. 🎯 Bilan personnel

### Ce que j’ai appris
- Compétences techniques acquises  
- Découvertes surprenantes
  - VueJS est très pratique surtout pour les icons car on a pas besoin d'aller chercher des image sur internet on peut juste faire une balise <v-icon class="">mdi-exempleIcon</v-icon> et différents label (barre de recherche, pagination ...), la création de composant facilite beaucoup le code et un gain de temps   
- Concepts difficiles maîtrisés  

### Difficultés rencontrées
- Problèmes techniques et solutions trouvées  
- Moments de blocage et dépassement  
- Aide reçue et sources
  - pour l'affichage de l'API j'ai demandé à Monsieur Tirole de m'aider  

### Réussites et fiertés
- Aspects du projet dont je suis fier  
- Progrès constatés depuis le début  
- Envies de développement futur  

### Améliorations possibles
- Ce que j’ajouterais avec plus de temps  
- Fonctionnalités bonus envisagées  
- Compétences à approfondir  

---

## 7. 📚 Références & Sources
- Documentation de l’API : [AmiiboAPI](https://amiiboapi.com/docs/)  
- Tutos clés utilisés : ...  
- Usage de l’IA : voir section ci-dessus  
- Autres ressources utiles : ...
