<script setup>
  const props = defineProps(['day']);
  defineEmits(['clickDay'])
</script>
<template>
<div>
<article class="single_day" :class="[{'not_day':!day}]" @click="$emit('clickDay', $event)">
    <h2>{{day}}</h2>
    <div class="star" v-if="day">
        <img src="@/img/reserve3/reserve3_star_on.svg" alt="">
        <img src="@/img/reserve3/reserve3_star_on.svg" alt="">
        <img src="@/img/reserve3/reserve3_star_on.svg" alt="">
    </div>
</article>
</div>
</template>



<style lang="scss" scoped>
.not_day{
 &:hover{
  outline: none;
  cursor: default;
 }
}
</style>