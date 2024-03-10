<script setup>
import { ref,onBeforeMount } from "vue";
import DefaultHeader from '@/layouts/header.vue'; // 引入header(請照抄)
import DefaultFooter from '@/layouts/footer.vue'; // 引入footer(請照抄)
import BannerUrl  from '@/img/service/service_banner.jpg'; // 更改成banner路徑
import wrapper from '@/layouts/wrapper.vue'; // 引入wrapper滑動(請照抄)


const banner_url = BannerUrl; // banner路徑令變數(請照抄)

import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';
const modules = [Autoplay, Pagination, Navigation];

onBeforeMount(()=>{
  if(localStorage.getItem('plan_want_to_see')){
    localStorage.removeItem('plan_want_to_see')
    }
})

let whichPlan = ref('')
const toPlan = (e)=>{
    let plan_text = e.target.closest('article').querySelector('h2').innerText
    whichPlan.value = plan_text.substring(plan_text.length-6);
      localStorage.setItem("plan_want_to_see", whichPlan.value)
}


</script>



<template>
    
    <div>
    <DefaultHeader header-title-zh="服務介紹" header-title-eng="Our Service" :bgi="banner_url" /> 
    <wrapper class="service">

        <div class="title title_phone">
            <h1>方案介紹</h1>
        </div>

<section class="service_plan service_phone">
    
    <div class="left">
        <img src="@/img/service/service_1.jpg" alt="">
        <p>適用對象：下班就是要回家放鬆！不想打掃&gt;&lt;，想在庸碌生活中稍作休息的你</p>
    </div>
    <article class="service_article">
        <h2>浣安全室清潔</h2>
        <h3>基本清潔</h3>
        <h3>廚房簡易清潔</h3>
        <h3>浴室簡易清潔</h3>
        <h3>臥室及客房清潔</h3>
        <p>NTD 4000</p>
        <p class="new">適用對象：下班就是要回家放鬆！不想打掃&gt;&lt;，想在庸碌生活中稍作休息的你</p>
        <div>
            <router-link class="btn" :to="{ name: 'plan' }" @click="toPlan">詳細內容</router-link>  
            <router-link class="btn" :to="{ name: 'reserve' }" @click="toPlan">直接預約</router-link>  
        </div>             
    </article>
    
</section>

<section class="service_plan service_phone">
    
    <div class="left">
        <img src="@/img/service/service_2.jpg" alt="">
        <p>適用對象：油油油，只想安心料理不想踏足清潔善後的你</p>
    </div>
    <article class="service_article">
        <h2>浣內咖手－廚房徹底清潔</h2>
        <h3>廚房專業清潔</h3>
        <h3>加強油汙處理</h3>
        <h3>廚具汰洗</h3>
        <h3>水槽疏通</h3>
        <p>NTD 2000</p>
        <p class="new">適用對象：油油油，只想安心料理不想踏足清潔善後的你</p>
        <div>
            <router-link class="btn" :to="{ name: 'plan' }" @click="toPlan">詳細內容</router-link>  
            <router-link class="btn" :to="{ name: 'reserve' }" @click="toPlan">直接預約</router-link> 
        </div>             
    </article>

</section>

<section class="service_plan service_phone">
    
    <div class="left">
        <img src="@/img/service/service_3.jpg" alt="">
        <p>適用對象：陳年黴菌難以去除，對浴室清潔感到絕望的你</p>
    </div>
    <article class="service_article">
        <h2>洗咧考喔！－浴室特攻清潔</h2>
        <h3>浴室專業清潔</h3>
        <h3>加強水垢處理</h3>
        <h3>專業除黴</h3>
        <h3>馬桶清潔</h3>
        <p>NTD 1500</p>
        <p class="new">適用對象：陳年黴菌難以去除，對浴室清潔感到絕望的你</p>
        <div>
            <router-link class="btn" :to="{ name: 'plan' }" @click="toPlan">詳細內容</router-link>  
            <router-link class="btn" :to="{ name: 'reserve' }" @click="toPlan">直接預約</router-link> 
        </div>             
    </article>

</section>

<!-- ---------------------Carousel---------------------- -->

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
        class="service_swiper"
