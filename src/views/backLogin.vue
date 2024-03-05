<script setup>
    import { useRouter } from 'vue-router';

const router = useRouter();
let username = '';
let password = '';

const login = () => {
    if (username == 'admin' && password == 'thd104g1') {
        router.push({ name: 'cms' });
    } else {
        alert("帳號或密碼錯誤");
    }
    
};

const fillCredentials = () => {
        username = 'admin';
        password = 'thd104g1';

        const usernameInput = document.querySelector('input[type="text"]');
        const passwordInput = document.querySelector('input[type="password"]');
        if (usernameInput && passwordInput) {
            usernameInput.value = username;
            passwordInput.value = password;
        }
    };
</script>

<template>
    <div>
        <div class="backlogin">

            <div class="backlogin_title">
                <img src="@/img/logo_long.svg" alt="logo">
                <h2>後台登入</h2>
            </div>

            <div class="backlogin_input">
                <h4>帳號</h4>
                <input v-model="username" type="text">
                <h4>密碼</h4>
                <input v-model="password" type="password">
                <button class="btn" @click="login">登入</button>
            </div>
            <button class="direct" @click="fillCredentials">•ᴗ•</button>
        </div>
    </div>
</template>



<style lang="scss">
@import '@/sass/main.scss';

.backlogin{
    background-color: $white;
    border: 12px solid $dark-milktea;
    max-width: 520px;
    margin: 0 auto;
    border-radius: 8px;
    margin-top: 40px;
    position: relative;
    .backlogin_title{
        display: flex;
        padding-top: 50px;
        padding-bottom: 30px;
        margin-left: 100px;
        h2{
            margin-left: 50px;
            padding-top: 10px;
        }
    }
    .backlogin_input{
        margin-left: 100px;
        h4{
            margin-bottom: 10px;
        }
        input{
            margin-bottom: 28px;
            width: 280px;
        }
        .btn{
            margin: 10px 0 50px 75px;
            width: 125px;
            padding: 8px;
            &:hover{
                color: $white;
            }
        }
    }
    .direct{
     position: absolute;
     right: 12px;
     bottom: 12px;
     border: none;
     padding: 5px;
     border-radius: 8px;
     font-size: 12px;
     color: $medium-milktea;
     background-color: transparent;
     &:hover{
            color: $dark-milktea;
            }
    }
}

</style>