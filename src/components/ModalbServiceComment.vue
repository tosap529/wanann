<script setup>
import { ref } from 'vue';
defineEmits(['ModalbServiceComment'])

const props = defineProps({data: Object});
const showSuccessMessage = ref(false);

const submitForm = () => {

    const url_comment_update = 'http://localhost/thd104/g1/public/php/Backstage/comment_update.php';
    
    showSuccessMessage.value = true;
    setTimeout(() => {
        showSuccessMessage.value = false;
    }, 1000);


    fetch(url_comment_update, {
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
    <div class="modal_mask" @click.self="$emit('ModalbServiceComment')" >
    <div class="modal_content bServiceComment backModal">
        <section class="bModalHeader">
            <h1>服務評論－編輯與查看</h1>
        </section>

        
        <form @submit.prevent="submitForm">
        <section class="bModalContent">
            <div>
                <h2 class="bItem">服務評論ID：{{ props.data.ID }}</h2>
                <h2></h2>
            </div>
            <div>
                <h2 class="bItem">服務訂單ID：{{ props.data.ORDER_ID }}</h2>
                <h2></h2>
            </div>
            <div>
                <h2>服務訂購人</h2>
                <article>
                    <div>
                        <h2>評論日期：</h2>
                        <h2>{{ props.data.COMMENT_DATE }}</h2>
                    </div>
                    <div>
                        <h2>服務態度：</h2>
                        <h2>{{ props.data.SERVICE_ATTITUDE }}</h2>
                    </div>
                    <div>
                        <h2>服務品質：</h2>
                        <h2>{{ props.data.SERVICE_QUALITY }}</h2>
                    </div>
                    <div>
                        <h2>評論狀態：</h2>
                        <button  :class="{ 'red': props.data.STATUS === 0, 'green': props.data.STATUS === 1 }" @click="click_function(key,data.ID,'comment')" >{{ props.data.STATUS === 1 ?  '已評論' : '未評論' }} </button>
                    </div>
                </article>              
            </div>
            <div>
                <article>
                    <div>
                        <h2>評論內容：</h2>
                        <h2>{{ props.data.CONTENT }}</h2>
                    </div>
                </article>              
            </div>
            <div class="block">
                <button class="btn" @click="$emit('ModalbServiceComment')">關閉</button>
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
.backModal h2.bItem{
    width: 391.5px;
    margin-right: 30px;
}

.bServiceComment{
    width: 970px;
    // height: 660px;
   .bModalContent  {
    display: flex;
    flex-wrap: wrap;
        >div:first-child{
            flex-basis: 30%;
        }
        >div:nth-child(2){
            flex-basis: 30%;
        }
        >div:nth-child(3){
            flex-basis: 45%;
            margin-right: 30px;
            >h2{
                text-align: left;
                margin-bottom: 10px;
            }
            div {
                display: flex;
                h2{
                    padding: 15px 0;
                }
            }
        }
        >div:nth-child(4){
            // flex-basis: 40%;
            width: 405px;
            // flex-grow: 1;
            article{
                text-align: left;
                padding:15px 20px ;
                margin-top: 40px;
                height: 260px;
                width: 391.5px;
                h2:first-child{
                    margin-bottom: 10px;
                }
            }
        }
        // >div:nth-child(2),>div:nth-child(3){
          
        // }
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
