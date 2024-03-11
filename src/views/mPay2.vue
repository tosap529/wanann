<template>
    <div>
        <DefaultHeader header-title-zh="商城結帳" header-title-eng="Checkout" :bgi="banner_url" />
        <wrapper class="wrapper mPay2_wrapper">
            <section class="mPay_2">

                <div class="circle mPay2_circle">
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

                <div class="title mPay2_title">
                    <h1>商城產品</h1>
                </div>

                <!-- 商品新增處 -->
                <div class="mPay2_items">

                    <div v-for="i in cartStore.cartItems" class="mPay2_item">

                        <img :src="i.PRODUCT_PIC1">

                        <div class="mPay2_item_product">

                            <div class="mPay2_item_name">
                                <h2>{{  i.PRODUCT_NAME  }}</h2>
                                <div class="mPay2_design">
                                    <h4>經典款</h4>
                                </div>
                            </div>

                        </div>

                        <div class="mPay2_item_price">
                            <h2>NTD {{  i.PRODUCT_PRICE  }}</h2>
                            <p>X{{ i.quantity }}</p>
                        </div>

                    </div>

                    <!-- <div class="mPay2_item">

                        <img src="@/img/mall/mall_product1_1.jpg">

                        <div class="mPay2_item_product">

                            <div class="mPay2_item_name">
                                <h2>浣安手工香皂</h2>
                                <div class="mPay2_design">
                                    <h4>經典款</h4>
                                </div>
                            </div>

                        </div>

                        <div class="mPay2_item_price">
                            <h2>NTD 200</h2>
                            <p>X2</p>
                        </div>

                    </div> -->

                </div>

                <div class="mPay2_coupon">
                        <h2>優惠代碼</h2>
                        <h2>NTD {{ -cartStore.couponDiscount }}</h2>
                </div>
                
                <div class="mPay2_shipping">
                        <h2>運費</h2>
                        <h2>NTD 60</h2>
                </div>

                <div class="mPay2_total">
                    <h2>總金額</h2>
                    <h1 @click="showItems">NTD {{ cartStore.totalPrice }}</h1>
                </div>

                <div class="mPay2_info">
                    <div class="mPay2_custom">

                        <div class="title mPay2_title">
                            <h1>收件人資料</h1>
                        </div>


                        <div class="mPay2_info_name">
                            <h2>收件人姓名</h2>
                            <input type="text" placeholder="收件人姓名" v-model="form.recipientName">
                            <span v-if="errors.recipientName">*這是必填欄位</span>
                        </div>
                        <!-- <div class="mPay2_info_name">
                            <h2>收件人姓名</h2>
                            <input type="text" placeholder="收件人姓名">
                        </div> -->


                        <div class="mPay2_info_phone">
                            <h2>收件人手機號碼</h2>
                            <input type="text" placeholder="請輸入手機號碼" v-model="form.recipientPhone">
                            <span v-if="errors.recipientPhone">*這是必填欄位</span>
                        </div>
                        <!-- <div class="mPay2_info_phone">
                            <h2>收件人手機號碼</h2>
                            <input type="text" placeholder="請輸入手機號碼">
                        </div> -->



                        <div class="mPay2_info_address">
                            <h2>商品收件地址</h2>
                            <input type="text" class="mPay2_info_address_input" placeholder="請輸入收件地址" v-model="address">
                            <span v-if="errors.address">*這是必填欄位</span>
                            <input type="checkbox" id="mPay2_address_as_member" v-model="useMemberAddress">
                            <label for="mPay2_address_as_member">同會員地址</label>
                        </div>

                        <!-- <div class="mPay2_info_address">
                            <h2>商品收件地址</h2>
                            <input type="text" class="mPay2_info_address_input" placeholder="請輸入收件地址" v-model="form.address">
                            <span v-if="errors.address">*這是必填欄位</span>
                            <input type="radio" id="mPay2_address_as_member">
                            <label for="mPay2_address_as_member">同會員地址</label>
                        </div> -->
                        <!-- <div class="mPay2_info_address">
                            <h2>商品收件地址</h2>
                            <input class="mPay2_info_address_input" type="text" placeholder="請輸入收件地址">
                            <input type="radio" id="mPay2_address_as_member">
                            <label for="mPay2_address_as_member">同會員地址</label>
                        </div> -->

                        <div class="mPay2_notes">
                            <h2>備註</h2>
                            <textarea placeholder="這裡輸入您的備註" name="" id="" cols="10" rows="10"></textarea>
                        </div>
                    </div>

                    <div class="mPay2_payment">
                        <h2>信用卡資料</h2>



                        <!-- 測試用的號碼  5554661536932799 -->
                        <div class="mPay2_card_number">
                            <h3>信用卡號碼</h3>
                            <input 
                                type="text" 
                                v-for="(item, index) in form.cardNumber" 
                                :key="index" 
                                v-model="form.cardNumber[index]" 
                                @input="handleCardInput($event, index)" 
                                maxlength="4"
                                >
                            </div>
                        <span v-if="errors.cardNumber">*請輸入有效的信用卡號碼</span>
                        <!-- <div class="mPay2_card_number">
                            <h3>信用卡號碼</h3>
                            <input type="text" maxlength="4">
                            <input type="text" maxlength="4">
                            <input type="text" maxlength="4">
                            <input type="text" maxlength="4">
                        </div> -->

                        <div class="mPay2_card_info">

                            <div class="mPay2_card_date">
                                <h3>到期日</h3>
                                <input type="text" placeholder="到期日" v-model="form.expiryDate">
                                <span v-if="errors.expiryDate">*這是必填欄位</span>
                            </div>
                            <!-- <div class="mPay2_card_date">
                                <h3>到期日</h3>
                                <input type="text" placeholder="到期日">
                            </div> -->


                            <div class="mPay2_card_safe">
                                <h3>安全驗證碼</h3>
                                <input type="text" maxlength="3" v-model="form.securityCode">
                                <span v-if="errors.securityCode">*請輸入有效的安全碼</span>
                            </div>
                            <!-- <div class="mPay2_card_safe">
                                <h3>安全驗證碼</h3>
                                <input type="text">
                            </div> -->
                        </div>


                        <div class="mPay2_card_name">
                            <h3>持卡者姓名</h3>
                            <input type="text" placeholder="持卡者姓名" v-model="form.cardHolderName">
                            <span v-if="errors.cardHolderName">*這是必填欄位</span>
                        </div>
                        <!-- <div class="mPay2_card_name">
                            <h3>持卡者姓名</h3>
                            <input type="text" placeholder="持卡者姓名">
                        </div> -->


                        <div class="mPay2_card_address">
                            <h3>信用卡帳單地址</h3>
                            <input type="text" placeholder="信用卡帳單地址" v-model="form.billingAddress">
                            <span v-if="errors.billingAddress">*這是必填欄位</span>
                        </div>
                        <!-- <div class="mPay2_card_address">
                            <h3>信用卡帳單地址</h3>
                            <input type="text" placeholder="信用卡帳單地址">
                        </div> -->


                        <div class="mPay2_card_post">
                            <h3>郵遞區號</h3>
                            <input type="text" placeholder="郵遞區號" v-model="form.postalCode">
                            <span v-if="errors.postalCode">*這是必填欄位</span>
                        </div>
                        <!-- <div class="mPay2_card_post">
                            <h3>郵遞區號</h3>
                            <input type="text" placeholder="郵遞區號">
                        </div> -->

                    </div>

                </div>

                <!-- <button class="btn mPay2_nextpage">下一步</button> -->
                <!-- <router-link class="btn mPay2_nextpage"  :to="{ name: 'mPay3' }" @click="handleSubmit">下一步</router-link> -->
                <button class="btn mPay2_nextpage" @click="handleSubmit">下一步</button>

                
            </section>


        </wrapper>
        <DefaultFooter />
    </div>
