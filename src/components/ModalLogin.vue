<script setup>
import { ref,onBeforeUnmount } from "vue";
defineEmits(['ModalLogin']);

const byeLogin = ref(true);
const byeCreate = ref(false);
// const LoginRWD = ref(true);
// const CreateRWD = ref(false);

let box = document.getElementById('changeLoginBox');
const goCreate=(e)=>{
    // LoginRWD.value = !LoginRWD.value
    
    // CreateRWD.value= !CreateRWD.value;
    
    byeLogin.value= !byeLogin.value;

    byeCreate.value= !byeCreate.value;

    let bgcImg = e.target.closest('section');
    if(bgcImg.classList.contains('login_box_right')){
        bgcImg.classList.remove("login_box_right");
        bgcImg.classList.add("login_box_left");
        bgcImg.style.borderRadius = "10px 0 0 10px";

        e.target.innerText = "登入";
        e.target.previousElementSibling.previousElementSibling.innerText = "歡迎回來";
        e.target.previousElementSibling.innerText = "登入預約方便安心的服務吧！";
    }else{
        bgcImg.classList.remove("login_box_left");
        bgcImg.classList.add("login_box_right");
        bgcImg.style.borderRadius = "0 10px 10px 0"
        e.target.innerText = "註冊";
        e.target.previousElementSibling.previousElementSibling.innerText = "還不是會員嗎？";
        e.target.previousElementSibling.innerText = "創建帳號預約方便安心的服務吧！";
    }
    
}
const goCreateRWD=(e)=>{
    byeLogin.value= !byeLogin.value;
    byeCreate.value= !byeCreate.value;

}

const eyeOnPWD=(e)=>{
    if (e.target.previousElementSibling.type == "password") {
        e.target.previousElementSibling.type='text';

        } else {
            e.target.previousElementSibling.type='password';
        }
}
const RegisterData = {
    name:'',
    phone:'',
    email: '',
    county: '',
    district: '',
    send_address:'',
    service_address:'',
    username: '',
    password: '',
    member_pic:'',
    status:0
    };

const submitForm = () => {
    // const url = 'php/register_insert.php';
    const url = 'http://localhost/thd104/g1/public/php/register_insert.php';
    
    fetch(url, {
        method: 'POST',
        // headers: {
        //     'Content-Type': 'application/json'
        // },
        body: JSON.stringify(RegisterData)
    })
    .then(response => response.text())
    .then(response => {
        // console.log('註冊成功 js');
        // console.log(response);

        alert('註冊成功')
    }).catch(error => {
        console.error('Error:', error);
    });
};


const pwdValidation = (e)=>{
    console.log(pwdNew.value);
    if(pwdNew.value != pwdConfirm.value){
        // pwdConfirm.style.backgroundColor = 'white';
        pwdConfirm.classList.add('alert_inputWeye');
    }else{
        // pwdConfirm.style.backgroundColor = '#ECE7E1';
        pwdConfirm.classList.remove('alert_inputWeye');
    }

}

const isNext_el = (e)=>{
    if(RegisterData.username&&RegisterData.email!=''&&pwdNew.value==pwdConfirm.value){
        isRegister.value=true;
    }else{
        isRegister.value=false;
    }
}
const isRegister = ref(false)
document.addEventListener('input',isNext_el);
onBeforeUnmount(()=>{
    document.removeEventListener('keyup',isNext_el)
})


</script>
<template>
<div class="modal_mask" @click.self="$emit('ModalLogin')" >
<div class="tab">
        <ul>
            <li :class="{'tab_on':byeLogin}">
                <a href="#" @click="goCreateRWD">登入</a>
            </li> 
            <li :class="{'tab_on':byeCreate}">
                <a href="#"  @click="goCreateRWD">註冊</a>
            </li>
            
        </ul>
