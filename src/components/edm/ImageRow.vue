<template>
  <table style="margin: 0 auto;width: 638px;font-size: 12px;;font-family: 微软雅黑;">
    <td>
      <img :src="imgUrl" width="634" style="vertical-align:middle;" border="0" alt="">
    </td>
  </table>
</template>

<script>
export default {
  props: {
    imgUrl: String
  }
};
</script>
