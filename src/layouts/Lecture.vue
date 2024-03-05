<script setup>

    import { defineProps, ref } from 'vue';

    defineProps({lectureItems: Array});

</script>

<template>
    <div>

    <section class="act_main2 act_main"  v-for="litem in lectureItems" :key="litem.ID">

        <article>
            <h2 class=" new -none">{{litem.TITLE}}</h2>
            <img :src= "litem.PIC" alt="">
            <div class="right">
                <h2>{{litem.TITLE}}</h2>
                <h4>{{litem.CONTENT}}</h4>        
                <h3>活動日期 {{ litem.DEADLINE }} </h3>
            </div>
        </article>
        <!-- <article>
            <h2 class=" new -none">王叔叔的清潔秘訣：讓家居煥然一新！</h2>
            <img src="@/img/act/lec_2.jpg" alt="">
            <div class="right">
                <h2>王叔叔的清潔秘訣：讓家居煥然一新！</h2>
                <h4>清潔不僅僅是一種工作，更是一種藝術。這位資深清潔專家分享了他的獨家秘訣，從家居角落到每個細節，讓您的空間焕然一新。跟隨他的指導，讓您的家居煥然一新，焕發出嶄新的活力和舒適。</h4>
                <h3>活動日期 2024-01-20 </h3>
            </div>
        </article>
        <article>
            <h2 class=" new -none">鄭阿姨的家居清潔心法</h2>
            <img src="@/img/act/lec_3.jpg" alt="">
            <div class="right">
                <h2>鄭阿姨的家居清潔心法</h2>
                <h4>獨特的家居清潔心法將為您帶來焕然一新的居家環境。從細節處理到整體布置，鄭阿姨將分享她的實用技巧和寶貴經驗，讓您的家居始終保持舒適整潔。讓我們一同跟隨鄭阿姨的步伐，為家居帶來清新舒適的氛圍，讓每一個角落都散發著溫馨和愛。</h4>
                <h3>活動日期 2023-12-31 </h3>
            </div>
        </article> -->

    </section>
    </div>
</template>