<template>
    <div>
        <div class="headers" @click="show_left_box()">
            <div class="iconfont icon-list header-icon"  style="font-size: 3rem"></div>
            <div class="header-title">Events</div>
            <div class="header-img" ><img :src="userData.headimgurl" alt=""></div>
        </div>
        <div>
            <popup v-model="show_left" position="left" width="80%">
                <div class="box-left">
                    <div class="box-left-head">
                        <div class="col-xs-offset-1 col-xs-11" style="margin-top: 2rem;">
                            <img :src="userData.headimgurl"  alt="">
                            <div class="box-left-name">
                                {{userData.name}}
                            </div>
                        </div>
                    </div>
                    <div class="box-left-items col-xs-offset-1 col-xs-11">
                        <div class="box-left-item">
                            My Projects
                        </div>
                        <div class="box-left-item">
                            Projects
                        </div>
                        <div class="box-left-item">
                            Events
                        </div>
                    </div>
                </div>
            </popup>
        </div>
        <ucenter-content :userData="userData"></ucenter-content>
    </div>
</template>
<script>
import axios from 'axios'
import store from "../store/store";
import UcenterContent from './components/content'
import UcenterHead from './components/head'
import { Popup } from 'vux'
export default {
    name: 'bind',
    components: {
        UcenterContent,
        UcenterHead,
        Popup
    },
    data: function () {
        return {
            book_info:{},
            userData:{},
            show_left:false
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
        },
        show_left_box(){
            this.show_left = true
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
    .box-left-head
        width 100%
        min-height 10rem
        background #263445
    .box-left
        background #1e2d3e
        height 100%
    .box-left-head img
        line-height 10rem
        display block
        width 6rem
        height 6rem
        border-radius 50%
        float left
    .box-left-name
        line-height 8rem
        padding-left 1rem
        font-size 1.6rem
        color #fff
        margin-left 23%
        overflow hidden
        height 6rem
    .box-left-items
        margin-top 2rem
        color #ffffff
    .box-left-item
        line-height 4rem
</style>
