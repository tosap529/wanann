<template>
    <div class="tab">
        <ul >
            <li class="tab_on incomplete" @click="$emit('memberTabClick',$event,index)"><a href="#">未完成訂單</a></li>
            <li class="complete" @click="$emit('memberTabClick',$event,index)"><a href="#">已完成訂單</a></li>
        </ul>
    </div>
</template>

<script setup>
defineEmits(["memberTabClick"]);

</script>

<style lang="scss" scoped>

</style>