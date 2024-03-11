<script setup>

    import { ref, computed, onMounted } from "vue";

    import DefaultHeader from '@/layouts/header.vue'; // 引入header(請照抄)
    import DefaultFooter from '@/layouts/footer.vue'; // 引入footer(請照抄)
    import BannerUrl  from '@/img/articles/articles_banner.jpg'; // 更改成banner路徑
    import wrapper from '@/layouts/wrapper.vue'; // 引入wrapper滑動(請照抄)


    const banner_url = BannerUrl; // banner路徑令變數(請照抄)
    
  
    const activeContent = ref('content1');
    const isVisible1 = ref(true);
    const isVisible2 = ref(false);
    const isVisible3 = ref(false);

    const showContent = (e) => {
        activeContent.value = e;
        if(activeContent.value === 'content1'){
            isVisible1.value = true;
            isVisible2.value = false;
            isVisible3.value = false;
            
        }else if(activeContent.value === 'content2'){
            isVisible2.value = true;
            isVisible1.value = false;
            isVisible3.value = false;

        }else if(activeContent.value === 'content3'){
            isVisible3.value = true;
            isVisible1.value = false;
            isVisible2.value = false;

        }
    }
    

    const wanannItems = ref([]);
    const wanannNewItems = ref([]);
    const proItems = ref([]);
    const proNewItems = ref([]);
    const cleanItems = ref([]);
    const cleanNewItems = ref([]);


    onMounted(() => {

    const url_articlesWanann = 'http://localhost/thd104/g1/public/php/articlesWanann_select.php';

    
    fetch(url_articlesWanann)
        .then(response => response.json())
        .then(response => {
            // console.log('註冊成功 js');
        wanannItems.value = response;
        })
        .catch(error => {
            console.error('Error:', error);
        });


    const url_articlesWanannNew = 'http://localhost/thd104/g1/public/php/articlesWanannNew_select.php';

    
    fetch(url_articlesWanannNew)
        .then(response => response.json())
        .then(response => {
            // console.log('註冊成功 js');
        wanannNewItems.value = response;
        })
        .catch(error => {
            console.error('Error:', error);
        });


        const url_articlesPro = 'http://localhost/thd104/g1/public/php/articlesPro_select.php';

    
    fetch(url_articlesPro)
        .then(response => response.json())
        .then(response => {
            // console.log('註冊成功 js');
        proItems.value = response;
        })
        .catch(error => {
            console.error('Error:', error);
        });


    const url_articlesProNew = 'http://localhost/thd104/g1/public/php/articlesProNew_select.php';


    fetch(url_articlesProNew)
        .then(response => response.json())
        .then(response => {
            // console.log('註冊成功 js');
        proNewItems.value = response;
        })
        .catch(error => {
            console.error('Error:', error);
        });


    const url_articlesClean = 'http://localhost/thd104/g1/public/php/articlesClean_select.php';

    
    fetch(url_articlesClean)
        .then(response => response.json())
        .then(response => {
            // console.log('註冊成功 js');
        cleanItems.value = response;
        })
        .catch(error => {
            console.error('Error:', error);
        });


    const url_articlesCleanNew = 'http://localhost/thd104/g1/public/php/articlesCleanNew_select.php';

    
    fetch(url_articlesCleanNew)
        .then(response => response.json())
        .then(response => {
            // console.log('註冊成功 js');
        cleanNewItems.value = response;
        })
        .catch(error => {
            console.error('Error:', error);
        });



    
});

    // --------------------w分頁器----------------------->
    
    const wcurrentPage = ref(1);
    const wpageSize = ref(3);

    const wstartIndex = computed(() => (wcurrentPage.value - 1) * wpageSize.value);
    const wendIndex = computed(() => wstartIndex.value + wpageSize.value);
    const paginatedWanannItems = computed(() => wanannItems.value.slice(wstartIndex.value, wendIndex.value));

    const wtotalPages = computed(() => Math.ceil(wanannItems.value.length / wpageSize.value));
    const wsetPage = (wpage) => {
        if (wpage >= 1 && wpage <= wtotalPages.value) {
            wcurrentPage.value = wpage;
        }
    };

        // --------------------p分頁器----------------------->
    
    const pcurrentPage = ref(1);
    const ppageSize = ref(3);

    const pstartIndex = computed(() => (pcurrentPage.value - 1) * ppageSize.value);
    const pendIndex = computed(() => pstartIndex.value + ppageSize.value);
    const paginatedProItems = computed(() => proItems.value.slice(pstartIndex.value, pendIndex.value));

    const ptotalPages = computed(() => Math.ceil(proItems.value.length / ppageSize.value));
    const psetPage = (ppage) => {
        if (ppage >= 1 && ppage <= ptotalPages.value) {
            pcurrentPage.value = ppage;
        }
    };

        // --------------------c分頁器----------------------->
    
    const ccurrentPage = ref(1);
    const cpageSize = ref(3);

    const cstartIndex = computed(() => (ccurrentPage.value - 1) * cpageSize.value);
    const cendIndex = computed(() => cstartIndex.value + cpageSize.value);
    const paginatedCleanItems = computed(() => cleanItems.value.slice(cstartIndex.value, cendIndex.value));

    const ctotalPages = computed(() => Math.ceil(cleanItems.value.length / cpageSize.value));
    const csetPage = (cpage) => {
        if (cpage >= 1 && cpage <= ctotalPages.value) {
            ccurrentPage.value = cpage;
        }
    };

    
