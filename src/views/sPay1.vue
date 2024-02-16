<template>
    <div>
        <div class="wrapper sPay1_wrapper">
            <section class="sPay1">

                <div class="sPay1_circle circle">
                    <div class="circle_step circle_on">
                        <h1>1</h1>
                        <h1>訂單確認</h1>
                    </div>
                    <div class="circle_step">
                        <h1>2</h1>
                        <h1>訂單填寫</h1>
                    </div>
                    <div class="circle_step">
                        <h1>3</h1>
                        <h1>訂單成立</h1>
                    </div>
                </div>

                <div class="title sPay1_title">
                    <h1>清潔服務</h1>
                </div>

                <div class="sPay1_time">
                    <h2>服務日期</h2>
                    <h2>2024/03/21</h2>
                    <h2>下午</h2>
                </div>

                <div class="sPay1_items">

                    <div class="sPay1_item">
                        <div class="sPay1_item_img">
                            <img src="@/img/service/service_icon13.png">
                        </div>
                        <h2>浣安全室清潔</h2>
                        <div class="sPay1_item_descript">
                            <h4>包含：基本清潔、廚房簡易清潔、浴室簡易清潔、臥室及客房清潔</h4>
                            <h4>所需時間：4小時</h4>
                            <h4>適合坪數：室內25坪</h4>
                        </div>
                        <div class="sPay1_item_descript_price">
                            <h2>NTD4,000</h2>
                        </div>
                    </div>

                    <div class="sPay1_item">
                        <div class="sPay1_item_img">
                            <img src="@/img/service/service_icon3.png">
                        </div>
                        <h2>冷氣機清理</h2>
                        <div class="sPay1_item_descript">
                            <h4>濾網清理、散熱鋁鰭片清理</h4>
                        </div>
                        <div class="sPay1_item_descript_price">
                            <h2>NTD500</h2>
                            <i class="fa-solid fa-trash"></i>
                        </div>
                    </div>

                    <div class="sPay1_item">
                        <div class="sPay1_item_img">
                            <img src="@/img/service/service_icon9.png">
                        </div>
                        <h2>毛孩服務</h2>
                        <div class="sPay1_item_descript">
                            <h4>適用於家中有飼養狗、貓等寵物的用戶</h4>
                        </div>
                        <div class="sPay1_item_descript_price">
                            <h2>人工估價(由施作人員現場收費)</h2>
                            <i class="fa-solid fa-trash"></i>
                        </div>
                    </div>

                </div>

                <div class="sPay1_coupon">
                    <div class="sPay1_coupon_number">
                        <h3>優惠代碼</h3>
                        <input class="sPay1_coupon_input" type="text" placeholder="請輸入優惠代碼">
                        <button class="btn sPay1_btn">兌換</button>
                        <p class="sPay1_coupon_success">兌換成功</p>
                    </div>
                    <div class="sPay1_coupon_discount">
                        <h2>優惠代碼</h2>
                        <h2>NTD -100</h2>
                    </div>
                </div>

                
                <div class="sPay1_payment">
                    <h3>付款方式</h3>
                    <h3>信用卡</h3>
                </div>
                
                <div class="sPay1_total">
                        <h2>總金額</h2>
                        <h1>NTD4,400</h1>
                </div>

                <button class="btn sPay1_nextpage">下一步</button>

            </section>
        
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss">
@import '@/sass/main.scss';

</style>