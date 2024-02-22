<script setup>
import { ref } from "vue";
defineEmits(['ModalLogin']);

const byeLogin = ref(true);
const byeCreate = ref(false);

const goCreate=(e)=>{
    byeLogin.value= !byeLogin.value;
    byeCreate.value= !byeCreate.value;

    let bgcImg = e.target.closest('section');
    if(bgcImg.classList.contains('login_box_right')){
        bgcImg.classList.remove("login_box_right");
        bgcImg.classList.add("login_box_left");
        bgcImg.style.borderRadius = "10px 0 0 10px"
        changeLoginBox.innerText = "登入";
        changeLoginBox.previousElementSibling.previousElementSibling.innerText = "歡迎回來";
        changeLoginBox.previousElementSibling.innerText = "登入預約方便安心的服務吧！";
    }else{
        bgcImg.classList.remove("login_box_left");
        bgcImg.classList.add("login_box_right");
        bgcImg.style.borderRadius = "0 10px 10px 0"
        changeLoginBox.innerText = "註冊";
        changeLoginBox.previousElementSibling.previousElementSibling.innerText = "還不是會員嗎？";
        changeLoginBox.previousElementSibling.innerText = "創建帳號預約方便安心的服務吧！";
    }
    
}

let pwdStatusNew = 'password';
let pwdStatusConfirm = 'password';
const eyeOnPWD=(e)=>{
    if (e.target.previousElementSibling.type == "password") {
        e.target.previousElementSibling.type='text';

        } else {
            e.target.previousElementSibling.type='password';
        }
}
</script>
<template>
<div class="modal_mask" @click.self="$emit('ModalLogin')" >
<div class="modal_content login_box">
    <transition  name="slide-fade-right">
     <!-- 左方登入頁面 -->
    <section class="login" v-if="byeLogin">
        <img src="@/img/about/about_lightbox_cross.svg" alt="" @click="$emit('ModalLogin')">
        <div class="login_title">
            <h1>登入</h1>
        </div>
        <form class="login_form">
            <label for="username">帳號<br><input type="text" id="username"></label>
            <br>
            <label for="pwd">密碼<br><input type="password" id="pwd"></label>
            <br>
            <router-link  :to="{ name: 'forget' }">忘記密碼？</router-link>
            <!-- <a href="#">忘記密碼？</a> -->
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
        <!--  @click="goCreate" -->
        <button class="btn" id="changeLoginBox" @click="goCreate">註冊</button>
    </section>


    <!-- 右方註冊頁面 -->
<transition  name="slide-fade-left">
    <section class="create" v-if="byeCreate">
        <img src="@/img/about/about_lightbox_cross.svg" alt="" @click="$emit('ModalLogin')">
        <div class="title">
            <h1>會員註冊</h1>
        </div>
        <form class="create_form">
            <label for="createAccount">*帳號<br><input type="text" id="createAccount"></label>
            <br>
            <label for="pwdNew">*密碼<br>
                <input type="password" id="pwdNew">
                <img src="@/img/login/login_icon_eye.png" @click="eyeOnPWD" alt="">
            </label>
            <br>
            <label for="pwdConfirm">*確認密碼<br>
                <input type="password" id="pwdConfirm">
                <img src="@/img/login/login_icon_eye.png"  @click="eyeOnPWD" alt="">
            </label>
            <br>
            <label for="createEmail">*電子信箱<br><input type="email" id="createEmail"></label>
            <input type="submit" value="加入會員" class="btn">
        </form>
    </section>
</transition>
</div>
</div>
</template>

<style lang="scss" scoped>
@import '@/sass/main.scss';

.login_box {
    // border-radius: 10px;
    margin: 0 auto;
    margin-top: 80px;
    width: 1000px;
    height: 600px;
    position: relative;

    .login,
    .login_bgc_img,
    .create {
        width: 500px;
        height: 600px;
        position: absolute;
        top: 0;
    }
    .login_title {
        margin-bottom: 20px;
        >h1{
            display: flex;
        }
        >h1::before{
        content: '';
        display: block;
        width: 45px;
        height: 32.44px;
        background-image: url(@/img/logo_title.svg);
        // background-repeat: no-repeat;
        background-position: center center;
        background-size: contain;
        margin-right: 8px;
        }
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
    padding: 40px 70px 70px;
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
            text-align: right;
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
        margin-top: 30px;
        margin-bottom: 30px;
        display: flex;
        justify-content: space-around;

        .horizontal_line {
            width: 40%;
            height: 8px;
            border-bottom: 1px solid $grey ;
        }
    }

    >.btn {
        width: 300px;
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
    padding: 100px 100px 180px 100px;
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
        margin: 0 auto;
        width: 150px;
        margin-top: 120px;
    }
    #changeLoginBox{
    opacity: 1;
    }
}

// 註冊表單
.create {
    left: 500px;
    background-color: $white;
    padding: 40px 75px 0px;
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
                top: 33%;
                cursor: pointer;
            }
        }

        .btn {
            width: 300px;
            height: auto;
            margin: 0 auto;
            margin-top: 20px;
        }
    }

}

.login_box_left {
    left: 0px;
}
.login_box_right {
    left: 500px;
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
</style>
