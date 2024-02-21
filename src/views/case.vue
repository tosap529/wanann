<script setup>
    import DefaultHeader from '@/layouts/header.vue'; // 引入header(請照抄)
    import DefaultFooter from '@/layouts/footer.vue'; // 引入footer(請照抄)
    import BannerUrl  from '@/img/case/case_banner.jpg'; // 更改成banner路徑
    import wrapper from '@/layouts/wrapper.vue'; // 引入wrapper滑動(請照抄)

    const banner_url = BannerUrl; // banner路徑令變數(請照抄)
    // Import Swiper Vue.js components
    import { Swiper, SwiperSlide } from 'swiper/vue';

    // Import Swiper styles
    import 'swiper/css';

    import 'swiper/css/pagination';
    import 'swiper/css/navigation';

    // import required modules
    import { Autoplay, Pagination, Navigation } from 'swiper/modules';
    const modules = [Autoplay, Pagination, Navigation];

</script>

<template>
  <div>
    <DefaultHeader header-title-zh="案例分享" header-title-eng="Successful Case" :bgi="banner_url" /> 
    <swiper
        :spaceBetween="0"
        :centeredSlides="true"
        :autoplay="{
        delay: 2500,
        disableOnInteraction: false,
        }"
        :pagination="{
        clickable: true,
        }"
        :navigation="true"
        :modules="modules"
        class="case_swiper"
      >
      <swiper-slide><img src="@/img/case/carousel_pic1.jpg" alt=""></swiper-slide>
      <swiper-slide><img src="@/img/case/carousel_pic2.jpg" alt=""></swiper-slide>
      <swiper-slide><img src="@/img/case/carousel_pic3.jpg" alt=""></swiper-slide>

      </swiper>

    <wrapper class="case">
     

        <div class="case_phone">
            <img src="@/img/case/carousel_pic1.jpg" alt="">
            <img src="@/img/case/carousel_pic2.jpg" alt="">
            <img src="@/img/case/carousel_pic3.jpg" alt="">
        </div>

        <section class="case_one">

          <article>
            <div>
              <img src="@/img/case/case_2.jpg" alt="">
              <span class="living -close">台北市松山區 王小姐</span>
            </div>
            <div class="tag -close"><span>#浴室特攻清潔 </span><span>#洗衣機清理</span><span>#冰箱清理</span></div>
            <div class="content">
              <h3>台北市松山區 王小姐</h3>
              <p>浣安的服務人員以仔細入微的態度清潔浴室，從馬桶到淋浴區，再到洗手台，每個地方都經過專業的處理。對於浴室中的水垢和污漬，他們使用了高效的清潔劑，使每一個表面都恢復光潔。
                <br><br>
                除了專業，他們的服務也讓我感受到了貼心。清潔人員在工作過程中非常細心，避免影響到我們的私人物品，同時注意不使用可能引起過敏的清潔劑。這種細緻入微的服務讓我感到很放心，我可以信任他們在我家進行清潔。
                <br><br>
                整個清潔過程完畢後，我走進浴室時彷彿走進了全新的空間。清新的氛圍、乾淨整潔的環境，使我深刻體會到專業清潔服務的價值。對於那些忙碌的生活，無暇清潔的人來說，這樣的服務無疑是一種解脫。
              </p>
            </div>
            <div class="next_btn -close"><a href="#" class="btn next">看更多</a></div>
          </article>
    <div class="right">
        
        <div class="up">
            <h3>浴室特攻清潔</h3>
        </div>
        <div class="down">

            <div class="down_left"><h3>洗衣機清理</h3></div>
            <div class="down_right"><h3>冰箱清理</h3></div>
        </div>
        
    </div>

</section>

<section class="case_two">

    <article>
        <div>
        <img src="@/img/case/case_3.jpg" alt="">
        <span class="living -close">台北市信義區 黃小姐</span>
        </div>
        <div class="tag -close"><span>#浴室安全清潔 </span><span>#大坪數</span><span>#毛小孩特殊處理</span></div>
        <div class="content">
            <h3>台北市信義區 黃小姐</h3>
            
            <p>我們家選擇了浣安，對於他們的專業態度和出色的清潔效果感到非常滿意。清潔人員非常細心，每一個角落都被仔細打理，讓整個家居散發著清新的氛圍。
                <br><br>
                清潔人員的服務態度十分親切，並且非常有耐心。他們充分了解客戶需求，根據我們的家居特點提供了有效的清潔方案。即使是家中複雜的區域，也能夠得到專業而細緻的處理。
                他們的全室清潔服務讓我省去了不少操心，每次都能感受到家裡焕然一新的感覺。
                <br><br>
                最讓人滿意的是，公司提供了環保清潔選項，使用對環境友善的清潔劑，讓我們更放心地享受清新的居家生活。總的來說，居家清潔服務不僅滿足了我們的需求，更超越了預期，是一個值得信賴和推薦的清潔服務公司。
            </p>
        </div>
        <div class="next_btn -close"><a href="#" class="btn next">收合</a></div>
    </article>
    <div class="right">
        
        <div class="up">
            <h3>浴室特攻清潔</h3>
        </div>
        <div class="down">

            <div class="down_left"><h3>大坪數</h3></div>
            <div class="down_right"><h3>毛孩服務</h3></div>
        </div>
        
    </div>

</section>
<section class="case_three">

    <article>
        <div>
        <img src="@/img/case/case_4.jpg" alt="">
        <span class="living -close">新北市板橋區 洪先生</span>
        </div>
        <div class="tag -close"><span>#廚房徹底清潔 </span><span>#局部加強</span><span>#簡易消毒</span></div>
        <div class="content">
            <h3>台北市松山區 王小姐</h3>
            
            <p>第一次請專業的清潔公司來進行交屋後的首度清潔，非常感謝清潔人員的清掃，窗台和隱藏櫥櫃空間都有深度清潔，尤其最有感的就是抽油煙機啦~經過一番深度清潔感覺從垃圾堆復活一樣，清潔完做的環境消毒也不會有刺鼻的臭味，反而還有淡淡清香，超極棒！
            </p>
        </div>
      
    </article>
    <div class="right">
        
        <div class="up">
            <h3>浴室特攻清潔</h3>
        </div>
        <div class="down">

            <div class="down_left"><h3>局部加強</h3></div>
            <div class="down_middle"><h3>空屋</h3></div>
            <div class="down_right"><h3>檢疫消毒</h3></div>
        </div>
        
    </div>

</section>
  </wrapper>
    <DefaultFooter />
    </div>
</template>

<!-- <script>

  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';

  // Import Swiper styles
  import 'swiper/css';

  import 'swiper/css/pagination';
  import 'swiper/css/navigation';


  // import required modules
  import { Autoplay, Pagination, Navigation } from 'swiper/modules';

  export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      return {
        modules: [Autoplay, Pagination, Navigation],
      };
    },
  };
</script> -->

<style lang="scss">


</style>