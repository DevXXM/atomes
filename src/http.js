/**
 * Created by superman on 17/2/16.
 * http配置
 */

import axios from 'axios'
import store from '@/pages/store/store'
import * as types from '@/pages/store/types'
import router from './router'
import utils from '@/assets/tools/utils'


// axios 配置
axios.defaults.timeout = 5000
axios.defaults.baseURL = 'http://api.atomes.wordo.cn'
// axios.defaults.baseURL = 'http://wenxin.com'


// http request 拦截器
axios.interceptors.request.use(
    config => {
        if (store.state.token) {
            config.headers.Authorization = store.state.token
        }
        return config
    },
    err => {
        return Promise.reject(err)
    },
)

// http response 拦截器
axios.interceptors.response.use(
    response => {
        console.log(response.data);
        if (response.data && response.data.code == -1001) {
            window.location.href = "/login"
        }
        return response
    },
    error => {

        if (error.response) {

            switch (error.response.status) {
                case 401:
                    // 401 清除token信息并跳转到登录页面
                    store.commit(types.LOGOUT)

                    // 只有在当前路由不是登录页面才跳转
                    router.currentRoute.path !== 'login' &&
                    router.replace({
                        path: 'login',
                        query: {redirect: router.currentRoute.path},
                    })
            }
        }
        // console.log(JSON.stringify(error));//console : Error: Request failed with status code 402
        return Promise.reject(error.response.data)
    },
)

export default axios
router.beforeEach((to, from, next) => {
    /* 路由发生变化修改页面title */
    if (to.meta.title) {
        document.title = to.meta.title;
    }
    next();
})

if (utils.getUrlKey('token')) {
    store.commit(types.LOGIN, utils.getUrlKey('token'))
    window.location.href = "/"
    // this.$router.push({path: '/'})
}
if (localStorage.token) {
    store.commit(types.LOGIN, localStorage.token)
}

