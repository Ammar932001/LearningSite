<template>
   <div class="container mx-auto">
   <h1 class="flex justify-center align-center font-bold">Our Services</h1>
    <div class="flex justify-center align-center">
        <ul class="flex gap-2">
            <li v-for="item in items" :key="item.id">
               {{ item.text }}
            </li>
        </ul>
    </div>

   </div>
    
</template>
<script setup>
const items = [
   {id:1, text: 'Robots Manufacturing'},
   {id:2, text: 'Simulator Development'},
   {id:3, text: 'Biomedical Equipment Developmet'},
   {id:4, text: 'Electronics Solutions'},
]
</script>