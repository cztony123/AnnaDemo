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
<<<<<<< HEAD
                this.$router.replace('/login');
=======
                this.$router.replace('/login')
>>>>>>> cc470629dd612f24b35d6b91f29d206240fe23d6
            }
        }
    }
</script>

<style scoped>

</style>