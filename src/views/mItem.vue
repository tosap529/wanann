<template>
    <div>
        <div class="mitem_wrapper wrapper">
        <section class="mitem_sec">

            <div class="mitem_main">

                <div class="mitem_photo">
                    <ul class="mitem_photo_small">
                        <li><img src="@/img/mall/mall_product1_1.jpg"></li>
                        <li><img src="@/img/mall/mall_product1_2.jpg"></li>
                        <li><img src="@/img/mall/mall_product1_3.jpg"></li>
                    </ul>
                    <div class="mitem_photo_big">
                        <img src="@/img/mall/mall_product1_1.jpg">
                    </div>
                </div>

                <div class="mitem_product">
                    <h1>浣安手工香皂</h1>
                    <h2>NTD200</h2>
                    <p><i class="fa-solid fa-thumbtack mitem_pin"></i>天然香潔，親手愛呵護。</p>
                    <p><i class="fa-solid fa-thumbtack mitem_pin"></i>淨化心靈，手工皂香。</p>
                    <h3>款式</h3>

                    <div class="mitem_design">
                        <h4>經典款</h4>
                    </div>

                    <h3>數量</h3>

                    <div class="cal">
                        <i class="fa-solid fa-minus cal_btn"></i>
                        <div class="cal_count">1</div>
                        <i class="fa-solid fa-plus cal_btn"></i>
                    </div>

                    <div class="mitem_btn">
                        <button class="btn mitem_btn"><i class="fa-solid fa-cart-shopping mitem_add_to_cart"></i>加入購物車</button>
                        <button class="btn mitem_btn">直接購買</button>
                    </div>
                </div>

            </div>

            <div class="mitem_tab tab">
                <ul>
                    <li><a href="#">商品敘述</a></li>
                    <li><a href="#">款式說明</a></li>
                    <li><a href="#">運送方式</a></li>
                </ul>
            </div>
            <ol class="mitem_text">
                <li><p>純天然成分，呵護您的肌膚，賦予自然清新香氣。</p></li>
                <li><p>手工製作，每塊香皂獨一無二，富含滋潤護膚精華。</p></li>
            </ol>

        </section>
    </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
    @import '@/sass/main.scss';
</style>