</template>

<script setup>
    // 設置header及footer
    import DefaultHeader from '@/layouts/header.vue';
    import DefaultFooter from '@/layouts/footer.vue';
    import BannerUrl  from '@/img/pay/pay_banner.jpg';
    import wrapper from '@/layouts/wrapper.vue';
    const banner_url = BannerUrl;
    import { useRouter } from 'vue-router';
    const router = useRouter();

    import { reactive, ref, watch } from 'vue';
    import { useCartStore } from '@/stores/cartStore.js';
    const cartStore = useCartStore();

    // 驗證欄位有無輸入
    const form = reactive({
        recipientName: '',
        recipientPhone: '',
        cardNumber: ['', '', '', ''],
        expiryDate: '',
        securityCode: '',
        cardHolderName: '',
        billingAddress: '',
        postalCode: ''
    });

    // 未顯寫的話
    const errors = ref({
        recipientName: false,
        recipientPhone: false,
        address: false,
        cardNumber: false,
        expiryDate: false,
        securityCode: false,
        cardHolderName: false,
        billingAddress: false,
        postalCode: false
    });

    function isNotEmpty(value) {
        return value.trim().length > 0;
    }


    function validateForm() {
        errors.value.recipientName = !isNotEmpty(form.recipientName);
        errors.value.recipientPhone = !isNotEmpty(form.recipientPhone);
        errors.value.address = !isNotEmpty(address.value); // 使用独立的 address ref
        errors.value.cardNumber = !isCardNumberValid(form.cardNumber);
        errors.value.securityCode = !isNotEmpty(form.securityCode) || form.securityCode.length !== 3;
        errors.value.expiryDate = !isNotEmpty(form.expiryDate);
        errors.value.cardHolderName = !isNotEmpty(form.cardHolderName);
        errors.value.billingAddress = !isNotEmpty(form.billingAddress);
        errors.value.postalCode = !isNotEmpty(form.postalCode);

        return Object.keys(errors.value).every(key => !errors.value[key]);
    }


    function handleSubmit() {
        if (validateForm()) {
            submitProductsOrder()

            // getOrderId()
            // router.push({ name: 'mPay3' });
            // console.log(orderId.value);

        } else {
            alert('有欄位未填喔');
        }
    }



    // 信用卡號碼驗證
    function isCardNumberValid(numberArray) {
        const number = numberArray.join('');
        if (number.length !== 16) {
            return false;
        }
        // 簡化的 Luhn 算法檢查
        let sum = 0;
        for (let i = 0; i < number.length; i++) {
            let digit = parseInt(number[i]);
            if (i % 2 === 0) {
                digit = digit * 2;
                if (digit > 9) {
                    digit = digit - 9;
                }
            }
            sum += digit;
        }
        return sum % 10 === 0;
    }

    // 新增的處理信用卡輸入的函數
    function handleCardInput(event, index) {
        const value = event.target.value;
        if (!/^\d*$/.test(value)) { // 只允許數字
            form.cardNumber[index] = value.replace(/\D/g, '');
        }

        if (value.length === 4 && index < 3) {
            // 當輸入4個數字後，自動聚焦到下一個輸入框
            const nextInput = event.target.nextElementSibling;
            nextInput && nextInput.focus();
        }
    }




    // API取得會員地址

    // 本機
    const url = 'http://localhost/thd104/g1/public/php/mPay2_select.php';

    // 上伺服器
    // const url = 'php/mPay2_select.php';
        
    fetch(url)
        .then(response => response.json())
        .then(response => {

            memberAddress.value = response;
        })
        .catch(error => {
            console.error('Error:', error);
        });

            
    const showItems = function(e){
        // console.log(e.target);
        // console.log(products.value);
        // console.log(items.value[2]);
        // console.log(items.value);
        // console.log(cartStore.productsForMitem);
        // console.log(memberAddress.value);

        // 商品資料(ID、數量)
        // console.log(cartStore.cartItems);

        // 活動ID
        // console.log(cartStore.couponActId);

        // console.log(form.recipientName);
        // console.log(form.recipientPhone);
        // console.log(address.value);

        // console.log(productsOrder);

        console.log(memberAddress.value[memberId.value - 1]);
        console.log(memberId.value);

    }

    // 後端抓回的會員地址資料
    const memberAddress = ref([])

    // 自動加上會員地址
    const address = ref('');
    const useMemberAddress = ref(false);

    // !!!!!!!!!!!!待施工!!!!!!!!!!!!!!!!!!!!!
    const memberId = ref();
    memberId.value = sessionStorage.getItem('member_ID');

    // 勾選後自動加入地址
    watch(useMemberAddress, (newValue) => {
        if (newValue) {
            // address.value = memberAddress.value[0].SERVICE_ADDRESS;
            address.value = memberAddress.value[memberId.value - 1].SEND_ADDRESS
        } else {
            address.value = '';
        }
    });




    


    // 送出訂單資訊到後端 PRODUCT_ORDER
    const submitProductsOrder = function(){

        const productsOrder = {
            ADDRESSEE_NAME: form.recipientName,
            ADDRESSEE_PHONE: form.recipientPhone,
            ADDRESSEE_ADDRESS: address.value,
            MEMBER_ID: memberId.value,
            ACTIVITY_ID: cartStore.couponActId || 1
        };

        // 本機
        const url = 'http://localhost/thd104/g1/public/php/mPay2_insert.php';

        // 上伺服器
        // const url = 'php/mPay2_insert.php';


        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(productsOrder)
        })
        .then(response => response.text())
        .then(orderId => {
            orderId = orderId.trim();
            console.log('Order ID:', orderId);

            orderDetail(orderId)

        })
        .catch(error => {
            console.error('Error:', error);
        });
    };




    const orderDetail = function(orderId){

        const orderItemDetail = cartStore.cartItems.map(item => ({
            PRODUCT_ID: item.ID,
            QUANTITY: item.quantity,
            PRODUCT_ORDER_ID: orderId
        }));

        console.log(orderItemDetail);


        // // 本機
        const url = 'http://localhost/thd104/g1/public/php/mPay2_insert_orderDetail.php';

        // 上伺服器
        // const url = 'php/mPay2_insert_orderDetail.php';

        fetch(url, {
            method: 'POST',
            // headers: {
            //     'Content-Type': 'application/json'
            // },
            // body: JSON.stringify(orderItemDetail)
            body: JSON.stringify({ orderItemDetail: orderItemDetail })
        })
        .then(response => response.text())
        .then(response => {
            console.log(response);
            alert('訂單成立')

            // getOrderId()
            console.log(orderId);

            // 清空購物車
            cartStore.cartItems = [];
            localStorage.removeItem('cartItems')

            // 跳轉頁面
            router.push({ name: 'mPay3' });
        }).catch(error => {
            console.error('Error:', error);
        });

    }



    
</script>

<style lang="scss">

</style>