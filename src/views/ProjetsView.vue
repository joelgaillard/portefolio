<template>
    <h1>Projets</h1>
    <div class="projects-container">
        <Project 
            v-for="projet in projets" 
            :key="projet.id"
            :id="projet.id"
            :name="projet.name"
            :image_url="projet.images[0]"
        />
    </div>
</template>

<script setup>
import Project from '../components/Project.vue';

import projetsData from '../../public/projects.json';

const projets = projetsData.projects;

console.log(projets);

</script>

<style scoped>
.projects-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
}

@media (max-width: 1200px) {
    .projects-container {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (max-width: 768px) {
    .projects-container {
        grid-template-columns: 1fr;
    }
}
</style>