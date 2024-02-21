<script setup>
 import { ref } from 'vue';

const firstParagraph = ref(null);
const secondParagraph = ref(null);
const firstVisible = ref(true);

const showFirst = () => {
  firstVisible.value = true;
};

const showSecond = () => {
  firstVisible.value = false;
};
</script>


<template>
     <div>
    <button @click="showFirst">顯示第一個</button>
    <button @click="showSecond">顯示第二個</button>
    <div v-if="firstVisible">
      <p ref="firstParagraph">這是第一個段落元素</p>
    </div>
    <div v-else>
      <p ref="secondParagraph">這是第二個段落元素</p>
    </div>
  </div>
  </template>
  

<!-- <template>
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
</template> -->

<style lang="scss">


</style>