</script>


<template>

    <div>
        <DefaultHeader header-title-zh="專欄文章" header-title-eng="Articles" :bgi="banner_url" /> 
        <wrapper class="articles"> 
        <div id="wannan_top"  v-show="isVisible1">
        <section class="articles_top" v-for="item in wanannNewItems" :key="item.ID">
           
            <article class="left">
                <div class="title title_phone">
                    <h1>最新文章</h1>
                </div>

                <h2>{{ item.TITLE }}</h2>
                <h3>{{ item.CREATE_TIME }}</h3>
                <h4>{{ item.CONTENT }}</h4>
                <a href="">Read More</a>

            </article>

            <img :src="item.PIC" alt="">
            
        </section>
        </div>

        <div id="know_top" v-show="isVisible2">
        <section class="articles_top" v-for="item in cleanNewItems"  :key="item.ID">

            <article class="left">
                <div class="title title_phone">
                    <h1>最新文章</h1>
                </div>

                <h2>{{ item.TITLE }}</h2>
                <h3>{{ item.CREATE_TIME }}</h3>
                <h4>{{ item.CONTENT }}</h4>
                <a href="">Read More</a>

            </article>

            <img :src="item.PIC" alt="">

        </section>
        </div>
        <div id="interview_top" v-show="isVisible3">
        <section class="articles_top" v-for="item in proNewItems"  :key="item.ID">

            <article class="left">
                <div class="title">
                    <h1>最新文章</h1>
                </div>

                <h2>董事長LEO想說的話: 浣安馬卡巴卡</h2>
                <h3>2023.12.31</h3>
                <h4>浣安的同仁，每一位都是這家公司的生命力。你們的辛勤工作和專業精神讓我們的服務品質達到了新的高度。每一個角落的清潔，每一次微笑的面對客戶，都展現了你們的敬業態度和對工作的熱愛。
                    我理解清潔工作並不簡單，有時候可能會遇到各種挑戰。但是，正是因為有你們這樣敬業的員工，我們的公司才能夠不斷成長和進步。你們的辛苦工作不僅讓公司繼續蓬勃發展，也為客戶提供了乾淨、整潔的生活環境。我想告訴你們，你們的工作不僅僅是清潔，更是為社會營造舒適宜人的空間，為客戶帶來愉悅的居住體驗。你們每一個人的努力都在造福著更多的人，成為社會中不可或缺的一部分。
                    在這個特殊的時刻，我想向你們謝謝，謝謝你們每天為公司奉獻的心血。也希望你們能夠時刻保持那份熱情和對工作的熱愛，因為你們的努力不僅改變了公司的命運，也塑造了一個更美好的未來。
                    謝謝你們的付出，讓我們攜手共創更美好的明天！
                    
                    
                </h4>
                <a href="">Read More</a>

            </article>

            <img src="../img/articles/articles_9.jpg" alt="">

        </section>
        </div>

        <section class="articles_buttom" >

            <aside>
                <h2>文章一覽</h2>
                <ul>
                    <!-- class="color" -->
                    <li @click.prevent="showContent('content1')" :class="{ color: activeContent === 'content1' }">                     
                        <a href="#" id="btn_wanann">浣安小品</a>  
                        <span v-show="isVisible1"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-feather" viewBox="0 0 16 16">
                        <path d="M15.807.531c-.174-.177-.41-.289-.64-.363a3.8 3.8 0 0 0-.833-.15c-.62-.049-1.394 0-2.252.175C10.365.545 8.264 1.415 6.315 3.1S3.147 6.824 2.557 8.523c-.294.847-.44 1.634-.429 2.268.005.316.05.62.154.88q.025.061.056.122A68 68 0 0 0 .08 15.198a.53.53 0 0 0 .157.72.504.504 0 0 0 .705-.16 68 68 0 0 1 2.158-3.26c.285.141.616.195.958.182.513-.02 1.098-.188 1.723-.49 1.25-.605 2.744-1.787 4.303-3.642l1.518-1.55a.53.53 0 0 0 0-.739l-.729-.744 1.311.209a.5.5 0 0 0 .443-.15l.663-.684c.663-.68 1.292-1.325 1.763-1.892.314-.378.585-.752.754-1.107.163-.345.278-.773.112-1.188a.5.5 0 0 0-.112-.172M3.733 11.62C5.385 9.374 7.24 7.215 9.309 5.394l1.21 1.234-1.171 1.196-.027.03c-1.5 1.789-2.891 2.867-3.977 3.393-.544.263-.99.378-1.324.39a1.3 1.3 0 0 1-.287-.018Zm6.769-7.22c1.31-1.028 2.7-1.914 4.172-2.6a7 7 0 0 1-.4.523c-.442.533-1.028 1.134-1.681 1.804l-.51.524zm3.346-3.357C9.594 3.147 6.045 6.8 3.149 10.678c.007-.464.121-1.086.37-1.806.533-1.535 1.65-3.415 3.455-4.976 1.807-1.561 3.746-2.36 5.31-2.68a8 8 0 0 1 1.564-.173"/>
                        </svg>
                        </span>               
                    </li>
                    <li @click.prevent="showContent('content2')" :class="{ color: activeContent === 'content2' }">                
                        <a href="#" id="btn_know"  >清潔小知識</a>
                        <span v-show="isVisible2"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-feather" viewBox="0 0 16 16">
                        <path d="M15.807.531c-.174-.177-.41-.289-.64-.363a3.8 3.8 0 0 0-.833-.15c-.62-.049-1.394 0-2.252.175C10.365.545 8.264 1.415 6.315 3.1S3.147 6.824 2.557 8.523c-.294.847-.44 1.634-.429 2.268.005.316.05.62.154.88q.025.061.056.122A68 68 0 0 0 .08 15.198a.53.53 0 0 0 .157.72.504.504 0 0 0 .705-.16 68 68 0 0 1 2.158-3.26c.285.141.616.195.958.182.513-.02 1.098-.188 1.723-.49 1.25-.605 2.744-1.787 4.303-3.642l1.518-1.55a.53.53 0 0 0 0-.739l-.729-.744 1.311.209a.5.5 0 0 0 .443-.15l.663-.684c.663-.68 1.292-1.325 1.763-1.892.314-.378.585-.752.754-1.107.163-.345.278-.773.112-1.188a.5.5 0 0 0-.112-.172M3.733 11.62C5.385 9.374 7.24 7.215 9.309 5.394l1.21 1.234-1.171 1.196-.027.03c-1.5 1.789-2.891 2.867-3.977 3.393-.544.263-.99.378-1.324.39a1.3 1.3 0 0 1-.287-.018Zm6.769-7.22c1.31-1.028 2.7-1.914 4.172-2.6a7 7 0 0 1-.4.523c-.442.533-1.028 1.134-1.681 1.804l-.51.524zm3.346-3.357C9.594 3.147 6.045 6.8 3.149 10.678c.007-.464.121-1.086.37-1.806.533-1.535 1.65-3.415 3.455-4.976 1.807-1.561 3.746-2.36 5.31-2.68a8 8 0 0 1 1.564-.173"/>
                        </svg></span>             
                    </li>
                    <li @click.prevent="showContent('content3')" :class="{ color: activeContent === 'content3' }">
                        <a href="#" id="btn_interview" >職人專訪</a>
                        <span v-show="isVisible3"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-feather" viewBox="0 0 16 16">
                        <path d="M15.807.531c-.174-.177-.41-.289-.64-.363a3.8 3.8 0 0 0-.833-.15c-.62-.049-1.394 0-2.252.175C10.365.545 8.264 1.415 6.315 3.1S3.147 6.824 2.557 8.523c-.294.847-.44 1.634-.429 2.268.005.316.05.62.154.88q.025.061.056.122A68 68 0 0 0 .08 15.198a.53.53 0 0 0 .157.72.504.504 0 0 0 .705-.16 68 68 0 0 1 2.158-3.26c.285.141.616.195.958.182.513-.02 1.098-.188 1.723-.49 1.25-.605 2.744-1.787 4.303-3.642l1.518-1.55a.53.53 0 0 0 0-.739l-.729-.744 1.311.209a.5.5 0 0 0 .443-.15l.663-.684c.663-.68 1.292-1.325 1.763-1.892.314-.378.585-.752.754-1.107.163-.345.278-.773.112-1.188a.5.5 0 0 0-.112-.172M3.733 11.62C5.385 9.374 7.24 7.215 9.309 5.394l1.21 1.234-1.171 1.196-.027.03c-1.5 1.789-2.891 2.867-3.977 3.393-.544.263-.99.378-1.324.39a1.3 1.3 0 0 1-.287-.018Zm6.769-7.22c1.31-1.028 2.7-1.914 4.172-2.6a7 7 0 0 1-.4.523c-.442.533-1.028 1.134-1.681 1.804l-.51.524zm3.346-3.357C9.594 3.147 6.045 6.8 3.149 10.678c.007-.464.121-1.086.37-1.806.533-1.535 1.65-3.415 3.455-4.976 1.807-1.561 3.746-2.36 5.31-2.68a8 8 0 0 1 1.564-.173"/>
                        </svg></span>             
                    </li>
                    <!-- <li  @click.prevent="showContent('content3')" :class="{ color: activeContent === 'content4' }">
                        <a href="">品牌聯名</a>
                    </li> -->
                </ul>
            </aside>

            <div class="articles_all" id="articles_wanann" v-if="activeContent === 'content1'">
              
                <section class="section_all"  v-for="item in paginatedWanannItems" :key="item.ID">
                    <img :src="item.PIC" alt="">

                    <article>
                        <h2>{{ item.TITLE }}</h2>
                        <h3>{{ item.CREATE_TIME }}</h3>
                        <p>{{ item.CONTENT }}</p>
                        <a href="">Read More</a>
                    </article>
                </section>
            
            </div>
            
                <!-- <section class="section_all even">
                    <img src="../img/articles/articles_3.jpg" alt="">

                    <article>
                        <h2>時光家政，讓每一刻都成為美好回憶</h2>
                        <h3>2023.12.31</h3>
                        <p>工作繁忙、生活忙碌成了許多家庭的真實寫照。在這樣的環境下，家中的清潔工作往往成為一道難以逾越的障礙。然而，這並不意味著我們就必須將家的清潔放置在次要的位置。浣安居家清潔服務的出現，正是為了解決這樣的困擾。
                            浣安擁有專業的清潔團隊，能夠為您提供全面的居家清潔服務。無論是繁忙的工作日，還是周末的休息時光，我們都能根據您的需求提供靈活的服務時間，讓您在工作與家庭之間找到平衡。
                            我們的清潔人員不僅專業而細心，更能夠迅速高效地完成清潔工作。無論是家中的客廳、臥室、廚房，還是浴室、地板等區域，都能得到仔細周到的清潔，讓您回到家中能夠感受到一股清新和舒適。
                            浣安的服務不僅僅是清潔，更是一種居家生活的品質提升。我們將家居環境打造成悠然舒適的模樣，讓您在疲憊的工作後能夠回到一個舒心的家，享受屬於自己的片刻寧靜。
                            讓我們一同探索，如何透過浣安，讓家不再只是一個居所，而是溫馨幸福的擁有。不再為繁忙的生活而困擾，而是輕鬆地享受一個清潔整潔、舒適愉悅的家居環境。透過浣安居家清潔服務，為您的生活增添一份品質，讓每一天都成為滿滿的幸福時光。
                        </p>
                        <a href="">Read More</a>
                    </article>
                
                </section>

                <section class="section_all">
                    <img src="../img/articles/articles_4.jpg" alt="">

                    <article>
                        <h2>拒絕讓家務事成為時間小偷</h2>
                        <h3>2023.12.31</h3>
                        <p>在現代快節奏的生活中，人們總是不斷地追趕著時間，努力兼顧工作、學習、社交等多方面的需求。時間的管理成了一門藝術，然而，有時我們卻可能忽略了一個潛在的時間小偷，那就是家務事。這些看似琐碎卻不可或缺的家務事情，如果不得當地處理，很容易占用我們寶貴的時間，影響到工作效率和生活品質。家務事如清潔、整理、烹飪等雖然是日常生活中必須的工作，卻也可能成為時間的不輸入。當每天都在忙碌的工作和學習中，回到家中還需花費大量時間處理這些事務，不禁讓人感到疲憊和壓力。因此，我們需要找到方法，拒絕讓家務事成為時間的小偷，使我們能夠更有效地利用時間，過上更有品質的生活。
                        </p>
                        <a href="">Read More</a>
                    </article>

                </section> -->
        
           

            <div class="articles_all " id="articles_know" v-else-if="activeContent === 'content2'">
               
                <section class="section_all"  v-for="item in paginatedCleanItems" :key="item.ID">
                    <img :src="item.PIC" alt="">

                    <article>
                        <h2>{{ item.TITLE }}</h2>
                        <h3>{{ item.CREATE_TIME }}</h3>
                        <p>{{ item.CONTENT }}</p>
                        <a href="">Read More</a>
                    </article>
                </section>

                <!-- <section class="section_all even">
                    <img src="../img/articles/articles_7.jpg" alt="">

                    <article>
                        <h2>不可忽視的清潔死角：家中容易被忽略的區域</h2>
                        <h3>2023.12.31</h3>
                        <p>在日常的居家清潔中，我們往往注重地板、桌面等明顯的區域，但有時卻容易忽略一些不起眼的死角，這些地方可能是細菌和灰塵的藏匿之所。為了維護家居的整潔，讓我們來關注一下這些常被忽略的區域，並發現它們的清潔死角。
                            首先，讓我們來看看家中的電器表面。電視、冰箱、微波爐等表面經常被手觸摸，容易積聚手上的細菌和灰塵。使用濕抹布搭配溫和的清潔劑，可以輕鬆清潔這些表面，保持家電的外觀清新。
                            其次，窗簾底部是另一個容易被忽略的地方。由於長時間的風吹和陽光曝曬，窗簾底部容易積聚灰塵。定期將窗簾取下清洗，或者使用吸塵器清理窗簾底部，可以確保室內空氣的清新。
                            不容忽視的第三個區域是家中的插座和開關。由於它們經常被觸摸，容易成為細菌的潛在藏身之地。使用消毒濕巾或棉花棒輕輕擦拭插座和開關的表面，是一種簡單而有效的清潔方法。
                            廚房水槽的排水口是清潔死角的第四個代表。食物殘渣容易積聚在排水口周圍，引起異味和細菌繁殖。使用小刷子或者專用的排水口清潔劑，能夠輕鬆解決這個問題，確保水槽的清潔衛生。
                            最後，讓我們來關注衣櫥的底部。這個區域經常被忽略，但卻是灰塵和蟎蟲的理想藏身之地。定期清理衣櫥底部，使用除濕劑保持衣物乾燥，可以有效防止細菌和黴菌的滋生。
                        </p>
                        <a href="">Read More</a>
                    </article>
                </section>

                <section class="section_all">
                    <img src="../img/articles/articles_8.jpg" alt="">

                    <article>
                        <h2>清潔小妙招：怎麼有效去除家居異味？</h2>
                        <h3>2023.12.31</h3>
                        <p>在日常生活中，家居異味可能是一個令人頭疼的問題，它可能來自於烹飪、寵物、或者潮濕的環境。然而，除了噴灑空氣清新劑這樣的臨時解決方案，還有一些更為自然且長效的方法，可以有效去除異味，使你的家居環境更加宜人。
                            首先，檸檬片是一個極佳的選擇。將檸檬片放置在可能產生異味的地方，如廚房或冰箱，檸檬的天然香氣可以中和異味，同時帶來一種清新的氛圍。此外，你還可以使用橙子或葡萄柚等柑橘類水果，它們同樣具有良好的除臭效果。
                            另一個簡單而有效的方法是使用咖啡渣。咖啡渣不僅可以中和異味，還能吸收空氣中的濕氣，對於潮濕引起的異味尤其有效。只需將已用的咖啡渣放在一個容器中，然後放置在需要除味的區域，讓它發揮神奇的去味功效。
                            此外，活性碳也是一種被廣泛使用的除臭劑。它能夠吸附並中和空氣中的異味分子，從而有效地清除不愉快的氣味。你可以在家居用品店或網上購買活性碳袋，並放置在衣櫃、鞋櫃、甚至汽車內，讓它持續發揮去味的功效。
                            總之，這些清潔小妙招不僅環保，而且能夠長時間維持你的家居空氣清新。嘗試一下這些方法，讓你的家充滿宜人的香氣，打造一個舒適健康的生活空間。
                                                        
                        </p>
                        <a href="">Read More</a>
                    </article>

                </section> -->
      
            </div >
            
            <div class="articles_all" id="articles_interview" v-else-if="activeContent === 'content3'">
               

                <section class="section_all"  v-for="item in paginatedProItems" :key="item.ID">
                    <img :src="item.PIC" alt="">

                    <article>
                        <h2>{{ item.TITLE }}</h2>
                        <h3>{{ item.CREATE_TIME }}</h3>
                        <p>{{ item.CONTENT }}</p>
                        <a href="">Read More</a>
                    </article>
                </section>
