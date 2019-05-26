import Vue from 'vue'
import Router from 'vue-router'
import store from '@/pages/store/store'
import * as types from '@/pages/store/types'
import Login from '@/pages/login/index'
import UCenter from '@/pages/ucenter/index'


Vue.use(Router)

export default new Router({
    mode: 'hash',
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
            path: '/login',
            name: 'login',
            component: Login,
            meta: {
                keepAlive: false, // 需要被缓存
                title: '登陆'
            },
        },
        {
            path: '/ucenter',
            name: 'ucenter',
            component: UCenter,
            meta: {
                keepAlive: false, // 需要被缓存
                title: '个人中心'
            },
        }
    ]
})
// 页面刷新时，重新赋值token
if (window.localStorage.getItem('token')) {
  store.commit(types.LOGIN, window.localStorage.getItem('token'))
}
