<script setup>

defineEmits(['ModalbProduct'])
</script>
<template>
    <div class="modal_mask" @click.self="$emit('ModalbProduct')" >
    <div class="modal_content bProduct backModal">
        <section class="bModalHeader">
            <h1>商品－編輯與查看</h1>
        </section>
        <section class="bModalContent">
            <div>
                <div>
                    <h2 class="bItem">商品ID：</h2>
                    <h2></h2>
                </div>
                <h2>商品資料</h2>
                <article>
                    <div>
                        <h2>商品類別：</h2>
                        <button>清潔工具</button>
                    </div>
                    <div>
                        <h2>商品名稱：</h2>
                        <h2>馬桶刷</h2>
                    </div>
                    <div>
                        <h2>商品款式：</h2>
                        <h2>硬毛款 軟毛款</h2>
                    </div>
                    <div>
                        <h2>商品單價：</h2>
                        <h2>790</h2>
                    </div>
                    <div>
                        <h2>商品狀態：</h2>
                        <button>上架中</button>
                    </div>
                </article>
            </div>
            
            <div>
                <article>
                    <div>
                        <h2>條列句1：</h2>
                        <h2>我是內容我是內容我是內容我是內容</h2>
                    </div>
                    <div>
                        <h2>條列句2：</h2>
                        <h2>我是內容我是內容我是內容我是內容</h2>
                    </div>
                    <div>
                        <h2>商品敘述：</h2>
                        <h2>我是內容我是內容我是內容我是內容我是內容我是內容我是內容我是內容</h2>
                    </div>
                    <h2>商品圖片：</h2>
                    <div>
                       <div class="bAddPic">
                        <img src="" alt="">
                    </div>
                    <div  class="bAddPic">
                        <img src="" alt="">
                    </div>
                    <div  class="bAddPic">
                        <img src="" alt="">
                    </div> 
                    </div>
                    
                </article>
            </div>
            <div>
                <button class="btn" @click="$emit('ModalbProduct')">關閉</button>
                <button class="btn" @click="$emit('ModalbProduct')">儲存</button>
            </div>
        </section>
    </div>
</div>
</template>

<!-- scoped切勿拿掉 -->
<style lang="scss" scoped>
@import '@/sass/main.scss';

.bProduct{
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
                h2{
                    padding: 5px 0;
                    margin: 10px 0;
                }
                h2:last-child{
                    background-color: $light-milktea;
                    padding: 0 10px;
                    border-radius:10px ;
                    line-height: 40px;
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
        article{
            div{
                display: flex;
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
                    padding: 10px 10px;
                    background-color:$light-milktea;
                    border-radius:10px ;
                }
            }
            >div:nth-child(3){
                height: 150px;
                h2:first-child{
                    align-self: center;
                }
            }
            >h2:nth-child(4){
                text-align: left;
                margin-top: 25px;
                margin-bottom: 10px;
            }
            >h2:nth-child(4)~div{
               width: 520px;
                display: flex;
                justify-content: space-between;
                div{
                  margin: 0;
                }
            }
        }
       }
       >div:last-child{
        flex-basis: 100%;
       }
    }
}

</style>
