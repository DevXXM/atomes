<template>
    <div>
        <div class="headers">
            Edit Profile
        </div>
        <profile-content :userData="userData"></profile-content>
    </div>
</template>
<script>
import axios from 'axios'
import store from "../store/store";
import ProfileContent from './components/content'
export default {
    name: 'information',
    components: {
        ProfileContent
    },
    data: function () {
        return {
            userData:{}
        }
    },
    methods:{

    },
    mounted() {

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
