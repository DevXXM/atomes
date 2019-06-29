<template>
    <div class="col-xs-12" ref="wrapper">
        <div class="content">
                <div class="project-list" v-for="(val,key) of list" :key="key" :to="'/info/'+val.id" @click="to_url(val.id)" >
                    <div class="project-item">
                        <div class="project-cover">
                            <img :src="val.cover" alt="" >
                        </div>
                        <div class="project-title">
                            {{val.name}}
                        </div>
                        <div class="project-desc">
                            {{val.description}}SubtitleSubtitleSubtitleSubtitleSubtitleSubtitleSubtitleSubtitleSubtitleSubtitleSubtitleSubtitleSubtitleSubtitleSubtitleSubtitleSubtitleSubtitleSubtitleSubtitleSubtitleSubtitle
                        </div>
                        <div class="project-desc" style="padding-top: 1.5rem;border-bottom:1px solid #eff2f7;"></div>
                    </div>
                </div>
            <div style="clear:both;"></div>
            <load-more tip="正在加载更多" v-show="loadbook"></load-more>
            <divider><span style="font-size:.6rem" v-show="loadbottom">已经到底啦</span></divider>
        </div>
    </div>
</template>
<script>

    import axios from 'axios'
import { LoadMore,Divider } from 'vux'
export default {
    name: 'contents',
    props:['userData','list'],
    components: {
        Divider,
        LoadMore
    },
    data: function () {
        return {
            loadbook:false,
            loadbottom:false,
            page:2,
            nowPage:1
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
        getListSucc(res){
            this.loadbook = false
            console.log('1111');
            console.log(res);
            if (res.data.code == 0){
                console.log(this.list);
                // this.page ++;
                this.nowPage ++;
                if (res.data.data.last_page == res.data.data.current_page){
                    console.log('daodile')
                    this.loadbottom = true
                }else{
                    this.page++;
                }
                // res = res.data
                //成功的话
                for(let i in res.data.data.data){
                    console.log(i);
                    console.log(res.data.data.data[i]);
                    this.list.push(res.data.data.data[i])
                }

            }
        },
        loadMoreList(){
            this.loadbook = true
            axios.get('/event/list?page=' + this.page)
                .then(this.getListSucc)

        },
        to_url(id){
            console.log(id);
            // store.state.list_scroll = event.currentTarget.offsetTop;
            // console.log(store.state.list_scroll);
            // console.log(id);
            this.$router.push({path: '/info/' + id})
        },
        handleScroll: function () {
            if (this.getScrollBottomHeight() <= 0 && this.nowPage < this.page && this.loadbook == false) {
                this.loadbook = true
                this.loadMoreList()
            }
        },
        toUrl(){
            console.log(1);
        }
    },
    mounted(){
        window.addEventListener('scroll', this.handleScroll)
    }
}
</script>
<style lang="stylus" scoped>

    .project-list
        width 100%
        padding-top 1.5rem
    .project-item
        height 6rem
    .project-cover
        width 4rem
        height 4rem
        position absolute
    .project-cover img
        width 100%
        height 100%
        margin 1rem
        margin-top 1.5rem
        border-radius 50%

    .project-title
        margin-left 6rem
        padding-top 1rem
        color #3b4653
        font-weight:600;
    .project-desc
        margin-left 6rem
        color #929eb0
        font-size .8rem
        word-break: break-all
        -webkit-line-clamp: 2;  // 控制多行的行数
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;


</style>
