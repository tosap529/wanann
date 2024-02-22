<script setup>
import wrapper from '@/layouts/wrapper.vue';
import Calendar from '@/layouts/calendar.vue';
    defineEmits(['lastReserveStep','firstReserveStep']);
</script>

<template>
<div class="wrapper reserve3">
        <section class="subtitle" @click="$emit('firstReserveStep')">
        <h1>1</h1>
        <h1>選擇服務</h1>
     </section>
        <section class="subtitle"  @click="$emit('lastReserveStep')">
        <h1>2</h1>
        <h1>選擇加購服務</h1>
     </section>
        <section class="subtitle">
            <h1>3</h1>
            <h1>選擇預約日期&時段</h1>
        </section>
        <Calendar />
        <!-- <section>
            
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
        <p>僅接受3日後的預約，具體施作時間交由浣安與您聯繫進一步討論</p> -->
        <section class="next_btn">
            <router-link class="btn" :to="{ name: 'sPay1' }">前往結帳</router-link>   
        </section>
    </div>
</template>



<style lang="scss" scoped>
.subtitle:nth-child(1){
    opacity: .25;
    margin-bottom: 0;
    cursor: pointer;
}
.subtitle:nth-child(2){
    opacity: .5;
    margin-bottom: 0;
    cursor: pointer;
}
</style>