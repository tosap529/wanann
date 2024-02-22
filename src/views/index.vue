<script setup>

import indexFooter from '@/layouts/footer.vue';
import btt from '@/layouts/btt.vue';
import Modal from '@/components/ModalHamburger.vue'; 

// 購物車
import { useCartStore } from '@/stores/cartStore.js';
import shoppingCart from '@/components/shoppingCart.vue';

import { ref, onMounted, onBeforeUnmount } from 'vue';

const isHeaderFixed = ref(false);

const isModalShow = ref(false);
const hamburger = ()=>{
    isModalShow.value = !isModalShow.value;
    // console.log( isModalShow.value)
};
const handleScroll = () => {
  let scrollDistance = window.scrollY || document.documentElement.scrollTop;

  if (scrollDistance > 50) {
    isHeaderFixed.value = true;
  } else {
    isHeaderFixed.value = false;
  }
};

function scrollTo(){
    window.scrollTo({
        top: 51,
        behavior: 'smooth'
    });
} 

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll);
});

// 購物車
const cartStore = useCartStore();
const toggleCart = function() {
  cartStore.toggleCart();
};

</script>

<template>
    <div>
        <Modal @hamburger="hamburger" v-show="isModalShow" />

        <header class="index_header" :class="{ fixed: isHeaderFixed }"> 
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
            <div class="hamburger" @click="hamburger">
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
            </div>
        </nav>

        <div class="header_center" @click="scrollTo">
            <img src="@/img/logo_square.svg" alt="logo">
            <h4>⌵</h4>
            <h4>scroll</h4>
        </div>

    </header>
    <!-- 購物車 -->
    <shoppingCart />

        <div class="wrapper" :class="{ fixed: isHeaderFixed }">

            <section>
                <a class="index_first" href="#">
                    <h2>第一次來？歡迎點此快速了解網站使用說明！</h2>
                    <h2>還有初次消費的優惠碼喔！</h2>
                </a>

                <div class="index_rolling">
                    <div class="view">
                        <div class="pic-container">
                            <div class="pic">
                                <img src="@/img/index/index_carousel1.jpg" alt="carousel" />
                            </div>
                            <div class="pic">
                                <img src="@/img/index/index_carousel2.jpg" alt="carousel" />
                            </div>
                            <div class="pic">
                                <img src="@/img/index/index_carousel3.jpg" alt="carousel" />
                            </div>
                            <div class="pic">
                                <img src="@/img/index/index_carousel4.jpg" alt="carousel" />
                            </div>
                            <div class="pic">
                                <img src="@/img/index/index_carousel5.jpg" alt="carousel" />
                            </div>
                            <div class="pic">
                                <img src="@/img/index/index_carousel1.jpg" alt="carousel" />
                            </div>
                            <div class="pic">
                                <img src="@/img/index/index_carousel2.jpg" alt="carousel" />
                            </div>
                            <div class="pic">
                                <img src="@/img/index/index_carousel3.jpg" alt="carousel" />
                            </div>
                            <div class="pic">
                                <img src="@/img/index/index_carousel4.jpg" alt="carousel" />
                            </div>
                            <div class="pic">
                                <img src="@/img/index/index_carousel5.jpg" alt="carousel" />
                            </div>
                        </div>
                    </div>
                </div>

                <div class="index_intr">
                    <div class="index_intr_left">
                        <img src="@/img/index/index_star.png" alt="star">
                        <h2>輕鬆愜意，家的幸福保姆。</h2>
                    </div>
                    <div class="index_intr_right">
                        <h3>浣安致力於提供高品質的居家清潔服務，讓客戶享受乾淨、整潔的生活環境，減輕生活中的瑣事，專心追求更有價值的事物。</h3>
                        <h3>我們目前已服務數百個家庭，擁有高達9成的再次預約率！
                            <br>希望也能為您帶來更美好舒適的生活！
                        </h3>
                        <div class="index_intr_right_btn">
                            <button class="btn"><router-link :to="{ name: 'reserve' }">馬上預約</router-link></button>
                            <button class="btn"><router-link :to="{ name: 'game' }">測試你的清潔人格</router-link></button>
                            
                        </div>
                    </div>
                </div>

            </section>

            <section>
                <div class="title">
                    <h1>服務特色</h1>
                </div>
                <div class="index_feature">
                    <ul>
                        <li>
                            <h2>安心</h2>
                            <img src="@/img/index/index_feature1.png" alt="feature1">
                            <h4>我們的員工</h4>
                            <div class="index_feature_p">
                                <p>良民證</p>
                                <p>專業教育訓練</p>
                            </div>
                        </li>
                        <li>
                            <h2>細心</h2>
                            <img src="@/img/index/index_feature2.png" alt="feature2">
                            <h4>我們的品質</h4>
                            <div class="index_feature_p">
                                <p>SOP標準流程</p>
                                <p>環保清潔用品</p>
                            </div>
                        </li>
                        <li>
                            <h2>貼心</h2>
                            <img src="@/img/index/index_feature3.png" alt="feature3">
                            <h4>我們的服務</h4>
                            <div class="index_feature_p">
                                <p>充滿熱忱</p>
                                <p>您家就是我們家</p>
                            </div>
                        </li>
                        <li>
                            <h2>開心</h2>
                            <img src="@/img/index/index_feature4.png" alt="feature4">
                            <h4>我們的評價</h4>
                            <div class="index_feature_p">
                                <p>90%再次預約</p>
                                <p>總評價4.9★</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>

            <section>
                <div class="title">
                    <h1>服務流程</h1>
                </div>
                <div class="index_process">
                    <ul>
                        <li>
                            <h3>Step1</h3>
                            <h3 class="index_process_2h3">線上預約</h3>
                            <img src="@/img/index/index_process1.png" alt="process1">
                            <h4>隨時預約好方便</h4>
                        </li>
                        <li>
                            <h3>Step2</h3>
                            <h3 class="index_process_2h3">到府清潔</h3>
                            <img src="@/img/index/index_process2.png" alt="process2">
                            <h4>專業用心好乾淨</h4>
                        </li>
                        <li>
                            <h3>Step3</h3>
                            <h3 class="index_process_2h3">客戶驗收</h3>
                            <img src="@/img/index/index_process3.png" alt="process3">
                            <h4>輕鬆舒適好愜意</h4>
                        </li>
                        <li>
                            <h3>Step4</h3>
                            <h3 class="index_process_2h3">給予評價</h3>
                            <img src="@/img/index/index_process4.png" alt="process4">
                            <h4>浣安服務好滿意</h4>
                        </li>
                    </ul>
                </div>
            </section>

            <section>
                <div class="title">
                    <h1>常見問題</h1>
                </div>
                <div class="index_qa">
                    <ul>
                        <li>
                            <h2>有哪些服務內容？如何計費？</h2>
                        </li>
                        <li>
                            <h2>清潔用品由誰提供？須另外付費嗎？</h2>
                        </li>
                        <li>
                            <h2>變更或取消預約的相關規定為何？</h2>
                        </li>
                        <li>
                            <h2>打掃時屋主一定要在現場嗎？</h2>
                        </li>
                        <li>
                            <h2>如何預估清潔所需時間？</h2>
                        </li>
                    </ul>
                </div>
            </section>

            <section>
                <div class="index_game">
                    <div class="index_game_content">
                        <h1>想知道你是哪種清潔人格嗎？</h1>
                        <button class="btn"><router-link :to="{ name: 'game' }">點擊進入測驗</router-link></button>
                        
                    </div>
                </div>
            </section>
        </div>
    <btt />
    <indexFooter />
    </div>
