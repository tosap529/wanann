
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
                        <router-link :to="{ name: 'mItem' }"><img v-bind:src="i.productSrc"></router-link>
                        <!-- <img v-bind:src="i.productSrc"> -->
                        <h1>{{ i.productName }}</h1>
                        <p>{{ i.productPrice }}</p>
                        <input 
                            class="mall_add_to_cart" 
                            type="button" 
                            value="加入購物車">
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
                        productName : '浣安手工香皂',
                        productPrice: "NT$200",
                        productSrc : "./src/img/mall/mall_product1_1.jpg",
                        productStyle : '清潔工具',
                        quantity : 1,
                    },

                    {
                        productId   : 2,
                        productName : '浣安手工香皂2',
                        productPrice: "NT$200",
                        productSrc : "./src/img/mall/mall_product1_1.jpg",
                        productStyle : '清潔工具',
                        
                    },

                    {
                        productId   : 3,
                        productName : '浣安手工香皂3',
                        productPrice: "NT$200",
                        productSrc : "./src/img/mall/mall_product1_1.jpg",
                        productStyle : '清潔工具',
                    },

                    {
                        productId   : 3,
                        productName : '浣安手工香皂4',
                        productPrice: "NT$200",
                        productSrc : "./src/img/mall/mall_product1_1.jpg",
                        productStyle : '清潔工具',
                    },

                    {
                        productId   : 3,
                        productName : '浣安手工香皂5',
                        productPrice: "NT$200",
                        productSrc : "./src/img/mall/mall_product1_1.jpg",
                        productStyle : '清潔工具',
                    },

                    {
                        productId   : 3,
                        productName : '浣安手工香皂6',
                        productPrice: "NT$200",
                        productSrc : "./src/img/mall/mall_product1_1.jpg",
                        productStyle : '清潔工具',
                    },

                    {
                        productId   : 3,
                        productName : '浣安手工香皂7',
                        productPrice: "NT$200",
                        productSrc : "./src/img/mall/mall_product1_1.jpg",
                        productStyle : '清潔工具',
                    },

                    {
                        productId   : 3,
                        productName : '浣安手工香皂8',
                        productPrice: "NT$200",
                        productSrc : "./src/img/mall/mall_product1_1.jpg",
                        productStyle : '清潔工具',
                    },

                    {
                        productId   : 3,
                        productName : '浣安手工香皂9',
                        productPrice: "NT$200",
                        productSrc : "./src/img/mall/mall_product1_1.jpg",
                        productStyle : '清潔工具',
                    },

                    {
                        productId   : 3,
                        productName : '浣安手工香皂10',
                        productPrice: "NT$200",
                        productSrc : "./src/img/mall/mall_product1_1.jpg",
                        productStyle : '清潔劑',
                    },

                    {
                        productId   : 3,
                        productName : '浣安手工香皂11',
                        productPrice: "NT$200",
                        productSrc : "./src/img/mall/mall_product1_1.jpg",
                        productStyle : '清潔劑',
                    },

                    {
                        productId   : 3,
                        productName : '浣安手工香皂12',
                        productPrice: "NT$200",
                        productSrc : "./src/img/mall/mall_product1_1.jpg",
                        productStyle : '清潔劑',
                    },

                    {
                        productId   : 3,
                        productName : '浣安手工香皂13',
                        productPrice: "NT$200",
                        productSrc : "./src/img/mall/mall_product1_1.jpg",
                        productStyle : '清潔劑',
                    },

                    {
                        productId   : 3,
                        productName : '浣安手工香皂14',
                        productPrice: "NT$200",
                        productSrc : "./src/img/mall/mall_product1_1.jpg",
                        productStyle : '清潔劑',
                    },

                    {
                        productId   : 3,
                        productName : '浣安手工香皂15',
                        productPrice: "NT$200",
                        productSrc : "./src/img/mall/mall_product1_1.jpg",
                        productStyle : '清潔劑',
                    },

                    {
                        productId   : 3,
                        productName : '浣安手工香皂16',
                        productPrice: "NT$200",
                        productSrc : "./src/img/mall/mall_product1_1.jpg",
                        productStyle : '清潔劑',
                    },

                    {
                        productId   : 3,
                        productName : '浣安手工香皂17',
                        productPrice: "NT$200",
                        productSrc : "./src/img/mall/mall_product1_1.jpg",
                        productStyle : '清潔劑',
                    },

                    {
                        productId   : 3,
                        productName : '浣安手工香皂18',
                        productPrice: "NT$200",
                        productSrc : "./src/img/mall/mall_product1_1.jpg",
                        productStyle : '清潔劑',
                    },

                    {
                        productId   : 3,
                        productName : '浣安手工香皂19',
                        productPrice: "NT$200",
                        productSrc : "./src/img/mall/mall_product1_1.jpg",
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
                        productPrice: "NT$200",
                        productSrc : "./src/img/mall/mall_product1_1.jpg",
                        productStyle : '清潔工具',
                        quantity : 1,
                    },

                    {
                        productId   : 2,
                        productName : '浣安手工香皂2',
                        productPrice: "NT$200",
                        productSrc : "./src/img/mall/mall_product1_1.jpg",
                        productStyle : '清潔工具',
                        
                    },

                    {
                        productId   : 3,
                        productName : '浣安手工香皂3',
                        productPrice: "NT$200",
                        productSrc : "./src/img/mall/mall_product1_1.jpg",
                        productStyle : '清潔工具',
                    },

                    {
                        productId   : 3,
                        productName : '浣安手工香皂4',
                        productPrice: "NT$200",
                        productSrc : "./src/img/mall/mall_product1_1.jpg",
                        productStyle : '清潔工具',
                    },

                    {
                        productId   : 3,
                        productName : '浣安手工香皂5',
                        productPrice: "NT$200",
                        productSrc : "./src/img/mall/mall_product1_1.jpg",
                        productStyle : '清潔工具',
                    },

                    {
                        productId   : 3,
                        productName : '浣安手工香皂6',
                        productPrice: "NT$200",
                        productSrc : "./src/img/mall/mall_product1_1.jpg",
                        productStyle : '清潔工具',
                    },

                    {
                        productId   : 3,
                        productName : '浣安手工香皂7',
                        productPrice: "NT$200",
                        productSrc : "./src/img/mall/mall_product1_1.jpg",
                        productStyle : '清潔工具',
                    },

                    {
                        productId   : 3,
                        productName : '浣安手工香皂8',
                        productPrice: "NT$200",
                        productSrc : "./src/img/mall/mall_product1_1.jpg",
                        productStyle : '清潔工具',
                    },

                    {
                        productId   : 3,
                        productName : '浣安手工香皂9',
                        productPrice: "NT$200",
                        productSrc : "./src/img/mall/mall_product1_1.jpg",
                        productStyle : '清潔工具',
                    },

                    {
                        productId   : 3,
                        productName : '浣安手工香皂10',
                        productPrice: "NT$200",
                        productSrc : "./src/img/mall/mall_product1_1.jpg",
                        productStyle : '清潔劑',
                    },

                    {
                        productId   : 3,
                        productName : '浣安手工香皂11',
                        productPrice: "NT$200",
                        productSrc : "./src/img/mall/mall_product1_1.jpg",
                        productStyle : '清潔劑',
                    },

                    {
                        productId   : 3,
                        productName : '浣安手工香皂12',
                        productPrice: "NT$200",
                        productSrc : "./src/img/mall/mall_product1_1.jpg",
                        productStyle : '清潔劑',
                    },

                    {
                        productId   : 3,
                        productName : '浣安手工香皂13',
                        productPrice: "NT$200",
                        productSrc : "./src/img/mall/mall_product1_1.jpg",
                        productStyle : '清潔劑',
                    },

                    {
                        productId   : 3,
                        productName : '浣安手工香皂14',
                        productPrice: "NT$200",
                        productSrc : "./src/img/mall/mall_product1_1.jpg",
                        productStyle : '清潔劑',
                    },

                    {
                        productId   : 3,
                        productName : '浣安手工香皂15',
                        productPrice: "NT$200",
                        productSrc : "./src/img/mall/mall_product1_1.jpg",
                        productStyle : '清潔劑',
                    },

                    {
                        productId   : 3,
                        productName : '浣安手工香皂16',
                        productPrice: "NT$200",
                        productSrc : "./src/img/mall/mall_product1_1.jpg",
                        productStyle : '清潔劑',
                    },

                    {
                        productId   : 3,
                        productName : '浣安手工香皂17',
                        productPrice: "NT$200",
                        productSrc : "./src/img/mall/mall_product1_1.jpg",
                        productStyle : '清潔劑',
                    },

                    {
                        productId   : 3,
                        productName : '浣安手工香皂18',
                        productPrice: "NT$200",
                        productSrc : "./src/img/mall/mall_product1_1.jpg",
                        productStyle : '清潔劑',
                    },

                    {
                        productId   : 3,
                        productName : '浣安手工香皂19',
                        productPrice: "NT$200",
                        productSrc : "./src/img/mall/mall_product1_1.jpg",
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