<template>
    <div>
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
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss">
@import '@/sass/main.scss';

</style>