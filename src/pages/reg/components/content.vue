<template>
    <div class=" container">
        <div class="contents-list" style="margin-top: 5rem">
            <input type="text" placeholder="Enter your Username or Email" v-model="userData.username">
        </div>
        <div class="contents-list">
            <input type="password" placeholder="Enter your Password" v-model="userData.password">
        </div>
        <div class="contents-list">
            <input type="text" placeholder="Enter your Name" v-model="userData.name">
        </div>
        <div class="contents-list">
            <input type="text" placeholder="Enter your Description" v-model="userData.description">
        </div>
        <div class="contents-list">
            <input type="text" placeholder="Enter your Linkedin" v-model="userData.linkedin">
        </div>
        <div class="contents-list" style="margin-top: 6rem">
            <input class="login-btn" type="button" id="login-btn" @click="login()" value="SIGN UP">
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
                username: "",
                password: "",
                load:false,
                tips:false,
                tipe:false,
                ret_msg:"",
                userData:{}
            }
        },
        methods: {
            login() {
                var url = `/login_user/reg_act?username=${this.userData.username}&password=${this.userData.password}&name=${this.userData.name}&description=${this.userData.description}&linkedin=${this.userData.linkedin}`
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
                        this.$router.push({path: '/index'});
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
</style>
