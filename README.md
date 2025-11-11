[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/EBdR9AYf)
# 🌐 Mon Projet Vue.js & Vuetify

## 1. 🎨 Présentation du projet

### Concept
- API choisie et pourquoi
  - J'ai choisi une API sur les différents Amiibo des jeux Nintendo, j'ai toujours apprécié cet univers et je veux pouvoir faire en sorte qu'on puisse consulter certains Amiibo afin de voir leurs détails comme nom, dates de sorties, jeux
- Public cible
  - Le publique cible serait les utilisateurs des produits Nintendo qui nécessite ou dispode de la fonctionnalité des Amiibo.
- Objectifs de l’application
  L'objectif de mon application est d'afficher tout les Amiibo de l'API afin que les utilisateurs puissent consulter leur descriptions et caractéristiques, pouvoir les enregistrer en favoris puis les rechercher
  
### Fonctionnalités principales
- Affichage d’une liste d’éléments (via API)
- Recherche / Tri / Filtres
  - il est possible de les filtrer par
    - défaut
    - série de jeux
    - date de sorti par continant
    - favoris
- Vue détail
  - sur la vue en détail on pourra consulter les éléments suivant :
    - description
    - date de sorti
    - le jeu
- Fonctionnalité interactive (favoris, watchlist, paramètres…)
  - L'intéraction qu'on pourra effectuer sera la mise en favoris de l'amiibo
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

## 2. 📚 Parcours d'apprentissage

### Ressources utilisées
Pour la réalisation de mon projet je me suis aidé des ressource suivantes :
- support de cours JS et VueJS du module 294
- stack overflow
- 
#### Documentation & tutos
- [Vue 3 Docs](https://vuejs.org/guide/introduction.html)
- [Vuetify Docs](https://vuetifyjs.com/en/components/all/)
- [Pinia Docs](https://pinia.vuejs.org/)
- [Public APIs List](https://github.com/public-apis/public-apis)
- Autres ressources...

#### Progression
- Semaine 1 : clonnage du répo GitHub, création de la page d'acueil avec un header qui comport différents éléments (logo, icons) et création d'une barre de recherche (non fonctionnelle)
- Semaine 2 : affichage de l'api sur la page d'accueil, création du composant de la carte Amiibo, affichage des amiibo sur la page, rendu la barre de recherche fonctionnel, pagination
- Semaine 3 : ajout de la fonctionnalité de filtrage, par favoris, par défaut, par série de jeu, par sortie (sortie par continant) -> USA, EU, AU, JO
- Semaine 4 : création du composants de la carte détail des Amiibo avec la fonction retour à la page d'accueil et création d'un chargement

---

## 3. 🛠️ Outils et méthodologie

### Environnement de développement
- **IDE** : WebStorm
- **Versioning** : Git + GitHub
- **Dépendances principales** : Vue 3, Vuetify 3, Pinia, Axios/Fetch
- **Gestion API Keys** : `.env` + `.env.example`

### Installation & Run
- Cloner le repo : pour cloner le repo on fait git clone https://github.com/divtec-cejef/m294-projet-vuetify-ChiupAlexs.git
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
  - barre de recherche, pagination, carte amiibo, carte détails, footer
- Props & Emits clairs
- Store global avec Pinia
- Commits réguliers et explicites
- Tests manuels (UI, persistance, erreurs API)

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
- **Nom** : ChatGPT
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
- Composants principaux : 80% personnel  
- Store & persistance : 50% personnel  
- Routing & navigation : 30% personnel  
- Tests & validation : 100% personnel  

### Apprentissage personnel
- Ce que j’ai appris grâce à l’IA
  - la fonctionnalité du routeur  
- Comment elle m’a aidé à progresser
  - j'ai essayé de créer un routeur pour la navigation puis je me suis aidé de l'IA pour comprendre correctement avec des exemples.
---

## 6. 🎯 Bilan personnel

### Ce que j’ai appris
- Compétences techniques acquises  
- Découvertes surprenantes
  - VueJS est très pratique surtout pour les icons car on a pas besoin d'aller chercher des image sur internet on peut juste faire une balise <v-icon class="">mdi-exempleIcon</v-icon> et différents label (barre de recherche, pagination ...), la création de composant facilite beaucoup le code et un gain de temps   
- Concepts difficiles maîtrisés
  -   

### Difficultés rencontrées
- Problèmes techniques et solutions trouvées
  - Mes amiibo s'affichait en double à cause de mon fichier JSON de secours qui me servira si mon API n'est plus disponible, qui écrasait les données de l'API.  
- Moments de blocage et dépassement
  - La gestion des trie par continant  
- Aide reçue et sources
  - pour l'affichage de l'API j'ai demandé à Monsieur Tirole de m'aider  

### Réussites et fiertés
- Aspects du projet dont je suis fier
  - l'utilisation de l'API dans mon projet
  - les favoris qui reste mémoré même quand on rafraichit la page  
- Progrès constatés depuis le début
  - 

### Améliorations possibles
- Ce que j’ajouterais avec plus de temps :
  - Le faite de voir dans quel jeu on peut utiliser les différents Amiibo
  - Ce que les Amiibo donnerais dans les différents jeux
  - Trier par items qui peut être recupérer par jeu 
- Fonctionnalités bonus envisagées :
  - correction de l'UI/UX
  - Fonctionnalité du retour à l'accueil en appuyant sur le logo "amiibo"
- Compétences à approfondir
  - 

---

## 7. 📚 Références & Sources
- Documentation de l’API : [AmiiboAPI](https://amiiboapi.com/docs/)  
- Usage de l’IA : voir section ci-dessus  
