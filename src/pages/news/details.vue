<template>
    <div>新闻详情</div>
</template>

<script>
    export default{
        name:'details',
        created(){
            console.log(this.$route.query.id);
        }
       
    }
</script>

<style scoped>

</style>