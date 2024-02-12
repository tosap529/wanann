<script setup>
import { RouterLink, RouterView } from 'vue-router'
// import HelloWorld from './components/HelloWorld.vue'

</script>

<template>
  <div>
    <header>
        <nav>
            <div class="nav_left">
                <a href="#"><img src="./img/logo_long.svg" alt="logo"></a>
                <h4>最安心的居家清潔服務</h4>
            </div>
            <div class="nav_right">

                <ul>
                    <li><a href="#">關於我們</a></li>
                    <li><a href="#">最新消息</a>
                        <ol>
                            <li><a href="#">優惠活動</a></li>
                            <li><a href="#" class="nav_last_a">專欄文章</a></li>
                        </ol>
                    </li>

                    <li><a href="#">我們的服務</a>
                        <ol>
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

        <!-- <div class="header_text">
            <h1>關於我們</h1>
            <h1>About</h1>
        </div> -->
    </header>




        <!-- <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink> -->


    <div class="page-content">
        <RouterView />

    </div>
    <footer>
    <ul>
        <li class="footer_customer_service">
            <h4>客服時間</h4>
            <p>週一至週五</p>
            <p>09:00 – 12:00 / 13:00 – 17:30</p>
        </li>
        <li class="footer_area">
            <h4>服務地區</h4>
            <p>台北/新北/桃園</p>
            <button class="btn"><img src="@/img/footer_calendar.svg" alt="calendar_icon">立即預約</button>
        </li>
        <li class="footer_logo">
            <a href="#"><img src="@/img/logo_square.svg" alt="logo"></a>
        </li>
        <li class="footer_contact">
            <h4>聯絡資訊</h4>
            <p>電話 : 02-12345678</p>
            <p>Email: wa@rmail.com</p>
            <p>地址：台北市中山區南京東路三段219號4樓、5樓</p>
        </li>
        <li class="footer_social_media">
            <a href="#"><img src="./img/icon_fb.svg" alt=""></a>
            <a href="#"><img src="./img/icon_line.svg" alt=""></a>
        </li>
    </ul>

    <div class="footer_rights_reserved">
        <p>Copyright © 2024 浣安 – THD104-G1 All Rights Reserved</p>
        <p>本網站為緯育TibaMe【第89期】前端工程師專業技術養成班學員作品,僅供學習、展示之用途。</p>
    </div>

</footer>
</div>
</template>

<style lang="scss" scoped>

@import './sass/main.scss';


</style>
