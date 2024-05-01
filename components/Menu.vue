<template>
<div class="flex justify-between bg-gray-400 text-white pt-4 pb-4" >
    <div>Logo</div>
    <div class="flex">
      <ul class="flex gap-2">
        <li><NuxtLink to="/">Home</NuxtLink></li>
        <li><NuxtLink to="/">About</NuxtLink></li>
        <li><NuxtLink to="/">Categories</NuxtLink></li>
        <li><NuxtLink to="/">Top Sellers</NuxtLink></li>    
        <li v-if="userStore.userState === 'loggedOut'">
          <nuxt-link to="/login">Login</nuxt-link>
        </li>
        <li v-else>
          Logout as {{ userStore.userInfo.name }}
          <button @click="loggedOut">Logout</button>
        </li>
      </ul>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useUserStore } from '~/stores/userStore'

const userStore = useUserStore()
const loggedOut = () => {
  userStore.resetState()
}
</script>
