<template>
  <v-app>
    <v-main>
      <header>
        <div class="header-container">
          <div class="app-header">
            <img alt="Logo du site" class="logo" src="@/assets/logo-amiibo.png">
          </div>
          <div class="navigation-container">
            <!-- Icône pour aller à la page d'accueil -->
            <RouterLink to="/">
              <v-icon class="nav-icon-home">mdi-home</v-icon>
            </RouterLink>

            <!-- Icône pour les favoris (à venir) -->
            <v-icon class="nav-icon-heart">mdi-heart</v-icon>
          </div>
        </div>
      </header>

      <!-- ICI, le routeur affichera la bonne page -->
      <RouterView />
    </v-main>
  </v-app>
</template>

<script setup>
import { RouterView, RouterLink } from 'vue-router'
</script>

<style scoped lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
  color: #000;
}

v-main {
  background: #f9f9fb;
  padding: 30px;
  min-height: 100vh;
}

/* --- reste inchangé --- */
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
  transition: 0.5s;
  color: orange;
}

.nav-icon-home:hover {
  transition: 0.5s;
  color: darkcyan;
}
</style>
