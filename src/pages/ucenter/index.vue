<template>
    <div>
        <ucenter-head></ucenter-head>
        <ucenter-content></ucenter-content>
    </div>
</template>
<script>
import axios from 'axios'
import store from "../store/store";
import UcenterContent from './components/content'
import UcenterHead from './components/head'

export default {
    name: 'bind',
    components: {
        UcenterContent,
        UcenterHead
    },
    data: function () {
        return {
            book_info:{},
            username:""
        }
    },
    methods:{
    },
    mounted() {
        var url = `/user/userinfo?username=${this.username}&password=${this.password}`
        this.load = true
        var _self = this
        axios.get(url)
            .then(function (res) {
                console.log(1);
                console.log(res.data.data.username);
                _self.username = res.data.data.username
                // this.username = res.data.data.username
            })
    }
}
</script>
<style lang="stylus" scoped>
    .headers
        height 4rem
        background #c0ccda
        font-family "微软雅黑"
        line-height 4rem
        padding-left 1.75rem
        color #fff


</style>
