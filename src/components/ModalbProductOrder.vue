<script setup>

import { ref } from 'vue';

defineEmits(['ModalbProductOrder'])

const props = defineProps({data: Object});

const showSuccessMessage = ref(false);

 
const submitForm = () => {

const url_pOrder_update = 'http://localhost/thd104/g1/public/php/Backstage/pOrder_update.php';
// const url_pOrder_update = 'php/Backstage/pOrder_update.php';

showSuccessMessage.value = true;
    setTimeout(() => {
        showSuccessMessage.value = false;
    }, 1000);


fetch(url_pOrder_update, {

    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        id: props.data.ID, 
        // title: props.data.TITLE,
        // pic: props.data.PIC,
        // content: props.data.CONTENT,
        // createTime: props.data.CREATE_TIME,
        // category: props.data.CATEGORY,
        // summernote: props.data.SUMMERNOTE,
        status: props.data.order_status,

    })

})
};

const click_function = (key, id) => {
    
    let final_status = null;
    if (props.data.order_status === 1) {
        props.data.order_status = 0;
        final_status = false;
    } else {
        props.data.order_status = 1;
        final_status = true;
    }
}

</script>
<template>
    <div class="modal_mask" @click.self="$emit('ModalbProductOrder')" >
    <div class="modal_content bProductOrder backModal">
        <section class="bModalHeader">
            <h1>商品訂單－編輯與查看</h1>
        </section>

        <form @submit.prevent="submitForm">
        <section class="bModalContent">
            <div class="bItem">
                <h2 style="flex-basis: 130px;">商品訂單ID：</h2>
                <h2>{{ props.data.id }}</h2>
            </div>
            <div>
                <h2>商品訂購人</h2>
                <article>
                    <div>
                        <h2>帳號：</h2>
                        <h2>{{ props.data.username }}</h2>
                    </div>
                    <div>
                        <h2>姓名：</h2>
                        <h2>{{ props.data.name }}</h2>
                    </div>
                    <div>
                        <h2>手機號碼：</h2>
                        <h2>{{ props.data.phone }}</h2>
                    </div>
                    <div>
                        <h2>收件地址：</h2>
                        <h2>{{ props.data.addresseeAddress}}</h2>
                    </div>
                </article>              
            </div>
            <div>
                <h2>商品訂單內容</h2>
                <article>
                    <div v-for="item in props.data.products" :key="item">
                        <h2>{{ item.productName }}</h2>
                        <h2>{{ item.quantity }}</h2>
                        <h2>{{ item.productStyle }}</h2>
                        <h2>{{ item.productPrice }}</h2>
                    </div>
                </article>              
            </div>
            <article>
                <div>
                    <h2>訂單金額：</h2>
                    <h2>NTD {{ props.data.payment }}</h2>
                </div>
                <div>
                    <h2>訂單狀態：</h2>
                    <button  :class="{ 'red': props.data.order_status === 0, 'green': props.data.order_status === 1 }" @click="click_function(key,data.ID,'pOrder')" >{{ props.data.order_status === 1 ?  '已到貨' : '配送中' }} </button>
                </div>
                <div>
                    <h2>售後狀態：</h2>
                    <button>已完成</button>
                </div>
            </article>
            <div class="block">
                <button class="btn" @click="$emit('ModalbProductOrder')">關閉</button>
                <button class="btn" type="submit">儲存</button>
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
.backModal h2.bItem{
    width: 683px;
}
.bProductOrder{
    width: 800px;
    .bModalContent{
        height: 500px;
        overflow: auto;
        >div:nth-child(2),>div:nth-child(3){
            margin-bottom: 20px;
            >h2{
                text-align: left;
                margin-bottom: 10px;
            }
            article{
            >div{
                display: flex;
                padding: 15px 0;
                h2:first-child{
                    flex-basis: 100px;
                    text-align: left;
                }
            }
            }
        }
        >div:nth-child(3){
           article div{
            h2:first-child{
                flex-grow: 1;
            }
            h2{
                width: 75px;
                margin: 0 20px;
            }
           }
        }
        >article:nth-child(4){
            display: flex;
            justify-content: space-between;
            >div{
                display: flex;
               
            }
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
    right: 90px;
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
