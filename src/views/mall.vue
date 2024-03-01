
<template>
    <div>
        <DefaultHeader header-title-zh="商城" header-title-eng="Mall" :bgi="banner_url" />

        <wrapper class="mall_wrapper wrapper">
            <!-----------------------------  類別tap ----------------------------------------->
            <nav class="mall_nav">

                <div class="tab mall_tab">

                    <ul class="nav_products">

                        <li v-bind:class="{'tab_on' : currentCategory == '所有商品'}"><a href="#" v-on:click.prevent="setCategory('所有商品')">所有商品</a></li>
                        <li v-bind:class="{'tab_on' : currentCategory == '清潔工具'}"><a href="#" v-on:click.prevent="setCategory('清潔工具')">清潔工具</a></li>
                        <li v-bind:class="{'tab_on' : currentCategory == '清潔劑'}"><a href="#" v-on:click.prevent="setCategory('清潔劑')">清潔劑</a></li>

                    </ul>

                    <ul class="mall_search">
                        <li><font-awesome-icon class="mall_search_icon" :icon="['fas', 'magnifying-glass']" /></li>
                        <!-- <li><i class="fa-solid fa-magnifying-glass mall_search_icon"></i></li> -->
                        <li><input v-model.lazy.trim.enter="searchBar" type="text" placeholder="搜尋商品"></li>
                    </ul>

                </div>
     
            </nav>

            <ul class="mall_search_rwd">
                <li><font-awesome-icon class="mall_search_icon" :icon="['fas', 'magnifying-glass']" /></li>
                <li><input v-model.lazy.trim.enter="searchBar" type="text" placeholder="搜尋商品"></li>
            </ul>

            <!-----------------------------  商品列表 ----------------------------------------->
            <main class="mall">

                <ul class="mall_products">

                    <li v-for="i in paginatedProducts" v-bind:key="i.productId">
                        <!-- <router-link :to="{ name: 'mItem' }"><img v-bind:src="i.productSrc"></router-link> -->

                        <!-- 為了設置router -->
                        <router-link :to="{ name: 'mItem', params: { productId: i.productId }}"><img v-bind:src="i.productSrc1"></router-link>

                        <h1>{{ i.productName }}</h1>
                        <p>NTD {{ i.productPrice }}</p>
                        <input 
                            class="mall_add_to_cart" 
                            type="button" 
                            value="加入購物車"
                            @click="cartStore.addToCart(i)">

                    </li>
                </ul>
                
            </main>

            <!-----------------------------  分頁器 ----------------------------------------->
            <div class="mall_paginator">
                <ul>
                    <!-- 上一頁圖案 -->
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
                    <li>
                        <!-- <span>&gt;</span> -->
                        <div  v-if="currentPage != totalPages" v-on:click="setPage(currentPage + 1)">
                            <span>&gt;</span>
                        </div>
                    </li>
                </ul>
            </div>
        
        </wrapper>
        <DefaultFooter />
    </div>
</template>

