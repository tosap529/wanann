<template>
    <div>
        <div class="cal">
            <font-awesome-icon class="cal_btn" :icon="['fas', 'minus']" v-on:click="countMinus" />
            <div class="cal_count">{{ cal_count }}</div>
            <font-awesome-icon class="cal_btn" :icon="['fas', 'plus']" v-on:click="countPlus" />
        </div>
    </div>
</template>

<script setup>
    import { ref } from 'vue';

    const emits = defineEmits(['updateCount']);
    
    const cal_count = ref(1);

    const countPlus = () => {
        cal_count.value++;
        emits('updateCount', cal_count.value);
    };

    const countMinus = () => {
        if(cal_count.value > 1){
            cal_count.value--;
            emits('updateCount', cal_count.value);
        }
    };
</script>



<!-- <style lang="scss" scoped>
    
</style> -->




