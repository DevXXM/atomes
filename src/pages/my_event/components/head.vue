<template>
    <div class="contents">
        <div class="col-xs-4"></div>
            <img :src="userData.headimgurl" alt="" >
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
        updateProfile(){
            this.$router.push({ path:'/profile'})
        }
    },
    mounted() {
    }
}
</script>
<style lang="stylus" scoped>
    .contents
        height 16rem
        width 100%
        background #C0CCDA

    .headimg
        border-radius 50%
        margin 11rem auto
    .headimg img
        width 100%
        border-radius 50%

</style>
