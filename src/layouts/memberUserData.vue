<script setup>
import { ref,onMounted,defineProps,onBeforeUpdate } from "vue";
defineEmits(['getProfileURL']);

const props = defineProps({userData:Object});

const newTaipei = ref(['區','三峽區','三重區','中和區','五股區','板橋區','新店區','永和區','汐止區','新莊區','淡水區','深坑區','蘆洲區','林口區','泰山區','土城區'])
const taipei = ref(['區','中正區','大同區','中山區','松山區','大安區','萬華區','信義區','士林區','北投區','內湖區','南港區','文山區'])
const taoyuan = ref(['區','桃園區','八德區','龜山區'])

let county = ref('');

onMounted(()=>{
    profile.value.addEventListener('change',fileChange );
    console.log(countySelector.value);

})
onBeforeUpdate(()=>{
    console.log(props.userData.ID);
    console.log(props.userData.MEMBER_PIC);
    // console.log(document.querySelector('#countySelector'))
    document.querySelector('.member_sidebar div:first-child img').src = props.userData.MEMBER_PIC;
    document.querySelector('header .nav_right .nav_user a:first-child').innerHTML = `<img src="${props.userData.MEMBER_PIC}" >`;

    // if(props.member.COUNTY == '新北市'){
    //     county.value = 'newTaipei';
    // }else if(props.member.COUNTY =='台北市'){
    //     county.value = 'taipei';
    // }else{
    //     county.value = 'taoyuan';
    // }

// let countySelector = document.getElementById('countySelector');
// countySelector.addEventListener('change',function(){
//     // console.log(countySelector.value)
//     console.log(county.value)
//     if(countySelector.value =='newTaipei' ){
//         county.value = 'newTaipei';
//     }else if(countySelector.value=='taipei'){
//         county.value = 'taipei';
//     }else{
//         county.value = 'taoyuan';
//     }
// })

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
    let input = e.target.closest('.sAddress').querySelector('input')

    dropdown.disabled = false;
    input.disabled = false;
    if(input.disabled==false){
    input.classList.add('needToFill');
    if(e.target.closest('.sAddress').querySelectorAll('div select')[1]){
        e.target.closest('.sAddress').querySelectorAll('div select')[1].disabled = false;
    }
}
}
function infoSave(e){
let input = e.target.closest('div').parentElement.querySelector('input')
if (input.disabled==false){
    if(input.value!=''){  
    if(input.classList.contains('alert_input')){
        input.classList.remove('alert_input')
    }
    input.disabled=true;  
    input.classList.remove('needToFill');

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
const profileClick=(e)=>{
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
    console.log(file);
}
const fileUpload=()=>{
    let file = document.getElementById('profile').files[0]
    let formdata  = new FormData();
    formdata.append("profile_pic", file);

    // fetch('php/member_pic_update.php', {
    //         method: 'POST',
    //         body: formdata
    //     })
    fetch('http://localhost/thd104/g1/public/php/member_pic_update.php', {
            method: 'POST',
            body: formdata
        })
        .then(response => {
            console.log(response);})
}






</script>
<template>
<div>
    <section class="member_main userData" >
        <div  method="post"  enctype="multipart/form-data" >
            <!-- <img src="@/img/member/member_icon_profile.png" alt="" ref="profile_pic">  -->
            <img :src="userData.MEMBER_PIC" alt="" ref="profile_pic"> 
            <input type="file" id="profile" name="profile" ref="profile" @change="$emit('getProfileURL')">
                <font-awesome-icon :icon="['fas', 'pen']" @click="profileClick" />
            <button  id="profilePicUpdate" ref="profilePicUpdate" ></button>
                <font-awesome-icon :icon="['fas', 'floppy-disk']" @click="fileUpload" />
        </div>
        <div>
            <h2>帳號</h2>
            <input type="text" :value="userData.ID"  disabled>
        </div>
        <div>
            <h2>修改密碼</h2>
            <input type="password" :value="userData.PASSWORD" disabled>
            <div>
                <font-awesome-icon :icon="['fas', 'pen']" @click="infoEdit" />
                <font-awesome-icon :icon="['fas', 'floppy-disk']" @click="infoSave" />
            </div>
        </div>
        <div>
            <h2>姓名</h2>
            <input type="text" :value="userData.NAME" disabled>
            <div>
                <font-awesome-icon :icon="['fas', 'pen']" @click="infoEdit" />
                <font-awesome-icon :icon="['fas', 'floppy-disk']" @click="infoSave" />
            </div>
        </div>
        <div>
            <h2>手機號碼</h2>
            <input type="tel" :value="userData.PHONE" disabled maxlength="10">
            <div>
                <font-awesome-icon :icon="['fas', 'pen']" @click="infoEdit" />
                <font-awesome-icon :icon="['fas', 'floppy-disk']" @click="infoSave" />
            </div>
        </div>
        <div>
            <h2>電子信箱</h2>
            <input type="email" :value="userData.EMAIL" disabled>
            <div>
                <font-awesome-icon :icon="['fas', 'pen']" @click="infoEdit" />
                <font-awesome-icon :icon="['fas', 'floppy-disk']" @click="infoSave" />
            </div>
        </div>
        <div class="sAddress">
            <h2>服務地址</h2>
          <div>
            <select name="county" id="countySelector" v-model="county" >
                <option value="" selected disabled hidden>{{userData.COUNTY}}</option>
                <option value="newTaipei">新北市</option>
                <option value="taipei">台北市</option>
                <option value="taoyuan">桃園市</option>
            </select>
            <select name="dNewTaipei" id="" v-if="county=='newTaipei'">
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
            <select name="dTaipei" id="" v-if="county=='taipei'" >
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
            <select name="dTaoyuan" id="" v-if="county=='taoyuan'" >
                <option :value="dist" v-for="dist in taoyuan" :key="dist">{{ dist }}</option>
                <!-- <option value="">區</option>
                <option value="">桃園區</option>
                <option value="">八德區</option>
                <option value="">龜山區</option> -->
            </select>
          </div>
            <input type="text" :value="userData.SERVICE_ADDRESS" disabled>
            <div>
                <font-awesome-icon :icon="['fas', 'pen']" @click="infoEdit_sa" />
                <font-awesome-icon :icon="['fas', 'floppy-disk']" @click="infoSave_sa" />
            </div>
        </div>
        <div class="mAddress">
            <h2>收件地址</h2>
            <input type="text" :value="userData.SEND_ADDRESS" disabled>
            <div>
                <font-awesome-icon :icon="['fas', 'pen']" @click="infoEdit" />
                <font-awesome-icon :icon="['fas', 'floppy-disk']" @click="infoSave" />
            </div>
        </div>
    </section>
</div>
</template>
<style lang="scss" scoped>

</style>