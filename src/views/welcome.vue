<template>
    <div>
        <div class="welcome_wrapper">
            <router-link :to="{ name:'cms' }" class="welcome_back"><img src="@/img/welcome/welcome_back.png" alt="後台"></router-link>
        <router-link :to="{ name: 'home' }" class="welcome_front"><img src="@/img/welcome/welcome_front.png" alt="前台"></router-link>
    </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss">


</style>