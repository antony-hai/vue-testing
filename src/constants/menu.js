
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
            name: 'option1',
            title: '标题一1',
            url: '/menu1/item1/option1'
          },
          { 
            name: 'option2',
            title: '标题一2',
            url: '/menu1/item1/option2'
          },
          { 
            name: 'option3',
            title: '标题一3',
            url: '/menu1/item1/option3'
          },
          { 
            name: 'option4',
            title: '标题一4',
            url: '/menu1/item1/option4'
          },
          { 
            name: 'option5',
            title: '标题一5',
            url: '/menu1/item1/option5'
          },
          { 
            name: 'option6',
            title: '标题一6',
            url: '/menu1/item1/option6'
          },
          { 
            name: 'option7',
            title: '标题一7',
            url: '/menu1/item1/option7'
          },
          { 
            name: 'option8',
            title: '标题一8',
            url: '/menu1/item1/option8'
          },
        ],
      },
      {
        title: 'Item2',
        name: 'item2',
        icon_type: 'ios-basket',
        children: [
          { 
            name: 'option1',
            title: '标题二一',
            url: '/menu1/item2/option1'
          },
          { 
            name: 'option2',
            title: '标题二er',
            url: '/menu1/item2/option2'
          },
          { 
            name: 'option3',
            title: '标题er san',
            url: '/menu1/item2/option3'
          },
        ],
      },
      {
        title: 'Item3',
        name: 'item3',
        icon_type: 'ios-bicycle',
        children: [
          { 
            name: 'option1',
            title: '标题三一',
            url: '/menu1/item3/option1'
          },
          { 
            name: 'option2',
            title: '标题三二',
            url: '/menu1/item3/option2'
          },
          { 
            name: 'option3',
            title: '标题三三',
            url: '/menu1/item3/option3'
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
            name: 'option1',
            title: '标题一',
            url: '/menu3/item1/option1'
          },
          { 
            name: 'option2',
            title: '标题二',
            url: '/menu3/item1/option2'
          },
          { 
            name: 'option3',
            title: '标题三',
            url: '/menu3/item1/option3'
          },
        ],
      },
      {
        title: 'item2',
        name: 'item2',
        icon_type: 'ios-basket',
        children: [
          { 
            name: 'option1',
            title: '标题一',
            url: '/menu3/item2/option1'
          },
          { 
            name: 'option2',
            title: '标题er',
            url: '/menu3/item2/option2'
          },
          { 
            name: 'option3',
            title: '标题san',
            url: '/menu3/item2/option3'
          },
        ],
      },
    ]
  },
]