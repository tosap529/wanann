<!-- 檔案名：Modal______，請用大駝峰 -->
<script setup>
// 這裡改事件名即可
defineEmits([''])
</script>
<template>
    <div class="modal_mask" @click.self="$emit('')" >
    <!-- modal_content屬性右側請務必置換為自己要用的屬性 -->
    <!-- 不准用modal_content屬性寫style以免大家出錯 -->
    <div class="modal_content about_belief">
     
        <!-- 

            創造專屬於你的燈箱

         -->



     <!-- 這是取消燈箱的叉叉，如需要請自行保留 -->
     <!-- 這裡改事件名即可 -->
        <img class="cross_modal" @click="$emit('')" src="@/img/about/about_lightbox_cross.svg" alt="">
        <!-- 這是關閉的按鈕，如需要請自行保留 -->
        <!-- 這裡改事件名即可 -->
        <button class="btn" @click="$emit('')">關閉</button>
    </div>
</div>
</template>

<!-- scoped切勿拿掉 -->
<style lang="scss" scoped>
@import '@/sass/main.scss';

// 關閉燈箱的叉叉圖片
img.cross_modal{
        cursor: pointer;
        width: 24px;
        align-self: flex-end;
        margin: 8px 8px 0 0 ;
    }
button.btn{
    margin-bottom: 16px;
}
// 燈箱客製化style從這往下寫
</style>

<!-- 如何掛到頁面上？ -->
<!-- 可先自行參考about頁面，看不懂可問我 -->