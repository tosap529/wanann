<script setup>

import { ref,onMounted } from 'vue';

defineEmits(['ModalbProductAdd'])

// const props = defineProps({data: Object});
const productAddPic1 = ref(null);
const productAddPic2 = ref(null);
const productAddPic3 = ref(null);
// const productAddPic = ref(null);
const productAddPicInput = ref(null);
const productAddPicInput1 = ref(null);
const productAddPicInput2 = ref(null);
const productAddPicInput3 = ref(null);
const imgPool = ref(null);
const showSuccessMessage = ref(false);


let NewProductData = {
    id: '建立後自動生成', 
    productName: '', 
    slogan1:'' ,
    slogan2:'' ,
    productPic1:'' ,
    productPic2:'' ,
    productPic3: '',
    productPrice: '',
    productStyle: '經典款',
    productContent:'' ,
    productSubcontent1:'' ,
    productSubcontent2: '',
    createTime: '建立後自動生成',
    productCategoryId: '',
    status: 1,
}

const final_status = ref('上架中');

    const switchStatus = () => {
        if (NewProductData.status === 1) {
            NewProductData.status = 0;
            final_status.value = '未上架';
        } else {
            NewProductData.status = 1;
            final_status.value = '上架中';
        }
        console.log( NewProductData.status);
    }


    const successMsg = ref('');
        const productsInsert=()=>{
        let file = productAddPicInput.value.files[0];

    if(file){
         let formdata  = new FormData();
            formdata.append("product_pic", file);
            formdata.append("product_info", JSON.stringify(NewProductData));
            const url = 'http://localhost/thd104/g1/public/php/Backstage/product_insert.php';
            // const url = 'php/Backstage/articles_insert.php';
            fetch(url, {
                    method: 'POST',
                    body: formdata
                })
            .then(response => response.text())
            .then(response => {
                if(response=='資料不全'){
                    successMsg.value = '請輸入完整資料'
                    showSuccessMessage.value = true;
                    setTimeout(() => {
                        showSuccessMessage.value = false;
                    }, 1000);
                }else{
                    successMsg.value = '儲存成功！！'
                    showSuccessMessage.value = true;
                    setTimeout(() => {
                        showSuccessMessage.value = false;
                    }, 1000);

                }
                })
    }
}


    function fileChange(input, img){

    console.log(input.value);
    console.log(input.value.files);
    console.log(input.files);
    

    let file = input.files[0];

        let readFile = new FileReader();
        readFile.readAsDataURL(file);
        readFile.addEventListener('load', () => {
            img.src = readFile.result;
            if (img.src) {
                img.closest('div').classList.remove('bAddPicPlus');
            }
        });
    
}

    // onMounted(()=>{
    //     productAddPicInput1.value.addEventListener('change', fileChange('productAddPicInput1', 'productAddPic1') );
    //     productAddPicInput2.value.addEventListener('change', fileChange('productAddPicInput2', 'productAddPic2') );
    //     productAddPicInput3.value.addEventListener('change', fileChange('productAddPicInput3', 'productAddPic3') );
    
    // })

    const fileClick =(i)=>{
        if(i==1){
            productAddPicInput1.value.click();
        }else if(i==2){
            productAddPicInput2.value.click();
        }else{
            productAddPicInput3.value.click();
        }
        
    }

