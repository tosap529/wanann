<template>
    <div>
        <ModalLogin @ModalLogin="isLogin()" v-show="isLoginModalShow" />
        <!-- <div class="cart_outside" v-bind:class="{ 'toggle': cartStore.isCartOpen }"> -->
            <div class="cart" v-bind:class="{ 'toggle': cartStore.isCartOpen }">        

                <div class="cart_top">
                    <h1 class="text_h1">購物車</h1>
                    <font-awesome-icon @click="closeCart" class="cart_menu_close_btn" :icon="['fas', 'xmark']"/>
                </div>

                <!-- 商品新增處 -->
                <div class="product_rows">
                    <div class="cart_rows_empty" v-if=" cartStore.cartItems.length == 0 ">
                        <img src="@/img/logo_title.svg">
                        <h2>目前沒有任何商品喔</h2>
                    </div>

                    <div 
                        v-for="(i, index) in cartStore.cartItems" 
                        v-bind:key="i.ID"
                        class="product-row">

                        <img  class="cart_image" v-bind:src="i.PRODUCT_PIC1">

                        <div class="product_row_inner">
                            <h3>{{ i.PRODUCT_NAME }}</h3>

                            <div class="cart_design">
                                <h4>經典款</h4>
                            </div>

                            <div class="cal">
                                <font-awesome-icon @click="quantityMinus(index)" class="cal_btn" :icon="['fas', 'minus']" />
                                <div class="cal_count">{{ i.quantity }}</div>
                                <font-awesome-icon @click="quantityPlus(index)" class="cal_btn" :icon="['fas', 'plus']" />
                            </div>

                        </div>

                        <div class="product_row_price">
                            <span class ="cart_price">NTD {{ i.PRODUCT_PRICE * i.quantity }}</span>
                            <font-awesome-icon class="cart_item_remove_btn" :icon="['fas', 'trash']" @click="cartStore.removeFromCart(index)" />
                        </div>
                    </div>

                    <!-- <div class="product-row">

                        <img  class="cart_image" src="@/img/mall/mall_product1_1.jpg">

                        <div class="product_row_inner">
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

                        <div class="product_row_price">
                            <span class ="cart_price">NT$200</span>
                            <i class="fa-solid fa-trash cart_item_remove_btn"></i>
                            <font-awesome-icon class="cart_item_remove_btn" :icon="['fas', 'trash']" />
                        </div>
                    </div> -->
                    

                </div>

                <div class="cart_footer">
                    <div class="cart_menu_total">
                        <h3 class="cart_total">小計</h3>
                        <h2 class="total_price">NTD {{ calCartTotal }}</h2>
                    </div>
                    <!-- <router-link 
                        v-if=" cartStore.cartItems.length > 0 " 
                        @click="closeCart" :to="{ name: 'mPay1' }">

                            <button class="btn purchase_btn">結帳去</button>

                    </router-link> -->
                    <button 
                    v-if=" cartStore.cartItems.length > 0 "
                    @click="closeCart"
                    v-on:click="isLogin"
                    class="btn purchase_btn">結帳去</button>
                    <button v-else @click="cartEmpty" class="btn purchase_btn">結帳去</button>
                </div>
            
            <!-- </div> -->
        </div>    
    </div>
</template>

<script setup>
    import ModalLogin from '@/components/ModalLogin.vue'; 
    import { useRouter } from 'vue-router';
    const router = useRouter();

    import { ref, computed } from "vue";

    import { useCartStore } from '@/stores/cartStore.js';
    const cartStore = useCartStore();
    
    const closeCart = function(){
        // 切換購物車的開啟狀態
        cartStore.toggleCart();
    };

    const quantityPlus = function(index) {
        cartStore.cartItems[index].quantity += 1

        cartStore.updateLocalStorage(cartStore.cartItems);
    }

    const quantityMinus = function(index) {
        if( cartStore.cartItems[index].quantity > 1 ){
            cartStore.cartItems[index].quantity -= 1
            cartStore.updateLocalStorage(cartStore.cartItems);
        }
    }

    const calCartTotal = computed(function() {
        return cartStore.cartItems.reduce((total, item) => {
            return total + (item.PRODUCT_PRICE * item.quantity);
        }, 0);
    })

    // 購物車空的無法轉跳到結帳
    const cartEmpty = function(){
        alert('沒有選擇任何商品喔')
    }



    // 購物車結帳按鈕

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

    const isLoginModalShow = ref(false);
    

