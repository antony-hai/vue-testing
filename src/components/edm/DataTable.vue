<template>
  <table border="1" cellpadding="0" :width="width" style="border-collapse:collapse; font-size: 12px;;font-family: 微软雅黑;margin: 0 auto; text-align: center;line-height: 20px;border-spacing: 2px; table-layout: fixed">
    <tr :style="finallHeadStyle">
      <td v-for="(item, index) in column" :key="index" :width="item.width" :style="finallHeadStyle" v-html="item.title"></td>
    </tr>

    <tr v-for="(data, index) in dataSource" :key="index">
      <td v-for="(item, num) in column" v-if="hasRow(data[item.dataIndex])" :key="num" :rowspan="item.rowspan && item.rowspan" :style="{ 'text-align': item.align || 'center', 'font-family': '微软雅黑', 'font-size': '12px', 'line-height': '24px', 'padding-left': '3px', 'padding-right': '3px' }">
        <p v-if="data.link && item.linkTarget" style="margin: 0; padding: 0">
          <a :href="data.link" v-html="data[item.dataIndex]" style="color: #071C5; text-decoration: underline; word-wrap:break-word" target="_blank"></a>
        </p>
        <p v-else v-html="data[item.dataIndex]" style="margin: 0; padding: 0"></p>
      </td>
    </tr>
  </table>
</template>

<script>
const defaultHeadStyle = {
  height: "30px",
  "text-align": "center",
  "font-weight": "700",
  "font-family": "微软雅黑",
  "line-height": "30px"
};
export default {
  data() {
    const finallHeadStyle = Object.assign({}, defaultHeadStyle, this.headStyle);
    return { 
      finallHeadStyle
    };
  },
  props: {
    dataSource: Array,
    column: Array,
    headStyle: {
      type: Object,
      default: function() {
        return {};
      }
    },
    width: {
      type: String,
      default: "634"
    },

  },
  methods: {
    hasRow(value) {
      return typeof value !== "undefined";
    },
    getRowSpan(data, col) {
      if (col.rowspan) {
        return col.rowspan;
      }
    }
  }
};
</script>
