<template>
    <div class=" container">
        <div class="contents-list" style="margin-top: 5rem">
            <input type="text" placeholder="Username or Email">
        </div>
        <div class="contents-list">
            <input type="password" placeholder="Password">
        </div>
        <div class="contents-list" style="margin-top: 6rem">
            <input class="login-btn" type="button" id="login-btn" value="LOG IN">
        </div>
        <div class="contents-list">
            <divider>or</divider>
        </div>
        <div class="contents-list">
            <input class="login-btn google-share" type="button" id="share-btn" value="LOGIN WITH GOOGLE">
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
    .contents-list
        margin-top 3rem
        line-height 3rem
        input
            position relative
            border 0
            border-bottom 1px solid #d5dde6
            width 100%
    .login-btn
        background #47525e
        padding-left .25rem
        padding-top 0
        width 100%
        height 4rem
        line-height 4rem
        color #fff
        border-radius .2rem
    .google-share
        background #c0ccda
</style>
