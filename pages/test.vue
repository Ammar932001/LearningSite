<template>
    <div>
      <h1>Data from Backend</h1>
      <p>{{ dataFromBackend }}</p>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'; 
  import axios from 'axios';
  const dataFromBackend = ref('');
  
  onMounted(() => {
    // Make GET request to backend endpoint
    axios.get('http://localhost:3000/api/data')
      .then(response => {
        // Set the received data to the dataFromBackend variable
        dataFromBackend.value = response.data.data;
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  });
  </script>