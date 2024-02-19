<script setup>
defineEmits(['ModalAboutBelief'])


</script>
<template>
    <div class="modal_mask" @click.self="$emit('ModalAboutBelief')" >
    <div class="modal_content about_belief"
     >
        <img @click="$emit('ModalAboutBelief')" src="@/img/about/about_lightbox_cross.svg" alt="">
        <p>
            在現代快節奏的生活中，夫妻雙方皆投入工作，繁忙的生活使得居家清潔成為一項負擔。<br><br>與此同時，高齡化社會的蔓延也讓家中的長輩需要更多的關懷和照顧。<br><br>在這樣的狀況下，「浣安」懷著企業社會責任的理念，為您締造輕鬆、愜意的家居環境，讓您專注於工作，同時讓長輩和家人享受更好的居住品質。<br><br>我們了解，工作繁忙的上班族往往無暇顧及居家清潔，而家中的長輩亦需要更多關懷。<br>因此，「浣安」提供專業的居家清潔服務，讓您不再為家務瑣事而煩惱。<br>我們的清潔團隊不僅注重細節，更兼顧家人的安全和健康，使用環保、對身體無害的清潔用品，為您打造一個乾淨又舒適的家。<br><br>「浣安」不只是清潔服務，更是您家中的幸福保姆。<br>我們的使命是為您減輕生活負擔，讓您回到一個清新整潔的家，感受家的溫馨和幸福。<br>同時，透過對高齡社會的關懷，我們希望為長輩帶來更多的關愛和舒適。<br><br>「浣安」努力實現環保和永續經營，成為一個為社會帶來正面影響的品牌。<br>讓我們攜手，為您的家庭和社區創造一個更美好的生活環境。<br><br>輕鬆愜意，家的幸福保姆，「浣安」陪伴您共創美好未來。
        </p>
        <button class="btn" @click="$emit('ModalAboutBelief')">關閉</button>
    </div>
</div>
</template>


<style lang="scss" scoped>
@import '@/sass/main.scss';
.lightbox_off{
    display: none;
}
.about_belief{
    margin: 0 auto;
    width: 320px;
    background-color: blue;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    img{
        width: 24px;
        align-self: flex-end;
        margin: 8px 8px 0 0 ;
    }
    p{
        padding: 20px;
        margin-bottom: 10px;
    }
    button{
        margin-bottom: 16px;
    }
}
</style>