<template>
    <div>
      The id of the page is {{route.params.id}}
    </div>
</template>

<script setup lang="ts">

  const route = useRoute()  
  console.log(route.params.id)



</script>
