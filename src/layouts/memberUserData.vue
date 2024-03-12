<script setup>
import { ref,onMounted,defineProps,onBeforeUpdate,computed,onBeforeMount } from "vue";
defineEmits(['getProfileURL']);

//const props = defineProps({userData:Object});
const props = defineProps(["userData"]);
// console.log("props");
// console.log(props);

const newTaipei = ref(['區','三峽區','三重區','中和區','五股區','板橋區','新店區','永和區','汐止區','新莊區','淡水區','深坑區','蘆洲區','林口區','泰山區','土城區']);
const taipei = ref(['區','中正區','大同區','中山區','松山區','大安區','萬華區','信義區','士林區','北投區','內湖區','南港區','文山區']);
const taoyuan = ref(['區','桃園區','八德區','龜山區']);

const emailInput = ref(null);
let UserData = {}

const userDataEdit = ()=>{
    UserData= {
        id:sessionStorage.getItem('member_ID'),
        name : props.userData.NAME,
        phone: props.userData.PHONE,
        email: props.userData.EMAIL,
        county: props.userData.COUNTY,
        district: props.userData.DISTRICT,
        send_address:props.userData.SEND_ADDRESS,
        service_address:props.userData.SERVICE_ADDRESS,
        password: props.userData.PASSWORD,
    }
    console.log(UserData);
//     async () => {
//     const url = 'http://localhost/thd104/g1/public/php/member_update.php';
//     const res = await fetch(url, { method: 'POST', body: JSON.stringify(UserData) });
//     const data = await res.json();
//     console.log(data);
// }
    const url = 'php/member_update.php';
    // const url = 'http://localhost/thd104/g1/public/php/member_update.php';
    fetch(url, {
            method: 'POST',
            body: JSON.stringify(UserData)
        })
        .then(response => response.text())
        .then(response => {
            console.log(response);
            if(response=="email重複"){
                props.userData.EMAIL='請重新輸入email';
            }
        }).catch(error => {
            console.error('Error:', error);
        });
}




onMounted(()=>{
    profile.value.addEventListener('change',fileChange );
    // console.log(countySelector.value);
    // console.log("mounted");
    // console.log(props.userData);
    

})

onBeforeUpdate(()=>{
    // console.log(props.userData);
    document.querySelector('.member_sidebar div:first-child img').src = props.userData.MEMBER_PIC;
    // document.querySelector('header .nav_right .nav_user a:first-child').innerHTML = `<img src="${props.userData.MEMBER_PIC}" >`;

})



