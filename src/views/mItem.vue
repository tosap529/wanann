<script setup>
    // 數量按鈕
    import calBar from '@/components/cal.vue'; // 確保路徑正確
    // 設置header及footer
    import DefaultHeader from '@/layouts/header.vue'; // 引入header(請照抄)
    import wrapper from '@/layouts/wrapper.vue'; // 引入wrapper滑動(請照抄)
    import DefaultFooter from '@/layouts/footer.vue'; // 引入footer(請照抄)
    import BannerUrl  from '@/img/mall/mall_banner.jpg'; // 更改成banner路徑
    const banner_url = BannerUrl; // banner路徑令變數(請照抄)

    // -----------------------------  數量按鈕  ------------------------
    // 商品單價
    // const pricePerUnit = 200;
    
    // const ItemTotalPrice = ref(pricePerUnit);

    // const handleCountUpdate = (newCount) => {
    //     ItemTotalPrice.value = pricePerUnit * newCount;
    // };
    // -----------------------------  數量按鈕  ------------------------
</script>


<template>
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

                        <!-- <div class="cal">
                            <font-awesome-icon class="cal_btn" :icon="['fas', 'minus']" />
                            <div class="cal_count">1</div>
                            <font-awesome-icon class="cal_btn" :icon="['fas', 'plus']" />
                        </div> -->
                        <!-- <calBar /> -->
                        <calBar @updateCount="handleCountUpdate" />

                        <div class="mitem_btn">
                            <button class="btn mitem_btn"><i class="fa-solid fa-cart-shopping mitem_add_to_cart"></i>加入購物車</button>
                            <!-- <button class="btn mitem_btn">直接購買</button> -->
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

<script>
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
                        productPrice: "NT$200",
                        productSrc1 : "./src/img/mall/mall_product1_1.jpg",
                        productSrc2 : "./src/img/mall/mall_product1_2.jpg",
                        productSrc3 : "./src/img/mall/mall_product1_3.jpg",
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
</script>

<style lang="scss" >

</style>