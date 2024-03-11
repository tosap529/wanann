<template>
    <div>
        <ModalLogin @ModalLogin="isLogin()" v-show="isLoginModalShow" />
        <DefaultHeader header-title-zh="商城" header-title-eng="Mall" :bgi="banner_url" />
        <wrapper class="mitem_wrapper wrapper">
            <section class="mitem_sec">

                <div class="mitem_main" v-if="productItem[0]">

                    <div class="mitem_photo">
                        <ul class="mitem_photo_small">
                            <li v-on:click="bigPhotoChange"><img v-bind:src="productItem[0].PRODUCT_PIC1"></li>
                            <li v-on:click="bigPhotoChange"><img v-bind:src="productItem[0].PRODUCT_PIC2"></li>
                            <li v-on:click="bigPhotoChange"><img v-bind:src="productItem[0].PRODUCT_PIC3"></li>
                        </ul>
                        <div class="mitem_photo_big">
                            <img v-bind:src="bigPhotoSrc">
                        </div>
                    </div>

                    <div class="mitem_product">
                        <h1>{{ productItem[0].PRODUCT_NAME }}</h1>
                        <h2>NTD {{ productItem[0].PRODUCT_PRICE }}</h2>
                        <p><font-awesome-icon class="mitem_pin" :icon="['fas', 'thumbtack']" />{{ productItem[0].SLOGAN1 }}</p>
                        <p><font-awesome-icon class="mitem_pin" :icon="['fas', 'thumbtack']" />{{ productItem[0].SLOGAN2 }}</p>
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
                            <button class="btn mitem_btn"  @click="cartStore.addToCartMitem(productItem[0], quantity)" v-on:click="cartAnimate"><i class="fa-solid fa-cart-shopping mitem_add_to_cart"></i>加入購物車<div v-if="showSuccessModal" class="modal">
                                <div class="modal_content">
                                    <span class="close" @click="closeModal">&times;</span>
                                    <img src="@/img/logo_title.svg" alt="logo">
                                    <p>已加入購物車</p>
                                </div>
                            </div></button>
                            <!-- <button class="btn mitem_btn"  v-on:click="showItems"><i class="fa-solid fa-cart-shopping mitem_add_to_cart"></i>加入購物車</button> -->
                            <!-- <router-link class="btn mitem_btn" :to="{ name: 'mPay1' }" @click="cartStore.addToCartMitem(productItem, quantity)">直接購買</router-link> -->
                            <button class="btn mitem_btn"@click="cartStore.addToCartMitem(productItem[0], quantity)"  v-on:click="isLogin">直接購買</button>
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

                    <ol v-show="aboutProduct == '商品敘述'" class="mitem_text" v-if="productItem[0]">
                        <li><p>{{ productItem[0].PRODUCT_SUBCONTENT1 }}</p></li>
                        <li><p>{{ productItem[0].PRODUCT_SUBCONTENT2 }}</p></li>
                    </ol>

                    <ol v-show="aboutProduct == '款式說明'" class="mitem_text" v-if="productItem[0]">
                        <li><p>{{ productItem[0].PRODUCT_CONTENT }}</p></li>
                    </ol>

                    <ol v-if="aboutProduct == '運送方式'" class="mitem_text">
                        <li><p>宅配到府</p></li>
                    </ol>

                </div>

            </section>
        </wrapper>
        <DefaultFooter />
    </div>
</template>

