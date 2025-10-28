<template>
  <div class="amiibo-container">
    <h1>Liste des Amiibo</h1>
    <div v-if="store.hasAmiibo">
      <div class="amiibo-grille">
        <div
          v-for="amiibo in paginatedAmiibo"
          :key="amiibo.tail"
          class="amiibo-card"
        >
          <img :alt="amiibo.name" :src="amiibo.image">
          <h2>{{ amiibo.name }}</h2>
          <p>{{ amiibo.gameSeries }}</p>
          <button>
            <v-icon class="favoris">mdi-heart</v-icon>
          </button>
        </div>
      </div>

      <div class="pagination">
        <button
          :disabled="currentPage === 1"
          @click="currentPage--"
        >
        </button>

        <button
          v-for="page in totalPages"
          :key="page"
          :class="{ active: currentPage === page }"
          @click="currentPage = page"
        >
          {{ page }}
        </button>

        <button
          :disabled="currentPage === totalPages"
          @click="currentPage++"
        >
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { computed, onMounted, ref } from 'vue'
  import { useAppStore } from '@/stores/app.js'

  const store = useAppStore()

  // Pagination
  const currentPage = ref(1)
  // Nombre d'amiibo par page
  const itemsPerPage = 48

  // Calcule les amiibo à afficher selon la page
  const paginatedAmiibo = computed(() => {
    const start = (currentPage.value - 1) * itemsPerPage
    const end = start + itemsPerPage
    return store.getamiibo.slice(start, end)
  })

  // Calcule le nombre total de pages
  const totalPages = computed(() =>
    Math.ceil(store.getamiibo.length / itemsPerPage),
  )

  onMounted(() => {
    store.init()
  })
</script>

<style scoped>
.amiibo-container {
  padding: 20px;
  text-align: center;
}

.amiibo-grille {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
}

.amiibo-card {
  background: #fff;
  border-radius: 12px;
  padding: 1rem;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  transition: transform 0.2s ease;
}

.amiibo-card:hover {
  transform: scale(1.05);
}

.amiibo-card img {
  width: 100%;
  border-radius: 10px;
}

.pagination {
  display: flex;
  justify-content: center;
  gap: 5px;
  margin-top: 40px;
}

.pagination button {
  border: none;
  background: #ddd;
  padding: 10px 15px;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s;
}

.pagination button.active {
  background: #007bff;
  color: white;
}

.pagination button:hover:not(:disabled) {
  background: #007bff;
  color: white;
}

.pagination button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.pagination favoris.active {
  background: #007bff;
  color: white;
}

.favoris {
  color: #000000;
  float: left;
}

.favoris:hover {
  color: red;
  transform: scale(1.2);
}

</style>
