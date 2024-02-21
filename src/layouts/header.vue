<script setup>
import btt from '@/layouts/btt.vue';
import Modal from '@/components/ModalHamburger.vue'; 

import { computed, ref, onMounted, onBeforeUnmount } from "vue";
import { useRoute } from 'vue-router';
const props = defineProps(['headerTitleZh','headerTitleEng','bgi']);
const bgi_css = computed(() => {
      return {
        "background-image": `url('${props.bgi}')`
      };
    });

const isModalShow = ref(false);
const hamburger = ()=>{
isModalShow.value = !isModalShow.value;
// console.log( isModalShow.value)
};

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
// 以下這幾行暫時嘗試用
// const nav = ref(null);
// function aa(){
//     if(window.scrollY>=300){
//         nav.value.style.backgroundImage = '@/img/nav_bgi.png'
//         console.log(nav.value)
//     }
// }
// document.addEventListener("scroll", aa);
// 取得當前頁面路徑
const route = useRoute();
// console.log(route.name);
</script>
<template>
    <div>
        <Modal @hamburger="hamburger" v-show="isModalShow" />

        <header :style="bgi_css" :class="{ fixed: isHeaderFixed }">
        <nav>
            <div class="nav_left">
                <!-- <a href="#"><img src="@/img/logo_long.svg" alt="logo"></a> -->
                <router-link :to="{ name: 'index' }"><img src="@/img/logo_long.svg" alt="logo"></router-link>
                <h4>最安心的居家清潔服務</h4>
            </div>
            <div class="nav_right">
                <ul>
                    <li>
                        <!-- <a href="#">關於我們</a> -->
                        <router-link :to="{ name: 'about' }">關於我們</router-link> 
                    </li>
                    <li>
                        <!-- <a href="#">最新消息</a> -->
                        <router-link :to="{ name: 'articles' }">最新消息</router-link> 
                        <ol>
                            <li>
                                <!-- <a href="#">優惠活動</a> -->
                                <router-link :to="{ name: 'act' }">優惠活動</router-link> 
                            </li>
                            <li>
                                <!-- <a href="#" class="nav_last_a">專欄文章</a> -->
                                <router-link class="nav_last_a" :to="{ name: 'articles' }">專欄文章</router-link> 
                            </li>
                        </ol>
                    </li>

                    <li>
                        <!-- <a href="#">我們的服務</a> -->
                        <router-link :to="{ name: 'service' }">我們的服務</router-link>
                        <ol>
                            <li>
                                <!-- <a href="#">服務介紹</a> -->
                                <router-link :to="{ name: 'service' }">服務介紹</router-link>
                            </li>
                            <li>
                                <!-- <a href="#">案例分享</a> -->
                                <router-link :to="{ name: 'case' }">案例分享</router-link>
                            </li>
                            <li>
                                <!-- <a href="#" class="nav_last_a">預約服務</a> -->
                                <router-link class="nav_last_a" :to="{ name: 'reserve' }">預約服務</router-link>
                            </li>
                        </ol>
                    </li>
                    <li>
                        <!-- <a href="#">商城</a> -->
                        <router-link :to="{ name: 'mall' }">商城</router-link>
                    </li>
                    <li>
                        <!-- <a href="#">聯絡我們</a> -->
                        <router-link :to="{ name: 'contact' }">聯絡我們</router-link>
                    </li>
                </ul>
                <div class="nav_user">
                    <!-- <a href="#" class="fai"><font-awesome-icon icon="user" /></a> -->
                    <router-link class="fai" :to="{ name: 'member' }"><font-awesome-icon icon="user" /></router-link> 
                    <a href="#" class="fai"><font-awesome-icon icon="cart-shopping" /></a>
                </div>
            </div>

            <div class="hamburger" @click="hamburger">
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
            </div>

        </nav>
            <div class="header_text">
                <h1>{{headerTitleZh}}</h1>
                <h1>{{headerTitleEng}}</h1>
            </div>
            <nav ref="nav">
       
       <div class="nav_left">
           <router-link  :to="{ name: 'index' }">
               <img src="@/img/logo_long.svg" alt="logo">
           </router-link>
           <h4>最安心的居家清潔服務</h4>
       </div>
       <div class="nav_right">
           <ul>
               <li>
                   <router-link :class="{'route_now':route.name=='about'}"  :to="{ name: 'about' }">關於我們</router-link> 
               </li>
               <li>
                   <router-link :class="{'route_now':route.name=='articles'||route.name=='act'}" :to="{ name: 'articles' }">最新消息</router-link> 
                   <ol>
                       <li>
                           <router-link :class="{'sub_route_now':route.name=='act'}" :to="{ name: 'act' }">優惠活動</router-link> 
                       </li>
                       <li>
                           <router-link :class="{'sub_route_now':route.name=='articles'}" class="nav_last_a" :to="{ name: 'articles' }">專欄文章</router-link> 
                       </li>
                   </ol>
               </li>

               <li>
                   <router-link :class="{'route_now':route.name=='service'||route.name=='case'||route.name=='reserve'}" :to="{ name: 'service' }">我們的服務</router-link>
                   <ol>
                       <li>
                           <router-link :class="{'sub_route_now':route.name=='service'}" :to="{ name: 'service' }">服務介紹</router-link>
                       </li>
                       <li>
                           <router-link :class="{'sub_route_now':route.name=='case'}" :to="{ name: 'case' }">案例分享</router-link>
                       </li>
                       <li>
                           <router-link :class="{'sub_route_now':route.name=='reserve'}" class="nav_last_a" :to="{ name: 'reserve' }">預約服務</router-link>
                       </li>
                   </ol>
               </li>
               <li>
                   <router-link :class="{'route_now':route.name=='mall'}" :to="{ name: 'mall' }">商城</router-link>
               </li>
               <li>
                   <router-link :class="{'route_now':route.name=='contact'}" :to="{ name: 'contact' }">聯絡我們</router-link>
               </li>
           </ul>
           <div class="nav_user">
               <router-link  class="fai" :to="{ name: 'member' }"><font-awesome-icon icon="user" /></router-link> 
               <a href="#" class="fai"><font-awesome-icon icon="cart-shopping" /></a>
           </div>
       </div>

       <div class="hamburger">
           <span class="bar"></span>
           <span class="bar"></span>
           <span class="bar"></span>
       </div>

   </nav>
    </header>
    
    <btt />

    </div>
</template>


<style lang="scss" >

</style>