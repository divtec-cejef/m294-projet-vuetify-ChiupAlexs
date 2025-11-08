<template>
  <div class="recherche-container">
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
  import { storeToRefs } from 'pinia'
  import { useAppStore } from '@/stores/app'

  const store = useAppStore()
  const { searchQuery } = storeToRefs(store)
</script>

<style scoped lang="scss">
* {
  color: black;
}

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

</style>
