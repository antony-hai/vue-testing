
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
    timer = setTimeout(() =>{
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


export default {
  throttle,
  debounce,
}