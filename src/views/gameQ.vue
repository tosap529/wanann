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
            <div class="gameQ_contect">
                <div class="gameQ_text">
                    <h2>你對於居住環境的整潔程度有怎樣的要求？</h2>
                    <h4>亂中有序，自己覺得輕鬆舒適就好</h4>
                    <h4>看心情，心情好看什麼都順眼啦</h4>
                    <h4>看地方，對每個區域的要求不同</h4>
                    <h4>有潔癖，一定要保持乾淨整齊</h4>
                    <button class="btn">下一題</button>
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