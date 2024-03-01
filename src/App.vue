<script setup>
import { RouterLink, RouterView } from 'vue-router'
// import HelloWorld from './components/HelloWorld.vue'

</script>

<template>
  <div id="app" :class="$route.name">

        <!-- <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink> -->


        <RouterView />

        

  </div>
</template>

<style lang="scss" >

@import './sass/main.scss';

#app.gameR{
  background-image: url(@/img/game/gameR_bgi.jpg);
  background-size: cover;
  overflow: hidden;

    @include m() {
        background-image: url(@/img/game/gameR_bgi_mb.jpg);
        background-size: contain;
        padding-top: 40px;
    }
}

#app.backLogin{
  background-color: $light-milktea;
  height: 100vh;
  overflow: hidden;
}

</style>
