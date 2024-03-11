<script setup>

    import { ref, computed, onMounted } from "vue";

    import DefaultHeader from '@/layouts/header.vue'; // 引入header(請照抄)
    import DefaultFooter from '@/layouts/footer.vue'; // 引入footer(請照抄)
    import BannerUrl  from '@/img/act/act_banner.jpg'; // 更改成banner路徑
    import wrapper from '@/layouts/wrapper.vue'; // 引入wrapper滑動(請照抄)
    import lecture from '@/layouts/Lecture.vue'; //引入職人講座
    import discount from '@/layouts/Discount.vue'; //引入優惠活動

    const banner_url = BannerUrl; // banner路徑令變數(請照抄)
    
    const activeContent = ref('content1');
    const showContent = (e) => {
        activeContent.value = e;
    }

    const discountItems = ref([]);
    const lectureItems = ref([]);


    onMounted(() => {

    const url_discount = 'http://localhost/thd104/g1/public/php/actDiscount_select.php';
    // const url_discount = 'php/actDiscount_select.php';
    
        
    fetch(url_discount)
        .then(response => response.json())
        .then(response => {
            // console.log('註冊成功 js');
        discountItems.value = response;
            })
            .catch(error => {
                console.error('Error:', error);
            });


    const url_lecture = 'http://localhost/thd104/g1/public/php/actLecture_select.php';
    // const url_lecture = 'php/actLecture_select.php';
    
        
    fetch(url_lecture)
        .then(response => response.json())
        .then(response => {
            // console.log('註冊成功 js');
        lectureItems.value = response;
            })
            .catch(error => {
                console.error('Error:', error);
            });

    });



    // --------------------分頁器----------------------->
    
    const dcurrentPage = ref(1)
    const dpageSize = ref(4)

    const dItems = computed(() => {
    const dstartIndex = (dcurrentPage.value - 1) * dpageSize.value;
    const dendIndex = dstartIndex + dpageSize.value;
    return discountItems.value.slice(dstartIndex, dendIndex);
    });

    const dtotalPages = computed(() => Math.ceil(discountItems.value.length / dpageSize.value));

    const dsetPage = (dpage) => {
        if (dpage >= 1 && dpage <= dtotalPages.value) {
            dcurrentPage.value = dpage;
        }
    };

    const lcurrentPage = ref(1)
    const lpageSize = ref(4)

    const lItems = computed(() => {
    const lstartIndex = (lcurrentPage.value - 1) * lpageSize.value;
    const lendIndex = lstartIndex + lpageSize.value;
    return lectureItems.value.slice(lstartIndex, lendIndex);
    });

    const ltotalPages = computed(() => Math.ceil(lectureItems.value.length / lpageSize.value));

    const lsetPage = (lpage) => {
        if (lpage >= 1 && lpage <= ltotalPages.value) {
            lcurrentPage.value = lpage;
        }
    };
        

</script>

<template>

    <div>

    <DefaultHeader header-title-zh="活動專區" header-title-eng="Activity" :bgi="banner_url" /> 
    
    <wrapper class="act_wrapper">

        <section class="act_tab">

        <div class="tab">
            <ul class="tab_act_phone">
                <li :class="{ tab_on: activeContent === 'content1' }"><a href="#" @click.prevent="showContent('content1')" >優惠活動</a></li>
                <li :class="{ tab_on: activeContent === 'content2' }"><a href="#"  @click.prevent="showContent('content2')" >職人講座</a></li>
            </ul>
        </div>
        
        </section>

    <!--------------------優惠活動----------------------->

        <discount v-if="activeContent === 'content1'" :discountItems="dItems"/>

    <!--------------------  職人講座  ----------------------->

        <lecture v-else-if="activeContent === 'content2'" :lectureItems="lItems"/>

    <!---------------------  分頁器   --------------------->
    
        <div class="mall_paginator"  v-if="activeContent === 'content1'">

            <ul>
                    <!-- 上一頁圖案 -->
                <li>                    
                    <div v-if="dcurrentPage != 1" v-on:click="dsetPage(dcurrentPage - 1)">
                        <span>&lt;</span>
                    </div>
                </li>
                <li v-for="n in dtotalPages" v-bind:key="n" v-on:click="dsetPage(n)" v-bind:class="{'mall_paginator_on' : n == dcurrentPage}">
                        {{ n }}
                </li>
                    <!-- 下一頁圖案 -->
                <li>                     
                    <div  v-if="dcurrentPage != dtotalPages" v-on:click="dsetPage(dcurrentPage + 1)">
                        <span>&gt;</span>
                    </div>
                </li>
            </ul>

        </div>
        
        
        
        <div class="mall_paginator" v-else-if="activeContent === 'content2'">

<ul>
        <!-- 上一頁圖案 -->
    <li>                    
        <div v-if="lcurrentPage != 1" v-on:click="lsetPage(lcurrentPage - 1)">
            <span>&lt;</span>
        </div>
    </li>
    <li v-for="n in ltotalPages" v-bind:key="n" v-on:click="lsetPage(n)" v-bind:class="{'mall_paginator_on' : n == lcurrentPage}">
            {{ n }}
    </li>
        <!-- 下一頁圖案 -->
    <li>                     
        <div  v-if="lcurrentPage != ltotalPages" v-on:click="lsetPage(lcurrentPage + 1)">
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

</style>