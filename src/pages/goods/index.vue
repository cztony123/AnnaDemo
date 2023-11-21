<template>
    <div>
        <button type="button" @click="$router.go(-1)">返回</button>
        <ul>
            <li @click="goods('/goods/itme')">商品</li>
            <li @click="goods('/goods/content')">详情</li>
            <li @click="goods('/goods/review')">评价</li>
        </ul>
        <div>
           <router-view></router-view>
        </div>
    </div>
</template>

<script>
    export default{
        name:"index",
        methods:{
            goPage(url){
                this.$router.replace(url)
            },
            goBack(){
                this.$router.go(-1)
            }
            
        }
    }
</script>

<style scoped>

</style>