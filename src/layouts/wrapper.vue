<template>
  <div class="wrapper" :class="{ fixed: isHeaderFixed }">
    <slot></slot>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

const isHeaderFixed = ref(false);
const handleScroll = () => {
  let scrollDistance = window.scrollY || document.documentElement.scrollTop;

  if (scrollDistance > 50) {
    isHeaderFixed.value = true;
  } else {
    isHeaderFixed.value = false;
  }
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style lang="scss">
@import '@/sass/main.scss';

</style>
