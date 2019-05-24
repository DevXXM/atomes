<template>
    <div>
        <div ref="headers" class="header" >

            <div class="header-left" @click="$router.back(-1)">
                <span class="iconfont icon-arrow-left" ></span>
            </div>


            <div class="header-title" @click="$router.back(-1)" >{{title}}</div>
            <div v-show="right" class="title-right" @click="to_url(url)">
                {{right}}
            </div>
        </div>

    </div>

</template>
<script>
export default {
    name: 'BindHeader',
    props:['title','right','url'],
    methods:{
        to_url(to){
            this.$router.push({ path:to })
        }
    },
    mounted(){
    }
}
</script>
<style lang="stylus" scoped>
@import '~styles/variables.sty'

  .header
    display: flex
    line-height: 3rem
    background:$bgColor
    color:#ffffff
    .header-left
      text-align:center
      width: 2.64rem
      float: left
    .header-title
        position absolute
        text-align center
        width 100%
    .title-right
        position absolute
        top -10
        right 0rem
        width 4rem
        font-size .8rem
</style>
