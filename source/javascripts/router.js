import Vue from 'vue'
import Router from 'vue-router'
import Hello from 'vuesrc/components/hello'
import About from 'vuesrc/components/about'
import Computed from 'vuesrc/components/computed'
import Slot from 'vuesrc/components/slotContainer'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/computed',
      name: 'Computed',
      component: Computed
    },
    {
      path: '/slot',
      name: 'slot-component',
      component: Slot
    }            
  ]
})