import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login/login.vue'
import Chatroom from '@/components/chatroom/chatroom.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/login'
    }, {
      path: '/login',
      name: 'login',
      component: Login
    }, {
      path: '/chatroom',
      name: 'chatroom',
      component: Chatroom
    }
  ]
})