</template>

<style lang="scss">


</style>



<!-- ================================================ -->
<!-- <script setup>

import indexFooter from '@/layouts/footer.vue';
import btt from '@/layouts/btt.vue';
import Modal from '@/components/ModalHamburger.vue'; 

import { ref, onMounted, onBeforeUnmount } from 'vue';

const isHeaderFixed = ref(false);

const isModalShow = ref(false);
const hamburger = ()=>{
    isModalShow.value = !isModalShow.value;
    // console.log( isModalShow.value)
};

const handleScroll = () => {
  let scrollDistance = window.scrollY || document.documentElement.scrollTop;

  if (scrollDistance > 50) {
    isHeaderFixed.value = true;
  } else {
    isHeaderFixed.value = false;
  }
};

function scrollTo(){
    window.scrollTo({
        top: 51,
        behavior: 'smooth'
    });
} 

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll);
});

</script>

<template>
    <div>
        <Modal @hamburger="hamburger" v-show="isModalShow" />

        <header class="index_header" :class="{ fixed: isHeaderFixed }"> 
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
                    <a href="#" class="fai"><font-awesome-icon icon="cart-shopping" /></a>
                </div>
            </div>
            <div class="hamburger" @click="hamburger">
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
            </div>
        </nav>

        <div class="header_center" @click="scrollTo">
            <img src="@/img/logo_square.svg" alt="logo">
            <h4>⌵</h4>
            <h4>scroll</h4>
        </div>

    </header>

        <div class="wrapper" :class="{ fixed: isHeaderFixed }">

            <section>
                <a class="index_first" href="#">
                    <h2>第一次來？歡迎點此快速了解網站使用說明！</h2>
                    <h2>還有初次消費的優惠碼喔！</h2>
                </a>

                <div class="index_rolling">
                    <div class="view">
                        <div class="pic-container">
                            <div class="pic">
                                <img src="@/img/index/index_carousel1.jpg" alt="carousel" />
                            </div>
                            <div class="pic">
                                <img src="@/img/index/index_carousel2.jpg" alt="carousel" />
                            </div>
                            <div class="pic">
                                <img src="@/img/index/index_carousel3.jpg" alt="carousel" />
                            </div>
                            <div class="pic">
                                <img src="@/img/index/index_carousel4.jpg" alt="carousel" />
                            </div>
                            <div class="pic">
                                <img src="@/img/index/index_carousel5.jpg" alt="carousel" />
                            </div>
                            <div class="pic">
                                <img src="@/img/index/index_carousel1.jpg" alt="carousel" />
                            </div>
                            <div class="pic">
                                <img src="@/img/index/index_carousel2.jpg" alt="carousel" />
                            </div>
                            <div class="pic">
                                <img src="@/img/index/index_carousel3.jpg" alt="carousel" />
                            </div>
                            <div class="pic">
                                <img src="@/img/index/index_carousel4.jpg" alt="carousel" />
                            </div>
                            <div class="pic">
                                <img src="@/img/index/index_carousel5.jpg" alt="carousel" />
                            </div>
                        </div>
                    </div>
                </div>

                <div class="index_intr">
                    <div class="index_intr_left">
                        <img src="@/img/index/index_star.png" alt="star">
                        <h2>輕鬆愜意，家的幸福保姆。</h2>
                    </div>
                    <div class="index_intr_right">
                        <h3>浣安致力於提供高品質的居家清潔服務，讓客戶享受乾淨、整潔的生活環境，減輕生活中的瑣事，專心追求更有價值的事物。</h3>
                        <h3>我們目前已服務數百個家庭，擁有高達9成的再次預約率！
                            <br>希望也能為您帶來更美好舒適的生活！
                        </h3>
                        <div class="index_intr_right_btn">
                            <button class="btn"><router-link :to="{ name: 'reserve' }">馬上預約</router-link></button>
                            <button class="btn"><router-link :to="{ name: 'game' }">測試你的清潔人格</router-link></button>
                            
                        </div>
                    </div>
                </div>

            </section>

            <section>
                <div class="title">
                    <h1>服務特色</h1>
                </div>
                <div class="index_feature">
                    <ul>
                        <li>
                            <h2>安心</h2>
                            <img src="@/img/index/index_feature1.png" alt="feature1">
                            <h4>我們的員工</h4>
                            <div class="index_feature_p">
                                <p>良民證</p>
                                <p>專業教育訓練</p>
                            </div>
                        </li>
                        <li>
                            <h2>細心</h2>
                            <img src="@/img/index/index_feature2.png" alt="feature2">
                            <h4>我們的品質</h4>
                            <div class="index_feature_p">
                                <p>SOP標準流程</p>
                                <p>環保清潔用品</p>
                            </div>
                        </li>
                        <li>
                            <h2>貼心</h2>
                            <img src="@/img/index/index_feature3.png" alt="feature3">
                            <h4>我們的服務</h4>
                            <div class="index_feature_p">
                                <p>充滿熱忱</p>
                                <p>您家就是我們家</p>
                            </div>
                        </li>
                        <li>
                            <h2>開心</h2>
                            <img src="@/img/index/index_feature4.png" alt="feature4">
                            <h4>我們的評價</h4>
                            <div class="index_feature_p">
                                <p>90%再次預約</p>
                                <p>總評價4.9★</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>

            <section>
                <div class="title">
                    <h1>服務流程</h1>
                </div>
                <div class="index_process">
                    <ul>
                        <li>
                            <h3>Step1</h3>
                            <h3 class="index_process_2h3">線上預約</h3>
                            <img src="@/img/index/index_process1.png" alt="process1">
                            <h4>隨時預約好方便</h4>
                        </li>
                        <li>
                            <h3>Step2</h3>
                            <h3 class="index_process_2h3">到府清潔</h3>
                            <img src="@/img/index/index_process2.png" alt="process2">
                            <h4>專業用心好乾淨</h4>
                        </li>
                        <li>
                            <h3>Step3</h3>
                            <h3 class="index_process_2h3">客戶驗收</h3>
                            <img src="@/img/index/index_process3.png" alt="process3">
                            <h4>輕鬆舒適好愜意</h4>
                        </li>
                        <li>
                            <h3>Step4</h3>
                            <h3 class="index_process_2h3">給予評價</h3>
                            <img src="@/img/index/index_process4.png" alt="process4">
                            <h4>浣安服務好滿意</h4>
                        </li>
                    </ul>
                </div>
            </section>

            <section>
                <div class="title">
                    <h1>常見問題</h1>
                </div>
                <div class="index_qa">
                    <ul>
                        <li>
                            <h2>有哪些服務內容？如何計費？</h2>
                        </li>
                        <li>
                            <h2>清潔用品由誰提供？須另外付費嗎？</h2>
                        </li>
                        <li>
                            <h2>變更或取消預約的相關規定為何？</h2>
                        </li>
                        <li>
                            <h2>打掃時屋主一定要在現場嗎？</h2>
                        </li>
                        <li>
                            <h2>如何預估清潔所需時間？</h2>
                        </li>
                    </ul>
                </div>
            </section>

            <section>
                <div class="index_game">
                    <div class="index_game_content">
                        <h1>想知道你是哪種清潔人格嗎？</h1>
                        <button class="btn"><router-link :to="{ name: 'game' }">點擊進入測驗</router-link></button>
                        
                    </div>
                </div>
            </section>
        </div>
    <btt />
    <indexFooter />
    </div>
</template>

<style lang="scss">


</style> -->