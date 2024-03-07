<script setup>

import gameFooter from '@/layouts/footer.vue'
import ModalHamburger from '@/components/ModalHamburger.vue'; 
import ModalLogin from '@/components/ModalLogin.vue'; 
import { ref,onMounted } from 'vue';

// 購物車
import { useCartStore } from '@/stores/cartStore.js';
import shoppingCart from '@/components/shoppingCart.vue';
//會員驗證
const memberProfilePic = ref(null);
onMounted(() => {
  if(sessionStorage.getItem('member_ID')){
    memberProfilePic.value.innerHTML = `<img src="${sessionStorage.getItem('member_pic')}" >`;
  }else{
    console.log('1111');
  }
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
                    <a href="#" class="fai" @click.prevent="goLogin" ref="memberProfilePic"> <font-awesome-icon  icon="user" />
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
            <div class="gameR_contect">
                <div class="gameR_text">
                    <img src="@/img/game/gameR_name.svg" alt="gamename">
                    <h3>你的清潔人格是...</h3>
                    <img src="@/img/game/gameR_fox.png" alt="fox" class="animal">
                    <h2>狐型清潔人格</h2>
                    <p>你是個機靈的人，對於居住環境的整潔會有要求，但可能只著重在某些特定部分，這顯示你注重重要性，擅長挑選關鍵區域進行整理。</p>
                    <p class="btn_p">人格魅力</p>
                    <p>你的生活狀態比較有彈性，你擅長抓重點，有一些特別出色的地方，且不會把自己侷限在框框裡。</p>
                    <p class="btn_p">建議</p>
                    <p>儘管有時專注於特定區域是高效的，但也要注意其他地方的整潔。過分忽視某些區域可能會導致整體環境不夠協調。</p>
                    <p class="btn_p">適合你的清潔法寶</p>

                    <div class="gameR_recomm">
                        <a href="#" title="輕巧型吸塵器"><img src="@/img/game/gameR_bear_recomm1.jpg" alt="recomm"></a>
                        <a href="#" title="智能潔淨掃地機器人"><img src="@/img/game/gameR_bear_recomm2.jpg" alt="recomm"></a>
                    </div>
                    <div class="gameR_share">
                        <button class="btn">分享給朋友</button>
                        <router-link :to="{ name: 'game' }"><button class="btn">再測一次</button></router-link>
                    </div>
                </div>
            </div>

        </section>
    </div>
    <gameFooter />

    </div>
</template>

<style lang="scss" >


</style>