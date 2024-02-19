<script setup>
    import DefaultHeader from '@/layouts/header.vue'; // 引入header(請照抄)
    import DefaultFooter from '@/layouts/footer.vue'; // 引入footer(請照抄)
    import BannerUrl  from '@/img/about/about_banner.jpg'; // 更改成banner路徑

    const banner_url = BannerUrl; // banner路徑令變數(請照抄)
    
</script>
<template>
    <DefaultHeader header-title-zh="關於我們" header-title-eng="About" :bgi="banner_url" /> 
    <div>
        
        <div class="wrapper article">
            <section class="article_page">
                <h1>年前大掃除 : 三樣神器馬上搞定</h1>
                <h3>2024-01-31</h3>
                <img src="../img/article/article_1.jpg" alt="">
                <h3>農曆新年快到啦！這代表著一年一度的年前大掃除即將展開。為了讓家裡焕然一新，我們得提前來點實用的打掃用具。這次就來分享三樣超神的工具，讓你的大掃除事半功倍，效果又超乎預期！</h3>
            </section>


        </div>
        <DefaultFooter />
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss">
@import '@/sass/main.scss';

</style>