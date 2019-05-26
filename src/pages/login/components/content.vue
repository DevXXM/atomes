<template>
    <div class="contents">
        <div class="contents-list">
            <input type="text" placeholder="Username or Email">
        </div>
        <div class="contents-list">
            <input type="password" placeholder="Password">
        </div>
        <div class="contents-list">
            <input type="button" id="login-btn" value="LOG IN">
        </div>
        <div class="contents-list">
            <divider>or</divider>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
import { Divider } from 'vux'
export default {
    name: 'contents',
    components: {
        Divider
    },
    data: function () {
        return {
            book_info:{}
        }
    },
    methods:{
    },
    mounted() {
    }
}
</script>
<style lang="stylus">
    /*.contents*/
        /*margin-top 2rem*/
        /*.contents-list*/
            /*line-height 4rem*/
            /*margin-left 5%*/
            /*input*/
                /*position relative*/
                /*border 0*/
                /*border-bottom 1px solid #d5dde6*/
                /*width 90%*/

                /*font-size 1rem*/
                /*padding-left .5rem*/
                /*padding-bottom .5rem*/
                /*padding-top .5rem*/
                /*padding .5rem*/

    .contents
        margin-top 2rem
        .contents-list
            line-height 4rem
            margin-left 5%
            input
                position relative
                border 0
                border-bottom 1px solid #d5dde6
                width 90%
    #login-btn
        background #47525e
        padding-left .25rem
        padding-top 0
        width calc(90% + .5rem)
        height 3rem
        line-height 3rem
        color #fff
        border-radius .2rem
        margin-top 2rem

    .line-left
        position absolute
        display:inline-block;
        width 100px

        border-top:1px solid #eee;
        vertical-align:5px;
    .line-right
        display:inline-block;
        width 100px
        float right
        border-top:1px solid #eee;
        vertical-align:5px;
    .tips
        width 20%
        position absolute
        color #56606b
        font-size .7rem
</style>
