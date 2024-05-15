<template>
    <div>
      <h1>Login Page</h1>
      <input v-model="email" type="email" placeholder="Email">
      <input v-model="password" type="password" placeholder="Password">
      <button @click="submitLogin">Submit</button>
      <p>Don't have an account? <nuxt-link to="/signup">Signup</nuxt-link></p>
    </div>
  </template>
  
  <script setup>
  import axios from 'axios';
  
  const email = ref('');
  const password = ref('');
  const router = useRouter();
  
  const submitLogin = async () => {
    try {
      const response = await axios.post('http://localhost:3000/api/signin', {
        email: email.value,
        password: password.value
      });
  
      if (response.status >= 200 && response.status < 300) { // Check if status is in 200 range
        // Redirect to the root route and show alert with response message
        router.push('/');
        alert(response.data.message || 'Login successful');
      } else {
        throw new Error(response.data.message || 'Login failed');
      }
    } catch (error) {
        if (error.response.status === 401) {
        alert('Incorrect email or password');
    } else {
      console.error('Login failed:', error.message);
    }
    }
  };
  </script>
  