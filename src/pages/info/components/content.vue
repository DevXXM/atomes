<template>
    <div>
        <div class="contents-img" >
            <img :src="eventObj.photo" alt="">
        </div>
        <div class=" container">
            <div class="contents-list" style="margin-top: 4rem">
                <div class="contents-title">
                    {{eventObj.name}}
                </div>
            </div>
            <div class="contents-list" >
                <div class="contents-address">
                    {{eventObj.address}}
                </div>
            </div>
            <div class="contents-list">
                <div class="contents-address">
                    {{eventObj.contact}}
                </div>
            </div>
            <div class="contents-list">
                <div class="contents-address">
                    <span style="color:#000">{{eventObj.peoples}}</span> peoples <span>|</span> <span style="color:#000">{{eventObj.views}}</span> views

                </div>
            </div>
            <loading :show="load"></loading>
            <toast v-model="tips">{{ret_msg}}</toast>
            <toast v-model="tipe" type="cancel">{{ret_msg}}</toast>
        </div>
    </div>

</template>
<script>
    import axios from 'axios'
    import store from "../../store/store";
    import * as types from '@/pages/store/types'
    import { Group,Toast,Loading,Blur,XInput,PopupRadio,Flexbox, FlexboxItem ,Divider,Cell } from 'vux'
    export default {
        name: 'contents',
        props:{
            eventObj:{}
        },
        components: {
            Divider,
            Blur,
            Group,
            Loading,
            Toast,
            XInput,
            PopupRadio,
            Flexbox,
            FlexboxItem,
            Cell
        },
        data: function () {
            return {
                username: "",
                password: "",
                load:false,
                tips:false,
                tipe:false,
                ret_msg:""
            }
        },
        methods: {

        },
        mounted() {
        }
    }
</script>
<style lang="stylus" scoped>
    .contents-list
        margin-top 1rem
        line-height 1.5rem

        input
            position relative
            border 0
            border-bottom 1px solid #d5dde6
            width 100%
    .contents-img
        width 100%
        img
            width 100%
            margin-left 0rem
    .login-btn
        background #47525e
        padding-left .25rem
        padding-top 0
        width 100%
        height 4rem
        line-height 4rem
        color #fff
        border-radius .2rem
    .contents-title
        text-align center
        font-size 2rem
        color #000
    .contents-address
        text-align center
        font-size .8rem
        color #8b98aa

</style>
