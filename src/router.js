import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
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
      children: [
        {
          path: 'item1',
          component: () =>
            import('@/components/RouterView.vue'),
          redirect: '/menu1/item1/option11',
          children: [{
            path: 'option11',
            component: () =>
              import('@/views/EDM/EDM.vue'),
            name: 'option1-1'
          },
          {
            path: 'option12',
            component: () =>
              import('@/views/EDM/Day1.vue'),
            name: 'option1-2'
          },
          {
            path: 'option13',
            component: () =>
              import('@/views/EDM/Day3.vue'),
            name: 'option1-3'
          },
          {
            path: 'option14',
            component: () =>
              import('@/views/EDM/Retail.vue'),
            name: 'option1-4'
          },
          {
            path: 'option15',
            component: () =>
              import('@/views/EDM/Day7.vue'),
            name: 'option1-5'
          },
          {
            path: 'option16',
            component: () =>
              import('@/views/EDM/Day8.vue'),
            name: 'option1-6'
          },
          {
            path: 'option17',
            component: () =>
              import('@/views/EDM/Day11.vue'),
            name: 'option1-7'
          },
          {
            path: 'option18',
            component: () =>
              import('@/views/EDM/Day12.vue'),
            name: 'option1-8'
          },
          ],
        },
        {
          path: 'item2',
          component: () =>
            import('@/components/RouterView.vue'),
          // redirect: '/menu1/item1/option1',
          children: [
            {
              path: 'option21',
              component: () =>
                import('@/views/EDM/Day17.vue'),
              name: 'option2-1'
            },
            {
              path: 'option22',
              component: () =>
                import('@/views/EDM/Day25.vue'),
              name: 'option2-2'
            },
            {
              path: 'option23',
              component: () =>
                import('@/views/EDM/Day27.vue'),
              name: 'option2-3'
            },

          ],
        },
        {
          path: 'item3',
          component: () =>
            import('@/components/RouterView.vue'),
          // redirect: '/menu1/item1/option1',
          children: [
            {
              path: 'option31',
              component: () =>
                import('@/views/EDM/CN13.vue'),
              name: 'option3-1'
            },
            {
              path: 'option32',
              component: () =>
                import('@/views/EDM/Day18.vue'),
              name: 'option3-2'
            },
            {
              path: 'option33',
              component: () =>
                import('@/views/EDM/Day4.vue'),
              name: 'option3-3'
            },
            {
              path: 'option34',
              component: () => import('@/views/EDM/ShanDong.vue'),
              name: 'option3-4',
            }
          ],
        },
      ]
    },
    // ------------------------------------------------------------------------------------常用编辑
    {
      path: '/menu2',
      name: 'menu2',
      component: () =>
        import('@/views/EDM/Day15.vue'),

    },
    {
      path: '/menu3',
      name: 'menu3',
      redirect: '/menu3/item1',

      component: () =>
        import( /* webpackChunkName: "about" */ './views/About'),
      // import('@/views/Gan'),
      children: [
        {
          path: 'item1',
          component: () =>
            import('@/components/RouterView.vue'),
          redirect: '/menu3/item1/option11',
          children: [{
            path: 'option11',
            component: () =>
              import('@/views/EDM/Day2.vue'),
            name: 'option1-1'
          },
          {
            path: 'option12',
            component: () =>
              import('@/views/EDM/Day21.vue'),
            name: 'option1-2'
          },
          {
            path: 'option13',
            component: () =>
              import('@/views/EDM/SEvent.vue'),
            name: 'option1-3'
          },
          ],
        },
        {
          path: 'item2',
          component: () =>
            import('@/components/RouterView.vue'),
          // redirect: '/menu3/item2/option1',
          children: [{
            path: 'option21',
            component: () =>
              import('@/views/EDM/Day26.vue'),
            name: 'option2-1'
          },
          {
            path: 'option22',
            component: () =>
              import('@/views/EDM/CN-Cantonese.vue'),
            name: 'option2-2'
          },
          {
            path: 'option23',
            component: () =>
              import('@/views/EDM/Day23.vue'),
            name: 'option2-3'
          },
          {
            path: 'option24',
            component: () =>
              import('@/views/EDM/CN11.vue'),
            name: 'option2-4'
          },
          ],
        },

      ]
    },
  ]
})