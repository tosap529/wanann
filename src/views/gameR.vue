<script setup>

import gameFooter from '@/layouts/footer.vue'
import Modal from '@/components/ModalHamburger.vue'; 
import { ref } from 'vue';


const isModalShow = ref(false);
const hamburger = ()=>{
    isModalShow.value = !isModalShow.value;
    // console.log( isModalShow.value)
};
</script>

<template>
    <div>
        <Modal @hamburger="hamburger" v-show="isModalShow" />

        <header class="fixed">
            <nav>
            <div class="nav_left">
                <router-link :to="{ name: 'index' }"><img src="@/img/logo_long.svg" alt="logo"></router-link>
                <h4>最安心的居家清潔服務</h4>
            </div>
            <div class="nav_right">
                <i class="fa fa-bars" area-hidden="true"></i>
                <i class="fa fa-solid fa-xmark" area-hidden="true"></i>
                <ul>
                    <li><router-link :to="{ name: 'about' }">關於我們</router-link></li>
                    <li><router-link :to="{ name: 'articles' }">最新消息</router-link>
                        <ol class="header_news">
                            <li><router-link :to="{ name: 'act' }">優惠活動</router-link></li>
                            <li><router-link class="nav_last_a" :to="{ name: 'articles' }">專欄文章</router-link></li>
                        </ol>
                    </li>

                    <li><router-link :to="{ name: 'service' }">我們的服務</router-link>
                        <ol class="header_ser">
                            <li><router-link :to="{ name: 'service' }">服務介紹</router-link></li>
                            <li><router-link :to="{ name: 'case' }">案例分享</router-link></li>
                            <li><router-link class="nav_last_a" :to="{ name: 'reserve' }">預約服務</router-link></li>
                        </ol>
                    </li>
                    <li><router-link :to="{ name: 'mall' }">商城</router-link></li>
                    <li><router-link :to="{ name: 'contact' }">聯絡我們</router-link></li>
                </ul>
                <div class="nav_user">
                    <router-link class="fai" :to="{ name: 'member' }"><font-awesome-icon icon="user" /></router-link>
                    <a href="#" class="fai"><font-awesome-icon icon="cart-shopping" /></a>
                </div>
            </div>
            <div class="hamburger" @click="hamburger">
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
            </div>
        </nav>
</header>

    <div class="wrapper">
        <section>
            <div class="gameR_contect">
                <div class="gameR_text">
                    <h3>你的清潔人格是...</h3>
                    <img src="@/img/game/gameR_bear.png" alt="bear">
                    <h2>熊型清潔人格</h2>
                    <p>你是個比較隨興的人，對於居住環境的整潔比較沒有要求，即使環境不太整潔也可以接受，除非已經影響到生活機能或是有時間、有清理的心情才會去做。
                        平時的你看上去有些慵懶，遇到問題可能偏向以「船到橋頭自然直」的態度去面對。</p>
                    <p class="btn_p">人格魅力</p>
                    <p>你的生活狀態可能不會一直保持得很好，但因為不會給自己太大壓力，心理狀態通常較為健康，和你相處會很舒服、自在。</p>
                    <p class="btn_p">建議</p>
                    <p>有時還是要多注意一下自身和周遭環境的整潔，多花一點心思去維護，可能會過得更舒適喔！</p>
                    <p class="btn_p">適合你的清潔法寶</p>

                    <div class="gameR_recomm">
                        <a href="#" title="輕巧型吸塵器"><img src="@/img/game/gameR_bear_recomm1.jpg" alt="recomm"></a>
                        <a href="#" title="智能潔淨掃地機器人"><img src="@/img/game/gameR_bear_recomm2.jpg" alt="recomm"></a>
                    </div>
                    <div class="gameR_share">
                        <button class="btn">分享給朋友</button>
                        <button class="btn">再測一次</button>
                    </div>
                </div>
            </div>

        </section>
    </div>
    <gameFooter />

    </div>
</template>

<style lang="scss" >


</style>