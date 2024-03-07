<script setup>

import gameFooter from '@/layouts/footer.vue'
import ModalHamburger from '@/components/ModalHamburger.vue'; 
import ModalLogin from '@/components/ModalLogin.vue'; 
import { ref } from 'vue';
import { useRouter } from 'vue-router';

// 購物車
import { useCartStore } from '@/stores/cartStore.js';
import shoppingCart from '@/components/shoppingCart.vue';

const isHamburgerModalShow = ref(false);
const hamburger = ()=>{
    isHamburgerModalShow.value = !isHamburgerModalShow.value;
    // console.log( isModalShow.value)
};
const isLoginModalShow = ref(false);
const goLogin = ()=>{
    isLoginModalShow.value = !isLoginModalShow.value;
};
// 購物車
const cartStore = useCartStore();
const toggleCart = function() {
  cartStore.toggleCart();
};




const questions = ref([
  {
    question: '你對於居住環境的整潔程度有怎樣的要求？',
    options: ['亂中有序，自己覺得輕鬆舒適就好', '看心情，心情好看什麼都順眼啦', '看地方，對每個區域的要求不同', '有潔癖，一定要保持乾淨整齊']
  },
  {
    question: '你在家發現有些地方變得髒亂，會怎麼處理？',
    options: ['直到實在無法忍受才會動手清理', '只清理會看到及使用到的地方，其他不太在意', '定期進行全面性的打掃，確保整個環境的乾淨', '馬上清理，眼中容不下一根頭髮']
  },
  {
    question: '以下形容哪些較接近你理想中的居住環境？',
    options: ['功能性、實用為主', '有趣、多變', '美觀、賞心悅目', '簡單、乾淨、整齊']
  },
  {
    question: '當你有空閒時間，通常會做什麼活動？',
    options: ['喜歡放鬆，不太會主動找事情做', '想到什麼就做什麼的行動派', '事先規劃好行程，照著行程走', '勇於嘗試沒接觸過的新事物']
  }
]);

const totalScore = ref(0); // 定義一個累計分數變數
const activeIndex = ref(-1); // 初始值為-1，表示沒有選中的選項
const currentIndex = ref(0); // 追蹤問題是哪一個


const setActiveIndex = (index) => {
  activeIndex.value = index; // 更新選中的答案索引
};
const router = useRouter();  //  router 

const confirmAnswer = () => {
  if (activeIndex.value !== -1) {
    totalScore.value += activeIndex.value + 1;
    activeIndex.value = -1; // 重置 activeIndex 為 -1

    if (currentIndex.value < questions.value.length - 1) {
      currentIndex.value++; // 移動到下一題
    } else {
      // 顯示分數，並在用戶確認後跳轉到gameR 頁面
      // alert(`測試完成，您的總分是: ${totalScore.value}`);
// 根據總分跳轉到不同的頁面
    if (totalScore.value >= 4 && totalScore.value <= 6) {
            router.push({ name: 'gameRb' });
          } else if (totalScore.value >= 7 && totalScore.value <= 10) {
            router.push({ name: 'gameRf' });
          } else if (totalScore.value >= 11 && totalScore.value <= 13) {
            router.push({ name: 'gameRj' });
          } else if (totalScore.value >= 14 && totalScore.value <= 16) {
            router.push({ name: 'gameRt' });
          }
    }
  } else {
    // alert('請選擇一個答案');
  }
};


</script>


<template>
    <div>
        <ModalHamburger @hamburger="hamburger" v-show="isHamburgerModalShow" />
        <ModalLogin @ModalLogin="goLogin" v-show="isLoginModalShow" />
        <header class="fixed">
            <nav>
            <div class="nav_left">
                <router-link :to="{ name: 'home' }"><img src="@/img/logo_long.svg" alt="logo"></router-link>
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
                    <a href="#" class="fai" @click.prevent="goLogin"> <font-awesome-icon  icon="user" />
                    </a>
                    <a href="#" class="fai cart" @click.prevent="toggleCart"><font-awesome-icon icon="cart-shopping" /><span>{{ cartStore.cartItems.length }}</span></a>
                </div>
            </div>
            <a href="#" class="fai cart_m" @click.prevent="toggleCart"><font-awesome-icon icon="cart-shopping" /><span>{{ cartStore.cartItems.length }}</span></a>

            <div class="hamburger" @click="hamburger">
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
          <div class="cloud">
          <img src="../img/game/gameR_name.svg" alt="gamename">
            <h2>{{ questions[currentIndex].question }}</h2>
          </div>
            
            
            <h4 v-for="(option, index) in questions[currentIndex].options" 
                :key="index" 
                @click="setActiveIndex(index)"
                :class="{ active: activeIndex === index }">
            {{ option }}
            </h4>
            
            <button class="btn" @click="confirmAnswer">下一題</button>
        </div>
        </div>
    </section>
    </div>

    <gameFooter />

    </div>
</template>

<style lang="scss">


</style>