<template>
  <button class="menu"
          :class="isMenuOpen ? 'opened' : ''" @click="toggleMenu">
    <svg width="50" height="50" viewBox="0 0 100 100">
      <path class="line line1"
            d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"/>
      <path class="line line2" d="M 20,50 H 80"/>
      <path class="line line3"
            d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"/>
    </svg>
  </button>
  <div :class="isMenuOpen ? 'menu-list open' : 'menu-list'">
    <ul>
      <li><NuxtLink to="/" @click.native="toggleMenu">About me</NuxtLink></li>
      <li><NuxtLink to="/resume" @click.native="toggleMenu">Resume</NuxtLink></li>
      <li><NuxtLink to="/projects" @click.native="toggleMenu">Projects</NuxtLink></li>
      <li><NuxtLink to="/contact" @click.native="toggleMenu">Contact</NuxtLink></li>
    </ul>
  </div>
</template>

<script setup lang="ts">

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
}

</script>

<style scoped>
body {
  align-items: center;
  display: flex;
  justify-content: center;
  height: 100vh;
  margin: 0;
  padding: 0;
}

.menu {
  z-index: 100;
  background-color: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  padding: 0;
}

.line {
  fill: none;
  stroke: #606C5D;
  stroke-width: 6;
  transition: stroke-dasharray 600ms cubic-bezier(0.4, 0, 0.2, 1),
  stroke-dashoffset 600ms cubic-bezier(0.4, 0, 0.2, 1);
}

.line1 {
  stroke-dasharray: 60 207;
  stroke-width: 6;
}

.line2 {
  stroke-dasharray: 60 60;
  stroke-width: 6;
}

.line3 {
  stroke-dasharray: 60 207;
  stroke-width: 6;
}

.opened .line1 {
  stroke-dasharray: 90 207;
  stroke-dashoffset: -134;
  stroke-width: 6;
}

.opened .line2 {
  stroke-dasharray: 1 60;
  stroke-dashoffset: -30;
  stroke-width: 6;
}

.opened .line3 {
  stroke-dasharray: 90 207;
  stroke-dashoffset: -134;
  stroke-width: 6;
}

.menu-list {
  position: fixed;
  top: -100%;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #F7E6C4;
  opacity: 0;
  transition: top .5s ease, opacity .5s ease;
  z-index: 99;
}

.menu-list.open {
  top: 0;
  opacity: 1;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
}

li {
  margin-bottom: 3rem;
  font-size: 1.5rem;
  text-transform: uppercase;
  font-weight: 700;
}

li a {
  text-decoration: none;
  color: #606C5D;
}

.router-link-active {
  color: black;
}

@media only screen and (min-width: 1024px) {
  .menu {
      display: none;
  }

}



</style>