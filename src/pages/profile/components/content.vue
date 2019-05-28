<template>
    <div class=" container">
        <div class="contents-list" style="margin-top: 5rem;">
            <img src="http://api.atomes.wordo.cn/img/071544116.jpg" alt="">
        </div>
        <div class="contents-list" style="margin-top: 5rem">
            <input type="text" placeholder="Please enter your name" maxlength="80" v-model="formData.nickname">
        </div>
        <div class="contents-list" style="margin-top: 5rem">
            <input type="text" placeholder="Please enter your description" maxlength="300" v-model="formData.office">
        </div>
        <!--<div class="contents-list" style="margin-top: 5rem">-->
            <!--<input type="text" placeholder="Please enter your description" v-model="formData.address">-->
        <!--</div>-->
        <div class="contents-list" style="margin-top: 5rem">
            <input type="text" placeholder="Please enter your linkedin address" maxlength="80" v-model="formData.address">
        </div>
        <div class="contents-list" style="margin-top: 6rem;margin-bottom:5rem;">
            <input class="login-btn" type="button" id="login-btn" @click="login()" value="Save">
        </div>
        <loading :show="load"></loading>
        <toast v-model="tips">{{ret_msg}}</toast>
        <toast v-model="tipe" type="cancel">{{ret_msg}}</toast>
    </div>
</template>
<script>
    import axios from 'axios'
    import store from "../../store/store";
    import * as types from '@/pages/store/types'
    import { Group,Toast,Loading,Blur,XInput,PopupRadio,Flexbox, FlexboxItem ,Divider,Cell } from 'vux'
    export default {
        name: 'contents',
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
                load:false,
                tips:false,
                tipe:false,
                ret_msg:"",
                formData:{}
            }
        },
        methods: {
            login() {
                var url = `/login_user/login_act?username=${this.username}&password=${this.password}`
                this.load = true
                axios.get(url)
                    .then(this.loginRes)
            },
            loginRes(res) {
                this.load = false
                this.ret_msg = res.data.message
                if ((res.data.code == 0) && res.data.data.token.length > 0) {
                    store.commit(types.LOGIN, res.data.data.token)
                    this.tips = true
                    setTimeout(() => {
                        this.$router.push({path: '/ucenter'});
                    }, 2000)
                } else {
                    this.tipe = true
                }
            }
        },
        mounted() {
        }
    }
</script>
<style lang="stylus" scoped>
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
    .contents-list img
        width 35%
        display block
        margin auto
        border-radius 50%
</style>
