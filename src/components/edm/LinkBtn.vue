<template>
  <!-- outlook 解释器无法用 a 标签去模拟  只好在外层套一个td-->
  <table cellspacing="0" cellpadding="0" border="0" style="margin: 0 atu0;border-collapse:collapse;border-spacing:0;text-align:center;vertical-align:middle;width:auto">
    <tr style="padding:0;text-align:center;vertical-align:top;">
      <td :width="width" style="background:#00AEEF; border:0 solid #00AEEF;height: 40px; line-height: 40px; border-radius: 3px;">
        <a :href="url" target="_blank" style="border:0 solid #00AEEF; color:#fefefe; display:inline-block; mso-line-height: exactly; font-family:微软雅黑;font-size:15px;line-height:25px;margin:0;padding:8px 30px 8px 30px;text-align:center;text-decoration:none">
          <slot>即刻加入</slot>
        </a>
      </td>
    </tr>
  </table>
</template>

<script>
export default {
  props: {
    url: {
      type: String,
      default: "mailto:intelconnectsupport@intel.com"
    },
    width: {
      type: String,
      default: '120'
    }
  }
};
</script>

