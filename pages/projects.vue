<template>
  <div class="container">
    <header>
      <div class="design-cube"/>
      <h1>Projects</h1>
      <p id="projects-introduction">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque dolore excepturi perferendis voluptatibus!
        Aliquam consequatur ducimus eveniet expedita facilis, incidunt labore laudantium, modi nihil quisquam sit
        suscipit, tempora ut veniam!</p>
    </header>
    <main>
      <div class="project">
        <div class="project-header">
          <h3 id="title">NPHTM CMS</h3>
          <svg height="32px" id="Layer_1" viewBox="0 0 32 32" width="30px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path clip-rule="evenodd" d="M16.003,0C7.17,0,0.008,7.162,0.008,15.997  c0,7.067,4.582,13.063,10.94,15.179c0.8,0.146,1.052-0.328,1.052-0.752c0-0.38,0.008-1.442,0-2.777  c-4.449,0.967-5.371-2.107-5.371-2.107c-0.727-1.848-1.775-2.34-1.775-2.34c-1.452-0.992,0.109-0.973,0.109-0.973  c1.605,0.113,2.451,1.649,2.451,1.649c1.427,2.443,3.743,1.737,4.654,1.329c0.146-1.034,0.56-1.739,1.017-2.139  c-3.552-0.404-7.286-1.776-7.286-7.906c0-1.747,0.623-3.174,1.646-4.292C7.28,10.464,6.73,8.837,7.602,6.634  c0,0,1.343-0.43,4.398,1.641c1.276-0.355,2.645-0.532,4.005-0.538c1.359,0.006,2.727,0.183,4.005,0.538  c3.055-2.07,4.396-1.641,4.396-1.641c0.872,2.203,0.323,3.83,0.159,4.234c1.023,1.118,1.644,2.545,1.644,4.292  c0,6.146-3.74,7.498-7.304,7.893C19.479,23.548,20,24.508,20,26c0,2,0,3.902,0,4.428c0,0.428,0.258,0.901,1.07,0.746  C27.422,29.055,32,23.062,32,15.997C32,7.162,24.838,0,16.003,0z" fill="#000" fill-rule="evenodd"/><g/><g/><g/><g/><g/><g/></svg>

        </div>

        <p id="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut debitis deserunt doloremque,
          expedita fuga
          impedit in ipsa laboriosam laborum magnam neque, nisi repudiandae sapiente sed soluta, suscipit ut vitae
          voluptates?</p>

        <img src="../assets/images/tamas.jpg" alt="project image">
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
}

header {
  text-align: center;
  padding: 4rem 0 2rem 0;
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

#projects-introduction {
  width: 80%;
  margin: 1rem auto;
  padding-top: 1rem;
  font-size: 1.1rem;
  line-height: 1.5rem;
  text-align: justify;
}

.project {
  width: 90%;
  margin: 0 5% 0 5%;
  padding-top: 1rem;
  background-color: #FFF4F4;
  box-shadow: -10px 10px 20px rgba(0, 0, 0, 0.3);
}

.project-header {
  display: flex;
  justify-content: space-between;
  padding-top: 1rem;
  border-left: .5rem solid #606C5D;
  padding-left: 1rem;
  padding-right: 2rem;
}

#title {
  padding-bottom: .5rem;
}

.project-header svg {
  padding-bottom: .5rem;
  opacity: 0.7;
}

#description {
  padding: 1.5rem;
}
.project img {
  width: 100%;
  height: 100%;
}

</style>