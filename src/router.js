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
          redirect: '/menu1/item1/option1',
          children: [{
            path: 'option1',
            component: () =>
              import('@/views/EDM/EDM.vue'),
            name: 'option1-1'
          },
          {
            path: 'option2',
            component: () =>
              import('@/views/EDM/Day1.vue'),
            name: 'option1-2'
          },
          {
            path: 'option3',
            component: () =>
              import('@/views/EDM/Day3.vue'),
            name: 'option1-3'
          },
          {
            path: 'option4',
            component: () =>
              import('@/views/EDM/Day5.vue'),
            name: 'option1-4'
          },
          {
            path: 'option5',
            component: () =>
              import('@/views/EDM/Day7.vue'),
            name: 'option1-5'
          },
          {
            path: 'option6',
            component: () =>
              import('@/views/EDM/Day8.vue'),
            name: 'option1-6'
          },
          {
            path: 'option7',
            component: () =>
              import('@/views/EDM/Day11.vue'),
            name: 'option1-7'
          },
          {
            path: 'option8',
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
              path: 'option1',
              component: () =>
                import('@/views/EDM/Day17.vue'),
              name: 'option2-1'
            },
            {
              path: 'option2',
              component: () =>
                import('@/views/EDM/Day25.vue'),
              name: 'option2-2'
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
              path: 'option1',
              component: () =>
                import('@/views/EDM/Day14.vue'),
              name: 'option3-1'
            },
            {
              path: 'option2',
              component: () =>
                import('@/views/EDM/Day18.vue'),
              name: 'option3-2'
            },
            {
              path: 'option3',
              component: () =>
                import('@/views/EDM/Day4.vue'),
              name: 'option3-3'
            },

          ],
        },
      ]
    },
    // ------------------------------------------------------------------------------------常用编辑
    {
      path: '/menu2',
      name: 'menu2',
      component: () =>
        import('@/views/EDM/Day20.vue'),

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
          redirect: '/menu3/item1/option1',
          children: [{
            path: 'option1',
            component: () =>
              import('@/views/EDM/Day2.vue'),
            name: 'option1-1'
          },
          {
            path: 'option2',
            component: () =>
              import('@/views/EDM/Day21.vue'),
            name: 'option1-2'
          },
          {
            path: 'option3',
            component: () =>
              import('@/views/EDM/Day5.vue'),
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
            path: 'option1',
            component: () =>
              import('@/views/EDM/Day26.vue'),
            name: 'option2-1'
          },
          {
            path: 'option2',
            component: () =>
              import('@/views/EDM/Day22.vue'),
            name: 'option2-2'
          },
          {
            path: 'option3',
            component: () =>
              import('@/views/EDM/Day23.vue'),
            name: 'option2-3'
          },
          ],
        },

      ]
    },
  ]
})