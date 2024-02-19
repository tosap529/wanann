<script setup>

import DefaultHeader from '@/layouts/header.vue'; 
import DefaultFooter from '@/layouts/footer.vue'; 
import BannerUrl  from '@/img/contact/contact_banner.jpg'; 
const banner_url = BannerUrl;


</script>
<template>
   
    <div>
        <DefaultHeader header-title-zh="聯絡我們" header-title-eng="Contact" :bgi="banner_url" /> 
        <div class="wrapper contact_wrapper">
           

            <h1>客服資訊</h1>
            <div class="contact_container">
                <div class="left">
                    <ul class="contact_social">
                        
                        <li>
                            <img src="@/img/contact/contact_phone.png" alt="">
                            <div class="contact_phone">
                                <p>電話：02-12345678</p>
                                <p>受理時間：週一至週五</p>
                                <p>9：00-12：00 / 13：00-17：30</p>
                            </div>
                        </li>
                        <li>
                            <img src="@/img/contact/contact_line.png" alt="">
                            <p>Line：@@wanann</p>
                        </li>
                        <li>
                            <img src="@/img/contact/contact_e-mail.png" alt="">
                            <p>E-mail：wa@rmall.com</p>
                        </li>
                    </ul>
                </div>

                <div class="right">
                    <ul class="contact_social">
                        <li>
                            <img src="@/img/contact/contact_map.png" alt="">
                            <p>地址：台北市中山區南京東路三段219號4樓、5樓</p>
                        </li>
                        <li>
                            <img src="@/img/contact/contact_fb.png" alt="">
                            <p>FB：搜尋「浣安」</p>
                        </li>
                    </ul>
                </div>

            </div>
        </div>

    


        <div class="contact_form">
            <h1>聯絡表單</h1>
            <p>有相關問題可填寫以下表單，浣安將於3個工作天內回覆，若您一直未收到回覆，歡迎來電詢問，謝謝！</p>
            <form action="#" method="post">
                <div class="contact_input">
                    <label for="name">姓名/單位</label>
                    <input type="text" id="name" name="name" placeholder="您的姓名">
                </div>
                <div class="contact_input">
                    <label for="phone">手機號碼:</label>
                    <input type="tel" id="phone" name="phone" placeholder="手機號碼">
                </div>

                <div class="contact_input">
                    <label for="email">電子信箱:</label>
                    <input type="email" id="email" name="email" placeholder="電子信箱">
                </div>

                <div class="contact_input">
                    <label for="message" class="messag">問題描述:</label>
                    <textarea id="message" name="message" placeholder="問題描述"></textarea>
                </div>
                <button type="submit" class="btn">送出</button>

            </form>
        </div>
        <DefaultFooter />
    </div>

</template>



<style lang="scss">


</style>