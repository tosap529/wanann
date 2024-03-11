<script setup>

import { ref } from 'vue';

defineEmits(['ModalbMember'])

const props = defineProps({data: Object});
const showSuccessMessage = ref(false);
const submitForm = () => {

    // const url_member_update = 'http://localhost/thd104/g1/public/php/Backstage/member_update.php';
    const url_member_update = 'php/Backstage/member_update.php';
    
    showSuccessMessage.value = true;
    setTimeout(() => {
        showSuccessMessage.value = false;
    }, 1000);


    fetch(url_member_update, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            id: props.data.ID, 
            // content: props.data.CONTENT,
            // createTime: props.data.CREATE_TIME,
            status: props.data.STATUS,
            // title: props.data.TITLE,
            // pic: props.data.PIC,
            // deadline: props.data.DEADLINE,
            // category: props.data.CATEGORY,
            // couponPrice: props.data.COUPON_PRICE,
            // couponId: props.data.COUPON_ID,
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

    <div class="modal_mask" @click.self="$emit('ModalbMember')" >

    <div class="modal_content bMember backModal">

        <section class="bModalHeader">
            <h1>會員註冊資料－編輯與查看</h1>
        </section>

        <form @submit.prevent="submitForm">
        <section class="bModalContent">
            <div class="pic">
                <!-- <img src="props.data.PIC" alt=""> -->
                <img :src="props.data.MEMBER_PIC" alt="">
            </div>
            <div>
                <h2>會員資料</h2>
                <article>
                    <div>
                        <h2>姓名：</h2>
                        <h2>{{ props.data.NAME }}</h2>
                    </div>
                    <div>
                        <h2>手機號碼：</h2>
                        <h2>{{ props.data.PHONE }}</h2>
                    </div>
                    <div>
                        <h2>電子信箱：</h2>
                        <h2>{{ props.data.EMAIL }}</h2>
                    </div>
                    <div>
                        <h2>服務地址：</h2>
                        <h2>{{ props.data.SERVICE_ADDRESS}}</h2>
                    </div>
                    <div>
                        <h2>收件地址：</h2>
                        <h2>{{ props.data.SEND_ADDRESS }}</h2>
                    </div>
                </article>              
            </div>
            <div>
                <h2>帳號資料</h2>
                <article>
                    <div>
                        <h2>帳號：</h2>
                        <h2>{{ props.data.USERNAME }}</h2>
                    </div>
                    <div>
                        <h2>密碼：</h2>
                        <h2>{{ props.data.PASSWORD }}</h2>
                    </div>
                    <div>
                        <h2>權限：</h2>
                        <button  :class="{ 'red': props.data.STATUS === 0, 'green': props.data.STATUS === 1 }" @click="click_function(key,data.ID,'contact')">{{ props.data.STATUS === 1 ?  '正常' : '停權' }} </button>
                    </div>
                </article>              
            </div>
            <div class="block">
                <button class="btn" @click="$emit('ModalbMember')">關閉</button>
                <button class="btn" type="submit" id="saveButton">儲存</button>
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

// 燈箱客製化style從這往下寫
// 後台燈箱共通

.bMember{
    width: 1000px;
    // height: 660px;
   .bModalContent  {
    display: flex;
    flex-wrap: wrap;
        >div:first-child{
            width: 150px;
            height: 150px;
            border-radius: 50%;
            background-image: url(@/img/cms/cms_modal_add_icon.png);
            background-size: 50% 50%;
            background-repeat: no-repeat;
            background-position: 50% 50%;
            background-color: $medium-milktea;
            margin-right: 40px;
            img{
                width: 100%;
                border-radius: 50%;
            }
        }
        >div:nth-child(2){
            flex-basis: 50%;
            margin-right: 25px;
            article div  h2:first-child{
                    flex-basis: 100px;
                    text-align: left;
                   }
        }
        >div:nth-child(3){
            flex-grow: 1;
      
        }
        >div:nth-child(2),>div:nth-child(3){
            >h2{
                text-align: left;
                margin-bottom: 10px;
            }
            article{
                
                >div{
                    display: flex;
                   h2{
                    padding: 5px 0;
                    margin: 10px 0;
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
    margin-top: 15px;
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
