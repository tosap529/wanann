<script setup>

import gameFooter from '@/layouts/footer.vue'
import ModalHamburger from '@/components/ModalHamburger.vue'; 
import ModalLogin from '@/components/ModalLogin.vue'; 
import { ref,onMounted } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter();
// 購物車
import { useCartStore } from '@/stores/cartStore.js';
import shoppingCart from '@/components/shoppingCart.vue';

// 漢堡
const isHamburgerModalShow = ref(false);
const hamburger = ()=>{
    isHamburgerModalShow.value = !isHamburgerModalShow.value;
    // console.log( isModalShow.value)
};

// 會員登入
const isLoginModalShow = ref(false);
const goLogin = ()=>{
    if(sessionStorage.getItem('member_ID')){
        router.push({path:"/member"});
    }else{
        isLoginModalShow.value = !isLoginModalShow.value;
    }
};
// 會員驗證
const memberProfilePic = ref(null);
onMounted(() => {
  if(sessionStorage.getItem('member_ID')){
    memberProfilePic.value.innerHTML = `<img src="${sessionStorage.getItem('member_pic')}" >`;
  }else{
    console.log('1111');
  }
});

// 複製分享連結
const showSuccessModal = ref(false);

const urlToCopy = 'https://tibamef2e.com/thd104/g1/game';

const copyUrl = () => {
  const el = document.createElement('textarea');
  el.value = urlToCopy;
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
  showSuccessModal.value = true;
  setTimeout(() => {
            showSuccessModal.value = false;
         }, 800);
};
const closeModal = () => {
        showSuccessModal.value = false;
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
                    <a href="#" class="fai" @click.prevent="goLogin"> <font-awesome-icon  icon="user" ref="memberProfilePic"/>
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
                    <img src="@/img/game/gameR_brid.png" alt="brid" class="animal">
                    <h2>鳥型清潔人格</h2>
                    <p>你是個喜歡規劃的人，對於居住環境的整潔會有要求，但可能不會一發現就馬上去清理，而是按照計劃定期清理。</p>
                    <p class="btn_p">人格魅力</p>
                    <p>你的生活狀態維持得不錯，因為你喜歡規劃，所以通常能夠保持整齊有序的生活環境。這讓你看起來更加有組織，也讓自己感到較為舒適。</p>
                    <p class="btn_p">建議</p>
                    <p>天有不測風雲，計劃時常會被打亂，儘管你擁有很好的規劃能力，但也要能夠在計劃外應對變化。</p>
                    <p class="btn_p">適合你的清潔法寶</p>

                    <div class="gameR_recomm">
                        <a href="https://tibamef2e.com/thd104/g1/mItem/18" title="綠意環保補充瓶"><img src="@/img/game/gameR_brid_recomm1.jpg" alt="recomm"></a>
                        <a href="https://tibamef2e.com/thd104/g1/mItem/20" title="木製家居掃把"><img src="@/img/game/gameR_brid_recomm2.jpg" alt="recomm"></a>
                    </div>
                    <div class="gameR_share">
                        <button class="btn" @click="copyUrl">分享給朋友</button>
                        <div v-if="showSuccessModal" class="modal">
                    <div class="modal_content">
                        <span class="close" @click="closeModal">&times;</span>
                        <img src="../img/logo_title.svg" alt="logo">
                        <p>已複製測驗連結</p>
                    </div>
                </div>
                        <router-link :to="{ name: 'game' }"><button class="btn">再測一次</button></router-link>
                    </div>
                </div>
            </div>

        </section>
    </div>
    <gameFooter />

    </div>
</template>

<style lang="scss" scoped>

.modal {
    display: block; 
    position: fixed; 
    z-index: 12; 
    left: 0;
    top: 0;
    background-color: rgba(0, 0, 0, .5); 
}

.modal_content {
    margin: 0 auto;
    margin-top: 17%;
    background-color:#B69B85;
    width: 185px;
    border: none;
    text-align: center;
    padding: 16px;
    border-radius: 8px;
    animation: rotate .5s linear infinite alternate;
    display: flex;
    img{
    width:28px;
    }
    p{    
    font-size: 16px;
    letter-spacing: .5px;
    text-align: center;
    margin: 0 auto;
    color: white;
    position: relative;}
}

@keyframes rotate {
  0% {
    transform: rotate(-5deg);
  }
  100% {
    transform: rotate(5deg); 
  }
}

.close {
    display: none;
}

</style>