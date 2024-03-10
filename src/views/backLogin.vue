<script setup>
    import { useRouter} from 'vue-router';
    import { ref } from 'vue';

// 後台預設帳密登入

const showSuccessModal = ref(false);

const router = useRouter();
let username = '';
let password = '';

const login = () => {
    if (username == 'admin' && password == 'thd104g1') {
        router.push({ name: 'cms' });
    } else {
        // alert("帳號或密碼錯誤");
        showSuccessModal.value = true;
        setTimeout(() => {
            showSuccessModal.value = false;
         }, 700);
  
    }
};
const closeModal = () => {
        showSuccessModal.value = false;
    };

// 後台預設帳密按下神秘小按鈕後顯示
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
                <div v-if="showSuccessModal" class="modal">
                                <div class="modal_content">
                                    <span class="close" @click="closeModal">&times;</span>
                                    <img src="@/img/logo_title.svg" alt="logo">
                                    <p>帳號/密碼錯誤</p>
                                </div>
                        </div>
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
        
.modal {
    display: block; 
    position: fixed; 
    z-index: 12; 
    left: 0;
    top: 0;
    background-color: rgba(0, 0, 0, .5); 
}

.modal_content {
    margin: 0 auto;
    margin-top: 17%;
    background-color:#B69B85;
    width: 175px;
    border: none;
    text-align: center;
    padding: 16px;
    border-radius: 8px;
    animation: rotate .5s linear infinite alternate;
    display: flex;
    img{
    width:22px;
    }
    p{    
    font-size: 16px;
    letter-spacing: .5px;
    text-align: center;
    margin: 0 auto;
    color: white;
    position: relative;}
}

@keyframes rotate {
  0% {
    transform: rotate(-5deg);
  }
  100% {
    transform: rotate(5deg); 
  }
}

.close {
    display: none;
}
}

</style>