<template>
  <div class="recherche-container">
    <!-- Barre de recherche -->
    <div class="search-bar">
      <input
        v-model="searchQuery"
        placeholder="Rechercher un Amiibo..."
        type="text"
      >
    </div>

  </div>
</template>
<script setup>
  import { computed, ref } from 'vue'

  const searchQuery = ref('')

  // Filtrage
  const filteredAmiibo = computed(() => {
    const query = searchQuery.value.toLowerCase().trim()
    if (!query) return store.getamiibo
    return store.getamiibo.filter(a =>
      a.name.toLowerCase().includes(query)
      || a.gameSeries.toLowerCase().includes(query),
    )
  })
</script>
<style scoped lang="scss">
.search-bar {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

.search-bar input {
  width: 300px;
  padding: 10px 15px;
  border-radius: 8px;
  border: 1px solid #ccc;
  font-size: 16px;
  outline: none;
  transition: border-color 0.3s;
}

.search-bar input:focus {
  border-color: #007bff;
}

.no-results {
  margin-top: 40px;
  color: #777;
  font-size: 18px;
}
</style>
