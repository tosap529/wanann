<template>
    <div>
        <font-awesome-icon icon="angle-up" class="btt" v-show="showScrollTopButton" @click="scrollToTop"/>
    </div>
</template>

<script setup>

import { ref, onMounted, onBeforeUnmount } from 'vue';
const showScrollTopButton = ref(false);
const handleScroll = () => {
  let scrollDistance = window.scrollY || document.documentElement.scrollTop;
  if (scrollDistance > 50) {
    showScrollTopButton.value = true;
  } else {
    showScrollTopButton.value = false;
  }
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll);
});


function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}
</script>

<style lang="scss">

</style>