<script setup>
    // 設置header及footer
    import DefaultHeader from '@/layouts/header.vue';
    import wrapper from '@/layouts/wrapper.vue';
    import DefaultFooter from '@/layouts/footer.vue';
    import BannerUrl  from '@/img/mall/mall_banner.jpg';
    const banner_url = BannerUrl;

    import { useRouter } from 'vue-router';
    const router = useRouter();

    import { ref, onMounted, onBeforeMount, onBeforeUpdate } from 'vue'
    import { useRoute } from 'vue-router'

    const route = useRoute();

    import { useCartStore } from '@/stores/cartStore.js';
    const cartStore = useCartStore();

    // 登入燈箱
    import ModalLogin from '@/components/ModalLogin.vue'; 


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

    const productId = route.params.ID;
    const productItem = ref([]);

    onMounted(() => {

        // API
        // 本機
        const url = `http://localhost/thd104/g1/public/php/mItem_select.php?productId=${productId}`;

        // 上伺服器
        // const url = 'public/php/mItem_select.php?productId=${productId}`;

        fetch(url)
            .then(response => response.json())
            .then(response => {

                productItem.value = response;

                bigPhotoSrc.value = productItem.value[0].PRODUCT_PIC1
            })
            .catch(error => {
                console.error('Error:', error);
            });
       

    })

    const aboutProduct = ref('商品敘述');

    const bigPhotoSrc = ref('');

    const tab_change = function(e) {
        aboutProduct.value = e.target.innerText;
    }

    const bigPhotoChange =function(e){
        bigPhotoSrc.value = e.target.src

    }



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


    // 直接購買按鈕
    const isLoginModalShow = ref(false);
    
    const isLogin = function(){
        // console.log(e);
        const memberID = sessionStorage.getItem('member_ID');

        if(memberID){
            router.push({ name: 'mPay1' });
        }else{
            // alert('請先登入會員')

            if(isLoginModalShow.value == false){
                alert('請先登入會員')
                isLoginModalShow.value = !isLoginModalShow.value;
            }else{
                isLoginModalShow.value = !isLoginModalShow.value;
            }

        }
    }


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

<style lang="scss" scoped>
   
   .modal {
        display: block; 
        position: fixed; 
        z-index: 12; 
        left: 0;
        top: 0;
        background-color: rgba(0, 0, 0, .5); 
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







































<!--------------------------------- 備份 --------------------------------------->


<!-- <template> -->
    <!-- <div>
        <ModalLogin @ModalLogin="isLogin()" v-show="isLoginModalShow" />
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
                            <button class="btn mitem_btn"  @click="cartStore.addToCartMitem(productItem, quantity)" v-on:click="showItems"><i class="fa-solid fa-cart-shopping mitem_add_to_cart"></i>加入購物車</button> -->
                            <!-- <button class="btn mitem_btn"  v-on:click="showItems"><i class="fa-solid fa-cart-shopping mitem_add_to_cart"></i>加入購物車</button> -->
                            <!-- <router-link class="btn mitem_btn" :to="{ name: 'mPay1' }" @click="cartStore.addToCartMitem(productItem, quantity)">直接購買</router-link> -->
                            <!-- <button class="btn mitem_btn"@click="cartStore.addToCartMitem(productItem, quantity)"  v-on:click="isLogin">直接購買</button>
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

            </section>
        </wrapper>
        <DefaultFooter />
    </div> -->
<!-- </template> -->

<!-- <script setup>
    // 設置header及footer
    import DefaultHeader from '@/layouts/header.vue';
    import wrapper from '@/layouts/wrapper.vue';
    import DefaultFooter from '@/layouts/footer.vue';
    import BannerUrl  from '@/img/mall/mall_banner.jpg';
    const banner_url = BannerUrl;

    import { useRouter } from 'vue-router';
    const router = useRouter();

    import { ref, onMounted, onBeforeMount } from 'vue'
    import { useRoute } from 'vue-router'

    const route = useRoute();

    import { useCartStore } from '@/stores/cartStore.js';
    const cartStore = useCartStore();

    // 登入燈箱
    import ModalLogin from '@/components/ModalLogin.vue'; 

    

    //商城頁過來的單一商品資料 
    const productItem = ref([]);

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

    const productId = route.params.ID;
    // 找到商城過來的那個商品
    // 放入productItem
    productItem.value = getSingleProduct(productId);

    bigPhotoSrc.value = productItem.value?.PRODUCT_PIC1

    function getSingleProduct(productId) {
        return cartStore.productsForMitem.find(p => p.ID == parseInt(productId));
    }


    const tab_change = function(e) {
        aboutProduct.value = e.target.innerText;
    }

    const bigPhotoChange =function(e){
        bigPhotoSrc.value = e.target.src

    }


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


    // 直接購買按鈕
    const isLoginModalShow = ref(false);
    
    const isLogin = function(){
        // console.log(e);
        const memberID = sessionStorage.getItem('member_ID');

        if(memberID){
            router.push({ name: 'mPay1' });
        }else{
            // alert('請先登入會員')

            if(isLoginModalShow.value == false){
                alert('請先登入會員')
                isLoginModalShow.value = !isLoginModalShow.value;
            }else{
                isLoginModalShow.value = !isLoginModalShow.value;
            }

        }
    }

    

</script> -->