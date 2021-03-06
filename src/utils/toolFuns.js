

// 一个节流函数、用于mosemove, resize 等函数
const throttle = (fn, delay = 100) => {
  const _self = fn
  let timer = null
  let firstTime = true
  return function () {
    const args = arguments
    const _me = this
    if (firstTime) {
      _self.apply(_me, args)
      return firstTime = false
    }
    if (timer) {
      return false
    }
    timer = setTimeout(() => {
      clearTimeout(timer)
      timer = null
      _self.apply(_me, args)
    }, delay)
  }
}

// 一个防抖函数、 在规定时间内再次调用不会执行  继续延时 （电梯关门） window.onresize 更适用
const debounce = (fn, delay = 100) => {
  let timer = null
  return function () {
    const _me = this
    const args = arguments
    clearTimeout(timer)
    timer = setTimeout(() => {
      fn.apply(_me, args)
    }, delay)
  }
}

// 自动实现一个pormise 原型

function MyPromise(executor) {
  const self = this
  self.status = 'pending'
  self.data = null
  self.onResolvedCallback = []
  self.onRejectedCallback = []

  function resolve(value) {
    if (self.status === 'pending') {
      self.status = 'resolved'
      self.data = value
      for (var i = 0; i < self.onResolvedCallback.length; i++) {
        self.onResolvedCallback[i](value)
      }
    }
  }
  function reject(reason) {
    if (self.status === 'pending') {
      self.status = 'rejected'
      self.data = reason
      for (var i = 0; i < self.onRejectedCallback.length; i++) {
        self.onRejectedCallback[i](reason)
      }
    }
  }

  try {
    executor(resolve, reject)
  } catch (e) {
    reject(e)
  }
}

MyPromise.prototype.then = function (onResolved, onRejected) {
  const self = this
  let promise2 = undefined

  // 根据标准，如果then的参数不是function，则我们需要忽略它，此处以如下方式处理
  onResolved = typeof onResolved === 'function' ? onResolved : function (v) { return v }
  onRejected = typeof onRejected === 'function' ? onRejected : function (r) { return r }

  if (self.status === 'resolved') {
    // 如果promise1(此处即为this/self)的状态已经确定并且是resolved，我们调用onResolved
    // 因为考虑到有可能throw，所以我们将其包在try/catch块里
    return promise2 = new MyPromise(function (resolve, reject) {
      try {
        var x = onResolved(self.data)
        if (x instanceof MyPromise) { // 如果onResolved的返回值是一个Promise对象，直接取它的结果做为promise2的结果
          x.then(resolve, reject)
        } else {
          resolve(x) // 否则，以它的返回值做为promise2的结果
        }
      } catch (e) {
        reject(e) // 如果出错，以捕获到的错误做为promise2的结果
      }
    })
  }


  // 此处与前一个if块的逻辑几乎相同，区别在于所调用的是onRejected函数，就不再做过多解释
  if (self.status === 'rejected') {
    return promise2 = new Promise(function (resolve, reject) {
      try {
        var x = onRejected(self.data)
        if (x instanceof Promise) {
          x.then(resolve, reject)
        }
      } catch (e) {
        reject(e)
      }
    })
  }

  if (self.status === 'pending') {
    // 如果当前的Promise还处于pending状态，我们并不能确定调用onResolved还是onRejected，
    // 只能等到Promise的状态确定后，才能确实如何处理。
    // 所以我们需要把我们的**两种情况**的处理逻辑做为callback放入promise1(此处即this/self)的回调数组里
    // 逻辑本身跟第一个if块内的几乎一致，此处不做过多解释
    return promise2 = new Promise(function (resolve, reject) {
      self.onResolvedCallback.push(function (value) {
        try {
          var x = onResolved(self.data)
          if (x instanceof Promise) {
            x.then(resolve, reject)
          }
        } catch (e) {
          reject(e)
        }
      })

      self.onRejectedCallback.push(function (reason) {
        try {
          var x = onRejected(self.data)
          if (x instanceof Promise) {
            x.then(resolve, reject)
          }
        } catch (e) {
          reject(e)
        }
      })
    })
  }
}



const checkType = (obj) => {
  let dataType = {
    '[object Null]': 'null',
    '[object Undefined]': 'undefined',
    '[object Boolean]': 'boolean',
    '[object Number]': 'number',
    '[object String]': 'string',
    '[object Function]': 'function',
    '[object Array]': 'array',
    '[object Date]': 'date',
    '[object RegExp]': 'regexp',
    '[object Object]': 'object',
    '[object Symbol]': 'symbol',
    '[object Map]': 'map',
    '[object Set]': 'set',
    '[object Int8Array]': 'int8array',
    '[object Error]': 'error'
  }
  // return Object.prototype.toString.call(obj).slice(8, -1).toLowerCase()   直接切割了可以
  // 下面这个列出来好看看js的数据基本类型
  return dataType[Object.prototype.toString.call(obj)]
}


