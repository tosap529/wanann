<script setup>

    import { ref, onMounted, defineProps } from 'vue';
    
    import ModalbContact from '@/components/ModalbContact.vue'; 
    import ModalbServiceOrder from '@/components/ModalbServiceOrder.vue'; 
    import ModalbServiceComment from '@/components/ModalbServiceComment.vue'; 
    import ModalbProductOrder from '@/components/ModalbProductOrder.vue'; 
    import ModalbProduct from '@/components/ModalbProduct.vue'; 
    import ModalbAct from '@/components/ModalbAct.vue'; 
    import ModalbArticle from '@/components/ModalbArticle.vue'; 
    import ModalbMember from '@/components/ModalbMember.vue'; 
    // 新增資料燈箱
    import ModalbProductAdd from '@/components/ModalbProductAdd.vue'; 
    import ModalbActAdd from '@/components/ModalbActAdd.vue'; 
    import ModalbArticleAdd from '@/components/ModalbArticleAdd.vue'; 

  
    defineProps({backNow: String, filteredMembers: Array});

    const bMember_th = [ '會員ID','帳號','姓名','手機號碼','電子郵件','註冊日期','權限' ];
    const bServiceOrder_th = ['服務訂單ID','帳號','訂單日期','服務日期','服務時段','訂單金額','訂單狀態','評價狀態'];
    const bServiceComment_th =['服務評論ID','服務訂單ID','評論日期','服務態度','服務品質','評論狀態'];
    const bProductOrder_th=['商品訂單ID','帳號','訂單日期','訂單金額','訂單狀態','售後狀態'];
    const bProduct_th=['商品ID','商品類別','商品名稱','商品款式','商品單價','商品狀態'];
    const bAct_th=['活動ID','活動類別','活動標題','建立日期','截止日期','優惠代碼','活動狀態'];
    const bArticle_th=['文章ID','文章類別','文章標題','建立日期','文章狀態'];
    const bContact_th=['表單ID','姓名/單位','聯絡電話','電子信箱','建立日期','處理狀態'];

    const contact_data = ref([]);
    const act_data = ref([]);
   
    const comment_data = ref([]);
    const pOrder_data = ref([]);
    const articles_data = ref([]);
    const products_data = ref([]);
    const sOrder_data = ref([]);

    // 新增資料按鈕(僅商品/文章/活動頁面)
    const insertBtn = ref(null)

    //更新狀態按鈕

    // const url_act_update = 'http://localhost/thd104/g1/public/php/act_update.php';
    const url_act_update = 'php/act_update.php';



    //決定開啟的燈箱

    const isbMemberModalShow = ref(null);
    const gobModal = ( data ) => {
      
        if(isbMemberModalShow.value === null){
            isbMemberModalShow.value = data

        }else{
            isbMemberModalShow.value = null
        }
    }
    const isbMemberAddModalShow = ref(false);
    const gobModalAdd = ()=>{
        isbMemberAddModalShow.value = !isbMemberAddModalShow.value;
    }
    
    
    const emitModalbContact = () => {
        emit('ModalbContact', key, ID);
    }

    // contact_data[0].value.STATUS= 1;

    onMounted(() => {
        
        //搜尋所有的資料
        // const url_contact = 'http://localhost/thd104/g1/public/php/Backstage/contact_select.php';
        // const url_act = 'http://localhost/thd104/g1/public/php/Backstage/act_select.php';
        // const url_member = 'http://localhost/thd104/g1/public/php/Backstage/member_select.php';
        // const url_comment = 'http://localhost/thd104/g1/public/php/Backstage/comment_select.php';
        // const url_articles = 'http://localhost/thd104/g1/public/php/Backstage/articles_select.php';
        // const url_products = 'http://localhost/thd104/g1/public/php/Backstage/products_select.php';
        // const url_pOrder = 'http://localhost/thd104/g1/public/php/Backstage/pOrder_select.php';
        // const url_sOrder = 'http://localhost/thd104/g1/public/php/Backstage/sOrder_select.php';
        const url_contact = 'php/Backstage/contact_select.php';
        const url_act = 'php/Backstage/act_select.php';
        const url_member = 'php/Backstage/member_select.php';
        const url_comment = 'php/Backstage/comment_select.php';
        const url_articles = 'php/Backstage/articles_select.php';
        const url_products = 'php/Backstage/products_select.php';
        const url_pOrder = 'php/Backstage/pOrder_select.php';
        const url_sOrder = 'php/Backstage/sOrder_select.php';
        
        fetch(url_contact)
            .then(response => response.json())
            .then(response => {
                // console.log('註冊成功 js');
                contact_data.value = response;
                })
                .catch(error => {
                    console.error('Error:', error);
                });

        fetch(url_pOrder)
            .then(response => response.json())
            .then(response => {
                // console.log('註冊成功 js');
                pOrder_data.value = response;
                })
                .catch(error => {
                    console.error('Error:', error);
                });

        fetch(url_sOrder)
            .then(response => response.json())
            .then(response => {
                // console.log('註冊成功 js');
                sOrder_data.value = response;
                })
                .catch(error => {
                    console.error('Error:', error);
                });
                
                
        fetch(url_act)
            .then(response => response.json())
            .then(response => {
                // console.log('註冊成功 js');
                act_data.value = response;
                })
                .catch(error => {
                    console.error('Error:', error);
                });

        // fetch(url_member)
        //     .then(response => response.json())
        //     .then(response => {
        //         // console.log('註冊成功 js');
        //         // member_data.value = response;
        //         member_data.value = response 
        //         emit('member_data', member_data.value);
        //         })
        //         .catch(error => {
        //             console.error('Error:', error);
        //         });
                
        fetch(url_comment)
            .then(response => response.json())
            .then(response => {
                console.log('註冊成功');
                comment_data.value = response;
                })
            .catch(error => {
                console.error('Error:', error);
            });


        fetch(url_articles) 
            .then(response => response.json())
            .then(response => {
                articles_data.value = response;
                })
            .catch(error => {
                console.error('Error:', error);
        });
        
        fetch(url_products) 
            .then(response => response.json())
            .then(response => {
                products_data.value = response;
                })
            .catch(error => {
                console.error('Error:', error);
        });
             
    });
         
    //決定是哪個資料存入data

    const click_function = (key, id, type) => {
    let data;

        switch (type) {
            case 'contact':
                data = contact_data.value[key];
                break;
            case 'act':
                data = act_data.value[key];
                break;
            case 'member':
                data = filteredMembers.value[key];
                break;
            case 'comment':
                data = comment_data.value[key];
                break;
            case 'pOrder':
                data = pOrder_data.value[key];
                break;
            case 'articles':
                data = articles_data.value[key];
                break;
            case 'products':
                data = products_data.value[key];
                break;
            case 'sOrder':
                data = sOrder_data.value[key];
                break;
            default:
                break;
        }

        // if (is_sumbit.value === false) {
        // is_sumbit.value = true;

        let final_status = null;
        if (data.STATUS === 1) {
            data.STATUS = 0;
            final_status = false;
        } else {
            data.STATUS = 1;
            final_status = true;
        }

        if (data.order_status === 1) {
            data.order_status = 0;
          
        } else {
            data.order_status = 1;
        
        }

        fetch(url_act_update, {

        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            id: data.ID, 
            status: data.STATUS 
        })
        })
        .then(response => response.json())
        .then(response => {
        console.log(response);
        });

        fetch(url_pOrder_update, {

        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify({
        id: data.ID, 
        status: data.order_status
        })
        })
        .then(response => response.json())
        .then(response => {
        console.log(response);
        });
  
    }



