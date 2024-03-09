<script setup>
import bTable from '@/layouts/bTable.vue'
import{ ref, computed } from 'vue';
const back_sidebar = [{
                        title:'會員管理',
                        subtitle: ['會員註冊資料']},
                        { title:'服務及其訂單管理',
                        subtitle:['服務訂單','服務評論']},
                        {title:'商品及其訂單管理',
                        subtitle: ['商品訂單','商品']},
                        {title:'活動及文章管理', 
                        subtitle:['活動','文章']},
                        {title:'營運分析',
                        subtitle:['成交量統計表(月)']},
                        {title:'客服',
                        subtitle:['聯絡表單']}];

let back_now = ref('會員註冊資料');
const getBackNow= (e)=>{
    e.preventDefault();
    console.log(e.target.innerText);
    back_now.value = e.target.innerText;
}

defineEmits(['ModalbContact']);

const searchBar = ref('');
const member = ref([]);


const url = 'http://localhost/thd104/public/php/Backstage/member_select.php';
        
        fetch(url)
            .then(response => response.json())
            .then(response => {
    
                member.value = response;
                // cartStore.setProductsForMitem(response);
            })
            .catch(error => {
                console.error('Error:', error);
            });


const filteredMembers = computed(() => {
    if(!searchBar.value.trim()){
        return member.value;
    } else {
        return member.value.filter(member => {
            return member.NAME.includes(searchBar.value.trim());
        });
    }
});



</script>
<template>
    <div>
        <div class="cms container-fluid">
        <div class="row">
            <!-- Sidebar -->
            <div class="col-sm-3 sidebar cms_sidebar" id="cms_scroll">
                <ul class="nav flex-column">
                    <li class="cms_nav-item" v-for="item in back_sidebar" :key="item.title">
                        <h3>{{ item.title }}</h3>
                        <a  href="#" @click="getBackNow" :class="{'back_on':back_now==subItem}" v-for="subItem in item.subtitle" :key="subItem">{{ subItem }}</a>
                    </li>
                    <!-- <li class="bMember_nav-item">
                        <h3>會員管理</h3>
                        <a class="nav-link" href="#" @click="getBackNow">會員註冊資料</a>
                    </li>
                    <li class="bMember_nav-item">
                        <h3>服務及其訂單管理</h3>
                        <a class="nav-link" href="#" @click="getBackNow">服務訂單</a>
                        <a class="nav-link" href="#" @click="getBackNow">服務評論</a>
                    </li>
                    <li class="bMember_nav-item">
                        <h3>商品及其訂單管理</h3>
                        <a class="nav-link" href="#">商品訂單</a>
                        <a class="nav-link" href="#">商品</a>
                    </li>
                    <li class="bMember_nav-item">
                        <h3>活動及文章管理</h3>
                        <a class="nav-link" href="#">活動</a>
                        <a class="nav-link" href="#">文章</a>
                    </li>
                    <li class="bMember_nav-item">
                        <h3>營運分析</h3>
                        <a class="nav-link" href="#">成交量統計(月)</a>
                    </li>
                    <li class="bMember_nav-item">
                        <h3>客服</h3>
                        <a class="nav-link" href="#">聯絡表單內容</a>
                    </li> -->
                    <li class="cms_nav-item" id="bLogOut">
                        <img src="@/img/cms/cms_icon7.svg" alt="">
                        <h3>登出</h3>
                    </li>
                </ul>
            </div>
            <!-- Main Content -->
            <div class="col-sm-9 main-content cms_main-content">
                <div class="cms_data-table">
                    <section>
                   
                    <div class="cms_tab_bar">
                        <!-- <div class="tab">
                            <ul>
                                <li class="tab_on"><a href="#">會員註冊資料</a></li>                             
                            </ul>
                        </div> -->
                        <div class="cms_search-container" v-if="back_now=='會員註冊資料'">
                            <input type="text" v-model.lazy.trim="searchBar" class="cms_search-input" placeholder="帳號/姓名/手機號碼">
                        </div>
                        <div class="cms_logo">
                            <img src="@/img/cms/cms_logo.svg" alt="">
                        </div>
                    </div>
                    </section>
                     <section>
                    <!-- 這裡以下是表格 -->
                    <bTable :back-now =back_now />
                    
                 
                    </section> 
                    <!-- <div class="cms_pagination">
                        <a href="#" class="pagination-link">首頁</a>
                        <span class="pagination-separator">&lt;</span>
                        <a href="#" class="pagination-number">1</a>
                        <a href="#" class="pagination-number">2</a>
                        <a href="#" class="pagination-number">3</a>
                        <a href="#" class="pagination-number">4</a>
                        <a href="#" class="pagination-number">5</a>
                        <span class="pagination-separator">&gt;</span>
                        <a href="#" class="pagination-link">尾頁</a>
                    </div>                -->
                </div>
            </div>
        </div>
    </div>
    </div>
</template>



<style lang="scss" scoped>
@import '@/sass/base/color';
.back_on{
    // width: fit-content;
    background-color: $white;
}
</style>

