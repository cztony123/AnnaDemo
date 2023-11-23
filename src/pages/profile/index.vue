<template>
    <div>
        欢迎{{ username }}回来！<br>
        <span @click="outLogin()">安全退出</span>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                username:localStorage['username'] ? localStorage['username'] : ""
            };
        },
        methods:{
            outLogin(){
                localStorage.clear();
                this.$router.replace('/login')
            }
        }
    }
</script>

<style scoped>

</style>