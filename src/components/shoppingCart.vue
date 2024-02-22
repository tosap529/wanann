<template>
    <div>
        <div class="cart" v-bind:class="{ 'toggle': cartStore.isCartOpen }">        

            <div class="cart-top">
                <h1 class="text-h1">購物車</h1>
                <!-- <i id="close-btn" class="fas fa-times cart-menu-close-btn"></i> -->
                <font-awesome-icon @click="closeCart" class="cart-menu-close-btn" :icon="['fas', 'xmark']"/>
            </div>

            <!-- 商品新增處 -->
            <div class="product-rows">

                <!-- <div 
                    v-for="i in cartStore.cartItems" 
                    v-bind:key="i.productId"
                    class="product-row">

                    <img  class="cart-image" v-bind:src="i.productSrc">

                    <div class="product-row-inner">
                        <h2>{{ i.productName }}</h2>

                        <div class="cart_design">
                            <h4>經典款</h4>
                        </div>

                        <div class="cal">
                            <font-awesome-icon class="cal_btn" :icon="['fas', 'minus']" />
                            <div class="cal_count">1</div>
                            <font-awesome-icon class="cal_btn" :icon="['fas', 'plus']" />
                        </div>

                    </div>

                    <div class="product-row-price">
                        <span class ="cart-price">{{ i.productPrice }}</span>
                        <i class="fa-solid fa-trash cart-item-remove-btn"></i>
                        <font-awesome-icon class="cart-item-remove-btn" :icon="['fas', 'trash']" />
                    </div>
                </div> -->

                <div class="product-row">

                    <img  class="cart-image" src="@/img/mall/mall_product1_1.jpg">

                    <div class="product-row-inner">
                        <h2>浣安手工香皂</h2>

                        <div class="cart_design">
                            <h4>經典款</h4>
                        </div>

                        <div class="cal">
                            <font-awesome-icon class="cal_btn" :icon="['fas', 'minus']" />
                            <div class="cal_count">1</div>
                            <font-awesome-icon class="cal_btn" :icon="['fas', 'plus']" />
                        </div>

                    </div>

                    <div class="product-row-price">
                        <span class ="cart-price">NT$200</span>
                        <i class="fa-solid fa-trash cart-item-remove-btn"></i>
                        <font-awesome-icon class="cart-item-remove-btn" :icon="['fas', 'trash']" />
                    </div>
                </div>
                

            </div>

            <div class="cart-footer">
                <div class="cart-menu-total">
                    <h2 class="cart-total">小計</h2>
                    <span class="total-price">$200</span>
                </div>
                <button class="btn purchase-btn">結帳去</button>
            </div>
        
        </div>
    </div>
</template>

<script setup>
    import { useCartStore } from '@/stores/cartStore.js';

    const cartStore = useCartStore();
    
    const closeCart = function(){
        // 切換購物車的開啟狀態
        cartStore.toggleCart();
    };
</script>

<style lang="scss">
    @import '@/sass/main.scss';

    /* 購物車彈出頁 */
    div.cart{
        position: fixed;
        top: 0;
        right: -100%;

        z-index: 71;

        // 動畫
        transition: all       1s     .1s      ease;
        /*     動畫的屬性  持續時間   延遲   速度改變方式 */

        height: 100%;
        width: 600px;
        // max-width: 100%;

        padding: 20px 50px;

        background-color: $white;

        // overflow: auto;
        overflow-x: visible;

        display: flex;
        flex-direction: column;
        justify-content: space-between;

        .cart-top{
            display: flex;
            justify-content: space-between;

            padding-bottom: 20px;

            border-bottom: 2px solid darkgrey;

            margin-bottom: 20px;

            > h1{
                color: $h1;
                color: $brown;
            }

            > .cart-menu-close-btn{
                font-size: 25px;
                color: $dark-milktea;
                cursor: pointer;
            }

            > .cart-menu-close-btn:hover{
                color: $brown;
            }

        }

        div.cart-footer{
            padding-bottom: 40px;
        }

        div.cart-menu-total{
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0  1rem;
            padding-bottom: 16px;

            border-bottom: 2px solid $black;

            margin-bottom: 55px;

            > span{
                font-size: $h1;
            }
        }

        button.purchase-btn{
            margin: 0 auto;
            width: 150px;
            max-width: 100%;
            height: 50px;
        }
    }

    div.cart.toggle{
        right: 0;
    }

    /* 加入購物車的品項 */
    div.product-rows{
        margin-bottom: auto;
    }

    div.product-row{
        display: flex;
        align-items: center;

        height: auto;
        margin-bottom: 20px;
        padding: 20px;

        border-bottom: 2px dashed $dark-grey;
        > img{
            width: 120px;
            height: auto;
            border-radius: 10px;
            margin-right: 25px;
        }
    }

    div.product-row-inner{
        margin-right: auto;

        > h2{
            margin-bottom: 20px;
        }
        div.cart_design{
            width: 100px;
            max-width: 100%;
            height: 30px;

            background-color: $medium-milktea;
        
            color: $white;
            border-radius: 8px;
        
            display: flex;
            justify-content: center;
            align-items: center;
        
            margin-bottom: 15px;
        }
    }

    div.product-row-price{
        display: flex;
        flex-direction: column;
        align-items: end;
        justify-content: space-between;

        height: 110px;
        min-height: 100%;

        > .cart-item-remove-btn{
            display: block;
            font-size: 24px;
            color: $dark-milktea;
            cursor: pointer;

        }

        > .cart-item-remove-btn:hover{
            color: $brown;
        }
    }

    @media(max-width:431px){
        div.cart{
            width: 430px;
        }

        div.product-row{
            padding: 20px 5px;

            >img{
                margin-right: 10px;
            }

            >div.product-row-inner{
                >h2{
                    font-size: $h4;
                }

                >.cart_design{
                    width: 80px;
                }

                >.cal{
                    width: 120px;
                    >.cal_btn{
                        font-size: 20px;
                    }
                }
            }

        }


    }
</style>