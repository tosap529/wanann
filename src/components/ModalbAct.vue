<script setup>

    import { ref } from 'vue';
    defineEmits(['ModalbAct'])


    const props = defineProps({data: Object});
    const showSuccessMessage = ref(false);
    
    const submitForm = () => {
    const url_act_update = 'http://localhost/thd104/g1/public/php/Backstage/act_update.php';
    
    showSuccessMessage.value = true;
    setTimeout(() => {
        showSuccessMessage.value = false;
    }, 1000);

    fetch(url_act_update, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            id: props.data.ID, 
            content: props.data.CONTENT,
            createTime: props.data.CREATE_TIME,
            status: props.data.STATUS,
            title: props.data.TITLE,
            pic: props.data.PIC,
            deadline: props.data.DEADLINE,
            category: props.data.CATEGORY,
            couponPrice: props.data.COUPON_PRICE,
            couponId: props.data.COUPON_ID,
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
    <div class="modal_mask" @click.self="$emit('ModalbAct')" >
    <div class="modal_content bAct backModal">
        <section class="bModalHeader">
            <h1>活動－編輯與查看</h1>
        </section>

        <form @submit.prevent="submitForm">
        <section class="bModalContent">
            <div>
                <div class="bItem"> 
                    <h2 >活動ID：</h2>
                    <h2>{{ props.data.ID }}</h2>
                </div>
                <h2>活動資料</h2>
                <article>
                    <div>
                        <h2>活動類別：</h2>
                        <h2>{{ props.data.CATEGORY }}</h2>
                    </div>
                    <div>
                        <h2>建立日期：</h2>
                        <h2>{{ props.data.CREATE_TIME }}</h2>
                    </div>
                    <div>
                        <h2>截止日期：</h2>
                        <input v-model="props.data.DEADLINE">
                    </div>
                    <div>
                        <h2>優惠代碼：</h2>
                        <input v-model="props.data.COUPON_ID">
                    </div>
                    <div>
                        <h2>優惠內容：</h2>
                        <input v-model="props.data.COUPON_PRICE">
                    </div>
                    <div>
                        <h2>活動狀態：</h2>
                        <button  :class="{ 'red': props.data.STATUS === 0, 'green': props.data.STATUS === 1 }" @click="click_function(key,data.ID,'contact')">{{ props.data.STATUS === 1 ?  '已處理' : '未處理' }} </button>
                    </div>
                </article>
            </div>
            
            <div>
                <h2>活動圖文</h2>
                <article>
                    
                    <div>
                        <h2>活動標題：</h2>
                        <input type="text" v-model="props.data.TITLE">
                        <!-- <h2>{{ props.data.TITLE }}</h2> -->
                    </div>
                    <div>
                        <h2>活動敘述：</h2>
                        <textarea style="resize: none" type="text" v-model="props.data.CONTENT"></textarea>
                        <!-- <h2>{{ props.data.CONTENT }}</h2> -->
                    </div>
                    <div>
                        <h2>活動圖片：</h2>
                        <div class="bAddPic" :class="{'bAddPicPlus':!props.data.PIC}">
                            <img :src="props.data.PIC" alt="">
                        </div>
                    </div>
                  
                </article>
            </div>
            <div class="block">
                <button class="btn" @click="$emit('ModalbAct')">關閉</button>
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
.backModal h2.bItem{
    width: 315px;
}
.bAct{
    width: 1000px;
    // height: 660px;
    .bModalContent{
        height: 500px;
        overflow: auto;
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
                button{
                    align-self: center;
                }
            }
            div:nth-child(2)~div{
                h2:last-child{
                    background-color: $light-milktea;
                    padding: 0 10px;
                    border-radius:10px ;
                    line-height: 40px;
                }
            }
        }
       }
       >div:nth-child(2){
        flex-basis: 55%;
        flex-grow: 1;
        >h2{
            text-align: left;
            margin-bottom: 10px;
        }
        article{
            div{
                display: flex;
                input{
                    width: 400px;
                    margin-top: 15px;
                }
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
                    flex-grow: 1;
                    padding: 10px 10px;
                    background-color:$light-milktea;
                    border-radius:10px ;
                }
            }
            >div:nth-child(2){
                height: 150px;
                h2:first-child{
                    align-self: center;
                    margin-top: 50px;
                }
                textarea{
                    border-radius: 8px;
                    border: none;
                    background-color: $light-milktea;
                    padding: 10px;
                    width: 400px;
                    margin-top: 15px;
                    height: 160px;
                    &:focus{
                        outline-color: $brown;
                    }
                }
            }
            >div:nth-child(3){
                margin-top: 50px;
                h2:first-child{
                    align-self: center;
                }
            }
        }
       }
       >div:last-child{
        flex-basis: 100%;
       }
    }
}
input{margin-top: 10px;}
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
