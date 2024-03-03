<script setup>
// 把選擇的月份&日期印在畫面上，還沒寫
defineProps(['monthSelect','daySelect']);

import {ref} from 'vue';
import CalendarDay from '@/components/calendarDay.vue';

    // 閏年(今年)
    let month_olympic = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    let myYear = 2024;
    let myMonth = 3;
    let days_pool =ref([]);

    let testDate = new Date(myYear, myMonth, 1); 
    let firstDate = testDate.getDay()
    console.log(testDate.getDay())//取得第一天是星期幾
    // console.log(month_olympic[myMonth-1]);
    for(let i = 0; i<month_olympic[myMonth-1]+firstDate;i++){
        if(i<firstDate){
            days_pool.value.push('');
        }else{
            days_pool.value.push(i-firstDate+1);

        }
    }
    console.log(days_pool);

let my_service_order = JSON.parse(localStorage.getItem("my_service_order"));
let selectedDay = ref('');
let selectedMonth = ref('');
// let selectedDate = ref('');
let selectedDate_panel = ref(null);


const day_outline = '2px solid #9B7B6C';

const selectDay_el=(e)=>{
    // console.log(e.target.closest('article').querySelector('h2'))
    selectedMonth = parseInt(e.target.closest('div.calendar').querySelector(".month>h2").innerText);
    // console.log(selectedMonth);
    selectedDay = e.target.closest('article').querySelector('h2').innerText;

    let all_calendar_day = e.target.closest('section.week').querySelectorAll('div article');
    for (let i = 0;i<month_olympic[myMonth-1]+firstDate;i++){
        all_calendar_day[i].style.outline = 'none';
    }
    let selectedDay_outline = e.target.closest('article');
    
    selectedDay_outline.style.outline = day_outline;
    console.log(selectedDay_outline);



    let selectedDate = selectedMonth + '月' + selectedDay + '日';
   
    // console.log(selectedDate);
    // console.log(selectedDate_panel.value);
    selectedDate_panel.value.innerText = '預約日期：'+selectedDate;
    my_service_order.service_date = selectedDate;
    localStorage.setItem("my_service_order", JSON.stringify(my_service_order));

//     if(my_service_order.service_date!='' || my_service_order.service_time_range!=''){
//     isNext.value = true;
// }
}

let selectedTime_panel = ref(null);
const selectedTime_el = (e)=>{
    // console.log(e.target.innerText.substr(0 , 2));
    let selectedTime = e.target.innerText.substr(0 , 2);
    selectedTime_panel.value.innerText = '預約時段：'+selectedTime;

    let all_time_range = e.target.closest('div').querySelectorAll('h2');
    for(let i =0;i<3;i++){
        all_time_range[i].style.backgroundColor = '#ECE7E1';
    }
    let selectedDate_bgc = e.target.closest('h2');
    console.log(selectedDate_bgc);
    selectedDate_bgc.style.backgroundColor = 'white';


    my_service_order.service_time_range = selectedTime;
    localStorage.setItem("my_service_order", JSON.stringify(my_service_order));
}



</script>

<template>
        <section>
            <div class="calendar">
                <section class="calendar_nav">
                    <h4>2024</h4>
                    <div class="month">
                        <font-awesome-icon :icon="['fas', 'angle-left']" id="addMonth" />
                        <h2>3月</h2>
                        <font-awesome-icon :icon="['fas', 'angle-right']" id="addMonth" />
                    </div>
                    <ul class="day">
                        <li>日</li>
                        <li>一</li>
                        <li>二</li>
                        <li>三</li>
                        <li>四</li>
                        <li>五</li>
                        <li>六</li>
                    </ul>
                </section>
                <section class="week">
                    <CalendarDay v-for="item in days_pool" :day="item" :key="item" @click-day="selectDay_el"  />
                    <!-- :my-day='selectedDay' -->

                </section>
            </div>
            <div class="time_choice">
                <div>
                    <h2>選擇日期及時段</h2>
                    <p>找找看有沒有你需要的</p>
                </div>
                <h2 ref="selectedDate_panel">預約日期：</h2>
                <h2 ref="selectedTime_panel">預約時段：</h2>
                <div>
                    <h2 @click="selectedTime_el">上午時段 (09:00開始)</h2>
                    <h2 @click="selectedTime_el">下午時段 (12:00開始)</h2>
                    <h2 @click="selectedTime_el">晚間時段 (17:00開始)</h2>
                </div>
            </div>
        </section>
        <p>僅接受3日後的預約，具體施作時間交由浣安與您聯繫進一步討論</p>
        
</template>



<style lang="scss" scoped>

</style>