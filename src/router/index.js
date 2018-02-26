import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
// import Login from '@/components/login'
import Home from '@/components/home'
// import Readme from '@/components/content/Readme'
import baseform from '@/components/content/BaseForm'


import hygl from '@/components/content/hygl'


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
              path: '/baseform',
              // component: resolve => require(['../components/content/BaseForm'], resolve)
              component: baseform,
          },
          // {
          //     path: '/basecharts',
          //     component: resolve => require(['../components/content/baseCharts'], resolve)
          // },
          // {
          //     path: '/basetable',
          //     component: resolve => require(['../components/content/baseTable'], resolve)
          // },
          {
              path: '/draglist',
              component: resolve => require(['../components/content/DragList'], resolve)
          },
          // {
          //     path: '/markdown',
          //     component: resolve => require(['../components/content/Markdown'], resolve)
          // }
      ]
    }
  ]
})
