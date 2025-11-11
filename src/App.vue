<template>
  <!-- Le composant racine de l'application -->
  <v-app>
    <!-- conteneur principal du contenu -->
    <v-main
      style="
      background: #f9f9fb;
      padding: 30px;
      min-height: 100vh;"
    >
      <!-- En-tête du site -->
      <header>
        <div class="app-header">
          <!-- Logo du site -->
          <img
            alt="Logo du site"
            class="logo"
            src="@/assets/logo-amiibo.png"
          >
        </div>
      </header>

      <!-- Zone dynamique, affichent les pages selon la route actuelle -->
      <RouterView />
    </v-main>
  </v-app>
</template>

<script setup>
// Importation des éléments nécessaires pour la navigation
  import { RouterLink, RouterView } from 'vue-router'
</script>

<style scoped lang="scss">
// Style par défaut pour la page
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
  color: #000;
}

// Style du logo dans l’en-tête
.logo {
  width: 160px;
  height: 56px;
}

// Animation légère au survol du logo
.logo:hover {
  transform-style: preserve-3d;
  transition: 1s;
  transform: scale(1.1);
}

/* Style du header */
header {
  background: white;
  padding: 15px 30px;
  border-bottom: 1px solid #e0e0e0;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
}
</style>