// AOP 装饰函数

Function.prototype.before = function (beforeFn) {
  const _self = this // 保存远函数的引用
  return function () { // 包含原函数和新函数的代理函数
    beforeFn.apply(this, arguments) // 执行新函数，并且this不会被劫持

    return _self.apply(this, arguments) // 执行原函数 、并返回原函数结果
  }

}


Function.prototype.after = function (afterFn) {
  const _self = this // 保存远函数的引用
  return function () { // 包含原函数和新函数的代理函数
    const ret =  _self.apply(this, arguments) // 执行原函数 、并返回原函数结果

    afterFn.apply(this, arguments) // 执行新函数，并且this不会被劫持

    return ret
  }
}

const setRem = () => {
  (function(doc, win){
    const docEl = doc.documentElement;
    const resizeEvent = 'orientationchange' in window ? 'orientationchange' : 'resize';
    const recalc = () => {
      const clientWidth = docEl.clientWidth;
      if (!clientWidth) { return }
      docEl.style.fontSize = 100 * (clientWidth / 375) + "px";
    }

    if (!doc.addEventListener) { return } 
    win.addEventListener(resizeEvent, recalc, false);
    doc.addEventListener("DomContentLoaded", recalc)
  })(document, window)
}


const logger = function(store) {
  return function(next) {
    return function(action) {
      window.console.log(store)
      next(action)
    }
  }
}

const compose = function(...funs) {
  if (funs.length === 0) {
    return arg => arg
  } 
  if (funs.length === 1) {
    return funs[0]
  }

  return funs.reduce((a,b) => (...args) => a(b(...args)))
  /**
   * 
   * 理解fn执行的结果为  (action) => { ....somehandle }
   * 
   * return function(...args) {
   *  return fn1(fn2(fn3(...args)))
   * }
   * 
   *  */ 
}


function applyMiddlware(...middlewares) {
  return function(createStore) {
    return function(...args) {
      const store = createStore(...args)
      let dispatch = () => {
        throw new Error(
          'Dispatching while constructing your middleware is not allowed. ' +
            'Other middleware would not be applied to this dispatch.'
        )
      }

      const middlewareAPI = {
        store,
        dispatch: (...args) => dispatch(...args)
      }

      const chain = middlewares.map(middleware => middleware(middlewareAPI))
      // chain = [(next) => (action) => { next(action) }, (next) => (action) => { next(action) }, (next = dispatch) => (action) => { next(action) === dispatch(action)} ]
      
      dispatch = compose(...chain)(store.dispatch)

      return {
        ...store,
        dispatch,
      }
    }
  }
} 

// 注入中间件
applyMiddlware(logger)


// 几个常规的排序算法

const bubbleSort = (array) => {
  const result = array.slice()
  const len = result.length
  for (let i = 0; i < len; i++) {
    // 因为每次的最后一项已经是大的，可以不用比较，提升性能
    for (let j = 0; j < len - i - 1; j++) {
      if (result[j] > result[j+1]) {
        [result[j], result[j+1]] = [result[j+1], result[j]]
      }
    } 
  }
  return result
}


const insertionSort = (array) => {
  const len = array.length
  const result = array.slice()
  for (let i = 1; i < len; i++) {
    const temp = result[i]
    let j = i - 1
    while(result[j] > temp && j >= 0) {
      result[j+1] = result[j] // 将大的项移动到后一个位置
      j--
    }
    // 插入动作
    result[j+1] = temp
  }
  return result
}

const selectionSort = (array) => {
  const len = array.length
  const result = array.slice()
  for (let i = 0; i < len; i++) {
    let minIndex = i
    for (let j = i + 1; j < len; j++) {
      if (result[j] < result[minIndex]) { // 寻找最小的值
        minIndex = j
      }
    }
    [result[i], result[minIndex]] = [result[minIndex], result[i]]
  }
  return result
}

const quickSort = (array) => {
  const len = array.length
  const result = array.slice()
  if (len <= 1) {
    return array
  }

  const pivotIndex = Math.floor(len/2)
  const pivot = result.splice(pivotIndex, 1)[0]
  let left = []
  let right = []

  for (let i = 0; i< len - 1; i++) {
    if (pivot > result[i]) {
      left.push(result[i])
    } else {
      right.push(result[i])
    }
  }

  return [].concat(quickSort(left), pivot, quickSort(right))

}




export default {
  throttle,
  debounce,
  setRem,

}