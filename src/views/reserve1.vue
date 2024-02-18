<script setup>
import DefaultHeader from '@/layouts/header.vue'; 
import DefaultFooter from '@/layouts/footer.vue';
import BannerUrl  from '@/img/reserve1/reserve1_banner.jpg'; 
const banner_url = BannerUrl; 
</script>

<template>
    <div>
        <DefaultHeader header-title-zh="預約服務" header-title-eng="Schedule Your Cleaning" :bgi="banner_url" /> 
    
<div class="wrapper reserve1">

    
<section class="subtitle">
    <h1>1</h1>
    <h1>選擇服務</h1>
    </section>

<section class="reserve_choose">
    <aside>
        <button class="dropdown btn">浣安全室清潔</button>
        
        <button class="dropdown btn">廚房特攻清潔</button>
        
        <button class="dropdown btn">浴室徹底清潔</button>
        <div class="dropdown_container -on">
     
            <section>
                <p>基本清潔</p>
                <p>廚房簡易清潔</p>
                <p>浴室簡易清潔</p>
                <p>臥室及客房清潔</p>
            </section>  
                <p>NTD4,000</p>
            
        
        </div>
        <div class="dropdown_container">
           
           <section>
               <p>廚房專業清潔</p>
               <p>加強油汙處理</p>
               <p>廚具汰洗</p>
               <p>水槽疏通</p>
            </section>  
               <p>NTD2,000</p>
          
       </div>
        <div class="dropdown_container">
            
            <section>
                <p>浴室專業清潔</p>
                <p>加強水垢處理</p>
                <p>專業除黴</p>
                <p>馬桶清潔</p>
            </section>  
                <p>NTD1,500</p>

        </div>
    </aside>
    <div class="pic">
        <img src="../img/reserve1/reserve1.jpg" alt="">
    </div>

</section>

<section class="next_btn">
    <router-link class="btn" :to="{ name: 'reserve2' }">下一步</router-link>   
</section>

</div>
<DefaultFooter />
</div>
</template>



<style lang="scss">
@import '@/sass/main.scss';

</style>