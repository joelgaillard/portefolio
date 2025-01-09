<template>
  <header>
    <NavBar />
  </header>
  <main>
    <RouterView />
  </main>
  <MouseCircle class="cursor-element" />
</template>

<script setup>
import { RouterView } from 'vue-router';
import NavBar from './components/NavBar.vue';
import MouseCircle from './components/MouseCircle.vue';
</script>

<style scoped>
header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: var(--background-color);
  padding-left: 10%;
  padding-right: 10%;
  padding-top: 3rem;
  padding-bottom: 3rem;
}

main {
  margin-top: 8rem;
  padding-left: 10%;
  padding-right: 10%;
  padding-bottom: 3rem;
}

@media (max-width: 1024px) {
  .cursor-element {
    display: none;
  }

  header {
  padding-left: 4%;
  padding-right: 4%;
}

  main {
  padding-left: 4%;
  padding-right: 4%;
  padding-bottom: 3rem;
}

}
</style>
