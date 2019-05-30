<template>
    <div>
        <div class="headers">
            <div class="iconfont icon-list header-icon" style="font-size: 3rem"></div>
            <div class="header-title">Events</div>
            <div class="header-img"><img src="http://api.atomes.wordo.cn/img/071544116.jpg" alt=""></div>
        </div>
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
    .header-title
        width 30%
        float left
        line-height 4rem
    .header-icon
        width 12%
        float left
        line-height 4rem
    .header-img
        width 3.2rem
        float right
        line-height 4rem
        margin-right 1rem
    .header-img img
        border-radius 50%
        width 100%
</style>
