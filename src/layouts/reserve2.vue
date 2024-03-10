<script setup>
import {ref} from 'vue';
    defineEmits(['nextReserveStep','lastReserveStep'])
    let my_service_order = JSON.parse(localStorage.getItem("my_service_order"));
    console.log(my_service_order);

    const notAllRoom = ref(false);
    if(my_service_order.main_plan != '浣安全室清潔'){
        notAllRoom.value = true;
        console.log(notAllRoom.value);
    };
    const additionals = ['窗飾清潔','布件除螨','冷氣機清理','冰箱清理','洗衣機清理','陽台清潔','簡易消毒'];
    const specials = [
        {name:'空屋',
        disabled:false,
        info:`<p>若屋況為空屋，則可減免價格</p>`
        },
        {name:'毛孩服務',
        disabled:false,
        info:`<p>若家中有飼養狗、貓等寵物，請勾選此項</p>`
        },
        {name:'大坪數',
        disabled:true,
        info:`<p>室內坪數超過25坪，請勾選此項
            <br>(僅適用於「浣安全室清潔」方案)</p>`
        },
        {name:'樓中樓',
        disabled:true,
        info:`<p>室內空間若有樓中樓，請勾選此項
            <br>(僅適用於「浣安全室清潔」方案)</p>`
        },
        {name:'局部加強',
        disabled:false,
        info:`<p>如房屋有特殊格局：深窄的空間、地下室等，請勾選此項</p>`
        },
    ]
    const checkAdditional =(e)=>{
        let service_checkbox = document.querySelectorAll('.service_checkbox_ad');
        let additional_plan_selected = [];
        for(let i =0;i<service_checkbox.length;i++){
            if(service_checkbox[i].checked==true){
                additional_plan_selected.push(service_checkbox[i].nextElementSibling.innerText);
                console.log(additional_plan_selected);
            }
        }
        my_service_order.additional_plan = additional_plan_selected;
        localStorage.setItem("my_service_order", JSON.stringify(my_service_order));
    }
    const checkSpecial =(e)=>{
        let service_checkbox = document.querySelectorAll('.service_checkbox_sp');
        let special_plan_selected = [];
        for(let i =0;i<service_checkbox.length;i++){  
            if(service_checkbox[i].checked==true){
                special_plan_selected.push(service_checkbox[i].nextElementSibling.innerText);
                console.log(special_plan_selected);
            }
        }
        my_service_order.special_plan = special_plan_selected;
        localStorage.setItem("my_service_order", JSON.stringify(my_service_order));
    }

</script>

<template>
<div class="wrapper reserve2">
    <section class="subtitle" @click="$emit('lastReserveStep')">
        <h1>1</h1>
        <h1>選擇服務</h1>
     </section>
        <section class="subtitle">
        <h1>2</h1>
        <h1>選擇加購服務</h1>
     </section>
    <section class="reserve_add">
        <article class="left">
            <div class="top">
                <h2>延伸服務</h2>
                <p>找找看有沒有你需要的</p>
            </div>
            <div class="checkbox_bar" v-for="(additional,i) in additionals"  :key="additional">
                <div>
                    <input type="checkbox" name="checkbox" class="service_checkbox_ad" :id="'checkbox'+(i+1)"  @click.self="checkAdditional">
                    <label :for="'checkbox'+(i+1)">{{ additional }}</label>
                </div>
                <p>NTD500</p>
            </div>
        </article>
        <article class="right">
            <div class="top">
                <h2>特殊處理</h2>
                <p>浣安無所不包！讓浣安聯絡您以了解真實情況！</p>
            </div>
            <div class="checkbox_bar" v-for="(special,i) in specials" :key="special">
                <div>
                <input type="checkbox" name="checkbox" class="service_checkbox_sp" :id="'checkbox'+(i+8)" :disabled="special.disabled ? notAllRoom: false" @click.self="checkSpecial">
                <label :for="'checkbox'+(i+8)">{{ special.name }}</label>
            </div>
            <div v-html="special.info"></div>
            </div>
        </article>
    </section>
        <section class="next_btn">
            <a class="btn" @click="$emit('nextReserveStep',$e)">下一步</a>
        </section>

    </div>
</template>



<style lang="scss" scoped>
.subtitle:nth-child(1){
    opacity: .5;
    margin-bottom: 0;
    cursor: pointer;
}

</style>