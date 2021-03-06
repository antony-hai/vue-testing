// 单例模式 ->  确保只有一个实例，并提供全局访问

// 惰性单例 ---- 需要在创建、且只创建一个
const getSingle = (fn) => {
  let result // 标识  确保只有一个对象
  return () => result || (result = fn())
}

const createLoginLayer = () => {
  const div = document.createElement('div')
  div.style.display = 'none'
  document.body.appendChild(div)
  return div
}

const createSingle = getSingle(createLoginLayer)

// 应用
document.getElementById('loginBtn').onclick = () => {
  const loginLayer = createSingle()
  loginLayer.style.display = 'block'
}


/*
 * 策略模式 -> 定义一系列的算法、封装起来，使其相互之间可以替换
 * 关键是找到封装变化、委托、多态性
 */

// 传统面对对象
class PerformanceA {
  calculate(salary) {
    return salary * 3
  }
}

class PerformanceS {
  calculate(salary) {
    return salary * 4
  }
}

class Bonus {
  constructor() {
    this.salary = null
    this.strategy = null
  }
  setSalary(salary) {
    this.salary = salary
  }
  setStrategy(strategy) {
    this.strategy = strategy
  }
  getBonus() {
    return this.strategy.calculate(this.salary)
  }
}

const bonus = new Bonus()
bonus.setSalary(17000)
bonus.setStrategy(new PerformanceA())
window.console.log(bonus.getBonus())

bonus.setSalary(10000)
bonus.setStrategy(new PerformanceS())
window.console.log(bonus.getBonus())


// js 简易版策略  可以消除大部分的条件语句

const strategies = {
  S(salary) {
    return salary * 4
  },
  A(salary) {
    return salary * 3
  },
}

const calculateBonus = (salary, level) => {
  return strategies[level](salary)
}

window.console.log(calculateBonus(10000, 'S'))

// 迭代器模式 ----->  内部和外部迭代器 js 其实内部已经实现

// 内部迭代器
Array.prototype.forEach.call([1, 2, 3, 4], function (item) {
  window.console.log(item)
})
// 外部迭代器、要显示的调用下一个元素 ------ es6里面有iterator 接口的实现   generator函数
const Iterator = (obj) => {
  let current = 0
  const next = () => {
    current += 1
  }
  const isDone = () => current >= obj.length
  const getCurrent = () => obj[current]
  return {
    next,
    isDone,
    getCurrent,
    length: obj.length,
  }
}

const compare = (iterator1, iterator2) => {
  if (iterator1.length !== iterator2.length) {
    return false
  }
  while (!iterator1.isDone() && !iterator2.isDone) {
    if (iterator1.getCurrent() !== iterator2.getCurrent) {
      throw new Error('两个数组不等')
    }
    iterator1.next()
    iterator2.next()
  }
}
compare(Iterator([1, 2, 3, 4]), Iterator([5, 6, 7]))


// 发布  -- 订阅  模式

const event = {
  clientList: {},
  listen(key, fn) {
    if (!this.clientList[key]) {
      this.clientList[key] = [] // key 为订阅的消息类型
    }
    this.clientList[key].push(fn) // 订阅消息添加进缓存列表
  },
  trigger() {
    const key = Array.prototype.shift.call(arguments)
    const fns = this.clientList[key]
    if (!fns && fns.length === 0) {
      return false
    }
    fns.forEach((fn) => {
      fn(...arguments)
    })
  },
  remove(key, fn) {
    const fns = this.clientList[key]
    if (!fns) { return } // 消息并没有被订阅过一次
    if (!fn) {
      fns && (fns.length = 0) // 没有具体取消哪一过，取消全部
    } else {
      for (let l = fns.length - 1; l > 0; l--) { // 反向遍历
        if (fn === fns[l]) {
          fns.splice(l, 1)
        }
      }
    }
  }
}

// 定义一个installEvent , 动态的给所有的对象安装发布-订阅工程
const installEvent = (obj) => {
  // for (let i in event) {
  //   obj[i] = event[i]
  // }
  Object.keys(event).forEach(key => {
    obj[key] = event[key] 
  })
}

// ------------------------------------------一下

const salesOffices = {};
installEvent(salesOffices)

salesOffices.listen('squareMeter88', (price) => {
  window.console.log(`价格：${price}`)
})
salesOffices.listen('squareMeter100', price => window.console.log(`价格：${price}`))

salesOffices.trigger('squareMeter88', 2000000)
salesOffices.trigger('squareMeter100', 3000000)

// 应用实例   用户登录后   多个模块的功能更新、劲量解除耦合就用到这个东西



// 命令模式、 用于解耦发送者和接受者的关系  是callback函数的一个面对对象替代品

const setCommand = function (btn, command) {
  btn.onclick = function () {
    command.execute()
  }
}

const singleCommand = {
  operate: function () {
    window.console.log('do something')
  }
}

const catchCommand = function (reveiver) {
  return {
    execute: function () {
      reveiver.operate()
    }
  }
}

const executeCommand = catchCommand(singleCommand)

setCommand(document.getElementById('commandButton'), executeCommand)

// 组合模式   模版方法模式 -----------------用到的概率不太大


// 享元模式 flyweight  蝇量级   用于性能优化的一种模式
// 通过共享来支持大量细力度的对象



const console = window.consloe

//--------------------------------------------------------------------
/**  装饰模式
 * 动态的给对象添加一些额外职责、从而不影响这个类的派生对象
 * example 分离业务代码和数据统计代码、
 *         页面有个登录btn 点击弹出浮层、同时进行统计上报  记录点击的人数
 * */

 // AOP 装饰函数

Function.prototype.before = function (beforeFn) {
  const _self = this // 保存远函数的引用
  return function () { // 包含原函数和新函数的代理函数
    beforeFn.apply(this, arguments) // 执行新函数，并且this不会被劫持

    return _self.apply(this, arguments) // 执行原函数 、并返回原函数结果
  }

}
//  由于公用参数、所以before 可以根据需求改变当前函数需要的参数

Function.prototype.after = function (afterFn) {
  const _self = this // 保存远函数的引用
  return function () { // 包含原函数和新函数的代理函数
    const ret =  _self.apply(this, arguments) // 执行原函数 、并返回原函数结果

    afterFn.apply(this, arguments) // 执行新函数，并且this不会被劫持

    return ret
  }
}

const showLogin = function() {
  console.log('显示登录浮层')
  log(this.getAttribute('tag'))// 两层可以分离的逻辑
  
}

const log = tag => { // 具体统计的函数、业务代码忽略
  console.log(`上报标签为 ${tag}`)
}

const showLoginFromAPO = function () {
  console.log('------')
}

const logFromAPO = function () {
  const tag = this.getAttribute('tag')
  // 具体的统计业务
}

document.getElementById('loginBtn').onclick = showLoginFromAPO.after(logFromAPO)
 