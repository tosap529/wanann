<script>
    export default {
        
    }
</script>

<template>
    <div>
        <div class="backlogin">

            <div class="backlogin_title">
                <img src="@/img/logo_long.svg" alt="">
                <h2>後台登入</h2>
            </div>

            <div class="backlogin_input">
                <h4>帳號</h4>
                <input type="text">
                <h4>密碼</h4>
                <input type="password">
                <button class="btn">登入</button>
            </div>

        </div>
    </div>
</template>



<style lang="scss">
@import '@/sass/main.scss';

.backlogin{
    background-color: $white;
    border: 20px solid $dark-milktea;
    max-width: 520px;
    margin: 0 auto;
    border-radius: 8px;
    margin-top: 40px;
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
        }
    }
}

</style>