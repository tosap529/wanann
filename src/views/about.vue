<script setup>
import { ref,onMounted, onBeforeUnmount  } from "vue";
import wrapper from '@/layouts/wrapper.vue'; // 引入wrapper滑動(請照抄)
import DefaultHeader from '@/layouts/header.vue'; // 引入header(請照抄)
import DefaultFooter from '@/layouts/footer.vue'; // 引入footer(請照抄)
import BannerUrl  from '@/img/about/about_banner.jpg'; // 更改成banner路徑
import ModalAboutBelief from '@/components/ModalAboutBelief.vue'; 

const banner_url = BannerUrl; // banner路徑令變數(請照抄)
const isBeliefModalShow = ref(false);
const goBelief = ()=>{
  isBeliefModalShow.value = !isBeliefModalShow.value;
    console.log( isBeliefModalShow.value)
};
const bgi =ref(null);
const charity =ref(null);
const scrollFastBtn = ref(null)

const scroll_anchor1 = ref(null);
const scroll_anchor2 = ref(null);
const scroll_anchor3 = ref(null);

const scrollItems=[
    {name:'企業理念',
    href:'#scroll_anchor1',
    anchor:scroll_anchor1},
    {name:'企業特色',
    href:'#scroll_anchor2',
    anchor:scroll_anchor2},
    {name:'企業貢獻',
    href:'#scroll_anchor3',
    anchor:scroll_anchor3}
]
// const goPosition = (anchor) => {
    
//     // 參考：https://www.nightprogrammer.com/vue-js/show-the-position-of-an-element-in-vue-3-composition-api-example/
//     const { top } =  anchor.value.getBoundingClientRect();
//     console.log(top);
//     window.scrollTo({top : top-50, behavior:'smooth'})
// }

//--------------動畫------------
function scrollFast(){
  window.scrollTo({top:5000,behavior:'smooth'})
}

function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return rect.bottom < 0 || rect.top > window.innerHeight;
}

const fullBgc=()=>{
    let charity_pos = charity.value.getBoundingClientRect();
    // console.log(charity.value.getBoundingClientRect())
    // console.log(window.innerWidth)
    // console.log(charity_pos.top);
    // console.log(charity_pos.top-window.innerHeight);
    if(window.innerWidth>500){
      if (charity_pos.top>2520 ||charity_pos.top-window.innerHeight<-50){
      bgiShow.value = false;
              scroll_anchor3.value.style.display='block';
    }else{
      bgiShow.value = true;       
        scroll_anchor3.value.style.display='none';
    }
    }
  }
function addClassToVisibleElements() {
  let aosElements = document.querySelectorAll(".about_anime");
  aosElements.forEach(function (aosElement) {
    if (!isElementInViewport(aosElement)){ //元素一出現就remove
        aosElement.classList.add("ed");
    } else{ //元素不在全加ed控制
        aosElement.classList.remove("ed");
    } 
  });
}

let bgiShow = ref(false);
const bgi_on =ref({
  'height':'100vh',
  'position':'fixed',
  'top':'0',
  'left':'0'
    })
const bgi_off = ref({
  'height':'700px',
  'position':'absolute',
  'top':'4200px',
  'left':'0'}) ;

  onMounted (()=>{
    // console.log(charity.value);

  document.addEventListener("scroll", addClassToVisibleElements);
document.addEventListener("scroll", fullBgc);
  })
  onBeforeUnmount(()=>{
    // fullBgc=null;
    document.removeEventListener("scroll", fullBgc);
  })

