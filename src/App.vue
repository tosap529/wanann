<script setup>
import { RouterLink, RouterView } from 'vue-router'
// import HelloWorld from './components/HelloWorld.vue'

</script>

<template>
  <div id="app">

        <!-- <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink> -->

        <RouterView v-if="!$route.meta.hideDefault" name="header"/>
        <RouterView />
        <RouterView v-if="!$route.meta.hideDefault" name="footer"/>
        

  </div>
</template>

<style lang="scss" scoped>

@import './sass/main.scss';


</style>
