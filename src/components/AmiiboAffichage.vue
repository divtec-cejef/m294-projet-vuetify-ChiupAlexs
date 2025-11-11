<template>
  <!-- On affiche le contenu uniquement si un amiibo est séléctionné -->
  <div v-if="amiibo" class="details-container">

    <!-- Image principale de l’Amiibo -->
    <img
      :alt="amiibo.name"
      class="amiibo-image"
      :src="amiibo.image"
    >

    <!-- Nom de l’Amiibo -->
    <h1>{{ amiibo.name }}</h1>

    <!-- Informations détaillées sur l’Amiibo -->
    <p><strong>Série :</strong> {{ amiibo.gameSeries }}</p>
    <p><strong>Jeu :</strong> {{ amiibo.amiiboSeries }}</p>

    <!-- Dates de sortie par continant avec valeur par défaut "N/A" -->
    <p><strong>Date EU :</strong> {{ amiibo.release?.eu || 'N/A' }}</p>
    <p><strong>Date US :</strong> {{ amiibo.release?.na || 'N/A' }}</p>

    <!-- Bouton pour revenir à la page précédente -->
    <button @click="$router.back()">Retour</button>
  </div>
</template>

<script setup>
// Importation des outils Vue nécessaires
  import { computed } from 'vue'
  import { useRoute } from 'vue-router'

  // Importation du store principal contenant les données Amiibo
  import { useAppStore } from '@/stores/app.js'

  // Accès à la route actuelle qui permet de lire le paramètre d’URL
  const route = useRoute()

  // Accès au store
  const store = useAppStore()

  const amiibo = computed(() =>
    store.amiibo.find(a => a.tail === route.params.id),
  )
</script>

<style scoped>
// Conteneur principal
.details-container {
  text-align: center;
  padding: 40px;
}

// Image de l’Amiibo
.amiibo-image {
  width: 200px;
  border-radius: 12px;
  margin-bottom: 20px;
}

// Bouton de retour
button {
  margin-top: 20px;
  background: #007bff;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 10px 20px;
  cursor: pointer;
  transition: background 0.3s ease;
}

button:hover {
  background: #0056b3;
}
</style>