</script>
<template>
    <div >
      <ModalAboutBelief @ModalAboutBelief="goBelief" v-show="isBeliefModalShow"  />
    <!-- 貼上以下這行(footer一樣不多贅述) 並更改成需要的標題，:bgi照貼即可 -->
    <DefaultHeader header-title-zh="關於我們" header-title-eng="About" :bgi="banner_url" /> 

    <!-- ↓將原本的.wrapper div換成這個標籤，並加上本來有的class -->
    <wrapper class="about"> 
      <span id="scroll_anchor1"></span>
      <span id="scroll_anchor2"></span>
      <span id="scroll_anchor3"></span>
        <section class="about_scroll ">
            <ul>
                <li v-for="scrollItem in scrollItems" :key="scrollItem.name" >
                    <a :href="scrollItem.href">{{scrollItem.name}}</a>
                </li>
                <!-- <li><a href="#" @click="goPosition">企業理念</a></li>
                <li><a href="#" @click="goPosition">企業特色</a></li>
                <li><a href="#" @click="goPosition">企業貢獻</a></li> -->
            </ul>
            <img src="@/img/about/about_main.jpg" alt="">
        </section>
        <section class="about_bgc">
            <div class="title" ref="scroll_anchor1" >
                <h1>企業理念</h1>
            </div>
            <div class="belief about_anime aboutSlideIn">
                <img src="@/img/logo_square.svg" alt="">
                <div>
                    <h2>輕鬆愜意，家的幸福保姆。</h2>
                    <h3>浣安居家清潔服務致力於提供高品質的居家清潔服務，讓客戶享受乾淨、整潔的生活環境，減輕生活中的瑣事，專心追求更有價值的事物。
                    </h3>
                </div>
            </div>
            <h4 class="about_anime aboutSlideIn">在現代快節奏的生活中，夫妻雙方皆投入工作，繁忙的生活使得居家清潔成為一項負擔。<br><br>與此同時，高齡化社會的蔓延也讓家中的長輩需要更多的關懷和照顧。<br><br>在這樣的狀況下，「浣安」懷著企業社會責任的理念，為您締造輕鬆、愜意的家居環境，讓您專注於工作，同時讓長輩和家人享受更好的居住品質。<br><br>我們了解，工作繁忙的上班族往往無暇顧及居家清潔，而家中的長輩亦需要更多關懷。因此，「浣安」提供專業的居家清潔服務，讓您不再為家務瑣事而煩惱。我們的清潔團隊不僅注重細節，更兼顧家人的安全和健康，使用環保、對身體無害的清潔用品，為您打造一個乾淨又舒適的家。<br><br>「浣安」不只是清潔服務，更是您家中的幸福保姆。我們的使命是為您減輕生活負擔，讓您回到一個清新整潔的家，感受家的溫馨和幸福。同時，透過對高齡社會的關懷，我們希望為長輩帶來更多的關愛和舒適。<br><br>「浣安」努力實現環保和永續經營，成為一個為社會帶來正面影響的品牌。讓我們攜手，為您的家庭和社區創造一個更美好的生活環境。<br><br>輕鬆愜意，家的幸福保姆，「浣安」陪伴您共創美好未來。
            </h4>
            <button class="btn"  @click="goBelief">了解更多</button>
            
        </section>
        <section class="about_art">
            <div class="about_anime">
                <h1>清潔不只是工作</h1>
                <h1>更是對家的獻禮</h1>
            </div>
            <img class="about_anime aboutSlideInLeft" src="@/img/about/about_art1.jpg" alt="">
            <img class="about_anime aboutSlideInRight" src="@/img/about/about_art2.jpg" alt="">
        </section>
        <section class="about_feature" >
            <div class="title" ref="scroll_anchor2" >
                <h1>企業特色</h1>
            </div>
            <div>
            <article class="about_anime aboutSlideInLeft">
                <img src="@/img/about/about_feature1.jpg" alt="">
                <div>
                    <h2>安心</h2>
                    <p>浣安以為客戶提供卓越的服務而自豪。我們致力於建立可靠性和信任，準時履行承諾，讓客戶感到安心。我們注重環保，使用環保產品，並以透明的價格政策為客戶提供清晰的服務費用。您的安心，是我們最大的成就。
                    </p>
                </div>
            </article>
            <article class="about_anime aboutSlideInLeft">
                <img src="@/img/about/about_feature2.jpg" alt="">
                <div>
                    <h2>安全</h2>
                    <p>浣安的員工均持有良民證，並經過專業訓練。同時，作為您的清潔合作夥伴，我們深知隱私的重要性，致力於提供極具隱私性的清潔服務。我們以透明、合規的作業流程，維護您的個人空間安全。</p>
                </div>
            </article>
            <article class="about_anime aboutSlideInLeft">
                <img src="@/img/about/about_feature3.jpg" alt="">
                <div>
                    <h2>安住</h2>
                    <p>我們是您家中的清潔夥伴，營造出讓您感到如同置身溫馨家庭的清潔環境。專業清潔團隊致力於每一個細節，確保您的居所煥然一新。客戶滿意度是我們的首要目標，提供個性化清潔方案，滿足您特定需求。與我們合作，讓您始終享受住在家裡的美好感覺。
                    </p>
                </div>
            </article>
        </div>
        <div class="about_scroll_btn about_anime" ref="scrollFastBtn" @click="scrollFast">
            <h4>⌵</h4>
            <h4>scroll</h4>
        </div>
        </section>
        <section>
            <div class="about_bgc_img about_anime" ref="bgi" :style="bgiShow ? bgi_on:bgi_off">
                <article>
                    <h1 class="about_anime">"The objective of cleaning is not just to clean, but to feel happiness living within that
                        environment."
                    </h1>
                    <h1 class="about_anime">---Marie Kondo</h1>
                    <h1 class="about_anime aboutSlideIn">清潔的目標不僅僅是為了打掃，而是要在這個環境中感受到居住的幸福。</h1>
                </article>
            </div>
        </section>

        <section class="about_charity" ref="charity" >
            <div class="title" ref="scroll_anchor3" >
                <h1>企業貢獻</h1>
            </div>
            <article class="about_anime aboutSlideIn">
                <h3>浣安居家清潔服務公司在社會中扮演著重要的角色，不僅提供高效的清潔和整理服務，同時也對社區和環境產生著積極的影響。這些公司通過多方面的社會貢獻，成為社會進步的一份子。<br><br>首先，浣安創造了就業機會，提供了穩定的工作機會給當地社區的居民。這不僅促進了經濟的發展，還有助於減少失業率，提高社區居民的生活水準。<br><br>其次，這些公司在培訓和技能發展方面發揮著積極的作用。透過提供清潔培訓和職業技能的機會，他們不僅幫助員工提升職業素養，更激發了個人成長和進步的動力。
                </h3>
                <img src="@/img/about/about_donate1.jpg" alt="">
            </article>
            <article class="about_anime aboutSlideIn">
                <h3>在環境方面，浣安強調使用環保清潔劑和採用可持續的清潔方法，以降低對環境的影響。這有助於促進社會的環保意識，使整個社區更加關注可持續發展和環境友好的生活方式。<br><br>此外，浣安也透過支持社區活動和慈善事業，回饋社會。<br><br>具體作為包括捐贈清潔服務、參與社區清理活動，以及支持當地慈善機構，希冀能促進社會的和諧和共融。<br><br>總的來說，浣安除了提供專業清潔服務，亦藉由各種方式積極參與社會事務，為社會發展和人們的生活品質做出了寶貴的貢獻，使清潔不再只是一件小事，而是能提升全人類福祉的重要大事。
                </h3>
                <img src="@/img/about/about_donate2.jpg" alt="">
            </article>
            <h2 class="about_anime aboutSlideIn">如果您正在尋找一個可靠、專業的居家清潔服務，歡迎與浣安聯繫。
                我們是打造清新舒適家居環境的最佳選擇。</h2>
        </section>
    </wrapper>
    <!-- ↑原本的.wrapper div結束標籤換成這個 -->
    <DefaultFooter />

  </div>
