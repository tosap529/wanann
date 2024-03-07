<template>
    <div>
        <DefaultHeader header-title-zh="商城結帳" header-title-eng="Checkout" :bgi="banner_url" />
        <wrapper class="wrapper mPay1_wrapper">
            <section class="mPay1">

                <div class="mPay1_circle circle">
                    <div class="circle_step circle_on">
                        <h1>1</h1>
                        <h1>訂單確認</h1>
                    </div>
                    <div class="circle_step">
                        <h1>2</h1>
                        <h1>訂單填寫</h1>
                    </div>
                    <div class="circle_step">
                        <h1>3</h1>
                        <h1>訂單成立</h1>
                    </div>
                </div>

                <div class="title mPay1_title">
                    <h1>商城產品</h1>
                </div>

                <div class="mPay1_items">

                    <div class="mPay1_noItem"
                         v-if=" cartStore.cartItems.length == 0 ">
                        <img src="@/img/logo_title.svg">
                        <h1>沒有選擇任何商品喔</h1>
                        <router-link class="btn" :to="{ name: 'mall' }">去商城逛逛</router-link>
                    </div>

                    <div 
                        class="mPay1_item"
                        v-for="(i, index) in cartStore.cartItems">

                        <img v-bind:src="i.PRODUCT_PIC1">

                        <div class="mPay1_item_product">

                            <div class="mPay1_item_name">
                                <h2>{{ i.PRODUCT_NAME }}</h2>
                                <div class="mPay1_design">
                                    <h4>經典款</h4>
                                </div>
                            </div>

                            <div class="cal">
                                <font-awesome-icon @click="quantityMinus(index)"  class="cal_btn" :icon="['fas', 'minus']" />
                                <div class="cal_count">{{ i.quantity }}</div>
                                <font-awesome-icon @click="quantityPlus(index)" class="cal_btn" :icon="['fas', 'plus']" />
                            </div>


                        </div>

                        <div class="mPay1_item_price">
                            <h2>NTD{{ i.PRODUCT_PRICE * i.quantity }}</h2>
                            <font-awesome-icon @click="cartStore.removeFromCart(index)" class="mPay1_item_price_icon" :icon="['fas', 'trash']" />
                        </div>


                    </div>

                    <!-- <div class="mPay1_item">

                        <img src="@/img/mall/mall_product1_1.jpg">

                        <div class="mPay1_item_product">

                            <div class="mPay1_item_name">
                                <h2>浣安手工香皂</h2>
                                <div class="mPay1_design">
                                    <h4>經典款</h4>
                                </div>
                            </div>

                            <div class="cal">
                                <font-awesome-icon class="cal_btn" :icon="['fas', 'minus']" />
                                <div class="cal_count">1</div>
                                <font-awesome-icon class="cal_btn" :icon="['fas', 'plus']" />
                            </div>


                        </div>

                        <div class="mPay1_item_price">
                            <h2>NTD 200</h2>
                            <i class="fa-solid fa-trash"></i>
                            <font-awesome-icon class="mPay1_item_price_icon" :icon="['fas', 'trash']" />
                        </div>


                    </div> -->

                </div>


                <div class="mPay1_des">
                    <div class="mPay1_des_step">

                        <div class="mPay1_coupon_number">
                            <h3>優惠代碼</h3>
                            <input class="mPay1_coupon_input" type="text" placeholder="請輸入優惠代碼" v-model="inputNumber">
                            <button class="btn mPay1_btn" @click="isCouponMatch">兌換</button>
                            <p v-if="couponStatus === true" class="mPay1_coupon_success">兌換成功！</p>
                            <p v-if="couponStatus === false" class="mPay1_coupon_fail">兌換失敗！</p>
                        </div>

                        <div class="mPay1_shipping_methods">
                            <h3>寄送方式</h3>
                            <h3>宅配到府</h3>
                        </div>

                        <div class="mPay1_payment">
                            <h3>付款方式</h3>
                            <h3>信用卡</h3>
                        </div>

                    </div>

                    <div class="mPay1_des_price">

                        <div class="mPay1_coupon_discount">
                            <h2>優惠代碼</h2>
                            <h2>NTD {{ -couponDiscount }}</h2>
                        </div>

                        <div class="mPay1_shipping_fee">
                            <h2>運費</h2>
                            <h2>NTD 60</h2>
                        </div>

                    </div>
                </div>

                <div class="mPay1_total">
                    <h2>總金額</h2>
                    <h1 @click="showcouponArray">NTD {{ calCartTotal }}</h1>
                </div>

                <!-- <button class="btn mPay1_nextpage">下一步</button> -->
                <router-link class="btn mPay1_nextpage" :to="{ name: 'mPay2' }">下一步</router-link>

            </section>
        
        </wrapper>
        <DefaultFooter />
    </div>
</template>



<script setup>
    // 設置header及footer
    import DefaultHeader from '@/layouts/header.vue';
    import DefaultFooter from '@/layouts/footer.vue';
    import BannerUrl  from '@/img/pay/pay_banner.jpg';
    import wrapper from '@/layouts/wrapper.vue';
    const banner_url = BannerUrl;

    import { useCartStore } from '@/stores/cartStore.js';
    const cartStore = useCartStore();

    import { ref, computed } from 'vue';
    
    const quantityPlus = function(index) {
        cartStore.cartItems[index].quantity += 1

        cartStore.updateLocalStorage(cartStore.cartItems);
    }

    const quantityMinus = function(index) {
        if( cartStore.cartItems[index].quantity > 1 ){
            cartStore.cartItems[index].quantity -= 1
            cartStore.updateLocalStorage(cartStore.cartItems);
        }
    }

    // 總價
    const calCartTotal = computed(function() {
        const total = cartStore.cartItems.reduce((total, item) => {
            return total + (item.PRODUCT_PRICE * item.quantity);
        }, 0) + 60 - couponDiscount.value;

        cartStore.updateTotalPrice(total);
        return total;
    });


    // 優惠代碼API
    
    const couponNumber = ref();
    // 本機
    // const url = 'http://localhost/thd104/g1/public/php/mPay1_select.php';

    // 上伺服器
    const url = 'php/mPay1_select.php';
        
    fetch(url)
        .then(response => response.json())
        .then(response => {

            couponNumber.value = response;
        })
        .catch(error => {
            console.error('Error:', error);
        });

    const showcouponArray = function(){
        console.log(couponNumber.value);
    }

    // 優惠券兌換
    const inputNumber = ref();

    const couponCheck = function() {
        if (Array.isArray(couponNumber.value)) {
            const foundCoupon = couponNumber.value.find(item => item.COUPON_ID === inputNumber.value);


            return foundCoupon || null;
        }
        return null;

    };

    const couponStatus = ref(null);
    const couponDiscount = ref(0)

    const isCouponMatch = function() {
        const matchedCoupon = couponCheck();
        if (matchedCoupon) {
            couponStatus.value = true;
            couponDiscount.value = matchedCoupon.COUPON_PRICE;

            cartStore.couponDiscount = matchedCoupon.COUPON_PRICE

            cartStore.couponActId = matchedCoupon.ID

            console.log(cartStore.couponActId);
        } else {
            couponStatus.value = false;
            couponDiscount.value = 0;

            cartStore.couponDiscount = 0;
        }

    };

    


</script>


<style lang="scss">

</style>