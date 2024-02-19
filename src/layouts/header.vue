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
                <!-- <a href="#"><img src="@/img/logo_long.svg" alt="logo"></a> -->
                <router-link :to="{ name: 'index' }"><img src="@/img/logo_long.svg" alt="logo"></router-link>
                <h4>最安心的居家清潔服務</h4>
            </div>
            <div class="nav_right">
                <ul>
                    <li>
                        <!-- <a href="#">關於我們</a> -->
                        <router-link :to="{ name: 'about' }">關於我們</router-link> 
                    </li>
                    <li>
                        <!-- <a href="#">最新消息</a> -->
                        <router-link :to="{ name: 'articles' }">最新消息</router-link> 
                        <ol>
                            <li>
                                <!-- <a href="#">優惠活動</a> -->
                                <router-link :to="{ name: 'act' }">最新消息</router-link> 
                            </li>
                            <li>
                                <!-- <a href="#" class="nav_last_a">專欄文章</a> -->
                                <router-link class="nav_last_a" :to="{ name: 'articles' }">專欄文章</router-link> 
                            </li>
                        </ol>
                    </li>

                    <li>
                        <!-- <a href="#">我們的服務</a> -->
                        <router-link :to="{ name: 'service' }">我們的服務</router-link>
                        <ol>
                            <li>
                                <!-- <a href="#">服務介紹</a> -->
                                <router-link :to="{ name: 'service' }">服務介紹</router-link>
                            </li>
                            <li>
                                <!-- <a href="#">案例分享</a> -->
                                <router-link :to="{ name: 'case' }">案例分享</router-link>
                            </li>
                            <li>
                                <!-- <a href="#" class="nav_last_a">預約服務</a> -->
                                <router-link class="nav_last_a" :to="{ name: 'reserve' }">預約服務</router-link>
                            </li>
                        </ol>
                    </li>
                    <li>
                        <!-- <a href="#">商城</a> -->
                        <router-link :to="{ name: 'mall' }">商城</router-link>
                    </li>
                    <li>
                        <!-- <a href="#">聯絡我們</a> -->
                        <router-link :to="{ name: 'contact' }">聯絡我們</router-link>
                    </li>
                </ul>
                <div class="nav_user">
                    <!-- <a href="#" class="fai"><font-awesome-icon icon="user" /></a> -->
                    <router-link class="fai" :to="{ name: 'member' }"><font-awesome-icon icon="user" /></router-link> 
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