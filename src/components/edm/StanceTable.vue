<template>
  <table style="margin: 0 auto;width: 634px;text-align: left;line-height: 20px;font-size: 12px;font-family: 微软雅黑;">
    <tr v-if="hasTop" style="height: 10px;"></tr>
    <slot></slot>
    <tr v-if="hasBottom" style="height: 10px;"></tr>
  </table>
</template>

<script>
export default {
  props: {
    hasTop: Boolean,
    hasBottom: Boolean,
  }
}
</script>
