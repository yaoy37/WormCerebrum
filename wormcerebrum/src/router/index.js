import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '../components/HelloWorld'
import welcome from '../components/welcome'
import handel from '../components/header'
import login from '../components/login'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/welcome',
      name: 'welcome',
      component: welcome
    },
    {
      path: '/handel',
      name: 'handel',
      component: handel
    },
    {
      path: '/login',
      name: 'login',
      component: login
    }
  ]
})
