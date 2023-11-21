<template>
    <div>
        <ul>
            <li><router-link to="/">首页</router-link></li>
            <li><router-link to="news">新闻页面</router-link></li>
            <li><span @click="goPage('/goods')">产品页面</span></li>
            <li><span @click="goPage('/login')">会员登录</span></li>
        </ul>
    </div>
</template>

<script>


    export default{
    name: "index",
    methods:{
        goPage(url){
            this.$router.push(url)
        }
    }
}

</script>

<style scoped>

</style>