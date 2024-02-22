<script setup>
import btt from '@/layouts/btt.vue';
import ModalHamburger from '@/components/ModalHamburger.vue'; 
import ModalLogin from '@/components/ModalLogin.vue'; 
// 購物車
import { useCartStore } from '@/stores/cartStore.js';
import shoppingCart from '@/components/shoppingCart.vue';

import { computed, ref, onMounted, onBeforeUnmount } from "vue";
import { useRoute } from 'vue-router';
const props = defineProps(['headerTitleZh','headerTitleEng','bgi']);
const bgi_css = computed(() => {
      return {
        "background-image": `url('${props.bgi}')`
      };
    });

const isHamburgerModalShow = ref(false);
const hamburger = ()=>{
    isHamburgerModalShow.value = !isHamburgerModalShow.value;
// console.log( isModalShow.value)
};
const isLoginModalShow = ref(false);
const goLogin = ()=>{
    isLoginModalShow.value = !isLoginModalShow.value;
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


// 購物車
const cartStore = useCartStore();
const toggleCart = function() {
  cartStore.toggleCart();
};

</script>
<template>
    <div>
        <ModalHamburger @hamburger="hamburger" v-show="isHamburgerModalShow" />
        <ModalLogin @ModalLogin="goLogin" v-show="isLoginModalShow" />
        <header :style="bgi_css" :class="{ fixed: isHeaderFixed }">
          
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
                    <a href="#" class="fai" @click.prevent="goLogin"> <font-awesome-icon  icon="user" />
                    </a> 
                    <a href="#" class="fai" @click.prevent="toggleCart"><font-awesome-icon icon="cart-shopping" /></a>
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
    </header>

    <!-- 購物車 -->
    <shoppingCart />
    
    <btt />

    </div>
</template>


<style lang="scss" scoped>
</style>



















<!------------------------------------ 先留著備份 ----------------------------------->
<!-- <script setup>
import btt from '@/layouts/btt.vue';
import ModalHamburger from '@/components/ModalHamburger.vue'; 

import { computed, ref, onMounted, onBeforeUnmount } from "vue";
import { useRoute } from 'vue-router';
const props = defineProps(['headerTitleZh','headerTitleEng','bgi']);
const bgi_css = computed(() => {
      return {
        "background-image": `url('${props.bgi}')`
      };
    });

const isHamburgerModalShow = ref(false);
const hamburger = ()=>{
    isHamburgerModalShow.value = !isHamburgerModalShow.value;
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
</script>
<template>
    <div>
        <ModalHamburger @hamburger="hamburger" v-show="isHamburgerModalShow" />

        <header :style="bgi_css" :class="{ fixed: isHeaderFixed }">
          
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
    </header>
    
    <btt />

    </div>
</template>


<style lang="scss" >

</style> -->
