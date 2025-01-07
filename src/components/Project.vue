<template>
    <div class="project-container" @click="navigateToProject">
        <div class="project-element image" :style="{ backgroundImage: `url(${image_url})` }"></div>
        <div class="project-element title">{{ name }}</div>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';
import { useRouter } from 'vue-router';

const props = defineProps({
    id: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    image_url: {
        type: String,
        required: true
    }
});

const router = useRouter();

const navigateToProject = () => {
    router.push(`/projets/${props.id}`);
};
</script>

<style scoped>
.project-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    cursor: pointer;
}

.project-element {
    width: 100%;
}

.image {
    aspect-ratio: 4/3;
    background-size: cover;
    background-position: top;
}

.title {
    padding-top: 1rem;
    padding-bottom: 1rem;
    font-size: 1.5rem;
    font-weight: bold;
    text-transform: uppercase;
    background-color: var(--primary-color-light);
    color: white;
    text-align: center;
}
</style>
