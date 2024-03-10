<script setup>
import { ref,onBeforeMount,onMounted,toRaw } from "vue";
import MemberTab from "@/components/MemberTab.vue";
import ModalComment from '@/components/ModalComment.vue'; 
import ModalDefaultAll from '@/components/ModalDefaultAll.vue'; 

const props = defineProps({sOrder:Object});

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
const isCommentModalShow = ref(null);
const goComment = (item)=>{
    // isCommentModalShow.value = !isCommentModalShow.value;
    if(isCommentModalShow.value === null){
        isCommentModalShow.value = item;
        console.log(isCommentModalShow.value);

        }else{
            isCommentModalShow.value = null
        }
};
onMounted(()=>{
   
    for(let i=0;i<props.sOrder.length;i++){
        if(props.sOrder[i].PAYMENT==1){
            props.sOrder.PAYMENT = '已付款';
        }else if(props.sOrder[i].PAYMENT==0){
            props.sOrder.PAYMENT = '未付款';
        }
        props.sOrder[i].ORDER_DATE = props.sOrder[i].ORDER_DATE.substring(0,10);
    }
 
})
onBeforeMount(()=>{
    let sOrder_arr = Object.values(toRaw(props.sOrder));
   for(let i = 0; i<sOrder_arr.length ;i++){
    if(sOrder_arr[i].payment==1){
        sOrder_arr[i].payment = '已付款';
        }else if(sOrder_arr[i].payment==0){
            sOrder_arr[i].payment = '未付款';
    }
        for(let j = 0; j<sOrder_arr[i].add_service.length; j++){
            if(sOrder_arr[i].add_service[j].add_service_price==0){
                sOrder_arr[i].add_service[j].add_service_price = '人工估價<br>(由施作人員現場收費)';
            }else if(sOrder_arr[i].add_service[j].add_service_price==500){
                sOrder_arr[i].add_service[j].add_service_price = '<h2>NTD 500</h2>';
            }
        }
        sOrder_arr[i].order_date = sOrder_arr[i].order_date.substring(0,10);
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
        <div v-for="(item,key) in sOrder" :key="key">
         <div class="sOrder_data" v-if="memberTabPage=='incomplete'&&item.order_status==0">
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
                <h2>服務地址</h2>
                <input type="text" :value="item.order_address" disabled>
            </div>
            <div>
                <h2>訂單內容</h2>
                <div>
                    <h2>服務日期</h2>
                    <h2>{{item.service_date}}</h2>
                    <h2>{{item.time_range}}</h2>
                </div>
                <article>
                    <img :src="item.service_pic" alt="">
                    <div>
                    <h2>{{item.service}}</h2>
                    <h2>NTD {{ item.service_price }}</h2>
                </div>
                </article>
                <article v-for="(extra,extra_num) in item['add_service']" :key="extra_num">
                    <img :src="extra.add_service_pic" alt="">
                <div>
                    <h2>{{ extra.add_service_name }}</h2>
                    <h2>
                        <div v-html="extra.add_service_price"></div>
                    </h2>
                </div>
                </article>
            </div>
            <div>
                <button class="btn" @click="goMember">取消訂單</button>
                <p>*距預定服務日七天內無法取消</p>
                <div>
                    <h2>總金額</h2>
                    <h2>NTD {{ item.total }}</h2>
                </div>
            </div>
        </div>   
        </div>
        
        <!-- 服務_已完成訂單分頁 -->
        <div v-for="(item,key) in sOrder" :key="key">
            <ModalComment @ModalComment="goComment" v-if="isCommentModalShow" :data="isCommentModalShow" />
            <div class="sOrder_data" v-if="memberTabPage=='complete'&&item.order_status==1" >
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
                <h2>服務地址</h2>
                <input type="text" :value="item.order_address" disabled>
            </div>
            <div>
                <h2>訂單內容</h2>
                <div>
                    <h2>服務日期</h2>
                    <h2>{{item.service_date}}</h2>
                    <h2>{{item.time_range}}</h2>
                </div>
                <article>
                    <img :src="item.service_pic" alt="">
                <div>
                    <h2>{{item.service}}</h2>
                    <h2>NTD {{item.service_price}}</h2>
                </div>
                </article>
                <article v-for="(extra,extra_num) in item['add_service']" :key="extra_num">
                    <img :src="extra.add_service_pic" alt="">
                <div>
                    <h2>{{extra.add_service_name}}</h2>
                    <h2>
                        <div v-html="extra.add_service_price"></div>
                    </h2>
                </div>
                </article>
            </div>
            <div>
                <button class="btn" @click="goComment(item)">評價訂單</button>
                <div>
                    <h2>總金額</h2>
                    <h2>NTD {{ item.total }}</h2>
                </div>
            </div>
        </div>
        </div>
        
    </section>
</div>
</template>


<style lang="scss" scoped>

</style>