</script>
<template>
    <div class="modal_mask" @click.self="$emit('ModalbProductAdd')" >
    <div class="modal_content bProduct backModal">
        <section class="bModalHeader" style="background-color: #C84A2F;">
            <h1>商品－新增</h1>
        </section>

        <form @submit.prevent="submitForm">
        <section class="bModalContent">
            <div>
                <div class="bItem">
                    <h2>商品ID：</h2>
                    <h2>{{  NewProductData.id }}</h2>
                </div>
                <h2>商品資料</h2>
                <article>
                    <div>
                        <h2>商品類別：</h2>
                        <!-- <input v-model="NewProductData.productCategoryId"> -->
                        <select name="" id="" v-model="NewProductData.productCategoryId">
                            <option value="1">清潔工具</option>
                            <option value="2">清潔劑</option>
                        </select>
                    </div>
                    <div>
                        <h2>商品名稱：</h2>
                        <input v-model="NewProductData.productName">
                    </div>
                    <div>
                        <h2>商品款式：</h2>
                        <input v-model="NewProductData.productStyle" disabled>
                    </div>
                    <div>
                        <h2>商品單價：</h2>
                        <input v-model="NewProductData.productPrice" oninput="value = value.replace(/[^\d]/g,'')">
                    </div>
                    <div>
                        <h2>商品狀態：</h2>
                        <button  :class="NewProductData.status ? 'green' : 'red'" @click="switchStatus()" >{{ final_status}} </button>
                    </div>
                </article>
            </div>
            
            <div>
                <article>
                    <div>
                        <h2>條列句1：</h2>
                        <input v-model="NewProductData.productSubcontent1">
                    </div>
                    <div>
                        <h2>條列句2：</h2>
                        <!-- <h2>{{  NewProductData.PRODUCT_SUBCONTENT2 }}</h2> -->
                        <input v-model="NewProductData.productSubcontent2">
                    </div>
                    <div>
                        <h2>商品敘述：</h2>
                        <textarea style="resize:none" cols="30" rows="10" v-model="NewProductData.productContent"></textarea>
                    </div>
                    <h2>商品圖片：</h2>
                    <div ref="imgPool">
                       <div class="bAddPicPlus bAddPic" @click="fileClick(1)">
                            <input type="file" ref="productAddPicInput1" style="display: none;" @change="fileChange(productAddPicInput1, productAddPic1)">
                            <img src="" alt="" ref="productAddPic1">
                        </div>
                        <div  class="bAddPicPlus bAddPic" @click="fileClick(2)">
                            <input type="file" ref="productAddPicInput2" style="display: none;">
                            <img src="" alt="" ref="productAddPic2">
                        </div>
                        <div  class="bAddPicPlus bAddPic" @click="fileClick(3)">
                            <input type="file" ref="productAddPicInput3" style="display: none;">
                            <img src="" alt="" ref="productAddPic3">
                        </div> 
                    </div>
                    
                </article>
            </div>
            <div class="block">
                <button class="btn" @click="$emit('ModalbProductAdd')">關閉</button>
                <button type="submit" class="btn" @click="productsInsert">儲存</button>
                <div id="successMessage" class="success-message" v-show="showSuccessMessage">{{successMsg}}</div>
            </div>
        </section>
    </form>
    </div>
</div>
</template>

<!-- scoped切勿拿掉 -->
<style lang="scss" scoped>
@import '@/sass/main.scss';
.backModal h2.bItem{
    width: 315px;
}
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
                select{
                    align-self: center;
                }
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
            position: relative;
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
                input{
                    width: 420px;
                    margin-top: 15px;
                }
            }
            >div:nth-child(3){
                height: 100px;
                h2:first-child{
                    align-self: center;
                    margin-top: 40px;
                }
                textarea{
                    border-radius: 8px;
                    border: none;
                    background-color: $light-milktea;
                    padding: 10px;
                    width: 420px;
                    margin-top: 15px;
                    height: 105px;
                    &:focus{
                        outline-color: $brown;
                    }
                }
            }
            >h2:nth-child(4){
                text-align: left;
                margin-top: 25px;
                margin-bottom: 10px;
                position: absolute;
                bottom:45px;
                left: 10px;
            }
            .bAddPic{
                margin-right: 0;
            }
            >h2:nth-child(4)~div{
                margin-left: 100px;
                width: 420px;
                display: flex;
                justify-content: space-between;
                margin-top: 50px;
                div{
                  height: 120px;
                  width: 120px;
                }
            }
        }
       }
       >div:last-child{
        flex-basis: 100%;
       }
    }
}

input{
    margin-top: 10px;
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
.bModalHeader{
    h1{
        font-size: 20px;
    }
}
</style>