function infoEdit(e){
    let input = e.target.closest('div').parentElement.querySelector('input');
    input.disabled=false;
    input.focus();
    if(input.disabled==false){
        input.classList.add('needToFill');
    }
}
const infoEdit_sa=(e)=>{
    let dropdown = e.target.closest('.sAddress').querySelector('div select')
    let dropdown_sub = e.target.closest('.sAddress').querySelector('div select:nth-child(2)')
    let input = e.target.closest('.sAddress').querySelector('input')
    dropdown.addEventListener('click',function(){
        dropdown_sub = document.querySelector('.sAddress div select:nth-child(2)');
        if(dropdown_sub){
            console.log(dropdown_sub);
            dropdown_sub.disabled = false;
        }
       
    })
    dropdown.disabled = false;
    if(dropdown_sub){
        dropdown_sub.disabled=false;
    }
    input.disabled = false;
    if(input.disabled==false){
    input.classList.add('needToFill');
}
}
function infoSave(e){
let input = e.target.closest('div').parentElement.querySelector('input')
console.log(input.value);
if (input.disabled==false){
    if(input.value!=''&&input.value!='請重新輸入email'){  
    if(input.classList.contains('alert_input')){
        input.classList.remove('alert_input')
    }
    input.disabled=true;  
    input.classList.remove('needToFill');
    userDataEdit();
}else{
    alert("請輸入！")
    input.classList.add('alert_input');
    input.focus();
}
}

}
const infoSave_sa=(e)=>{
    let dropdown = e.target.closest('.sAddress').querySelector('div select')
    let dropdown_sub = e.target.closest('.sAddress').querySelector('div select:nth-child(2)')
    let input = e.target.closest('.sAddress').querySelector('input')
    if (input.disabled==false){
        if(input.value!=''&&dropdown.value!=''&&dropdown_sub.value!=='區'){
            if(input.classList.contains('alert_input')){
            input.classList.remove('alert_input')
            dropdown.classList.remove('alert_input')
            dropdown_sub.classList.remove('alert_input')
            }
            dropdown.disabled=true; 
            dropdown_sub.disabled=true; 
            input.disabled=true; 
            input.classList.remove('needToFill');
            userDataEdit();

        }else{
            alert("請輸入完整地址！")
        input.classList.add('alert_input');
        dropdown.classList.add('alert_input')
        dropdown_sub.classList.add('alert_input')
        input.focus();
        }
    }
}
const profile = ref(null);
const profile_pic = ref(null);
const profilePicUpdate = ref(null);
const profileClick=()=>{
    profile.value.click();
}
function fileChange(){
    let file = document.getElementById('profile').files[0]
    let readFile = new FileReader()
    readFile.readAsDataURL(file)
    readFile.addEventListener('load', () => {
    profile_pic.value.src = readFile.result
    document.querySelector('.member_sidebar div:first-child img').src = readFile.result;
    document.querySelector('header .nav_right .nav_user a:first-child').innerHTML = `<img src="${readFile.result}" >`;
    })
}

const fileUpload=()=>{
    let file = document.getElementById('profile').files[0];

    if(file){
         let formdata  = new FormData();
            formdata.append("profile_pic", file);
            formdata.append("member_ID", JSON.stringify({'id':sessionStorage.getItem('member_ID')}));
        // const url = 'http://localhost/thd104/g1/public/php/member_pic_update.php';
        const url = 'php/member_pic_update.php';
            fetch(url, {
                    method: 'POST',
                    body: formdata
                })
                .then(response=>response.text())
                .then(response => {
                    sessionStorage.setItem('member_pic',response);
                    // console.log(response);
                    // editSuccessMsg(response.MEMBER_PIC);
                    editSuccessMsg(response);
                   })
    }
}


const editSuccessMsg=(e)=>{
    let editSuccessMsg = document.getElementById('editSuccessMsg');
    if(e){
        // console.log('更新成功');
        editSuccessMsg.style.opacity='1';
            setTimeout(()=>{
                editSuccessMsg.style.opacity='0';
            },700)
    }else{
        // console.log(e.target.closest('div').previousElementSibling.value);
        if(!e.target.closest('div').previousElementSibling.disabled){
            editSuccessMsg.style.opacity='1';
            setTimeout(()=>{
                editSuccessMsg.style.opacity='0';
            },700)
            }
    }
        
  
}


