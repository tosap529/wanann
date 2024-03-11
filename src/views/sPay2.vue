<template>
    <div>
        <DefaultHeader header-title-zh="服務結帳" header-title-eng="Checkout" :bgi="banner_url" />
        <wrapper class="wrapper sPay2_wrapper">
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
                    <h2>{{ reserveStore.reserveItem.service_date }}</h2>
                    <h2>{{ reserveStore.reserveItem.service_time }}</h2>
                </div>

                <div class="sPay2_items">

                    <!-- 主服務 -->
                    <div class="sPay2_item">

                        <div class="sPay2_item_img">
                            <img v-if="reserveStore.reserveItem.main_service" v-bind:src="reserveStore.reserveItem.main_service.SERVICE_PIC">
                        </div>

                        <div class="sPay2_item_layout" v-if="reserveStore.reserveItem.main_service">

                            <h2>{{ reserveStore.reserveItem.main_service.SERVICE_NAME }}</h2>
                            <div class="sPay2_item_descript">
                                <h4>包含：{{ reserveStore.reserveItem.main_service.SERVICE_CONTENT }}</h4>
                            </div>
                            <div class="sPay2_item_descript_price">
                                <h2>NTD {{ reserveStore.reserveItem.main_service.SERVICE_PRICE }}</h2>
                            </div>

                        </div>

                    </div>

                    <!-- <div class="sPay2_item">

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
                                <h2>NTD 4,000</h2>
                            </div>

                        </div>
                        
                    </div> -->

                    <!-- 附加服務 -->
                    <div v-for="(item, index) in reserveStore.reserveItem.add_spec_service" :key="item.ID" class="sPay2_item">

                        <div class="sPay2_item_img">
                            <!-- <img src="@/img/service/service_icon3.png"> -->
                            <img v-bind:src="item.ADD_SERVICE_PIC">
                        </div>

                        <div class="sPay2_item_layout">
                            <h2>{{ item.ADD_SERVICE_NAME }}</h2>
                            <div class="sPay2_item_descript">
                                <h4>{{ item.ADD_SERVICE_CONTENT }}</h4>
                            </div>
                            <div class="sPay2_item_descript_price">
                                <h2 v-if="item.ADD_SERVICE_PRICE === 0">人工估價 (由施作人員現場收費)</h2>
                                <h2 v-else>NTD {{ item.ADD_SERVICE_PRICE }}</h2>
                            </div>
                        </div>

                    </div>


                    <!-- <div class="sPay2_item">
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

                    </div> -->

            </div>

                <div class="sPay2_coupon">
                        <h2>優惠代碼</h2>
                        <h2>NTD {{ -reserveStore.couponDiscount }}</h2>
                </div>

                <div class="sPay2_total">
                    <h2>總金額</h2>
                    <h1>NTD {{ reserveStore.totalPrice }}</h1>
                </div>

                <div class="sPay2_info">
                    <div class="sPay2_custom">

                        <div class="title sPay2_title">
                            <h1>預約人資料</h1>
                        </div>


                        <div class="sPay2_info_name">
                            <h2>預約人姓名</h2>
                            <input type="text" placeholder="預約人姓名" v-model="form.recipientName">
                            <span v-if="errors.recipientName">*這是必填欄位</span>
                        </div>
                        <!-- <div class="sPay2_info_name">
                            <h2>預約人姓名</h2>
                            <input type="text" placeholder="預約人姓名">
                        </div> -->




                        <div class="sPay2_info_phone">
                            <h2>預約人手機號碼</h2>
                            <input type="text" placeholder="請輸入手機號碼" v-model="form.recipientPhone">
                            <span v-if="errors.recipientPhone">*這是必填欄位</span>
                        </div>
                        <!-- <div class="sPay2_info_phone">
                            <h2>預約人手機號碼</h2>
                            <input type="text" placeholder="請輸入手機號碼">
                        </div> -->



                        <div class="sPay2_info_address">
                            <h2>清潔服務地址</h2>
                            <input type="text" class="sPay2_info_address_input" placeholder="請輸入服務地址" v-model="address">
                            <span v-if="errors.address">*這是必填欄位</span>
                            <input type="checkbox" id="sPay2_address_as_member" v-model="useMemberAddress">
                            <label for="sPay2_address_as_member">同會員地址</label>
                        </div>
                        <!-- <div class="sPay2_info_address">
                            <h2>清潔服務地址</h2>
                            <input class="sPay2_info_address_input" type="text" placeholder="請輸入預約地址">
                            <input type="radio" id="sPay2_address_as_member"><label for="sPay2_address_as_member">同會員地址</label>
                        </div> -->

                        <div class="sPay2_notes">
                            <h2>備註</h2>
                            <textarea placeholder="這裡輸入您的備註" name="" id="" cols="10" rows="10"></textarea>
                        </div>
                    </div>

                    <div class="sPay2_payment">
                        <h2>信用卡資料</h2>

                        <div class="sPay2_card_number">
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
                        
                        
                        <!-- <div class="sPay2_card_number">
                            <h3>信用卡號碼</h3>
                            <input type="text" maxlength="4">
                            <input type="text" maxlength="4">
                            <input type="text" maxlength="4">
                            <input type="text" maxlength="4">
                        </div> -->

                        <div class="sPay2_card_info">



                            <div class="sPay2_card_date">
                                <h3>到期日</h3>
                                <input type="text" placeholder="到期日" v-model="form.expiryDate">
                                <span v-if="errors.expiryDate">*這是必填欄位</span>
                            </div>
                            <!-- <div class="sPay2_card_date">
                                <h3>到期日</h3>
                                <input type="text" placeholder="到期日">
                            </div> -->


                            <div class="sPay2_card_safe">
                                <h3>安全驗證碼</h3>
                                <input type="text" maxlength="3" v-model="form.securityCode">
                                <span v-if="errors.securityCode">*請輸入有效的安全碼</span>
                            </div>
                            <!-- <div class="sPay2_card_safe">
                                <h3>安全驗證碼</h3>
                                <input type="text">
                            </div> -->
                        </div>


                        <div class="sPay2_card_name">
                            <h3>持卡者姓名</h3>
                            <input type="text" placeholder="持卡者姓名" v-model="form.cardHolderName">
                            <span v-if="errors.cardHolderName">*這是必填欄位</span>
                        </div>
                        <!-- <div class="sPay2_card_name">
                            <h3>持卡者姓名</h3>
                            <input type="text" placeholder="持卡者姓名">
                        </div> -->

                        <div class="sPay2_card_address">
                            <h3>信用卡帳單地址</h3>
                            <input type="text" placeholder="信用卡帳單地址" v-model="form.billingAddress">
                            <span v-if="errors.billingAddress">*這是必填欄位</span>
                        </div>
                        <!-- <div class="sPay2_card_address">
                            <h3>信用卡帳單地址</h3>
                            <input type="text" placeholder="信用卡帳單地址">
                        </div> -->


                        <div class="sPay2_card_post">
                            <h3>郵遞區號</h3>
                            <input type="text" placeholder="郵遞區號" v-model="form.postalCode">
                            <span v-if="errors.postalCode">*這是必填欄位</span>
                        </div>
                        <!-- <div class="sPay2_card_post">
                            <h3>郵遞區號</h3>
                            <input type="text" placeholder="郵遞區號">
                        </div> -->

                    </div>

                </div>

                <button class="btn sPay2_nextpage" @click="handleSubmit">下一步</button>

                
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

    import { reactive, ref, watch, computed } from 'vue';
    import { useReserveStore } from '@/stores/reserveStore.js';
    const reserveStore = useReserveStore();

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
    // const url = 'http://localhost/thd104/g1/public/php/mPay2_select.php';

    // 上伺服器
    const url = 'php/mPay2_select.php';
        
    fetch(url)
        .then(response => response.json())
        .then(response => {

            memberAddress.value = response;
        })
        .catch(error => {
            console.error('Error:', error);
        });
        

    // 後端抓回的會員地址資料
    const memberAddress = ref([])

    // 自動加上會員地址
    const address = ref('');
    const useMemberAddress = ref(false);

    const memberId = ref();
    memberId.value = sessionStorage.getItem('member_ID');

    // 勾選後自動加入地址
    watch(useMemberAddress, (newValue) => {
        if (newValue) {
            address.value = memberAddress.value[memberId.value - 1].SEND_ADDRESS
        } else {
            address.value = '';
        }
    });



    // 送出訂單資訊到後端
    const submitProductsOrder = function(){

        // SERVICE_RESERVE_TIME 表
        const SERVICE_RESERVE_TIME = {
                    SERVICE_ID : reserveStore.reserveItem.main_service.ID,
                    RESERVE_TIME_ID : 0,
                };

        const setReserveTime = function(){
            if( reserveStore.reserveItem.service_time == '上午' ){
                SERVICE_RESERVE_TIME.RESERVE_TIME_ID = 1
            }else if( reserveStore.reserveItem.service_time == '下午' ){
                SERVICE_RESERVE_TIME.RESERVE_TIME_ID = 2
            }else if( reserveStore.reserveItem.service_time == '晚間' ){
                SERVICE_RESERVE_TIME.RESERVE_TIME_ID = 3
            }
        }
            
        setReserveTime();

        // console.log(SERVICE_RESERVE_TIME);

        // 本機
        // const url_S_R_TIME = 'http://localhost/thd104/g1/public/php/sPay2_insert_S_R_TIME.php';

        // 上伺服器
        const url_S_R_TIME = 'php/sPay2_insert_S_R_TIME.php';


        fetch(url_S_R_TIME, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(SERVICE_RESERVE_TIME)
        })
        .then(response => response.text())
        .then(orderId => {
            orderId = orderId.trim();
            // console.log('Order ID:', orderId);

            setServiceOrder(orderId)

        })
        .catch(error => {
            console.error('Error:', error);
        });

    }


    // 設置ServiceOrder表
    const setServiceOrder = function(orderId){
        // service_order 表

        const service_order = {
            SERVICE_PHONE : form.recipientPhone,
            SERVICE_ADDRESS : address.value,
            MEMBER_ID : Number(memberId.value),
            SERVICE_COMMENT_ID : 1,
            SERVICE_RESERVE_TIME_ID : Number(orderId),
            SERVICE_DATE : reserveStore.reserveItem.service_date,
            ACTIVITY_ID : reserveStore.reserveItem.couponActId || 1,
        }

        // 本機
        // const url_service_order = 'http://localhost/thd104/g1/public/php/sPay2_insert_service_order.php';

        // // 上伺服器
        const url_service_order = 'php/sPay2_insert_service_order.php';

        fetch(url_service_order, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(service_order)

        })
        .then(response => response.text())
        .then(orderId => {
            orderId = orderId.trim();
            // console.log('Order ID:', orderId);

            // console.log( '第二個:',  orderId );

            setServiceOrderAddService(orderId)

        }).catch(error => {
            console.error('Error:', error);
        });


    }


    // 設置SERVICE_ORDER_ADD_SERVICE表
    const setServiceOrderAddService = function(orderId){

        // SERVICE_ORDER_ADD_SERVICE 表

        const SERVICE_ORDER_ADD_SERVICE = reserveStore.reserveItem.add_spec_service.map(item => ({
            SERVICE_ORDER_ID : orderId,
            ADD_SERVICE_ID : item.ID
        }))

        // console.log(SERVICE_ORDER_ADD_SERVICE);

        // 本機
        // const url_service_order = 'http://localhost/thd104/g1/public/php/sPay2_insert_S_O_A_Service.php';

        // 上伺服器
        const url = 'php/sPay2_insert_S_O_A_Service.php';

        fetch(url_service_order, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            // body: JSON.stringify(SERVICE_ORDER_ADD_SERVICE)
            body: JSON.stringify({ SERVICE_ORDER_ADD_SERVICE: SERVICE_ORDER_ADD_SERVICE })
        })
        .then(response => response.text())
        .then(response => {
            console.log(response);

            alert('訂單成立')
            
            // 清空服務暫存
            reserveStore.reserveItem = [];
            localStorage.removeItem('my_service_order')


            // 跳轉頁面
            router.push({ name: 'sPay3' });
        }).catch(error => {
            console.error('Error:', error);
        });

    }




