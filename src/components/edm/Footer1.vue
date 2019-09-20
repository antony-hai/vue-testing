<template>
  <table
    v-if="type === 'HongKong'"
    cellspacing="0"
    cellpadding="0"
    border="0"
    :width="width"
    style="padding-left: 5px;padding-right: 5px;font-size: 12px;font-family: 微软雅黑;margin: 0 auto;text-align: left;line-height: 24px;color: #fff;background-color: #00427F;"
  >
    <tr>
      <td style="font-family: 微软雅黑;">
        欲了解關於英特爾
        <sup>®</sup>技術合作夥伴更多信息，請訪問我們的網站：
      </td>
    </tr>
    <tr>
      <td style="font-family: 微软雅黑;height: 5px;"></td>
    </tr>
    <tr>
      <td style="font-family: 微软雅黑;">
        <a
          href="https://www.intel.com/technologyprovider"
          target="_blank"
          style="color: #FE9712;"
        >www.intel.com/technologyprovider</a>
      </td>
    </tr>
    <tr>
      <td style="font-family: 微软雅黑;height: 5px;"></td>
    </tr>
    <tr>
      <td style="font-family: 微软雅黑;">
        您接收到這封郵件，是因為您選擇加入了英特爾新聞簡報郵件發送名單。請點擊
        <a
          href="https://techprovider.intel.com/cn-zh-subscription-management"
          target="_blank"
          style="color: #fff; text-decoration: underline"
        >此處</a>
        退訂新聞簡報。一旦您選擇退訂這份新聞簡報，您的信息將從英特爾
        <sup>®</sup>技術合作夥伴新聞簡報郵件發送名單中刪除。如果您想要退訂英特爾的其它郵件通知，請直接回復相應郵件即可。
      </td>
    </tr>
    <tr>
      <td style="font-family: 微软雅黑;height: 10px;"></td>
    </tr>
    <tr>
      <td style="font-family: 微软雅黑;">
        <a
          href="https://www.intel.cn/content/www/cn/zh/legal/trademarks.html?_ga=2.191392874.1945595149.1539775122-1852750348.1539774686&erpm_id=2978511"
          target="_blank"
          style="color: #fff; text-decoration: underline"
        >法律聲明</a>與
        <a
          href="https://www.intel.cn/content/www/cn/zh/privacy/intel-privacy-notice.html"
          target="_blank"
          style="color: #fff; text-decoration: underline"
        >隱私條款</a>©2019英特爾公司。
      </td>
    </tr>
    <tr>
      <td style="font-family: 微软雅黑;height: 40px;"></td>
    </tr>
  </table>
  <table
    v-else-if="type === 'withLink'"
    bgcolor="#003C71"
    border="0"
    cellpadding="0"
    cellspacing="0"
    style="margin: 0px auto; border-collapse: collapse; text-align: left; font-size: 12px; font-family: 微软雅黑;"
    :width="width"
  >
    <tbody>
      <tr>
        <td style="text-align: center; vertical-align: middle; font-size: 0;">
          <img
            alt
            border="0"
            src="http://show.easeye.com.cn/fckattach/2019-08-08/e3b9e77152a2095d72521d1898764e2d/image/863671e3671483a5a04a08e831415247_easeyethumbnail.jpg"
            style="vertical-align: middle; border: 0"
            width="634"
          />
        </td>
      </tr>
      <tr>
        <td style="text-align: center; vertical-align: middle; font-size: 0;">
          <a
            etrackstart
            href="http://show.easeye.com.cn/EventInterface/map?t=37537211&amp;EASEYEUID={[EASEYELINK]}&amp;yiyeoriginalurl=NB2HI4DTHIXS653XO4XGS3TUMVWC4Y3PNUXWG33OORSW45BPO53XOL3VOMXWK3RPOBZGS5TBMN4S62LOORSWYLLQOJUXMYLDPEWW433UNFRWKLTIORWWY===&amp;enc=1&amp;i="
            etrackend
            style="margin:0; padding: 0; font-size: 0; text-decoration: none"
          >
            <img
              alt
              border="0"
              src="http://show.easeye.com.cn/fckattach/2019-08-08/e3b9e77152a2095d72521d1898764e2d/image/95d304342dd8c02ccadd3a0f7517dac7.jpg"
              style="vertical-align: middle; border: 0"
              width="634"
            />
          </a>
        </td>
      </tr>
      <tr>
        <td style="text-align: center; vertical-align: middle; font-size: 0;">
          <a
            etrackstart
            href="http://show.easeye.com.cn/EventInterface/map?t=37537212&amp;EASEYEUID={[EASEYELINK]}&amp;yiyeoriginalurl=NB2HI4DTHIXS653XO4XGS3TUMVWC4Y3PNUXWG33OORSW45BPO53XOL3VOMXWK3RPNRSWOYLMF52GK4TNOMWW6ZRNOVZWKLTIORWWY===&amp;enc=1&amp;i="
            etrackend
            style="margin:0; padding: 0; font-size: 0; text-decoration: none"
          >
            <img
              alt
              border="0"
              src="http://show.easeye.com.cn/fckattach/2019-08-08/e3b9e77152a2095d72521d1898764e2d/image/cf5a5b4a5a1fd2e780bd3b6e68a59a78.jpg"
              style="vertical-align: middle; border: 0"
              width="634"
            />
          </a>
        </td>
      </tr>
      <tr>
        <td style="text-align: center; vertical-align: middle; font-size: 0;">
          <img
            alt
            border="0"
            src="http://show.easeye.com.cn/fckattach/2019-08-08/e3b9e77152a2095d72521d1898764e2d/image/ee711d73bca4405e824a78d2ffdcd086_easeyethumbnail.jpg"
            style="vertical-align: middle; border: 0"
            width="634"
          />
        </td>
      </tr>
    </tbody>
  </table>
  <table
    v-else
    cellspacing="0"
    cellpadding="0"
    border="0"
    :width="width"
    style="padding-left: 5px;padding-right: 5px;font-size: 12px;font-family: 微软雅黑;margin: 0 auto;text-align: left;line-height: 24px;color: #fff;background-color: #00427F;"
  >
    <tr>
      <td style="font-family: 微软雅黑;">
        欲了解关于英特尔
        <sup>®</sup>技术合作伙伴更多信息，请访问我们的网站：
      </td>
    </tr>
    <tr>
      <td style="font-family: 微软雅黑;height: 5px;"></td>
    </tr>
    <tr>
      <td style="font-family: 微软雅黑;">
        <a
          href="https://www.intel.com/technologyprovider"
          target="_blank"
          style="color: #FE9712;"
        >www.intel.com/technologyprovider</a>
      </td>
    </tr>
    <tr>
      <td style="font-family: 微软雅黑;height: 5px;"></td>
    </tr>
    <tr>
      <td style="font-family: 微软雅黑;">
        您接收到这封邮件，是因为您选择加入了英特尔新闻简报邮件发送名单。请点击
        <a
          href="https://techprovider.intel.com/cn-zh-subscription-management"
          target="_blank"
          style="color: #fff; text-decoration: underline"
        >此处</a>
        退订新闻简报。一旦您选择退订这份新闻简报，您的信息将从英特尔
        <sup>®</sup>技术合作伙伴新闻简报邮件发送名单中删除。如果您想要退订英特尔的其它邮件通知，请直接回复相应邮件即可。
      </td>
    </tr>
    <tr>
      <td style="font-family: 微软雅黑;height: 10px;"></td>
    </tr>
    <tr>
      <td style="font-family: 微软雅黑;">
        <a
          href="https://www.intel.cn/content/www/cn/zh/legal/trademarks.html?_ga=2.191392874.1945595149.1539775122-1852750348.1539774686&erpm_id=2978511"
          target="_blank"
          style="color: #fff; text-decoration: underline"
        >法律声明</a>&nbsp;&nbsp;与&nbsp;
        <a
          href="https://www.intel.cn/content/www/cn/zh/privacy/intel-privacy-notice.html"
          target="_blank"
          style="color: #fff; text-decoration: underline"
        >隐私条款</a>©2019英特尔公司。
      </td>
    </tr>
    <tr>
      <td style="font-family: 微软雅黑;height: 40px;"></td>
    </tr>
  </table>
</template>

<script>
export default {
  props: {
    width: {
      default: "634",
      type: String
    },

    type: {
      default: "default",
      type: String
    }
  }
};
</script>