</script>
<template>
<div>
    
    <section class="member_main userData" >
        <div  method="post"  enctype="multipart/form-data" >
            <img :src="userData.MEMBER_PIC" alt="" ref="profile_pic"> 
            <input type="file" id="profile" name="profile" ref="profile" @change="$emit('getProfileURL')">
                <font-awesome-icon :icon="['fas', 'pen']" @click="profileClick" />
            <button  id="profilePicUpdate" ref="profilePicUpdate" ></button>
                <font-awesome-icon :icon="['fas', 'floppy-disk']" @click="fileUpload()" />
        </div>
        <div>
            <h2 @click="editSuccessMsg">帳號</h2>
            <input type="text" :value="userData.USERNAME"  disabled>
        </div>
        <div>
            <h2>修改密碼</h2>
            <input type="password" v-model="userData.PASSWORD" disabled>
            <div>
                <font-awesome-icon :icon="['fas', 'pen']" @click="infoEdit" />
                <font-awesome-icon :icon="['fas', 'floppy-disk']" @click="(e) => {editSuccessMsg(e);infoSave(e);}"/>
            </div>
        </div>
        <div>
            <h2>姓名</h2>
            <input type="text"  v-model="userData.NAME" disabled autocomplete="off">
            <div>
                <font-awesome-icon :icon="['fas', 'pen']" @click="infoEdit" />
                <font-awesome-icon :icon="['fas', 'floppy-disk']" @click="(e) => {editSuccessMsg(e);infoSave(e);}" />
            </div>
        </div>
        <div>
            <h2>手機號碼</h2>
            <input type="tel"  v-model="userData.PHONE" disabled maxlength="10" autocomplete="off" oninput="value = value.replace(/[^\d]/g,'')">
            <div>
                <font-awesome-icon :icon="['fas', 'pen']" @click="infoEdit" />
                <font-awesome-icon :icon="['fas', 'floppy-disk']" @click="(e) => {editSuccessMsg(e);infoSave(e);}" />
            </div>
        </div>
        <div>
            <h2>電子信箱</h2>
            <input type="email" ref="emailInput"  v-model="userData.EMAIL" disabled autocomplete="off">
            <div>
                <font-awesome-icon :icon="['fas', 'pen']" @click="infoEdit" />
                <font-awesome-icon :icon="['fas', 'floppy-disk']" @click="(e) => {editSuccessMsg(e);infoSave(e);}" />
            </div>
        </div>
        <div class="sAddress">
            <h2>服務地址</h2>
          <div>

            <select name="county" id="countySelector" v-model="userData.COUNTY" disabled>
                <option value="新北市">新北市</option>
                <option value="台北市">台北市</option>
                <option value="桃園市">桃園市</option>
            </select>
            <select name="dNewTaipei" id="" v-if="userData.COUNTY=='新北市'" v-model="userData.DISTRICT" disabled>
                <option :value="dist" v-for="dist in newTaipei" :key="dist">{{ dist }}</option>
                <!-- <option value="">區</option>
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
                <option value="">土城區</option> -->

            </select>
            <select name="dTaipei" id="" v-if="userData.COUNTY=='台北市'" v-model="userData.DISTRICT" disabled>
                <option :value="dist" v-for="dist in taipei" :key="dist">{{ dist }}</option>
                <!-- <option value="">區</option>
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
                <option value="">文山區</option> -->

            </select>
            <select name="dTaoyuan" id="" v-if="userData.COUNTY=='桃園市'" v-model="userData.DISTRICT" disabled>
                <!-- <option value="" selected disabled hidden>{{userData.DISTRICT}}</option> -->
                <option :value="dist" v-for="dist in taoyuan" :key="dist">{{ dist }}</option>
                <!-- <option value="">區</option>
                <option value="">桃園區</option>
                <option value="">八德區</option>
                <option value="">龜山區</option> -->
            </select>
          </div>
            <input type="text" v-model="userData.SERVICE_ADDRESS" disabled autocomplete="off">
            <div>
                <font-awesome-icon :icon="['fas', 'pen']" @click="infoEdit_sa" />
                <font-awesome-icon :icon="['fas', 'floppy-disk']" @click="(e) => {editSuccessMsg(e);infoSave_sa(e);}" />
            </div>
        </div>
        <div class="mAddress">
            <h2>收件地址</h2>
            <input type="text" v-model="userData.SEND_ADDRESS" disabled autocomplete="off">
            <div>
                <font-awesome-icon :icon="['fas', 'pen']" @click="infoEdit" />
                <font-awesome-icon :icon="['fas', 'floppy-disk']" @click="(e) => {editSuccessMsg(e);infoSave(e);}" />
            </div>
        </div>
        <div id="editSuccessMsg">
            <h3>更新資料成功！</h3>
        </div>
    </section>
</div>
</template>
<style lang="scss" scoped>

</style>