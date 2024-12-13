<template>
  <a :href="link" target="_blank" rel="noopener noreferrer">
    <button>
      {{ text }}
    </button>
  </a>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  text: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: true
  }
});
</script>


<style scoped>
button {
  font-family: var(--accent-font);
  font-weight: bold;
  padding: 1rem;
  background-color: var(--color-background);
  color: var(--primary-color);
  border: 1px solid var(--primary-color);
  font-size: 1.5rem;
}

button:hover {
  color: var(--color-background);
  background-color: var(--primary-color);
  border: 1px solid var(--primary-color);
  cursor: pointer;
}
@media (min-width: 992px) and (max-width: 1199px) {
  button {
    font-size: 1.25rem;
  }
}

@media screen and (max-width: 991px) {
  button {
    font-size: 1rem;
  }
  
}
</style>