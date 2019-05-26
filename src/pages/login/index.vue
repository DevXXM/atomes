<template>
    <div>
        <div class="headers">
            Atomes.io
        </div>
        <Login-content></Login-content>
    </div>
</template>
<script>
import axios from 'axios'
import store from "../store/store";
import LoginContent from './components/content'
export default {
    name: 'bind',
    components: {
        LoginContent
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
    .headers
        height 4rem
        background #c0ccda
        font-family "微软雅黑"
        line-height 4rem
        padding-left 1.75rem
        color #fff


</style>
