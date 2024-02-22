<script setup>
    import DefaultHeader from '@/layouts/header.vue'; // 引入header(請照抄)
    import DefaultFooter from '@/layouts/footer.vue'; // 引入footer(請照抄)
    import BannerUrl  from '@/img/planA/planA_banner.jpg'; // 更改成banner路徑
    import wrapper from '@/layouts/wrapper.vue'; // 引入wrapper滑動(請照抄)

    const banner_url = BannerUrl; // banner路徑令變數(請照抄)


    import { ref } from "vue";

    const activeContent = ref('content1');


    const showContent = (e) => {
        activeContent.value = e;
    }

</script>

<template>    
    <div>
        <DefaultHeader header-title-zh="浣安全室清潔" header-title-eng="Cleaning Project" :bgi="banner_url" /> 
        
        <wrapper class="plan">
            
          <section class="planA">

             <article>
               <img src="@/img/planA/planA_1.jpg" alt=""> 
               <div class="title">
                 <h1>浣安全室清潔</h1>
               </div>
               <h3>包括客廳、臥室、餐廳等全室清潔，讓您的家居環境清新宜人。</h3>
               <p>所需時長：4小時</p>
               <p>適合坪數：室內25坪內</p>
               <p>方案費用：$ 4000起</p>

               <div class="rule">
                  <p>1. 基本清潔</p>
                  <p>地板清潔與消毒、家具表面清潔、玻璃窗清潔、開放式空間除塵</p>
                  <p>2. 廚房簡易清潔</p>
                  <p>擦拭廚具表面、清潔爐灶與抽油煙機、消毒廚房台面、清理廚房地板</p>
                  <p>3. 浴室簡易清潔</p>
                  <p>清潔馬桶&浴缸&淋浴區、擦拭梳妝區表面、更換毛巾與浴巾、消毒浴室地板</p>
                  <p>4. 臥室及客房清潔</p>
                  <p>更換床單與枕套、擦拭家具表面、地板吸塵、整理書桌與衣櫥</p>    
               </div>

             </article>

             <div class="right">
               <img src="@/img/planA/planA_1.jpg" alt="">
               <!-- <a href="" class="btn next">我要預約</a> -->
               <router-link class="btn next" :to="{ name: 'reserve' }">我要預約</router-link>  
             </div>


          </section>

          <section class="notice">
            <div class="title">
              <h1>預約須知</h1>
            </div>

            <div class="tab">
              <ul class="tab_planA">
                <li :class="{ tab_on: activeContent === 'content1' }"><a href="#" @click.prevent="showContent('content1')">預約相關</a></li>
                <li :class="{ tab_on: activeContent === 'content2' }"><a href="#" @click.prevent="showContent('content2')">訂單相關</a></li>
                <li :class="{ tab_on: activeContent === 'content3' }"><a href="#" @click.prevent="showContent('content3')">服務相關</a></li>
              </ul>
            </div>
            <div class="text"  v-if="activeContent === 'content1'">
              <ul>
                <li>如有選購「特殊處理」之加購服務品項，浣安服務人員將在訂單成立後24小時內與您聯繫，敬請留意！「特殊處理」品項採人工估價，現場收費。</li>
                <li>系統僅提供可服務日期、時段供您訂購時選擇，實際服務時間可能因人力調配異動，我們將於訂購完成後另由浣安服務人員與您聯絡確認。</li>
                <li>若浣安服務人員無法與您取得聯絡，將會在次個工作日再次聯絡，請您於訂單付款成功後留意來電。如您持續無法與服務人員完成約時，請您聯絡通知客服。</li>
              </ul>
            </div>
            <div class="text"  v-else-if="activeContent === 'content2'">
              <ul>
                <li>僅接受信用卡支付。在您預約我們的服務時，您需要提供有效的信用卡信息以完成付款。我們接受主要的信用卡品牌，包括Visa、Mastercard、American Express等。請注意，我們不接受現金、支票或其他支付方式。</li>
                <li>如果您需要取消預約，請在預定時間的最少 24 小時前通知我們。未能提前通知取消的預約將收取全額費用。</li>
                <li>我們承諾保留客戶的反饋，這將有助於我們持續改進我們的服務質量。您的評論將被尊重並用於提高我們的服務水平。</li>
              </ul>
            </div>
            <div class="text"  v-else-if="activeContent === 'content3'">
              <ul>
                <li>我們致力於提供高質量的清潔服務。如果您對我們的服務不滿意，請立即與我們聯絡。浣安團隊將竭盡所能解決您的問題，以確保您對我們的服務滿意。</li>
                <li>我們為您提供了一個常見問題解答區域，這裡包含了關於浣安清潔服務的常見問題和相應答案。您可以在官方網站上找到這些資訊，亦可透過信箱、電話、官網向我們聯繫。</li>
                
              </ul>
            </div>

    
            <div class="title">
              <h1>服務評價</h1>
            </div>

          </section>


          <section class="rank">

            <ul>
              <li>
                <img src="../img/planA/planA_2.jpg" alt="">
                <article>
                  <div class="rank_top">
                    <span>SilverLion42</span>
                    <div class="right">
                      <span>服務態度</span>
                      <span>
                        <font-awesome-icon :icon="['fas', 'star']" class="star_color"/>
                        <font-awesome-icon :icon="['fas', 'star']" class="star_color"/>
                        <font-awesome-icon :icon="['fas', 'star']" class="star_color"/>
                        <font-awesome-icon :icon="['fas', 'star']" class="star_color"/>
                        <font-awesome-icon :icon="['fas', 'star']" class="star_color"/>
                      </span>
                      <span>服務品質</span>
                      <span>
                        <font-awesome-icon :icon="['fas', 'star']" class="star_color"/>
                        <font-awesome-icon :icon="['fas', 'star']" class="star_color"/>
                        <font-awesome-icon :icon="['fas', 'star']" class="star_color"/>
                        <font-awesome-icon :icon="['fas', 'star']" class="star_color"/>
                        <font-awesome-icon :icon="['fas', 'star']" class="star_color"/>
                      </span> 
                    </div>
                  </div>
                  <div class="buttom"><p>上次朋友推薦浣安居家清潔，剛開始覺得價格有些貴，但過程中覺得很不錯，方案選擇彈性，可以按照自家狀況選擇，清潔人員也很年輕有禮貌，清潔工具清潔劑也都自己帶，結束前還會請你檢查，突然覺得自己很像貴婦……哈哈哈~</p></div>
                </article>
              </li>
              <li>
                <img src="../img/planA/planA_3.jpg" alt="">
                <article>
                  <div class="rank_top">
                    <span>StarDustin20</span>
                    <div class="right">
                      <span>服務態度</span>
                      <span> 
                        <font-awesome-icon :icon="['fas', 'star']" class="star_color"/>
                        <font-awesome-icon :icon="['fas', 'star']" class="star_color"/>
                        <font-awesome-icon :icon="['fas', 'star']" class="star_color"/>
                        <font-awesome-icon :icon="['fas', 'star']" class="star_color"/>
                        <font-awesome-icon :icon="['fas', 'star']" class="star_color"/>
                      </span>
                      <span>服務品質</span>
                      <span>
                        <font-awesome-icon :icon="['fas', 'star']" class="star_color"/>
                        <font-awesome-icon :icon="['fas', 'star']" class="star_color"/>
                        <font-awesome-icon :icon="['fas', 'star']" class="star_color"/>
                        <font-awesome-icon :icon="['fas', 'star']" class="star_color"/>
                        <font-awesome-icon :icon="['fas', 'star']" class="star_color"/>
                      </span> 
                    </div>
                  </div>
                  <div class="buttom"><p>超乾淨專業～居家清潔首選！</p></div>
                </article>
              </li>
              <li>
                <img src="../img/planA/planA_4.jpg" alt="">
                <article>
                  <div class="rank_top">
                    <span>Ji2wendy0rLu</span>
                    <div class="right">
                      <span>服務態度</span>
                      <span>
                        <font-awesome-icon :icon="['fas', 'star']" class="star_color"/>
                        <font-awesome-icon :icon="['fas', 'star']" class="star_color"/>
                        <font-awesome-icon :icon="['fas', 'star']" class="star_color"/>
                        <font-awesome-icon :icon="['fas', 'star']" class="star_color"/>
                        <font-awesome-icon :icon="['fas', 'star']" class="star_color"/>
                      </span>
                      <span>服務品質</span>
                      <span>
                        <font-awesome-icon :icon="['fas', 'star']" class="star_color"/>
                        <font-awesome-icon :icon="['fas', 'star']" class="star_color"/>
                        <font-awesome-icon :icon="['fas', 'star']" class="star_color"/>
                        <font-awesome-icon :icon="['fas', 'star']" class="star_color"/>
                        <font-awesome-icon :icon="['fas', 'star']" class="star_color"/>               
                      </span> 
                    </div>
                  </div>
                  <div class="buttom"><P>我要特別稱讚這家公司的清潔人員。他們非常專業和友好，總是微笑著迎接我們。他們非常細心，總是確保一切都完美無瑕。這間公司的清潔服務給我留下了深刻的印象。他們的專業態度和出色的工作質量讓我感到非常滿意。我強烈推薦這家公司的清潔服務，給予他們五星評價！</p></div>
                </article>
              </li>
       
            </ul>

          </section>

          <section><a href="" class="btn next">看更多</a></section>

        </wrapper>

        <DefaultFooter />
    </div>
</template>

<style lang="scss">

</style>