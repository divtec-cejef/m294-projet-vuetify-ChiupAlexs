<template>
  <div v-if="amiibo" class="amiibo-detail">
    <router-link class="retour" to="/">← Retour à la liste</router-link>

    <div class="amiibo-content">
      <img :alt="amiibo.name" :src="amiibo.image">
      <div class="infos">
        <h1>{{ amiibo.name }}</h1>
        <p><strong>Série :</strong> {{ amiibo.gameSeries }}</p>
        <p><strong>Personnage :</strong> {{ amiibo.character }}</p>
        <p><strong>Type :</strong> {{ amiibo.type }}</p>

        <div v-if="amiibo.release">
          <h3>Dates de sortie :</h3>
          <ul>
            <li v-if="amiibo.release.eu">🇪🇺 Europe : {{ amiibo.release.eu }}</li>
            <li v-if="amiibo.release.na">🇺🇸 Amérique : {{ amiibo.release.na }}</li>
            <li v-if="amiibo.release.jp">🇯🇵 Japon : {{ amiibo.release.jp }}</li>
            <li v-if="amiibo.release.au">🇦🇺 Australie : {{ amiibo.release.au }}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>

  <div v-else class="loading">
    <p>Chargement des détails...</p>
  </div>
</template>

<script setup>
  import { onMounted, ref } from 'vue'
  import { useRoute } from 'vue-router'
  import { useAppStore } from '@/stores/app'

  const route = useRoute()
  const store = useAppStore()
  const amiibo = ref(null)

  onMounted(async () => {
    // S'assure que les données sont chargées
    if (store.amiibo.length === 0) {
      await store.init()
    }

    // Récupère l'id depuis l'URL
    const id = route.params.id
    amiibo.value = store.amiibo.find(a => a.tail === id)
  })
</script>

<style scoped>
.amiibo-detail {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  text-align: center;
}

.retour {
  align-self: flex-start;
  margin-bottom: 20px;
  text-decoration: none;
  color: #000000;
}

.retour:hover {
  text-decoration: none;
  color: darkcyan;
}

.amiibo-content {
  background-color: #f9f9f9;
  border-radius: 30px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  padding: 70px;
  display: flex;
  align-items: center;
  gap: 30px;
}

.amiibo-content img {
  width: 300px;
  max-width: 100%;
  height: auto;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
}

.infos {
  text-align: left;
  max-width: 400px;
  padding: 20px;
}

.loading {
  text-align: center;
  margin-top: 100px;
}

li {
  list-style: none;
}
</style>
