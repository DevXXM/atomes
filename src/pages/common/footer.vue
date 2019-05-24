<template>
    <div>

      <tabbar :style="{position:'fixed'}">
        <tabbar-item v-for="(item,k) of footerList"  :link="item.link" v-bind:key="k" :selected="item.name == footer ? true : false">
          <img slot="icon" :src="item.src">
          <span slot="label">{{item.title}}</span>
        </tabbar-item>
      </tabbar>
    </div>

</template>
<script>
export default {
    name: 'footer-bar',
    props:{
        footer:String
    },
    data: function () {
        return {
            footerList:[
                {
                    link:'/',
                    src:'http://www.semilab.cc/img/icons/milk.png',
                    title:'首页',
                    name:'index'
                },
                {
                    link:'/label',
                    src:'http://www.semilab.cc/img/icons/egg.png',
                    title:'分类',
                    name:'category'
                },
                {
                    link:'/ucenter',
                    src:'http://www.semilab.cc/img/icons/rabbit.png',
                    title:'我的',
                    name:'ucenter'
                }
            ]
        }
    }
}
</script>
<style></style>
