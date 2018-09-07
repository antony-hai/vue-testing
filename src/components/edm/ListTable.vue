<template>
  <table style="margin: 0 auto;width: 634px;text-align: left;line-height: 20px;font-size: 12px;font-family: 微软雅黑;">
    <tr v-for="(item, index) in dataSource" :key="index">
      <td style="text-align: left; line-height: 14px; font-family: 微软雅黑; width: 30px; vertical-align: top"> {{ listType || `${index + 1}.`}}</td>
      <td style="text-align: left; line-height: 14px; font-family: 微软雅黑;">{{ item.text }}</td>
    </tr>
  </table>
</template>

<script>
export default {
  props: {
    dataSource: Array,
    listType: String
  }
};
</script>
