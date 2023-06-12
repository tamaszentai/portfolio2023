<template>
  <div class="container">
    <header>
      <div class="design-cube"/>
      <h1>Let's talk</h1>
    </header>
    <main>
      <form>
      <div class="form-group">
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" placeholder="Enter your name">
      </div>

      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" placeholder="Enter your email">
      </div>

      <div class="form-group">
        <label for="message">Message:</label>
        <textarea id="message" name="message" rows="8" placeholder="Enter your message"></textarea>
      </div>
      </form>
      <div class="button-container">
        <div class="send-button">Send</div>
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
  padding: 4rem 0 3rem 0;
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

main {
  width: 90%;
  margin: 0 5% 0 5%;
  padding-top: 1rem;
  background-color: #FFF4F4;
  box-shadow: -10px 10px 20px rgba(0, 0, 0, 0.3);
}

.form-group {
  padding: 1rem;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

.form-group input[type="text"],
.form-group input[type="email"],
.form-group textarea {
  width: 100%;
  border: none;
  border-bottom: 2px solid #000;
  padding: 5px;
  transition: border-color 0.3s;
  background-color: #FFF4F4;
}

.form-group input[type="text"]:focus,
.form-group input[type="email"]:focus,
.form-group textarea:focus {
  outline: none;
  border-color: #606C5D;
}

.button-container {
  text-align: center;
}

.send-button {
  background-color: #606C5D;
  border-radius: 25px;
  color: #FFF4F4;
  padding: 0.8rem 1rem;
  margin: 0 1.5rem 1rem 1.5rem;
  text-align: center;
  display: inline-block;
  font-size: 16px;
  text-transform: uppercase;
  font-weight: bold;
}

@media only screen and (min-width: 768px) {
    main {
        width: 70%;
        height: 50vh;
        margin: 0 auto;
    };
}

</style>