</script>

<style lang="scss">

</style>


<!-- 資料樣式 -->
<!-- {
    "service_date": "3月24日",
    "service_time": "下午",
    "main_service": {
      "ID": 5,
      "SERVICE_NAME": "廚房徹底清潔",
      "SERVICE_PRICE": 2000,
      "SERVICE_CONTENT": "廚房專業清潔、加強油汙處理、廚具汰洗、水槽疏通",
      "SERVICE_PIC": "/thd104/g1/img/service/service_main_2.png"
    },
    "add_spec_service": [
      {
        "ID": 14,
        "ADD_SERVICE_NAME": "布件除螨",
        "ADD_SERVICE_PRICE": 500,
        "ADD_SERVICE_CONTENT": "為窗簾布、沙發布、床單等布件去除塵蟎",
        "ADD_SERVICE_PIC": "/thd104/g1/img/service/service_icon2.png"
      },
      {
        "ID": 15,
        "ADD_SERVICE_NAME": "冷氣機清理",
        "ADD_SERVICE_PRICE": 500,
        "ADD_SERVICE_CONTENT": "濾網清理、散熱鋁鰭片清理",
        "ADD_SERVICE_PIC": "/thd104/g1/img/service/service_icon3.png"
      },
      {
        "ID": 16,
        "ADD_SERVICE_NAME": "冰箱清理",
        "ADD_SERVICE_PRICE": 500,
        "ADD_SERVICE_CONTENT": "擦拭表面、密封條，除霜，整理食物",
        "ADD_SERVICE_PIC": "/thd104/g1/img/service/service_icon4.png"
      },
      {
        "ID": 20,
        "ADD_SERVICE_NAME": "空屋",
        "ADD_SERVICE_PRICE": 0,
        "ADD_SERVICE_CONTENT": "若屋況為空屋，則可減免價格",
        "ADD_SERVICE_PIC": "/thd104/g1/img/service/service_icon8.png"
      },
      {
        "ID": 21,
        "ADD_SERVICE_NAME": "毛孩服務",
        "ADD_SERVICE_PRICE": 0,
        "ADD_SERVICE_CONTENT": "適用於家中有飼養狗、貓等寵物的用戶",
        "ADD_SERVICE_PIC": "/thd104/g1/img/service/service_icon9.png"
      }
    ]
  } -->