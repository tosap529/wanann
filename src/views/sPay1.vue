<template>
    <div>
        <DefaultHeader header-title-zh="服務結帳" header-title-eng="Checkout" :bgi="banner_url" />
        <wrapper class="wrapper sPay1_wrapper">
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
                    <h2>{{ reserveStore.reserveItem.service_date }}</h2>
                    <h2>{{ reserveStore.reserveItem.service_time }}</h2>
                </div>

                <div class="sPay1_items">

                    <!-- 主服務 -->
                    <div class="sPay1_item">

                        <div class="sPay1_item_img">
                            <!-- <img src="@/img/service/service_icon13.png"> -->
                            <img v-if="reserveStore.reserveItem.main_service" v-bind:src="reserveStore.reserveItem.main_service.SERVICE_PIC">
                        </div>

                        <div class="sPay1_item_layout" v-if="reserveStore.reserveItem.main_service">

                            <h2>{{ reserveStore.reserveItem.main_service.SERVICE_NAME }}</h2>
                            <div class="sPay1_item_descript">
                                <h4>包含：{{ reserveStore.reserveItem.main_service.SERVICE_CONTENT }}</h4>
                                <!-- <h4>所需時間：4小時</h4>
                                <h4>適合坪數：室內25坪</h4> -->
                            </div>
                            <div class="sPay1_item_descript_price">
                                <h2>NTD {{ reserveStore.reserveItem.main_service.SERVICE_PRICE }}</h2>
                            </div>

                        </div>

                    </div>
                    <!-- <div class="sPay1_item">

                        <div class="sPay1_item_img">
                            <img src="@/img/service/service_icon13.png">
                        </div>

                        <div class="sPay1_item_layout">

                            <h2>浣安全室清潔</h2>
                            <div class="sPay1_item_descript">
                                <h4>包含：基本清潔、廚房簡易清潔、浴室簡易清潔、臥室及客房清潔</h4>
                                <h4>所需時間：4小時</h4>
                                <h4>適合坪數：室內25坪</h4>
                            </div>
                            <div class="sPay1_item_descript_price">
                                <h2>NTD 4,000</h2>
                            </div>

                        </div>
                        
                    </div> -->

                    <!-- 附加服務 -->
                    <div v-for="(item, index) in reserveStore.reserveItem.add_spec_service" :key="item.ID" class="sPay1_item">

                        <div class="sPay1_item_img">
                            <!-- <img src="@/img/service/service_icon3.png"> -->
                            <img v-bind:src="item.ADD_SERVICE_PIC">
                        </div>

                        <div class="sPay1_item_layout">
                            <h2>{{ item.ADD_SERVICE_NAME }}</h2>
                            <div class="sPay1_item_descript">
                                <h4>{{ item.ADD_SERVICE_CONTENT }}</h4>
                            </div>
                            <div class="sPay1_item_descript_price">
                                <h2 v-if="item.ADD_SERVICE_PRICE === 0">人工估價 (由施作人員現場收費)</h2>
                                <h2 v-else>NTD {{ item.ADD_SERVICE_PRICE }}</h2>
                                <!-- <font-awesome-icon class="sPay1_item_descript_price_icon" :icon="['fas', 'trash']" /> -->
                                <font-awesome-icon 
                                    class="sPay1_item_descript_price_icon" 
                                    :icon="['fas', 'trash']" 
                                    @click="removeService(item.ID)" 
                                />
                            </div>
                        </div>

                    </div>

                    <!-- <div class="sPay1_item">
                        <div class="sPay1_item_img">
                            <img src="@/img/service/service_icon9.png">
                        </div>

                        <div class="sPay1_item_layout">
                            <h2>毛孩服務</h2>
                            <div class="sPay1_item_descript">
                                <h4>適用於家中有飼養狗、貓等寵物的用戶</h4>
                            </div>
                            <div class="sPay1_item_descript_price">
                                <h2>人工估價<br>(由施作人員現場收費)</h2>
                                <font-awesome-icon class="sPay1_item_descript_price_icon" :icon="['fas', 'trash']" />
                            </div>
                        </div>

                    </div> -->
                </div>

                <div class="sPay1_des">
                    <div class="sPay1_des_step">

                        <div class="sPay1_coupon_number">
                            <h3>優惠代碼</h3>
                            <input class="sPay1_coupon_input" type="text" placeholder="請輸入優惠代碼" v-model="inputNumber">
                            <button class="btn sPay1_btn" @click="isCouponMatch">兌換</button>
                            <!-- <p class="sPay1_coupon_success">兌換成功</p> -->
                            <p v-if="couponStatus === true" class="sPay1_coupon_success">兌換成功！</p>
                            <p v-if="couponStatus === false" class="sPay1_coupon_fail">兌換失敗！</p>
                        </div>

                        <div class="sPay1_payment">
                            <h3>付款方式</h3>
                            <h3>信用卡</h3>
                        </div>

                    </div>

                    <div class="sPay1_coupon_discount">
                        <h2>優惠代碼</h2>
                        <h2>NTD {{ -couponDiscount }}</h2>
                        
                    </div>

                    
                </div>

                <div class="sPay1_total">
                    <h2>總金額</h2>
                    <h1 @click="showcouponArray">NTD {{ totalPrice }}</h1>
                    <h2 v-if="hasFreeService">現場估價</h2>
                </div>

                <!-- <button class="btn sPay1_nextpage">下一步</button> -->
                <router-link class="btn sPay1_nextpage" :to="{ name: 'sPay2' }">下一步</router-link>

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

    import { ref, onMounted, onBeforeUpdate, onUpdated, computed } from 'vue';
    import { useReserveStore } from '@/stores/reserveStore.js';
    const reserveStore = useReserveStore();


    // local storage中的資料
    const reserveItemLocal = getSavedReserveItems();

    function getSavedReserveItems() {
        const savedReserveItems = localStorage.getItem('my_service_order');
        if (savedReserveItems) {
            return JSON.parse(savedReserveItems);
        } else {
            return [];
        }
    }

    // 移除單一商品
    const removeService = (serviceId) => {
        reserveStore.removeAdditionalService(serviceId);
    };

    // const removeService = (serviceId) => {
    //     // 更新 Pinia store 中的 reserveItem
    //     reserveStore.removeAdditionalService(serviceId);

    //     // 更新 localStorage 中的 reserveItemLocal
    //     reserveItemLocal.add_spec_service = reserveItemLocal.add_spec_service.filter(service => service.ID !== serviceId);
    //     localStorage.setItem('my_service_order', JSON.stringify(reserveItemLocal));
    // };

    const totalPrice = computed(() => reserveStore.totalPrice);






    // 優惠代碼API
    
    const couponNumber = ref();
    // 本機
    const url = 'http://localhost/thd104/g1/public/php/mPay1_select.php';

    // 上伺服器
    // const url = 'php/mPay1_select.php';
        
    fetch(url)
        .then(response => response.json())
        .then(response => {

            couponNumber.value = response;
        })
        .catch(error => {
            console.error('Error:', error);
        });

    const showcouponArray = function(){
        console.log(couponNumber.value);
    }

    // 優惠券兌換
    const inputNumber = ref();

    const couponCheck = function() {
        if (Array.isArray(couponNumber.value)) {
            const foundCoupon = couponNumber.value.find(item => item.COUPON_ID === inputNumber.value);


            return foundCoupon || null;
        }
        return null;

    };

    const couponStatus = ref(null);
    const couponDiscount = ref(0)

    const isCouponMatch = function() {
        const matchedCoupon = couponCheck();
        if (matchedCoupon) {
            couponStatus.value = true;
            couponDiscount.value = matchedCoupon.COUPON_PRICE;

            reserveStore.couponDiscount = matchedCoupon.COUPON_PRICE

            reserveStore.couponActId = matchedCoupon.ID
            reserveStore.calculateTotalPrice();

        } else {
            couponStatus.value = false;
            couponDiscount.value = 0;

            reserveStore.couponDiscount = 0;
            reserveStore.calculateTotalPrice();
        }

    };






    

    
    // 測試用的函式
    const showReserve = function() {
        console.log(reserveItem);
        console.log(mainReserve.value);
        console.log(addReserve.value);
    }

    
    const mainReserve = ref([]);
    const addReserve = ref([]);
    const finalData = ref({}); // {value: {}}
    
    onMounted(async () => {

        const url_main_reserve = 'http://localhost/thd104/g1/public/php/sPay1_select_mainReserve.php';
        const response1 = await fetch(url_main_reserve);
        const data1 = await response1.json();
        mainReserve.value = data1;
        // console.log("aaaa");
        // console.log(mainReserve.value);


        const url_add_reserve = 'http://localhost/thd104/g1/public/php/sPay1_select_addReserve.php';
        // 附加服務
        const response2 = await fetch(url_add_reserve);
        const data2 = await response2.json();
        addReserve.value = data2;
    

        // 主要服務
        let main_plan_arr = mainReserve.value.filter((item, i) => {
            return reserveItemLocal.main_plan.includes(item.SERVICE_NAME)
        })


        console.log(mainReserve.value);
        console.log(reserveItemLocal.main_plan);
        

        // 附加服務
        // 比較客戶資料及後端資料庫
        // 組成新資料
        let additional_plan_arr = addReserve.value.filter((item, i) => {
            return reserveItemLocal.additional_plan.includes(item.ADD_SERVICE_NAME);
        });
        let special_plan_arr = addReserve.value.filter((item, i) => {
            // console.log(item.ADD_SERVICE_NAME);
            return reserveItemLocal.special_plan.includes(item.ADD_SERVICE_NAME);
        });
        let add_reserve_array = additional_plan_arr.concat(special_plan_arr);


        // console.log("yyy");
        //console.log(addReserve.value);
        // console.log(additional_plan_arr);
        // console.log(special_plan_arr);
        // console.log(typeof add_reserve_array);

        finalData.value = {
            service_date: reserveItemLocal.service_date,
            service_time: reserveItemLocal.service_time_range,
            main_service: main_plan_arr[0],
            add_spec_service: add_reserve_array,
        }

        // console.log(finalData.value.main_plan_arr);


        // {
        //     service_date: "2024/03/21",
        //     service_time: "afternoon",
        //     main_service: {
        //         pic: "aa",
        //         name: "",
        //         content: "",
        //         price: 4000
        //     },
        //     add_spec_service: [
        //         {
        //             pic: "bbb",
        //             name: "",
        //             content: "",
        //             price: 100
        //         },
        //         {

        //         }
        //     ]
        // }
        
    
        reserveStore.reserveItem = finalData.value

        reserveStore.calculateTotalPrice();
        console.log('所有資料');
        console.log(finalData.value);

        console.log(finalData.value.service_date);
        console.log(finalData.value.service_time);

        console.log('主要服務');
        console.log(finalData.value.main_service[0].SERVICE_PIC);

        console.log('附加服務');
        console.log(finalData.value.add_spec_service[0].ADD_SERVICE_NAME);

        console.log(reserveItemLocal);


    });


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