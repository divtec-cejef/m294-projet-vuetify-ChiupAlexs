<template>
  <v-app>
    <header>
      <div class="header-container">
        <div class="app-header">
          <img alt="Logo du site" class="logo" src="" />
          <h1>AMIIBO</h1>
        </div>
      </div>
    </header>
    <main>
      <h1 class="NosParfums">Bienvenu chez les Amiibo</h1>
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
