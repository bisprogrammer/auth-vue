import Vue from 'vue'
import VueRouter from 'vue-router'
import Cookie from '../services/Cookie'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue'),
    beforeEnter: (to, from, next) => {
      if (Cookie.getCookie("token")) {
        next();
      }
      else {
        window.location.href = "/login";
      }
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
