<template>
  <div class="home-container">
    <h1 class="titre">Bienvenue chez les Amiibo</h1>
    <BarreRecherche />
    <AmiiboList />
    <Pagination />
  </div>
</template>

<script setup>
  import AmiiboList from '@/components/AmiiboList.vue'
  import BarreRecherche from '@/components/BarreRecherche.vue'
  import Pagination from '@/components/Pagination.vue'
</script>

<style scoped lang="scss">
.home-container {
  text-align: center;
}

.titre {
  font-size: 2rem;
  margin-bottom: 20px;
}
</style>
