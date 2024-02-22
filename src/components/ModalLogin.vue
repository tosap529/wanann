<script setup>
defineEmits(['ModalLogin']);
</script>
<template>
<div class="modal_mask" @click.self="$emit('ModalLogin')" >
<div class="modal_content login_box">
     
    <section class="login">
        <img src="" alt="">
        <div class="title">
            <h1>登入</h1>
        </div>
        <form class="login_form">
            <label for="account">帳號<br><input type="text" id="account"></label>
            <br>
            <label for="pwd">密碼<br><input type="text" id="pwd"></label>
            <br>
            <a href="#">忘記密碼？</a>
            <div>
                <!-- <input type="submit" value="註冊" class="btn"> -->
                <input type="submit" value="登入" class="btn">
            </div>
        </form>
        <div>
            <div class="horizontal_line"></div>
            <h2>或</h2>
            <div class="horizontal_line"></div>
        </div>
        <button class="btn">
            <img src="" alt="">
            Google登入
        </button>
    </section>
    <section class="login_bgc_img login_box_right">
        <img src="" alt="">
        <h1>還不是會員嗎？</h1>
        <h2>創建帳號預約方便安心的服務吧！</h2>
        <button class="btn" id="changeLoginBox">註冊</button>
    </section>
    <!-- <section class="create">
        <img src="" alt="">
        <div class="title">
            <h1>會員註冊</h1>
        </div>
        <form class="create_form">
            <label for="createAccount">*帳號<br><input type="text" id="createAccount"></label>
            <br>
            <label for="pwdNew">*密碼<br>
                <input type="password" id="pwdNew">
                <img class="eye" src="./img/login/login_icon_eye.png" alt="">
            </label>
            <br>
            <label for="pwdConfirm">*確認密碼<br>
                <input type="password" id="pwdConfirm">
                <img class="eye" src="./img/login/login_icon_eye.png" alt="">
            </label>
            <br>
            <label for="createEmail">*電子信箱<br><input type="email" id="createEmail"></label>
            <input type="submit" value="加入會員" class="btn">
        </form>
    </section> -->

        <!-- <img class="cross_modal" @click="$emit('ModalLogin')" src="@/img/about/about_lightbox_cross.svg" alt="">

        <button class="btn" @click="$emit('ModalLogin')">關閉</button> -->
</div>
</div>
</template>

<style lang="scss" scoped>
@import '@/sass/main.scss';

// img.cross_modal{
//         cursor: pointer;
//         width: 24px;
//         align-self: flex-end;
//         margin: 8px 8px 0 0 ;
//     }
// button.btn{
//     margin-bottom: 16px;
// }
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
        // box-sizing: border-box;
        width: 500px;
        height: 600px;
        position: absolute;
        top: 0;
    }
    .title {
        margin-bottom: 20px;
        h1::before{
            margin-top: 8px;
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

    .login_form {
        a {
            text-decoration: none;
            color: $black;
            font-size: $p;
            display: block;
            text-align: right;
        }

        div {
            display: flex;
            justify-content: center;
            margin-top: 30px;

            .btn {
                width: 150px;
                height: auto;
                margin: 0;
            }
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

        &:hover {
            background-color: $light-milktea;
            color: $brown;
        }
    }
}

// 會左右滑動，並更改內容的帶背景圖區塊
.login_bgc_img {
    position: absolute;
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
        margin-top: 80px;
    }

}

// 註冊表單
.create {

    left: 500px;
    background-color: $white;

    padding: 40px 75px 0px;
    border-radius: 0 10px 10px 0;

    .create_form {
        margin-bottom: 20px;

        label {
            position: relative;

            img {
                position: absolute;
                width: 25px;
                right: 5%;
                top: 65%;
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

</style>
