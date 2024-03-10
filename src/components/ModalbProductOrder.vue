<script setup>

defineEmits(['ModalbProductOrder'])

const props = defineProps({data: Object});

    console.log(props.data)

    // const submitForm = () => {
    // const url_contact_update = 'http://localhost/thd104/public/php/pOrder_update.php';
    
    
    // fetch(url_contact_update, {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify({
    //         id: props.data.ID, 
    //         name: props.data.NAME,
    //         phone: props.data.PHONE,
    //         email: props.data.EMAIL,
    //         content: props.data.CONTENT,
    //         createTime: props.data.CREATE_TIME,
    //         status: props.data.STATUS,

    //     })

    // })
    // };

</script>
<template>
    <div class="modal_mask" @click.self="$emit('ModalbProductOrder')" >
    <div class="modal_content bProductOrder backModal">
        <section class="bModalHeader">
            <h1>商品訂單－編輯與查看</h1>
        </section>

        <form @submit.prevent="submitForm">
        <section class="bModalContent">
            <div>
                <h2 class="bItem">商品訂單ID：{{ props.data.id }}</h2>
                <h2></h2>
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
                        <h2>{{ props.data.PHONE }}</h2>
                    </div>
                    <div>
                        <h2>收件地址：</h2>
                        <h2>台北市中正區重慶南路一段122號</h2>
                    </div>
                </article>              
            </div>
            <div>
                <h2>商品訂單內容</h2>
                <article>
                    <div v-for="item in props.data.products">
                        <h2>{{ item.product_name }}</h2>
                        <h2>柑橘款</h2>
                        <h2>1個</h2>
                        <h2>NTD500</h2>
                    </div>
                </article>              
            </div>
            <article>
                <div>
                    <h2>訂單金額：</h2>
                    <h2>NTD4500</h2>
                </div>
                <div>
                    <h2>訂單狀態：</h2>
                    <h2>已付款</h2>
                </div>
                <div>
                    <h2>售後狀態：</h2>
                    <button>已完成</button>
                </div>
            </article>
            <div>
                <button class="btn" @click="$emit('ModalbProductOrder')">關閉</button>
                <button class="btn" @click="$emit('ModalbProductOrder')">儲存</button>
            </div>
        </section>
    </form>
    </div>
</div>
</template>

<!-- scoped切勿拿掉 -->
<style lang="scss" scoped>
@import '@/sass/main.scss';

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
</style>
