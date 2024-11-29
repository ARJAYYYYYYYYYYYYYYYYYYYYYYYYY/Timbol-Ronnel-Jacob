<template>
  <div id="app">
    <!-- Conditionally render the Navbar only if not on the login page -->
    <Navbar v-if="!isLoginPage" />

    <!-- Render the current route's component here -->
    <router-view></router-view>
  </div>
</template>

<script>
// Import Navbar component
import Navbar from './components/NavbarSide.vue';

export default {
  name: 'App',
  components: {
    Navbar
  },
  computed: {
    // Check if the current route is the login page
    isLoginPage() {
      return this.$route.path === '/UserLogin'; // Adjust route name if necessary
    }
  }
};
</script>

<style>
/* Add global styles here */
</style>
