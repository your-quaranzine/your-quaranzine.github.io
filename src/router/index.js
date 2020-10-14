import Vue from 'vue'
import VueRouter from 'vue-router'
import Edition1 from '../views/Edition1.vue'
import Edition2 from '../views/Edition2.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/edition1',
    name: 'Edition 1',
    component: Edition1
  },
  {
    path: '/edition2',
    name: 'Edition 2',
    component: Edition2
  },
  {
    path: '/',
    name: 'Edition 2',
    component: Edition2
  }
]

const router = new VueRouter({
  routes
})

export default router
