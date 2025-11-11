<template>
  <!-- Conteneur principal de la page d'accueil -->
  <div class="home-container">
    <!-- Titre principal de la page -->
    <h1 class="titre">Bienvenue chez les Amiibo</h1>

    <!-- Composant barre de recherche pour filtrer les Amiibo -->
    <BarreRecherche />
    <!-- Composant de la liste des Amiibo récupérés depuis l’API -->
    <AmiiboList />
    <!-- Composant de pagination pour naviguer entre les pages d’Amiibo -->
    <Pagination />
  </div>
</template>

<script setup>
// Importation des composants utilisés dans cette vue
  import AmiiboList from '@/components/AmiiboList.vue'
  import BarreRecherche from '@/components/BarreRecherche.vue'
  import Pagination from '@/components/Pagination.vue'
</script>

<style scoped lang="scss">
// Style par défaut pour la page
* {
  color: black;
}

.home-container {
  text-align: center;
}

.titre {
  font-size: 2rem;
  margin-bottom: 20px;
}
</style>
