<script setup>
defineEmits(['ModalCantGoAnywhere'])
</script>
<template>
<div class="modal_mask">
    <slot></slot>
    
    
    
</div>
</template>

<style lang="scss" scoped>
// @import '@/sass/main.scss';

img.cross_modal{
        cursor: pointer;
        width: 24px;
        align-self: flex-end;
        margin: 8px 8px 0 0 ;
    }
button.btn{
    margin-bottom: 16px;
}
</style>