<script setup>
import { ref,onMounted,toRaw,onBeforeMount } from "vue";
import MemberTab from "@/components/MemberTab.vue";
import ModalDefaultAll from '@/components/ModalDefaultAll.vue'; 
const props = defineProps({mOrder:Object});

let memberTabPage = ref('incomplete');
function memberTabClick(event) {
    // 未完成&完成訂單頁面切換
    event.preventDefault();
    if(event.target.closest('li').classList.contains('complete')){
        memberTabPage.value = 'complete'
    }else{
        memberTabPage.value = 'incomplete'
    }
    if(!event.target.closest('li').classList.contains('tab_on')){
        for(let i = 0; i<2; i++){
            event.target.closest('ul').children[i].classList.toggle('tab_on');
        }
    }
};
const isMemberModalShow_inc = ref(false);
const goMember_inc= ()=>{
    isMemberModalShow_inc.value = !isMemberModalShow_inc.value;
};
const isMemberModalShow_c = ref(false);
const goMember_c= ()=>{
    isMemberModalShow_c.value = !isMemberModalShow_c.value;
};
onMounted(()=>{
    //    console.log(toRaw(props.mOrder)); 
})
onBeforeMount(()=>{
   let mOrder_arr = Object.values(toRaw(props.mOrder));
   for(let i = 0; i<mOrder_arr.length ;i++){
    if(mOrder_arr[i].payment==1){
        mOrder_arr[i].payment = '已付款';
        }else if(mOrder_arr[i].payment==0){
            mOrder_arr[i].payment = '未付款';
        }
        mOrder_arr[i].order_date = mOrder_arr[i].order_date.substring(0,10);
   }

})

</script>
<template>
<div>
    <section class="member_main mOrder">
    <MemberTab  @memberTabClick = "memberTabClick" />
        <!-- 商城_未完成訂單分頁 -->
        <ModalDefaultAll v-show="isMemberModalShow_inc" @ModalDefaultAll="goMember_inc" >
            <div class="modal_content member_all">
                <section>
                    <h2>確定要取消商城訂單嗎？</h2>
                <p>訂單一經取消即無法復原</p>
                </section>
                
            <img class="cross_modal" @click="goMember_inc" src="@/img/about/about_lightbox_cross.svg" alt="">
            <div>
            <button class="btn" @click="goMember_inc">關閉</button> 
            <button class="btn" @click="goMember_inc">確認</button> 
            </div>

            </div>
        </ModalDefaultAll>
        <div v-for="(item,key) in mOrder" :key="key">
        <div class="mOrder_data" v-if="memberTabPage=='incomplete'&& item.order_status==0"  >
            <div>
                <h2>訂單編號</h2>
                <input type="text" :value="item.id" disabled>
            </div>
            <div>
                <h2>訂購日期</h2>
                <input type="text" :value="item.order_date" disabled>
            </div>
            <div>
                <h2>訂單狀態</h2>
                <input type="text" :value="item.payment" disabled>
            </div>
            <div>
                <h2>訂購人</h2>
                <input type="text" :value="item.order_name" disabled>
            </div>
            <div>
                <h2>聯絡電話</h2>
                <input type="text" :value="item.order_phone" disabled>
            </div>
            <div>
                <h2>寄送地址</h2>
                <input type="text" :value="item.order_address" disabled>
            </div>
            <div>
                <h2>訂單內容</h2>
                <article v-for="(product,product_num) in item['products']" :key="product_num">
                    <img :src="product.product_pic" alt="">
                    <section>
                    <div>
                        <h2>{{product.product_name}}</h2>
                        <h4>經典款</h4>
                    </div>
                    <h3>x{{ product.quantity }}</h3>
                    <h2>NTD {{ product.price }}</h2>
                </section>
                </article>
            </div>
            <div class="sOrder_bottom">
                <button class="btn" @click="goMember_inc">取消訂單</button>
                <p>*未發貨才能取消喔~</p>
                <div>
                    <h2>總金額</h2>
                    <h2>NTD {{ item.total }}</h2>
                </div>
            </div>
        </div>    
        </div>
        
        <!-- 商城_已完成訂單分頁 -->
        <ModalDefaultAll v-show="isMemberModalShow_c" @ModalDefaultAll="goMember_c" >
            <div class="modal_content member_all">
                <section>
                <h2>確定要申請退貨嗎？</h2>
                <p>退貨申請送出後將由浣安專員處理</p>
                </section>
                

            <img class="cross_modal" @click="goMember_c" src="@/img/about/about_lightbox_cross.svg" alt="">
            <div>
            <button class="btn" @click="goMember_c">關閉</button> 
            <button class="btn" @click="goMember_c">確認</button> 
            </div>

            </div>
        </ModalDefaultAll>
        <div v-for="(item,key) in mOrder" :key="key" >
        <div class="mOrder_data" v-if="memberTabPage=='complete' && item.order_status==1">
            <div>
                <h2>訂單編號</h2>
                <input type="text" :value="item.id" disabled>
            </div>
            <div>
                <h2>訂購日期</h2>
                <input type="text" :value="item.order_date" disabled>
            </div>
            <div>
                <h2>訂單狀態</h2>
                <input type="text" :value="item.payment" disabled>
            </div>
            <div>
                <h2>訂購人</h2>
                <input type="text" :value="item.order_name" disabled>
            </div>
            <div>
                <h2>聯絡電話</h2>
                <input type="text" :value="item.order_phone" disabled>
            </div>
            <div>
                <h2>寄送地址</h2>
                <input type="text" :value="item.order_address" disabled>
            </div>
            <div>
                <h2>訂單內容</h2>
                <article v-for="(product,product_num) in item['products']" :key="product_num" >
                    <img :src=product.product_pic alt="">
                    <section>
                    <div>
                        <h2>{{product.product_name}}</h2>
                        <h4>經典款</h4>
                    </div>
                    <h3>x{{ product.quantity }}</h3>
                    <h2>NTD {{ product.price }}</h2>
                </section>
                </article>
            </div>
            <div>
                <button class="btn" @click="goMember_c">退貨</button>
                <div>
                    <h2>總金額</h2>
                    <h2>NTD{{item.total}}</h2>
                </div>
            </div>
        </div>    
        </div>
        
    </section>
</div>
</template>


<style lang="scss" scoped>

</style>