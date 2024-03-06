<script setup>

defineEmits(['ModalbServiceOrder'])
</script>
<template>
    <div class="modal_mask" @click.self="$emit('ModalbServiceOrder')" >
    <div class="modal_content bServiceOrder backModal">
        <section class="bModalHeader">
            <h1>服務訂單－編輯與查看</h1>
        </section>
        <section class="bModalContent">
            <div>
                <h2 class="bItem">服務訂單ID：</h2>
                <h2></h2>
            </div>
            <div>
                <h2>服務訂購人</h2>
                <article>
                    <div>
                        <h2>帳號：</h2>
                        <h2>thd104</h2>
                    </div>
                    <div>
                        <h2>姓名：</h2>
                        <h2>XXX</h2>
                    </div>
                    <div>
                        <h2>手機號碼：</h2>
                        <h2>0912345678</h2>
                    </div>
                    <div>
                        <h2>服務地址：</h2>
                        <h2>台北市中正區重慶南路一段122號</h2>
                    </div>
                </article>              
            </div>
            <div>
                <h2>服務訂單內容</h2>
                <article>
                    <div>
                        <h2>服務日期：</h2>
                        <h2>2024/03/29</h2>
                    </div>
                    <div>
                        <h2>服務時段：</h2>
                        <h2>下午</h2>
                    </div>
                    <div>
                        <h2>服務方案：</h2>
                        <h2>浣安全室清潔</h2>
                    </div>
                    <div>
                        <h2>加購服務：</h2>
                        <h2>浴室除黴 毛孩清潔 大坪數</h2>
                    </div>
                </article>              
            </div>
            <article>
                <div>
                    <h2>訂單金額：</h2>
                    <h2>NTD4000</h2>
                </div>
                <div>
                    <h2>服務狀態：</h2>
                    <h2>已完成</h2>
                </div>
                <div>
                    <h2>評價狀態：</h2>
                    <h2>已評價</h2>
                </div>
            </article>
            <div>
                <button class="btn" @click="$emit('ModalbServiceOrder')">關閉</button>
                <button class="btn" @click="$emit('ModalbServiceOrder')">儲存</button>
            </div>
        </section>
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
</style>
