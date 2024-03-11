<script setup>
defineEmits(['first'])

import { ref } from 'vue';

const couponInput = ref(null);
const couponCode = 'welcome0101';
const showSuccessModal = ref(false);

const copyValue = () => {
  if (couponInput.value) {
    couponInput.value.select();
    document.execCommand('copy');
    showSuccessModal.value = true;
  setTimeout(() => {
            showSuccessModal.value = false;
         }, 600);
  }
};
const closeModal = () => {
        showSuccessModal.value = false;
    };
</script>

<template>
    <div>

        <div class="modal_mask" @click.self="$emit('first')" >

            <div class="modal_content first">

                <div class="title">
                    <h1>歡迎蒞臨浣安！</h1>
                    <img class="cross_modal" @click="$emit('first')" src="@/img/about/about_lightbox_cross.svg" alt="">
                </div>
                <h4>浣安是一間提供居家清潔服務的機構，若您有相關的需求，衷心期盼您給我們一個機會，讓您體驗到令人安心又高品質的服務！</h4>

                <h4>請根據您的需求點選以下連結：</h4>

                <ul>
                    <li><router-link :to="{ name: 'about' }"><h4>想了解浣安的服務和其他機構有什麼不同</h4></router-link></li>
                    <li><router-link :to="{ name: 'service' }"><h4>想了解/預約居家清潔服務</h4></router-link></li>
                    <li><router-link :to="{ name: 'mall' }"><h4>想購買浣安嚴選的清潔用品</h4></router-link></li>
                    <li><router-link :to="{ name: 'game' }"><h4>放鬆一下，測試自己的清潔人格</h4></router-link></li>
                </ul>

                <div class="first_coupon">
                    <h3>領取初次消費優惠碼：</h3>
                    <div class="coupon_btn">
                        <input ref="couponInput" type="text" :value="couponCode" class="coupon_input" readonly>
                        <button class="copy_button" @click="copyValue">複製</button>
                        <div v-if="showSuccessModal" class="modal">
                                <div class="modal_content">
                                    <span class="close" @click="closeModal">&times;</span>
                                    <img src="@/img/logo_title.svg" alt="logo">
                                    <p>已複製連結</p>
                                </div>
                        </div>
                    </div>

                    <h4>折抵100元</h4>
                </div>

            </div>
        </div>

    </div>
</template>


<style lang="scss">
@import '@/sass/main.scss';

.first{
    max-width: 700px;
    margin: 0 auto;
    margin-top: 90px;
    border-radius: 10px;
    background-color: $white;
    padding: 28px;
    @media screen and (max-width: 725px) {
        max-width: 500px;
    }
    @media screen and (max-width: 530px) {
    max-width: 360px;
    padding: 20px;
    }
    .title{
        position: relative;
        margin-bottom: 20px;
        h1{
            font-size: $h2;
            vertical-align: center;
        }
        >h1::before {
            content: '';
            display: block;
            width: 30px;
            height: 21.63px;
            background-image: url(@/img/logo_title.svg);
            background-size: cover;
            margin-right: 8px;
        }
        img.cross_modal{
            cursor: pointer;
            width: 24px;
            position: absolute;
            right: 0;
            top: -3px;
        }
    }

    >h4{
        margin-bottom: 28px;
    }

    ul{
        li{
            h4{
                display: flex;
                align-items: center;
                margin-bottom: 28px;
                color: $brown;
                font-weight: bold;
                cursor: pointer;
                line-height: 1.4;
                &:hover{
                color: $dark-milktea ;
                }
            }
            h4::before {
                content: '';
                display: block;
                width: 25px;
                height: 25px;
                background-image: url(@/img/index/index_qm.svg);
                background-repeat: no-repeat;
                background-size: contain;
                margin-right: 10px;
            }
        }
    }

    .first_coupon{
        display: flex;
        align-items: center;
        @media screen and (max-width: 530px) {
        display: block;
        position: relative;
        }
        .coupon_btn{
            @media screen and (max-width: 530px) {
                   margin-top: 16px;
                }
            input {
                background-color: $light-milktea;
                width: 130px;
                border: 0;
                outline: 0;
                padding-left: 20px;
                border-radius: 10px 0 0 10px;
                margin-left: 10px;
                @media screen and (max-width: 530px) {
                    margin-left: 0;
                }
            }

            .copy_button {
                text-align: center;
                font-size: $h4;
                color: $white;
                background-color: $brown;
                width: 70px;
                height: 40px;
                border-radius: 0 10px 10px 0;
                cursor: pointer;
                border: none;
                margin-right: 16px;
                margin-top: 1px;
            }
        }

        h4{
            @media screen and (max-width: 725px)  {
                   font-size: $h4;
                   position: absolute;
                   right: 36px;
                   bottom: 12px;
            }
        } 
    }

    
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
    width: 155px;
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
}

</style>