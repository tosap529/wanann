<script setup>

import { ref,onMounted } from 'vue';

defineEmits(['ModalbArticleAdd']);

const articleAddPic = ref(null);
const articleAddPicInput = ref(null);
const showSuccessMessage = ref(false);

let NewArticleData = {
    id: '建立後自動生成',  
    title: '',
    pic: '',
    content: '',
    createTime:'建立後自動生成',
    category:'',
    summernote: '',
    status: 1,
    }
const final_status = ref('上架中');
    const switchStatus = () => {
        if (NewArticleData.status === 1) {
            NewArticleData.status = 0;
            final_status.value = '未上架';
        } else {
            NewArticleData.status = 1;
            final_status.value = '上架中';
        }
        console.log( NewArticleData.status);
    }
const successMsg = ref('');
    const articlesInsert=()=>{
    let file = articleAddPicInput.value.files[0];

    if(file){
         let formdata  = new FormData();
            formdata.append("article_pic", file);
            formdata.append("article_info", JSON.stringify(NewArticleData));
            // const url = 'http://localhost/thd104/g1/public/php/Backstage/articles_insert.php';
            const url = 'php/Backstage/articles_insert.php';
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
    let file = articleAddPicInput.value.files[0];
    let readFile = new FileReader();
    readFile.readAsDataURL(file);
    readFile.addEventListener('load', () => {
    articleAddPic.value.src = readFile.result
    if(articleAddPic.value.src){
        articleAddPic.value.closest('div').classList.remove('bAddPicPlus');
        }
    })}
onMounted(()=>{
    articleAddPicInput.value.addEventListener('change',fileChange );
})
const fileClick =()=>{
    articleAddPicInput.value.click();
}

</script>
<template>
    <div class="modal_mask" @click.self="$emit('ModalbArticleAdd')" >
    <div class="modal_content bArticle backModal">

        <section class="bModalHeader" style="background-color: #C84A2F;">
            <h1>文章－新增</h1>
        </section>

        <form @submit.prevent="submitForm">
        <section class="bModalContent">
            <div>
                <div  class="bItem">
                    <h2>文章ID：</h2>
                    <h2>{{ NewArticleData.id }}</h2>
                </div>
                <h2>文章資料</h2>
                <article>
                    <div>
                        <h2>文章類別：</h2>
                        <select name="" id="" v-model="NewArticleData.category">
                            <option value="浣安小品">浣安小品</option>
                            <option value="清潔小知識">清潔小知識</option>
                            <option value="職人專訪">職人專訪</option>
                        </select>
                    </div>
                    <div>
                        <h2>建立日期：</h2>
                        <h2>{{ NewArticleData.createTime }}</h2>
                    </div>
                    <div>
                        <h2>文章狀態：</h2>
                        <button  :class="NewArticleData.status ? 'green' : 'red'" @click="switchStatus()" >{{ final_status}} </button>
                    </div>
                </article>
            </div>
            
            <div>
                <h2>文章圖文</h2>
                <article>
                    
                    <div>
                        <h2>文章標題：</h2>
                        <input type="text" v-model="NewArticleData.title">
                    </div>
                    <div>
                        <h2>文章敘述：</h2>
                        <input type="text" v-model="NewArticleData.content">
                    </div>
                    <div>
                        <h2>文章圖片：</h2>
                        <div class="bAddPicPlus bAddPic" @click="fileClick">
                            <input type="file" ref="articleAddPicInput" style="display: none;">
                            <img src="" alt="" ref="articleAddPic">
                        </div>
                    </div>
                  
                </article>
            </div>
            <div class="block">
                <button class="btn" @click="$emit('ModalbArticleAdd')">關閉</button>
                <button type="submit" @click="articlesInsert" class="btn">儲存</button>
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
.bArticle{
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
                input{
                    margin-top: 10px;
                }
                h2{
                    padding: 5px 0;
                    margin: 10px 0;
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
        >h2{
            text-align: left;
            margin-bottom: 10px;
        }
        article{
            div{
                display: flex;
                input{
                    width: 420px;
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
                height: 50px;
                margin-bottom: 40px;
                h2:first-child{
                    align-self: center;
                    margin-bottom: 0px;
                    margin-top: 20px;
                }

            }
            >div:nth-child(3){
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
