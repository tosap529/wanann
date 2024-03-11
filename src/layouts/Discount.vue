<script setup>

    import { defineProps, ref} from 'vue';
import { compileStyleAsync } from 'vue/compiler-sfc';

    defineProps({discountItems: Array});


 // --------------------複製功能----------------------->
    const showSuccessModal = ref(false);
 
    const copyValue = (couponId) => {
        const inputElement = document.createElement('input');
        inputElement.value = couponId;
        document.body.appendChild(inputElement);
        inputElement.select();
        document.execCommand('copy');
        document.body.removeChild(inputElement);

        showSuccessModal.value = true;
        setTimeout(() => {
            showSuccessModal.value = false;
         }, 600);
  
    };
    const closeModal = () => {
        showSuccessModal.value = false;
    };
</script>

<template>
    <div>

    <section class="act_main" v-for="ditem in discountItems" :key="ditem.ID">

        <article>
            <h2 class=" new -none"></h2>
            <img :src= "ditem.PIC" alt="">
            <!-- <img src="../../public/img/act/act_2.jpg" alt=""> -->
            <div class="right">
                <h2>{{ditem.TITLE}}</h2>
                <h4>{{ditem.CONTENT}}</h4>
                <div class="coupon_container">
                    <input type="text" :value="ditem.COUPON_ID" class="coupon_input" readonly="readonly" >
                    <button class="copy_button" id="copy_btn" @click="copyValue(ditem.COUPON_ID)">複製</button>
                    <div v-if="showSuccessModal" class="modal">
                            <div class="modal_content">
                                <span class="close" @click="closeModal">&times;</span>
                                <img src="@/img/logo_title.svg" alt="logo">
                                <p>已複製優惠碼</p>
                            </div>
                    </div>
                   
                </div>
                <h3>使用期限至 {{ ditem.DEADLINE }} </h3>
            </div>
        </article> 
        <!-- <article>
            <h2 class=" new -none">除舊佈新迎新春，優惠搶先看</h2>
            <img src="../img/act/act_1.jpg" alt="">
            <div class="right">
                <h2>除舊佈新迎新春，優惠搶先看</h2>
                <h4>新的一年到了，是時候給家居進行一番除舊佈新的大改變了！我們為您提供了獨家的優惠活動，只需在購物時輸入優惠碼，即可立即享受100元折扣。這是一個難得的機會，讓您以更實惠的價格，更新您家中的各種家居用品以及獲得我們的折扣服務。
                </h4>
                <div class="coupon_container">
                    <input type="text" value="G1d96PT32f147" class="coupon_input" readonly="readonly">
                    <button class="copy_button" id="copy_btn">複製</button>
                </div>
                <h3>使用期限至 2024-02-07 </h3>
            </div>
        </article>
        <article>
            <h2 class=" new -none">歡慶5週年，折扣大放送 </h2>
            <img src="../img/act/act_2.jpg" alt="">
            <div class="right">
                <h2>歡慶5週年，折扣大放送 </h2>
                <h4>親愛的顧客，感謝您在過去五年來的一路相伴與支持，我們的五週年慶典終於來臨了！為了回饋您的支持與信任，我們決定推出一場盛大的折扣大放送！有消費紀錄的會員皆可獲得200元大禮包~</h4>
                <div class="coupon_container">
                    <input type="text" value="Z896tg321q21" class="coupon_input" readonly="readonly">                <button class="copy_button">複製</button>
                </div>
                <h3>使用期限至 2024-01-20 </h3>
            </div>
        </article>
        <article>
            <h2 class=" new -none">聖誕節快樂！獨家折扣驚喜等您！</h2>
            <img src="../img/act/act_3.jpg" alt="">
            <div class="right">
                <h2>聖誕節快樂！獨家折扣驚喜等您！</h2>
                <h4>沒事就來瀏覽我們的商城，不時你會發現許多驚喜的折扣跟商品優惠，讓您的聖誕購物之旅能更加有趣且又經濟實惠。這個聖誕節，讓我們一同分享愛與喜悅，盡情享受購物的樂趣吧！祝您聖誕快樂！</h4>
                <div class="coupon_container">
                    <input type="text" value="G81PT123d2824" class="coupon_input" readonly="readonly">
                    <button class="copy_button">複製</button>
                </div>
                <h3>使用期限至 2023-12-31 </h3>
            </div>
        </article>
        <article>
            <h2 class=" new -none">感恩父愛，歡慶父親節特別活動！</h2>
            <img src="../img/act/act_4.jpg" alt="">
            <div class="right">
                <h2>感恩父愛，歡慶父親節特別活動！</h2>
                <h4>我們為您挑選了一系列精心設計的禮物，涵蓋了從cp值極高的服務內容到實用家居用品的多個品類。所有商品將在活動期間享有特別優惠價格，折扣88元，讓您可以用心選擇一份特別的禮物，為父親帶來驚喜。
                </h4>
                <div class="coupon_container">
                    <input type="text" value="A835TW321193" class="coupon_input" readonly="readonly">
                    <button class="copy_button">複製</button>
                </div>
                <h3>使用期限至 2023-08-11 </h3>
            </div>
        </article> -->

    </section>
    </div>
</template> 

<style lang="scss" scoped>
.modal {
    display: block; 
    position: fixed; 
    z-index: 12; 
    left: 0;
    top: 0;
    background-color: rgba(0, 0, 0, .2); 
}

.modal_content {
    margin: 0 auto;
    margin-top: 17%;
    background-color:#B69B85;
    width: 165px;
    border: none;
    text-align: center;
    padding: 16px;
    border-radius: 8px;
    animation: rotate .5s linear infinite alternate;
    display: flex;
    img{
    width:22px;
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