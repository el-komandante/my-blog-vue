import Vue from 'vue'
import Router from 'vue-router'
import Hello from 'components/Hello'
import TestPost from 'components/TestPost'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/test-post',
      name: 'test-post',
      component: TestPost
    }
  ]
})
