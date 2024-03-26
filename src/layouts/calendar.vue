<script setup>
// 把選擇的月份&日期印在畫面上，還沒寫
defineProps(['monthSelect','daySelect']);

import {ref,onMounted,onUpdated,onBeforeMount} from 'vue';
import CalendarDay from '@/components/calendarDay.vue';

const prevMonthBtn = ref(null);
const nextMonthBtn = ref(null);
const daysPool = ref(null);

    let fullDateRightNow = new Date();
    let yearRightNow = fullDateRightNow.getFullYear();
    // let monthRightNow = fullDateRightNow.getMonth()+1;
    let monthRightNow = 3;
    // let dateRightNow = fullDateRightNow.getDate();
    let dateRightNow = 8;

    // 閏年(今年)
    let month_olympic = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    let myYear = 2024;
    let myMonth = monthRightNow;
    let myMonthHTML = ref(`<h2>${myMonth+1}月</h2>`);
    let days_pool =ref([]);
    let testDate = new Date(myYear, myMonth, 1); 
    let firstDate = testDate.getDay()
    
    // console.log(days_pool.value);
//    console.log(testDate);
    const renewPool=(newMonth)=>{
            // console.log(testDate.getDay())//取得第一天是星期幾
            // console.log(month_olympic[myMonth-1]);
            if(newMonth){
                testDate = new Date(myYear, newMonth, 1);
                firstDate = testDate.getDay();
                days_pool.value = [];
                for(let j = 0; j<month_olympic[newMonth-1]+firstDate;j++){
                    if(j<firstDate){
                        days_pool.value.push('');
                    }else{
                        days_pool.value.push(j-firstDate+1);
                    }
                }
            }else{
                for(let k = 0; k<month_olympic[myMonth-1]+firstDate;k++){
                    if(k<firstDate){
                        days_pool.value.push('');
                    }else{
                        days_pool.value.push(k-firstDate+1);
                    }
                }
            }
        
            
    }
    renewPool();

let limitDate = 0;
onMounted(()=>{
    let dateCantSelect = document.querySelectorAll('article.single_day');

    limitDate = dateRightNow+firstDate+2;
    for(let num = 0;num<limitDate;num++){
        dateCantSelect[num].style.color='#D4BBA7';
        dateCantSelect[num].style.opacity='.5';
    }
})





let my_service_order = JSON.parse(localStorage.getItem("my_service_order"));
let selectedDay = '';
let selectedMonth = '';
// let selectedDate = ref('');
let selectedDate_panel = ref(null);


const day_outline = '2px solid #9B7B6C';

const selectDay_el=(e)=>{
    selectedMonth = parseInt(e.target.closest('div.calendar').querySelector(".month>div>h2").innerText);
    selectedDay = e.target.closest('article').querySelector('h2').innerText;

    let all_calendar_day = e.target.closest('section.week').querySelectorAll('div article');
    for (let i = 0;i<month_olympic[myMonth-1]+firstDate;i++){
        all_calendar_day[i].style.outline = 'none';
    }
    let selectedDay_outline = e.target.closest('article');
    if(selectedDay>=limitDate-firstDate+1){
        selectedDay_outline.style.outline = day_outline;
        let selectedDate = selectedMonth + '月' + selectedDay + '日';
        selectedDate_panel.value.innerText = '預約日期：'+selectedDate;
        // my_service_order.service_date = selectedDate;
        // 對存入local storage的日期做處理
        let string_selectedMonth = '';
        if(selectedMonth<10){
            string_selectedMonth = '0'+selectedMonth;
        }else{
            string_selectedMonth = selectedMonth
        }
        my_service_order.service_date = myYear+'-'+string_selectedMonth+'-'+selectedDay;
        localStorage.setItem("my_service_order", JSON.stringify(my_service_order));
    }
    
}

let selectedTime_panel = ref(null);
const selectedTime_el = (e)=>{
    let selectedTime = e.target.innerText.substr(0 , 2);
    selectedTime_panel.value.innerText = '預約時段：'+selectedTime;

    let all_time_range = e.target.closest('div').querySelectorAll('h2');
    for(let i =0;i<3;i++){
        all_time_range[i].style.backgroundColor = '#ECE7E1';
    }
    let selectedDate_bgc = e.target.closest('h2');
    selectedDate_bgc.style.backgroundColor = 'white';


    my_service_order.service_time_range = selectedTime;
    localStorage.setItem("my_service_order", JSON.stringify(my_service_order));
}
// const renewCantSelect = ()=>{
//     let dateCantSelect = document.querySelectorAll('article.single_day');
//     console.log(dateCantSelect[10].style.color='red');
//     console.log(month_olympic[myMonth-1]+firstDate);
//     for(let k = 0;k<month_olympic[myMonth-1]+firstDate;k++){
//                 dateCantSelect[k].style.color='#00000';
//                 dateCantSelect[k].style.opacity='1';
//     }
//     console.log(dateCantSelect);
//     if(myMonth==monthRightNow){
//             // console.log('yes');
//             limitDate = dateRightNow+firstDate+2;
//             console.log(dateCantSelect[limitDate]);
//             for(let i = 0;i<limitDate;i++){
//                 dateCantSelect[i].style.color='#D4BBA7';
//                 dateCantSelect[i].style.opacity='.5';
//             }
//         }else if(myMonth<monthRightNow){
//             for(let j = 0;j<month_olympic[myMonth-1]+firstDate;j++){
//                 dateCantSelect[j].style.color='#D4BBA7';
//                 dateCantSelect[j].style.opacity='.5';
//             }
//         }else if(myMonth>monthRightNow){
//             for(let l = 0;l<month_olympic[myMonth-1]+firstDate;l++){
//                 dateCantSelect[l].style.color='#00000';
//                 dateCantSelect[l].style.opacity='1';
//             }
//         }
// }



const prevMonth=()=>{
    if(myMonth>1){
        myMonth--;
        myMonthHTML.value = `<h2>${myMonth}月</h2>`;
        renewPool(myMonth);
    }
}
const nextMonth=()=>{
    if(myMonth<12){
        myMonth++;
        myMonthHTML.value = `<h2>${myMonth}月</h2>`;
        renewPool(myMonth);
    }
}


</script>

<template>
        <section>
            <div class="calendar">
                <section class="calendar_nav">
                    <h4>2024</h4>
                    <div class="month">
                        <!-- <font-awesome-icon :icon="['fas', 'angle-left']" id="addMonth" ref="prevMonthBtn" @click="prevMonth"/> -->
                        <font-awesome-icon :icon="['fas', 'angle-left']" id="addMonth" ref="prevMonthBtn"/>
                        <div v-html="myMonthHTML"></div>
                        <!-- <h2>3月</h2> -->
                        <!-- <font-awesome-icon :icon="['fas', 'angle-right']" id="addMonth" ref="nextMonthBtn" @click="nextMonth" /> -->
                        <font-awesome-icon :icon="['fas', 'angle-right']" id="addMonth" ref="nextMonthBtn" />
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
                <section class="week" ref="daysPool">
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



<style lang="scss" >
// .reserve3 div.calendar>section.week>article.past_time{
//     background-color: red;
//     h2{
//         color: blue;
//     }
// }
</style>