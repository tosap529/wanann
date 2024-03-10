<script setup>

    import { ref } from 'vue';

    defineEmits(['ModalbContact']);

    // defineProps(['contactData']);

<<<<<<< HEAD
    import { ref, onMounted } from 'vue';

    const contactData = ref([]);


    onMounted(() => {
        
    const url_contact = 'http://localhost/thd104/public/php/contact_select.php';
=======
    const props = defineProps({data: Object});
    const showSuccessMessage = ref(false);
>>>>>>> e5375a5de9426be18a6ce50bd6622171d509d090
    
    const submitForm = () => {
    
    const url_contact_update = 'http://localhost/thd104/g1/public/php/Backstage/contact_update.php';
    
    showSuccessMessage.value = true;
    setTimeout(() => {
        showSuccessMessage.value = false;
    }, 1000);
    
    fetch(url_contact_update, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            id: props.data.ID, 
            name: props.data.NAME,
            phone: props.data.PHONE,
            email: props.data.EMAIL,
            content: props.data.CONTENT,
            createTime: props.data.CREATE_TIME,
            status: props.data.STATUS,

        })

    })

    };
<<<<<<< HEAD
})
=======

    
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

>>>>>>> e5375a5de9426be18a6ce50bd6622171d509d090
</script>
<template>
    <div>
        
    <div class="modal_mask" @click.self="$emit('ModalbContact')" >
    <div class="modal_content bContact backModal" >
        
        <section class="bModalHeader">
            <h1>聯絡表單－編輯與查看</h1>
        </section>

        <form @submit.prevent="submitForm">
        <section class="bModalContent">
            <div>
                <h2 class="bItem">表單ID： {{ props.data.ID }} </h2>
                <h2>表單資料</h2>
            </div>
            <div>
                <h2>表單資料</h2>
                <article>
                    <div>
                        <h2>姓名/單位：</h2>
                        <h2>{{props.data.NAME}}</h2>
                    </div>
                    <div>
                        <h2>聯絡電話：</h2>
                        <h2>{{props.data.PHONE}}</h2>
                    </div>
                    <div>
                        <h2>電子信箱：</h2>
                        <h2><input type="text"  v-model="props.data.EMAIL"></h2>
                    </div>
                    <div>
                        <h2>建立日期：</h2>
                        <h2><input type="text"  v-model="props.data.CREATE_TIME"></h2>
                    </div>
                    <div>
                        <h2>處理狀態：</h2>
                        <button  :class="{ 'red': props.data.STATUS === 0, 'green': props.data.STATUS === 1 }"  @click="click_function(key,data.ID,'contact')" >{{ props.data.STATUS === 1 ?  '已處理' : '未處理' }} </button>
                    </div>
                </article>
                <article>
                    <div>
                        <h2>內容描述：</h2>
                        <br>
                        <input type="textarea" v-model="props.data.CONTENT">
                    </div>
                </article>
                
            </div>
            <div class="block">
                <button class="btn" @click="$emit('ModalbContact')">關閉</button>
                <button type="submit" class="btn" >儲存</button>
                <div id="successMessage" class="success-message" v-show="showSuccessMessage">儲存成功 !!</div>
            </div>
            
        </section>
        </form>
    </div>
    </div>
</div>

</template>

<!-- scoped切勿拿掉 -->
<style lang="scss" scoped>
@import '@/sass/main.scss';

.bContact{
    width: 1000px;
    // height: 660px;
    .bModalContent{
        >div:nth-child(2){
            display: flex;
            flex-wrap: wrap;
            >h2:first-child{
                flex-basis: 100%;
                text-align: left;
                margin-bottom: 20px;
        }
        article{
            background-color: $white;
            border-radius: 10px;
        }
        article:nth-child(2){
            flex-basis: 40%;
            margin-right: 20px;
            padding: 10px;
            h2{
                padding: 15px 0;
            }
            >div{
                display: flex;
                h2:first-child{
                    flex-basis: 110px;
                }
            }
            button{
                align-self: center;
                // width: 100px;
                // height: 40px;
            }
        }
        article:last-child{
            flex-basis: 55%;
            flex-grow: 1;
            padding:15px 20px ;
            h2:first-child{
                // margin-bottom: 15px;
            }
            h2{
                 text-align: left;
            }
            input{
                width: 450px;
                height: 300px;
            }
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
    right: 200px;
    color: green;
    border-radius: 5px;
    font-weight: bold;

}

</style>
