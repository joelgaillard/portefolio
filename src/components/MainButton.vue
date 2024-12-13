<template>
  <button @click="handleClick">
    {{ text }}
  </button>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'

const props = defineProps({
  text: {
    type: String,
    required: true
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
  background-color: var(--primary-color);
  color: var(--color-background);
  border: none;
  font-size: 1.5rem;
  border: 1px solid var(--primary-color);

}

button:hover {
  color: var(--primary-color);
  background-color: var(--background-color);
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