</div>
<div class="modal_content login_box">
    <transition  name="slide-fade-right">
     <!-- 左方登入頁面 -->
    <section class="login" v-if="byeLogin">
        <img src="@/img/about/about_lightbox_cross.svg" alt="" @click="$emit('ModalLogin')">
        <div class="modal_title">
            <h1>登入</h1>
        </div>
        <form class="login_form">
            <label for="usernameLogin">帳號<br><input type="text" id="usernameLogin"></label>
            <!-- <br> -->
            <label for="pwdLogin">密碼<br><input type="password" id="pwdLogin"></label>
            <!-- <br> -->
            <router-link  :to="{ name: 'forget' }">忘記密碼？</router-link>
            <router-link class="btn" :to="{ name: 'member' }">登入</router-link>
        </form>
        <div>
            <div class="horizontal_line"></div>
            <h2>或</h2>
            <div class="horizontal_line"></div>
        </div>
        <button class="btn">
            <img src="@/img/login/login_google.png" alt="">
            Google登入
        </button>
    </section>
</transition>
    <!-- 負責移動的帶背景區域 -->
    <section class="login_bgc_img login_box_right ">
        <img src="" alt="">
        <h1>還不是會員嗎？</h1>
        <h2>創建帳號預約方便安心的服務吧！</h2>
        <button class="btn" id="changeLoginBox" @click="goCreate">註冊</button>
    </section>


    <!-- 右方註冊頁面 -->
<transition  name="slide-fade-left">
    <section class="create" v-if="byeCreate">
        <img src="@/img/about/about_lightbox_cross.svg" alt="" @click="$emit('ModalLogin')">
        <div class="modal_title">
            <h1>會員註冊</h1>
        </div>
        <form class="create_form" @submit.prevent="submitForm">
            <label for="createAccount">*帳號<br><input type="text" id="createAccount" name="username" v-model="RegisterData.username" required></label>
            <!-- <br> -->
            <label for="pwdNew">*密碼<br>
                <input type="password" id="pwdNew" name="password" v-model="RegisterData.password" @input="pwdValidation" required>
                <img src="@/img/login/login_icon_eye.png" @click="eyeOnPWD" alt="">
            </label>
            <!-- <br> -->
            <label for="pwdConfirm">*確認密碼<br>
                <input type="password" id="pwdConfirm" @input="pwdValidation" required>
                <img src="@/img/login/login_icon_eye.png"  @click="eyeOnPWD" alt="">
            </label>
            <!-- <br> -->
            <label for="createEmail">*電子信箱<br><input type="email" id="createEmail" name="email" v-model="RegisterData.email" required></label>
            <input type="submit" value="加入會員" class="btn" :class="{ disabled: !isRegister }">
            <!-- <button type="submit" class="btn">送出</button> -->
        </form>
    </section>
</transition>
</div>
</div>
</template>

<style lang="scss">
@import '@/sass/main.scss';
.modal_mask>div.tab{
    display: none;
}
.login_box {
    // border-radius: 10px;
    margin: 0 auto;
    margin-top: 80px;
    width: 800px;
    height: 550px;
    position: relative;

    .login,
    .login_bgc_img,
    .create {
        width: 400px;
        height: 550px;
        position: absolute;
        top: 0;
    }
    

    label {
        font-size: $h2;
        width: 100%;
    }

    input {
        width: 100%;
        margin-top: 8px;
        margin-bottom: 16px;
    }

    .btn {
        font-size: $h2;
    }
}

// 登入表單
.login {
    box-sizing: border-box;
    background-color: $white;
    padding: 40px 70px 20px;
    border-radius: 10px 0 0 10px;
>img{
    position: absolute;
    left: 20px;
    top:20px;
    cursor: pointer;
}
    .login_form {
        a {
            text-decoration: none;
            color: $black;
            font-size: $p;
            display: block;
            width: fit-content;
            margin-left: auto;
            &:hover{
                font-weight: bold;
            }
        }
        a.btn {
                width: 150px;
                height: 50px;
                line-height: 30px;
                margin: 0 auto;
                color: $white;
                text-align: center;
                font-size: $h2;
                margin-top: 30px;
            }
    }

    div:nth-child(4) {
        margin-top: 20px;
        margin-bottom: 20px;
        display: flex;
        justify-content: space-around;

        .horizontal_line {
            width: 40%;
            height: 8px;
            border-bottom: 1px solid $grey ;
        }
    }

    >.btn {
        width: 250px;
        background-color: $light-milktea;
        color: $brown;
        margin: 0 auto;
        display: flex;
        justify-content: center;

        &:hover {
            background-color: $light-milktea;
            color: $brown;
        }
        img{
            width: 20px;
            align-self: center;
            margin-right: 10px;
        }
    }
}

