<template>
  <div>
    <div class="first-box">
      <div class="hero-box">
        <img src="../assets/images/tamas.jpg" alt="Hero image" />
        <div class="name">Tamás <br /> Zentai</div>
        <hr />
        <div class="buttons">
          <div class="resume-button">Resume</div>
          <div class="projects-button">Projects</div>
        </div>
        <div class="social-links"></div>
      </div>
    </div>
    <div class="second-box">
      Hello

      Here's who I am & what I do

      I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.



      I’m a great place for you to tell a story and let your users know a little more about you.
    </div>
    <div class="third-box">
    </div>
  </div>
</template>
<script setup lang="ts">

</script>

<style scoped>
.first-box {
  position: relative;
  width: 100%;
  height: 300px;
  background-color: grey;
  margin: 0;
  z-index: 11;
}

.hero-box {
  width: 80%;
  margin-left: 10%;
  height: 450px;
  background-color: bisque;
  z-index: 10;
  box-shadow: -15px 15px 20px rgba(0, 0, 0, 0.5);
  text-align: center;
}

.hero-box img {
  height: 10rem;
  border-radius: 50%;
  margin-top: 2rem;
}

.name {
  display: block;
  font-size: 1.3rem;
  font-weight: 700;
  margin-top: 1rem;
  margin-left: 10px;
  color: #000;
  font-family: Avenir, Helvetica, Arial, sans-serif
}

hr {
  width: 30%;
  margin-left: 35%;
  margin-top: 0.5rem;
  border: 1px solid black;
}

.buttons {
  margin-top: 1rem;
}

.resume-button {
  background-color: #c18869;
  border-radius: 25px;
  color: black;
  padding: 10px 25px;
  margin: 1rem 0.5rem;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  text-transform: uppercase;
}

.projects-button {
  background-color: whitesmoke;
  border-radius: 25px;
  color: gray;
  padding: 10px 25px;
  margin: 1rem 0.5rem;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  text-transform: uppercase;
}

.social-links {
  width: 100%;
  height: 50px;
  background-color: whitesmoke;
  margin-top: 1.5rem;
  z-index: 9;
}

.second-box {
  width: 100%;
  height: 500px;
  background-color: lightblue;
  margin: 0;
  z-index: 9;
}
</style>