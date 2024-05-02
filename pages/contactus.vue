<template>
    <h1>Contact Us Page</h1>
    <form @submit.prevent="handleSubmit">
        <div>
           <h4>Name</h4>
           <input type="text" placeholder="Enter Your Name" v-model="formData.name">
        </div>
        <div>
           <h4>Email</h4>
           <input type="email" placeholder="Enter Your Email" v-model="formData.email">
        </div>
        <div>
           <h4>Telephone Number</h4>
           <input type="tel" placeholder="Enter Your Telephone Number" v-model="formData.phone">
        </div>
        <div>
           <h4>Message</h4>
           <input type="text" placeholder="Enter Your Message" v-model="formData.message">
        </div>
               
      <button type="submit">Submit</button>
    </form>
</template>

<script setup lang="ts">
import type { UserContact } from '~/stores/types/userContactData'
import { useUserContactStore } from '~/stores/userContactStore'

const contactInfo = useUserContactStore()

const formData = ref<UserContact>({
    name: '',
    email: '',
    phone: null,
    message: ''
})

const handleSubmit = () => {
    // console.log('Form submitted!')
    // console.log('User Form Data:', formData.value)
    contactInfo.setUserInfo(formData.value)
    // console.log('User Form Data:',  contactInfo.userInfo)
   
}
</script>
