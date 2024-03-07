<script setup>



    import { ref, onMounted } from 'vue';

    defineEmits(['ModalbContact'])


    const contactData = ref([]);
    const 

    onMounted(() => {
        
    const url_contact = 'http://localhost/thd104/public/php/contact_select.php';
    
    fetch(url_contact)
        .then(response => response.json())
        .then(response => {
            // console.log('註冊成功 js');
        contactData.value = response;
            })
            .catch(error => {
                console.error('Error:', error);
            });
                           
    });

</script>
<template>
    <div>
        
    <div class="modal_mask" @click.self="$emit('ModalbContact')" >
        <div  v-for="item in contactData" :key="item.ID">
    <div class="modal_content bContact backModal" >
        
        <section class="bModalHeader">
            <h1>聯絡表單－編輯與查看</h1>
        </section>

     
        <section class="bModalContent">
            <div>
                <h2 class="bItem">表單ID： {{ item.ID }}</h2>
                <h2>表單資料</h2>
            </div>
            <div>
                <h2>表單資料</h2>
                <article>
                    <div>
                        <h2>姓名/單位：</h2>
                        <h2><input type="text" :placeholder= "item.NAME" disabled></h2>
                    </div>
                    <div>
                        <h2>聯絡電話：</h2>
                        <h2><input type="text" :placeholder= "item.PHONE"></h2>
                    </div>
                    <div>
                        <h2>電子信箱：</h2>
                        <h2><input type="text" :placeholder= "item.EMAIL"></h2>
                    </div>
                    <div>
                        <h2>建立日期：</h2>
                        <h2><input type="text" :placeholder= "item.CREATE_TIME"></h2>
                    </div>
                    <div>
                        <h2>處理狀態：</h2>
                        <button><input type="text" :placeholder= "item.STATUS"></button>
                    </div>
                </article>
                <article>
                    <div>
                        <h2>內容描述：</h2>
                        <br>
                        <input type="textarea" :placeholder="item.CONTENT">
                    </div>
                </article>
                
            </div>
            <div>
                <button class="btn" @click="$emit('ModalbContact')">關閉</button>
                <button class="btn" @click="$emit('ModalbContact')">儲存</button>
            </div>
            
        </section>

    </div>
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
                margin-bottom: 15px;
            }
            h2{
                 text-align: left;
            }
        }
        }
    }
}

</style>
