<script setup>
    // 設置header及footer
    import DefaultHeader from '@/layouts/header.vue'; // 引入header(請照抄)
    import DefaultFooter from '@/layouts/footer.vue'; // 引入footer(請照抄)
    import BannerUrl  from '@/img/pay/pay_banner.jpg'; // 更改成banner路徑
    const banner_url = BannerUrl; // banner路徑令變數(請照抄)
</script>



<template>
    <div>
        <DefaultHeader header-title-zh="服務結帳" header-title-eng="Checkout" :bgi="banner_url" />
        <div class="wrapper sPay2_wrapper">
            <section class="mPay_2">

                <div class="circle sPay2_circle">
                    <div class="circle_step">
                        <h1>1</h1>
                        <h1>訂單確認</h1>
                    </div>
                    <div class="circle_step circle_on">
                        <h1>2</h1>
                        <h1>訂單填寫</h1>
                    </div>
                    <div class="circle_step">
                        <h1>3</h1>
                        <h1>訂單成立</h1>
                    </div>
                </div>

                <div class="title sPay2_title">
                    <h1>清潔服務</h1>
                </div>

                <div class="sPay2_time">
                    <h2>服務日期</h2>
                    <h2>2024/03/21</h2>
                    <h2>下午</h2>
                </div>

                <div class="sPay2_items">

                    <div class="sPay2_item">

                        <div class="sPay2_item_img">
                            <img src="@/img/service/service_icon13.png">
                        </div>

                        <div class="sPay2_item_layout">

                            <h2>浣安全室清潔</h2>
                            <div class="sPay2_item_descript">
                                <h4>包含：基本清潔、廚房簡易清潔、浴室簡易清潔、臥室及客房清潔</h4>
                                <h4>所需時間：4小時</h4>
                                <h4>適合坪數：室內25坪</h4>
                            </div>
                            <div class="sPay2_item_descript_price">
                                <h2>NTD4,000</h2>
                            </div>

                        </div>
                        
                    </div>

                    <div class="sPay2_item">

                        <div class="sPay2_item_img">
                            <img src="@/img/service/service_icon3.png">
                        </div>

                        <div class="sPay2_item_layout">
                            <h2>冷氣機清理</h2>
                            <div class="sPay2_item_descript">
                                <h4>濾網清理、散熱鋁鰭片清理</h4>
                            </div>
                            <div class="sPay2_item_descript_price">
                                <h2>NTD500</h2>
                            </div>
                        </div>

                    </div>

                    <div class="sPay2_item">
                        <div class="sPay2_item_img">
                            <img src="@/img/service/service_icon9.png">
                        </div>

                        <div class="sPay2_item_layout">
                            <h2>毛孩服務</h2>
                            <div class="sPay2_item_descript">
                                <h4>適用於家中有飼養狗、貓等寵物的用戶</h4>
                            </div>
                            <div class="sPay2_item_descript_price">
                                <h2>人工估價<br>(由施作人員現場收費)</h2>
                            </div>
                        </div>

                    </div>

            </div>

                <div class="sPay2_coupon">
                        <h2>優惠代碼</h2>
                        <h2>NTD -100</h2>
                </div>

                <div class="sPay2_total">
                    <h2>總金額</h2>
                    <h1>NTD4,400</h1>
                </div>

                <div class="sPay2_info">
                    <div class="sPay2_custom">

                        <div class="title sPay2_title">
                            <h1>預約人資料</h1>
                        </div>

                        <div class="sPay2_info_name">
                            <h2>預約人姓名</h2>
                            <input type="text" placeholder="預約人姓名">
                        </div>

                        <div class="sPay2_info_phone">
                            <h2>預約人手機號碼</h2>
                            <input type="text" placeholder="請輸入手機號碼">
                        </div>

                        <div class="sPay2_info_address">
                            <h2>清潔服務地址</h2>
                            <input class="sPay2_info_address_input" type="text" placeholder="請輸入預約地址">
                            <input type="radio" id="sPay2_address_as_member"><label for="sPay2_address_as_member">同會員地址</label>
                        </div>

                        <div class="sPay2_notes">
                            <h2>備註</h2>
                            <textarea placeholder="這裡輸入您的備註" name="" id="" cols="10" rows="10"></textarea>
                        </div>
                    </div>

                    <div class="sPay2_payment">
                        <h2>信用卡資料</h2>

                        <div class="sPay2_card_number">
                            <h3>信用卡號碼</h3>
                            <input type="text" maxlength="4">
                            <input type="text" maxlength="4">
                            <input type="text" maxlength="4">
                            <input type="text" maxlength="4">
                        </div>

                        <div class="sPay2_card_info">

                            <div class="sPay2_card_date">
                                <h3>到期日</h3>
                                <input type="text" placeholder="到期日">
                            </div>

                            <div class="sPay2_card_safe">
                                <h3>安全驗證碼</h3>
                                <input type="text">
                            </div>
                        </div>

                        <div class="sPay2_card_name">
                            <h3>持卡者姓名</h3>
                            <input type="text" placeholder="持卡者姓名">
                        </div>

                        <div class="sPay2_card_address">
                            <h3>信用卡帳單地址</h3>
                            <input type="text" placeholder="信用卡帳單地址">
                        </div>

                        <div class="sPay2_card_post">
                            <h3>郵遞區號</h3>
                            <input type="text" placeholder="郵遞區號">
                        </div>

                    </div>

                </div>

                <button class="btn sPay2_nextpage">下一步</button>

                
            </section>


        </div>
        <DefaultFooter />
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss">


</style>