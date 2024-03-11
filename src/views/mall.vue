<template>
    <div>
        <DefaultHeader header-title-zh="商城" header-title-eng="Mall" :bgi="banner_url" />

        <wrapper class="mall_wrapper wrapper">
            <!-----------------------------  類別tap ----------------------------------------->
            <nav class="mall_nav">

                <div class="tab mall_tab">

                    <ul class="nav_products">

                        <li v-bind:class="{'tab_on' : currentCategory == '所有商品'}"><a href="#" v-on:click="showItems" v-on:click.prevent="setCategory('所有商品')">所有商品</a></li>
                        <li v-bind:class="{'tab_on' : currentCategory == '1'}"><a href="#" v-on:click.prevent="setCategory('1')">清潔工具</a></li>
                        <li v-bind:class="{'tab_on' : currentCategory == '2'}"><a href="#" v-on:click.prevent="setCategory('2')">清潔劑</a></li>

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

                    <li v-for="i in paginatedProducts" v-bind:key="i.ID">
                        

                        <!-- 為了設置router -->
                        <!-- <router-link :to="{ name: 'mItem'}"><img v-bind:src="i.PRODUCT_PIC1"></router-link> -->
                        <router-link :to="{ name: 'mItem', params: { ID: i.ID }}"><img v-bind:src="i.PRODUCT_PIC1"></router-link>

                        <!-- <img v-bind:src="i.PRODUCT_PIC1"> -->
                        
                        <h1>{{ i.PRODUCT_NAME }}</h1>
                        <p>NTD {{ i.PRODUCT_PRICE }}</p>
                        <input 
                            class="mall_add_to_cart" 
                            type="button" 
                            value="加入購物車"
                            @click="cartStore.addToCart(i)"
                            v-on:click="cartAnimate">
                            <div v-if="showSuccessModal" class="modal">
                                <div class="modal_content">
                                    <span class="close" @click="closeModal">&times;</span>
                                    <img src="@/img/logo_title.svg" alt="logo">
                                    <p>已加入購物車</p>
                                </div>
                        </div>
                    </li>
                </ul>
                
            </main>




            <!-- 先備份 -->
            <!-- <main class="mall">

                <ul class="mall_products">

                    <li v-for="i in paginatedProducts" v-bind:key="i.productId">

                        <router-link :to="{ name: 'mItem', params: { productId: i.productId }}"><img v-bind:src="i.productSrc1"></router-link>

                        <h1>{{ i.productName }}</h1>
                        <p>NTD {{ i.productPrice }}</p>
                        <input 
                            class="mall_add_to_cart" 
                            type="button" 
                            value="加入購物車"
                            @click="cartStore.addToCart(i)"
                            v-on:click="showItems">

                    </li>
                </ul>

            </main> -->

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
    import { ref, computed, onMounted } from "vue";

    
    import { useCartStore } from '@/stores/cartStore.js';
    const cartStore = useCartStore();
    
    // 設置header及footer
    import DefaultHeader from '@/layouts/header.vue';
    import DefaultFooter from '@/layouts/footer.vue';
    import wrapper from '@/layouts/wrapper.vue';
    import BannerUrl  from '@/img/mall/mall_banner.jpg';
    const banner_url = BannerUrl;


    // 分類tab
    const currentCategory = ref('所有商品')
    // 搜尋內容
    const searchBar = ref('')

    const currentPage = ref(1)

    const pageSize = ref(8)

    // 所有商品
    const products = ref([])

    // 商品分類按鈕!!!!
    // 搜尋條
    // 回傳一陣列(過濾過的)

    const filteredProducts = computed(function(){
        if(currentCategory.value === '所有商品'){
            if(searchBar.value == ''){
                return products.value;
            }else{
                return products.value.filter(function(item) {
                    return item.PRODUCT_NAME.includes(searchBar.value);
                });
            }
        }else{
            // 第一次過濾類別
            let styleFilter = products.value.filter(function(item) {
                return item.PRODUCT_CATEGORY_ID.toString() === currentCategory.value;
            });
            // 第二次再過濾搜尋條
            let searchFilter = styleFilter.filter(function(i){
                return i.PRODUCT_NAME.includes(searchBar.value)
            })

            return searchFilter;
        }
    });


    // 先備份
    // const filteredProducts = computed(function(){
    //     if(currentCategory.value === '所有商品'){
    //         if(searchBar.value == ''){
    //             return products.value;
    //         }else{
    //             return products.value.filter(function(item) {
    //                 return item.productName.includes(searchBar.value);
    //             });
    //         }
    //     }else{
    //         // 第一次過濾類別
    //         let styleFilter = products.value.filter(function(item) {
    //             return item.productStyle === currentCategory.value;
    //         });
    //         // 第二次再過濾搜尋條
    //         let searchFilter = styleFilter.filter(function(i){
    //             return i.productName.includes(searchBar.value)
    //         })

    //         return searchFilter;
    //     }
    // });

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
    // function setCategory(category) {
    //     currentCategory.value = category;
    //     currentPage.value = 1;

    //     console.log(category);
    // }

    function setCategory(category) {
        currentCategory.value = category;
        currentPage.value = 1;
        // console.log("Category set to:", category);
        // console.log("Filtered products:", filteredProducts.value);
        // console.log("Paginated products:", paginatedProducts.value);
        // console.log("Total pages:", totalPages.value);
    }


    // API
    // 本機
    const url = 'http://localhost/thd104/g1/public/php/mall_select.php';
    
    // 上伺服器
    // const url = 'php/mall_select.php';

    fetch(url)
        .then(response => response.json())
        .then(response => {

            products.value = response;
            cartStore.setProductsForMitem(response);
        })
        .catch(error => {
            console.error('Error:', error);
        });


    // 會員狀態
    const memberId = ref()

    memberId.value = sessionStorage.getItem('member_ID')


            
    const showItems = function(e){
        // console.log(e.target);
        // console.log(products.value);
        // console.log(items.value[2]);
        // console.log(items.value);
        // console.log(cartStore.productsForMitem);
        // console.log(memberId.value);

    }

    // 按下"加入購物車"的提示動畫
    // const addToCartClass = ref(false)
    // const addToCartAnimateToggle = function(){
    //     addToCartClass.value = !addToCartClass.value
    // }

    const showSuccessModal = ref(false);

    const cartAnimate = function(){
        showSuccessModal.value = true;
        setTimeout(() => {
            showSuccessModal.value = false;
         }, 500);
    }
    const closeModal = () => {
        showSuccessModal.value = false;
    };

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

<style lang="scss" scoped>
   
   .modal {
    display: block; 
    position: fixed; 
    z-index: 12; 
    left: 0;
    top: 0;
    background-color: rgba(0, 0, 0, .1); 
}

.modal_content {
    margin: 0 auto;
    margin-top: 17%;
    background-color:#B69B85;
    width: 165px;
    border: none;
    text-align: center;
    padding: 16px;
    border-radius: 8px;
    animation: rotate .5s linear infinite alternate;
    display: flex;
    img{
    width:22px;
    }
    p{    
    font-size: 16px;
    letter-spacing: .5px;
    text-align: center;
    margin: 0 auto;
    color: white;
    position: relative;}
}

@keyframes rotate {
  0% {
    transform: rotate(-5deg);
  }
  100% {
    transform: rotate(5deg); 
  }
}

.close {
    display: none;
}

</style>