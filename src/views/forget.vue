<script setup>
import {ref} from 'vue'
// import Modal from '@/components/ModalAboutBelief.vue'; 
import FixedHeader from '@/layouts/headerFixed.vue'; 
import DefaultFooter from '@/layouts/footer.vue';
import BannerUrl  from '@/img/member/member_banner.jpg'; 
const banner_url = BannerUrl; 

// const isModalShow = ref(false);
// const ModalAboutBelief = ()=>{
//     isModalShow.value = !isModalShow.value;
//     console.log( isModalShow.value)
// }
</script>
<template>
    <div>
        <!-- <Modal @ModalAboutBelief="ModalAboutBelief" v-show="isModalShow"  /> -->
        <FixedHeader header-title-zh="重設密碼" header-title-eng="Forget" :bgi="banner_url" />
    <wrapper class="wrapper forget">
        
        <section class="forget_pwd">
            <div class="title">
                <h1>重設密碼</h1>
            </div>
            <form class="forget_form" action="">
                <label for="reEmail">請輸入電子信箱<br>
                    <div>
                        <input type="email" id="reEmail">
                        <button class="btn" >送出</button>
                    </div>
                </label>
                <h4>*請至電子信箱點擊認證連結</h4>
                <label for="rePwdNew"><input type="password" id="rePwdNew" placeholder="請輸入您的新密碼"></label><br>
                <label for="rePwdConfirm"><input type="password" id="rePwdConfirm" placeholder="再次輸入您的新密碼"></label>
                <input type="submit" value="確認" class="btn">
            </form>
        </section>
    </wrapper>
    <DefaultFooter />
    </div>
</template>



<style lang="scss">

</style>