>
      <swiper-slide>
        <section class="service_plan">
    
    <div class="left">
        <img src="@/img/service/service_1.jpg" alt="">
        <p>適用對象：下班就是要回家放鬆！不想打掃&gt;&lt;，想在庸碌生活中稍作休息的你</p>
    </div>
    <article>
        <h2>浣安全室清潔</h2>
        <h3>基本清潔</h3>
        <h3>廚房簡易清潔</h3>
        <h3>浴室簡易清潔</h3>
        <h3>臥室及客房清潔</h3>
        <p>NTD4,000</p>
        <p class="new">適用對象：下班就是要回家放鬆！不想打掃&gt;&lt;，想在庸碌生活中稍作休息的你</p>
        <div>
            <router-link class="btn" :to="{ name: 'plan' }" @click="toPlan">詳細內容</router-link>  
            <router-link class="btn" :to="{ name: 'reserve' }">直接預約</router-link> 
        </div>             
    </article>
    
</section>

      </swiper-slide>
      <swiper-slide>
        <section class="service_plan ">
    
    <div class="left">
        <img src="@/img/service/service_2.jpg" alt="">
        <p>適用對象：油油油，只想安心料理不想踏足清潔善後的你</p>
    </div>
    <article>
        <h2>浣內咖手－廚房徹底清潔</h2>
        <h3>廚房專業清潔</h3>
        <h3>加強油汙處理</h3>
        <h3>廚具汰洗</h3>
        <h3>水槽疏通</h3>
        <p>NTD2,000</p>
        <p class="new">適用對象：油油油，只想安心料理不想踏足清潔善後的你</p>
        <div>
            <router-link class="btn" :to="{ name: 'plan' }" @click="toPlan">詳細內容</router-link>  
            <router-link class="btn" :to="{ name: 'reserve' }">直接預約</router-link> 
        </div>             
    </article>

</section>
      </swiper-slide>
      <swiper-slide>
        <section class="service_plan ">
    
    <div class="left">
        <img src="@/img/service/service_3.jpg" alt="">
        <p>適用對象：陳年黴菌難以去除，對浴室清潔感到絕望的你</p>
    </div>
    <article>
        <h2>洗咧考喔！－浴室特攻清潔</h2>
        <h3>浴室專業清潔</h3>
        <h3>加強水垢處理</h3>
        <h3>專業除黴</h3>
        <h3>馬桶清潔</h3>
        <p>NTD1,500</p>
        <p class="new">適用對象：陳年黴菌難以去除，對浴室清潔感到絕望的你</p>
        <div>
            <router-link class="btn" :to="{ name: 'plan' }" @click="toPlan">詳細內容</router-link>  
            <router-link class="btn" :to="{ name: 'reserve' }">直接預約</router-link> 
        </div>             
    </article>

</section>
      </swiper-slide>

      </swiper>


<section class="service_icon">

    <div class="title title_phone">
        <h1>追加服務</h1>
    </div>

    <article>
        <h2>延伸服務</h2>
        <div class="right_icon1">
            <ul>
                <li>
                    <img src="../img/service/service_icon1.png" alt="">
                    <h3>窗飾清潔</h3>
                    <p>清理窗簾、百葉窗，
                        整理簾布，布幔清洗</p>
                    <p>$ 500</p>
                </li>
                <li>
                    <img src="../img/service/service_icon2.png" alt="">
                    <h3>布件除蟎</h3>
                    <p>為窗簾布、沙發布、床單等布件去除塵蟎</p>
                    <p>$ 500</p>
                </li>
                <li>
                    <img src="../img/service/service_icon3.png" alt="">
                    <h3>冷氣機清理</h3>
                    <p>濾網清理、散熱鋁鰭片清理</p>
                    <p>$ 500</p>
                </li>
                <li>
                    <img src="../img/service/service_icon4.png" alt="">
                    <h3>冰箱清理</h3>
                    <p>擦拭表面、密封條，除霜，整理食物</p>
                    <p>$ 500</p>
                </li>
                <li>
                    <img src="../img/service/service_icon5.png" alt="">
                    <h3>洗衣機清理</h3>
                    <p>洗衣槽、導水管、洗衣粉盒清理</p>
                    <p>$ 500</p>
                </li>
                <li>
                    <img src="../img/service/service_icon6.png" alt="">
                    <h3>陽台清潔</h3>
                    <p>清理灰塵與污垢、照明設施、陽台水槽</p>
                    <p>$ 500</p>
                </li>
                <li>
                    <img src="../img/service/service_icon7.png" alt="">
                    <h3>簡易消毒</h3>
                    <p>以環保消毒劑簡易消毒家中環境</p>
                    <p>$ 500</p>
                </li>
            </ul>
        </div>
    </article>
    <article>
        <h2>特殊處理</h2>
        <div class="right_icon2">
            <ul>
                <li>
                    <img src="../img/service/service_icon8.png" alt="">
                    <h3>空屋</h3>
                    <p>若屋況為空屋，則可減免價格</p>
                </li>
                <li>
                    <img src="../img/service/service_icon9.png" alt="">
                    <h3>毛孩服務</h3>
                    <p>適用於家中有飼養狗、貓等寵物的用戶</p>
                </li>
                <li>
                    <img src="../img/service/service_icon10.png" alt="">
                    <h3>大坪數</h3>
                    <p>適用於室內坪數超過25坪</p>
                </li>
                <li>
                    <img src="../img/service/service_icon11.png" alt="">
                    <h3>樓中樓</h3>
                    <p>適用於室內空間有樓中樓</p>
                </li>
                <li>
                    <img src="../img/service/service_icon12.png" alt="">
                    <h3>局部加強</h3>
                    <p>適用於房屋有特殊格局：深窄的空間、地下室等</p>
                </li>
            </ul>
        </div>
    </article>