</script>
<template>
<div id="tableScroll">
    <!-- 燈箱區 -->
    <ModalbMember @ModalbMember="gobModal" v-if="isbMemberModalShow !==null &&backNow=='會員註冊資料'" :data="isbMemberModalShow"/>
    <ModalbServiceOrder @ModalbServiceOrder="gobModal" v-if="isbMemberModalShow !==null &&backNow=='服務訂單'" :data="isbMemberModalShow"/>
    <ModalbServiceComment @ModalbServiceComment="gobModal" v-if="isbMemberModalShow !==null &&backNow=='服務評論'" :data="isbMemberModalShow"/>
    <ModalbProductOrder @ModalbProductOrder="gobModal" v-if="isbMemberModalShow !==null &&backNow=='商品訂單'" :data="isbMemberModalShow"/>
    <ModalbProduct @ModalbProduct="gobModal" v-if="isbMemberModalShow !==null &&backNow=='商品'" :data="isbMemberModalShow"/>
    <ModalbAct @ModalbAct="gobModal" v-if="isbMemberModalShow !==null &&backNow=='活動'" :data="isbMemberModalShow"/>
    <ModalbArticle @ModalbArticle="gobModal" v-if="isbMemberModalShow !==null &&backNow=='文章'" :data="isbMemberModalShow"/>
    <ModalbContact @ModalbContact="gobModal" v-if="isbMemberModalShow !==null &&backNow=='聯絡表單'" :data="isbMemberModalShow"/>
    <!-- 新增資料的燈箱 -->
    <ModalbProductAdd @ModalbProductAdd="gobModalAdd" v-if="isbMemberAddModalShow &&backNow=='商品'"/>
    <ModalbActAdd @ModalbActAdd="gobModalAdd" v-if="isbMemberAddModalShow &&backNow=='活動'"/>
    <ModalbArticleAdd @ModalbArticleAdd="gobModalAdd" v-if="isbMemberAddModalShow &&backNow=='文章'"/>
    <table class="bMember_table table-striped">
        <thead>
            <tr> 
                <th>
                    <button class="insert_btn edit-btn" v-show="backNow=='商品'||backNow=='活動'||backNow=='文章'" ref="insertBtn" @click="gobModalAdd"><font-awesome-icon :icon="['fas', 'plus']" />新增</button>
                </th>
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
            <tr v-show="backNow=='聯絡表單'" v-for= "(data, key) in contact_data" :key="key">
                <td ><button class="edit-btn" @click="gobModal(data)">編輯與查看</button></td>
                <td>{{ data.ID }}</td>
                <td>{{ data.NAME }}</td>
                <td>{{ data.PHONE }}</td>
                <td>{{ data.EMAIL}}</td>
                <td>{{ data.CREATE_TIME }}</td>
                <td><button :class="{ 'red': data.STATUS === 0, 'green': data.STATUS === 1 }" @click="click_function(key,data.ID,'contact')">{{ data.STATUS === 1 ?  '已處理' : '未處理' }} </button></td>
            </tr>
            <tr v-show="backNow=='活動'" v-for= "(data, key) in act_data" :key="key">
                <td><button class="edit-btn" @click="gobModal(data)">編輯與查看</button></td>
                <td>{{ data.ID }}</td>
                <td>{{ data.CATEGORY}}</td>
                <td>{{ data.TITLE }}</td>
                <td>{{ data.CREATE_TIME }}</td>
                <td>{{ data.DEADLINE }}</td>
                <td>{{ data.COUPON_ID }}</td>
                <td><button :class="{ 'red': data.STATUS === 0, 'green': data.STATUS === 1 }" @click="click_function(key,data.ID,'act')">{{ data.STATUS === 1 ?  '已下架' : '上架中' }} </button></td>
            </tr>
            <tr v-show="backNow=='會員註冊資料'" v-for= "(data, key) in filteredMembers" :key="key">
                
                <td><button class="edit-btn"  @click="gobModal(data)">編輯與查看</button></td>
                <td>{{ data.ID }}</td>
                <td>{{ data.USERNAME }}</td>
                <td>{{ data.NAME }}</td>
                <td>{{ data.PHONE }}</td>
                <td>{{ data.EMAIL}}</td>
                <td>{{ data.CREATE_TIME }}</td>
                <td><button :class="{ 'red': data.STATUS === 0, 'green': data.STATUS === 1 }" @click="click_function(key,data.ID,'member')">{{ data.STATUS === 1 ?  '停常' : '正常' }} </button></td>
            </tr>
            <tr v-show="backNow=='服務訂單'" v-for= "(data, key) in sOrder_data" :key="key">
                <td><button class="edit-btn"  @click="gobModal(data)">編輯與查看</button></td>
                <td>{{ data.id }}</td>
                <td>{{ data.username }}</td>
                <td>{{ data.order_date }}</td>
                <td>{{ data.service_date }}</td>
                <td>{{ data.time_range_name }}</td>
                <td>{{ data.payment}}</td>
                <td><button :class="{ 'red': data.order_status === 0, 'green': data.order_status === 1 }" @click="click_function(key,data.ID,'pOrder')">{{ data.order_status === 1 ?  '已完成' : '未完成' }} </button></td>
                <td><button :class="{ 'red': data.rank_status === 0, 'green': data.rank_status === 1 }" @click="click_function(key,data.ID,'pOrder')">{{ data.rank_status === 1 ?  '已評論' : '未評論' }} </button></td>
                <!-- <td>{{ data.order_status }}</td>
                <td>{{ data.rank_status }}</td> -->
            </tr>
            <tr v-show="backNow=='服務評論'" v-for= "(data, key) in comment_data" :key="key">
                <td><button class="edit-btn"  @click="gobModal(data)">編輯與查看</button></td>
                <td>{{ data.ID }}</td>
                <td>{{ data.ORDER_ID }}</td>
                <td>{{ data.COMMENT_DATE }}</td>
                <td>{{ data.SERVICE_ATTITUDE }}</td>
                <td>{{ data.SERVICE_QUALITY }}</td>
                <td><button :class="{ 'red': data.STATUS === 0, 'green': data.STATUS === 1 }" @click="click_function(key,data.ID,'comment')">{{ data.STATUS === 1 ?  '已評論' : '未評論' }} </button></td>
            </tr>
            <tr v-show="backNow=='商品訂單'" v-for= "(data, key) in pOrder_data" :key="key">
                <td><button class="edit-btn"  @click="gobModal(data)">編輯與查看</button></td>
                <td>{{ data.id }}</td>
                <td>{{ data.username }}</td>
                <td>{{ data.order_date }}</td>
                <td>{{ data.payment }}</td>
                <td><button :class="{ 'red': data.order_status === 0, 'green': data.order_status === 1 }" @click="click_function(key,data.ID,'pOrder')">{{ data.order_status === 1 ?  '已配送' : '配送中' }} </button></td>
                <td><button :class="{ 'red': data.rank_status === 0, 'green': data.rank_status === 1 }" @click="click_function(key,data.ID,'pOrder')">{{ data.rank_status === 1 ?  '已退貨' : '退貨中' }} </button></td>
                
            </tr>
            <tr v-show="backNow=='商品'" v-for= "(data, key) in products_data" :key="key">
                <td><button class="edit-btn"  @click="gobModal(data)">編輯與查看</button></td>
                <td>{{ data.ID }}</td>
                <td>{{ data.CATEGORY_NAME }}</td>
                <td>{{ data.PRODUCT_NAME }}</td>
                <td>{{ data.PRODUCT_STYLE }}</td>
                <td>{{ data.PRODUCT_PRICE }}</td>
                <td><button :class="{ 'red': data.STATUS === 0, 'green': data.STATUS === 1 }" @click="click_function(key,data.ID,'products')">{{ data.STATUS === 1 ?  '已下架': '上架中' }} </button></td>
            </tr>
            <tr v-show="backNow=='文章'" v-for= "(data, key) in articles_data" :key="key">
                <td><button class="edit-btn"  @click="gobModal(data)">編輯與查看</button></td>
                <td>{{ data.ID }}</td>
                <td>{{ data.CATEGORY }}</td>
                <td>{{ data.TITLE }}</td>
                <td>{{ data.CREATE_TIME }}</td>
                <td><button :class="{ 'red': data.STATUS === 0, 'green': data.STATUS === 1 }" @click="click_function(key,data.ID,'articles')">{{ data.STATUS === 1 ?  '已下架' : '上架中' }} </button></td>
            </tr> 
         



            <tr v-for="tr_num in 15" :key="tr_num">
                <td>
                <button  @click="gobModal" class="edit-btn" v-show="backNow!='成交量統計表(月)'">編輯與查看</button>
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


button{
    cursor: pointer;
    background-color:white;
    border: none;
}

.green{
    color: black;
}

.red{
    color: red;
}

</style>