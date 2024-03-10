<script setup>

import { ref } from 'vue';

defineEmits(['ModalbServiceOrder']);

const props = defineProps({data: Object});

const showSuccessMessage = ref(false);

const submitForm = () => {

const url_pOrder_update = 'http://localhost/thd104/g1/public/php/Backstage/sOrder_update.php';

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
    <div class="modal_mask" @click.self="$emit('ModalbServiceOrder')" >
    <div class="modal_content bServiceOrder backModal">
        <section class="bModalHeader">
            <h1>服務訂單－編輯與查看</h1>
        </section>

        <form @submit.prevent="submitForm">
        <section class="bModalContent">
            <div>
                <h2 class="bItem">服務訂單ID：{{ props.data.id }}</h2>
                <h2></h2>
            </div>
            <div>
                <h2>服務訂購人</h2>
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
                        <h2>服務地址：</h2>
                        <h2>{{ props.data.service_address }}</h2>
                    </div>
                </article>              
            </div>
            <div>
                <h2>服務訂單內容</h2>
                <article>
                    <div>
                        <h2>服務日期：</h2>
                        <h2>{{ props.data.service_date }}</h2>
                    </div>
                    <div>
                        <h2>服務時段：</h2>
                        <h2>{{ props.data.time_range_name }}</h2>
                    </div>
                    <div>
                        <h2>服務方案：</h2>
                        <h2>{{ props.data.service_name }}</h2>
                    </div>
                    <div>
                        <h2>加購服務：</h2>
                        <h2  v-for="item in props.data.add_service">{{ item.addServiceName }}</h2>
                    </div>
                </article>              
            </div>
            <article>
                <div>
                    <h2>訂單金額：</h2>
                    <h2>{{ props.data.payment }}</h2>
                </div>
                <div>
                    <h2>服務狀態：</h2>
                    <button  :class="{ 'red': props.data.order_status === 0, 'green': props.data.order_status === 1 }" @click="click_function(key,data.ID,'sOrder')" >{{ props.data.order_status === 1 ?  '服務完成' : '未服務' }} </button>
                    <!-- <h2>{{ props.data.order_status }}</h2> -->
                </div>
                <div>
                    <h2>評價狀態：</h2>
                    <h2>{{ props.data.rank_status }}</h2>
                </div>
            </article>
            <div class="block">
                <button class="btn" @click="$emit('ModalbServiceOrder')">關閉</button>
                <button class="btn">儲存</button>
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

.bServiceOrder{
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

</style>
