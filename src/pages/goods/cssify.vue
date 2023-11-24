<template>
    <div>
        <ul>
            <li @click="goPage('/cssify?id=1')">潮流女装</li>
            <li @click="goPage('/cssify?id=2')">品牌男装</li>
            <li @click="goPage('/cssify?id=3')">包包/鞋子</li>
            <li @click="goPage('/cssify?id=4')">内衣</li>
        </ul>
    </div>
</template>

<script>
    export default {
        methods:{
            goPage(url){
                this.$router.replace('url')
                setTimeout(()=>{
                    this.$router.replace(url)
                },30)
            }
        },
        created(){
            console.log(this.$route.query.id)
        },
        // beforeRouteUpdate(to,from,next){ 
        //     console.log(to.query.id) 
        //     next()

        //     //在当前路由改变，但是该组件被复用是调用 
        //     //举例来说，对于一个带有动态参数的路径/foo/:id,在/foo/1和/foo/:2之间跳转的时候， 
        //     //由于会渲染同样的Foo组件，因此组件实例会被复用，而这个钩子就会在这个情况下被调用， 
        //     //可以访问组件实例'this' 
        // }, 
    }
</script>

<style scoped>

</style>