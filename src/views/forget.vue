<script setup>
import {ref} from 'vue'
// import wrapper from '@/layouts/wrapper.vue';
import FixedHeader from '@/layouts/headerFixed.vue'; 
import DefaultFooter from '@/layouts/footer.vue';
import BannerUrl  from '@/img/member/member_banner.jpg'; 
const banner_url = BannerUrl; 
const emailExist = ref('');
const rePwdNew = ref(null)
const rePwdConfirm = ref(null);

let EmailData = {
    email:''
}
let newPwdData = {
    id:'',
    pwd:''
}
console.log(EmailData.email);

// let idWantToChange = '';
const emailValidation = ()=>{
    // const url = 'http://localhost/thd104/g1/public/php/forget_select.php';
    const url = 'php/forget_select.php';
    fetch(url, {
            method: 'POST',
            body: JSON.stringify(EmailData)
        })
        .then(response => response.text())
        .then(response => {
            if(response!='failed'){
                emailExist.value = 'true';
                console.log(response);
                newPwdData.id = response;
            }else{
                emailExist.value = 'false';
            }
        }).catch(error => {
            console.error('Error:', error);
        });
}

const changeMyPwd = () =>{
    // const url = 'http://localhost/thd104/g1/public/php/forget_update.php';
    const url = 'php/forget_update.php';
    fetch(url, {
            method: 'POST',
            body: JSON.stringify(newPwdData)
        })
        .then(response => response.text())
        .then(response => {
            emailExist.value = 'complete';
            // setTimeout(()=>{
            //     router.push({path:"/home"});
            //     location.reload();
            // },1500)
        }).catch(error => {
            console.error('Error:', error);
        });
}
const isChangable = ref(false) ;
const pwdValidation = ()=>{
    console.log(rePwdNew.value);
    if(rePwdNew.value.value != rePwdConfirm.value.value){
        // rePwdConfirm.style.backgroundColor = 'white';
        rePwdConfirm.value.classList.add('alert_inputWeye');
        isChangable.value=false;
    }else{
        // rePwdConfirm.style.backgroundColor = '#ECE7E1';
        rePwdConfirm.value.classList.remove('alert_inputWeye');
        isChangable.value=true;
    }
    console.log(newPwdData);

}
const eyeOnPWD=(e)=>{
    if (e.target.previousElementSibling.type == "password") {
        e.target.previousElementSibling.type='text';
        } else {
            e.target.previousElementSibling.type='password';
        }
}


</script>
<template>
    <div>
        <FixedHeader header-title-zh="重設密碼" header-title-eng="Forget" :bgi="banner_url" />
    <div class="wrapper forget">
        
        <section class="forget_pwd">
            <div class="title">
                <h1>重設密碼</h1>
            </div>
            <form class="forget_form" action="">
                <label for="reEmail">請輸入電子信箱<br>
                    <div>
                        <input type="email" id="reEmail"  v-model="EmailData.email" autocomplete="off">
                        <button class="btn" @click.prevent="emailValidation" >送出</button>
                    </div>
                </label>
                <h4>*請至電子信箱點擊認證連結</h4>
                <div v-if="emailExist=='true'">
                    <h2>帳號存在</h2>
                    <label for="rePwdNew">
                        <input type="password" id="rePwdNew" ref="rePwdNew" placeholder="請輸入您的新密碼" @input="pwdValidation" v-model="newPwdData.pwd">
                        <img src="@/img/login/login_icon_eye.png" @click="eyeOnPWD" alt="">
                    </label>
                    <br>
                    <label for="rePwdConfirm">
                        <input type="password" id="rePwdConfirm" ref="rePwdConfirm" placeholder="再次輸入您的新密碼" @input="pwdValidation">
                        <img src="@/img/login/login_icon_eye.png" @click="eyeOnPWD" alt="">
                    </label>
                    <input type="submit" value="確認" class="btn" @click.prevent="changeMyPwd" :class="{ disabled: !isChangable }">    
                </div>
                <div v-if="emailExist=='false'">
                    <h2>帳號不存在</h2>
                    <h2>請重新輸入！</h2>
                </div>
                <div v-if="emailExist=='complete'">
                    <h2>密碼修改成功！</h2>
                    <p>請重新登入</p>
                </div>
               
            </form>
        </section>
    </div>
    <DefaultFooter />
    </div>
</template>



<style lang="scss">

</style>