<!-- 
                <section class="section_all even">
                    <img src="../img/articles/articles_11.jpg" alt="">

                    <article>
                        <h2>黃組長的微笑小故事</h2>
                        <h3>2023.12.31</h3>
                        <p>浣安的同仁，每一位都是這家公司的生命力。你們的辛勤工作和專業精神讓我們的服務品質達到了新的高度。每一個角落的清潔，每一次微笑的面對客戶，都展現了你們的敬業態度和對工作的熱愛。
                            我理解清潔工作並不簡單，有時候可能會遇到各種挑戰。但是，正是因為有你們這樣敬業的員工，我們的公司才能夠不斷成長和進步。你們的辛苦工作不僅讓公司繼續蓬勃發展，也為客戶提供了乾淨、整潔的生活環境。我想告訴你們，你們的工作不僅僅是清潔，更是為社會營造舒適宜人的空間，為客戶帶來愉悅的居住體驗。你們每一個人的努力都在造福著更多的人，成為社會中不可或缺的一部分。
                            在這個特殊的時刻，我想向你們謝謝，謝謝你們每天為公司奉獻的心血。也希望你們能夠時刻保持那份熱情和對工作的熱愛，因為你們的努力不僅改變了公司的命運，也塑造了一個更美好的未來。
                            謝謝你們的付出，讓我們攜手共創更美好的明天！
                            
                            
                        </p>
                        <a href="">Read More</a>
                    </article>
                </section>

                <section class="section_all">
                    <img src="../img/articles/articles_12.jpg" alt="">

                    <article>
                        <h2>浣安小隊給應徵者的建議</h2>
                        <h3>2023.12.31</h3>
                        <p>在現代快節奏的生活中，人們總是不斷地追趕著時間，努力兼顧工作、學習、社交等多方面的需求。時間的管理成了一門藝術，然而，有時我們卻可能忽略了一個潛在的時間小偷，那就是家務事。這些看似琐碎卻不可或缺的家務事情，如果不得當地處理，很容易占用我們寶貴的時間，影響到工作效率和生活品質。家務事如清潔、整理、烹飪等雖然是日常生活中必須的工作，卻也可能成為時間的不輸入。當每天都在忙碌的工作和學習中，回到家中還需花費大量時間處理這些事務，不禁讓人感到疲憊和壓力。因此，我們需要找到方法，拒絕讓家務事成為時間的小偷，使我們能夠更有效地利用時間，過上更有品質的生活。
                            首先，建立一個合理的家務時間表是拒絕時間小偷的有效手段。透過分配每個家庭成員的責任，可以確保家務事得以有效地完成，同時減輕單一成員的負擔。這樣的時間表不僅提高了效率，還能確保每個人都有足夠的時間專注於其他重要的事務。
                            其次，家庭成員之間的良好溝通也是拒絕讓家務事成為時間小偷的關鍵。共同參與家庭事務需要協同合作和相互理解。透過開放的溝通，家庭成員可以共同討論家務事的分配和時間安排，以確保每個人的需求和期望都得到充分考慮。
                            此外，利用科技和智能化工具也是提高家務效率的好方法。例如，使用智能家居設備來自動化某些家務工作，或者利用手機應用程式進行家務事項的管理和提醒，都可以節省大量時間和精力。
                            最後，擁抱一種積極的態度也是拒絕讓家務事成為時間小偷的不二法門。將家務事視為家庭合作的一部分，而不是單一成員的負擔。這種積極的態度不僅有助於提升家庭的和諧氛圍，還能使我們更加滿足於日常生活。
                            總之，拒絕讓家務事成為時間小偷需要建立明確的時間表、加強家庭成員之間的溝通，擁抱科技和智能工具，以及擁抱積極的態度。透過這些方法，我們可以在繁忙的生活中保持高效率，同時確保家庭生活更加有條理和充實。讓時間成為我們的朋友，而非偷走我們寶貴時光的小偷。
                            
                            
                        </p>
                        <a href="">Read More</a>
                    </article>
                    

                </section> -->
           
            </div> 
            
        </section>

