<script setup>
import{ref} from 'vue';
import { useRoute,useRouter } from 'vue-router';
import ModalLogin from '@/components/ModalLogin.vue'; 
defineEmits(['hamburger']);
// 取得當前頁面路徑
const route = useRoute();
const router = useRouter();

const isLoginModalShow = ref(false);
const goLogin = ()=>{
    if(route.name=='member'){
        location.reload();
    }else{
        if(sessionStorage.getItem('member_ID')){
        router.push({path:"/member"});
        }else{
            isLoginModalShow.value = !isLoginModalShow.value;
        } 
    }
};
const nowPage = (e)=>{
    if(e.target.closest('li').querySelector('a').dataset.page == 'game'){
        router.push({path:"/game"});
        
    }else{
        if (e.target.closest('li').querySelector('a').dataset.page == route.name){
        location.reload();
    }
    }
    
}

</script>

<template>
    <div>
        <div class="modal_mask ham_bgi" @click.self="$emit('hamburger')" >
        <ModalLogin @ModalLogin="goLogin" v-show="isLoginModalShow" />
        <nav class="modal_content ham">
            <div class="hamburger cross_modal" @click="$emit('hamburger')">
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
            </div>

            <div class="nav_right">
                <router-link :to="{ name: 'home' }"><img src="@/img/logo_square.svg" alt="logo" class="hamlogo"></router-link>
                <ul>
                    <li><router-link :class="{'route_now_ham':route.name=='about'}" :to="{ name: 'about' }" data-page="about" @click="nowPage">關於我們</router-link></li>
                    <li class="h_li"><router-link :to="{ name: 'articles' }">最新消息</router-link>
                        <ol>
                            <li><router-link :class="{'route_now_ham':route.name=='act'}" :to="{ name: 'act' }" data-page="act" @click="nowPage">優惠活動</router-link></li>
                            <li><router-link :class="{'route_now_ham':route.name=='articles'}" class="nav_last_a" :to="{ name: 'articles' }" data-page="articles" @click="nowPage">專欄文章</router-link></li>
                        </ol>
                    </li>

                    <li class="h_li"><router-link :to="{ name: 'service' }">我們的服務</router-link>
                        <ol>
                            <li><router-link :class="{'route_now_ham':route.name=='service'}" :to="{ name: 'service' }" data-page="service" @click="nowPage">服務介紹</router-link></li>
                            <li><router-link :class="{'route_now_ham':route.name=='case'}" :to="{ name: 'case' }" data-page="case" @click="nowPage">案例分享</router-link></li>
                            <li><router-link :class="{'route_now_ham':route.name=='reserve'}" class="nav_last_a" :to="{ name: 'reserve' }" data-page="reserve" @click="nowPage">預約服務</router-link></li>
                        </ol>
                    </li>
                    <li><router-link :class="{'route_now_ham':route.name=='mall'}" :to="{ name: 'mall' }" data-page="mall" @click="nowPage">商城</router-link></li>
                    <li><router-link :class="{'route_now_ham':route.name=='contact'}" :to="{ name: 'contact' }" data-page="contact" @click="nowPage">聯絡我們</router-link></li>
                    <li><router-link :class="{'route_now_ham':route.name=='game'||route.name=='gameQ'||route.name=='gameRb'||route.name=='gameRf'||route.name=='gameRj'||route.name=='gameRt'}" data-page="game" :to="{ name: 'game' }" @click="nowPage">清潔人格測驗</router-link></li>
                    <!-- <li><router-link :class="{'route_now_ham':route.name=='member'}" :to="{ name: 'member' }">會員中心</router-link></li> 
                    -->
                    <li><a href="#" :class="{'route_now_ham':route.name=='member'}" class="fai" @click.prevent="(e)=>{goLogin();nowPage(e)}"> 
                    會員中心</a> </li> 
                </ul>
                <div class="h_btns">
                    <router-link class="btn" :to="{ name: 'reserve' }" data-page="reserve" @click="nowPage">
                    <img src="@/img/footer_calendar.svg" alt="calendar_icon">立即預約
                    </router-link>
                    <a href="#"><img src="@/img/icon_fb.svg" alt=""></a>
                    <a href="#"><img src="@/img/icon_line.svg" alt=""></a>
                </div>
            </div>

        </nav>
        </div>
</div>

</template>


<style lang="scss">
@import '@/sass/main.scss';
.ham .nav_right .route_now_ham{
    color: $dark-milktea;
    font-weight: bold;
}

@include header_r() {

    div.ham_bgi{
        background-color: $dark-milktea;
    }
    .ham{
        a {
        color: $black;
        }
        position: relative;

        .hamburger {
            padding-top: 8px;
            position: absolute;
            top: -48px;
            right: 26px;

            .bar {
                display: block;
                background-color: $white;
                width: 25px;
                height: 2px;
                margin: 5px auto;
            }
            .bar:nth-child(2) {
                    opacity: 0;
                }

                .bar:nth-child(1) {
                    transform: translateY(7px) rotate(45deg);
                }

                .bar:nth-child(3) {
                    transform: translateY(-7px) rotate(-45deg);
                }
        }

        .nav_right {
            margin: 60px auto;
            background-color: $light-milktea;
            max-width: 350px;
            border-radius: 30px;
            position: relative;
            .hamlogo {
                position: absolute;
                top: -43px;
                left: 43%;
                z-index: 1;
                width: 64px;
            }
            ul {
                padding-top: 20px;
                padding-left: 60px;

                li {
                    margin-bottom: 18px;
                    padding-left: 15px;
                }

                .h_li {
                    background-color: $white;
                    padding: 15px 0px 1px 15px;
                    border-radius: 10px;
                    margin-right: 50px;

                }

                ol {
                    margin-left: 100px;
                    padding-left: 8px;
                    margin-top: 16px;
                    border-left: 4px solid $brown;
                    border-radius: 4px;

                }

            }

            .h_btns {
                display: flex;
                width: 320px;
                border-top: 1px dashed $brown;
                margin: 0 auto;
                padding-top: 16px;
                padding-bottom: 20px;
                .btn {
                    padding: 8px 12px;
                    margin-left: 45px;
                    margin-right: 24px;
                    img {
                        display: inline;
                        padding-right: 8px;
                        vertical-align: sub;
                    }
                }

                a {
                    padding: 0 10px;
                    padding-top: 6px;
                    color: $white;
                    font-size:$p ;
                }

            }
        }
    }

}

</style>