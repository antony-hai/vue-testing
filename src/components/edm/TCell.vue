<template>
  <td :style="finallyStyle" :width="width">
    <slot></slot>
  </td>
</template>

<script>
const dstyle = {
  "font-size": "13px",
  "text-align": "left",
  "font-family": "微软雅黑",
  "line-height": "22px"
};
export default {
  data() {
    const finallyStyle = Object.assign({}, dstyle, this.ostyle);
    return {
      finallyStyle
    };
  },
  props: {
    width: {
      type: String,
    },
    ostyle: {
      type: Object,
      default(){
        return {}
      }
    }
  },
};
</script>


