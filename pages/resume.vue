<template>
  <div class="container">
    <header>
      <div class="design-cube"/>
      <h1>Resume</h1>
      <div class="cv-container">
        <h3>Experience</h3>
        <div class="download-button">download cv</div>
      </div>
    </header>
    <main>
      <div class="experience">
        <h3 id="date"> 2022 - Present</h3>
        <h3 id="title">Full-stack Software Engineer</h3>
        <p id="company">nuom</p>
        <p id="location">Nottingham, UK</p>
        <p id="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut debitis deserunt doloremque, expedita fuga
          impedit in ipsa laboriosam laborum magnam neque, nisi repudiandae sapiente sed soluta, suscipit ut vitae
          voluptates?</p>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.container {
  background-color: #F1C376;
  padding-bottom: 3rem;
    min-height: 77vh;
}

header {
  text-align: center;
  padding: 4rem 0 1rem 0;
}

.design-cube {
  display: inline-block;
  width: 1.2rem;
  height: 1.2rem;
  background-color: #606C5D;
}

h1 {
  display: inline-block;
  margin-left: 1rem;
  font-size: 2rem;
  font-weight: 700;
}

.cv-container {
  padding: 0 2rem;
  display: flex;
  margin-top: 1rem;
  align-items: center;
  justify-content: space-between;
}

.download-button {
  background-color: #606C5D;
  border-radius: 25px;
  color: #FFF4F4;
  padding: 0.8rem 1rem;
  margin: 1rem 0.5rem;
  text-align: center;
  display: inline-block;
  font-size: .8rem;
  text-transform: uppercase;
  font-weight: bold;
    cursor: pointer;
}

.experience {
  width: 90%;
  padding: 2.5rem 1rem;
  margin: 0 5% 0 5%;
  background-color: #FFF4F4;
  box-shadow: -10px 10px 20px rgba(0, 0, 0, 0.3);
}

#date {
  color: #606C5D;
  margin-bottom: 1rem;
}

#title {
  margin-bottom: 1rem;
  text-transform: uppercase;
  font-weight: 400;
  font-size: 1rem;
}

#company, #location {
  margin-bottom: .3rem;
}

#description {
  margin-top: 1rem;
  line-height: 1.5rem;
}

@media only screen and (min-width: 1024px) {
    .container {
        padding: 0 25%;
    }
}




</style>