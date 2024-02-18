<script setup>
import { computed } from "vue";
const props = defineProps(['headerTitleZh','headerTitleEng','bgi']);
const bgi_css = computed(() => {
      return {
        "background-image": `url('${props.bgi}')`
      };
    });
</script>

<template>
    <div>
        <header :style="bgi_css">
        <nav>
            <div class="nav_left">
                <a href="#"><img src="@/img/logo_long.svg" alt="logo"></a>
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
            <div class="header_text">
                <h1>{{headerTitleZh}}</h1>
                <h1>{{headerTitleEng}}</h1>
            </div>

    </header>
    </div>
</template>


<style lang="scss" >

</style>