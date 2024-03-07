<script setup>

defineEmits(['ModalbAct'])
</script>
<template>
    <div class="modal_mask" @click.self="$emit('ModalbAct')" >
    <div class="modal_content bAct backModal">
        <section class="bModalHeader">
            <h1>活動－編輯與查看</h1>
        </section>
        <section class="bModalContent">
            <div>
                <div>
                    <h2 class="bItem">活動ID：</h2>
                    <h2></h2>
                </div>
                <h2>活動資料</h2>
                <article>
                    <div>
                        <h2>活動類別：</h2>
                        <h2>優惠活動</h2>
                    </div>
                    <div>
                        <h2>建立日期：</h2>
                        <h2>2024/03/21</h2>
                    </div>
                    <div>
                        <h2>截止日期：</h2>
                        <h2>2024/04/21</h2>
                    </div>
                    <div>
                        <h2>優惠代碼：</h2>
                        <h2>AAAAAA</h2>
                    </div>
                    <div>
                        <h2>優惠內容：</h2>
                        <h2>*0.8</h2>
                    </div>
                    <div>
                        <h2>活動狀態：</h2>
                        <button>上架中</button>
                    </div>
                </article>
            </div>
            
            <div>
                <h2>活動圖文：</h2>
                <article>
                    
                    <div>
                        <h2>活動標題：</h2>
                        <h2>我是內容我是內容我是內容我是內容</h2>
                    </div>
                    <div>
                        <h2>活動敘述：</h2>
                        <h2>我是內容我是內容我是內容我是內容</h2>
                    </div>
                    <div>
                        <h2>活動圖片：</h2>
                        <div class="bAddPic">
                            <img src="" alt="">
                        </div>
                    </div>
                  
                </article>
            </div>
            <div>
                <button class="btn" @click="$emit('ModalbAct')">關閉</button>
                <button class="btn" @click="$emit('ModalbAct')">儲存</button>
            </div>
        </section>
    </div>
</div>
</template>

<!-- scoped切勿拿掉 -->
<style lang="scss" scoped>
@import '@/sass/main.scss';

.bAct{
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
                height: 250px;
                h2:first-child{
                    align-self: center;
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

</style>
