<template>
    <div>
        <info-content :eventObj="eventObj"></info-content>
    </div>
</template>
<script>
import axios from 'axios'
import store from "../store/store";
import InfoContent from './components/content'
export default {
    name: 'bind',
    components: {
        InfoContent
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


</style>
