<script setup>
import DefaultHeader from '@/layouts/header.vue'; 
import DefaultFooter from '@/layouts/footer.vue';
import BannerUrl  from '@/img/reserve1/reserve1_banner.jpg'; 
const banner_url = BannerUrl; 
</script>
<template>
    <div>
        <DefaultHeader header-title-zh="預約服務" header-title-eng="Schedule Your Cleaning" :bgi="banner_url" /> 
    <div class="wrapper reserve2">
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
            <div class="checkbox_bar">
                <div>
                <input type="checkbox" name="" class="service_checkbox" id="checkbox1">
                <label for="checkbox1" name="">窗簾清潔</label>
                </div>
                <p>NTD500</p>
            </div>
            <div class="checkbox_bar">
                <div>
                <input type="checkbox" name="" class="service_checkbox" id="checkbox2">
                <label for="checkbox2" name="">布件除蟎</label>
                </div>
                <p>NTD500</p>
            </div>
            <div class="checkbox_bar">
                <div>
                <input type="checkbox" name="" class="service_checkbox" id="checkbox3">
                <label for="checkbox3" name="">冷氣機清理</label>
                </div>
                <p>NTD500</p>
            </div>
            <div class="checkbox_bar">
                <div>
                <input type="checkbox" name="" class="service_checkbox" id="checkbox4">
                <label for="checkbox4" name="">冰箱清理</label>
                </div>
                <p>NTD500</p>
            </div>
            <div class="checkbox_bar">
                <div>
                <input type="checkbox" name="" class="service_checkbox" id="checkbox5">
                <label for="checkbox5" name="">洗衣機清理</label>
                </div>
                <p>NTD500</p>
            </div>
            <div class="checkbox_bar">
                <div>
                <input type="checkbox" name="" class="service_checkbox" id="checkbox6">
                <label for="checkbox6" name="">陽台清潔</label>
                </div>
                <p>NTD500</p>
            </div>
            <div class="checkbox_bar">
                <div>
                <input type="checkbox" name="" class="service_checkbox" id="checkbox7">
                <label for="checkbox7" name="">簡易消毒</label>
                </div>
                <p>NTD500</p>
            </div>
        </article>
        <article class="right">
            <div class="top">
                <h2>特殊處理</h2>
                <p>浣安無所不包！讓浣安聯絡您以了解真實情況！</p>
            </div>
            <div class="checkbox_bar">
                <div>
                <input type="checkbox" name="" class="service_checkbox" id="checkbox8">
                <label for="checkbox8" name="">簡易消毒</label>
                </div>
                <p>若屋況為空屋，則可減免價格</p>
            </div>
            <div class="checkbox_bar">
                <div>
                <input type="checkbox" name="" class="service_checkbox" id="checkbox9">
                <label for="checkbox9" name="">毛孩服務</label>
                </div>
                <p>若家中有飼養狗、貓等寵物，請勾選此項</p>
            </div>
            <div class="checkbox_bar">
                <div>
                <input type="checkbox" name="" class="service_checkbox" id="checkbox10">
                <label for="checkbox10" name="">大坪數</label>
                </div>
                <p>室內坪數超過25坪，請勾選此項
                    <br>(僅適用於「浣安全室清潔」方案)</p>
            </div>
            <div class="checkbox_bar">
                <div>
                <input type="checkbox" name="" class="service_checkbox" id="checkbox11">
                <label for="checkbox11" name="">樓中樓</label>
                </div>
                <p>室內空間若有樓中樓，請勾選此項
                    <br>(僅適用於「浣安全室清潔」方案)</p>
            </div>
            <div class="checkbox_bar">
                <div>
                <input type="checkbox" name="" class="service_checkbox" id="checkbox12">
                <label for="checkbox12" name="">局部加強</label>
                </div>
                <p>如房屋有特殊格局：深窄的空間、地下室等，請勾選此項</p>
            </div>
        </article>
    </section>




        <section class="next_btn">
            <a href="" class="btn next">下一步</a>
        </section>

    </div>
    <DefaultFooter />
</div>
</template>


<style lang="scss">
@import '@/sass/main.scss';

</style>