<template>
    <div class=" container">
        <div class="contents-list" style="margin-top: 5rem;">
            <div class="upload-tips">
                <div class="upload-img" v-for="(file, index) in cover_files" :key="file.id">
                    <img  :src="file.blob" alt="">
                    <span v-if="file.error"><icon type="warn"></icon></span>
                    <icon v-else-if="file.success" type="success" style="margin:-.5rem auto;display: block;width: 3rem;"></icon>
                    <span v-else></span>
                </div>
                <div class="recommend-img-div">
                    <div v-if="cover_files[0]" class="recommend-img" ></div>
                    <div v-else class="recommend-empty"><img :src="userData.headimgurl" alt=""></div>
                </div>
                <span class="tips" v-show="cover_tips">{{cover_tips}}<icon type="warn"></icon></span>
                <div class="upload-btn">
                    <file-upload
                        class="btn btn-primary"
                        post-action="http://api.admin.tencent.me/api/qiniu/upload_img"
                        extensions="jpg,pdf,png,gif,jpeg"
                        accept="*"
                        :multiple="false"
                        :size="1024 * 1024 * 50"
                        v-model="cover_files"
                        @input-filter="coverFilter"
                        @input-file="coverFile"
                        ref="cover_upload">
                        <i class="fa fa-plus"></i>
                        Edit Avatar
                    </file-upload>
                </div>
                <div style="clear: both"></div>
            </div>
        </div>
        <div class="contents-list" style="margin-top: 5rem">
            <input type="text" placeholder="Please enter your name" maxlength="80" v-model="userData.name">
        </div>
        <div class="contents-list" style="margin-top: 5rem">
            <input type="text" placeholder="Please enter your description" maxlength="300" v-model="userData.description">
        </div>
        <div class="contents-list" style="margin-top: 5rem">
            <input type="text" placeholder="Please enter your linkedin address" maxlength="80" v-model="userData.linkedin">
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
    import FileUpload from 'vue-upload-component'
    import axios from 'axios'
    import store from "../../store/store";
    import * as types from '@/pages/store/types'
    import { Group,Toast,Loading,Blur,XInput,PopupRadio,Flexbox, FlexboxItem ,Divider,Cell,Icon } from 'vux'
    export default {
        name: 'contents',
        props:{
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
            Cell,
            FileUpload,
            Icon
        },
        data: function () {
            return {
                load:false,
                tips:false,
                tipe:false,
                ret_msg:"",
                formData:{},
                files: [],
                edit: false,
                cover_files: [],
                cover_progress_show:false,
                cover_progress_num:0,
                cover_tips:"",
                cover_file_path:"",
                cover_ret_status:false,
                userData:{}
            }
        },
        methods: {
            login() {
                if(typeof(this.cover_files[0]) != 'undefined'){
                    this.userData['headimgurl'] = this.cover_files[0].response.data.url
                }
                console.log(this.userData);
                var url = `/user/update_userinfo?name=${this.userData.name}&headimgurl=${this.userData.headimgurl}&description=${this.userData.description}&linkedin=${this.userData.linkedin}`
                this.load = true
                axios.get(url)
                    .then(this.loginRes)
            },
            loginRes(res) {
                this.load = false
                this.ret_msg = res.data.message
                if ((res.data.code == 0) ) {
                    this.tips = true
                    setTimeout(() => {
                        this.$router.push({path: '/ucenter'});
                    }, 2000)
                } else {
                    this.tipe = true
                }
            },
            coverFilter(newFile, oldFile, prevent) {
                if (newFile && !oldFile) {
                    if (!/\.(jpeg|jpg|png|bmp|gif)$/i.test(newFile.name)) {
                        return prevent()
                    }
                    // 创建 `blob` 字段 用于缩略图预览
                    newFile.blob = ''
                    let URL = window.URL || window.webkitURL
                    if (URL && URL.createObjectURL) {
                        newFile.blob = URL.createObjectURL(newFile.file)
                    }
                }
            },
            coverFile(newFile, oldFile) {
                if (newFile && !oldFile) {
                    // add
                    console.log('add', newFile)
                    this.cover_tips = ""
                    this.$refs.cover_upload.active = true
                }
                if (newFile && oldFile) {
                    // update
                    console.log('update', newFile)
                    this.cover_progress_show = true
                }
                if (!newFile && oldFile) {
                    // remove
                    console.log('remove', oldFile)
                }
                // 上传进度
                if (newFile.progress !== oldFile.progress) {
                    console.log('progress', newFile.progress, newFile)
                    this.cover_progress_num = parseFloat(newFile.progress)
                }
                // 上传成功
                if (newFile.success !== oldFile.success) {
                    console.log('success', newFile.success, newFile)
                    this.cover_progress_show = false
                    console.log('完成');
                    console.log(newFile.response);
                    this.cover_upload_succ(newFile)
                }
            },
            cover_upload_succ(file_obj){
                if (file_obj.response.code == 0){
                    // file_obj.success = false
                    // file_obj.error = res.message
                    this.cover_file_path = file_obj.response.data.url
                    console.log('url');
                    console.log(file_obj.response.data.url);
                    console.log(this.cover_files);
                }else{
                    console.log(file_obj);
                    console.log(this.cover_files);
                    this.cover_files = [];
                    this.cover_tips = file_obj.response.message
                }
            },
            loadUser() {
                var url = `/user/userinfo`
                axios.get(url)
                    .then(this.loadUserRes)
            },
            loadUserRes(res) {
                if (res.data.code == 0) {
                    this.userData = res.data.data
                    // this.cover_files.push(this.userData.headimgurl);
                    // console.log(this.cover_files);
                    // this.cover_files[0] = this.userData.headimgurl
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
    .upload-btn
        margin 2rem auto
        width 30%
        text-align center
        /*background #47525e*/
        .btn-primary
            background #47525e
            border 0
            width 100%
</style>
