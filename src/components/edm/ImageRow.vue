<template>
  <table :width="width" style="margin: 0 auto; font-size: 12px;;font-family: 微软雅黑; border-collapse: collapse;" cellpadding="0" cellspacing="0" border="0">
    <td>
      <img :src="imgUrl" :width="width" style="vertical-align:middle; border: 0;" border="0" alt="">
    </td>
  </table>
</template>

<script>
export default {
  props: {
    imgUrl: {
      type: String,
      default: '@/assets/images/3.png'
    },
    width: {
      type: String,
      default: '634'
    }
  }
};
</script>
