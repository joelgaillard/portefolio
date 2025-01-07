<template>
  <div v-if="projet" class="projet-container">
    <h1 class="projet-element name">{{ projet.name }}</h1>
    <img class="projet-element image" :src="`/${projet.images[0]}`" alt="Image du projet">
    <div class="projet-element description">
      <h2>Description du projet</h2>
      <div>{{ projet.description }}</div>
    </div>
    <div v-if="projet.theme" class="projet-element theme">
      <div class="title">Thème :</div>
      <div>{{ projet.theme }}</div>
    </div>
    <div v-if="projet.content" class="projet-element content">
      <div v-if="projet.content.features" class="projet-element features">
        <div class="title">Fonctionnalités : </div>
        <div v-if="typeof projet.content.features[0] === 'string'">
          <div v-for="feature in projet.content.features" :key="feature">
            • {{ feature }}
          </div>
        </div>
        <div v-else>
          <div v-for="feature in projet.content.features" :key="feature.details">
            <div v-if="feature.title" class="subtitle">{{ feature.title }} :</div>
            <div v-for="detail in feature.details" :key="detail">
              • {{ detail }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="projet.technologies" class="projet-element technologies">
      <div class="title">Technologies utilisées : </div>
      <div v-for="(technologies, category) in projet.technologies" :key="category">
        <div class="category">{{ category }} :</div>
        <div v-for="tech in technologies" :key="tech">
          • {{ tech }}
        </div>
        <div class="space"></div>
      </div>
    </div>
    <div v-if="projet.role" class="projet-element role">
  <div class="title">Mon rôle : </div>
  <!-- Si c'est un tableau de strings -->
  <div v-if="Array.isArray(projet.role)">
    <div v-for="role in projet.role" :key="role">
      • {{ role }}
    </div>
  </div>
  <!-- Si c'est un objet avec des catégories -->
  <div v-else>
    <div v-for="(roles, category) in projet.role" :key="category">
      <div class="category">{{ category }} :</div>
      <div v-for="role in roles" :key="role">
        • {{ role }}
      </div>
      <div class="space"></div>
    </div>
  </div>
</div>    <div v-if="projet.competences" class="projet-element competences">
      <div>{{ projet.competences }}</div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import projetsData from '../../public/projects.json';

const route = useRoute();
const projet = ref(null);

onMounted(() => {
  const id = Number(route.params.id);
  projet.value = projetsData.projects.find(p => p.id === id);
});

console.log(projet);
</script>

<style scoped>
.projet-container {
  display: flex;
  flex-direction: column;
}

.title {
  font-weight: bold;
  padding-top: 1rem;
}


.space {
  padding-bottom: 1rem;
}


img {
  width: 100%;
}
</style>