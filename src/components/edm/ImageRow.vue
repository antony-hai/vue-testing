<template>
  <table style="margin: 0 auto;width: 638px;font-size: 12px;;font-family: 微软雅黑;" cellpadding="0" cellspacing="0" border="0">
    <td>
      <img :src="imgUrl" :width="width" style="vertical-align:middle; border: 0;" border="0" alt="">
    </td>
  </table>
</template>

<script>
export default {
  props: {
    imgUrl: String,
    width: {
      type: String,
      default: '634'
    }
  }
};
</script>
