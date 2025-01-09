<template>
  <button @click="handleClick">
    {{ text }}
  </button>
</template>

<script setup>

const props = defineProps({
  text: {
    type: String,
    required: true
  },
  link: {
    type: String,
    default: ''
  }
})

const emits = defineEmits(['click'])

function handleClick(event) {
  if (props.link) {
    window.open(props.link, '_blank', 'noopener,noreferrer')
  } else {
    emits('click', event)
  }
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

.secondary {
  background-color: var(--background-color);
  color: var(--primary-color);
}

@media (min-width: 1024px) {
  .main:hover {
  color: var(--primary-color);
  background-color: var(--background-color);
  cursor: pointer;
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


}
</style>