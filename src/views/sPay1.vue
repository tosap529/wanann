<template>
    <div>
        <div class="wrapper mPay1_wrapper">
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
                    <h1>清潔服務</h1>
                </div>

                <!-- 待改成服務的資料 -->
                <div class="mPay1_items">

                    <div class="mPay1_item">

                        <img src="@/img/mall/mall_product1_1.jpg">
                        <div class="mPay1_item_name">
                            <h2>浣安手工香皂</h2>
                            <div class="mPay1_design">
                                <h4>經典款</h4>
                            </div>
                        </div>

                        <div class="cal">
                            <i class="fa-solid fa-minus cal_btn"></i>
                            <div class="cal_count">1</div>
                            <i class="fa-solid fa-plus cal_btn"></i>
                        </div>

                        <div class="mPay1_item_price">
                            <h2>NTD200</h2>
                            <i class="fa-solid fa-trash"></i>
                        </div>

                    </div>

                    <div class="mPay1_item">

                        <img src="@/img/mall/mall_product1_1.jpg">
                        <div class="mPay1_item_name">
                            <h2>浣安手工香皂</h2>
                            <div class="mPay1_design">
                                <h4>經典款</h4>
                            </div>
                        </div>

                        <div class="cal">
                            <i class="fa-solid fa-minus cal_btn"></i>
                            <div class="cal_count">1</div>
                            <i class="fa-solid fa-plus cal_btn"></i>
                        </div>

                        <div class="mPay1_item_price">
                            <h2>NTD200</h2>
                            <i class="fa-solid fa-trash"></i>
                        </div>

                    </div>

                </div>

                <div class="mPay1_coupon">
                    <div class="mPay1_coupon_number">
                        <h3>優惠代碼</h3>
                        <input class="mPay1_coupon_input" type="text" placeholder="請輸入優惠代碼">
                        <button class="btn mPay1_btn">兌換</button>
                        <p class="mPay1_coupon_success">兌換成功</p>
                    </div>
                    <div class="mPay1_coupon_discount">
                        <h2>優惠代碼</h2>
                        <h2>NTD -100</h2>
                    </div>
                </div>

                
                <div class="mPay1_payment">
                    <h3>付款方式</h3>
                    <h3>信用卡</h3>
                </div>
                
                <div class="mPay1_total">
                        <h2>總金額</h2>
                        <h1>NTD4,400</h1>
                </div>

                <button class="btn mPay1_nextpage">下一步</button>

            </section>
        
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss">
@import '@/sass/main.scss';

</style>