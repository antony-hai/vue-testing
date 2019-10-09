
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
            name: 'option11',
            title: '标题一1',
            url: '/menu1/item1/option11'
          },
          { 
            name: 'option12',
            title: '标题一2',
            url: '/menu1/item1/option12'
          },
          { 
            name: 'option13',
            title: '标题一3',
            url: '/menu1/item1/option13'
          },
          { 
            name: 'option14',
            title: 'Retail-coop',
            url: '/menu1/item1/option14'
          },
          { 
            name: 'option15',
            title: '标题一5',
            url: '/menu1/item1/option15'
          },
          { 
            name: 'option16',
            title: '标题一6',
            url: '/menu1/item1/option16'
          },
          { 
            name: 'option17',
            title: '标题一7',
            url: '/menu1/item1/option17'
          },
          { 
            name: 'option18',
            title: '标题一8',
            url: '/menu1/item1/option18'
          },
        ],
      },
      {
        title: 'Item2',
        name: 'item2',
        icon_type: 'ios-basket',
        children: [
          { 
            name: 'option21',
            title: '标题二一',
            url: '/menu1/item2/option21'
          },
          { 
            name: 'option22',
            title: '标题二er',
            url: '/menu1/item2/option22'
          },
          { 
            name: 'option23',
            title: '标题er san',
            url: '/menu1/item2/option23'
          },
        ],
      },
      {
        title: 'Item3',
        name: 'item3',
        icon_type: 'ios-bicycle',
        children: [
          { 
            name: 'option31',
            title: 'CN13',
            url: '/menu1/item3/option31'
          },
          { 
            name: 'option32',
            title: '标题三二',
            url: '/menu1/item3/option32'
          },
          { 
            name: 'option33',
            title: '标题三三',
            url: '/menu1/item3/option33'
          },
          { 
            name: 'option34',
            title: '标题三4',
            url: '/menu1/item3/option34'
          },
        ],
      },
    ]
  },
  {
    title: 'Menu2',
    path: '/menu2',
    icon_type: 'ios-basket',
  },
  {
    title: 'Menu3',
    path: '/menu3',
    icon_type: 'ios-bicycle',
    children: [
      {
        title: 'item1',
        icon_type: 'ios-navigate',
        name: 'item1',
        children: [
          { 
            name: 'option11',
            title: '标题一',
            url: '/menu3/item1/option11'
          },
          { 
            name: 'option12',
            title: '标题二',
            url: '/menu3/item1/option12'
          },
          { 
            name: 'option13',
            title: '标题三',
            url: '/menu3/item1/option13'
          },
        ],
      },
      {
        title: 'item2',
        name: 'item2',
        icon_type: 'ios-basket',
        children: [
          { 
            name: 'option21',
            title: '标题一',
            url: '/menu3/item2/option21'
          },
          { 
            name: 'option22',
            title: 'CN-Cantonese',
            url: '/menu3/item2/option22'
          },
          { 
            name: 'option23',
            title: '标题san',
            url: '/menu3/item2/option23'
          },
          { 
            name: 'option24',
            title: 'CN11',
            url: '/menu3/item2/option24'
          },
        ],
      },
    ]
  },
]