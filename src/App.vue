<template>
  <header>
    <NavBar />
  </header>
  <main>
    <RouterView />
  </main>
</template>

<script setup>
import {RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue';
</script>

<style scoped>
  * {
    padding-top: 1rem;
    padding-left: 5%;
    padding-right: 5%;
    padding-bottom: 3rem;
  }

</style>