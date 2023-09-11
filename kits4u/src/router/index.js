import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    // beforeEnter() {
    //   if(!cookies.get('GrantedUserAccess')) {
    //   router.push({name: "login"})
    //   }
    // }
  },
  {
    path: '/about',
    name: 'about',
    component: () => import( '../views/AboutView.vue')
  },
  {
    path: '/products',
    name: 'products',
    component: () => import( '../views/ProductsView.vue'),
    // beforeEnter() {
    //   if(!cookies.get('GrantedUserAccess')) {
    //   router.push({name: "login"})
    //   }
    // }
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import( '../views/AdminView.vue'),
    // beforeEnter() {
    //   if(!cookies.get('GrantedUserAccess')) {
    //   router.push({name: "login"})
    //   }
    // }
  },
  {
    path: '/checkout',
    name: 'checkout',
    component: () => import( '../views/CheckoutView.vue'),
    // beforeEnter() {
    //   if(!cookies.get('GrantedUserAccess')) {
    //   router.push({name: "login"})
    //   }
    // }
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import( '../views/ContactView.vue'),
    // beforeEnter() {
    //   if(!cookies.get('GrantedUserAccess')) {
    //   router.push({name: "login"})
    //   }
    // }
  },
  {
    path: '/login',
    name: 'contact',
    component: () => import( '../views/LoginView.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import( '../views/RegisterView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
