<template>
    <div>
        <ul>
            <li @click="goPage('/news/details?id=1')">新闻1</li>
            <li @click="goPage('/news/details?id=2')">新闻2</li>
            <li >新闻3</li>
        </ul>
    </div>
</template>

<script>
import { url } from 'inspector';

    export default{
        name:"index",
        methods:{
            goPage(url){
                this.$router.push(url)
            }
        }
    }
</script>

<style scoped>

</style>
