<template>
    <div>
        <DefaultHeader header-title-zh="商城" header-title-eng="Mall" :bgi="banner_url" />
        <wrapper class="mitem_wrapper wrapper">
            <section class="mitem_sec">

                <div class="mitem_main">

                    <div class="mitem_photo">
                        <ul class="mitem_photo_small">
                            <li v-on:click="bigPhotoChange"><img v-bind:src="productItem.PRODUCT_PIC1"></li>
                            <li v-on:click="bigPhotoChange"><img v-bind:src="productItem.PRODUCT_PIC2"></li>
                            <li v-on:click="bigPhotoChange"><img v-bind:src="productItem.PRODUCT_PIC3"></li>
                        </ul>
                        <div class="mitem_photo_big">
                            <img v-bind:src="bigPhotoSrc">
                        </div>
                    </div>

                    <div class="mitem_product">
                        <h1>{{ productItem.PRODUCT_NAME }}</h1>
                        <h2>NTD {{ productItem.PRODUCT_PRICE }}</h2>
                        <p><font-awesome-icon class="mitem_pin" :icon="['fas', 'thumbtack']" />{{ productItem.SLOGAN1 }}</p>
                        <p><font-awesome-icon class="mitem_pin" :icon="['fas', 'thumbtack']" />{{ productItem.SLOGAN2 }}</p>
                        <h3>款式</h3>

                        <div class="mitem_design">
                            <h4>經典款</h4>
                        </div>

                        <h3>數量</h3>

                        <div class="cal">
                            <font-awesome-icon @click="quantityMinus" class="cal_btn" :icon="['fas', 'minus']" />
                            <div class="cal_count">{{ quantity }}</div>
                            <font-awesome-icon @click="quantityPlus" class="cal_btn" :icon="['fas', 'plus']" />
                        </div>

                        <div class="mitem_btns">
                            <button class="btn mitem_btn"  @click="cartStore.addToCartMitem(product, quantity)" v-on:click="showItems"><i class="fa-solid fa-cart-shopping mitem_add_to_cart"></i>加入購物車</button>
                            <!-- <button class="btn mitem_btn">直接購買</button> -->
                            <router-link class="btn mitem_btn" :to="{ name: 'mPay1' }" @click="cartStore.addToCartMitem(product, quantity)">直接購買</router-link>
                        </div>
                    </div>

                </div>


                <div class="mitem_product_des">
                    <div class="mitem_tab tab">
                        <ul>
                            <li v-on:click.prevent="tab_change" v-bind:class="{'tab_on': aboutProduct == '商品敘述'}"><a href="#">商品敘述</a></li>
                            <li v-on:click.prevent="tab_change" v-bind:class="{'tab_on': aboutProduct == '款式說明'}"><a href="#">款式說明</a></li>
                            <li v-on:click.prevent="tab_change" v-bind:class="{'tab_on': aboutProduct == '運送方式'}"><a href="#">運送方式</a></li>
                        </ul>
                    </div>

                    <ol v-if="aboutProduct == '商品敘述'" class="mitem_text">
                        <li><p>{{ productItem.PRODUCT_SUBCONTENT1 }}</p></li>
                        <li><p>{{ productItem.PRODUCT_SUBCONTENT2 }}</p></li>
                    </ol>

                    <ol v-if="aboutProduct == '款式說明'" class="mitem_text">
                        <li><p>{{ productItem.PRODUCT_CONTENT }}</p></li>
                    </ol>

                    <ol v-if="aboutProduct == '運送方式'" class="mitem_text">
                        <li><p>宅配到府</p></li>
                    </ol>

                </div>





                <!-- <div class="mitem_tab tab">
                    <ul>
                        <li v-on:click.prevent="tab_change" v-bind:class="{'tab_on': aboutProduct == '商品敘述'}"><a href="#">商品敘述</a></li>
                        <li v-on:click.prevent="tab_change" v-bind:class="{'tab_on': aboutProduct == '款式說明'}"><a href="#">款式說明</a></li>
                        <li v-on:click.prevent="tab_change" v-bind:class="{'tab_on': aboutProduct == '運送方式'}"><a href="#">運送方式</a></li>
                    </ul>
                </div>
                <ol v-if="aboutProduct == '商品敘述'" class="mitem_text">
                    <li><p>{{ productItem.productDes1 }}</p></li>
                    <li><p>{{ productItem.productDes2 }}</p></li>
                </ol>

                <ol v-if="aboutProduct == '款式說明'" class="mitem_text">
                    <li><p>{{ productItem.productCategory }}</p></li>
                </ol>

                <ol v-if="aboutProduct == '運送方式'" class="mitem_text">
                    <li><p>宅配到府</p></li>
                </ol> -->

            </section>
        </wrapper>
        <DefaultFooter />
    </div>