</template>

<style lang="scss">
@import '@/sass/main.scss';
// .scroll{
//   overflow: scroll;
//   height: 100vh;
// }
div.about+div>footer {
    position: absolute;
    width: 100%;
    // top: 6100px;
    top:$about_d+6800;

}
@media screen and (max-width:1300px) {
  div.about+div>footer {
    top:5000px;

}}
@media screen and (max-width:1150px) {
  div.about+div>footer {
    top:5600px;

}

}

@media screen and (max-width:1000px) {
  div.about+div>footer {
    top:5900px;
}}
@media screen and (max-width:900px) {
  div.about+div>footer {
    top:5500px;

}}
@media screen and (max-width:700px) {
  div.about+div>footer {
    top:5400px;

}}
@media screen and (max-width:600px) {
  div.about+div>footer {
    top:5700px;

}}
@media screen and (max-width:$m) {
  div.about+div>footer {
    top: $about_d_rwd+3300;

}}
// 動畫
.about_anime{
  opacity: 0;
}

.about_anime.ed{
  opacity: 1;
  transition: opacity 2s;
}
.aboutSlideIn {
  transform: translateY(5em);
}
.aboutSlideIn.ed {
    transition: 1.5s ease-in-out;
  transform: translateY(0em);
}
.aboutSlideInLeft {
  transform: translateX(-100vw);
}
.aboutSlideInLeft.ed {
transition: 1.5s ease-in-out;
  transform: translateX(0);
}
.aboutSlideInRight {
  transform: translateX(+100vw);
}
.aboutSlideInRight.ed {
transition: 1.5s ease-in-out;
  transform: translateX(0);
}
.zoom{
    opacity: 1;
}
.zoom.ed {
  animation: zoom 1.5s forwards linear;
}
@keyframes zoom {
  0% {
    scale: 1;
  }
  25% {
    scale: 1.5;
  }
  50% {
    scale: 1;
  }
  75% {
    scale: 1.25;
  }
  100% {
    scale: 1;
  }
}
</style>
