<script setup>
    // 設置header及footer
    import DefaultHeader from '@/layouts/header.vue'; // 引入header(請照抄)
    import DefaultFooter from '@/layouts/footer.vue'; // 引入footer(請照抄)
    import BannerUrl  from '@/img/pay/pay_banner.jpg'; // 更改成banner路徑
    const banner_url = BannerUrl; // banner路徑令變數(請照抄)
</script>


<template>
    <div>
        <DefaultHeader header-title-zh="商城結帳" header-title-eng="Checkout" :bgi="banner_url" />
        <div class="wrapper mPay3_wrapper">

            <!----------------- cart ------------------>

            <!-- 購物車清單 -->
            <div class="cart">
                <div class="cart-menu">

                    <div class="cart-top">
                        <h1 class="text-h1">購物車</h1>
                        <i id="close-btn" class="fas fa-times cart-menu-close-btn"></i>
                    </div>

                    <!-- 商品新增處 -->
                    <div class="product-rows">

                        <div class="product-row">

                            <img  class="cart-image" src="@/img/mall/mall_product1_1.jpg">

                            <div class="product-row-inner">
                                <h2>浣安手工香皂</h2>

                                <div class="cart_design">
                                    <h4>經典款</h4>
                                </div>

                                <div class="cal">
                                    <i class="fa-solid fa-minus cal_btn"></i>
                                    <div class="cal_count">1</div>
                                    <i class="fa-solid fa-plus cal_btn"></i>
                                </div>

                            </div>

                            <div class="product-row-price">
                                <span class ="cart-price">NT$200</span>
                                <i class="fa-solid fa-trash cart-item-remove-btn"></i>
                            </div>
                        </div>

                        <div class="product-row">
                            
                            <img  class="cart-image" src="@/img/mall/mall_product1_1.jpg">

                            <div class="product-row-inner">
                                <h2>浣安手工香皂</h2>

                                <div class="cart_design">
                                    <h4>經典款</h4>
                                </div>

                                <div class="cal">
                                    <i class="fa-solid fa-minus cal_btn"></i>
                                    <div class="cal_count">1</div>
                                    <i class="fa-solid fa-plus cal_btn"></i>
                                </div>

                            </div>

                            <div class="product-row-price">
                                <span class ="cart-price">NT$200</span>
                                <i class="fa-solid fa-trash cart-item-remove-btn"></i>
                            </div>
                        </div>

                        <div class="product-row">
                            
                            <img  class="cart-image" src="@/img/mall/mall_product1_1.jpg">

                            <div class="product-row-inner">
                                <h2>浣安手工香皂</h2>

                                <div class="cart_design">
                                    <h4>經典款</h4>
                                </div>

                                <div class="cal">
                                    <i class="fa-solid fa-minus cal_btn"></i>
                                    <div class="cal_count">1</div>
                                    <i class="fa-solid fa-plus cal_btn"></i>
                                </div>

                            </div>

                            <div class="product-row-price">
                                <span class ="cart-price">NT$200</span>
                                <i class="fa-solid fa-trash cart-item-remove-btn"></i>
                            </div>
                        </div>


                    </div>

                    <div class="cart-footer">
                        <div class="cart-menu-total">
                            <h2 class="cart-total">小計</h2>
                            <span class="total-price">$600</span>
                        </div>
                        <button class="btn purchase-btn">結帳去</button>
                    </div>
                </div>
            </div>
            <!-- 購物車清單結束 -->




            <!-- mPay3正式開始 -->
            <section class="mPay3">

                <div class="circle mPay3_circle">
                    <div class="circle_step">
                        <h1>1</h1>
                        <h1>訂單確認</h1>
                    </div>
                    <div class="circle_step">
                        <h1>2</h1>
                        <h1>訂單填寫</h1>
                    </div>
                    <div class="circle_step circle_on">
                        <h1>3</h1>
                        <h1>訂單成立</h1>
                    </div>
                </div>

                <img src="@/img/logo_square.svg" alt="">

                <h2>
                    感謝您的訂購
                    <br>
                    我們期待為您提供優質的服務
                </h2>

                <div class="mPay3_btn">

                    <button class="btn mPay3_btn">查看訂單</button>
                    <button class="btn mPay3_btn">回首頁</button>

                </div>



            </section>


        </div>
        <DefaultFooter />
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss">
</style>