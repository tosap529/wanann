<script setup>
import {ref,onBeforeMount} from 'vue';
defineEmits(['nextReserveStep']);
let dropdownNow = ref(''); //預設是什麼方案也不選

onBeforeMount(()=>{
    //進入服務預約流程前先清掉localStorage的服務預約key
    localStorage.removeItem("my_service_order");
    //以下兩行防止未選擇主方案就按下一步的bug出現
    localStorage.setItem("my_service_order", JSON.stringify(my_service_order));

    if(localStorage.getItem('plan_want_to_see')){
        dropdownNow.value = localStorage.getItem('plan_want_to_see');
    }else{
        // localStorage.setItem("plan_want_to_see",'浣安全室清潔');
    }
})

const my_service_order = {
    service_order_ID:'',
    main_plan:localStorage.getItem('plan_want_to_see'),
    additional_plan:[],
    special_plan:[],
    service_date:'',
    service_time_range:''
};
localStorage.setItem("my_service_order", JSON.stringify(my_service_order));
const reserveDropdown = (e)=>{
    dropdownNow.value = e.target.innerText;
    my_service_order.main_plan = e.target.innerText;
    localStorage.setItem("my_service_order", JSON.stringify(my_service_order));
}

</script>

<template>
<div class="wrapper reserve1">
   
<section class="subtitle">
    <h1>1</h1>
    <h1>選擇服務</h1>
    </section>

<section class="reserve_choose">
    <aside>
        <section>
        <button class="dropdown btn" @click="reserveDropdown" :class="{dropdown_on:dropdownNow=='浣安全室清潔'}">浣安全室清潔</button>
        <div class="dropdown_container" :class="{fold:dropdownNow!='浣安全室清潔'}">
        <section>
            <p>基本清潔</p>
            <p>廚房簡易清潔</p>
            <p>浴室簡易清潔</p>
            <p>臥室及客房清潔</p>
        </section>  
            <p>NTD 4,000</p>      
        </div>
    </section>
    <section>
        <button class="dropdown btn" @click="reserveDropdown" :class="{dropdown_on:dropdownNow=='廚房徹底清潔'}">廚房徹底清潔</button>
         <div class="dropdown_container" :class="{fold:dropdownNow!='廚房徹底清潔'}">            
           <section>
               <p>廚房專業清潔</p>
               <p>加強油汙處理</p>
               <p>廚具汰洗</p>
               <p>水槽疏通</p>
            </section>  
               <p>NTD 2,000</p>          
       </div>
    </section>
       <section>
        <button class="dropdown btn" @click="reserveDropdown" :class="{dropdown_on:dropdownNow=='浴室特攻清潔'}">浴室特攻清潔</button>     
        <div class="dropdown_container" :class="{fold:dropdownNow!='浴室特攻清潔'}">            
            <section>
                <p>浴室專業清潔</p>
                <p>加強水垢處理</p>
                <p>專業除黴</p>
                <p>馬桶清潔</p>
            </section>  
                <p>NTD 1,500</p>
        </div>
    </section>
    </aside>

    <div class="pic">
        <!-- <img src="@/img/reserve1/reserve1_1.jpg" v-if="dropdownNow=='浣安全室清潔'" alt="">
        <img src="@/img/reserve1/reserve1_2.jpg" v-if="dropdownNow=='廚房特攻清潔'" alt="">
        <img src="@/img/reserve1/reserve1_3.jpg" v-if="dropdownNow=='浴室徹底清潔'" alt=""> -->
        <img src="@/img/reserve1/reserve1_1.jpg"  :class="{onTheTop:dropdownNow=='浣安全室清潔'||dropdownNow==''}" alt="">
        <img src="@/img/reserve1/reserve1_2.jpg" :class="{onTheTop:dropdownNow=='廚房徹底清潔'}" alt="">
        <img src="@/img/reserve1/reserve1_3.jpg"  :class="{onTheTop:dropdownNow=='浴室特攻清潔'}" alt="">
    </div>

</section>

<section class="next_btn">
    <a class="btn" @click="$emit('nextReserveStep',$e)" :class="{disabled:!dropdownNow}"  >下一步</a>
</section>

</div>
</template>



<style lang="scss" scoped>

</style>