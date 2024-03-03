<script setup>
import { ref } from "vue";
// import MemberTab from "@/components/MemberTab.vue";
// import ModalComment from '@/components/ModalComment.vue'; 
// import ModalMemberAll from '@/components/ModalMemberAll.vue'; 
import MemberUserData from '@/layouts/memberUserData.vue'; 
import MemberServiceOrder from '@/layouts/memberServiceOrder.vue'; 
import MemberMallOrder from '@/layouts/memberMallOrder.vue'; 
// import wrapper from '@/layouts/wrapper.vue';
import FixedHeader from '@/layouts/headerFixed.vue'; 
import DefaultFooter from '@/layouts/footer.vue';
import BannerUrl  from '@/img/member/member_banner.jpg'; 
const banner_url = BannerUrl; 
const sidebar = ref(null);

let memberSubPage = ref('userData');

function  sidebarClick(e){
    e.preventDefault();
    // sidebar切換
    for (let i = 0; i < sidebar.value.children.length; i++) {
        if(sidebar.value.children[i].classList.contains('member_sidebar_active')){

            sidebar.value.children[i].classList.remove('member_sidebar_active');
        }
}
    // 主要版面切換
    if(e.target.closest('li').classList.contains('userData')){
            memberSubPage.value = 'userData';
        }else if(e.target.closest('li').classList.contains('sOrder')){
            memberSubPage.value = 'sOrder';
        }else if(e.target.closest('li').classList.contains('mOrder')){
            memberSubPage.value = 'mOrder';
        }else{
            // 登出鍵預留
        }
    e.target.closest('li').classList.add('member_sidebar_active');
    // console.log(memberSubPage.value);
}

const profileMiniClick=(e)=>{
    profileMini.click()
}




</script>
<template>
    <div>

     <FixedHeader header-title-zh="會員中心"  header-title-eng="Member" :bgi="banner_url" />
    <div class="member wrapper">
        <section class="member_sidebar">
            <div @click="profileMiniClick">
            <div >
                <input type="file" id="profileMini">
            </div>
                <h2>thd104</h2>
            </div>
            <ul ref="sidebar">
                <!-- userData -->
                <li class="userData member_sidebar_active"  @click="sidebarClick"><a href="#">個人資料</a></li>
                <!-- sOrder -->
                <li class="sOrder" @click="sidebarClick"><a href="#">服務訂單</a></li>
                <!-- mOrder -->
                <li class="mOrder" @click="sidebarClick"><a href="#">商城訂單</a></li>
                <!-- logOut -->
                <li @click="sidebarClick"><a href="#">登出</a></li>
            </ul>
        </section>
        <!-- 個人資料分頁(預設) -->
        <MemberUserData v-if="memberSubPage ==='userData'" />
        <!-- 服務訂單分頁 -->
        <MemberServiceOrder v-if="memberSubPage ==='sOrder'" />
        <!-- 商城訂單分頁 -->
        <MemberMallOrder v-if="memberSubPage ==='mOrder'" />
    </div>
    <DefaultFooter />
</div>
</template>



<style lang="scss">
@import '@/sass/base/_base.scss';


// ---------------切換分頁用------------------

.member_pageNow{
    display: block;
}
.alert_input{
    background-color: $white;
    background-image: url(@/img/member/member_icon_alertInput.svg);
    background-repeat: no-repeat;
    background-position: 95% 40%;
    outline: 2px solid $brown;
}
// 表示當前頁面的側邊欄樣式
.member_sidebar_active {
    background-color: $light-milktea;
    
}
</style>