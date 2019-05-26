<template>
    <div>
        <div class="headers">
            User Center
        </div>
        <div>
            welcome {{username}}
        </div>
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
<style lang="stylus">
    .headers
        height 4rem
        background #c0ccda
        font-family "微软雅黑"
        line-height 4rem
        padding-left 1.75rem
        color #fff


</style>
