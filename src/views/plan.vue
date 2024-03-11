<script setup>
    import { onMounted } from "vue";
    import DefaultHeader from '@/layouts/header.vue'; // 引入header(請照抄)
    import DefaultFooter from '@/layouts/footer.vue'; // 引入footer(請照抄)
    import BannerUrl  from '@/img/plan/plan_banner.jpg'; // 更改成banner路徑
    import wrapper from '@/layouts/wrapper.vue'; // 引入wrapper滑動(請照抄)

    const banner_url = BannerUrl; // banner路徑令變數(請照抄)
    const planCommentNow = ref([]);

    import { ref } from "vue";

    const activeContent = ref('content1');


    const showContent = (e) => {
        activeContent.value = e;
    }
    const plan_now =  ref(localStorage.getItem("plan_want_to_see"));
    

onMounted(()=>{
    // const url = 'php/plan_select.php';
    const url = 'http://localhost/thd104/g1/public/php/plan_select.php';
   
    fetch(url, {
        method: 'POST'
        // headers: {
        //     'Content-Type': 'application/json'
        // },
        // body: JSON.stringify({id:sessionStorage.getItem('member_ID')})
        
    })
        .then(response => response.json())
        .then(response => {
            // console.log('註冊成功 js');
           
          // console.log(response);
          if(plan_now.value =='浣安全室清潔'){
            planCommentNow.value = response.A;
          }else if(plan_now.value =='廚房徹底清潔'){
            planCommentNow.value = response.B;
          }else{
            planCommentNow.value = response.C;
          }
          console.log(planCommentNow.value);
            })
            .catch(error => {
                console.error('Error:', error);
            });
})

</script>

<template>    
    <div>
        <DefaultHeader header-title-zh="浣安全室清潔" header-title-eng="Cleaning Project" :bgi="banner_url" /> 
        
        <wrapper class="plan">
          <section class="plans" v-if="plan_now=='浣安全室清潔'">
              <article>
                <img src="@/img/plan/plan_1-1.jpg" alt="">
               <div class="title">
                 <h1>浣安全室清潔</h1>
               </div>
               <h3>包括客廳、臥室、餐廳等全室清潔，讓您的家居環境清新宜人。</h3>
               <p>所需時長：4小時</p>
               <p>適合坪數：室內25坪內</p>
               <p>方案費用：NTD 4000起</p>

               <div class="rule">
                  <p>1. 基本清潔</p>
                  <p class="indent">地板清潔與消毒、家具表面清潔、玻璃窗清潔、開放式空間除塵</p>
                  <p>2. 廚房簡易清潔</p>
                  <p class="indent">擦拭廚具表面、清潔爐灶與抽油煙機、消毒廚房台面、清理廚房地板</p>
                  <p>3. 浴室簡易清潔</p>
                  <p class="indent">清潔馬桶&浴缸&淋浴區、擦拭梳妝區表面、更換毛巾與浴巾、消毒浴室地板</p>
                  <p>4. 臥室及客房清潔</p>
                  <p class="indent">更換床單與枕套、擦拭家具表面、地板吸塵、整理書桌與衣櫥</p>    
               </div>

             </article>

             <div class="right">
               <img src="@/img/plan/plan_1-1.jpg" alt="">
               <router-link class="btn next" :to="{ name: 'reserve' }">我要預約</router-link>  
             </div>
            </section>
            <section class="plans" v-if="plan_now=='廚房徹底清潔'">
              <article>
                <img src="@/img/plan/plan_1-2.jpg" alt="">
               <div class="title">
                 <h1>廚房徹底清潔</h1>
               </div>
               <h3>我們提供廚房各項區域的專業徹底清潔，讓您的廚房焕然一新，充滿清新與活力，讓烹飪成為一種愉悅的享受。</h3>
               <p>所需時長：3小時</p>
               <p>適合坪數：廚房面積小於20坪</p>
               <p>方案費用：NTD 3000起</p>

               <ol class="rule">
                <p>1. 廚房專業清潔</p>
                <p class="indent">我們提供專業的廚房清潔服務，徹底擦拭廚具表面、清潔爐灶與抽油煙機、消毒廚房台面，並清理廚房地板，讓您的廚房焕然一新，散發出清新愉悅的氛圍。</p>
                <p>2. 加強油汙處理</p>
                <p class="indent">專注處理廚房中的油汙，我們使用專業的清潔技術，確保廚房環境清潔衛生，讓您享受無憂烹飪的樂趣。</p>
                <p>3. 廚具汰洗</p>
                <p class="indent">我們會徹底清潔廚房中的各種廚具，保證其使用安全衛生，讓您放心使用廚房用具，享受健康美食的烹製過程。</p>
                <p>4. 水槽疏通</p>
                <p class="indent">我們專業的團隊會清理廚房水槽，確保排水暢通，讓廚房整潔無比，讓您在廚房裡輕鬆準備美食。</p>
               </ol>

             </article>

             <div class="right">
               <img src="@/img/plan/plan_1-2.jpg" alt="">
               <router-link class="btn next" :to="{ name: 'reserve' }">我要預約</router-link>  
             </div>
            </section>
            <section class="plans" v-if="plan_now=='浴室特攻清潔'">
              <article>
                <img src="@/img/plan/plan_1-3.jpg" alt="">
               <div class="title">
                 <h1>浴室特攻清潔</h1>
               </div>
               <h3>專業的浴室清潔服務，專注解決您浴室中的各種難題，讓您感受到清潔的舒適與滿足。</h3>
               <p>所需時長：2小時</p>
               <p>適合坪數：浴室面積小於10坪</p>
               <p>方案費用：NTD 2000起</p>

               <div class="rule">
                <p>1. 浴室專業清潔</p>
                <p class="indent">包括徹底清潔浴室的各個角落，從馬桶、浴缸到淋浴區，確保您的浴室環境潔淨衛生。</p>
                <p>2. 加強水垢處理</p>
                <p class="indent">專注清理浴室中的水垢，讓浴室設施保持潔淨明亮，恢復原本的光澤。</p>
                <p>3. 專業除黴</p>
                <p class="indent">用專業除黴劑，徹底清除浴室中的黴菌，保持浴室乾爽舒適，營造健康的生活環境。</p>
                <p>4. 馬桶清潔</p>
                <p class="indent">仔細清潔浴室馬桶，確保其衛生乾淨，讓您的浴室環境更加安全和健康。</p> 
               </div>

             </article>

             <div class="right">
               <img src="@/img/plan/plan_1-3.jpg" alt="">
               <router-link class="btn next" :to="{ name: 'reserve' }">我要預約</router-link>  
             </div>
            </section>

          <section class="notice">
            <div class="title">
              <h1>預約須知</h1>
            </div>

            <div class="tab">
              <ul class="tab_plans">
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
                <li>僅接受信用卡支付。在您預約我們的服務時，您需要提供有效的信用卡訊息以完成付款。我們接受主要的信用卡品牌，包括Visa、Mastercard、American Express等。請注意，我們不接受現金、支票或其他支付方式。</li>
                <li>若訂單成立後即無法更改內容、亦無法換購或補差額等方式，如需要變更訂購內容，建議您取消原訂單後，再重新選購。</li>
                <li>取消訂單最晚須於服務日期七天前提出。若服務時間為3/24，則最晚取消時間為3/17的23:59。</li>
                <li>我們承諾保留客戶的反饋，這將有助於我們持續改進我們的服務品質。您的評論將被尊重並用於提高我們的服務水準。</li>
              </ul>
            </div>
            <div class="text"  v-else-if="activeContent === 'content3'">
              <ul>
                <li>浣安清潔同仁會自行攜帶清潔用具及不插電用具提供服務，且全程使用環保清潔劑，皆無需額外支付費用，亦無需自行事前準備。</li>
                <li>浣安無義務代為保管鑰匙，同時到府清潔屬於安全、財產較敏感之服務型態，因此建議您清潔開始與結束時，至少在場開、關門，或請交由第三方（例：大樓警衛）開、關門。也建議您於服務開始與結束前10分鐘在場，才能與當天的清潔同仁溝通、檢查當天清潔後狀況。</li>
                <li>服務完成時，服務人員會請您驗收確認服務品質無誤後再退場，若因服務過程造成損毀物件，我們將依狀況進行相關責任歸屬判定，理賠金額最高為新台幣2萬元。
