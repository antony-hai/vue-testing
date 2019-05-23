<template>
  <table align="center" style="text-align: center; font-family: 微软雅黑; margin: 0 auto;"
  >
    <tr>
      <td>
        <!-- 固定好的标题 -->
        <Nav width="600"></Nav>
        <!-- 抬头的图片 -->
        <ImageRow  width="600" imgUrl="http://show.easeye.com.cn/fckattach/2018-04-17/e3b9e77152a2095d72521d1898764e2d/image/face9686a126c31e936870d7c956b970.jpg"></ImageRow>

        <StanceTable hasTop hasBottom width="600">
          <tr>
            <TCell>尊敬的英特尔<Sup></Sup>技术合作伙伴，</TCell>
          </tr>
          <tr height="10"></tr>
          <tr>
            <TCell>
              由于亚马逊（中国）业务调整，<u><b>亚马逊电子礼品卡将于2019年5月10日18:00正式从英特尔<Sup></Sup>渠道积分网站下架 。</b></u>
            </TCell>
          </tr>
          <tr height="10"></tr>
          <tr>
            <TCell>
              温馨提示：<u>您已兑换的亚马逊电子礼品卡<b>自2019年7月18日（含）起</b>，在亚马逊官方网站中仅适用于购买<b>Kindle和电子书</b>。</u>
            </TCell>
          </tr>
          <tr height="10"></tr>
          <tr>
            <TCell>
              特别提示：鉴于亚马逊业务调整，亚马逊电子礼品卡可购买的产品将会逐渐减少，<u><b>请您尽快使用已兑换的礼品卡</b></u>。对于已兑换的亚马逊电子礼品卡，其使用范围及使用期限等信息，请以亚马逊官方通知为准，若有变更，敬请谅解。
            </TCell>
          </tr>
          <tr height="10"></tr>
          <tr>
            <TCell>
              请不要回复此邮箱发出的邮件；如您有任何问题，请联系英特尔客户支持。
            </TCell>
          </tr>
          <tr height="10"></tr>
          <tr>
            <TCell>
              英特尔客户支持服务电话：<br>
              中国大陆：400-920-2200（座机和手机皆可拨打）；800-820-1100（支持座机拨打）<br>
              中国香港/澳门：（852）2-844-4456 <br>
              联系邮箱：<a href="mailto: programs@intel.com">programs@intel.com</a><br>
              服务时间：周一至周五，上午9:00 - 下午17:00（法定节假日除外）
            </TCell>
          </tr>
        </StanceTable>

        <Footer width="600"></Footer>
      </td>
    </tr>
  </table>
</template>

<script>
import { Nav, ImageRow, StanceTable, Sup, TCell, Footer1 } from "@/components/edm";

export default {
  // data() {},
  components: {
    Nav,
    ImageRow,
    StanceTable,
    Sup,
    TCell,
    Footer: Footer1,
  },
};
</script>
