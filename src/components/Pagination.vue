<template>
  <!-- Pagination -->
  <div class="pagination">
    <button :disabled="currentPage === 1" @click="currentPage--">◀</button>
    <button
      v-for="page in totalPages"
      :key="page"
      :class="{ active: currentPage === page }"
      @click="currentPage = page"
    >
      {{ page }}
    </button>
    <button :disabled="currentPage === totalPages" @click="currentPage++">▶</button>
  </div>
</template>
<script setup>

  import { computed, ref, watch } from 'vue'

  const currentPage = ref(1)
  const itemsPerPage = 48

  // Pagination pour résultats filtrés
  const paginatedAmiibo = computed(() => {
    const start = (currentPage.value - 1) * itemsPerPage
    const end = start + itemsPerPage
    return filteredAmiibo.value.slice(start, end)
  })

  const totalPages = computed(() =>
    Math.ceil(filteredAmiibo.value.length / itemsPerPage),
  )

  // Reset la pagination à 1 quand on recherche
  watch(searchQuery, () => {
    currentPage.value = 1
  })

</script>
<style scoped lang="scss">

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
