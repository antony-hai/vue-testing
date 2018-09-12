<template>
  <table :style="finallyStyle" cellspacing="0" cellpadding="0" border="0" :width="width" :bgcolor="bgcolor">
    <tr v-if="hasTop" style="height: 10px;"></tr>
    <slot></slot>
    <tr v-if="hasBottom" style="height: 10px;"></tr>
  </table>
</template>

<script>
const defaultStyles = {
  margin: '0 auto',
  'border-collapse': 'collapse',
  'text-align': 'left',
  lineheight: '20px',
  'font-size': '13px',
  'font-family': '微软雅黑',
}
export default {
  data() {
    const finallyStyle = Object.assign(defaultStyles, this.ostyle)
    return {
      finallyStyle,
    }
  },
  props: {
    hasTop: Boolean,
    hasBottom: Boolean,
    width: {
      type: String,
      default: "634",
    },
    bgcolor: {
      type: String,
      default: ''
    },
    ostyle: {
      type: Object,
      default: function () {
        return {}
      }
    }
  },
};
</script>
