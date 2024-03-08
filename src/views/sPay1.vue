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

                    <div class="sPay1_item">

                        <div class="sPay1_item_img">
                            <img src="@/img/service/service_icon13.png">
                            <!-- <img src="@/img/service/service_icon13.png"> -->
                        </div>

                        <div class="sPay1_item_layout">

                            <h2>{{ reserveStore.reserveItem.main_service }}</h2>
                            <div class="sPay1_item_descript">
                                <h4>包含：基本清潔、廚房簡易清潔、浴室簡易清潔、臥室及客房清潔</h4>
                                <h4>所需時間：4小時</h4>
                                <h4>適合坪數：室內25坪</h4>
                            </div>
                            <div class="sPay1_item_descript_price">
                                <h2><NTD></NTD> 4,000</h2>
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

                    <div class="sPay1_item">

                        <div class="sPay1_item_img">
                            <img src="@/img/service/service_icon3.png">
                        </div>

                        <div class="sPay1_item_layout">
                            <h2>冷氣機清理</h2>
                            <div class="sPay1_item_descript">
                                <h4>濾網清理、散熱鋁鰭片清理</h4>
                            </div>
                            <div class="sPay1_item_descript_price">
                                <h2>NTD 500</h2>
                                <font-awesome-icon class="sPay1_item_descript_price_icon" :icon="['fas', 'trash']" />
                            </div>
                        </div>

                    </div>

                    <div class="sPay1_item">
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

                    </div>

                </div>

                <div class="sPay1_des">
                    <div class="sPay1_des_step">

                        <div class="sPay1_coupon_number">
                            <h3>優惠代碼</h3>
                            <input class="sPay1_coupon_input" type="text" placeholder="請輸入優惠代碼">
                            <button class="btn sPay1_btn">兌換</button>
                            <p class="sPay1_coupon_success">兌換成功</p>
                        </div>

                        <div class="sPay1_payment">
                            <h3>付款方式</h3>
                            <h3>信用卡</h3>
                        </div>

                    </div>

                    <div class="sPay1_coupon_discount">
                        <h2>優惠代碼</h2>
                        <h2>NTD -100</h2>
                    </div>

                    
                </div>

                <div class="sPay1_total">
                    <h2>總金額</h2>
                    <!--<h1 @click="showReserve">NTD 4,400</h1>-->
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

    import { ref, onMounted, onBeforeUpdate, onUpdated } from 'vue';
    import { useReserveStore } from '@/stores/reserveStore.js';
    const reserveStore = useReserveStore();

    // local storage中的資料
    const reserveItem = getSavedReserveItems();

    function getSavedReserveItems() {
        const savedReserveItems = localStorage.getItem('my_service_order');
        if (savedReserveItems) {
            return JSON.parse(savedReserveItems);
        } else {
            return [];
        }
    }

    

    
    // 測試用的函式
    const showReserve = function() {
        console.log(reserveItem);
        console.log(mainReserve.value);
        console.log(addReserve.value);
    }

    // API
    // 本機
    /*
    const url_main_reserve = 'http://localhost/thd104/g1/public/php/sPay1_select_mainReserve.php';
    
    // 上伺服器
    // const url = 'php/mall_select.php';

    // 主服務
    const mainReserve = ref([])
    fetch(url_main_reserve)
        .then(response => response.json())
        .then(response => {

            mainReserve.value = response;

        })
        .catch(error => {
            console.error('Error:', error);
        });

    */

    
    // API
    // 本機
    /*
    const url_add_reserve = 'http://localhost/thd104/g1/public/php/sPay1_select_addReserve.php';
    
    // 上伺服器
    // const url = 'php/mall_select.php';

    // 附加服務
    const addReserve = ref([])
    fetch(url_add_reserve)
        .then(response => response.json())
        .then(response => {

            addReserve.value = response;

        })
        .catch(error => {
            console.error('Error:', error);
        });
    */
    // const finalData = ref({}); // {value: {}}
    const mainReserve = ref([]);
    const addReserve = ref([]);
    
    
    onMounted(async () => {
        const finalData = ref({}); // {value: {}}


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
        // console.log("bbbb");
        // console.log(addReserve.value);

        // localStorage
        // console.log("dd");
        // console.log(reserveItem);

        // 主要服務
        let main_plan_arr = mainReserve.value.filter((item, i) => {
            return reserveItem.main_plan.includes(item.SERVICE_NAME)
        })
        // console.log(123);
        // console.log(main_plan_arr[0].SERVICE_NAME);

        console.log(mainReserve.value);
        console.log(reserveItem.main_plan);
        

        // 附加服務
        // 比較客戶資料及後端資料庫
        // 組成新資料
        let additional_plan_arr = addReserve.value.filter((item, i) => {
            return reserveItem.additional_plan.includes(item.ADD_SERVICE_NAME);
        });
        let special_plan_arr = addReserve.value.filter((item, i) => {
            // console.log(item.ADD_SERVICE_NAME);
            return reserveItem.special_plan.includes(item.ADD_SERVICE_NAME);
        });
        let add_reserve_array = additional_plan_arr.concat(special_plan_arr);


        // console.log("yyy");
        //console.log(addReserve.value);
        // console.log(additional_plan_arr);
        // console.log(special_plan_arr);
        // console.log(typeof add_reserve_array);

        finalData.value = {
            service_date: reserveItem.service_date,
            service_time: reserveItem.service_time_range,
            main_service: main_plan_arr,
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

        // console.log(reserveStore.reserveItem);
        console.log(finalData.value.add_spec_service);
        console.log(main_plan_arr);
    });


</script>


<style lang="scss">


</style>