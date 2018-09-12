<template>
  <table border="1" style="border-collapse:collapse;font-size: 12px;;font-family: 微软雅黑;margin: 0 auto;width: 634px;text-align: center;line-height: 20px;border-spacing: 2px;">
    <tr :style="finallHeadStyle">
      <td v-for="(item, index) in column" :key="index" :width="item.width" :style="finallHeadStyle">{{ item.title }}</td>
    </tr>
    <tr v-for="(data, index) in dataSource" :key="index">
      <td v-for="(item, num) in column" :key="num" style="text-align: center;font-family: 微软雅黑; font-size: 12px; line-height: 24px;" v-html="data[item.dataIndex]"></td>
    </tr>
  </table>
</template>

<script>
const defaultHeadStyle = {
  height: "36px",
  "text-align": "center",
  "font-weight": "700",
  'font-family': '微软雅黑',
  'line-height': '30px',
  'color': '#ffffff',
};
export default {
  data() {
    const finallHeadStyle = Object.assign({}, defaultHeadStyle, this.headStyle);
    return {
      finallHeadStyle,
    }
  },
  props: {
    dataSource: Array,
    column: Array,
    headStyle: {
      type: Object,
      default: function() {
        return {};
      }
    }
  },
};
</script>
