<template>
  <table style="margin: 0 auto;border-collapse:collapse;width: 634px;text-align: left;line-height: 20px;font-size: 13px;font-family: 微软雅黑;">
    <tr v-for="(item, index) in dataSource" :key="index">
      <td style="width: 10px;"></td>
      <td style="text-align: left; line-height: 20px; font-family: 微软雅黑; width: 20px; vertical-align: top"> {{listType || `${index + 1}.`}}</td>
      <td style="text-align: left; line-height: 20px; font-family: 微软雅黑;">{{ item.text }}</td>
    </tr>
  </table>
</template>

<script>
export default {
  props: {
    dataSource: {
      type: Array,
      default() {
        return []
      },
    },
    listType: String
  }
};
</script>
