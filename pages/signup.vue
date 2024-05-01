<template>
    <h1><NuxtLink to="/">Home Page</NuxtLink>  </h1>
    <h1>Sign Up Page</h1>

    <form @submit.prevent="submitForm">
      <div><input type="text" placeholder="Name" v-model="userData.name"></div>
      <div><input type="tel" placeholder="Phone Number" v-model="userData.phone"></div>
      <div><input type="email" placeholder="Email" v-model="userData.email"></div>
      <div><input type="password" placeholder="Password" v-model="userData.password"></div>
      <div><input type="password" placeholder="Confirm Password" v-model="confirmPassword">
        <p>Password Matched: {{ passwordsMatch ? 'Yes' : 'No' }}</p>
      </div>
      <div><p>Already have an account? <nuxt-link to="/login">Login</nuxt-link></p></div>
      <button type="submit">Submit</button>
    </form>
  </template>
  
  <script setup lang="ts">
  import type { UserData } from '~/pages/types/userData'
  import { useUserStore } from '~/stores/userStore'

  const userData = ref<UserData>({
    name: '',
    phone: null,
    email: '',
    password: ''
  })
  
  const confirmPassword = ref('')
  const userStore = useUserStore()

  
  const passwordsMatch = computed(() => userData.value.password === confirmPassword.value)
  
  const submitForm = () => {
    console.log('Form submitted!')
    console.log('User Data:', userData.value)
    userStore.setUserInfo(userData.value)
  }
  
  </script>