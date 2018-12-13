
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


export default {
  throttle,
  debounce,

}