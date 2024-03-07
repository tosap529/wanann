<script setup>
    // 設置header及footer
    import DefaultHeader from '@/layouts/header.vue';
    import DefaultFooter from '@/layouts/footer.vue';
    import BannerUrl  from '@/img/pay/pay_banner.jpg';
    import wrapper from '@/layouts/wrapper.vue';
    const banner_url = BannerUrl;
</script>


<template>
    <div>
        <DefaultHeader header-title-zh="商城結帳" header-title-eng="Checkout" :bgi="banner_url" />
        <wrapper class="wrapper mPay3_wrapper">

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

                    <!-- <button class="btn mPay3_btn">查看訂單</button> -->
                    <!-- <button class="btn mPay3_btn">回首頁</button> -->
                    <router-link class="btn mPay3_btn" :to="{ name: 'member' }">查看訂單</router-link>
                    <router-link class="btn mPay3_btn" :to="{ name: 'home' }">回首頁</router-link>
                    
                </div>



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