部分家電產品因無法於洗後立即發現問題，因此保固期為一個月，且責任歸屬須由原廠判定。</li>
                <li>我們致力於提供高品質的清潔服務。如果您對我們的服務不滿意，請立即與我們聯絡。浣安團隊將竭盡所能解決您的問題，以確保您對我們的服務滿意。</li>
                <li>浣安官網首頁有常見問題解答區域，您可以參閱這些資訊，亦可透過「聯絡我們」向我們聯繫。</li>
                
              </ul>
            </div>

    
            <div class="title">
              <h1>服務評價</h1>
            </div>

          </section>

          <section class="nonComment" v-if="!planCommentNow.length">
            <h1>目前暫無評價！</h1>
          </section>
          <section class="rank" v-if="planCommentNow">

            <ul>
              <li v-for="comment in planCommentNow" :key="comment">
                <img :src="comment.MEMBER_PIC" alt="">
                <article>
                  <div class="rank_top">
                    <span>{{comment.USERNAME}}</span>
                    <div class="right">
                      <span>服務態度</span>
                      <span>
                        <font-awesome-icon v-for="i in comment.SERVICE_ATTITUDE" :key="i" :icon="['fas', 'star']" class="star_color"/>
                        <font-awesome-icon v-for="j in 5-(comment.SERVICE_ATTITUDE)" :key="j" :icon="['fas', 'star']" class="star_wo_color"/>
                      </span>
                      <span>服務品質</span>
                      <span>
                        <font-awesome-icon v-for="j in comment.SERVICE_QUALITY" :key="j" :icon="['fas', 'star']" class="star_color"/>
                        <font-awesome-icon v-for="j in 5-(comment.SERVICE_QUALITY)" :key="j" :icon="['fas', 'star']"  class="star_wo_color"/>
                      </span> 
                    </div>
                  </div>
                  <div class="buttom">
                    <!-- <p>上次朋友推薦浣安居家清潔，剛開始覺得價格有些貴，但過程中覺得很不錯，方案選擇彈性，可以按照自家狀況選擇，清潔人員也很年輕有禮貌，清潔工具清潔劑也都自己帶，結束前還會請你檢查，突然覺得自己很像貴婦……哈哈哈~</p> -->
                    <p>{{ comment.CONTENT }}</p>
                  </div>
                </article>
              </li>
              <!-- <li>
                <img src="@/img/plan/plan_3.jpg" alt="">
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
                <img src="@/img/plan/plan_4.jpg" alt="">
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
              </li> -->
       
            </ul>

          </section>

          <section v-if="planCommentNow.length"><a href="" class="btn next">看更多</a></section>

        </wrapper>

        <DefaultFooter />
    </div>
</template>

<style lang="scss">

</style>