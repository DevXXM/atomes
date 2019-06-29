<template>
    <div>
        <swiper-content :banner_list="eventObj.photo"></swiper-content>
        <info-content :eventObj="eventObj"></info-content>
        <div style="height:6rem;">

        </div>
        <div class="col-xs-12">
            <input v-if="!eventObj.join" class="login-btn google-share" type="button" @click="join(1)" value="JOIN">
            <input v-else class="login-btn google-share joined" type="button" @click="join(-1)" value="QUIT">
        </div>
        <loading :show="load"></loading>
        <toast v-model="tips">{{ret_msg}}</toast>
        <toast v-model="tipe" type="cancel">{{ret_msg}}</toast>
    </div>
</template>
<script>
import axios from 'axios'
import store from "../store/store";
import InfoContent from './components/content'
import SwiperContent from './components/Swiper'
import { Group,Toast,Loading,Blur,XInput,PopupRadio,Flexbox, FlexboxItem ,Divider,Cell } from 'vux'
export default {
    name: 'bind',
    components: {
        InfoContent,
        SwiperContent,
        Loading,
        Toast
    },
    data: function () {
        return {
            eventObj:{},
            load:false,
            tips:false,
            tipe:false,
            ret_msg:""
        }
    },
    methods:{
        getArticleInfo(){
            axios.get('/event/info?id=' + this.$route.params.id)
                .then(this.getArticleSucc)
        },
        getArticleSucc(res){
            res = res.data
            console.log(res);
            if (res.code == 0){
                //成功的话
                // res.data.introduction = res.data.introduction.replace(/<br\/>/g, "\n");
                this.eventObj = res.data
                console.log(this.eventObj)
                console.log(this.eventObj.photo)

            }
        },
        join(add){
            this.load = true
            var url = '/event/join?event_id=' + this.$route.params.id + "&status=" + add
            axios.get(url)
                .then(this.joinSucc)
        },
        joinSucc(res){
            res = res.data
            console.log(res);
            if (res.code == 0){
                //成功的话
                // res.data.introduction = res.data.introduction.replace(/<br\/>/g, "\n");
                this.load = false
                this.ret_msg = res.message
                if ((res.code == 0)) {
                    this.eventObj.join = !this.eventObj.join
                    this.tips = true
                }else{
                    this.tipe = true
                }
            }
        }
    },
    mounted() {
        this.getArticleInfo()
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

    .login-btn
        border 0
        background #47525e
        padding-left .25rem
        padding-top 0
        width 100%
        height 4rem
        line-height 4rem
        color #fff
        border-radius .5rem
    .joined
        background #cd1316

</style>
