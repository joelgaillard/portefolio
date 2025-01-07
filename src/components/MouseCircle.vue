<template>
    <div
      class="mouse-circle"
      :style="{ top: `${y}px`, left: `${x}px` }"
    ></div>
  </template>
  
  <script setup>
  import { ref, onMounted, onUnmounted } from 'vue';
  
  const x = ref(0);
  const y = ref(0);
  
  function updateMousePosition(event) {
    x.value = event.clientX;
    y.value = event.clientY;
  }
  
  onMounted(() => {
    window.addEventListener('mousemove', updateMousePosition);
  });
  
  onUnmounted(() => {
    window.removeEventListener('mousemove', updateMousePosition);
  });
  </script>
  
  <style scoped>
  .mouse-circle {
    position: fixed;
    width: 1rem;
    height: 1rem;
    background-color: var(--primary-color);
    opacity: 0.7;
    border-radius: 50%;
    pointer-events: none;
    transform: translate(-50%, -50%);
    z-index: 9999;
    padding: 0;
  }
  </style>
  