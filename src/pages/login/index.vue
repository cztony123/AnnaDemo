<template>
    <div>
        用户名:<input type="text" v-model="username"><br>
        密码:<input type="text" v-model="passwrod"><br>
        <button type="button" @click="login()">登录</button>
    </div>
</template>

<script>
    export default{
        data () {
            return {
                username:"",
                passwrod:"",
            }
        },
        methods:{
            login(){
                if(this.username===""){
                    alert("请输入用户名")
                    return;
                }
                if(this.passwrod=== ""){
                    alert("请输入密码")
                    return;
<<<<<<< HEAD
=======
                }else{
                    localStorage["username"] = this.username,
                    localStorage["isLogin"] = 'true',
                    this.$router.replace("/")
>>>>>>> cc470629dd612f24b35d6b91f29d206240fe23d6
                }
                localStorage["username"]=this.username,
                localStorage["isLogin"]=true,
                this.$router.replace("/")
            }
        }
    }
</script>

<style scoped>

</style>