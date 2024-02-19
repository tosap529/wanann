<script setup>
import { ref } from "vue";
import MemberTab from "@/components/MemberTab.vue"

import DefaultHeader from '@/layouts/header.vue'; 
import DefaultFooter from '@/layouts/footer.vue';
import BannerUrl  from '@/img/member/member_banner.jpg'; 
const banner_url = BannerUrl; 
const sidebar = ref(null);

let memberSubPage = ref('userData');
let memberTabPage = ref('incomplete');
let county = ref('');
function  sidebarClick(e){
    e.preventDefault();
    // sidebar切換
    for (let i = 0; i < sidebar.value.children.length; i++) {
        if(sidebar.value.children[i].classList.contains('member_sidebar_active')){

            sidebar.value.children[i].classList.remove('member_sidebar_active');
        }
}
    // 主要版面切換
    if(e.target.closest('li').classList.contains('userData')){
            memberSubPage.value = 'userData';
        }else if(e.target.closest('li').classList.contains('sOrder')){
            memberSubPage.value = 'sOrder';
        }else if(e.target.closest('li').classList.contains('mOrder')){
            memberSubPage.value = 'mOrder';
        }else{
            // 登出鍵預留
        }
    e.target.closest('li').classList.add('member_sidebar_active');
    // console.log(memberSubPage.value);
}
function memberTabClick(event,index) {
    // 未完成&完成訂單頁面切換
    event.preventDefault();
    if(event.target.closest('li').classList.contains('complete')){
        memberTabPage.value = 'complete'
    }else{
        memberTabPage.value = 'incomplete'
    }
    if(!event.target.closest('li').classList.contains('tab_on')){
        for(let i = 0; i<2; i++){
            event.target.closest('ul').children[i].classList.toggle('tab_on');
        }
    }
    // console.log(memberTabPage.value)
};
function infoEdit(e){
    console.log(e.target.closest('div').querySelector('input'))
    let input = e.target.closest('div').querySelector('input');
    input.disabled=false;
    input.focus();
}
function infoSave(e){
    let input = e.target.closest('div').querySelector('input')
    if(input.value!=''){  
        if(input.classList.contains('alert_input')){
            input.classList.remove('alert_input')
        }
        input.disabled=true;  
    }else{
        alert("請輸入！")
        input.classList.add('alert_input');
        input.focus();
    }
}


