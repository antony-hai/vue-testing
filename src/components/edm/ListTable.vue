<template>
  <table :width="width" style="margin: 0 auto;border-collapse:collapse; text-align: left;line-height: 20px;font-size: 12px;font-family: 微软雅黑;">
    <tr v-for="(item, index) in dataSource" :key="index">
      <td v-if="hasSpace" style="width: 20px;"></td>
      <td :style="textStyle" width="20">{{listType || `${index + 1}.`}}</td>
      <td :style="textStyle" v-html="item.text"></td>
    </tr>
    <tr>
      <td>
        <slot></slot>
      </td>
    </tr>
  </table>
</template>

<script>
const defaultStyle = {
  "text-align": "left",
  "line-height": "24px",
  "font-family": "微软雅黑",
  "font-size": "12px",
  "vertical-align": "top"
};

export default {
  data() {
    const textStyle = Object.assign(defaultStyle, this.tStyle);
    return {
      textStyle
    };
  },
  props: {
    dataSource: {
      type: Array,
      default() {
        return [];
      }
    },
    tStyle: {
      type: Object,
      default() {
        return {};
      }
    },
    listType: String,
    hasSpace: {
      type: Boolean,
      default: false
    },
    width: {
      type: String,
      default: "634"
    }
  }
};
</script>
