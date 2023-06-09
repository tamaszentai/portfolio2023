<template>
  <div class="container">
    <header>
      <div class="design-cube"/>
      <h1>Let's talk</h1>
    </header>
    <main>
      <form id="contact-form" @submit.prevent="sendEmail" ref="form">
      <div class="form-group">
        <label for="name">Name:</label>
        <input type="text" id="name" name="user_name" placeholder="Enter your name" v-model="user_name" required>
      </div>

      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" id="email" name="user_email" placeholder="Enter your email" v-model="user_email" required>
      </div>

      <div class="form-group">
        <label for="message">Message:</label>
        <textarea id="message" name="message" placeholder="Enter your message" v-model="message" required></textarea>
      </div>
      </form>
      <div class="button-container">
        <button class="send-button" type="submit" form="contact-form">Send</button>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import emailjs from '@emailjs/browser';
import {notify} from "~/composables/Toast";

const config = useRuntimeConfig();
const form = ref(null);
const user_name = ref('');
const user_email = ref('');
const message = ref('');


onMounted(() => {
  form.value
})

const clearForm = () => {
  user_name.value = '';
  user_email.value = '';
  message.value = '';
}

const sendEmail = async () =>  {
  if (user_name.value === '' || user_email.value === '' || message.value === '') {
    notify({message: 'Please fill in all fields', type: 'error'})
    return;
  }
  try {
    await emailjs.sendForm(config.public.EMAILJS_SERVICE_ID, config.public.EMAILJS_TEMPLATE_ID, form.value, config.public.EMAILJS_PUBLIC_KEY)
    notify({message: 'Your message has been sent!', type: 'success'});
    clearForm();
  } catch (e) {
    notify({message: 'Something went wrong, please try again later', type: 'error'});
    clearForm();
  }
}

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

textarea {
  height: 8rem;
  resize: none;
}

.button-container {
  text-align: center;
}

.send-button {
  border: none;
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
    cursor: pointer;
}

@media only screen and (min-width: 768px) {
    main {
        width: 70%;
        height: 30rem;
        margin: 0 auto;
    }

  .send-button {
    margin: 2rem 0 0 1.5rem;
  }
}

@media only screen and (min-width: 1024px) {
  .button-container {
    text-align: left;
  }

  .send-button {
    margin: 1rem 0 0 1.5rem;
    padding: .5rem 2rem;
  }
}

@media only screen and (min-width: 1440px) {
  main {
    height: 40rem;
  }

  textarea {
    height: 15rem;
  }
}

</style>