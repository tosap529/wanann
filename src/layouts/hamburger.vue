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
                <a href="#"><img src="@/img/logo_square.svg" alt="logo"></a>
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

body {
    @include m() {
        background-color: $dark-milktea;
    }
}

@include m() {
    a {
        color: $black;
    }

    nav {
        position: relative;

        .hamburger {
            padding-top: 8px;
            position: absolute;
            top: -92px;
            right: 25px;

            .bar {
                display: block;
                background-color: $black;
                width: 25px;
                height: 2px;
                margin: 5px auto;
                transition: all 0.3s ease-in-out;

            }
        }

        .nav_left {
            position: absolute;
            top: -67px;
            left: 38%;

            img {
                width: 100px;
            }
        }

        .nav_right {
            margin: 104px auto;
            background-color: $light-milktea;
            width: 380px;
            height: 670px;
            border-radius: 30px;
            position: relative;
            z-index: -1;

            ul {
                position: absolute;
                top: 52px;
                left: 20%;

                li {
                    margin-bottom: 24px;
                    padding-left: 15px;
                }

                .h_li {
                    background-color: $white;
                    padding: 15px 20px 1px 15px;
                    border-radius: 10px;
                }

                ol {
                    margin-left: 100px;
                    padding-left: 8px;
                    margin-top: 16px;
                    border-left: 4px solid $brown;
                    border-radius: 4px;
                }


            }

            .h_btns {
                display: flex;
                width: 320px;
                border-top: 1px dashed $brown;
                position: absolute;
                bottom: 20px;
                left: 8%;
                padding-top: 16px;

                .btn {
                    padding: 8px 12px;
                    margin-left: 45px;
                    margin-right: 24px;

                    img {
                        display: inline;
                        padding-right: 8px;
                        vertical-align: sub;
                    }
                }

                a {
                    padding: 0 10px;
                    padding-top: 6px;
                }

            }
        }
    }

}

</style>