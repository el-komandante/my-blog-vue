import Vue from 'vue'
import Router from 'vue-router'
import FrontPage from 'components/FrontPage'
import Post from 'components/Post'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'FrontPage',
      component: FrontPage
    },
    {
      path: '/:name',
      name: 'Post',
      props: true,
      component: Post
    }
  ]
})
