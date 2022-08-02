import Vue from 'vue'
import VueRouter from 'vue-router'
import DefaultLayout from "../modules/DefaultLayout";

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: DefaultLayout,
    }
  ]
})

export default router;