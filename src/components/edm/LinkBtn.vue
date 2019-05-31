<template>
  <!-- outlook 解释器无法用 a 标签去模拟  只好在外层套一个td-->
  <table
    :align="align"
    border="0"
    cellpadding="0"
    cellspacing="0"
    :width="width"
  >
    <tbody>
      <tr>
        <td class="open" height="85" valign="middle" :align="align">
          <div>
            <!--[if gte mso 9]><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="https://eroi-s3.s3.amazonaws.com/emailassets/intel/2019/05/Mesh_HPC-brief_Approaches-to-Convergence%20_V4.pdf" style="height:32px;v-text-anchor:middle;width:200px;" arcsize="19%" stroke="f" fillcolor="#00aeef"><w:anchorlock/><center><!
            [endif]--><a
              class="open"
              style="background-color:#00aeef;border-radius:6px;color:#ffffff;display:inline-block;font-family:sans-serif;font-size:12px;line-height:32px;mso-line-height-rule:exactly;text-align:center;text-decoration:none;width:200px;-webkit-text-size-adjust:none"
              :href="url"
              name="Learn How"
              target="_blank"
              xt="SPCLICK"
              ><slot>button</slot></a
            >
            <!--[if gte mso 9]></center></v:roundrect><![endif]-->
          </div>
        </td>
      </tr>
    </tbody>
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
      default: "200"
    },
    align: {
      type: String,
      default: 'left',
    },
  }
};
</script>

