import Vue from 'vue'
import VueRouter from 'vue-router'
import PagePostList from '@/views/PagePostList';
import PagePostShow from '@/views/PagePostShow';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'PagePostList',
    component: PagePostList,
  },
  {
    path: '/post/:id',
    name: 'PagePostShow',
    component: PagePostShow,
  },
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
