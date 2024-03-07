<script setup>

defineEmits(['ModalbMember'])
</script>
<template>
    <div class="modal_mask" @click.self="$emit('ModalbMember')" >
    <div class="modal_content bMember backModal">
        <section class="bModalHeader">
            <h1>會員註冊資料－編輯與查看</h1>
        </section>
        <section class="bModalContent">
            <div>
                <img src="" alt="">
            </div>
            <div>
                <h2>會員資料</h2>
                <article>
                    <div>
                        <h2>姓名：</h2>
                        <h2>王小明</h2>
                    </div>
                    <div>
                        <h2>手機號碼：</h2>
                        <h2>0912345678</h2>
                    </div>
                    <div>
                        <h2>電子信箱：</h2>
                        <h2>newfiu@gmail.com</h2>
                    </div>
                    <div>
                        <h2>服務地址：</h2>
                        <h2>台北市中正區重慶南路一段122號</h2>
                    </div>
                    <div>
                        <h2>收件地址：</h2>
                        <h2>台北市中正區重慶南路一段122號</h2>
                    </div>
                </article>              
            </div>
            <div>
                <h2>帳號資料</h2>
                <article>
                    <div>
                        <h2>帳號：</h2>
                        <h2>thd104</h2>
                    </div>
                    <div>
                        <h2>密碼：</h2>
                        <h2>********</h2>
                    </div>
                    <div>
                        <h2>權限：</h2>
                        <button>正常</button>
                    </div>
                </article>              
            </div>
            <div>
                <button class="btn" @click="$emit('ModalbMember')">關閉</button>
                <button class="btn" @click="$emit('ModalbMember')">儲存</button>
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

.bMember{
    width: 1000px;
    // height: 660px;
   .bModalContent  {
    display: flex;
    flex-wrap: wrap;
        >div:first-child{
            width: 150px;
            height: 150px;
            border-radius: 50%;
            background-image: url(@/img/cms/cms_modal_add_icon.png);
            background-size: 50% 50%;
            background-repeat: no-repeat;
            background-position: 50% 50%;
            background-color: $medium-milktea;
            margin-right: 40px;
        }
        >div:nth-child(2){
            flex-basis: 50%;
            margin-right: 25px;
            article div  h2:first-child{
                    flex-basis: 100px;
                    text-align: left;
                   }
        }
        >div:nth-child(3){
            flex-grow: 1;
      
        }
        >div:nth-child(2),>div:nth-child(3){
            >h2{
                text-align: left;
                margin-bottom: 10px;
            }
            article{
                
                >div{
                    display: flex;
                   h2{
                    padding: 5px 0;
                    margin: 10px 0;
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
