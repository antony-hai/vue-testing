<template>
  <table  :width="width" style="margin: 0 auto; font-size: 12px;font-family: 微软雅黑;">
    <tr>
      <td style="width:100px;text-align: left;">
      </td>
      <td style="text-align: center;color:#555554;">
        <a href="http://show.easeye.com.cn/EventMail/SourceContent.aspx?EASEYETEMPLATEID={[EASEYETEMPLATEID]}&EASEYEUID={[EASEYELINK]}&s={[LINKSIGN]}"
          target="_blank">单击此处以在网页上查看此电子邮件</a>
      </td>
      <td style="width:100px;text-align: right;color:#555554;">
        <a class="third" href="https://techprovider.intel.com/cn-zh-subscription-management" style="color:#00AEEF;font-family:Arial,Helvetica,sans-serif;font-weight:400;line-height:1.5;margin:10;padding:0;text-decoration:none"
          target="_blank">取消订阅</a>
      </td>
    </tr>
  </table>
</template>

<script>
export default {
  props: {
    width: {
      type: String,
      default: '638'
    }
  }
}
</script>

