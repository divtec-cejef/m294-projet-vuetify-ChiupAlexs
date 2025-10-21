<template>
  <v-app>
    <header>
      <div class="header-container">
        <div class="app-header">
          <img alt="Logo du site" class="logo" src="@/assets/logo-amiibo.png" />
        </div>
      </div>
    </header>
    <main>
      <h1>Bienvenu chez les Amiibo</h1>
      <div class="search-bar">
        <v-text-field placeholder="Rechercher un amiibo" />
        <v-icon icon="mdi-magnify" />
      </div>
    </main>
  </v-app>
</template>

<script setup>
import {onMounted} from 'vue'
import { useAppStore } from '@/stores/app'

const appStore = useAppStore() => {
  console.log(store.amiibo)
}
</script>
<style scoped lang="scss">

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
  color: #000;
}

.logo {
  width: 160px;
  height: 56px;
}

header {
  background: white;
  padding: 15px 30px;
  border-bottom: 1px solid #e0e0e0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header-container {
  display: flex;
}

main {
  background: #f9f9fb;
  padding: 30px;
}

.search-bar {
  display: flex;
  align-items: center;
  padding: 10px 15px;
  width: 100%;
  max-width: 500px;
}

v-text-field {
  margin-right: 10px;
  border-radius: 20px;
  border: 1px solid #e0e0e0;
  padding: 10px;
}

</style>