</template>

<script setup>
    // 設置header及footer
    import DefaultHeader from '@/layouts/header.vue'; // 引入header(請照抄)
    import wrapper from '@/layouts/wrapper.vue'; // 引入wrapper滑動(請照抄)
    import DefaultFooter from '@/layouts/footer.vue'; // 引入footer(請照抄)
    import BannerUrl  from '@/img/mall/mall_banner.jpg'; // 更改成banner路徑
    const banner_url = BannerUrl; // banner路徑令變數(請照抄)

    import { ref, onMounted, onBeforeMount } from 'vue'
    import { useRoute } from 'vue-router'

    import { useCartStore } from '@/stores/cartStore.js';
    const cartStore = useCartStore();

    const route = useRoute();

    //商城頁過來的單一商品資料 
    const productItem = ref([]);
    
    // const allProducts = ref([])


    // 想要選出的 productId 列表
    // const selectedProductIds = [3, 5];

    // // 使用 filter 函數選出特定的物件
    // const selectedProducts = allProducts.value.filter(product => 
    //     selectedProductIds.includes(product.productId)
    // );


    const aboutProduct = ref('商品敘述');

    const bigPhotoSrc = ref('')

    // 單一商品
    const product = ref([
                    {
                        productId   : 1,
                        productName : '浣安手工香皂',
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
    ])

    const allProducts = ref([])

    const tab_change = function(e) {
        aboutProduct.value = e.target.innerText;
    }

    const bigPhotoChange =function(e){
        bigPhotoSrc.value = e.target.src

    }

    // 把商城過來的商品資料放入陣列
    onBeforeMount(() => {
        const url = 'http://localhost/projectg1/public/php/mall.php';
    
        
        fetch(url)
            .then(response => response.json())
            .then(response => {
                // console.log('註冊成功 js');
            // items.value = response;
            allProducts.value = response;
                })
                .catch(error => {
                    console.error('Error:', error);
                });
        
        fetch(url)
            .then(response => response.json())
            .then(response => {
                allProducts.value = response;

                // 資料接收後再執行
                const productId = route.params.ID;
                productItem.value = getSingleProduct(productId);
                bigPhotoSrc.value = productItem.value.PRODUCT_PIC1
            })
            .catch(error => {
                console.error('Error:', error);
            });

        //  // 找到商城過來的那個商品
        // // 放入productItem
        function getSingleProduct(productId) {
            return allProducts.value.find(p => p.ID == parseInt(productId));
        }
    })

    

    // 數量條
    const quantity = ref(1)

    const quantityPlus = function() {
        quantity.value += 1
    }

    const quantityMinus = function(){
        if( quantity.value > 1 ){
            quantity.value -= 1
        }
    }


    // API

    const items = ref();

    // const url = 'http://localhost/projectg1/public/php/mall.php';
    
        
    // fetch(url)
    //     .then(response => response.json())
    //     .then(response => {
    //         // console.log('註冊成功 js');
    //     // items.value = response;
    //     allProducts.value = response;
    //         })
    //         .catch(error => {
    //             console.error('Error:', error);
    //         });

            // console.log(products);   
    const showItems = function(){
        // console.log(products.value);
        // console.log(items.value);
        // console.log(allProducts.value[0].ID);
        // console.log(route.params.ID);
        console.log(productItem.PRODUCT_PRICE);
        // console.log(allProducts.value);
        // console.log(allProducts.value.find(function(p){console.log(p);}));
        // return allProducts.value.find(function(p){console.log(p.ID);});
    }

</script>





































<!-- 備份 -->

<!-- <template>
    <div>
        <DefaultHeader header-title-zh="商城" header-title-eng="Mall" :bgi="banner_url" />
        <wrapper class="mitem_wrapper wrapper">
            <section class="mitem_sec">

                <div class="mitem_main">

                    <div class="mitem_photo">
                        <ul class="mitem_photo_small">
                            <li v-on:click="bigPhotoChange"><img v-bind:src="product[0].productSrc1"></li>
                            <li v-on:click="bigPhotoChange"><img v-bind:src="product[0].productSrc2"></li>
                            <li v-on:click="bigPhotoChange"><img v-bind:src="product[0].productSrc3"></li>
                        </ul>
                        <div class="mitem_photo_big">
                            <img v-bind:src="bigPhotoSrc">
                        </div>
                    </div>

                    <div class="mitem_product">
                        <h1>{{ product[0].productName }}</h1>
                        <h2>{{ product[0].productPrice }}</h2>
                        <p><font-awesome-icon class="mitem_pin" :icon="['fas', 'thumbtack']" />{{ product[0].productSlogan1 }}</p>
                        <p><font-awesome-icon class="mitem_pin" :icon="['fas', 'thumbtack']" />{{ product[0].productSlogan2 }}</p>
                        <h3>款式</h3>

                        <div class="mitem_design">
                            <h4>經典款</h4>
                        </div>

                        <h3>數量</h3>

                        <div class="cal">
                            <font-awesome-icon class="cal_btn" :icon="['fas', 'minus']" />
                            <div class="cal_count">1</div>
                            <font-awesome-icon class="cal_btn" :icon="['fas', 'plus']" />
                        </div>

                        <div class="mitem_btns">
                            <button class="btn mitem_btn"><i class="fa-solid fa-cart-shopping mitem_add_to_cart"></i>加入購物車</button>
                            <button class="btn mitem_btn">直接購買</button>
                            <router-link class="btn mitem_btn" :to="{ name: 'mPay1' }">直接購買</router-link>
                        </div>
                    </div>

                </div>

                <div class="mitem_tab tab">
                    <ul>
                        <li v-on:click.prevent="tab_change" v-bind:class="{'tab_on': aboutProduct == '商品敘述'}"><a href="#">商品敘述</a></li>
                        <li v-on:click.prevent="tab_change" v-bind:class="{'tab_on': aboutProduct == '款式說明'}"><a href="#">款式說明</a></li>
                        <li v-on:click.prevent="tab_change" v-bind:class="{'tab_on': aboutProduct == '運送方式'}"><a href="#">運送方式</a></li>
                    </ul>
                </div>
                <ol v-if="aboutProduct == '商品敘述'" class="mitem_text">
                    <li><p>{{ product[0].productDes1 }}</p></li>
                    <li><p>{{ product[0].productDes2 }}</p></li>
                </ol>

                <ol v-if="aboutProduct == '款式說明'" class="mitem_text">
                    <li><p>{{ product[0].productCategory }}</p></li>
                </ol>

                <ol v-if="aboutProduct == '運送方式'" class="mitem_text">
                    <li><p>宅配到府</p></li>
                </ol>

            </section>
        </wrapper>
        <DefaultFooter />
    </div>
</template>

<script setup>
    // 設置header及footer
    import DefaultHeader from '@/layouts/header.vue'; // 引入header(請照抄)
    import wrapper from '@/layouts/wrapper.vue'; // 引入wrapper滑動(請照抄)
    import DefaultFooter from '@/layouts/footer.vue'; // 引入footer(請照抄)
    import BannerUrl  from '@/img/mall/mall_banner.jpg'; // 更改成banner路徑
    const banner_url = BannerUrl; // banner路徑令變數(請照抄)

    import { ref, onMounted } from 'vue'


    const aboutProduct = ref('商品敘述');

    const bigPhotoSrc = ref('')

    // 單一商品
    const product = ref([
                    {
                        productId   : 1,
                        productName : '浣安手工香皂',
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
    ])

    const tab_change = function(e) {
        aboutProduct.value = e.target.innerText;
    }

    const bigPhotoChange =function(e){
        bigPhotoSrc.value = e.target.src
    }

    onMounted(() => {
        bigPhotoSrc.value = product.value[0].productSrc1
    });


</script> -->

<!-- <script>
    export default {
        data(){
            return{
                // 為了切換下方tab
                aboutProduct: '商品敘述',

                // 大圖路徑
                bigPhotoSrc : '',

                // 產品資料陣列
                product: [
                    {
                        productId   : 1,
                        productName : '浣安手工香皂',
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
                ],
            }
        },
        methods:{
            tab_change(e){
                this.aboutProduct = e.target.innerText;
            },
            bigPhotoChange(e){
                this.bigPhotoSrc = e.target.src
            },
        },
        mounted(){
            this.bigPhotoSrc = this.product[0].productSrc1
        },

    }
</script> -->


































<!-- 先留著 -->
<!-- <template> -->
    <!-- <div>
        <DefaultHeader header-title-zh="商城" header-title-eng="Mall" :bgi="banner_url" />
        <wrapper class="mitem_wrapper wrapper">
            <section class="mitem_sec">

                <div class="mitem_main">

                    <div class="mitem_photo">
                        <ul class="mitem_photo_small">
                            <li v-on:click="bigPhotoChange"><img v-bind:src="productItem.productSrc1"></li>
                            <li v-on:click="bigPhotoChange"><img v-bind:src="productItem.productSrc2"></li>
                            <li v-on:click="bigPhotoChange"><img v-bind:src="productItem.productSrc3"></li>
                        </ul>
                        <div class="mitem_photo_big">
                            <img v-bind:src="bigPhotoSrc">
                        </div>
                    </div>

                    <div class="mitem_product">
                        <h1>{{ productItem.productName }}</h1>
                        <h2>NTD {{ productItem.productPrice }}</h2>
                        <p><font-awesome-icon class="mitem_pin" :icon="['fas', 'thumbtack']" />{{ productItem.productSlogan1 }}</p>
                        <p><font-awesome-icon class="mitem_pin" :icon="['fas', 'thumbtack']" />{{ productItem.productSlogan2 }}</p>
                        <h3>款式</h3>

                        <div class="mitem_design">
                            <h4>經典款</h4>
                        </div>

                        <h3>數量</h3>

                        <div class="cal">
                            <font-awesome-icon @click="quantityMinus" class="cal_btn" :icon="['fas', 'minus']" />
                            <div class="cal_count">{{ quantity }}</div>
                            <font-awesome-icon @click="quantityPlus" class="cal_btn" :icon="['fas', 'plus']" />
                        </div>

                        <div class="mitem_btns">
                            <button class="btn mitem_btn"  @click="cartStore.addToCartMitem(productItem, quantity)" v-on:click="showItems"><i class="fa-solid fa-cart-shopping mitem_add_to_cart"></i>加入購物車</button>
                             <button class="btn mitem_btn">直接購買</button> -->
                            <!-- <router-link class="btn mitem_btn" :to="{ name: 'mPay1' }" @click="cartStore.addToCartMitem(productItem, quantity)">直接購買</router-link>
                        </div>
                    </div>

                </div>


                <div class="mitem_product_des">
                    <div class="mitem_tab tab">
                        <ul>
                            <li v-on:click.prevent="tab_change" v-bind:class="{'tab_on': aboutProduct == '商品敘述'}"><a href="#">商品敘述</a></li>
                            <li v-on:click.prevent="tab_change" v-bind:class="{'tab_on': aboutProduct == '款式說明'}"><a href="#">款式說明</a></li>
                            <li v-on:click.prevent="tab_change" v-bind:class="{'tab_on': aboutProduct == '運送方式'}"><a href="#">運送方式</a></li>
                        </ul>
                    </div>

                    <ol v-if="aboutProduct == '商品敘述'" class="mitem_text">
                        <li><p>{{ productItem.productDes1 }}</p></li>
                        <li><p>{{ productItem.productDes2 }}</p></li>
                    </ol>

                    <ol v-if="aboutProduct == '款式說明'" class="mitem_text">
                        <li><p>{{ productItem.productCategory }}</p></li>
                    </ol>

                    <ol v-if="aboutProduct == '運送方式'" class="mitem_text">
                        <li><p>宅配到府</p></li>
                    </ol>

                </div> -->





                <!-- <div class="mitem_tab tab">
                    <ul>
                        <li v-on:click.prevent="tab_change" v-bind:class="{'tab_on': aboutProduct == '商品敘述'}"><a href="#">商品敘述</a></li>
                        <li v-on:click.prevent="tab_change" v-bind:class="{'tab_on': aboutProduct == '款式說明'}"><a href="#">款式說明</a></li>
                        <li v-on:click.prevent="tab_change" v-bind:class="{'tab_on': aboutProduct == '運送方式'}"><a href="#">運送方式</a></li>
                    </ul>
                </div>
                <ol v-if="aboutProduct == '商品敘述'" class="mitem_text">
                    <li><p>{{ productItem.productDes1 }}</p></li>
                    <li><p>{{ productItem.productDes2 }}</p></li>
                </ol>

                <ol v-if="aboutProduct == '款式說明'" class="mitem_text">
                    <li><p>{{ productItem.productCategory }}</p></li>
                </ol>

                <ol v-if="aboutProduct == '運送方式'" class="mitem_text">
                    <li><p>宅配到府</p></li>
                </ol> -->

            <!-- </section>
        </wrapper>
        <DefaultFooter />
    </div>
</template> -->

<!-- <script setup>
    // 設置header及footer
    import DefaultHeader from '@/layouts/header.vue'; // 引入header(請照抄)
    import wrapper from '@/layouts/wrapper.vue'; // 引入wrapper滑動(請照抄)
    import DefaultFooter from '@/layouts/footer.vue'; // 引入footer(請照抄)
    import BannerUrl  from '@/img/mall/mall_banner.jpg'; // 更改成banner路徑
    const banner_url = BannerUrl; // banner路徑令變數(請照抄)

    import { ref, onMounted, onBeforeMount } from 'vue'
    import { useRoute } from 'vue-router'

    import { useCartStore } from '@/stores/cartStore.js';
    const cartStore = useCartStore();

    const route = useRoute();

    //商城頁過來的單一商品資料 
    const productItem = ref();
    
    const allProducts = ref([
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

    // 找到商城過來的那個商品
    // 放入productItem
    function getSingleProduct(productId) {
        return allProducts.value.find(p => p.productId === parseInt(productId));
    }

    const aboutProduct = ref('商品敘述');

    const bigPhotoSrc = ref('')

    // 單一商品
    // const product = ref([
    //                 {
    //                     productId   : 1,
    //                     productName : '浣安手工香皂',
    //                     productPrice: 200,
    //                     productSrc1 : new URL("@/img/mall/mall_product1_1.jpg", import.meta.url).href,
    //                     productSrc2 : new URL("@/img/mall/mall_product1_2.jpg", import.meta.url).href,
    //                     productSrc3 : new URL("@/img/mall/mall_product1_3.jpg", import.meta.url).href,
    //                     productSlogan1 : '天然香潔，親手愛呵護。',
    //                     productSlogan2 : '淨化心靈，手工皂香。',
    //                     productDes1 : `純天然成分，呵護您的肌膚，賦予自然清新香氣。`,
    //                     productDes2 : `手工製作，每塊香皂獨一無二，富含滋潤護膚精華。`,
    //                     productCategory: '經典款香皂融合薰衣草與迷迭香精油，結合滋養橄欖油，帶來舒緩放鬆的沐浴體驗。',
    //                     productStyle : '清潔工具',
    //                 },
    // ])

    const tab_change = function(e) {
        aboutProduct.value = e.target.innerText;
    }

    const bigPhotoChange =function(e){
        bigPhotoSrc.value = e.target.src

    }

    onMounted(() => {
        // bigPhotoSrc.value = product.value[0].productSrc1

        bigPhotoSrc.value = productItem.value.productSrc1
    });

    // 把商城過來的商品資料放入陣列
    onBeforeMount(() => {
        const productId = route.params.productId;
        productItem.value = getSingleProduct(productId);
    })

    // 數量條
    const quantity = ref(1)

    const quantityPlus = function() {
        quantity.value += 1
    }

    const quantityMinus = function(){
        if( quantity.value > 1 ){
            quantity.value -= 1
        }
    }


    // API

    const items = ref();

    const url = 'http://localhost/projectg1/public/php/mall.php';
    
        
    fetch(url)
        .then(response => response.json())
        .then(response => {
            // console.log('註冊成功 js');
        // items.value = response;
        products.value = response;
            })
            .catch(error => {
                console.error('Error:', error);
            });

            console.log(products);   
    const showItems = function(){
        console.log(products.value);
        // console.log(items.value[2]);
        // console.log(products.value);
    }

</script> -->





































<!-- 備份 -->

<!-- <template>
    <div>
        <DefaultHeader header-title-zh="商城" header-title-eng="Mall" :bgi="banner_url" />
        <wrapper class="mitem_wrapper wrapper">
            <section class="mitem_sec">

                <div class="mitem_main">

                    <div class="mitem_photo">
                        <ul class="mitem_photo_small">
                            <li v-on:click="bigPhotoChange"><img v-bind:src="product[0].productSrc1"></li>
                            <li v-on:click="bigPhotoChange"><img v-bind:src="product[0].productSrc2"></li>
                            <li v-on:click="bigPhotoChange"><img v-bind:src="product[0].productSrc3"></li>
                        </ul>
                        <div class="mitem_photo_big">
                            <img v-bind:src="bigPhotoSrc">
                        </div>
                    </div>

                    <div class="mitem_product">
                        <h1>{{ product[0].productName }}</h1>
                        <h2>{{ product[0].productPrice }}</h2>
                        <p><font-awesome-icon class="mitem_pin" :icon="['fas', 'thumbtack']" />{{ product[0].productSlogan1 }}</p>
                        <p><font-awesome-icon class="mitem_pin" :icon="['fas', 'thumbtack']" />{{ product[0].productSlogan2 }}</p>
                        <h3>款式</h3>

                        <div class="mitem_design">
                            <h4>經典款</h4>
                        </div>

                        <h3>數量</h3>

                        <div class="cal">
                            <font-awesome-icon class="cal_btn" :icon="['fas', 'minus']" />
                            <div class="cal_count">1</div>
                            <font-awesome-icon class="cal_btn" :icon="['fas', 'plus']" />
                        </div>

                        <div class="mitem_btns">
                            <button class="btn mitem_btn"><i class="fa-solid fa-cart-shopping mitem_add_to_cart"></i>加入購物車</button>
                            <button class="btn mitem_btn">直接購買</button>
                            <router-link class="btn mitem_btn" :to="{ name: 'mPay1' }">直接購買</router-link>
                        </div>
                    </div>

                </div>

                <div class="mitem_tab tab">
                    <ul>
                        <li v-on:click.prevent="tab_change" v-bind:class="{'tab_on': aboutProduct == '商品敘述'}"><a href="#">商品敘述</a></li>
                        <li v-on:click.prevent="tab_change" v-bind:class="{'tab_on': aboutProduct == '款式說明'}"><a href="#">款式說明</a></li>
                        <li v-on:click.prevent="tab_change" v-bind:class="{'tab_on': aboutProduct == '運送方式'}"><a href="#">運送方式</a></li>
                    </ul>
                </div>
                <ol v-if="aboutProduct == '商品敘述'" class="mitem_text">
                    <li><p>{{ product[0].productDes1 }}</p></li>
                    <li><p>{{ product[0].productDes2 }}</p></li>
                </ol>

                <ol v-if="aboutProduct == '款式說明'" class="mitem_text">
                    <li><p>{{ product[0].productCategory }}</p></li>
                </ol>

                <ol v-if="aboutProduct == '運送方式'" class="mitem_text">
                    <li><p>宅配到府</p></li>
                </ol>

            </section>
        </wrapper>
        <DefaultFooter />
    </div>
</template>

<script setup>
    // 設置header及footer
    import DefaultHeader from '@/layouts/header.vue'; // 引入header(請照抄)
    import wrapper from '@/layouts/wrapper.vue'; // 引入wrapper滑動(請照抄)
    import DefaultFooter from '@/layouts/footer.vue'; // 引入footer(請照抄)
    import BannerUrl  from '@/img/mall/mall_banner.jpg'; // 更改成banner路徑
    const banner_url = BannerUrl; // banner路徑令變數(請照抄)

    import { ref, onMounted } from 'vue'


    const aboutProduct = ref('商品敘述');

    const bigPhotoSrc = ref('')

    // 單一商品
    const product = ref([
                    {
                        productId   : 1,
                        productName : '浣安手工香皂',
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
    ])

    const tab_change = function(e) {
        aboutProduct.value = e.target.innerText;
    }

    const bigPhotoChange =function(e){
        bigPhotoSrc.value = e.target.src
    }

    onMounted(() => {
        bigPhotoSrc.value = product.value[0].productSrc1
    });


</script> -->

<!-- <script>
    export default {
        data(){
            return{
                // 為了切換下方tab
                aboutProduct: '商品敘述',

                // 大圖路徑
                bigPhotoSrc : '',

                // 產品資料陣列
                product: [
                    {
                        productId   : 1,
                        productName : '浣安手工香皂',
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
                ],
            }
        },
        methods:{
            tab_change(e){
                this.aboutProduct = e.target.innerText;
            },
            bigPhotoChange(e){
                this.bigPhotoSrc = e.target.src
            },
        },
        mounted(){
            this.bigPhotoSrc = this.product[0].productSrc1
        },

    }
</script> -->