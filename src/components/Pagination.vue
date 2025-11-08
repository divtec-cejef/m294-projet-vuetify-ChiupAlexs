<template>
  <div class="pagination" v-if="totalPages > 1">
    <button :disabled="page === 1" @click="updatePage(page - 1)">◀</button>

    <button
      v-for="p in totalPages"
      :key="p"
      :class="{ active: page === p }"
      @click="updatePage(p)"
    >
      {{ p }}
    </button>

    <button :disabled="page === totalPages" @click="updatePage(page + 1)">▶</button>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  totalItems: { type: Number, required: true },
  itemsPerPage: { type: Number, default: 48 },
  page: { type: Number, default: 1 }
})

const emit = defineEmits(['update:page'])

const totalPages = computed(() =>
  Math.ceil(props.totalItems / props.itemsPerPage)
)

function updatePage(newPage) {
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
