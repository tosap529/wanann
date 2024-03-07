<script setup>

defineEmits(['ModalbServiceComment'])
</script>
<template>
    <div class="modal_mask" @click.self="$emit('ModalbServiceComment')" >
    <div class="modal_content bServiceComment backModal">
        <section class="bModalHeader">
            <h1>服務評論－編輯與查看</h1>
        </section>
        <section class="bModalContent">
            <div>
                <h2 class="bItem">服務評論ID：</h2>
                <h2></h2>
            </div>
            <div>
                <h2 class="bItem">服務訂單ID：</h2>
                <h2></h2>
            </div>
            <div>
                <h2>服務訂購人</h2>
                <article>
                    <div>
                        <h2>評論日期：</h2>
                        <h2>2024/03/30</h2>
                    </div>
                    <div>
                        <h2>服務態度：</h2>
                        <h2>4</h2>
                    </div>
                    <div>
                        <h2>服務品質：</h2>
                        <h2>4</h2>
                    </div>
                    <div>
                        <h2>評論狀態：</h2>
                        <button>下架中</button>
                    </div>
                </article>              
            </div>
            <div>
                <article>
                    <div>
                        <h2>評論內容：</h2>
                        <h2>我是內容我是內容我是內容我是內容我是內容我是內容我是內容我是內容</h2>
                    </div>
                </article>              
            </div>
            <div>
                <button class="btn" @click="$emit('ModalbServiceComment')">關閉</button>
                <button class="btn" @click="$emit('ModalbServiceComment')">儲存</button>
            </div>
        </section>
    </div>
</div>
</template>

<!-- scoped切勿拿掉 -->
<style lang="scss" scoped>
@import '@/sass/main.scss';


.bServiceComment{
    width: 1000px;
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
            flex-basis: 45%;
            flex-grow: 1;
            article{
                text-align: left;
                padding:15px 20px ;
                margin-top: 40px;
                height: 260px;
                h2:first-child{
                    margin-bottom: 10px;
                }
            }
        }
        >div:nth-child(2),>div:nth-child(3){
          
        }
        >div:last-child{
            flex-basis: 100%;

        }
   }
}

</style>
