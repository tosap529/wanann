<script setup>

    import { ref } from "vue";

    import DefaultHeader from '@/layouts/header.vue'; // 引入header(請照抄)
    import DefaultFooter from '@/layouts/footer.vue'; // 引入footer(請照抄)
    import BannerUrl  from '@/img/act/act_banner.jpg'; // 更改成banner路徑
    import wrapper from '@/layouts/wrapper.vue'; // 引入wrapper滑動(請照抄)
    import lecture from '@/components/Lecture.vue'; //引入職人講座
    import discount from '@/components/Discount.vue'; //引入優惠活動

    const banner_url = BannerUrl; // banner路徑令變數(請照抄)
    
    const activeContent = ref('content1');
    const showContent = (e) => {
        activeContent.value = e;
    }

    const items = ref([]);
    
    const url = 'http://localhost/thd104/public/act.php';
    
        
    fetch(url)
        .then(response => response.json())
        .then(response => {
            // console.log('註冊成功 js');
        items.value = response;
            })
            .catch(error => {
                console.error('Error:', error);
            });
    

    const currentPage = ref(1)

    const pageSize = ref(4)

        // 分頁器
        const paginatedProducts = computed(function(){
        let start = (currentPage.value - 1) * pageSize.value;
        let end = start + pageSize.value;
        return filteredProducts.value.slice(start, end);
    });
    const totalPages = computed(function() {
        return Math.ceil(filteredProducts.value.length / pageSize.value)
    })

    function setPage(n) {
        currentPage.value = n;
    }
    function setCategory(category) {
        currentCategory.value = category;
        currentPage.value = 1;
    }

            

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
<!-- ------------------優惠活動--------------------- -->

<discount v-if="activeContent === 'content1'" :items="items"/>

<!-- ------------------職人講座--------------------- -->

<lecture v-else-if="activeContent === 'content2'"/>


<!-- ------------------ 分頁器--------------------- -->

        <div class="mall_paginator">

                <ul>
                    <!-- 上一頁圖案 -->
                    <!-- <li v-if="currentPage != 1" v-on:click="setPage(currentPage - 1)"> -->
                    <li>
                        <!-- <span>&lt;</span> -->
                        <div v-if="currentPage != 1" v-on:click="setPage(currentPage - 1)">
                            <span>&lt;</span>
                        </div>
                    </li>

                    <li v-for="n in totalPages" v-bind:key="n" v-on:click="setPage(n)" v-bind:class="{'mall_paginator_on' : n == currentPage}">
                        {{ n }}
                    </li>

                    <!-- 下一頁圖案 -->
                    <!-- <li  v-if="currentPage != totalPages" v-on:click="setPage(currentPage + 1)"> -->
                    <li>
                        <!-- <span>&gt;</span> -->
                        <div  v-if="currentPage != totalPages" v-on:click="setPage(currentPage + 1)">
                            <span>&gt;</span>
                        </div>
                    </li>
                </ul>
        </div>




<!-- <div class="mall_paginator">
                <ul>
                    <!- 上一頁圖案 -->
                    <!-- <li v-if="currentPage != 1" v-on:click="setPage(currentPage - 1)"> 
                    <li>
                        <span>&lt;</span> 
                        <div>
                            <span>&lt;</span>
                        </div>
                    </li>
                    <li>
                        1
                    </li>
                    <li>
                        2
                    </li>
                    <li>
                        3
                    </li> -->
                    <!-- 下一頁圖案 -->
                    <!-- <li  v-if="currentPage != totalPages" v-on:click="setPage(currentPage + 1)">
                    <li>
                        <span>&gt;</span>
                        <div>
                            <span>&gt;</span>
                        </div>
                    </li>
                </ul> -->
            <!-- </div>  -->
</wrapper>
<DefaultFooter />
    </div>
</template>

<script>

    export default {
        data(){

        },
        mounted(){
            let coupon_input_el = document.getElementsByClassName("coupon_input");
            let copy_btns = document.getElementsByClassName("copy_button");

        for(let i = 0; i < copy_btns.length; i++){
        
          copy_btns[i].addEventListener("click", function(){
          coupon_input_el[i].select();
          document.execCommand('copy');
          
        });
    }
        }
    }
    
</script>

<style lang="scss">

</style>