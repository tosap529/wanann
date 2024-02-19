<script setup>

</script>

<template>
    <div>

        <nav>
            <div class="hamburger">
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
            </div>
            <div class="nav_left">
                <a href="#"><img src="../img/logo_square.svg" alt="logo"></a>
            </div>

            <div class="nav_right">
                <ul>
                    <li><a href="#">關於我們</a></li>
                    <li class="h_li"><a href="#">最新消息</a>
                        <ol>
                            <li><a href="#">優惠活動</a></li>
                            <li><a href="#" class="nav_last_a">專欄文章</a></li>
                        </ol>
                    </li>

                    <li class="h_li"><a href="#">我們的服務</a>
                        <ol>
                            <li><a href="#">服務介紹</a></li>
                            <li><a href="#">案例分享</a></li>
                            <li><a href="#" class="nav_last_a">預約服務</a></li>
                        </ol>
                    </li>
                    <li><a href="#">商城</a></li>
                    <li><a href="#">聯絡我們</a></li>
                    <li><a href="#">清潔人格測驗</a></li>
                    <li><a href="#">會員中心</a></li>
                </ul>
                <div class="h_btns">
                    <button class="btn"><img src="@/img/footer_calendar.svg" alt="calendar_icon">立即預約</button>
                    <a href="#"><img src="@/img/icon_fb.svg" alt=""></a>
                    <a href="#"><img src="@/img/icon_line.svg" alt=""></a>
                </div>
            </div>

        </nav>
    </div>
</template>


<style lang="scss">
@import '@/sass/main.scss';
@import '../sass/layout/hamburger';

</style>