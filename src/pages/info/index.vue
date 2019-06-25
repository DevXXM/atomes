<template>
    <div>
        <swiper-content :banner_list="eventObj.photo"></swiper-content>
        <info-content :eventObj="eventObj"></info-content>
        <div style="height:6rem;">

        </div>
        <div class="col-xs-12">
            <input class="login-btn google-share" type="button" id="share-btn" value="ENLIST">
        </div>
    </div>
</template>
<script>
import axios from 'axios'
import store from "../store/store";
import InfoContent from './components/content'
import SwiperContent from './components/Swiper'

export default {
    name: 'bind',
    components: {
        InfoContent,
        SwiperContent
    },
    data: function () {
        return {
            eventObj:{}
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
        border-radius .2rem
</style>
