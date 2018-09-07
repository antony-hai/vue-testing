import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/menu1',
      name: 'menu1',
      redirect: '/menu1/item1',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import( /* webpackChunkName: "about" */ './views/About'),
      children: [{
          path: 'item1',
          component: () =>
            import('@/components/RouterView.vue'),
          redirect: '/menu1/item1/option1',
          children: [{
              path: 'option1',
              component: () =>
                import('@/views/Gan/Gan1.vue'),
              name: 'option1-1'
            },
            {
              path: 'option2',
              component: () =>
                import('@/views/Gan/Gan2.vue'),
              name: 'option1-2'
            },
            {
              path: 'option3',
              component: () =>
                import('@/views/Gan/Gan3.vue'),
              name: 'option1-3'
            },
          ],
        },

      ]
    },

    {
      path: '/menu2',
      name: 'menu2',
      component: () =>
        import('@/views/EDM/EDM.vue')
    },
    {
      path: '/menu3',
      name: 'menu3',
      component: () =>
        import('@/views/Gan'),
      children: [{
          path: '',
          component: () =>
            import('@/views/Gan/Gan1.vue'),
          name: 'menu3_item1'
        },
        {
          path: 'option1',
          component: () =>
            import('@/views/Gan/Gan1.vue'),
          name: 'menu3_item1'
        },
        {
          path: 'option2',
          component: () =>
            import('@/views/Gan/Gan2.vue'),
          name: 'menu3_item1'
        },
      ]
    },
  ]
})