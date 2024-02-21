<script setup>
    // 設置header及footer
    import DefaultHeader from '@/layouts/header.vue'; // 引入header(請照抄)
    import DefaultFooter from '@/layouts/footer.vue'; // 引入footer(請照抄)
    import BannerUrl  from '@/img/pay/pay_banner.jpg'; // 更改成banner路徑
    import wrapper from '@/layouts/wrapper.vue'; // 引入wrapper滑動(請照抄)
    const banner_url = BannerUrl; // banner路徑令變數(請照抄)
</script>


<template>
    <div>
        <DefaultHeader header-title-zh="商城結帳" header-title-eng="Checkout" :bgi="banner_url" />
        <wrapper class="wrapper mPay2_wrapper">
            <section class="mPay_2">

                <div class="circle mPay2_circle">
                    <div class="circle_step">
                        <h1>1</h1>
                        <h1>訂單確認</h1>
                    </div>
                    <div class="circle_step circle_on">
                        <h1>2</h1>
                        <h1>訂單填寫</h1>
                    </div>
                    <div class="circle_step">
                        <h1>3</h1>
                        <h1>訂單成立</h1>
                    </div>
                </div>

                <div class="title mPay2_title">
                    <h1>商城產品</h1>
                </div>

                <!-- 商品新增處 -->
                <div class="mPay2_items">

                    <div class="mPay2_item">

                        <img src="@/img/mall/mall_product1_1.jpg">

                        <div class="mPay2_item_product">

                            <div class="mPay2_item_name">
                                <h2>浣安手工香皂</h2>
                                <div class="mPay2_design">
                                    <h4>經典款</h4>
                                </div>
                            </div>

                        </div>

                        <div class="mPay2_item_price">
                            <h2>NTD200</h2>
                            <p>X2</p>
                        </div>

                    </div>

                    <div class="mPay2_item">

                        <img src="@/img/mall/mall_product1_1.jpg">

                        <div class="mPay2_item_product">

                            <div class="mPay2_item_name">
                                <h2>浣安手工香皂</h2>
                                <div class="mPay2_design">
                                    <h4>經典款</h4>
                                </div>
                            </div>

                        </div>

                        <div class="mPay2_item_price">
                            <h2>NTD200</h2>
                            <p>X2</p>
                        </div>

                    </div>

                </div>

                <div class="mPay2_coupon">
                        <h2>優惠代碼</h2>
                        <h2>NTD -60</h2>
                </div>
                
                <div class="mPay2_shipping">
                        <h2>運費</h2>
                        <h2>NTD 60</h2>
                </div>

                <div class="mPay2_total">
                    <h2>總金額</h2>
                    <h1>NTD800</h1>
                </div>

                <div class="mPay2_info">
                    <div class="mPay2_custom">

                        <div class="title mPay2_title">
                            <h1>收件人資料</h1>
                        </div>

                        <div class="mPay2_info_name">
                            <h2>收件人姓名</h2>
                            <input type="text" placeholder="收件人姓名">
                        </div>

                        <div class="mPay2_info_phone">
                            <h2>收件人手機號碼</h2>
                            <input type="text" placeholder="請輸入手機號碼">
                        </div>

                        <div class="mPay2_info_address">
                            <h2>商品收件地址</h2>
                            <input class="mPay2_info_address_input" type="text" placeholder="請輸入收件地址">
                            <input type="radio" id="mPay2_address_as_member"><label for="mPay2_address_as_member">同會員地址</label>
                        </div>

                        <div class="mPay2_notes">
                            <h2>備註</h2>
                            <textarea placeholder="這裡輸入您的備註" name="" id="" cols="10" rows="10"></textarea>
                        </div>
                    </div>

                    <div class="mPay2_payment">
                        <h2>信用卡資料</h2>

                        <div class="mPay2_card_number">
                            <h3>信用卡號碼</h3>
                            <input type="text" maxlength="4">
                            <input type="text" maxlength="4">
                            <input type="text" maxlength="4">
                            <input type="text" maxlength="4">
                        </div>

                        <div class="mPay2_card_info">

                            <div class="mPay2_card_date">
                                <h3>到期日</h3>
                                <input type="text" placeholder="到期日">
                            </div>

                            <div class="mPay2_card_safe">
                                <h3>安全驗證碼</h3>
                                <input type="text">
                            </div>
                        </div>

                        <div class="mPay2_card_name">
                            <h3>持卡者姓名</h3>
                            <input type="text" placeholder="持卡者姓名">
                        </div>

                        <div class="mPay2_card_address">
                            <h3>信用卡帳單地址</h3>
                            <input type="text" placeholder="信用卡帳單地址">
                        </div>

                        <div class="mPay2_card_post">
                            <h3>郵遞區號</h3>
                            <input type="text" placeholder="郵遞區號">
                        </div>

                    </div>

                </div>

                <!-- <button class="btn mPay2_nextpage">下一步</button> -->
                <router-link class="btn mPay2_nextpage" :to="{ name: 'mPay3' }">下一步</router-link>

                
            </section>


        </wrapper>
        <DefaultFooter />
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss">

</style>