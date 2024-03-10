<script setup>

import { ref } from 'vue';

defineEmits(['ModalbProduct'])

const props = defineProps({data: Object});
const showSuccessMessage = ref(false);


const submitForm = () => {

    const url_products_update = 'http://localhost/thd104/public/php/Backstage/products_update.php';
    
    showSuccessMessage.value = true;
    setTimeout(() => {
        showSuccessMessage.value = false;
    }, 1000);

    fetch(url_products_update, {

        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            id: props.data.ID, 
            productName: props.data.PRODUCT_NAME, 
            slogan1: props.data.SLOGAN1,
            slogan2: props.data.SLOGAN2,
            productPic1: props.data.PRODUCT_PIC1,
            productPic2: props.data.PRODUCT_PIC2,
            productPic3: props.data.PRODUCT_PIC3,
            productPrice: props.data.PRODUCT_PRICE,
            productStyle: props.data.PRODUCT_STYLE,
            productContent: props.data.PRODUCT_CONTENT,
            productSubcontent1: props.data.PRODUCT_SUBCONTENT1,
            productSubcontent2: props.data.PRODUCT_SUBCONTENT2,
            createTime: props.data.CREATE_TIME,
            productCategoryId: props.data.PRODUCT_CATEGORY_ID,
            status: props.data.STATUS,

        })

    })
    };

    const click_function = (key, id) => {
        
        let final_status = null;
        if (props.data.STATUS === 1) {
            props.data.STATUS = 0;
            final_status = false;
        } else {
            props.data.STATUS = 1;
            final_status = true;
        }
    }
</script>
<template>
    <div class="modal_mask" @click.self="$emit('ModalbProduct')" >
    <div class="modal_content bProduct backModal">
        <section class="bModalHeader">
            <h1>商品－編輯與查看</h1>
        </section>

        <form @submit.prevent="submitForm">
        <section class="bModalContent">
            <div>
                <div>
                    <h2 class="bItem">商品ID： {{  props.data.ID }}</h2>
                    <h2></h2>
                </div>
                <h2>商品資料</h2>
                <article>
                    <div>
                        <h2>商品類別：</h2>
                        <input v-model="props.data.CATEGORY_NAME">
                    </div>
                    <div>
                        <h2>商品名稱：</h2>
                        <input v-model="props.data.PRODUCT_NAME">
                    </div>
                    <div>
                        <h2>商品款式：</h2>
                        <input v-model="props.data.PRODUCT_STYLE">
                    </div>
                    <div>
                        <h2>商品單價：</h2>
                        <input v-model="props.data.PRODUCT_PRICE">
                    </div>
                    <div>
                        <h2>商品狀態：</h2>
                        <button  :class="{ 'red': props.data.STATUS === 0, 'green': props.data.STATUS === 1 }" @click="click_function(key,data.ID,'contact')" >{{ props.data.STATUS === 1 ?  '上架中' : '未上架' }} </button>
                    </div>
                </article>
            </div>
            
            <div>
                <article>
                    <div>
                        <h2>條列句1：</h2>
                        <input v-model="props.data.SLOGAN1">
                    </div>
                    <div>
                        <h2>條列句2：</h2>
                        <!-- <h2>{{  props.data.PRODUCT_SUBCONTENT2 }}</h2> -->
                        <input v-model="props.data.SLOGAN2">
                    </div>
                    <div>
                        <h2>商品敘述：</h2>
                        <input v-model="props.data.PRODUCT_CONTENT">
                    </div>
                    <h2>商品圖片：</h2>
                    <div>
                       <div class="bAddPic">
                        <img src="" alt="">
                    </div>
                    <div  class="bAddPic">
                        <img src="" alt="">
                    </div>
                    <div  class="bAddPic">
                        <img src="" alt="">
                    </div> 
                    </div>
                    
                </article>
            </div>
            <div class="block">
                <button class="btn" @click="$emit('ModalbProduct')">關閉</button>
                <button type="submit" class="btn">儲存</button>
                <div id="successMessage" class="success-message" v-show="showSuccessMessage">儲存成功 !!</div>
            </div>
        </section>
    </form>
    </div>
</div>
</template>

<!-- scoped切勿拿掉 -->
<style lang="scss" scoped>
@import '@/sass/main.scss';

.bProduct{
    width: 1000px;
    // height: 660px;
    .bModalContent{
        display: flex;
        flex-wrap: wrap;
       >div:first-child{
        flex-basis: 35%;
        margin-right: 40px;
        >h2{
            margin-bottom: 10px;
            text-align: left;
        }
        article{
            div{
                display: flex;
                h2{
                    padding: 5px 0;
                    margin: 10px 0;
                }
                h2:last-child{
                    background-color: $light-milktea;
                    padding: 0 10px;
                    border-radius:10px ;
                    line-height: 40px;
                }
                button{
                    align-self: center;
                }
            }
        }
       }
       >div:nth-child(2){
        flex-basis: 55%;
        flex-grow: 1;
        article{
            div{
                display: flex;
                h2{
                    padding: 10px 0;
                    text-align: left;
                    margin: 10px 0;
                }
                h2:first-child{
                    flex-basis: 100px;
                    flex-shrink: 0;
                }
                h2:last-child{
                    padding: 10px 10px;
                    background-color:$light-milktea;
                    border-radius:10px ;
                }
            }
            >div:nth-child(3){
                height: 150px;
                h2:first-child{
                    align-self: center;
                }
            }
            >h2:nth-child(4){
                text-align: left;
                margin-top: 25px;
                margin-bottom: 10px;
            }
            >h2:nth-child(4)~div{
               width: 520px;
                display: flex;
                justify-content: space-between;
                div{
                  margin: 0;
                }
            }
        }
       }
       >div:last-child{
        flex-basis: 100%;
       }
    }
}

button{
    cursor: pointer;
    background-color: $light-milktea;
    outline: none;
    
    border-radius: 8px;
    background-color: $light-milktea;
}

.green{
    color: black;
    border: none;
}

.red{
    color: $warning;
    border: 1px red solid;

}

.block {
    position: relative;
}

.success-message {
    position: absolute;
    top: 10px;
    right: 200px;
    color: green;
    border-radius: 5px;
    font-weight: bold;

}
</style>
