// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import App from './App'
import store from './pages/store/store'
import axios from './http'
import router from './router'
import 'styles/iconfont.css'
import utils from '@/assets/tools/utils'


// 将axios挂载到prototype上，在组件中可以直接使用this.axios访问
Vue.prototype.axios = axios;
// router.beforeEach((to, from, next) => {
//     const toDepth = to.path.split('/').length
//     const fromDepth = from.path.split('/').length
//     if (toDepth < fromDepth) {
//         console.log('后退。。。')
//         from.meta.keepAlive = false
//         to.meta.keepAlive = true
//     }
//     next()
// })

/*底部导航工具栏*/
import { Tabbar, TabbarItem } from 'vux'
Vue.component('tabbar', Tabbar)
Vue.component('tabbar-item', TabbarItem)

Vue.use(VueRouter)


FastClick.attach(document.body)

Vue.config.productionTip = false







/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app-box')

