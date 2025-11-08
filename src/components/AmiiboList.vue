<template>
  <div class="amiibo-container">
    <h1>Liste des Amiibo</h1>

    <!-- Loader pendant le chargement -->
    <div v-if="loading" class="loader-container">
      <div class="loader" />
      <p>Chargement des Amiibo...</p>
    </div>

    <!-- Grille des Amiibo -->
    <div v-else-if="filteredAmiibo.length > 0">
      <div class="amiibo-grille">
        <div
          v-for="amiibo in paginatedAmiibo"
          :key="amiibo.tail"
          class="amiibo-card"
        >
          <img
            :alt="amiibo.name"
            :src="amiibo.image"
            @error="imageLoaded"
            @load="imageLoaded"
          >
          <h2>{{ amiibo.name }}</h2>
          <p>{{ amiibo.gameSeries }}</p>
          <button>
            <v-icon class="favoris">mdi-heart</v-icon>
          </button>
        </div>
      </div>
    </div>

    <div v-else class="no-results">
      <p>Aucun Amiibo trouvé pour "{{ searchQuery }}"</p>
    </div>
  </div>
</template>

<script setup>
  import { computed, onMounted, ref, watch } from 'vue'
  import { useAppStore } from '@/stores/app.js'

  const store = useAppStore()

  // États
  const loading = ref(true)

  // loader store
  watch(
    () => store.hasAmiibo,
    val => {
      if (val) setTimeout(() => (loading.value = false), 300)
    },
  )

  // chargement d’images
  let imagesLoadedCount = 0
  function imageLoaded () {
    imagesLoadedCount++
    const totalImages = paginatedAmiibo.value.length
    if (imagesLoadedCount >= totalImages) {
      loading.value = false
    }
  }

  onMounted(() => {
    store.init()
  })
</script>

<style scoped>
*{
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
  to { transform: rotate(360deg); }
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
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  transition: transform 0.2s ease;
}

.amiibo-card:hover {
  transform: scale(1.05);
}

.amiibo-card img {
  max-width: 50%;
  width: 100%;
  border-radius: 10px;
}

.favoris {
  color: #000000;
  float: left;
}

.favoris:hover {
  color: red;
  transform: scale(1.1);
  transition: 0.5s;
}
</style>
