<script setup>
import { ref,onMounted,onUpdated } from "vue";
defineEmits(['ModalComment']);
const props = defineProps({data:Object});
onMounted(()=>{
    // console.log(props.data);
})
const qualityStar = ref(null);
const attitudeStar = ref(null);
// let quaStarNum = 0;
// let attStarNum = 0;
let CommentData = {
    member_id:sessionStorage.getItem('member_ID'),
    order_id:props.data.id,
    quality:0,
    attitude:0,
    content:''
}
const submitComment =()=>{
    // const url = 'http://localhost/thd104/g1/public/php/comment_insert.php';
    const url = 'php/comment_insert.php';
    fetch(url, {
        method: 'POST',
        body: JSON.stringify(CommentData)

    })
}


const qualityStar_el = (e)=>{
    if(e.target.closest('svg').dataset.qua){
    //   quaStarNum = e.target.closest('svg').dataset.qua;
      CommentData.quality = e.target.closest('svg').dataset.qua;
        for(let k = 0; k < 5; k ++ ){
            qualityStar.value.querySelectorAll('svg')[k].classList.remove('star_color');
            if(CommentData.quality>=k+1){
                qualityStar.value.querySelectorAll('svg')[k].classList.remove('star_wo_color');
                qualityStar.value.querySelectorAll('svg')[k].classList.add('star_color');
            }
        }  
    }
    console.log(CommentData.quality);
}

const attitudeStar_el = (e)=>{
    if(e.target.closest('svg').dataset.att){
    //   attStarNum = e.target.closest('svg').dataset.att;
      CommentData.attitude = e.target.closest('svg').dataset.att;
        for(let j = 0; j < 5; j ++ ){
            attitudeStar.value.querySelectorAll('svg')[j].classList.remove('star_color');
            if(CommentData.attitude>=j+1){
                attitudeStar.value.querySelectorAll('svg')[j].classList.remove('star_wo_color');
                attitudeStar.value.querySelectorAll('svg')[j].classList.add('star_color');
            }
        }  
    }
    console.log(CommentData.attitude);
}
// console.log(CommentData.content)

</script>
<template>
    <div class="modal_mask" @click.self="$emit('ModalComment')" >
   
    <div class="modal_content comment_box">
        <div class="modal_title">
            <h1>評價此訂單</h1>
        </div>
        <div>
            <h2>服務日期</h2>
            <h2>{{props.data.service_date}}</h2>
            <h2>{{props.data.time_range}}</h2>
        </div>
        <section>
            <article>
                <img :src="data.service_pic" alt="">
                <h2>{{data.service}}</h2>
            </article>
            <article v-for="item in data['add_service']" :key="item">
                <img :src="item.add_service_pic" alt="">
                <h2>{{item.add_service_name}}</h2>
            </article>
        </section>
        <section>
            <div>
                <article>
                    <h2>服務品質</h2>
                    <div class="comment_star" ref="qualityStar" @click="qualityStar_el">
                        <font-awesome-icon :icon="['fas', 'star']" data-qua="1" class="star_wo_color" />
                        <font-awesome-icon :icon="['fas', 'star']" data-qua="2" class="star_wo_color"/>
                        <font-awesome-icon :icon="['fas', 'star']" data-qua="3" class="star_wo_color"/>
                        <font-awesome-icon :icon="['fas', 'star']" data-qua="4" class="star_wo_color"/>
                        <font-awesome-icon :icon="['fas', 'star']" data-qua="5" class="star_wo_color" />
                    </div>
                </article>
                <article>
                    <h2>服務態度</h2>
                    <div class="comment_star" ref="attitudeStar" @click="attitudeStar_el">
                        <font-awesome-icon :icon="['fas', 'star']" data-att="1"  class="star_wo_color"/>
                        <font-awesome-icon :icon="['fas', 'star']" data-att="2" class="star_wo_color"/>
                        <font-awesome-icon :icon="['fas', 'star']" data-att="3" class="star_wo_color"/>
                        <font-awesome-icon :icon="['fas', 'star']" data-att="4" class="star_wo_color"/>
                        <font-awesome-icon :icon="['fas', 'star']" data-att="5"  class="star_wo_color"/>
                    </div>
                </article>
            </div>
            <textarea name="" id="" cols="30" rows="10" placeholder="我還有話想說~" v-model="CommentData.content"></textarea>
        </section>
        <div>
            <button class="btn" @click="$emit('ModalComment')">關閉</button>
            <button class="btn" @click="()=>{submitComment();$emit('ModalComment');}">送出</button>
        </div>



        <img class="cross_modal" @click="$emit('ModalComment')" src="@/img/about/about_lightbox_cross.svg" alt="">
        
    </div>
