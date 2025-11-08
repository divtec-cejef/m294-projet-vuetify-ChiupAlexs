<template>
  <div class="amiibo-container">
    <h1>Liste des Amiibo</h1>

    <!-- Loader -->
    <div v-if="loading" class="loader-container">
      <div class="loader" />
      <p>Chargement des Amiibo...</p>
    </div>

    <!-- Liste paginée -->
    <div v-else-if="filteredAmiibo.length > 0">
      <div class="amiibo-grille">
        <div
          v-for="amiibo in paginatedAmiibo"
          :key="amiibo.tail"
          class="amiibo-card"
        >
          <!-- lien vers la page détail pour chaque carte -->
          <router-link class="amiibo-link" :to="`/amiibo/${amiibo.tail}`">
            <img
              :alt="amiibo.name"
              :src="amiibo.image"
              @error="imageLoaded"
              @load="imageLoaded"
            >
            <h2>{{ amiibo.name }}</h2>
            <p>{{ amiibo.gameSeries }}</p>
          </router-link>

          <button @click="toggleFav(amiibo.tail)">
            <v-icon
              class="favoris"
              :style="{ color: isFavorite(amiibo.tail) ? 'red' : '#000' }"
            >
              mdi-heart
            </v-icon>
          </button>

        </div>
      </div>

      <!-- Pagination -->
      <Pagination
        v-model:page="currentPage"
        :items-per-page="itemsPerPage"
        :total-items="filteredAmiibo.length"
      />
    </div>

    <!-- Aucun résultat -->
    <div v-else class="no-results">
      <p>Aucun Amiibo trouvé pour "{{ searchQuery }}"</p>
    </div>
  </div>
</template>

<script setup>
  import { storeToRefs } from 'pinia'
  import { computed, onMounted, ref, watch } from 'vue'
  import { useAppStore } from '@/stores/app.js'
  import Pagination from './Pagination.vue'

  const store = useAppStore()
  const { searchQuery, filteredAmiibo, hasAmiibo } = storeToRefs(store)

  const loading = ref(true)
  const currentPage = ref(1)
  const itemsPerPage = 48

  // Amiibo paginés
  const paginatedAmiibo = computed(() => {
    const start = (currentPage.value - 1) * itemsPerPage
    const end = start + itemsPerPage
    return filteredAmiibo.value.slice(start, end)
  })

  // Reset page quand on fait une recherche
  watch(filteredAmiibo, () => {
    currentPage.value = 1
  })

  // Loader
  watch(hasAmiibo, val => {
    if (val) setTimeout(() => (loading.value = false), 300)
  })

  let imagesLoadedCount = 0
  function imageLoaded () {
    imagesLoadedCount++
    const totalImages = filteredAmiibo.value.length
    if (imagesLoadedCount >= totalImages) loading.value = false
  }

  onMounted(() => {
    store.init()
  })

  function toggleFav(tail) {
    store.toggleFavorite(tail)
  }

  function isFavorite(tail) {
    return store.isFavorite(tail)
  }

</script>

<style scoped>
* {
  color: black;
}

.amiibo-container {
  padding: 20px;
  text-align: center;
}

.loader-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 50%;
  padding: 70px;
  gap: 10px;
}

.loader {
  border: 6px solid #f3f3f3;
  border-top: 6px solid #007bff;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.amiibo-grille {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 25px;
  margin-top: 2rem;
}

.amiibo-card {
  background: #fff;
  border-radius: 12px;
  padding: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease;
  position: relative;
}

.amiibo-card:hover {
  transform: scale(1.05);
}

.amiibo-link {
  text-decoration: none;
  color: inherit;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.amiibo-link img {
  max-width: 50%;
  border-radius: 10px;
}

.favoris-btn {
  background: transparent;
  border: none;
  position: absolute;
  top: 8px;
  right: 8px;
}

.favoris {
  color: #000;
}

.favoris:hover {
  color: red;
  transform: scale(1.1);
  transition: 0.5s;
}

.pagination {
  display: flex;
  justify-content: center;
  gap: 5px;
  margin-top: 40px;
}
</style>
