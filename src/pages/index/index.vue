<template>
    <div>
        <ul>
            <li>首页</li>
            <li @click="goPage('/news')">新闻页</li>
            <li @click="goPage('/goods')"><span>产品页面</span></li>
            <li @click="goPage('/login')"><span>会员登录</span></li>
            <li @click="goParam()"><span>测试params传参</span></li>
        </ul>
    </div>
</template>

<script>
// import router from '@/router';
// import { time } from 'console';

export default {
    data() {
        return {};
    },
    methods: {
        goPage(url) {
            // console.log(url)
            this.$router.push(url);
        },
        goParam(){
           this.$router.push({name:"params",params:{id:10}})
        }
        
    },
    // components: {router}
}
</script>

<style scoped>

</style>