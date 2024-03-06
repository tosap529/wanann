<script setup>

defineEmits(['ModalbArticle'])
</script>
<template>
    <div class="modal_mask" @click.self="$emit('ModalbArticle')" >
    <div class="modal_content bArticle backModal">
        <section class="bModalHeader">
            <h1>文章－編輯與查看</h1>
        </section>
        <section class="bModalContent">
            <div>
                <div>
                    <h2 class="bItem">文章ID：</h2>
                    <h2></h2>
                </div>
                <h2>文章資料</h2>
                <article>
                    <div>
                        <h2>文章類別：</h2>
                        <button>職人講座</button>
                    </div>
                    <div>
                        <h2>建立日期：</h2>
                        <h2>2023/12/31</h2>
                    </div>
                    <div>
                        <h2>文章狀態：</h2>
                        <button>上架中</button>
                    </div>
                </article>
            </div>
            
            <div>
                <h2>文章圖文：</h2>
                <article>
                    
                    <div>
                        <h2>文章標題：</h2>
                        <h2>我是內容我是內容我是內容我是內容</h2>
                    </div>
                    <div>
                        <h2>文章敘述：</h2>
                        <h2>我是內容我是內容我是內容我是內容</h2>
                    </div>
                    <div>
                        <h2>文章圖片：</h2>
                        <div class="bAddPic">
                            <img src="" alt="">
                        </div>
                    </div>
                  
                </article>
            </div>
            <div>
                <button class="btn" @click="$emit('ModalbArticle')">關閉</button>
                <button class="btn" @click="$emit('ModalbArticle')">儲存</button>
            </div>
        </section>
    </div>
</div>
</template>

<!-- scoped切勿拿掉 -->
<style lang="scss" scoped>
@import '@/sass/main.scss';

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