<!---------------------  分頁器   --------------------->

    <div class="mall_paginator"  v-if="activeContent === 'content1'">

                
    <ul>
        <!-- 上一頁圖案 -->
        <li>                    
            <div v-if="wcurrentPage != 1" v-on:click="wsetPage(wcurrentPage - 1)">
                <span>&lt;</span>
            </div>
        </li>
        <li v-for="n in wtotalPages" v-bind:key="n" v-on:click="wsetPage(n)" v-bind:class="{'mall_paginator_on' : n == wcurrentPage}">
            {{ n }}
        </li>
        <!-- 下一頁圖案 -->
        <li>                     
            <div  v-if="wcurrentPage != wtotalPages" v-on:click="wsetPage(wcurrentPage + 1)">
                <span>&gt;</span>
            </div>
        </li>
    </ul>

    </div>

    <div class="mall_paginator"  v-if="activeContent === 'content2'">

                
<ul>
    <!-- 上一頁圖案 -->
    <li>                    
        <div v-if="ccurrentPage != 1" v-on:click="csetPage(ccurrentPage - 1)">
            <span>&lt;</span>
        </div>
    </li>
    <li v-for="n in ctotalPages" v-bind:key="n" v-on:click="csetPage(n)" v-bind:class="{'mall_paginator_on' : n == ccurrentPage}">
        {{ n }}
    </li>
    <!-- 下一頁圖案 -->
    <li>                     
        <div  v-if="ccurrentPage != ctotalPages" v-on:click="csetPage(ccurrentPage + 1)">
            <span>&gt;</span>
        </div>
    </li>
</ul>

</div>

<div class="mall_paginator"  v-if="activeContent === 'content3'">

                
<ul>
    <!-- 上一頁圖案 -->
    <li>                    
        <div v-if="pcurrentPage != 1" v-on:click="psetPage(pcurrentPage - 1)">
            <span>&lt;</span>
        </div>
    </li>
    <li v-for="n in ptotalPages" v-bind:key="n" v-on:click="psetPage(n)" v-bind:class="{'mall_paginator_on' : n == pcurrentPage}">
        {{ n }}
    </li>
    <!-- 下一頁圖案 -->
    <li>                     
        <div  v-if="pcurrentPage != ptotalPages" v-on:click="psetPage(pcurrentPage + 1)">
            <span>&gt;</span>
        </div>
    </li>
</ul>

</div>


    </wrapper>
    <DefaultFooter />
    </div>
</template>

<style lang="scss">

#arrow {
  position: absolute;
  display: block;
}


.articles_buttom .articles_all .section_all:nth-child(2){

    img {
        order: 2;
        margin-left: 52px;
      }
      article {
        order: 1;
        margin-left: 0;
      }

};

</style>