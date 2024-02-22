<script setup>

defineProps(['backNow']);
    const bMember_th = [ '會員ID','帳號','姓名','手機號碼','電子郵件','註冊日期','權限' ];
   const bServiceOrder_th = ['服務訂單ID','帳號','訂單日期','服務日期','服務時段','訂單金額','訂單狀態','評價狀態'];
   const bServiceComment_th =['服務評論ID','服務訂單ID','評論日期','服務態度','服務品質','評論狀態'];
   const bProductOrder_th=['商品訂單ID','帳號','訂單日期','訂單金額','訂單狀態','售後狀態'];
   const bProduct_th=['商品ID','商品類別','商品名稱','商品款式','商品單價','商品狀態'];
   const bAct_th=['活動ID','活動類別','活動標題','建立日期','截止日期','優惠代碼','活動狀態'];
   const bArticle_th=['文章ID','文章類別','文章標題','建立日期','文章狀態'];
   const bContact_th=['表單ID','姓名/單位','聯絡電話','電子信箱','建立日期','處理狀態'];



</script>
<template>
<div id="tableScroll">
    <table class="bMember_table table-striped">
        <thead>
            <tr>
                <th></th>
                <th v-show="backNow=='會員註冊資料'" v-for="th in bMember_th" :key="th">{{th}}</th>
                <th v-show="backNow=='服務訂單'" v-for="th in bServiceOrder_th" :key="th">{{th}}</th>
                <th v-show="backNow=='服務評論'" v-for="th in bServiceComment_th" :key="th">{{th}}</th>
                <th v-show="backNow=='商品訂單'" v-for="th in bProductOrder_th" :key="th">{{th}}</th>
                <th v-show="backNow=='商品'" v-for="th in bProduct_th" :key="th">{{th}}</th>
                <th v-show="backNow=='活動'" v-for="th in bAct_th" :key="th">{{th}}</th>
                <th v-show="backNow=='文章'" v-for="th in bArticle_th" :key="th">{{th}}</th>
                <!-- <th v-show="backNow=='營運分析'" v-for="th in bMember_th" :key="th">{{th}}</th> -->
                <th v-show="backNow=='聯絡表單'" v-for="th in bContact_th" :key="th">{{th}}</th>
            </tr>
        </thead>
        <tbody>
            <!-- <tr>
                <td> <button class="edit-btn">編輯與查看</button></td>
                <td>1</td>
                <td>Account</td>
                <td>王小明</td>
                <td>0988123456</td>
                <td>wang0206@email.com</td>
                <td>2024/2/6</td>
                <td>開放</td>
                
            </tr> -->
            <tr v-for="tr_num in 15" :key="tr_num">
                <td>
                <button class="edit-btn" v-show="backNow!='成交量統計表(月)'">編輯與查看</button>
                </td>
                <td v-show="backNow=='會員註冊資料'" v-for="td_num in bMember_th.length" :key="td_num"></td>
                <td v-show="backNow=='服務訂單'" v-for="td_num in bServiceOrder_th.length" :key="td_num"></td>
                <td v-show="backNow=='服務評論'" v-for="td_num in bServiceComment_th.length" :key="td_num"></td>
                <td v-show="backNow=='商品訂單'" v-for="td_num in bProductOrder_th.length" :key="td_num"></td>
                <td v-show="backNow=='商品'" v-for="td_num in bProduct_th.length" :key="td_num"></td>
                <td v-show="backNow=='活動'" v-for="td_num in bAct_th.length" :key="td_num"></td>
                <td v-show="backNow=='文章'" v-for="td_num in bArticle_th.length" :key="td_num"></td>
                <!-- <td v-show="backNow=='營運分析'" v-for="td_num in bMember_th.length" :key="td_num"></td> -->
                <td v-show="backNow=='聯絡表單'" v-for="td_num in bContact_th.length" :key="td_num"></td>
            </tr>
        </tbody>
    </table>
</div>
</template>


<style lang="scss" scoped>

</style>