</section>

<section>

    <div class="title title_phone">
        <h1>我們的特色</h1>
    </div>

    <table class="service_compare">
        <thead>
            <tr>
                <td>自行打掃</td>
                <td><img src="@/img/logo_long.svg" alt=""></td>
                <td>他牌清潔服務</td>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>耗時高，令人卻步</td>
                <td>由浣安專業清潔人員服務</td>
                <td>人力外包，品質不一</td>
            </tr>
            <tr>
                <td>時常無法抽空</td>
                <td>24小時隨時預約好方便 !</td>
                <td>僅能透過電話預約</td>
            </tr>
            <tr>
                <td>缺乏標準檢驗清潔品質</td>
                <td>訂有清潔SOP，確保清潔品質</td>
                <td>不同人員，清潔品質不一</td>
            </tr>
            <tr>
                <td>環保耗材及清潔劑成本高，
                    未必能活用</td>
                <td>全面使用環保耗材及清潔劑</td>
                <td>未必全面符合環保標準</td>
            </tr>
            <tr>
                <td></td>
                <td>注重隱私性、確保安全性</td>
                <td>員工資格審核標準不一</td>
            </tr>
        </tbody>
       

    </table>
    <div class="service_compare_phone">
    <table class="phone">
        <tbody>
            <tr>
                <td>自行打掃</td>
                <td>耗時高，令人卻步</td>
                <td>時常無法抽空</td>
                <td>缺乏標準檢驗清潔品質</td>
                <td>環保耗材及清潔劑成本高，
                    未必能活用</td>
            </tr>
            <tr>
                <td class="king"><div><img src="@/img/logo_square.svg" alt=""></div></td>
                <td>由浣安專業清潔人員服務</td>
                <td>24小時隨時預約好方便 !</td>
                <td>訂有清潔SOP，確保清潔品質</td>
                <td>全面使用環保耗材及清潔劑</td>
                <td>注重隱私性、確保安全性</td>
            </tr>
            <tr>
                <td>他牌清潔服務</td>
                <td>人力外包，品質不一</td>
                <td>僅能透過電話預約</td>
                <td>不同人員，清潔品質不一</td>
                <td>未必全面符合環保標準</td>
                <td>員工資格審核標準不一</td>
            </tr>
        </tbody>
       

    </table>
    </div>
   

</section>

<div class="title title_phone">
    <h1>服務地區</h1>
</div>

<section class="service_map">
    
    <img src="@/img/service/service_map.jpg" alt="">
    
    <article class="area">
    
            <h2>台北市</h2>
            <h4>中正區、大同區、中山區、松山區、大安區、萬華區、信義區、士林區、北投區、內湖區、南港區、文山區</h4>
       
    
            <h2>新北市部分區域</h2>
            <h4>三峽區、三重區、中和區、五股區、板橋區、新店區、永和區、汐止區、 新莊區、淡水區、深坑區、蘆洲區、林口區、泰山區、土城區</h4>
     
       
            <h2>其他服務地區</h2>
            <h4>桃園市桃園區、桃園市八德區、桃園市龜山區</h4>
   
    </article>

</section>

</wrapper>
<DefaultFooter />
    </div>
</template>



<style lang="scss">


</style>