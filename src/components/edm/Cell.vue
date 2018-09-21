<template>
  <td :style="finallyStyle"><slot></slot></td>
</template>

<script>
const dstyle= {
  'font-size': '12px',
  'text-align': 'left',
  'font-family': '微软雅黑',
  'line-height': '24px',
}
export default {
  data() {
    const finallyStyle = Object.assign(dstyle, ostyle)
    return {
      finallyStyle,
    }
  },
  props: {
    ostyle: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>


