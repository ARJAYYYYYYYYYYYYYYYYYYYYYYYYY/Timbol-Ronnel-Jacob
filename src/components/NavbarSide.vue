<template>
  <nav class="navbar navbar-expand-custom navbar-mainbg">

    <button
      class="navbar-toggler"
      type="button"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
      @click="toggleNavbar"
    >
      <i class="fas fa-bars text-white"></i>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ml-auto">
        <div class="hori-selector" :style="selectorStyle">
          <div class="left"></div>
          <div class="right"></div>
        </div>

        <!-- Dynamically render router-links -->
        <li
          class="nav-item"
          v-for="(link, index) in navLinks"
          :key="index"
          :class="{'active': isActive(index)}"
          @click="setActive(index)"
          ref="navItem"
        >
          <router-link class="nav-link" :to="link.path" @click="setActive(index)">
            <i :class="link.icon"></i>{{ link.name }}
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavbarSide',
  data() {
    return {
      activeIndex: 0, // Default active index
      navLinks: [
        { name: 'Profile', path: '/portfolio/UserProfile', icon: 'fas fa-user' },
        { name: 'Showcase', path: '/portfolio/PortfolioShowcase', icon: 'fas fa-images' },
        { name: 'Contact', path: '/portfolio/ContactPage', icon: 'fas fa-address-book' },
        { name: 'Creative', path: '/portfolio/CreativePage', icon: 'fas fa-paint-brush' }
      ],
      selectorStyle: {
        top: '0px',
        left: '0px',
        height: '40px', // Default height
        width: '100px' // Default width
      }
    };
  },
  methods: {
    toggleNavbar() {
      const navbarCollapse = document.getElementById('navbarSupportedContent');
      navbarCollapse.classList.toggle('collapse');
      setTimeout(this.updateSelectorStyle, 300); // Adjust selector position after toggle
    },
    setActive(index) {
      this.activeIndex = index;
      this.updateSelectorStyle();
    },
    isActive(index) {
      return this.activeIndex === index;
    },
    updateSelectorStyle() {
      const activeItem = this.$refs.navItem[this.activeIndex];
      if (activeItem) {
        const { offsetTop, offsetLeft, offsetHeight, offsetWidth } = activeItem;
        this.selectorStyle = {
          top: `${offsetTop}px`,
          left: `${offsetLeft}px`,
          height: `${offsetHeight}px`,
          width: `${offsetWidth}px`
        };
      }
    }
  },
  mounted() {
    this.updateSelectorStyle();
    window.addEventListener('resize', this.updateSelectorStyle);
  },
  beforeUnmount() { // Changed from beforeDestroy to beforeUnmount
    window.removeEventListener('resize', this.updateSelectorStyle);
  },
  watch: {
    $route(to) {
      // Update the active state when the route changes
      this.activeIndex = this.navLinks.findIndex(link => link.path === to.path);
      this.updateSelectorStyle(); // Update selector style on route change
    }
  }
};
</script>

<style scoped>
/* Scoped styles from the original navbar */
.navbar-logo {
  padding: 15px;
  color: #fff;
}

.navbar-mainbg {
  background-color: #030306;
  padding: 0;
}

#navbarSupportedContent {
  overflow: hidden;
  position: relative;
}

#navbarSupportedContent ul {
  padding: 0;
  margin: 0;
}

#navbarSupportedContent ul li a i {
  margin-right: 10px;
}

#navbarSupportedContent li {
  list-style-type: none;
  float: left;
}

#navbarSupportedContent ul li a {
  color: rgba(255, 255, 255, 0.5);
  text-decoration: none;
  font-size: 15px;
  display: block;
  padding: 20px 20px;
  transition-duration: 0.6s;
  transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);
  position: relative;
  background-color: transparent; /* Remove background from normal state */
  border: none; /* Ensure no border is visible */
}

/* Active class should show the background color and move the shape */
#navbarSupportedContent > ul > li.active > a {
  color: #000000; /* Blue text for active link */
  background-color: transparent; /* Keep background transparent when clicked */
  transition: all 0.7s;
}

/* Remove hover background and just change the text color */
#navbarSupportedContent > ul > li > a:hover {
  color: #ffffff; /* Color change on hover */
  background-color: transparent; /* Keep background transparent */
}

.hori-selector {
  display: inline-block;
  position: absolute;
  height: 100%;
  top: 0;
  left: 0;
  transition-duration: 0.6s;
  transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);
  background-color: #fff;
  border-top-left-radius: 25px; /* Ensure rounded corners on the selector */
  border-top-right-radius: 25px;
  margin-top: 10px;
}

/* Hidden by default */
.hori-selector .right,
.hori-selector .left {
  position: absolute;
  width: 25px;
  height: 25px;
  background-color: transparent; /* Keep background transparent */
  bottom: 10px;
}

/* Hide the shape when hovering or clicking, only animate the position */
.hori-selector .right:before,
.hori-selector .left:before {
  content: '';
  position: absolute;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: transparent; /* Keep background transparent */
}

.hori-selector .right:before {
  bottom: 0;
  right: -25px;
}

.hori-selector .left:before {
  bottom: 0;
  left: -25px;
}

@media (min-width: 992px) {
  .navbar-expand-custom {
    -ms-flex-flow: row nowrap;
    flex-flow: row nowrap;
    -ms-flex-pack: start;
    justify-content: flex-start;
  }

  .navbar-expand-custom .navbar-nav {
    -ms-flex-direction: row;
    flex-direction: row;
  }

  .navbar-expand-custom .navbar-toggler {
    display: none;
  }

  .navbar-expand-custom .navbar-collapse {
    display: -ms-flexbox !important;
    display: flex !important;
    -ms-flex-preferred-size: auto;
    flex-basis: auto;
  }
}

@media (max-width: 991px) {
  #navbarSupportedContent ul li a {
    padding: 12px 30px;
  }

  .hori-selector {
    margin-top: 0;
    margin-left: 10px;
    border-radius: 0;
    border-top-left-radius: 25px;
    border-bottom-left-radius: 25px;
  }

  .hori-selector .left,
  .hori-selector .right {
    right: 10px;
  }

  .hori-selector .left {
    top: -25px;
    left: auto;
  }

  .hori-selector .right {
    bottom: -25px;
  }

  .hori-selector .left:before {
    left: -25px;
    top: -25px;
  }

  .hori-selector .right:before {
    bottom: -25px;
    left: -25px;
  }
}
</style>
