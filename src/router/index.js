import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import hygl from '@/components/content/hygl'
import gqcs from '@/components/content/gqcs'
import xsb from '@/components/content/xsb'
import wgp from '@/components/content/wgp'
import hyfl from '@/components/content/hyfl'
import gzsj from '@/components/content/gzsj'
import cssz from '@/components/content/cssz'
import sjdr from '@/components/content/sjdr'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '登录',
      component: resolve => require(['../components/login'], resolve)
    },
    {
      path: '/home',
      name: 'home',
      // component: resolve => require(['../components/home'], resolve),
      component: Home,
      children:[
          {
              path: '/',
              component: hygl
          },
          {
              path: '/hygl',
              component: hygl
          },
          {
              path: '/gqcs',
              component: gqcs
          },
          {
              path: '/xsb',
              component: xsb
          },
          {
              path: '/wgp',
              component: wgp
          },
          {
              path: '/hyfl',
              component: hyfl
          },
          {
              path: '/gzsj',
              component: gzsj
          },
          {
              path: '/cssz',
              component: cssz
          },
          {
              path: '/sjdr',
              component: sjdr
          },
      ]
    }
  ]
})
