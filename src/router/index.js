import Vue from 'vue'
import Router from 'vue-router'
import store from '@/pages/store/store'
import * as types from '@/pages/store/types'
import Login from '@/pages/login/index'
import Reg from '@/pages/reg/index'
import UCenter from '@/pages/ucenter/index'
import Profile from '@/pages/profile/index'
import Index from '@/pages/index/index'
import Info from '@/pages/info/index'
import MyEvent from '@/pages/my_event/index'

Vue.use(Router)

export default new Router({
    mode: 'hash',
    routes: [
        {
            path: '/',
            name: 'login',
            component: Index,
            meta: {
                keepAlive: false, // 需要被缓存
                title: 'events'
            },
        },
        {
            path: '/login',
            name: 'login',
            component: Login,
            meta: {
                keepAlive: false, // 需要被缓存
                title: 'login'
            },
        },
        {
            path: '/info/:id',
            name: 'info',
            component: Info,
            meta: {
                keepAlive: false, // 需要被缓存
                title: 'info'
            },
        },
        {
            path: '/reg',
            name: 'reg',
            component: Reg,
            meta: {
                keepAlive: false, // 需要被缓存
                title: 'reg'
            },
        },
        {
            path: '/ucenter',
            name: 'ucenter',
            component: UCenter,
            meta: {
                keepAlive: false, // 需要被缓存
                title: 'user center'
            },
        },
        {
            path: '/profile',
            name: 'profile',
            component: Profile,
            meta: {
                keepAlive: true, // 需要被缓存
                title: '修改资料'
            }
        },
        {
            path: '/index',
            name: 'index',
            component: Index,
            meta: {
                keepAlive: true, // 需要被缓存
                title: 'events'
            }
        },
        {
            path: '/my_event',
            name: 'my_event',
            component: MyEvent,
            meta: {
                keepAlive: false, // 需要被缓存
                title: 'events'
            }
        }
    ]
})
// 页面刷新时，重新赋值token
if (window.localStorage.getItem('token')) {
  store.commit(types.LOGIN, window.localStorage.getItem('token'))
}
