<script setup>

import gameFooter from '@/layouts/footer.vue'
// 購物車
import { useCartStore } from '@/stores/cartStore.js';
import shoppingCart from '@/components/shoppingCart.vue';

const cartStore = useCartStore();
const toggleCart = function() {
  cartStore.toggleCart();
};

</script>

<template>
    <div>
        <header class="fixed">
            <nav>
            <div class="nav_left">
                <router-link :to="{ name: 'index' }"><img src="@/img/logo_long.svg" alt="logo"></router-link>
                <h4>最安心的居家清潔服務</h4>
            </div>
            <div class="nav_right">
                <i class="fa fa-bars" area-hidden="true"></i>
                <i class="fa fa-solid fa-xmark" area-hidden="true"></i>
                <ul>
                    <li><router-link :to="{ name: 'about' }">關於我們</router-link></li>
                    <li><router-link :to="{ name: 'articles' }">最新消息</router-link>
                        <ol class="header_news">
                            <li><router-link :to="{ name: 'act' }">優惠活動</router-link></li>
                            <li><router-link class="nav_last_a" :to="{ name: 'articles' }">專欄文章</router-link></li>
                        </ol>
                    </li>

                    <li><router-link :to="{ name: 'service' }">我們的服務</router-link>
                        <ol class="header_ser">
                            <li><router-link :to="{ name: 'service' }">服務介紹</router-link></li>
                            <li><router-link :to="{ name: 'case' }">案例分享</router-link></li>
                            <li><router-link class="nav_last_a" :to="{ name: 'reserve' }">預約服務</router-link></li>
                        </ol>
                    </li>
                    <li><router-link :to="{ name: 'mall' }">商城</router-link></li>
                    <li><router-link :to="{ name: 'contact' }">聯絡我們</router-link></li>
                </ul>
                <div class="nav_user">
                    <router-link class="fai" :to="{ name: 'member' }"><font-awesome-icon icon="user" /></router-link>
                    <a href="#" class="fai" @click.prevent="toggleCart"><font-awesome-icon icon="cart-shopping" /></a>
                </div>
            </div>
            <div class="hamburger">
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
            </div>
        </nav>
</header>
<shoppingCart />

    <div class="wrapper">
        <section>
            <div class="gameQ_contect">
                <div class="gameQ_text">
                    <h2>你對於居住環境的整潔程度有怎樣的要求？</h2>
                    <h4>亂中有序，自己覺得輕鬆舒適就好</h4>
                    <h4>看心情，心情好看什麼都順眼啦</h4>
                    <h4>看地方，對每個區域的要求不同</h4>
                    <h4>有潔癖，一定要保持乾淨整齊</h4>
                    <button class="btn"><router-link :to="{ name: 'gameR' }">下一題</router-link></button>
                </div>
            </div>

        </section>
    </div>
    <gameFooter />

    </div>
</template>

<style lang="scss">


</style>