// 會左右滑動，並更改內容的帶背景圖區塊
.login_bgc_img {
    // position: absolute;
    z-index: 10;
    background-image: url('@/img/login/login_main.jpg');
    background-size: cover;
    padding: 60px 40px 160px 40px;
    border-radius: 0 10px 10px 0;
    transition: 1s;

    img {
        margin: 0 auto;
        width: 100px;
    }

    h1,
    h2 {
        text-align: center;
        margin-top: 30px;
    }

    .btn {
        margin: 160px auto 0;
        width: 150px;
    }
    #changeLoginBox{
    opacity: 1;
    }
}

// 註冊表單
.create {
    left: 400px;
    background-color: $white;
    padding: 40px 70px 20px;
    border-radius: 0 10px 10px 0;
    >img{
    position: absolute;
    right: 20px;
    top:20px;
    cursor: pointer;
}
    .create_form {
        margin-bottom: 20px;

        label {
            position: relative;

            img {
                padding: 10px;
                position: absolute;
                width: 45px;
                right: 0%;
                top: 30%;
                cursor: pointer;
            }
        }

        .btn {
            width: 150px;
            height: auto;
            margin: 0 auto;
            margin-top: 10px;
        }
    }

}

.login_box_left {
    left: 0px;
}
.login_box_right {
    left: 400px;
}
.slide-fade-right-enter-active,.slide-fade-left-enter-active {
  transition: all 0.3s ease-out;
}


.slide-fade-right-leave-active,.slide-fade-left-enter-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-right-enter-from,
.slide-fade-right-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
.slide-fade-left-enter-from
,.slide-fade-left-leave-to{
    transform: translateX(-20px);
  opacity: 0;
}
@media screen and (max-width:1050px) {
    .modal_mask>div.tab {
    display: block;
    margin-top: 80px;
    
  ul{
    padding: 0;
    border: none;
    width: 355px;
    margin: 0 auto;
    justify-content: flex-start;
    li{
        margin: 0;
        a{
            width: 100px;
        }
    }
  }
}
    .login_box{
        margin-top: 0;
        height: 450px;
        width: 355px;
        background-color: $dark-milktea;
        padding: 0px 10px;
        border-radius:0px 10px 10px 10px;
        .modal_title{
            display: none;
        }
        .login_form{
           display: flex;
           flex-direction: column;
           align-items: center;
           padding-top: 20px;
           >a{
            align-self: flex-end;
            margin-right: 20px;
           }
           a.btn{
            margin-top: 10px;
            width: 120px;
            height: 40px;
            line-height: 20px;
            font-size: $h4;
           }
        }
        .login,.create{
            border-radius:10px;
            height: auto;
             width: 335px;
             margin: 20px auto;
             padding: 0;
    }
    .login{
       >img{
        // display: none;
        left: auto;
        right: 8px;
        top: 8px;
        border-radius:50%;
        background-color: $light-milktea;
        
    } 
    button{
        margin-bottom: 20px;
        font-size: $h4;
    }
    }
    .create{
        left: 0;
        padding-top: 20px;
        margin-left: 10px;
        >img{
            left: auto;
        right: 8px;
        top: 8px;
        border-radius:50%;
        background-color: $light-milktea;
        }
    .create_form {
       display: flex;
       flex-direction: column;
        label{
        margin: 0 auto;
            img{
                 top: 30%;
             }
         }
    .btn{
        margin-top: 10px;
        width: 200px;
        height: 40px;
        line-height: 20px;
        font-size: $h4;
    }}
    
    }
    label{
        width: 90%; 
        font-size: $h4;
       
    }
    }
    
    .login_bgc_img{
        display: none;
    }
}

</style>
