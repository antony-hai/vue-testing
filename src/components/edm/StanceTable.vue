<template>
  <table :style="finallyStyle" cellspacing="0">
    <tr v-if="hasTop" style="height: 10px;"></tr>
    <slot></slot>
    <tr v-if="hasBottom" style="height: 10px;"></tr>
  </table>
</template>

<script>
const defaultStyles = {
  margin: '0 auto',
  width: '634px',
  'text-align': 'left',
  lineheight: '20px',
  'font-size0': '12px',
  'font-family': '微软雅黑',
  
}
export default {
  props: {
    hasTop: Boolean,
    hasBottom: Boolean,
    specialStyle: {
      type: Object,
      default: function () {
        return {}
      }
    }
  },
  computed: {
    finallyStyle () {
      return Object.assign(defaultStyles, this.specialStyle)
    }
  }
};
</script>
