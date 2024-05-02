<template>
    <h1>Hello this is my contact store</h1>
    {{contactInfo.userInfo}}
</template>
<script setup lang="ts">
import { useUserContactStore } from '~/stores/userContactStore'
const contactInfo = useUserContactStore()
// console.log(">>>>DEV44 the contact info is ",contactInfo.userInfo)
</script>
