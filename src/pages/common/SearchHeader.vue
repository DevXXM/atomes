<template>
    <div ref="headers" class="header">
        <div class="header-left" @click="$router.back(-1)">
            <span class="iconfont icon-arrow-left"></span>
        </div>
        <div class="header-input" @click="handleToSearch">
            <span class="iconfont icon-search1"></span>
            <input type="text" class="search-input" v-bind:onfocus="handleToSearch" ref="search" placeholder="请输入要搜索的内容">

        </div>

            <div class="header-right" @click="handleSearchClick">
                搜索
            </div>

    </div>
</template>
<script>
import bus from '@/assets/tools/eventBus'
export default {
    name: 'IndexHeader',
    methods:{
        handleSearchClick(){
            this.$router.push({ path: '/search/' + this.$refs.search.value,query:{"keyword":this.$refs.search.value} })
        },
        handleToSearch(){
            this.$router.push({ path: '/search_input' })
        }
    },
    mounted(){
        if (this.$route.params.keyword) {
            this.$refs.search.value = this.$route.params.keyword
        }
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
    .header-input
      padding-left:1rem
      height:2rem
      margin-top:.5rem
      margin-left:.2rem
      color:#ccc
      font-size:0.8rem
      line-height: 2rem
      background:#ffffff
      border-radius:.5rem
      flex:1
    .header-right
      color #fff
      font-size:0.8rem
      float: right
      display:block
      width:5rem
      text-align:center
    .search-input
      border 0
      position absolute
      height 1.5rem
      line-height 1.5rem
      margin-top .3rem
      margin-left 1rem
      width 40%
      outline none
</style>
