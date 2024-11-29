import { createRouter, createWebHistory } from 'vue-router';

// Import your components
import Profile from '@/views/UserProfile.vue';
import Showcase from '@/views/PortfolioShowcase.vue';
import Contact from '@/views/ContactPage.vue';
import Creative from '@/views/CreativePage.vue';
import Login from '@/views/UserLogin.vue';

// Define routes
const routes = [
  {
    path: '/',
    name: 'home',  // This will be the default route
    redirect: '/UserLogin',  // Redirect root to login page
  },
  {
    path: '/UserLogin',
    name: 'login',
    component: Login,  // Login page component
  },
  {
    path: '/portfolio/UserProfile',
    name: 'UserProfile',
    component: Profile,
  },
  {
    path: '/portfolio/PortfolioShowcase',
    name: 'PortfolioShowcase',
    component: Showcase,
  },
  {
    path: '/portfolio/ContactPage',
    name: 'ContactPage',
    component: Contact,
  },
  {
    path: '/portfolio/CreativePage',
    name: 'CreativePage',
    component: Creative,
  },
];

// Create router instance
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
