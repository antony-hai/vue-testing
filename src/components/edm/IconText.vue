<template>
  <tr>
    <td style="text-align: center; vertical-align: top; padding-right: 8px; line-height: 24px;">
      <img :width="imgWidth" style="vertical-align: middle" border="0" :src="imgUrl" alt="">
    </td>
    <td style="font-size:12px;text-align: left; font-family: 微软雅黑; line-height: 20px;">
      <b v-if="title">{{ title }}：</b>
      <slot></slot>
    </td>
  </tr>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    imgWidth: {
      type: String,
      default: '12',
    },
    imgUrl: {
      type: String,
      default: 'http://show.easeye.com.cn/fckattach/2018-04-30/e3b9e77152a2095d72521d1898764e2d/image/70c069239880e3060deb6c3a47c25159.jpg'
    }
  }
};
</script>
