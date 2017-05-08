import Vue from 'vue'
import Router from 'vue-router'

import Home from '../pages/Home.vue'
import Sport from '../pages/Sport.vue'
import Travel from '../pages/Travel.vue'
import Detail from '../pages/Detail.vue'
import User from '../pages/User.vue'
import Login from '../pages/Login.vue'
import Regist from '../pages/Regist.vue'
import UserInfo from '../pages/UserInfo.vue'
import Set from '../pages/Set.vue'
import Post from '../pages/Post.vue'
import UserMsg from '../pages/UserMsg.vue'
import Navbar from '../pages/Navbar.vue'
import NotFound from '../pages/NotFound.vue'

Vue.use(Router);

export default new Router({
  linkActiveClass: 'active',
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/sport',
      name: 'sport',
      component: Sport
    },
    {
      path: '/travel',
      name: 'travel',
      component: Travel
    },
    {
      path: '/sport/:id',
      name: 'detail',
      component: Detail
    },
    {
      path: '/travel/:id',
      name: 'detail',
      component: Detail
    },
    {
      path: '/user',
      name: 'user',
      component: User
    },
    {
      path: '/user/login',
      component: Login
    },
    {
      path: '/user/regist',
      component: Regist
    },
    {
      path: '/user/info',
      component: UserInfo
    },
    {
      path: '/user/set',
      component: Set
    },
    {
      path: '/user/post',
      component: Post
    },
    {
      path: '/user/msg',
      component: UserMsg
    },
    {
      path: '/user/navbar',
      component: Navbar
    },
    {
      path: '*',
      name: 'notfound',
      component: NotFound
    }
  ]
})
