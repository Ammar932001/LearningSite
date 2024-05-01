<template>
    <div class="slider-container">
      <div class="slide">{{ currentSlideText }}</div>
    </div>
  </template>
  
  <script setup lang="ts">
  
  interface Item {
    id: number;
    imageUrl: string;
    text: string;
  }
  
  const items: Item[] = [
    { id: 1, imageUrl: '', text: 'Slide1' },
    { id: 2, imageUrl: '', text: 'Slide2' },
    { id: 3, imageUrl: '', text: 'Slide3' },
  ];
  
  const currentSlideText = ref('');
  
  const showSlide = () => {
    let index = 0;
    setInterval(() => {
      currentSlideText.value = items[index].text;
      index = (index + 1) % items.length;
    }, 2000);
  };
  
  onMounted(() => {
    showSlide();
  });
  </script>
  
  <style scoped>
  .slider-container {
    width: 100%; 
    height: 500px; 
    overflow: hidden;
    position: relative;
  }
  
  .slide {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    background-color: lightgray;
    position: absolute;
    transition: transform 0.5s ease-in-out;
  }
  </style>