</div>
</template>


<style lang="scss">
@import '@/sass/main.scss';

// 關閉燈箱的叉叉圖片
img.cross_modal{
        cursor: pointer;
        width: 24px;
        margin: 8px 8px 0 0 ;
    }

.comment_box{
    position: relative;
    background-color: $white;
    width: 700px;
    height: 500px;
    margin: 60px auto 0;
    border-radius: 10px;
    padding:40px;

    >div:nth-child(2){
        display: flex;
        align-items: center;
        margin-bottom: 30px;
        h2{
            margin-right: 20px;
        }
        h2:last-child,h2:nth-child(2){
            border-radius: 8px;
            padding: 5px 10px;
            background-color: $light-milktea;
        }
    }
    >section:nth-child(3){
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        article{
            display: flex;
            flex-basis: 300px;
            padding-bottom: 15px;
            margin-bottom: 15px;
            border-bottom: 2px dashed $grey;
            img{
                width: 60px;
                margin-right: 20px;
            }
            h2{
                align-self: center;
            }
        }
    }
    >section:nth-child(4){
        display: flex;
        justify-content: space-between;
        >div{
            display: flex;
            flex-direction: column;
            article{
                display: flex;
                align-items: center; margin-bottom: 10px;
                >h2{
                    margin-right: 20px;
                }
            }
        }
        textarea{
            background-color: $light-milktea;
            border: none;
            border-radius: 10px;
            padding-left: 10px; 
            padding-top: 10px;
            width: 300px;
            height: 60px;
            outline: none;
            resize: none;
        }
    }
    >div:nth-child(5){
        display: flex;
        justify-content: center;
        margin:20px 0;
        button{
            width: 150px;
            height: 50px;
            &:first-child{
                margin-right: 60px;
            }
        }
    }
    >img{
        position: absolute;
        top: 10px;
        right: 10px;
    }
}
.comment_star{
    display: flex;
    cursor: pointer;
   
    svg{
        color:$dark-milktea;
        opacity: .2;
        width: 24px;
        margin-left: 10px;
    }
        svg.star_color {
        color: $dark-milktea;
        opacity: 1;
        }

        svg.star_wo_color {
        color: $dark-milktea;
        opacity: .2;
        &:hover{
            opacity: .5;
        }
        }
}

@media screen and (max-width:750px) {
.comment_box{
    width: 320px;
    padding: 25px;
    .modal_title{
    h1{
        font-size:$h2 ;
        &::before{
            display: none;
        }
    }
}

>div:nth-child(2){
    margin-bottom: 20px;
   h2{
    margin-right: 10px;
    font-size: $h4;
} 
} 
>section:nth-child(3){
    padding: 10px;
    height: 150px;
    overflow-y: scroll;
    margin-bottom: 10px;
}
>section:nth-child(4){
    flex-direction: column; 
    div{
        align-items: center;
        article{
        h2{
            font-size: $h4 ;
            margin-right: 0;
        }
    } 
    
}
textarea{
        width: auto;

    }
}
>div:nth-child(5){
    button:first-child{
        margin-right: 40px;
    }
    button.btn{
        width: 100px;
        height: 40px;
        line-height: 20px;
    }
}
}

}

</style>
