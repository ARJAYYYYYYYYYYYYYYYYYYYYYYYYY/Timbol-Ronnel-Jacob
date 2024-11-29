<template>
  <div class="wrapper">
    <div class="profile-card">
      <div class="profile-card__img">
        <!-- Replace the link below with your actual image URL -->
        <img src="../assets/Profile.jpg" alt="Profile Image" />
      </div>
      <div class="profile-card__cnt">
        <div class="profile-card__name">Timbol Ronnel Jacob M.</div>
        <div class="profile-card__txt">Computer Engineering</div>
        <div class="profile-card__bio">
          <p>Sample bio: I am a Computer Engineering student with a passion for software development, robotics, and technology. I enjoy working on real-world projects and collaborating with others to solve complex problems.</p>
        </div>
        <div class="profile-card__details">
          <p><strong>Age:</strong> 23</p>
          <p><strong>Location:</strong> Manila, Philippines</p>
          <p><strong>School:</strong> Technological Institute of the Philippines</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
html {
  position: relative;
  overflow-x: hidden !important;
}

* {
  box-sizing: border-box;
}

body {
  font-family: 'Quicksand', sans-serif;
  color: #324e63;
}

.wrapper {
  width: 100%;
  height: auto;
  min-height: 100vh;
  padding: 50px 20px;
  padding-top: 100px;
  display: flex;
  background-image: linear-gradient(-20deg, #7b7a7a 0%, #000000f7 100%);
}

.profile-card {
  width: 100%;
  min-height: 500px;
  margin: auto;
  box-shadow: 0px 8px 60px -10px rgba(13, 28, 39, 0.6);
  background: #fff;
  border-radius: 12px;
  max-width: 700px;
  position: relative;
}

.profile-card__img {
  width: 150px;
  height: 150px;
  margin-left: auto;
  margin-right: auto;
  transform: translateY(-50%);
  border-radius: 50%;
  overflow: hidden;
  position: relative;
  z-index: 4;
  box-shadow: 0px 5px 50px 0px rgb(108, 68, 252), 0px 0px 0px 7px rgba(107, 74, 255, 0.5);
}

.profile-card__img img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
}

.profile-card__cnt {
  margin-top: -35px;
  text-align: center;
  padding: 0 20px;
  padding-bottom: 40px;
  transition: all .3s;
}

.profile-card__name {
  font-weight: 700;
  font-size: 24px;
  color: #6944ff;
  margin-bottom: 15px;
}

.profile-card__txt {
  font-size: 18px;
  font-weight: 500;
  color: #324e63;
  margin-bottom: 15px;
}

.profile-card__bio {
  font-size: 16px;
  color: #324e63;
  font-weight: 400;
  margin-bottom: 20px;
}

.profile-card__details p {
  font-size: 16px;
  color: #324e63;
  margin: 5px 0;
}
</style>