</script>
<template>
    <div>
        <DefaultHeader header-title-zh="會員中心" header-title-eng="Member" :bgi="banner_url" /> 
    <div class="member wrapper">
        <section class="member_sidebar">
            <div>
                <input type="file" id="profileMini">
                <h2>thd104</h2>
            </div>
            <ul ref="sidebar">
                <!-- userData -->
                <li class="userData member_sidebar_active"  @click="sidebarClick"><a href="#">個人資料</a></li>
                <!-- sOrder -->
                <li class="sOrder" @click="sidebarClick"><a href="#">服務訂單</a></li>
                <!-- mOrder -->
                <li class="mOrder" @click="sidebarClick"><a href="#">商城訂單</a></li>
                <!-- logOut -->
                <li @click="sidebarClick"><a href="#">登出</a></li>
            </ul>
        </section>
        <!-- 個人資料分頁(預設) -->
        <section class="member_main userData" :class="{'member_pageNow':memberSubPage=='userData'}">
            <div>
                <input type="file" id="profile">
                <font-awesome-icon :icon="['fas', 'pen']" />
            </div>
            <div>
                <h2>帳號</h2>
                <input type="text" disabled>
            </div>
            <div>
                <h2>修改密碼</h2>
                <input type="password" disabled>
                <font-awesome-icon :icon="['fas', 'pen']" @click="infoEdit" />
                <font-awesome-icon :icon="['fas', 'floppy-disk']" @click="infoSave" />
            </div>
            <div>
                <h2>姓名</h2>
                <input type="text" disabled>
                <font-awesome-icon :icon="['fas', 'pen']" @click="infoEdit" />
                <font-awesome-icon :icon="['fas', 'floppy-disk']" @click="infoSave" />
            </div>
            <div>
                <h2>手機號碼</h2>
                <input type="tel" disabled>
                <font-awesome-icon :icon="['fas', 'pen']" @click="infoEdit" />
                <font-awesome-icon :icon="['fas', 'floppy-disk']" @click="infoSave" />
            </div>
            <div>
                <h2>電子信箱</h2>
                <input type="email" disabled>
                <font-awesome-icon :icon="['fas', 'pen']" @click="infoEdit" />
                <font-awesome-icon :icon="['fas', 'floppy-disk']" @click="infoSave" />
            </div>
            <div class="sAddress">
                <h2>服務地址</h2>
                <select name="county" id=""  v-model="county" >
                    <option value="">縣市</option>
                    <option value="newTaipei">新北市</option>
                    <option value="taipei">台北市</option>
                    <option value="taoyuan">桃園市</option>
                </select>
                <select name="dNewTaipei" id="" v-if="county=='newTaipei'" >
                    <option value="">區</option>
                    <option value="">三峽區</option>
                    <option value="">三重區</option>
                    <option value="">中和區</option>
                    <option value="">五股區</option>
                    <option value="">板橋區</option>
                    <option value="">新店區</option>
                    <option value="">永和區</option>
                    <option value="">汐止區</option>
                    <option value="">新莊區</option>
                    <option value="">淡水區</option>
                    <option value="">深坑區</option>
                    <option value="">蘆洲區</option>
                    <option value="">林口區</option>
                    <option value="">泰山區</option>
                    <option value="">土城區</option>

                </select>
                <select name="dTaipei" id="" v-if="county=='taipei'">
                    <option value="">區</option>
                    <option value="">中正區</option>
                    <option value="">大同區</option>
                    <option value="">中山區</option>
                    <option value="">松山區</option>
                    <option value="">大安區</option>
                    <option value="">萬華區</option>
                    <option value="">信義區</option>
                    <option value="">士林區</option>
                    <option value="">北投區</option>
                    <option value="">內湖區</option>
                    <option value="">南港區</option>
                    <option value="">文山區</option>

                </select>
                <select name="dTaoyuan" id="" v-if="county=='taoyuan'">
                    <option value="">區</option>
                    <option value="">桃園區</option>
                    <option value="">八德區</option>
                    <option value="">龜山區</option>
                </select>
                <input type="text" disabled>
                <font-awesome-icon :icon="['fas', 'pen']" />
                <font-awesome-icon :icon="['fas', 'floppy-disk']" />
            </div>
            <div class="mAddress">
                <h2>收件地址</h2>
                <input type="text" disabled>
                <font-awesome-icon :icon="['fas', 'pen']" @click="infoEdit" />
                <font-awesome-icon :icon="['fas', 'floppy-disk']" @click="infoSave" />
            </div>
        </section>


        <!-- 服務訂單分頁 -->
        <section class="member_main sOrder" :class="{'member_pageNow':memberSubPage=='sOrder'}">
            <MemberTab  @memberTabClick = "memberTabClick" />
            <!-- 服務_未完成訂單分頁 -->
            <div class="sOrder_data" :class="{'member_pageNow':memberTabPage=='incomplete'}">
                <div>
                    <h2>訂單編號</h2>
                    <input type="text" disabled>
                </div>
                <div>
                    <h2>訂購日期</h2>
                    <input type="text" disabled>
                </div>
                <div>
                    <h2>訂單狀態</h2>
                    <input type="text" disabled>
                </div>
                <div>
                    <h2>訂單內容</h2>
                    <div>
                        <h2>服務日期</h2>
                        <h2>2024/03/21</h2>
                        <h2>下午</h2>
                    </div>
                    <article>
                        <img src="../img/member/member_sOrder_product1.png" alt="">
                        <div>
                        <h2>浣安全室清潔</h2>
                        <h2>NTD4,000</h2>
                    </div>
                    </article>
                    <article>
                        <img src="../img/member/member_sOrder_product2.png" alt="">
                    <div>
                        <h2>冷氣機清理</h2>
                        <h2>NTD500</h2>
                    </div>
                    </article>
                    <article>
                        <img src="../img/member/member_sOrder_product3.png" alt="">
                    <div>
                        <h2>毛孩服務</h2>
                        <h2>人工估價<br>(由施作人員現場收費)</h2>
                    </div>
                    </article>
                </div>
                <div>
                    <button class="btn">取消訂單</button>
                    <p>*距預定服務日七天內無法取消</p>
                    <div>
                        <h2>總金額</h2>
                        <h2>NTD4,400</h2>
                    </div>
                </div>
            </div>
            <!-- 服務_已完成訂單分頁 -->
            <div class="sOrder_data" :class="{'member_pageNow':memberTabPage=='complete'}">
                <div>
                    <h2>訂單編號</h2>
                    <input type="text" disabled>
                </div>
                <div>
                    <h2>訂購日期</h2>
                    <input type="text" disabled>
                </div>
                <div>
                    <h2>訂單狀態</h2>
                    <input type="text" disabled>
                </div>
                <div>
                    <h2>訂單內容</h2>
                    <div>
                        <h2>服務日期</h2>
                        <h2>2024/03/21</h2>
                        <h2>下午</h2>
                    </div>
                    <article>
                        <img src="../img/member/member_sOrder_product1.png" alt="">
                    <div>
                        <h2>浣安全室清潔</h2>
                        <h2>NTD4,000</h2>
                    </div>
                    </article>
                    <article>
                        <img src="../img/member/member_sOrder_product2.png" alt="">
                    <div>
                        <h2>冷氣機清理</h2>
                        <h2>NTD500</h2>
                    </div>
                    </article>
                    <article>
                        <img src="../img/member/member_sOrder_product3.png" alt="">
                    <div>
                        <h2>毛孩服務</h2>
                        <h2>人工估價<br>(由施作人員現場收費)</h2>
                    </div>
                    </article>
                </div>
                <div>
                    <button class="btn">評價訂單</button>
                    <div>
                        <h2>總金額</h2>
                        <h2>NTD4,400</h2>
                    </div>
                </div>
            </div>
        </section>
       <!-- 商城訂單分頁 -->
       <section class="member_main mOrder" :class="{'member_pageNow':memberSubPage=='mOrder'}">
        <MemberTab  @memberTabClick = "memberTabClick" />
            <!-- 商城_未完成訂單分頁 -->
            <div class="mOrder_data" :class="{'member_pageNow':memberTabPage=='incomplete'}">
                <div>
                    <h2>訂單編號</h2>
                    <input type="text" disabled>
                </div>
                <div>
                    <h2>訂購日期</h2>
                    <input type="text" disabled>
                </div>
                <div>
                    <h2>訂單狀態</h2>
                    <input type="text" disabled>
                </div>
                <div>
                    <h2>訂單內容</h2>
                    <article>
                        <img src="../img/member/member_mOrder_product1.jpg" alt="">
                        <section>
                        <div>
                            <h2>浣安手工香皂</h2>
                            <h4>經典款</h4>
                        </div>
                        <h3>x2</h3>
                        <h2>NTD400</h2>
                    </section>
                    </article>
                    <article>
                        <img src="../img/member/member_mOrder_product2.jpg" alt="">
                        <section>
                        <div>
                            <h2>家居清潔工具收納桶</h2>
                            <h4>經典款</h4>
                        </div>
                        <h3>x1</h3>
                        <h2>NTD300</h2>
                    </section>
                    </article>
                </div>
                <div class="sOrder_bottom">
                    <button class="btn">取消訂單</button>
                    <p>*未發貨才能取消喔~</p>
                    <div>
                        <h2>總金額</h2>
                        <h2>NTD700</h2>
                    </div>
                </div>
            </div>
            <!-- 商城_已完成訂單分頁 -->
            <div class="mOrder_data" :class="{'member_pageNow':memberTabPage=='complete'}">
                <div>
                    <h2>訂單編號</h2>
                    <input type="text" disabled>
                </div>
                <div>
                    <h2>訂購日期</h2>
                    <input type="text" disabled>
                </div>
                <div>
                    <h2>訂單狀態</h2>
                    <input type="text" disabled>
                </div>
                <div>
                    <h2>訂單內容</h2>
                    <article>
                        <img src="../img/member/member_mOrder_product1.jpg" alt="">
                        <section>
                        <div>
                            <h2>浣安手工香皂</h2>
                            <h4>經典款</h4>
                        </div>
                        <h3>x2</h3>
                        <h2>NTD400</h2>
                    </section>
                    </article>
                    <article>
                        <img src="../img/member/member_mOrder_product2.jpg" alt="">
                    <section>
                        <div>
                            <h2>家居清潔工具收納桶</h2>
                            <h4>經典款</h4>
                        </div>
                        <h3>x1</h3>
                        <h2>NTD300</h2>
                    </section>
                    </article>
                </div>
                <div>
                    <button class="btn">退貨</button>
                    <div>
                        <h2>總金額</h2>
                        <h2>NTD700</h2>
                    </div>
                </div>
            </div>
        </section>

    </div>
    <DefaultFooter />
</div>
</template>



<style lang="scss">
@import '@/sass/main.scss';
// ---------------切換分頁用------------------
.member_main,.sOrder_data,.mOrder_data,.notForSelect{
    display: none;
}
.member_pageNow{
    display: block;
}
.alert_input{
    background-color: $white;
    background-image: url(@/img/member/member_icon_alertInput.svg);
    background-repeat: no-repeat;
    background-position: 95% 40%;
    outline: 2px solid $brown;
}
// 表示當前頁面的側邊欄樣式
.member_sidebar_active {
    background-color: $light-milktea;
    border-radius: 8px;
}
</style>