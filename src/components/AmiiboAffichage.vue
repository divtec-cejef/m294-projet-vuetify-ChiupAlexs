<template>
  <div v-if="amiibo" class="details-container">
    <img :alt="amiibo.name" class="amiibo-image" :src="amiibo.image">
    <h1>{{ amiibo.name }}</h1>
    <p><strong>Série :</strong> {{ amiibo.gameSeries }}</p>
    <p><strong>Jeu :</strong> {{ amiibo.amiiboSeries }}</p>
    <p><strong>Date EU :</strong> {{ amiibo.release?.eu || 'N/A' }}</p>
    <p><strong>Date US :</strong> {{ amiibo.release?.na || 'N/A' }}</p>

    <button @click="$router.back()">⬅ Retour</button>
  </div>
</template>

<script setup>
  import { computed } from 'vue'
  import { useRoute } from 'vue-router'
  import { useAppStore } from '@/stores/app.js'

  const route = useRoute()
  const store = useAppStore()

  // On récupère l’amiibo à partir du paramètre d’URL
  const amiibo = computed(() =>
    store.amiibo.find(a => a.tail === route.params.id),
  )
</script>

<style scoped>
.details-container {
  text-align: center;
  padding: 40px;
}
.amiibo-image {
  width: 200px;
  border-radius: 12px;
  margin-bottom: 20px;
}
button {
  margin-top: 20px;
  background: #007bff;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 10px 20px;
  cursor: pointer;
}
button:hover {
  background: #0056b3;
}
</style>
