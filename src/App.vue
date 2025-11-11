<template>
  <v-app>
    <v-main
      style="
      background: #f9f9fb;
      padding: 30px;
      min-height: 100vh;"
    >
      <header>
        <div class="app-header">
          <img alt="Logo du site" class="logo" src="@/assets/logo-amiibo.png">
        </div>
      </header>

      <!-- routeur affichera la bonne page -->
      <RouterView />
    </v-main>
  </v-app>
</template>

<script setup>
  import { RouterLink, RouterView } from 'vue-router'
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
  justify-content: center;
  align-items: center;
  border-radius: 30px;
}
</style>
