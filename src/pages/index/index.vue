<template>
    <div>
        <ul>
            <li>首页</li>
            <li @click="goPage('/news')">新闻页</li>
            <li @click="goPage('/goods')"><span>产品页面</span></li>
            <li @click="goPage('/login')"><span>会员登录</span></li>
            <li @click="goParam()"><span>测试params传参</span></li>
            <li @click="goPage('/profile')"><span>个人资料</span></li>
            <li @click="goPage('/cssify?id=1')"><span>产品分类</span></li>
        </ul>
        <div class="box" v-if="isShow"><span @click="isShow=false">X</span></div>
    </div>
</template>

<script>
// import router from '@/router';
// import { time } from 'console';

export default {
    data() {
        return {
            isShow:true
        };
    },
    methods: {
        goPage(url) {
            // console.log(url)
            this.$router.push(url).catch(err =>{})
        },
        goParam(){
           this.$router.push({name:"params",params:{id:10}})
        }
        
    },
        // components: {router},
    beforeRouteEnter(to,from,next){ 
        next()
        // 在渲染该组件的对应路由被confirm前调用 
        // 不！能！获取组件实例"this" 
        // 因为当前守卫执行前，组件实例还没有创建 
    },
    // beforeRouteLeave(to,from,next){
    //     if(this.isShow){
    //         next(false)
    //     }else{
    //         next()
    //     }
    // }
}
</script>

<style scoped>
.box{
    width: 100px;
    height: 100px;
    background-color: red;
    position: absolute;
    left: 50%;
    top: 50%;
    text-align: right;
     transform: translate(-50%, -50%)

}
</style>