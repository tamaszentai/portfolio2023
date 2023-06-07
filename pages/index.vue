<template>
  <div>
    <div class="first-box">
      <div class="hero-box">

      </div>
    </div>
    <div class="second-box">
    </div>
    <div class="third-box">
    </div>
  </div>
</template>
<script setup lang="ts">

</script>

<style scoped>
.first-box {
  width: 100%;
  height: 300px;
  background-color: grey;
  margin: 0;
}

.hero-box {
  width: 100%;
  height: 500px;
  background-color: lightgreen;
  border: 1px solid black;
  margin: 0;
  z-index: 10;
}

.second-box {
  width: 100%;
  height: 500px;
  background-color: lightblue;
  margin: 0;
  z-index: 9;
}
</style>