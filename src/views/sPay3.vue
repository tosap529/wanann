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
        <DefaultHeader header-title-zh="服務結帳" header-title-eng="Checkout" :bgi="banner_url" />
        <!-- sPay3正式開始 -->
        <wrapper class="wrapper sPay3_wrapper">
            <section class="sPay3">

                <div class="circle sPay3_circle">
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

                <div class="sPay3_btn">

                    <!-- <button class="btn sPay3_btn">查看訂單</button>
                    <button class="btn sPay3_btn">回首頁</button> -->

                    <router-link class="btn sPay3_btn" :to="{ name: 'member' }">查看訂單</router-link>
                    <router-link class="btn sPay3_btn" :to="{ name: 'index' }">回首頁</router-link>

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