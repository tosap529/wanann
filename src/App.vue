<script setup>
 import { RouterLink, RouterView } from 'vue-router'
  // import HelloWorld from './components/HelloWorld.vue'


</script>

<template>
  <div id="app" :class="$route.name">

        <!-- <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink> -->


        <RouterView/>

        

  </div>
</template>

<style lang="scss" >

@import './sass/main.scss';

#app.gameR{
  background-image: url(@/img/game/gameR_bgi.jpg);
  background-size: contain;
  background-repeat: no-repeat;
  padding-top: 1px;

    @include m() {
  background-image: url(@/img/game/gameR_bgi_mb.jpg);
        padding-top: 40px;
    }
}

</style>
