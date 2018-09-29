
export default [
  {
    title: 'Menu1',
    icon_type: 'ios-navigate',
    path: '/menu1',
    children: [
      {
        title: 'Item1',
        icon_type: 'ios-navigate',
        name: 'item1',
        children: [
          { 
            name: 'option1-1',
            title: '标题一一',
            url: '/menu1/item1/option1'
          },
          { 
            name: 'option1-2',
            title: '标题一二',
            url: '/menu1/item1/option2'
          },
          { 
            name: 'option1-3',
            title: '标题一三',
            url: '/menu1/item1/option3'
          },
        ],
      },
      {
        title: 'Item2',
        name: 'item2',
        icon_type: 'ios-basket',
        children: [
          { 
            name: 'option2-1',
            title: '标题二一',
            url: '/menu1/item2/option1'
          },
        ],
      },
      {
        title: 'Item3',
        name: 'item3',
        icon_type: 'ios-bicycle',
        children: [
          { 
            name: 'option3-1',
            title: '标题三一',
            url: '/menu1/item3/option1'
          },
          { 
            name: 'option3-2',
            title: '标题三二',
            url: '/menu1/item3/option2'
          },
        ],
      },
    ]
  },
  {
    title: 'Menu2',
    path: '/menu2',
    icon_type: 'ios-basket',
    children: [
      {
        title: 'Item2-1',
        icon_type: 'ios-navigate',
        children: [
          { 
            name: 'option1',
            title: '标题一',
          },
          { 
            name: 'option2',
            title: '标题er',
          },
        ],
      },
      {
        title: 'Item2-2',
        icon_type: 'ios-basket',
        children: [
          { 
            name: 'option1',
            title: '标题一',
          },
          { 
            name: 'option2',
            title: '标题一',
          },
        ],
      },
      {
        title: 'Item2-3',
        icon_type: 'ios-bicycle',
        children: [
          { 
            name: 'option1',
            title: '标题一',
          },
          { 
            name: 'option2',
            title: '标题一',
          },
          { 
            name: 'option2',
            title: '标题一',
          },
        ],
      },
    ]
  },
  {
    title: 'Menu3',
    path: '/menu3',
    icon_type: 'ios-bicycle',
    children: [
      {
        title: 'Item3-1',
        icon_type: 'ios-navigate',
        name: 'Item1',
        children: [
          { 
            name: 'option1-1',
            title: '标题一',
            url: '/menu3/item1/option1'
          },
          { 
            name: 'option1-2',
            title: '标题二',
            url: '/menu3/item1/option2'
          },
          { 
            name: 'option1-3',
            title: '标题三',
            url: '/menu3/item1/option3'
          },
        ],
      },
      {
        title: 'Item3-2',
        name: 'Item2',
        icon_type: 'ios-basket',
        children: [
          { 
            name: 'option1',
            title: '标题一',
          },
          { 
            name: 'option2',
            title: '标题一',
          },
          { 
            name: 'option2',
            title: '标题一',
          },
        ],
      },
    ]
  },
]