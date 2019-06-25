<template>
    <div class="wrapper">
        <swiper auto loop
                :aspect-ratio="450/800"
                class="swiper">
            <swiper-item v-for="(slide, index) in banner_list" :key="index" ref=""><img @click="handleClickSwiper(slide.url)" class="swiper-img" :src="slide.src" alt=""></swiper-item>
            <!--<div class="swiper-pagination" slot="pagination"></div>-->
        </swiper>
        <!--<div v-for="(slide, index) in banner_list" :key="index" >222-->
            <!--{{slide}}-->
        <!--</div>-->
    </div>

</template>
<script>

    import { Swiper,SwiperItem } from 'vux'
export default {
  name: 'IndexSwiper',
  components:{
      Swiper,
      SwiperItem
  },
  props:{
    banner_list:Array
  },
  data: function(){
      return {

      }
  },
  methods:{
      handleClickSwiper(url){
          console.log(url);
          // window.location.href = url;
          this.$router.push({path:url});
      }
  },
  watch:{
      banner_list(){
          console.log('改变了');
          // var HeaderBgColor = this.banner_list[0].bg_color;
          // bus.$emit('setHeaderColor',HeaderBgColor)
      }
  }
}
</script>
<style lang="stylus" scoped>
    .vux-indicator >>> .active
        background-color:#fff
        bottom:3rem
    .swiper-img
        width:100%
    .wrapper
        width :100
        height:0
        padding-bottom :56.25%

</style>
