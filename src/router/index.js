import Vue from 'vue'
import Router from 'vue-router'
import store from '@/pages/store/store'
import * as types from '@/pages/store/types'
import Login from '@/pages/login/index'



Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'login',
            component: Login,
            meta: {
                keepAlive: false, // 需要被缓存
                title: '登陆'
            },
        },
        {
            path: '/order/:id',
            name: 'Order',
            component: Login,
            meta: {
                keepAlive: false, // 需要被缓存
                title: '确认订单'
            },
        }
    ]
})
// 页面刷新时，重新赋值token
if (window.localStorage.getItem('token')) {
  store.commit(types.LOGIN, window.localStorage.getItem('token'))
}
