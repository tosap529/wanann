<script setup>
import gameFooter from '@/layouts/footer.vue'

</script>

<template>
    <div>
        <header class="fixed">
            <nav>
            <div class="nav_left">
                <a href="#"><img src="@/img/logo_long.svg" alt="logo"></a>
                <h4>最安心的居家清潔服務</h4>
            </div>
            <div class="nav_right">
                <i class="fa fa-bars" area-hidden="true"></i>
                <i class="fa fa-solid fa-xmark" area-hidden="true"></i>
                <ul>
                    <li><a href="#">關於我們</a></li>
                    <li><a href="#">最新消息</a>
                        <ol class="header_news">
                            <li><a href="#">優惠活動</a></li>
                            <li><a href="#" class="nav_last_a">專欄文章</a></li>
                        </ol>
                    </li>

                    <li><a href="#">我們的服務</a>
                        <ol class="header_ser">
                            <li><a href="#">服務介紹</a></li>
                            <li><a href="#">案例分享</a></li>
                            <li><a href="#" class="nav_last_a">預約服務</a></li>
                        </ol>
                    </li>
                    <li><a href="#">商城</a></li>
                    <li><a href="#">聯絡我們</a></li>
                </ul>
                <div class="nav_user">
                    <a href="#" class="fai"><font-awesome-icon icon="user" /></a>
                    <a href="#" class="fai"><font-awesome-icon icon="cart-shopping" /></a>
                </div>
            </div>
            <div class="hamburger">
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
            </div>
        </nav>
</header>
<div class="wrapper">
        <section>
            <div class="game_contect">
                <div class="game_text">
                    <h2>不同人格，對於居住環境的清潔有不同的要求和習慣</h2>
                    <h2>測驗看看你是哪種森林動物，找出你的清潔人格吧！</h2>
                    <button class="btn">開始測驗</button>
                </div>
            </div>

        </section>
    </div>
    <gameFooter />

    </div>
</template>

<style lang="scss">
@import '@/sass/main.scss';

</style>