<template>
 <header class="mobile">
   <div class="name-tag">
     <div class="design-cube" />
     <span class="name">Tamás Zentai</span>
     <span class="title">Software Developer</span>
   </div>
   <HamburgerMenu />
 </header>
  <slot />
</template>

<script setup lang="ts">

</script>

<style scoped>
header {
  margin: 1.5rem 1rem 0 1rem;
  display: flex;
  justify-content: space-between;
}

.design-cube {
  display: inline-block;
  width: 15px;
  height: 15px;
  background-color: #000;
}

.name {
  display: inline-block;
  font-size: 1.3rem;
  font-weight: 700;
  margin-left: 10px;
  color: #000;
  font-family: Avenir, Helvetica, Arial, sans-serif
}

.title {
  display: block;
  margin-top: 0.5rem;
  font-size: 1rem;
  font-weight: 400;
  color: gray;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-transform: uppercase;
}
</style>