</script>

<style lang="scss">

    @import '@/sass/main.scss';

    /* 購物車彈出頁 */
    div.cart{
        position: fixed;
        top: 0;
        right: -100rem;
        // right: 0;

        z-index: 71;

        // 動畫
        transition: all       1s     .1s      ease;
        /*     動畫的屬性  持續時間   延遲   速度改變方式 */

        height: 100%;
        width: 450px;
        max-width: 100%;

        padding: 20px 50px;

        background-color: $white;

        overflow: auto;
        overflow-x: visible;

        display: flex;
        flex-direction: column;
        justify-content: space-between;

        .cart_top{
            display: flex;
            justify-content: space-between;

            padding-bottom: 10px;

            border-bottom: 2px solid darkgrey;

            > h1{
                font-size: $h2;
                color: $brown;
            }

            > .cart_menu_close_btn{
                font-size: 20px;
                color: $dark-milktea;
                cursor: pointer;
            }

            > .cart_menu_close_btn:hover{
                color: $brown;
            }

        }

        div.cart_footer{
            padding-bottom: 20px;


        }

        div.cart_menu_total{
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0  1rem;
            padding-bottom: 10px;

            border-bottom: 2px solid $black;

            margin-bottom: 20px;

            > span{
                font-size: $h1;
            }
        }

        button.purchase_btn{
            margin: 0 auto;
            width: 150px;
            max-width: 100%;
            height: 50px;
            
                &:hover {
                    background-color: $brown;
                    color: $white;
                }
        }
    }

    div.cart.toggle{
        right: 0;
    }

    /* 加入購物車的品項 */
    div.product_rows{
        margin-bottom: auto;
        >.cart_rows_empty{
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;

            margin-top: 25%;
            >img{
                width: 10em;
                margin-bottom: 3em;
            }
        }
    }

    div.product-row{
        display: flex;
        align-items: center;

        height: auto;
        margin-bottom: 5px;
        padding: 10px;

        border-bottom: 2px dashed $dark-grey;
        > img{
            width: 100px;
            height: auto;
            border-radius: 10px;
            margin-right: 25px;
        }
    }

    div.product_row_inner{
        margin-right: auto;

        > h3{
            margin-bottom: 10px;
        }
        div.cart_design{
            width:70px;
            max-width: 100%;
            height: 25px;

            background-color: $medium-milktea;
        
            color: $white;
            border-radius: 8px;
        
            display: flex;
            justify-content: center;
            align-items: center;
        
            margin-bottom: 15px;
        }
        > .cal{
            width: 80px;
            height: 30px;

            >.cal_btn{
                font-size: 20px;
            }
        }
    }

    div.product_row_price{
        display: flex;
        flex-direction: column;
        align-items: end;
        justify-content: space-between;

        height: 100px;
        min-height: 100%;

        width: 60px;
        font-size: 12px;

        > .cart_item_remove_btn{
            display: block;
            font-size: 20px;
            color: $dark-milktea;
            cursor: pointer;
        }

        > .cart_item_remove_btn:hover{
            color: $brown;
        }
    }

    @media(max-width:430px){
        div.cart{
            width: 430px;
        }

        div.product-row{
            padding: 20px 5px;

            >img{
                margin-right: 10px;
            }

            >div.product_row_inner{
                >h2{
                    font-size: $h4;
                }

                >.cart_design{
                    width: 80px;
                }

                >.cal{
                    width: 80px;
                    >.cal_btn{
                        font-size: 20px;
                    }
                }
            }

            >div.product_row_price{
                align-items: center;
            }

        }

    }
</style>