<script setup lang="ts">
import {items} from '../assets/resume.json';

interface Job {
  startDate: string;
  "endDate": string;
  "title": string;
  "companyName": string;
  "companyBase": string;
  "description": string;
}


const sortedJobs = items.sort((a: Job, b: Job) => {
  const dateA = Date.parse(a.startDate);
  const dateB = Date.parse(b.startDate);

  if (dateA > dateB) {
    return -1;
  } else if (dateA < dateB) {
    return 1;
  }
  return 0;
})

console.log(sortedJobs)
</script>

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
      <div v-for="(item, index) in sortedJobs" :key="index" class="experience">
        <div class="information">
          <h3 id="date">{{ item.startDate }} <span style="color: black">-</span> {{ item.endDate === '-' ? 'Present' : item.endDate }}</h3>
          <h3 id="title">{{ item.title }}</h3>
          <p id="company">{{ item.companyName }}</p>
          <p id="location">{{ item.companyBase }}</p>
        </div>
        <div class="description">
          <p id="description">{{ item.description }}</p>
        </div>
      </div>
    </main>
  </div>
</template>

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
  margin: 0 5% 5% 5%;
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

  .experience {
    display: flex;
    width: 100%;
  }

  .information h3 {
    display: inline-block;
    margin-right: 5rem;
  }

  .information h3, p {
    width: 100%;
  }

  .description {
    padding: 0 3rem;
  }
}


</style>