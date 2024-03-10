<script setup>
import { ref,onMounted } from "vue";
import { useRouter } from 'vue-router';
import MemberUserData from '@/layouts/memberUserData.vue'; 
import MemberServiceOrder from '@/layouts/memberServiceOrder.vue'; 
import MemberMallOrder from '@/layouts/memberMallOrder.vue';
import ModalCantGoAnywhere from '@/components/ModalCantGoAnywhere.vue';
import FixedHeader from '@/layouts/headerFixed.vue'; 
import DefaultFooter from '@/layouts/footer.vue';
import BannerUrl  from '@/img/member/member_banner.jpg'; 
const banner_url = BannerUrl; 
const sidebar = ref(null);
const userData = ref([]);
const sOrder = ref([]);
const mOrder = ref([]);
const router = useRouter();
let memberSubPage = ref('userData');

function sidebarClick(e){
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
}

/*
onMounted(()=>{
    // const url = 'php/member_select.php';
    const url = 'http://localhost/thd104/g1/public/php/member_select.php';
    // console.log(sessionStorage.getItem('member_ID'));
   
    fetch(url, {
        method: 'POST',
        // headers: {
        //     'Content-Type': 'application/json'
        // },
        body: JSON.stringify({id:sessionStorage.getItem('member_ID')})
        
    })
        .then(response => response.json())
        .then(response => {
            // console.log('註冊成功 js');
           
        userData.value = response.userData;
        sOrder.value = response.sOrder; 
        mOrder.value = response.mOrder; 
        // console.log(userData.value);
        // console.log(sOrder.value);
        // console.log(mOrder.value);
            })
            .catch(error => {
                console.error('Error:', error);
            });
})
*/

onMounted(async () => {
    const url = 'http://localhost/thd104/g1/public/php/member_select.php';
    // const url = 'php/member_select.php';
    const res = await fetch(url, { method: 'POST', body: JSON.stringify({id:sessionStorage.getItem('member_ID')}) });
    const data = await res.json();
    console.log(data.sOrder);
    userData.value = data.userData;
    sOrder.value = data.sOrder; 
    mOrder.value = data.mOrder;
})

// console.log(member)

const isLogoutModalShow = ref(false);
const memberLogOut= ()=>{
    isLogoutModalShow.value = !isLogoutModalShow.value;
    sessionStorage.removeItem("member_ID");
    sessionStorage.removeItem("member_pic");
    setTimeout(()=>{
        router.push({path:"/home"})
    },1500)
    // router.push({path:"/home"});
};


    
</script>
<template>
 <div>
    <FixedHeader header-title-zh="會員中心"  header-title-eng="Member" :bgi="banner_url" />
    <ModalCantGoAnywhere v-show="isLogoutModalShow" @ModalCantGoAnywhere="memberLogOut" >
            <div class="modal_content member_all">
                <section>
                    <h2>您已成功登出</h2><br>
                    <p>將跳轉回浣安首頁</p>
                </section>
                
            <!-- <img class="cross_modal" @click="memberLogOut" src="@/img/about/about_lightbox_cross.svg" alt=""> -->
            <div>
            <!-- <button class="btn" @click="successLogin">關閉</button> -->
            <!-- <router-link class="btn" :to="{ name: 'member' }">會員中心</router-link> -->
            <!-- <button class="btn" @click="successLogin">會員中心</button>  -->
            </div>

            </div>
        </ModalCantGoAnywhere>
    <div class="member wrapper">
        <section class="member_sidebar">
            <div @click="profileMiniClick">
                <img src="@/img/member/member_icon_profileMini.png" alt="" >
                <input type="file" id="profileMini" >
                <h2>{{userData.USERNAME}}</h2>
            </div>
            <ul ref="sidebar">
                <!-- userData -->
                <li class="userData member_sidebar_active"  @click="sidebarClick"><a href="#">個人資料</a></li>
                <!-- sOrder -->
                <li class="sOrder" @click="sidebarClick"><a href="#">服務訂單</a></li>
                <!-- mOrder -->
                <li class="mOrder" @click="sidebarClick"><a href="#">商城訂單</a></li>
                <!-- logOut -->
                <li @click="memberLogOut"><a href="#">登出</a></li>
            </ul>
        </section>
        <!-- 個人資料分頁(預設) -->
        <MemberUserData v-if="memberSubPage ==='userData' && userData" :userData="userData" />
        <!-- 服務訂單分頁 -->
        <MemberServiceOrder v-if="memberSubPage ==='sOrder'&&sOrder" :sOrder="sOrder" />
        <!-- 商城訂單分頁 -->
        <MemberMallOrder v-if="memberSubPage ==='mOrder'&&mOrder" :mOrder="mOrder" />
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

// 表示當前頁面的側邊欄樣式
.member_sidebar_active {
    background-color: $light-milktea;
    
}
</style>