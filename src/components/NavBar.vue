<template>
    <nav class="navbar">
      <router-link class="navbar-item" to="/">Présentation</router-link>
      <router-link class="navbar-item" to="/projets">Projets</router-link>
      <router-link class="navbar-item" to="/contact">Contact</router-link>
      <button class="navbar-item" @click="toggleDarkMode">
        <i :class="isDarkMode ? 'fa-solid fa-lightbulb' : 'fas fa-moon'"></i>
      </button>
    </nav>
  </template>
  
  <script setup>
  import { ref, watch, onMounted } from 'vue';
  
  const isDarkMode = ref(false);
  
  function toggleDarkMode() {
    isDarkMode.value = !isDarkMode.value;
    if (isDarkMode.value) {
      document.documentElement.classList.add('dark-mode');
      document.documentElement.classList.remove('light-mode');
    } else {
      document.documentElement.classList.add('light-mode');
      document.documentElement.classList.remove('dark-mode');
    }
  }
  
  // Initialize dark mode based on user preference or saved preference
  onMounted(() => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      isDarkMode.value = true;
      document.documentElement.classList.add('dark-mode');
    } else {
      document.documentElement.classList.add('light-mode');
    }
  });
  
  // Watch for changes in isDarkMode to apply the correct class on load
  watch(isDarkMode, (newValue) => {
    if (newValue) {
      document.documentElement.classList.add('dark-mode');
      document.documentElement.classList.remove('light-mode');
    } else {
      document.documentElement.classList.add('light-mode');
      document.documentElement.classList.remove('dark-mode');
    }
  });
  </script>
  
  <style scoped>
  .navbar {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
  }
  
  .navbar-item {
    padding-left: 5rem;
    color: var(--text-color);
    text-decoration: none;
  }
  
  .navbar-item:hover {
    color: var(--primary-color);
  }
  
  .router-link-active {
    font-weight: bold;
    color: var(--primary-color);
  }
  
  button {
    background: none;
    border: none;
    cursor: pointer;
    color: var(--text-color);
    font-size: 1rem;
  }
  
  button:hover {
    color: var(--primary-color);
  }
  </style>