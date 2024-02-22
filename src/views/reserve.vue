<script setup>
import {ref} from 'vue';
import ReservePlan from '@/layouts/reserve1.vue';
import ReserveExtra from '@/layouts/reserve2.vue';
import ReserveDate from '@/layouts/reserve3.vue';
// import DefaultHeader from '@/layouts/header.vue'; 
import FixedHeader from '@/layouts/headerFixed.vue'; 
import DefaultFooter from '@/layouts/footer.vue';
import BannerUrl  from '@/img/reserve1/reserve1_banner.jpg'; 
const banner_url = BannerUrl; 


let step_num = 0;
const reserve_step = ref(['reserve_plan','reserve_extra','reserve_date']);
const reserve_step_now = ref(reserve_step.value[step_num]);
function firstReserveStep(e){
    step_num = step_num -2;
    reserve_step_now.value = reserve_step.value[step_num];
    window.scrollTo(0, 0);
    // console.log(step_num);
}
function nextReserveStep(e){
    step_num ++;
    reserve_step_now.value = reserve_step.value[step_num];
    window.scrollTo(0, 0);
    // console.log(step_num);
}
function lastReserveStep(){
    step_num --;
    reserve_step_now.value = reserve_step.value[step_num];
    window.scrollTo(0, 0);
    // console.log(step_num);
}
</script>

<template>
<div>
    <FixedHeader header-title-zh="預約服務"  header-title-eng="Schedule Your Cleaning" :bgi="banner_url" />
    <ReservePlan  v-if="reserve_step_now=='reserve_plan'" @nextReserveStep="nextReserveStep"/>
    <ReserveExtra  v-if="reserve_step_now=='reserve_extra'" @nextReserveStep="nextReserveStep"  @lastReserveStep="lastReserveStep" />
    <ReserveDate  v-if="reserve_step_now=='reserve_date'" 
    @firstReserveStep="firstReserveStep"
    @lastReserveStep="lastReserveStep" />
    <DefaultFooter />
</div>
</template>



<style lang="scss">


</style>