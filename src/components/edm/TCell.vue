<template>
  <td :style="finallyStyle" :width="width" :rowspan="rowspan" :colspan="colspan">
    <slot></slot>
  </td>
</template>

<script>
const dstyle = {
  "font-size": "12px",
  "text-align": "left",
  "font-family": "微软雅黑",
  "line-height": "22px",
  "vertical-align": 'top',
};
export default {
  data() {
    const finallyStyle = Object.assign({}, dstyle, this.ostyle);
    return {
      finallyStyle,
    };

  },
  watch: {
    ostyle: function(newValue, oldValue) {
      this.finallyStyle =  Object.assign({}, dstyle, newValue);
    },
  },
  // computed: {
  //   finallyStyle: function () {
  //     return this.ostyle      
  //   }
    
  // },
  props: {
    width: {
      type: String,
    },
    ostyle: {
      type: Object,
      default(){
        return {}
      }
    },
    rowspan: {
      type: String
    },
    colspan: {
      type: String
    }
  },
};
</script>


