<script setup>
import DefaultHeader from '@/layouts/header.vue'; 
import DefaultFooter from '@/layouts/footer.vue';
import BannerUrl  from '@/img/reserve1/reserve1_banner.jpg'; 
const banner_url = BannerUrl; 
</script>
<template>
    <div>
        <DefaultHeader header-title-zh="預約服務" header-title-eng="Schedule Your Cleaning" :bgi="banner_url" /> 
        <div class="wrapper reserve3">
        <section class="subtitle">
            <h1>3</h1>
            <h1>選擇預約日期&時段</h1>
        </section>
        <section>
            <div class="calendar">
                <section class="calendar_nav">
                    <h4>2024</h4>
                    <div class="month">
                        <i class="fa-solid fa-angle-left" id="minusMonth"></i>
                        <h2>3月</h2>
                        <i class="fa-solid fa-angle-right" id="addMonth"></i>
                    </div>
                    <ul class="day">
                        <li>日</li>
                        <li>一</li>
                        <li>二</li>
                        <li>三</li>
                        <li>四</li>
                        <li>五</li>
                        <li>六</li>
                    </ul>
                </section>
                <section class="week">
                    <!-- <article class="single_day">
                        <h2>1</h2>
                        <div class="star">
                            <img src="../img/reserve3/reserve3_star_on.svg" alt="">
                            <img src="../img/reserve3/reserve3_star_on.svg" alt="">
                            <img src="../img/reserve3/reserve3_star_on.svg" alt="">
                        </div>
                    </article> -->

                </section>
            </div>
            <div class="time_choice">
                <div>
                    <h2>選擇日期及時段</h2>
                    <p>找找看有沒有你需要的</p>
                </div>
                <h2>預約日期：3月21日</h2>
                <h2>預約時段：下午</h2>
                <div>
                    <h2>上午時段 (09:00開始)</h2>
                    <h2>下午時段 (12:00開始)</h2>
                    <h2>晚間時段 (17:00開始)</h2>
                </div>
            </div>
        </section>
        <p>僅接受3日後的預約，具體施作時間交由浣安與您聯繫進一步討論</p>
        <a href="#" class="btn">前往結帳</a>
    </div>
    <DefaultFooter />
    </div>
</template>



<style lang="scss">
@import '@/sass/main.scss';

</style>