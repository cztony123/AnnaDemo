<template>
    <div>新闻的ID: {{id}}</div>
</template>

<script>
    export default {
        data() {
            return {
                id: ''
            };
        },
        created () {
            this.id = this.$route.query.id
        },
        methods:{
        
        }
    }
</script>

<style scoped>

</style>