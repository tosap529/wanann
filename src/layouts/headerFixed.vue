<script setup>
import { computed, ref } from "vue";
import ModalHamburger from '@/components/ModalHamburger.vue'; 
import ModalLogin from '@/components/ModalLogin.vue'; 
const props = defineProps(['headerTitleZh','headerTitleEng','bgi','isBgi']);
import { useRoute } from 'vue-router';
// 購物車
import { useCartStore } from '@/stores/cartStore.js';
import shoppingCart from '@/components/shoppingCart.vue';
const cartStore = useCartStore();
const toggleCart = function() {
  cartStore.toggleCart();
};

const bgi_css = computed(() => {
      return {
        "background-image": `url('${props.bgi}')`
      };
    });

const isHamburgerModalShow = ref(false);
const hamburger = ()=>{
    isHamburgerModalShow.value = !isHamburgerModalShow.value;
};
const isLoginModalShow = ref(false);
const goLogin = ()=>{
    isLoginModalShow.value = !isLoginModalShow.value;
};
// 取得當前頁面路徑
const route = useRoute();
</script>

<template>
    <div>
        <ModalHamburger @hamburger="hamburger" v-show="isHamburgerModalShow" />
        <ModalLogin @ModalLogin="goLogin" v-show="isLoginModalShow" />
        <header :style="bgi_css" >
            <nav>
            <div class="nav_left">
                <router-link :to="{ name: 'home' }">
                    <img src="@/img/logo_long.svg" alt="logo">
                </router-link>
                <h4>最安心的居家清潔服務</h4>
            </div>
            <div class="nav_right">
                <i class="fa fa-bars" area-hidden="true"></i>
                <i class="fa fa-solid fa-xmark" area-hidden="true"></i>
                <ul>
                    <li>
                        <router-link  :to="{ name: 'about' }">關於我們</router-link>
                    </li>
                    <li>
                        <router-link  :to="{ name: 'articles' }">最新消息</router-link>
                        <ol class="header_news">
                            <li>
                                <router-link :to="{ name: 'act' }">優惠活動</router-link>
                            </li>
                            <li>
                                <router-link class="nav_last_a" :to="{ name: 'articles' }">專欄文章</router-link>
                            </li>
                        </ol>
                    </li>

                    <li>
                        <router-link :to="{ name: 'service' }">我們的服務</router-link>
                        <ol class="header_ser">
                            <li>
                                <router-link :to="{ name: 'service' }">服務介紹</router-link>
                            </li>
                            <li>
                                <router-link :to="{ name: 'case' }">案例分享</router-link>
                            </li>
                            <li>
                                <router-link class="nav_last_a" :to="{ name: 'reserve' }">預約服務</router-link>
                            </li>
                        </ol>
                    </li>
                    <li>
                        <router-link :to="{ name: 'mall' }">商城</router-link>
                    </li>
                    <li>
                        <router-link :to="{ name: 'contact' }">聯絡我們</router-link>
                    </li>
                </ul>
                <div class="nav_user">
                    <a href="#" class="fai" @click.prevent="goLogin"> <font-awesome-icon  icon="user" />
                    </a>
                    <a href="#" class="fai" @click.prevent="toggleCart">
                        <font-awesome-icon icon="cart-shopping" />
                    </a>
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
    </div>
</template>
<style lang="scss" scoped>
header nav .nav_right .nav_user{
    line-height: 35px;
    height: 35px;
}
</style>