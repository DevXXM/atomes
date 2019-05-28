<template>
    <div class="col-xs-12">
        <div class="contents-list" >
            <div class="username">
                <b>{{userData.nickname}}</b>
            </div>
            <div class="office">
                {{userData.office}}
            </div>
            <div class="office">
                {{userData.position}}
            </div>
            <div class="icon-box">
                <span class="iconfont icon-facebook"></span>
                <span class="iconfont icon-twitter"></span>
                <span class="iconfont icon-google"></span>
            </div>
        </div>
        <div class="project-list">
            <div class="project-item">
                <div class="project-cover">
                    <img src="http://api.atomes.wordo.cn/img/cover.jpg" alt="">
                </div>
                <div class="project-title">
                    Project1
                </div>
                <div class="project-desc">
                    Subtitle
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
import { Divider } from 'vux'
export default {
    name: 'contents',
    props:{
        userData:{}
    },
    components: {
        Divider
    },
    data: function () {
        return {
        }
    },
    methods:{

    },
    mounted() {
    }
}
</script>
<style lang="stylus" scoped>
    .contents-list
        text-align center
        margin-top -10rem
    .username
        font-family "微软雅黑"
        font-size 1.6rem
        color #3d4855
    .office
        color #929eb0
        font-size .8rem
    .icon-box span
        font-size 2rem
        padding-left .2rem
        padding-right .2rem
    .project-list
        width 100%
    .project-item
        height 6rem
        background #eff2f7
    .project-cover
        width 4rem
        height 4rem
        position absolute
    .project-cover img
        width 100%
        height 100%
        margin 1rem
        border-radius 50%

    .project-title
        margin-left 6rem
        padding-top 1rem
        color #3b4653
    .project-desc
        margin-left 6rem
        color #929eb0
        font-size .8rem
</style>
