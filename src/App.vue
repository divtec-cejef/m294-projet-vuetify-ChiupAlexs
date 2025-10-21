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
        <v-btn class="loupe-recherche" icon="mdi-magnify"></v-btn>
        <v-text-field placeholder="Rechercher un amiibo"></v-text-field>
        <v-btn color="primary" variant="tonal">Rechercher</v-btn>
      </div>
    </main>
  </v-app>
</template>

<script setup>
  //
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

</style>
