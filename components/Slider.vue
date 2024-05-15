<template>
  <div class="slider-container">
    <div :style="currentSlideStyle" class="slide">{{ currentSlideText }}</div>
  </div>
</template>

<script setup lang="ts">

interface Item {
  id: number;
  imageUrl: string;
  text: string;
}

const items: Item[] = [
  { id: 1, imageUrl: '../imageslide1.jpeg', text: 'Slide1' },
  { id: 2, imageUrl: '../imageslide2.jpeg', text: 'Slide2' }, // Updated with actual image URL
  { id: 3, imageUrl: '../imageslide1.jpeg', text: 'Slide3' }, // Updated with actual image URL
];

const currentSlideText = ref('');
const currentSlideStyle = ref({});

const showSlide = () => {
  let index = 0;
  setInterval(() => {
    currentSlideText.value = items[index].text;
    currentSlideStyle.value = {
      backgroundImage: `url(${items[index].imageUrl})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    };
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
  position: absolute;
  transition: transform 0.5s ease-in-out;
  color: white; /* Adjust text color for better contrast */
}
</style>