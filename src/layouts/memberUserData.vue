<script setup>
import { ref } from "vue";
let county = ref('');
function infoEdit(e){
console.log(e.target.closest('div').parentElement.querySelector('input'))
let input = e.target.closest('div').parentElement.querySelector('input');
input.disabled=false;
input.focus();
if(input.disabled==false){
    input.classList.add('needToFill');
}}

const infoEdit_sa=(e)=>{

    let dropdown = e.target.closest('.sAddress').querySelector('div select')
    let input = e.target.closest('.sAddress').querySelector('input')
    dropdown.disabled = false;
    input.disabled = false;
    if(input.disabled==false){
    input.classList.add('needToFill');
}
}
function infoSave(e){
let input = e.target.closest('div').parentElement.querySelector('input')
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
const profileClick=(e)=>{
    profile.click()
}
const newTaipei = ['區','三峽區','三重區','中和區','五股區','板橋區','新店區','永和區','汐止區','新莊區','淡水區','深坑區','蘆洲區','林口區','泰山區','土城區'];
const taipai = ['區','中正區','大同區','中山區','松山區','大安區','萬華區','信義區','士林區','北投區','內湖區','南港區','文山區'];
const taoyuan = ['區','桃園區','八德區','龜山區'];
</script>
<template>

<div>
        <section class="member_main userData" >
            <div @click="profileClick">
                <div>
                <input type="file" id="profile">
            </div>
                <font-awesome-icon :icon="['fas', 'pen']" @click.self="profileClick" />
            </div>
            <div>
                <h2>帳號</h2>
                <input type="text" disabled>
            </div>
            <div>
                <h2>修改密碼</h2>
                <input type="password" disabled>
                <div>
                <font-awesome-icon :icon="['fas', 'pen']" @click="infoEdit" />
                <font-awesome-icon :icon="['fas', 'floppy-disk']" @click="infoSave" />
                </div>
               
            </div>
            <div>
                <h2>姓名</h2>
                <input type="text" disabled>
                <div>
                     <font-awesome-icon :icon="['fas', 'pen']" @click="infoEdit" />
                <font-awesome-icon :icon="['fas', 'floppy-disk']" @click="infoSave" />
                </div>
            </div>
            <div>
                <h2>手機號碼</h2>
                <input type="tel" disabled maxlength="10">
                <div>
                <font-awesome-icon :icon="['fas', 'pen']" @click="infoEdit" />
                <font-awesome-icon :icon="['fas', 'floppy-disk']" @click="infoSave" />
                </div>
            </div>
            <div>
                <h2>電子信箱</h2>
                <input type="email" disabled>
                <div>
                     <font-awesome-icon :icon="['fas', 'pen']" @click="infoEdit" />
                <font-awesome-icon :icon="['fas', 'floppy-disk']" @click="infoSave" />
                </div>
            </div>
            <div class="sAddress">
                <h2>服務地址</h2>
                <div>
                <select name="county" id=""  v-model="county" disabled >
                    <option value="">縣市</option>
                    <option value="newTaipei">新北市</option>
                    <option value="taipei">台北市</option>
                    <option value="taoyuan">桃園市</option>
                </select>
                <select name="dNewTaipei" id="" v-if="county=='newTaipei'" >
                    <option value="" v-for="dist in newTaipei" :key="dist">{{ dist }}</option>
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
                <select name="dTaipei" id="" v-if="county=='taipei'">
                    <option value="" v-for="dist in taipei" :key="dist">{{ dist }}</option>
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
                <select name="dTaoyuan" id="" v-if="county=='taoyuan'">
                    <option value="" v-for="dist in taoyuan" :key="dist">{{ dist }}</option>
                    <!-- <option value="">區</option>
                    <option value="">桃園區</option>
                    <option value="">八德區</option>
                    <option value="">龜山區</option> -->
                </select>
            </div>
                <input type="text" disabled>
                <div>
                     <font-awesome-icon :icon="['fas', 'pen']" @click="infoEdit_sa" />
                <font-awesome-icon :icon="['fas', 'floppy-disk']"  />
                </div>
            </div>
            <div class="mAddress">
                <h2>收件地址</h2>
                <input type="text" disabled>
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