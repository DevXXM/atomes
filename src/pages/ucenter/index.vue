<template>
    <div>
        <ucenter-head :userData="userData"></ucenter-head>
        <ucenter-content :userData="userData"></ucenter-content>
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
            userData:{}
        }
    },
    methods:{
        loadUser() {
            var url = `/user/userinfo`
            axios.get(url)
                .then(this.loadUserRes)
        },
        loadUserRes(res) {
            if (res.data.code == 0) {
                this.userData = res.data.data
                console.log(this.userData);
            } else {

            }
        }
    },
    mounted() {
        this.loadUser()
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
