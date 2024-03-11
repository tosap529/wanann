<script setup>

    import { ref,onMounted } from 'vue';
    defineEmits(['ModalbActAdd']);

    const actAddPic = ref(null);
    const actAddPicInput = ref(null);
    const showSuccessMessage = ref(false);
    
    let NewActData = {
        id: '建立後自動生成', 
        content: '',
        createTime: '建立後自動生成',
        status:1,
        title:'',
        pic:'',
        deadline: '',
        category: '',
        couponPrice: '',
        couponId: '',
    }
    const final_status = ref('上架中');
    const switchStatus = () => {
        if (NewActData.status === 1) {
            NewActData.status = 0;
            final_status.value = '未上架';
        } else {
            NewActData.status = 1;
            final_status.value = '上架中';
        }
        console.log( NewActData.status);
    }

    // const submitForm = () => {
    // // const url_act_update = 'http://localhost/thd104/g1/public/php/Backstage/act_update.php';
    
    // showSuccessMessage.value = true;
    // setTimeout(() => {
    //     showSuccessMessage.value = false;
    // }, 1000);

    // fetch(url_act_update, {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify(NewActData)

    // })
    // };

    // const click_function = (key, id) => {
        
    //     let final_status = null;
    //     if (props.data.STATUS === 1) {
    //         props.data.STATUS = 0;
    //         final_status = false;
    //     } else {
    //         props.data.STATUS = 1;
    //         final_status = true;
    //     }
    // }
    const successMsg = ref('');
    const actInsert=()=>{
    let file = actAddPicInput.value.files[0];

    if(file){
         let formdata  = new FormData();
            formdata.append("act_pic", file);
            formdata.append("act_info", JSON.stringify(NewActData));
            // const url = 'http://localhost/thd104/g1/public/php/Backstage/acts_insert.php';
            const url = 'php/Backstage/acts_insert.php';
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
    function fileChange(){
    let file = actAddPicInput.value.files[0];
    let readFile = new FileReader();
    readFile.readAsDataURL(file);
    readFile.addEventListener('load', () => {
    actAddPic.value.src = readFile.result
    if(actAddPic.value.src){
        actAddPic.value.closest('div').classList.remove('bAddPicPlus');
        }
    })}
    onMounted(()=>{
    actAddPicInput.value.addEventListener('change',fileChange );
    })
    const fileClick =()=>{
    actAddPicInput.value.click();
    }

</script>
<template>
    <div class="modal_mask" @click.self="$emit('ModalbActAdd')" >
    <div class="modal_content bAct backModal">
        <section class="bModalHeader" style="background-color: #C84A2F;">
            <h1>活動－新增</h1>
        </section>

        <form @submit.prevent="submitForm">
        <section class="bModalContent">
            <div>
                <div class="bItem">
                    <h2>活動ID：</h2>
                    <h2>{{ NewActData.id }}</h2>
                </div>
                <h2>活動資料</h2>
                <article>
                    <div>
                        <h2>活動類別：</h2>
                        <select name="" id="" v-model="NewActData.category">
                            <option value="優惠活動">優惠活動</option>
                            <option value="職人講座">職人講座</option>
                        </select>
                    </div>
                    <div>
                        <h2>建立日期：</h2>
                        <h2>{{ NewActData.createTime }}</h2>
                    </div>
                    <div>
                        <h2>截止日期：</h2>
                        <input v-model="NewActData.deadline">
                    </div>
                    <div>
                        <h2>優惠代碼：</h2>
                        <input v-model="NewActData.couponId">
                    </div>
                    <div>
                        <h2>優惠內容：</h2>
                        <input v-model="NewActData.couponPrice" oninput="value = value.replace(/[^\d]/g,'')">
                    </div>
                    <div>
                        <h2>活動狀態：</h2>
                        <button  :class="NewActData.status ? 'green' : 'red'" @click="switchStatus()" >{{final_status}} </button>
                    </div>
                </article>
            </div>
            
            <div>
                <h2>活動圖文</h2>
                <article>
                    
                    <div>
                        <h2>活動標題：</h2>
                        <input type="text" v-model="NewActData.title">
                        <!-- <h2>{{ NewActData.TITLE }}</h2> -->
                    </div>
                    <div>
                        <h2>活動敘述：</h2>
                        <textarea style="resize:none" type="text" v-model="NewActData.content"></textarea>
                        <!-- <h2>{{ NewActData.CONTENT }}</h2> -->
                    </div>
                    <div>
                        <h2>活動圖片：</h2>
                        <div class="bAddPicPlus bAddPic"  @click="fileClick">
                            <input type="file" ref="actAddPicInput" style="display: none;">
                            <img src="" alt="" ref="actAddPic">
                        </div>
                    </div>
                  
                </article>
            </div>
            <div class="block">
                <button class="btn" @click="$emit('ModalbActAdd')">關閉</button>
                <button type="submit" class="btn" @click="actInsert">儲存</button>
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
                select{
                    align-self: center;
                }
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
    right: 180px;
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
