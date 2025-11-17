<template>
  <!-- Conteneur principal affiché seulement s’il y a plus d’une page -->
  <div v-if="totalPages > 1" class="pagination">

    <!-- Bouton précédent désactivé si on est déjà sur la première page -->
    <button :disabled="page === 1" @click="updatePage(page - 1)">◀</button>

    <!-- Boucle sur le nombre total de pages -->
    <button
      v-for="p in totalPages"
      :key="p"
      :class="{ active: page === p }"
      @click="updatePage(p)"
    >
      {{ p }}
    </button>

    <!-- Bouton suivant désactivé si on est sur la dernière page -->
    <button :disabled="page === totalPages" @click="updatePage(page + 1)">▶</button>
  </div>
</template>

<script setup>
// Importation de 'computed' pour calculer automatiquement le nombre total de pages à partir des données reçues.
  import { computed } from 'vue'

  // Définition des props reçues depuis le composant parent
  const props = defineProps({
    totalItems: { type: Number, required: true },
    itemsPerPage: { type: Number, default: 48 },
    page: { type: Number, default: 1 },
  })

  const emit = defineEmits(['update:page'])

  // Calcule le nombre total de pages nécessaires
  const totalPages = computed(() =>
    Math.ceil(props.totalItems / props.itemsPerPage),
  )

  //  Fonction appelée lorsqu’on clique sur un bouton de pagination qui vérifie que la nouvelle page est dans la plage valide
  function updatePage (newPage) {
    if (newPage >= 1 && newPage <= totalPages.value) {
      emit('update:page', newPage)
    }
  }
</script>

<style scoped>
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
</style>
