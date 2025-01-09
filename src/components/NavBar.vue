<template>
  <nav class="navbar">
    <div class="mobile-icons">
      <button class="navbar-item dark-mode-btn" @click="toggleDarkMode">
        <i :class="isDarkMode ? 'fa-solid fa-lightbulb' : 'fas fa-moon'"></i>
      </button>
      <button class="burger-btn" @click="toggleMenu" aria-label="Menu">
        <i :class="isMenuOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'"></i>
      </button>
    </div>
    <div :class="['navbar-content', { 'open': isMenuOpen }]">
      <router-link class="navbar-item" to="/" @click="closeMenu">Présentation</router-link>
      <router-link class="navbar-item" to="/projets" @click="closeMenu">Projets</router-link>
      <router-link class="navbar-item" to="/contact" @click="closeMenu">Contact</router-link>
      <button class="navbar-item dark-mode-btn desktop-only" @click="toggleDarkMode">
        <i :class="isDarkMode ? 'fa-solid fa-lightbulb' : 'fas fa-moon'"></i>
      </button>
    </div>
  </nav>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue';

const isMenuOpen = ref(false);

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value;
  document.body.style.overflow = isMenuOpen.value ? 'hidden' : '';
}

function closeMenu() {
  isMenuOpen.value = false;
  document.body.style.overflow = '';
}

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
  color: var(--text-color);
  text-decoration: none;
  font-size: 1rem;
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


.mobile-icons {
  display: none;
}

@media (max-width: 768px) {
  .mobile-icons {
    display: flex;
    gap: 1rem;
    z-index: 1000;
  }

  .navbar {
    background-color: var(--background-color);
  }

  .navbar-content {
    position: fixed;
    inset: 0;
    background: var(--background-color);
    display: flex;
    flex-direction: column;
    gap: 3rem;
    transform: translateX(100%);
    transition: transform 0.3s ease;
    z-index: 999;
    align-items: center;
    padding-top: 50%;
  }

  .navbar-content.open {
    transform: translateX(0);
  }

  .desktop-only {
    display: none;
  }
}

@media (min-width: 769px) {
  .mobile-icons {
    display: none;
  }

  .navbar-item {
    padding-left: 5rem;
  }

  button:hover {
  color: var(--primary-color);
}

  .navbar-item:hover {
  color: var(--primary-color);
}

}

</style>