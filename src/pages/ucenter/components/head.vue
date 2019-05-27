<template>
    <div class="contents">
        <div class="col-xs-4"></div>
        <div class="headimg col-xs-4">
            <img src="http://img.wordo.cn/defaulthead.gif" alt="">
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
<style lang="stylus" scoped>
    .contents
        height 16rem
        width 100%
        background #C0CCDA

    .headimg
        border-radius 50%
        margin 11rem auto
    .headimg img
        width 100%
        border-radius 50%

</style>
