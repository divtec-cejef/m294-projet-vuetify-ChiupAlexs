<template>
  <v-app>
    <v-main>
      <header>
        <div class="header-container">
          <div class="app-header">
            <img alt="Logo du site" class="logo" src="@/assets/logo-amiibo.png">
          </div>
          <div class="navigation-container">
            <v-icon class="nav-icon-home">mdi-home</v-icon>
            <v-icon class="nav-icon-heart">mdi-heart</v-icon>
          </div>
        </div>
      </header>

      <main>
        <h1 class="titre">Bienvenue chez les Amiibo</h1>
        <AmiiboList />
      </main>
    </v-main>
  </v-app>
</template>

<script setup>
  import { onMounted } from 'vue'
  import AmiiboList from '@/components/AmiiboList.vue'
  import BarreRecherche from '@/components/BarreRecherche.vue'
  import { useAppStore } from '@/stores/app'

  const appStore = useAppStore()

  onMounted(() => {
    appStore.init()
    console.log(appStore.amiibo)
  })
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

.logo:hover {
  transform-style: preserve-3d;
  transition: 1s;
  transform: scale(1.1);
}

header {
  background: white;
  padding: 15px 30px;
  border-bottom: 1px solid #e0e0e0;
  justify-content: space-between;
  align-items: center;
  border-radius: 30px;
}

.header-container {
  display: flex;
  justify-content: space-between;
}

main {
  background: #f9f9fb;
  padding: 30px;
}

.nav-icon-heart, .nav-icon-home {
  cursor: pointer;
  margin: 15px;
}

.navigation-container {
  display: flex;
  align-items: center;
  justify-content: center;
}

.nav-icon-heart:hover {
  transform-style: preserve-3d;
  transition: 0.5s;
  color: orange;
}

.nav-icon-home:hover {
  transform-style: preserve-3d;
  transition: 0.5s;
  color: darkcyan;
}

.titre {
  text-align: center;
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
