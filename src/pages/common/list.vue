<template>
    <div style="margin-bottom:5rem">
        <!--<div class="recommend-title">推荐书籍</div>-->
        <div>
                <a  tag="li" class="recommend-list" v-for="(val,key) of book_list" :key="key" :to="'/book/'+val.id" @click="to_url(val.id)">
                    <div class="recommend-img-div">
                        <img v-if="val.cover" class="recommend-img" :src="val.cover" alt="">
                        <div v-else class="recommend-empty"><div class="recommend-empty-title">kindle<br>书籍</div></div>
                    </div>
                    <div class="recommend-info">
                        <p class="recommend-info-title">{{val.name}}</p>
                        <p v-if="val.introduction" class="recommend-info-desc">{{val.introduction}}</p>
                        <!--<p v-else class="recommend-info-desc">{{val.name}}</p>-->
                        <p v-else class="recommend-info-desc">kindle天天看</p>
                        <p class="recommend-info-footer">
                            <span class="info-footer-span">类型:{{val.type}}</span>
                            <span v-if="val.file_size >= 1048576" class="info-footer-span">
                                大小:{{Math.floor(val.file_size/1024/1024 * 100) / 100}}mb
                            </span>
                            <span v-else class="info-footer-span">
                                大小:{{parseInt(val.file_size/1024)}}kb
                            </span>
                        </p>
                    </div>
                </a>

                <load-more tip="正在加载更多" v-show="loadbook"></load-more>
                <divider><span style="font-size:.6rem" v-show="loadbottom">已经到底啦</span></divider>
        </div>
        <div v-show="nodata">
            <div class="nodata">
              <p style="text-align: center">很抱歉搜索不到这本书</p>
              <p style="text-align: center">
                  您可以前往<router-link style="color:blue;font-weight: bold" to="/add_want"> 求书页面 </router-link>提交求书申请
              </p>
            </div>
        </div>
    </div>
</template>
<script>
  import bus from '@/assets/tools/eventBus'
  import Bscroll from 'better-scroll'
  import { LoadMore,Divider } from 'vux'
  import axios from 'axios'
  import store from "../store/store";

  export default {
    props:{
        book_list:Array,
        url:String
    },
    components:{
        LoadMore,
        Divider
    },
    name: 'IndexRecommend',
    data: function () {
        return{
            loadbook:false,
            loadbottom:false,
            page:2,
            nowPage:1,
            nodata:false
        }
    },
    methods:{
        //滚动条到底部的距离
        getScrollBottomHeight:function () {
            return this.getPageHeight() - this.getScrollTop() - this.getWindowHeight();
        },
        //页面高度
        getPageHeight:function () {
            return document.querySelector("html").scrollHeight
        },
        //滚动条顶 高度
        getScrollTop:function () {
            var scrollTop = 0, bodyScrollTop = 0, documentScrollTop = 0;
            if (document.body) {
              bodyScrollTop = document.body.scrollTop;
            }
            if (document.documentElement) {
              documentScrollTop = document.documentElement.scrollTop;
            }
            scrollTop = (bodyScrollTop - documentScrollTop > 0) ? bodyScrollTop : documentScrollTop;
            return scrollTop;
        },
        getWindowHeight:function () {
            var windowHeight = 0;
            if (document.compatMode == "CSS1Compat") {
              windowHeight = document.documentElement.clientHeight;
            } else {
              windowHeight = document.body.clientHeight;
            }
            return windowHeight;
        },
        getRecommendSucc(res){
            this.loadbook = false
            if (res.data.code == 0){
                // this.page ++;
                this.nowPage ++;
                if (res.data.data.last_page <= res.data.data.current_page){
                    console.log('daodile')
                    this.loadbottom = true
                }else{
                    this.page++;
                }
                for(let i in res.data.data.data){
                    this.book_list.push(res.data.data.data[i])
                }

            }
        },
        handleGetMore(){
            axios.get(this.url + 'page=' + this.page)
                .then(this.getRecommendSucc)
        },
        handleScroll: function () {
            if (this.getScrollBottomHeight() <= 0 && this.nowPage < this.page && this.loadbook == false) {
                this.loadbook = true
                this.handleGetMore()
            }
        },
        to_url(id){
            store.state.list_scroll = event.currentTarget.offsetTop;
            this.$router.push({path: '/book/' + id})
        }
    },
    mounted(){
        window.addEventListener('scroll', this.handleScroll)
    },
    activated: function () {
        this.$el.scrollTop = store.state.list_scroll
        store.state.list_scroll = 0
    },
    watch:{
        book_list(val){
            if (val.length>0){
                this.nodata=false
            }else{
                this.nodata=true
            }
        }
    }
}




</script>
<style lang="stylus" scoped>
    .recommend-title
        background #efefef
        height 2rem
        line-height 2rem
        text-indent .6rem
        font-size .6rem
        color #666
    .recommend-list
        min-height 5rem
        overflow hidden
        display flex
        /*margin-bottom .5rem*/
        /*margin-top .5rem*/
        /*padding-bottom 1rem*/
        border-bottom 1px solid #eee
        .recommend-img-div
            width 4rem
            height 5rem
            margin .5rem
            display block
            .recommend-img
                /*display block*/
                width 3.5rem
                height 100%
        .recommend-empty
            width 100%
            height 100%
            background rgba(41,48,58,1)
            color #fff
            font-weight 700
            /*box-shadow .15rem .15rem 0rem #aaa*/
            font-size .1rem
            /*writing-mode vertical-lr*/
            text-align center

            /*line-height 3rem*/
            .recommend-empty-title
                padding-top 1rem
                /*width .1rem*/
                /*word-wrap: break-word;*/
        .recommend-info
            margin .5rem
            width 100%
        .recommend-info-title
            font-size 1rem
        .recommend-info-desc
            font-size .7rem
            margin-top .5rem
            color #666
            word-break:break-all;
            display:-webkit-box;
            text-overflow: ellipsis;
            line-height 1rem
            -webkit-line-clamp:3;
            -webkit-box-orient:vertical;
            overflow:hidden;
    .recommend-info-footer
        font-size .6rem
        color #52a341
        display block
        /*position absolute*/
        width 100%
        height 1rem
        bottom 0
        /*padding-bottom .5rem*/
        margin-top:.2rem
        .info-footer-span
            float right
            margin-right .5rem
</style>