<script setup>
    import { ref, computed } from "vue";

    
    import { useCartStore } from '@/stores/cartStore.js';
    const cartStore = useCartStore();
    
    // 設置header及footer
    import DefaultHeader from '@/layouts/header.vue'; // 引入header(請照抄)
    import DefaultFooter from '@/layouts/footer.vue'; // 引入footer(請照抄)
    import wrapper from '@/layouts/wrapper.vue'; // 引入wrapper滑動(請照抄)
    import BannerUrl  from '@/img/mall/mall_banner.jpg'; // 更改成banner路徑
    const banner_url = BannerUrl; // banner路徑令變數(請照抄)


    // 分類tab
    const currentCategory = ref('所有商品')
    // 搜尋內容
    const searchBar = ref('')

    const currentPage = ref(1)

    const pageSize = ref(12)

    // 所有商品
    const products = ref([
                    {
                        productId   : 1,
                        productName : '浣安手工香皂1',
                        productPrice: 200,
                        productSrc1 : new URL("@/img/mall/mall_product1_1.jpg", import.meta.url).href,
                        productSrc2 : new URL("@/img/mall/mall_product1_2.jpg", import.meta.url).href,
                        productSrc3 : new URL("@/img/mall/mall_product1_3.jpg", import.meta.url).href,
                        productSlogan1 : '天然香潔，親手愛呵護。',
                        productSlogan2 : '淨化心靈，手工皂香。',
                        productDes1 : `純天然成分，呵護您的肌膚，賦予自然清新香氣。`,
                        productDes2 : `手工製作，每塊香皂獨一無二，富含滋潤護膚精華。`,
                        productCategory: '經典款香皂融合薰衣草與迷迭香精油，結合滋養橄欖油，帶來舒緩放鬆的沐浴體驗。',
                        productStyle : '清潔工具',
                    },

                    {
                        productId   : 2,
                        productName : '浣安手工香皂2',
                        productPrice: 200,
                        productSrc1 : new URL("@/img/mall/mall_product1_1.jpg", import.meta.url).href,
                        productSrc2 : new URL("@/img/mall/mall_product1_2.jpg", import.meta.url).href,
                        productSrc3 : new URL("@/img/mall/mall_product1_3.jpg", import.meta.url).href,
                        productSlogan1 : '天然香潔，親手愛呵護。',
                        productSlogan2 : '淨化心靈，手工皂香。',
                        productDes1 : `純天然成分，呵護您的肌膚，賦予自然清新香氣。`,
                        productDes2 : `手工製作，每塊香皂獨一無二，富含滋潤護膚精華。`,
                        productCategory: '經典款香皂融合薰衣草與迷迭香精油，結合滋養橄欖油，帶來舒緩放鬆的沐浴體驗。',
                        productStyle : '清潔工具',
                    },

                    {
                        productId   : 3,
                        productName : '浣安手工香皂3',
                        productPrice: 200,
                        productSrc1 : new URL("@/img/mall/mall_product1_1.jpg", import.meta.url).href,
                        productSrc2 : new URL("@/img/mall/mall_product1_2.jpg", import.meta.url).href,
                        productSrc3 : new URL("@/img/mall/mall_product1_3.jpg", import.meta.url).href,
                        productSlogan1 : '天然香潔，親手愛呵護。',
                        productSlogan2 : '淨化心靈，手工皂香。',
                        productDes1 : `純天然成分，呵護您的肌膚，賦予自然清新香氣。`,
                        productDes2 : `手工製作，每塊香皂獨一無二，富含滋潤護膚精華。`,
                        productCategory: '經典款香皂融合薰衣草與迷迭香精油，結合滋養橄欖油，帶來舒緩放鬆的沐浴體驗。',
                        productStyle : '清潔工具',
                    },

                    {
                        productId   : 4,
                        productName : '浣安手工香皂4',
                        productPrice: 200,
                        productSrc1 : new URL("@/img/mall/mall_product1_1.jpg", import.meta.url).href,
                        productSrc2 : new URL("@/img/mall/mall_product1_2.jpg", import.meta.url).href,
                        productSrc3 : new URL("@/img/mall/mall_product1_3.jpg", import.meta.url).href,
                        productSlogan1 : '天然香潔，親手愛呵護。',
                        productSlogan2 : '淨化心靈，手工皂香。',
                        productDes1 : `純天然成分，呵護您的肌膚，賦予自然清新香氣。`,
                        productDes2 : `手工製作，每塊香皂獨一無二，富含滋潤護膚精華。`,
                        productCategory: '經典款香皂融合薰衣草與迷迭香精油，結合滋養橄欖油，帶來舒緩放鬆的沐浴體驗。',
                        productStyle : '清潔工具',
                    },

                    {
                        productId   : 5,
                        productName : '浣安手工香皂5',
                        productPrice: 200,
                        productSrc1 : new URL("@/img/mall/mall_product1_1.jpg", import.meta.url).href,
                        productSrc2 : new URL("@/img/mall/mall_product1_2.jpg", import.meta.url).href,
                        productSrc3 : new URL("@/img/mall/mall_product1_3.jpg", import.meta.url).href,
                        productSlogan1 : '天然香潔，親手愛呵護。',
                        productSlogan2 : '淨化心靈，手工皂香。',
                        productDes1 : `純天然成分，呵護您的肌膚，賦予自然清新香氣。`,
                        productDes2 : `手工製作，每塊香皂獨一無二，富含滋潤護膚精華。`,
                        productCategory: '經典款香皂融合薰衣草與迷迭香精油，結合滋養橄欖油，帶來舒緩放鬆的沐浴體驗。',
                        productStyle : '清潔工具',
                    },

                    {
                        productId   : 6,
                        productName : '浣安手工香皂6',
                        productPrice: 200,
                        productSrc1 : new URL("@/img/mall/mall_product1_1.jpg", import.meta.url).href,
                        productSrc2 : new URL("@/img/mall/mall_product1_2.jpg", import.meta.url).href,
                        productSrc3 : new URL("@/img/mall/mall_product1_3.jpg", import.meta.url).href,
                        productSlogan1 : '天然香潔，親手愛呵護。',
                        productSlogan2 : '淨化心靈，手工皂香。',
                        productDes1 : `純天然成分，呵護您的肌膚，賦予自然清新香氣。`,
                        productDes2 : `手工製作，每塊香皂獨一無二，富含滋潤護膚精華。`,
                        productCategory: '經典款香皂融合薰衣草與迷迭香精油，結合滋養橄欖油，帶來舒緩放鬆的沐浴體驗。',
                        productStyle : '清潔工具',
                    },

                    {
                        productId   : 7,
                        productName : '浣安手工香皂7',
                        productPrice: 200,
                        productSrc1 : new URL("@/img/mall/mall_product1_1.jpg", import.meta.url).href,
                        productSrc2 : new URL("@/img/mall/mall_product1_2.jpg", import.meta.url).href,
                        productSrc3 : new URL("@/img/mall/mall_product1_3.jpg", import.meta.url).href,
                        productSlogan1 : '天然香潔，親手愛呵護。',
                        productSlogan2 : '淨化心靈，手工皂香。',
                        productDes1 : `純天然成分，呵護您的肌膚，賦予自然清新香氣。`,
                        productDes2 : `手工製作，每塊香皂獨一無二，富含滋潤護膚精華。`,
                        productCategory: '經典款香皂融合薰衣草與迷迭香精油，結合滋養橄欖油，帶來舒緩放鬆的沐浴體驗。',
                        productStyle : '清潔工具',
                    },

                    {
                        productId   : 8,
                        productName : '浣安手工香皂8',
                        productPrice: 200,
                        productSrc1 : new URL("@/img/mall/mall_product1_1.jpg", import.meta.url).href,
                        productSrc2 : new URL("@/img/mall/mall_product1_2.jpg", import.meta.url).href,
                        productSrc3 : new URL("@/img/mall/mall_product1_3.jpg", import.meta.url).href,
                        productSlogan1 : '天然香潔，親手愛呵護。',
                        productSlogan2 : '淨化心靈，手工皂香。',
                        productDes1 : `純天然成分，呵護您的肌膚，賦予自然清新香氣。`,
                        productDes2 : `手工製作，每塊香皂獨一無二，富含滋潤護膚精華。`,
                        productCategory: '經典款香皂融合薰衣草與迷迭香精油，結合滋養橄欖油，帶來舒緩放鬆的沐浴體驗。',
                        productStyle : '清潔工具',
                    },
                    
                    {
                        productId   : 9,
                        productName : '浣安手工香皂9',
                        productPrice: 200,
                        productSrc1 : new URL("@/img/mall/mall_product1_1.jpg", import.meta.url).href,
                        productSrc2 : new URL("@/img/mall/mall_product1_2.jpg", import.meta.url).href,
                        productSrc3 : new URL("@/img/mall/mall_product1_3.jpg", import.meta.url).href,
                        productSlogan1 : '天然香潔，親手愛呵護。',
                        productSlogan2 : '淨化心靈，手工皂香。',
                        productDes1 : `純天然成分，呵護您的肌膚，賦予自然清新香氣。`,
                        productDes2 : `手工製作，每塊香皂獨一無二，富含滋潤護膚精華。`,
                        productCategory: '經典款香皂融合薰衣草與迷迭香精油，結合滋養橄欖油，帶來舒緩放鬆的沐浴體驗。',
                        productStyle : '清潔工具',
                    },

                    {
                        productId   : 10,
                        productName : '浣安手工香皂10',
                        productPrice: 200,
                        productSrc1 : new URL("@/img/mall/mall_product1_1.jpg", import.meta.url).href,
                        productSrc2 : new URL("@/img/mall/mall_product1_2.jpg", import.meta.url).href,
                        productSrc3 : new URL("@/img/mall/mall_product1_3.jpg", import.meta.url).href,
                        productSlogan1 : '天然香潔，親手愛呵護。',
                        productSlogan2 : '淨化心靈，手工皂香。',
                        productDes1 : `純天然成分，呵護您的肌膚，賦予自然清新香氣。`,
                        productDes2 : `手工製作，每塊香皂獨一無二，富含滋潤護膚精華。`,
                        productCategory: '經典款香皂融合薰衣草與迷迭香精油，結合滋養橄欖油，帶來舒緩放鬆的沐浴體驗。',
                        productStyle : '清潔工具',
                    },

                    {
                        productId   : 11,
                        productName : '浣安手工香皂11',
                        productPrice: 200,
                        productSrc1 : new URL("@/img/mall/mall_product1_1.jpg", import.meta.url).href,
                        productSrc2 : new URL("@/img/mall/mall_product1_2.jpg", import.meta.url).href,
                        productSrc3 : new URL("@/img/mall/mall_product1_3.jpg", import.meta.url).href,
                        productSlogan1 : '天然香潔，親手愛呵護。',
                        productSlogan2 : '淨化心靈，手工皂香。',
                        productDes1 : `純天然成分，呵護您的肌膚，賦予自然清新香氣。`,
                        productDes2 : `手工製作，每塊香皂獨一無二，富含滋潤護膚精華。`,
                        productCategory: '經典款香皂融合薰衣草與迷迭香精油，結合滋養橄欖油，帶來舒緩放鬆的沐浴體驗。',
                        productStyle : '清潔劑',
                    },

                    {
                        productId   : 12,
                        productName : '浣安手工香皂12',
                        productPrice: 200,
                        productSrc1 : new URL("@/img/mall/mall_product1_1.jpg", import.meta.url).href,
                        productSrc2 : new URL("@/img/mall/mall_product1_2.jpg", import.meta.url).href,
                        productSrc3 : new URL("@/img/mall/mall_product1_3.jpg", import.meta.url).href,
                        productSlogan1 : '天然香潔，親手愛呵護。',
                        productSlogan2 : '淨化心靈，手工皂香。',
                        productDes1 : `純天然成分，呵護您的肌膚，賦予自然清新香氣。`,
                        productDes2 : `手工製作，每塊香皂獨一無二，富含滋潤護膚精華。`,
                        productCategory: '經典款香皂融合薰衣草與迷迭香精油，結合滋養橄欖油，帶來舒緩放鬆的沐浴體驗。',
                        productStyle : '清潔劑',
                    },

                    {
                        productId   : 13,
                        productName : '浣安手工香皂13',
                        productPrice: 200,
                        productSrc1 : new URL("@/img/mall/mall_product1_1.jpg", import.meta.url).href,
                        productSrc2 : new URL("@/img/mall/mall_product1_2.jpg", import.meta.url).href,
                        productSrc3 : new URL("@/img/mall/mall_product1_3.jpg", import.meta.url).href,
                        productSlogan1 : '天然香潔，親手愛呵護。',
                        productSlogan2 : '淨化心靈，手工皂香。',
                        productDes1 : `純天然成分，呵護您的肌膚，賦予自然清新香氣。`,
                        productDes2 : `手工製作，每塊香皂獨一無二，富含滋潤護膚精華。`,
                        productCategory: '經典款香皂融合薰衣草與迷迭香精油，結合滋養橄欖油，帶來舒緩放鬆的沐浴體驗。',
                        productStyle : '清潔劑',
                    },

                    {
                        productId   : 14,
                        productName : '浣安手工香皂14',
                        productPrice: 200,
                        productSrc1 : new URL("@/img/mall/mall_product1_1.jpg", import.meta.url).href,
                        productSrc2 : new URL("@/img/mall/mall_product1_2.jpg", import.meta.url).href,
                        productSrc3 : new URL("@/img/mall/mall_product1_3.jpg", import.meta.url).href,
                        productSlogan1 : '天然香潔，親手愛呵護。',
                        productSlogan2 : '淨化心靈，手工皂香。',
                        productDes1 : `純天然成分，呵護您的肌膚，賦予自然清新香氣。`,
                        productDes2 : `手工製作，每塊香皂獨一無二，富含滋潤護膚精華。`,
                        productCategory: '經典款香皂融合薰衣草與迷迭香精油，結合滋養橄欖油，帶來舒緩放鬆的沐浴體驗。',
                        productStyle : '清潔劑',
                    },

                    {
                        productId   : 15,
                        productName : '浣安手工香皂15',
                        productPrice: 200,
                        productSrc1 : new URL("@/img/mall/mall_product1_1.jpg", import.meta.url).href,
                        productSrc2 : new URL("@/img/mall/mall_product1_2.jpg", import.meta.url).href,
                        productSrc3 : new URL("@/img/mall/mall_product1_3.jpg", import.meta.url).href,
                        productSlogan1 : '天然香潔，親手愛呵護。',
                        productSlogan2 : '淨化心靈，手工皂香。',
                        productDes1 : `純天然成分，呵護您的肌膚，賦予自然清新香氣。`,
                        productDes2 : `手工製作，每塊香皂獨一無二，富含滋潤護膚精華。`,
                        productCategory: '經典款香皂融合薰衣草與迷迭香精油，結合滋養橄欖油，帶來舒緩放鬆的沐浴體驗。',
                        productStyle : '清潔劑',
                    },

                    {
                        productId   : 16,
                        productName : '浣安手工香皂16',
                        productPrice: 200,
                        productSrc1 : new URL("@/img/mall/mall_product1_1.jpg", import.meta.url).href,
                        productSrc2 : new URL("@/img/mall/mall_product1_2.jpg", import.meta.url).href,
                        productSrc3 : new URL("@/img/mall/mall_product1_3.jpg", import.meta.url).href,
                        productSlogan1 : '天然香潔，親手愛呵護。',
                        productSlogan2 : '淨化心靈，手工皂香。',
                        productDes1 : `純天然成分，呵護您的肌膚，賦予自然清新香氣。`,
                        productDes2 : `手工製作，每塊香皂獨一無二，富含滋潤護膚精華。`,
                        productCategory: '經典款香皂融合薰衣草與迷迭香精油，結合滋養橄欖油，帶來舒緩放鬆的沐浴體驗。',
                        productStyle : '清潔劑',
                    },

                    {
                        productId   : 17,
                        productName : '浣安手工香皂17',
                        productPrice: 200,
                        productSrc1 : new URL("@/img/mall/mall_product1_1.jpg", import.meta.url).href,
                        productSrc2 : new URL("@/img/mall/mall_product1_2.jpg", import.meta.url).href,
                        productSrc3 : new URL("@/img/mall/mall_product1_3.jpg", import.meta.url).href,
                        productSlogan1 : '天然香潔，親手愛呵護。',
                        productSlogan2 : '淨化心靈，手工皂香。',
                        productDes1 : `純天然成分，呵護您的肌膚，賦予自然清新香氣。`,
                        productDes2 : `手工製作，每塊香皂獨一無二，富含滋潤護膚精華。`,
                        productCategory: '經典款香皂融合薰衣草與迷迭香精油，結合滋養橄欖油，帶來舒緩放鬆的沐浴體驗。',
                        productStyle : '清潔劑',
                    },

                    {
                        productId   : 18,
                        productName : '浣安手工香皂18',
                        productPrice: 200,
                        productSrc1 : new URL("@/img/mall/mall_product1_1.jpg", import.meta.url).href,
                        productSrc2 : new URL("@/img/mall/mall_product1_2.jpg", import.meta.url).href,
                        productSrc3 : new URL("@/img/mall/mall_product1_3.jpg", import.meta.url).href,
                        productSlogan1 : '天然香潔，親手愛呵護。',
                        productSlogan2 : '淨化心靈，手工皂香。',
                        productDes1 : `純天然成分，呵護您的肌膚，賦予自然清新香氣。`,
                        productDes2 : `手工製作，每塊香皂獨一無二，富含滋潤護膚精華。`,
                        productCategory: '經典款香皂融合薰衣草與迷迭香精油，結合滋養橄欖油，帶來舒緩放鬆的沐浴體驗。',
                        productStyle : '清潔劑',
                    },

                    {
                        productId   : 19,
                        productName : '浣安手工香皂19',
                        productPrice: 200,
                        productSrc1 : new URL("@/img/mall/mall_product1_1.jpg", import.meta.url).href,
                        productSrc2 : new URL("@/img/mall/mall_product1_2.jpg", import.meta.url).href,
                        productSrc3 : new URL("@/img/mall/mall_product1_3.jpg", import.meta.url).href,
                        productSlogan1 : '天然香潔，親手愛呵護。',
                        productSlogan2 : '淨化心靈，手工皂香。',
                        productDes1 : `純天然成分，呵護您的肌膚，賦予自然清新香氣。`,
                        productDes2 : `手工製作，每塊香皂獨一無二，富含滋潤護膚精華。`,
                        productCategory: '經典款香皂融合薰衣草與迷迭香精油，結合滋養橄欖油，帶來舒緩放鬆的沐浴體驗。',
                        productStyle : '清潔劑',
                    },
    ])

    // 商品分類按鈕!!!!
    // 搜尋條
    // 回傳一陣列(過濾過的)
    const filteredProducts = computed(function(){
        // let that = this;
        if(currentCategory.value === '所有商品'){
            if(searchBar.value == ''){
                return products.value;
            }else{
                return products.value.filter(function(item) {
                    return item.productName.includes(searchBar.value);
                });
            }
        }else{
            // 第一次過濾類別
            let styleFilter = products.value.filter(function(item) {
                return item.productStyle === currentCategory.value;
            });
            // 第二次再過濾搜尋條
            let searchFilter = styleFilter.filter(function(i){
                return i.productName.includes(searchBar.value)
            })

            return searchFilter;
        }
    });

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


