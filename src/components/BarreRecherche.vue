<template>
  <div class="recherche-container">
    <div class="search-bar">
      <input
        v-model="searchQuery"
        placeholder="Rechercher un Amiibo..."
        type="text"
      >

      <select v-model="sortKey">
        <option value="">Trier par défaut</option>
        <option value="gameSeries">Série de jeu</option>
        <option value="release">Date de sortie</option>
      </select>

      <select v-if="sortKey === 'release'" v-model="sortRegion">
        <option value="na">Amérique du Nord</option>
        <option value="eu">Europe</option>
        <option value="jp">Japon</option>
        <option value="au">Australie</option>
      </select>

      <select v-model="filter">
        <option value="all">Tous</option>
        <option value="favorites">Favoris ❤️</option>
      </select>
    </div>
  </div>
</template>

<script setup>
  import { storeToRefs } from 'pinia'
  import { useAppStore } from '@/stores/app'

  const store = useAppStore()
  const { searchQuery, sortKey, sortRegion, filter } = storeToRefs(store)
</script>

<style scoped lang="scss">
* {
  color: black;
}

.search-bar {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-bottom: 20px;
}

.search-bar input,
.search-bar select {
  padding: 10px 15px;
  border-radius: 8px;
  border: 1px solid #ccc;
  font-size: 16px;
  outline: none;
  transition: border-color 0.3s;
}

.search-bar input:focus,
.search-bar select:focus {
  border-color: #007bff;
}

.search-bar input {
  width: 300px;
}
</style>
