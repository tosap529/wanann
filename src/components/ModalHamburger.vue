<script setup>
defineEmits(['hamburger'])
</script>

<template>
    <div>
        <div class="modal_mask ham_bgi" @click.self="$emit('hamburger')" >

        <nav class="modal_content ham">
            <div class="hamburger cross_modal" @click="$emit('hamburger')">
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
            </div>
            <div class="nav_left">
                <router-link :to="{ name: 'index' }"><img src="@/img/logo_square.svg" alt="logo"></router-link>
            </div>

            <div class="nav_right">
                <ul>
                    <li><router-link :to="{ name: 'about' }">關於我們</router-link></li>
                    <li class="h_li"><router-link :to="{ name: 'articles' }">最新消息</router-link>
                        <ol>
                            <li><router-link :to="{ name: 'act' }">優惠活動</router-link></li>
                            <li><router-link class="nav_last_a" :to="{ name: 'articles' }">專欄文章</router-link></li>
                        </ol>
                    </li>

                    <li class="h_li"><router-link :to="{ name: 'service' }">我們的服務</router-link>
                        <ol>
                            <li><router-link :to="{ name: 'service' }">服務介紹</router-link></li>
                            <li><router-link :to="{ name: 'case' }">案例分享</router-link></li>
                            <li><router-link class="nav_last_a" :to="{ name: 'reserve' }">預約服務</router-link></li>
                        </ol>
                    </li>
                    <li><router-link :to="{ name: 'mall' }">商城</router-link></li>
                    <li><router-link :to="{ name: 'contact' }">聯絡我們</router-link></li>
                    <li><router-link :to="{ name: 'game' }">清潔人格測驗</router-link></li>
                    <li><router-link :to="{ name: 'member' }">會員中心</router-link></li>
                </ul>
                <div class="h_btns">
                    <router-link class="btn" :to="{ name: 'reserve' }">
                    <img src="@/img/footer_calendar.svg" alt="calendar_icon">立即預約
                    </router-link>
                    <a href="#"><img src="@/img/icon_fb.svg" alt=""></a>
                    <a href="#"><img src="@/img/icon_line.svg" alt=""></a>
                </div>
            </div>

        </nav>
        </div>
</div>

</template>


<style lang="scss">
@import '@/sass/main.scss';


@include m() {

    .ham_bgi{
        background-color: $dark-milktea;
    }
    .ham{
        a {
        color: $black;
        }
        position: relative;

        .hamburger {
            padding-top: 8px;
            position: absolute;
            top: -92px;
            right: 25px;

            .bar {
                display: block;
                background-color: $white;
                width: 25px;
                height: 2px;
                margin: 5px auto;
            }
            .bar:nth-child(2) {
                    opacity: 0;
                }

                .bar:nth-child(1) {
                    transform: translateY(7px) rotate(45deg);
                }

                .bar:nth-child(3) {
                    transform: translateY(-7px) rotate(-45deg);
                }
        }

        .nav_left {
            position: absolute;
            top: -67px;
            left: 38%;
            z-index: 1;
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
                    color: $white;
                }

            }
        }
    }

}

</style>