<!-- <script>
    export default {
        data() {
            return {
                // 分類tab
                currentCategory: '所有商品',

                // 搜尋內容
                searchBar: '',

                currentPage: 1,
                pageSize: 12,
                products: [
                    {
                        productId   : 1,
                        productName : '浣安手工香皂',
                        productPrice: 200,
                        productSrc : new URL("@/img/mall/mall_product1_1.jpg", import.meta.url).href,
                        productStyle : '清潔工具',
                        quantity : 1,
                    },

                    {
                        productId   : 2,
                        productName : '浣安手工香皂2',
                        productPrice: 200,
                        productSrc : new URL("@/img/mall/mall_product1_1.jpg", import.meta.url).href,
                        productStyle : '清潔工具',
                        
                    },

                    {
                        productId   : 3,
                        productName : '浣安手工香皂3',
                        productPrice: 200,
                        productSrc : new URL("@/img/mall/mall_product1_1.jpg", import.meta.url).href,
                        productStyle : '清潔工具',
                    },

                    {
                        productId   : 3,
                        productName : '浣安手工香皂4',
                        productPrice: 200,
                        productSrc : new URL("@/img/mall/mall_product1_1.jpg", import.meta.url).href,
                        productStyle : '清潔工具',
                    },

                    {
                        productId   : 3,
                        productName : '浣安手工香皂5',
                        productPrice: 200,
                        productSrc : new URL("@/img/mall/mall_product1_1.jpg", import.meta.url).href,
                        productStyle : '清潔工具',
                    },

                    {
                        productId   : 3,
                        productName : '浣安手工香皂6',
                        productPrice: 200,
                        productSrc : new URL("@/img/mall/mall_product1_1.jpg", import.meta.url).href,
                        productStyle : '清潔工具',
                    },

                    {
                        productId   : 3,
                        productName : '浣安手工香皂7',
                        productPrice: 200,
                        productSrc : new URL("@/img/mall/mall_product1_1.jpg", import.meta.url).href,
                        productStyle : '清潔工具',
                    },

                    {
                        productId   : 3,
                        productName : '浣安手工香皂8',
                        productPrice: 200,
                        productSrc : new URL("@/img/mall/mall_product1_1.jpg", import.meta.url).href,
                        productStyle : '清潔工具',
                    },

                    {
                        productId   : 3,
                        productName : '浣安手工香皂9',
                        productPrice: 200,
                        productSrc : new URL("@/img/mall/mall_product1_1.jpg", import.meta.url).href,
                        productStyle : '清潔工具',
                    },

                    {
                        productId   : 3,
                        productName : '浣安手工香皂10',
                        productPrice: 200,
                        productSrc : new URL("@/img/mall/mall_product1_1.jpg", import.meta.url).href,
                        productStyle : '清潔劑',
                    },

                    {
                        productId   : 3,
                        productName : '浣安手工香皂11',
                        productPrice: 200,
                        productSrc : new URL("@/img/mall/mall_product1_1.jpg", import.meta.url).href,
                        productStyle : '清潔劑',
                    },

                    {
                        productId   : 3,
                        productName : '浣安手工香皂12',
                        productPrice: 200,
                        productSrc : new URL("@/img/mall/mall_product1_1.jpg", import.meta.url).href,
                        productStyle : '清潔劑',
                    },

                    {
                        productId   : 3,
                        productName : '浣安手工香皂13',
                        productPrice: 200,
                        productSrc : new URL("@/img/mall/mall_product1_1.jpg", import.meta.url).href,
                        productStyle : '清潔劑',
                    },

                    {
                        productId   : 3,
                        productName : '浣安手工香皂14',
                        productPrice: 200,
                        productSrc : new URL("@/img/mall/mall_product1_1.jpg", import.meta.url).href,
                        productStyle : '清潔劑',
                    },

                    {
                        productId   : 3,
                        productName : '浣安手工香皂15',
                        productPrice: 200,
                        productSrc : new URL("@/img/mall/mall_product1_1.jpg", import.meta.url).href,
                        productStyle : '清潔劑',
                    },

                    {
                        productId   : 3,
                        productName : '浣安手工香皂16',
                        productPrice: 200,
                        productSrc : new URL("@/img/mall/mall_product1_1.jpg", import.meta.url).href,
                        productStyle : '清潔劑',
                    },

                    {
                        productId   : 3,
                        productName : '浣安手工香皂17',
                        productPrice: 200,
                        productSrc : new URL("@/img/mall/mall_product1_1.jpg", import.meta.url).href,
                        productStyle : '清潔劑',
                    },

                    {
                        productId   : 3,
                        productName : '浣安手工香皂18',
                        productPrice: 200,
                        productSrc : new URL("@/img/mall/mall_product1_1.jpg", import.meta.url).href,
                        productStyle : '清潔劑',
                    },

                    {
                        productId   : 3,
                        productName : '浣安手工香皂19',
                        productPrice: 200,
                        productSrc : new URL("@/img/mall/mall_product1_1.jpg", import.meta.url).href,
                        productStyle : '清潔劑',
                    },
                ],
            };
        },
        computed: {

            // 商品分類按鈕!!!!
            // 搜尋條
            // 回傳一陣列(過濾過的)
            filteredProducts() {
                let that = this;
                if(this.currentCategory === '所有商品'){
                    if(this.searchBar == ''){
                        return this.products;
                    }else{
                        return this.products.filter(function(item) {
                            return item.productName.includes(that.searchBar);
                        });
                    }
                }else{
                    // 第一次過濾類別
                    let styleFilter = this.products.filter(function(item) {
                        return item.productStyle === that.currentCategory;
                    });
                    // 第二次再過濾搜尋條
                    let searchFilter = styleFilter.filter(function(i){
                        return i.productName.includes(that.searchBar)
                    })

                    return searchFilter;
                }
            },

            // 分頁器
            paginatedProducts(){
                let start = (this.currentPage - 1) * this.pageSize;
                let end = start + this.pageSize;
                return this.filteredProducts.slice(start, end);
            },

            totalPages() {
                return Math.ceil(this.filteredProducts.length / this.pageSize)
            },
        },

        methods: {
            setPage(n) {
                this.currentPage = n;
            },

            setCategory(category) {
                this.currentCategory = category;
                this.currentPage = 1;
            },

        }
    }
</script> -->

<style lang="scss">


</style>