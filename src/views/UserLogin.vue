<template>
  <div class="Login">
    <h1>Login Page</h1>
    <form @submit.prevent="handleLogin">
      <div>
        <label for="username">Username:</label>
        <input
          type="text"
          id="username"
          v-model="username"
          placeholder="Enter username"
          required
        />
      </div>
      
      <div>
        <label for="password">Password:</label>
        <input
          type="password"
          id="password"
          v-model="password"
          placeholder="Enter password"
          required
        />
      </div>

      <button type="submit">Login</button>
    </form>

    <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
  </div>

  <!-- Dust particles -->
  <div class="dust">
    <div class="starsec"></div>
    <div class="starthird"></div>
    <div class="starfourth"></div>
    <div class="starfifth"></div>
    <div class="starextra1"></div>
    <div class="starextra2"></div>
    <div class="starextra3"></div>
    <div class="starextra4"></div>
    <div class="starextra5"></div>
    <div class="starextra6"></div>
  </div>
</template>

<script>
export default {
  name: 'UserLogin',
  data() {
    return {
      username: '',
      password: '',
      errorMessage: '',
    };
  },
  methods: {
    handleLogin() {

      if (this.username === 'admin' && this.password === 'password') {
        this.$router.push('/portfolio/UserProfile'); 
      } else {
        this.errorMessage = 'Invalid username or password.';
      }
    },
  }
};
</script>

<style>
body {
  background-color: rgb(2, 2, 75); /* Navy blue background */
  height: 100vh; /* Full height for the page */
  margin: 0;
  position: relative;
  overflow: hidden;
}

/* Dust particle animation */
@keyframes dustUpAnimation {
  0% {
    transform: translate(0, 100vh); /* Start from the bottom */
    opacity: 1; /* Fully visible when they appear */
  }
  100% {
    transform: translate(0, -1000px); /* Move particles upwards */
    opacity: 0; /* Fade out as they go up */
  }
}


.starsec, .starthird, .starfourth, .starfifth, 
.starextra1, .starextra2, .starextra3, .starextra4, 
.starextra5, .starextra6 {
  position: absolute;
  bottom: 0; 
  width: 15px; 
  height: 15px; 
  border-radius: 50%;
  animation: dustUpAnimation 4s linear infinite; /* Animation duration and loop */
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.8); /* Glowing effect for particles */
}

.starsec {
  left: 10%;
  background-color: #ff5733; /* Orange-red */
  animation-duration: 4s;
}

.starthird {
  left: 20%;
  background-color: #33ff57; /* Green */
  animation-duration: 4.5s;
}

.starfourth {
  left: 30%;
  background-color: #338aff; /* Blue */
  animation-duration: 5s;
}

.starfifth {
  left: 40%;
  background-color: #ff33a1; /* Pink */
  animation-duration: 5.5s;
}

.starextra1 {
  left: 50%;
  background-color: #ffff33; /* Yellow */
  animation-duration: 6s;
}

.starextra2 {
  left: 60%;
  background-color: #ff6633; /* Deep Orange */
  animation-duration: 6.5s;
}

.starextra3 {
  left: 70%;
  background-color: #ff33ff; /* Magenta */
  animation-duration: 7s;
}

.starextra4 {
  left: 80%;
  background-color: #33ffff; /* Cyan */
  animation-duration: 7.5s;
}

.starextra5 {
  left: 90%;
  background-color: #33cc33; /* Forest Green */
  animation-duration: 8s;
}

.starextra6 {
  left: 5%;
  background-color: #cc33ff; /* Violet */
  animation-duration: 8.5s;
}

/* Increase the number of particles for more visibility */
.starsec:nth-child(1), .starthird:nth-child(2), .starfourth:nth-child(3), .starfifth:nth-child(4) {
  animation-delay: 0s;
}

.starsec:nth-child(5), .starthird:nth-child(6), .starfourth:nth-child(7), .starfifth:nth-child(8) {
  animation-delay: 2s;
}

.starsec:nth-child(9), .starthird:nth-child(10), .starfourth:nth-child(11), .starfifth:nth-child(12) {
  animation-delay: 4s;
}


/* Login container with white background */
.Login {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  background-color: white; /* White background for the login form */
  z-index: 20; /* Above dust particles */
  position: relative;
}

h1 {
  text-align: center;
}

form div {
  margin-bottom: 15px;
}

label {
  display: block;
  font-weight: bold;
}

input {
  width: 100%;
  padding: 10px;
  margin-top: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

button {
  width: 100%;
  padding: 10px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #45a049;
}

.error {
  color: red;
  text-align: center;
  margin-top: 10px;
}
</style>
