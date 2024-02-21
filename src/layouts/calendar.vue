<script setup>
// 把選擇的月份&日期印在畫面上，還沒寫
defineProps(['monthSelect','daySelect']);
    import CalendarDay from '@/components/calendarDay.vue';

    // 閏年(今年)
    let month_olympic = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    let myYear = 2024;
    let myMonth = 2;
    let days_pool =[];

    let testDate = new Date(myYear, myMonth, 1); 
    let firstDate = testDate.getDay()
    console.log(testDate.getDay())//取得第一天是星期幾
    // console.log(month_olympic[myMonth-1]);
    for(let i = 0; i<month_olympic[myMonth-1]+firstDate;i++){
        if(i<firstDate){
            days_pool.push('');
        }else{
            days_pool.push(i-firstDate+1);

        }
    }
    console.log(days_pool);
</script>

<template>
    <!-- <div> -->
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
                    <CalendarDay v-for="item in days_pool" :day="item" :key="item" />
                    

                </section>
            </div>
            <div class="time_choice">
                <div>
                    <h2>選擇日期及時段</h2>
                    <p>找找看有沒有你需要的</p>
                </div>
                <h2>預約日期：3月21日</h2>
                <h2>預約時段：下午</h2>
                <div>
                    <h2>上午時段 (09:00開始)</h2>
                    <h2>下午時段 (12:00開始)</h2>
                    <h2>晚間時段 (17:00開始)</h2>
                </div>
            </div>
        </section>
        <p>僅接受3日後的預約，具體施作時間交由浣安與您聯繫進一步討論</p>
        
    <!-- </div> -->
</template>



<style lang="scss" scoped>

</style>