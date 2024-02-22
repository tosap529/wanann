<script setup>
    // 數量按鈕
    import calBar from '@/components/cal.vue';
    // 設置header及footer
    import DefaultHeader from '@/layouts/header.vue'; // 引入header(請照抄)
    import DefaultFooter from '@/layouts/footer.vue'; // 引入footer(請照抄)
    import BannerUrl  from '@/img/pay/pay_banner.jpg'; // 更改成banner路徑
    import wrapper from '@/layouts/wrapper.vue'; // 引入wrapper滑動(請照抄)
    const banner_url = BannerUrl; // banner路徑令變數(請照抄)

    import { ref } from 'vue';
    
    // -----------------------------  數量按鈕  ------------------------
    // 商品單價
    const pricePerUnit = 200;
    
    const ItemTotalPrice = ref(pricePerUnit);

    const handleCountUpdate = (ddd) => {
        ItemTotalPrice.value = pricePerUnit * ddd;
        console.log(ddd)
    };
    // -----------------------------  數量按鈕  ------------------------
</script>



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

                    <div class="mPay1_item">

                        <img src="@/img/mall/mall_product1_1.jpg">

                        <div class="mPay1_item_product">

                            <div class="mPay1_item_name">
                                <h2>浣安手工香皂</h2>
                                <div class="mPay1_design">
                                    <h4>經典款</h4>
                                </div>
                            </div>

                            <!-- <div class="cal">
                                <font-awesome-icon class="cal_btn" :icon="['fas', 'minus']" />
                                <div class="cal_count">1</div>
                                <font-awesome-icon class="cal_btn" :icon="['fas', 'plus']" />
                            </div> -->
                            <!-- 數量按鈕 -->
                            <calBar @updateCount="handleCountUpdate" />

                        </div>

                        <!-- <div class="mPay1_item_price">
                            <h2>NTD200</h2>
                            <font-awesome-icon class="mPay1_item_price_icon" :icon="['fas', 'trash']" />
                        </div> -->
                        <div class="mPay1_item_price">
                            <h2>NTD{{ ItemTotalPrice }}</h2>
                            <font-awesome-icon class="mPay1_item_price_icon" :icon="['fas', 'trash']" />
                        </div>

                    </div>

                    <div class="mPay1_item">

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
                            
                            <!-- <calBar @updateCount="handleCountUpdate" /> -->

                        </div>

                        <div class="mPay1_item_price">
                            <h2>NTD200</h2>
                            <i class="fa-solid fa-trash"></i>
                            <font-awesome-icon class="mPay1_item_price_icon" :icon="['fas', 'trash']" />
                        </div>
                        <!-- <div class="mPay1_item_price">
                            <h2>NTD{{ ItemTotalPrice }}</h2>
                            <font-awesome-icon class="mPay1_item_price_icon" :icon="['fas', 'trash']" />
                        </div> -->

                    </div>

                </div>


                <div class="mPay1_des">
                    <div class="mPay1_des_step">

                        <div class="mPay1_coupon_number">
                            <h3>優惠代碼</h3>
                            <input class="mPay1_coupon_input" type="text" placeholder="請輸入優惠代碼">
                            <button class="btn mPay1_btn">兌換</button>
                            <p class="mPay1_coupon_success">兌換成功</p>
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
                            <h2>NTD -60</h2>
                        </div>

                        <div class="mPay1_shipping_fee">
                            <h2>運費</h2>
                            <h2>NTD 60</h2>
                        </div>

                    </div>
                </div>

                <div class="mPay1_total">
                    <h2>總金額</h2>
                    <h1>NTD400</h1>
                </div>

                <!-- <button class="btn mPay1_nextpage">下一步</button> -->
                <router-link class="btn mPay1_nextpage" :to="{ name: 'mPay2' }">下一步</router-link>

            </section>
        
        </wrapper>
        <DefaultFooter />
    </div>
</template>




<style lang="scss">

</style>