<template>
  <!-- outlook word 解释器无法用 a 标签去模拟  只好在外层套一个td-->
  <td style="background:#00AEEF; border:0 solid #00AEEF; text-align: center; vertical-align: middle; width: auto">
    <a 
      :href="url"
      target="_blank" 
      style="color:#fefefe;display:block; font-family:微软雅黑;font-size:15px;line-height:25px;margin:0;padding:8px 30px 8px 30px;text-align:center;text-decoration:none">
      <slot>即刻加入</slot>
    </a>
  </td>
</template>

<script>
export default {
  props: {
    url: {
      type: String,
      default: 'mailto:intelconnectsupport@intel.com'
    },
    width: {
      type: String,
      default: '120'
    }
  }
}
</script>

