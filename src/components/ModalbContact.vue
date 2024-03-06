<script setup>

defineEmits(['ModalbContact'])
</script>
<template>
    <div class="modal_mask" @click.self="$emit('ModalbContact')" >
    <div class="modal_content bContact backModal">
        <section class="bModalHeader">
            <h1>聯絡表單－編輯與查看</h1>
        </section>
        <section class="bModalContent">
            <div>
                <h2 class="bItem">表單ID：</h2>
                <h2></h2>
            </div>
            <div>
                <h2>表單資料</h2>
                <article>
                    <div>
                        <h2>姓名/單位：</h2>
                        <h2>緯育</h2>
                    </div>
                    <div>
                        <h2>聯絡電話：</h2>
                        <h2>0912345678</h2>
                    </div>
                    <div>
                        <h2>電子信箱：</h2>
                        <h2>newfiu@gmail.com</h2>
                    </div>
                    <div>
                        <h2>建立日期：</h2>
                        <h2>2024/03/06 01:30:29</h2>
                    </div>
                    <div>
                        <h2>處理狀態：</h2>
                        <button>未回覆</button>
                    </div>
                </article>
                <article>
                    <div>
                        <h2>內容描述：</h2>
                        <h2>我是內容我是內容我是內容我是內容我是內容我是內容我是內容我是內容</h2>
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
</template>

<!-- scoped切勿拿掉 -->
<style lang="scss" scoped>
@import '@/sass/main.scss';

// 燈箱客製化style從這往下寫
// 後台燈箱共通
.backModal{
    box-sizing: border-box;
    background-color: $light-milktea;
    margin: 80px auto 0;
    border-radius: 10px;
    h2.bItem{
        background-color: $white;
        padding: 10px 15px;
        border-radius: 10px;
        width: 250px;
        text-align-last: left;
        margin-bottom: 20px;
    }
.bModalHeader{
    padding: 10px 0 10px 25px;
    text-align-last: left;
    border-radius: 10px 10px 0 0;
    color: $white;
    background-color: $brown;
}
.bModalContent{
    padding:25px;
    div:last-child .btn{
        width: 120px;
        height: 40px;
        line-height: 20px;
        margin: 0 20px;
    }
}
}
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
                width: 100px;
                height: 40px;
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
        >div:last-child{
            margin-top: 20px;
            display: flex;
            justify-content: center;
        }
    }
}

</style>
