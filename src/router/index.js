import Vue from 'vue'
import VueRouter from 'vue-router'
import PagePostList from '@/views/PagePostList';
import PagePostShow from '@/views/PagePostShow';
import PageAbout from '@/views/PageAbout';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'PagePostList',
    component: PagePostList,
  },
  {
    path: '/posts/:id',
    name: 'PagePostShow',
    component: PagePostShow,
  },
  {
    name: "About",
    path: "/about",
    component: PageAbout,
  },
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
