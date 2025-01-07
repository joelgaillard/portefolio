<template>
  <a v-if="link" :href="link" target="_blank" rel="noopener noreferrer">
    <button :class="class">{{ text }}</button>
  </a>
  <button v-else :class="class" @click="handleClick">
    {{ text }}
  </button>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'

const props = defineProps({
  text: {
    type: String,
    required: true
  },
  link: {
    type: String,
    default: ''
  },
  class: {
    type: String,
    default: ''
  }
})

const emits = defineEmits(['click'])

function handleClick(event) {
  emits('click', event)
}
</script>

<style scoped>
button {
  font-family: var(--accent-font);
  font-weight: bold;
  padding: 1rem;
  border: none;
  font-size: 1.15rem;
  border: 1px solid var(--primary-color);
}

.main {
  background-color: var(--primary-color);
  color: var(--background-color);
}

.main:hover {
  color: var(--primary-color);
  background-color: var(--background-color);
  cursor: pointer;
}

.secondary {
  background-color: var(--background-color);
  color: var(--primary-color);
}

.secondary:hover {
  color: var(--background-color);
  background-color: var(--primary-color);
  cursor: pointer;
}

@media (max-width: 1199px) {
  button {
    font-size: 1rem;
  }
}
</style>