<script setup>
import { ref } from 'vue';
import wrapper from '@/layouts/wrapper.vue'; 
import DefaultHeader from '@/layouts/header.vue'; 
import DefaultFooter from '@/layouts/footer.vue'; 
import BannerUrl  from '@/img/contact/contact_banner.jpg'; 
const banner_url = BannerUrl;


    const formData =ref({
    name: '',
    phone: '',
    email: '',
    message: ''
    });

    // const formData = {
    // name: 'Test1',
    // phone: '3333',
    // email: 'xxxx@gmail.com',
    // message: 'ssss'
    // };

    const submitForm = () => {
    const url = 'http://localhost/thd104/public/php/contact_insert.php';

    
    
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData.value) // 注意這裡使用了 formData.value
    })
    .then(response => response.text())
    .then(response => {
        alert("傳送成功")
        console.log(response);
        
        // 清空表單數據
        formData.value.name = '';
        formData.value.phone = '';
        formData.value.email = '';
        formData.value.message = '';
    })
    .catch(error => {
        console.error('Error:', error);
    });
};

</script>
<template>
   
    <div>
        <DefaultHeader header-title-zh="聯絡我們" header-title-eng="Contact" :bgi="banner_url" /> 

        <wrapper class="contact_wrapper"> 
           
            <section class="cs_info">
                <div class="title">
                    <h1>客服資訊</h1>
                </div>

                <div class="contact_top">
                    <ul>
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

                <ul>
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
                

            </section>


       
            <section class="contact_form">
                <div class="title">
                    <h1>聯絡表單</h1>
                </div>
                <p>有相關問題可填寫以下表單，浣安將於3個工作天內回覆，若您一直未收到回覆，歡迎來電詢問，謝謝！</p>
                
                <form @submit.prevent="submitForm">
                    <div class="contact_input">
                        <label for="name">姓名/單位</label>
                        <input v-model="formData.name" type="text" id="name" name="name" required>
                    </div>
                    <div class="contact_input">
                        <label for="phone">手機號碼</label>
                        <input v-model="formData.phone" type="tel" id="phone" name="phone" pattern="[0-9]{10}" title="請輸入10位數字" required>
                    </div>
                    <div class="contact_input">
                        <label for="email">電子信箱</label>
                        <input v-model="formData.email" type="email" id="email" name="email" required>
                    </div>
                    <div class="contact_input ">
                        <label for="message" class="message">問題描述</label>
                        <textarea v-model="formData.message" id="message" name="message" required></textarea >
                    </div>
                    <button type="submit" class="btn">送出</button>
                </form>
        
            <!-- <form action="#" method="post">
                <div class="contact_input">
                    <label for="name">姓名/單位</label>
                    <input type="text" id="name" name="name">
                </div>
                <div class="contact_input">
                    <label for="phone">手機號碼</label>
                    <input type="tel" id="phone" name="phone">
                </div>

                <div class="contact_input">
                    <label for="email">電子信箱</label>
                    <input type="email" id="email" name="email">
                </div>

                <div class="contact_input ">
                    <label for="message" class="message">問題描述</label>
                    <textarea id="message" name="message"></textarea>
                </div>
                <button type="submit" class="btn">送出</button>

            </form> -->

        </section>
        </wrapper>
        <DefaultFooter />
    </div>
</template>



<style lang="scss">


</style>