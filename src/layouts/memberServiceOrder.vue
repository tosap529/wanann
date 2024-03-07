<script setup>
import { ref,onMounted } from "vue";
import MemberTab from "@/components/MemberTab.vue";
import ModalComment from '@/components/ModalComment.vue'; 
import ModalDefaultAll from '@/components/ModalDefaultAll.vue'; 

const props = defineProps({sOrder:Array});

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
    // console.log(memberTabPage.value)
};
const isMemberModalShow = ref(false);
const goMember = ()=>{
    isMemberModalShow.value = !isMemberModalShow.value;
};
const isCommentModalShow = ref(false);
const goComment = ()=>{
    isCommentModalShow.value = !isCommentModalShow.value;
};
onMounted(()=>{
    for(let i=0;i<props.sOrder.length;i++){
        if(props.sOrder[i].PAYMENT==1){
            props.sOrder.PAYMENT = '已付款';
        }else if(props.sOrder[i].PAYMENT==0){
            props.sOrder.PAYMENT = '未付款';
        }
        // if(props.sOrder[i].ORDER_STATUS==1){
        //     props.sOrder[i].ORDER_STATUS='已完成';
        // }else if(props.sOrder[i].ORDER_STATUS==0){
        //     props.sOrder[i].ORDER_STATUS='未完成';
        // }
        props.sOrder[i].ORDER_DATE = props.sOrder[i].ORDER_DATE.substring(0,10);
    }
 
})


</script>
<template>
<div>
    <section class="member_main sOrder" >
        <MemberTab  @memberTabClick = "memberTabClick" />
        <!-- 服務_未完成訂單分頁 -->
        <ModalDefaultAll v-show="isMemberModalShow" @ModalDefaultAll="goMember" >
            <div class="modal_content member_all">
                <section>
                    <h2>確定要取消服務訂單嗎？</h2>
                <p>訂單一經取消即無法復原</p>
                </section>
                

            <img class="cross_modal" @click="goMember" src="@/img/about/about_lightbox_cross.svg" alt="">
            <div>
            <button class="btn" @click="goMember">關閉</button> 
            <button class="btn" @click="goMember">確認</button> 
            </div>

            </div>
        </ModalDefaultAll>
        <div v-for="order in sOrder" :key="order">
         <div class="sOrder_data" v-if="memberTabPage=='incomplete'&&order.ORDER_STATUS==0">
            <div>
                <h2>訂單編號</h2>
                <input type="text" :value="order.ID" disabled>
            </div>
            <div>
                <h2>訂購日期</h2>
                <input type="text" :value="order.ORDER_DATE" disabled>
            </div>
            <div>
                <h2>訂單狀態</h2>
                <input type="text" :value="order.PAYMENT" disabled>
            </div>
            <div>
                <h2>訂單內容</h2>
                <div>
                    <h2>服務日期</h2>
                    <h2>{{order.SERVICE_DATE}}</h2>
                    <h2>{{order.TIME_RANGE_NAME}}</h2>
                </div>
                <article>
                    <img src="@/img/member/member_sOrder_product1.png" alt="">
                    <div>
                    <h2>浣安全室清潔</h2>
                    <h2>NTD4,000</h2>
                </div>
                </article>
                <article>
                    <img src="@/img/member/member_sOrder_product2.png" alt="">
                <div>
                    <h2>冷氣機清理</h2>
                    <h2>NTD500</h2>
                </div>
                </article>
                <article>
                    <img src="@/img/member/member_sOrder_product3.png" alt="">
                <div>
                    <h2>毛孩服務</h2>
                    <h2>人工估價<br>(由施作人員現場收費)</h2>
                </div>
                </article>
            </div>
            <div>
                <button class="btn" @click="goMember">取消訂單</button>
                <p>*距預定服務日七天內無法取消</p>
                <div>
                    <h2>總金額</h2>
                    <h2>NTD4,400</h2>
                </div>
            </div>
        </div>   
        </div>
        
        <!-- 服務_已完成訂單分頁 -->
        <div v-for="order in sOrder" :key="order">
        <ModalComment @ModalComment="goComment" v-show="isCommentModalShow" :commentData="order" />
          <div class="sOrder_data" v-if="memberTabPage=='complete'&&order.ORDER_STATUS==1" >
            <div>
                <h2>訂單編號</h2>
                <input type="text" :value="order.ID" disabled>
            </div>
            <div>
                <h2>訂購日期</h2>
                <input type="text" :value="order.ORDER_DATE" disabled>
            </div>
            <div>
                <h2>訂單狀態</h2>
                <input type="text" :value="order.PAYMENT" disabled>
            </div>
            <div>
                <h2>訂單內容</h2>
                <div>
                    <h2>服務日期</h2>
                    <h2>{{order.SERVICE_DATE}}</h2>
                    <h2>{{order.TIME_RANGE_NAME}}</h2>
                </div>
                <article>
                    <img src="@/img/member/member_sOrder_product1.png" alt="">
                <div>
                    <h2>浣安全室清潔</h2>
                    <h2>NTD4,000</h2>
                </div>
                </article>
                <article>
                    <img src="@/img/member/member_sOrder_product2.png" alt="">
                <div>
                    <h2>冷氣機清理</h2>
                    <h2>NTD500</h2>
                </div>
                </article>
                <article>
                    <img src="@/img/member/member_sOrder_product3.png" alt="">
                <div>
                    <h2>毛孩服務</h2>
                    <h2>人工估價<br>(由施作人員現場收費)</h2>
                </div>
                </article>
            </div>
            <div>
                <button class="btn" @click="goComment">評價訂單</button>
                <div>
                    <h2>總金額</h2>
                    <h2>NTD4,400</h2>
                </div>
            </div>
        </div>
        </div>
        
    </section>
</div>
</template>


<style lang="scss" scoped>

</style>