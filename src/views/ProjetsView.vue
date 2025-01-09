<template>
    <h1>Projets</h1>
    <div class="filter-container">
        <Button 
            v-for="theme in themes" 
            :key="theme"
            :text="theme"
            :class="selectedTheme === theme ? 'main' : 'secondary'"
            class="theme-button"
            @click="filterByTheme(theme)"
        />
    </div>
    <div class="projects-container">
        <Project 
            v-for="projet in filteredProjets" 
            :key="projet.id"
            :id="projet.id"
            :name="projet.name"
            :image_url="projet.images[0]"
        />
    </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import Project from '../components/Project.vue';
import Button from '../components/Button.vue';
import projetsData from '../../public/projects.json';

const projets = projetsData.projects;
const selectedTheme = ref('Tous les projets');

// Extraire tous les thèmes uniques
const themes = computed(() => {
    const uniqueThemes = ['Tous les projets', ...new Set(projets.map(p => p.theme))];
    return uniqueThemes;
});

// Filtrer les projets par thème
const filteredProjets = computed(() => {
    if (selectedTheme.value === 'Tous les projets') return projets;
    return projets.filter(p => p.theme === selectedTheme.value);
});

function filterByTheme(theme) {
    selectedTheme.value = theme;
}
</script>

<style scoped>
.projects-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
}

.filter-container {
    display: flex;
    gap: 1rem;
    margin-bottom: 1rem;
    width: 100%;
    overflow-x: auto;
    white-space: nowrap;
    -webkit-overflow-scrolling: touch;
    scrollbar-width: none;  /* Pour Firefox */
    -ms-overflow-style: none;  /* Pour IE et Edge */
    padding-bottom: 0.5rem;  /* Espace pour le scroll */
}

.filter-container::-webkit-scrollbar {
    display: none;  /* Pour Chrome, Safari et Opera */
}

.theme-button {
    font-size: 1rem;
    padding: 0.5rem 1rem;
    flex-shrink: 0;  /* Empêche les boutons de rétrécir */
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