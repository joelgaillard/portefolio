import { createRouter, createWebHistory } from 'vue-router'
import PresentView from '../views/PresentView.vue'
import ProjetsView from '../views/ProjetsView.vue'
import ProjetView from '../views/ProjetView.vue'
import ContactView from '../views/ContactView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'presentation',
      component: PresentView,
    },
    {
      path: '/projets',
      name: 'ProjetsView',
      component: ProjetsView,
    },
    {
      path: '/projets/:id',
      name: 'ProjetView',
      component: ProjetView,
    },
    {
      path: '/contact',
      name: 'ContactView',
      component: ContactView,
    },
  ],
})

export default router
