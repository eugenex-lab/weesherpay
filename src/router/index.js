import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'


const routes = [
  {
    path: '/',
    redirect:'/weesh'
  },
  {
    path: '/weesh',
    name: 'home',
    component: HomeView
  },
  {
    path: '/weesh/:id/payment',
    name: 'payment-form',
    component:() => import('../views/PaymentForm.vue')
  },
  {

    path: '/weesh/:id',
    name: 'DetailView',
    props: true,
    component: () => import('../views/DetailView.vue')

  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
