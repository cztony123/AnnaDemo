<template>
    <div>
        <button type="button" @click="$router.go(-1)">返回</button>
        <ul>
            <li @click="goPage('/goods/item')">商品</li>
            <li @click="goPage('/goods/content')">详情</li>
            <li @click="goPage('/goods/evaluate')">评价</li>
        </ul>
        <div>
            <router-view></router-view>
        </div>
    </div>
</template>

<script>


export default {
    name:"index",
    methods:{
        goPage(url){
            this.$router.replace(url) 
        }
    }
}
</script>

<style scoped>

</style>