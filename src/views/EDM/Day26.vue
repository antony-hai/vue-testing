<template>
  <table align="center" style="text-align: center; font-family: 微软雅黑; margin: 0 auto;">
    <tr>
      <td>
        <Nav></Nav>

        <ImageRow imgUrl="http://show.easeye.com.cn/fckattach/2018-04-17/e3b9e77152a2095d72521d1898764e2d/image/face9686a126c31e936870d7c956b970.jpg"></ImageRow>

        <StanceTable hasTop hasBottom>
          <tr>
            <td style="font-size:13px;text-align: left; font-family: 微软雅黑; line-height: 24px;"><b>尊敬的英特尔<Sup></Sup>合作伙伴：</b></td>
          </tr>
          <tr height='10'></tr>
          <tr>
            <td style="font-size:13px;text-align: left; font-family: 微软雅黑; line-height: 24px;"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;您好！非常感谢您一直以来对英特尔的关注与支持，在此衷心地祝您生意兴隆！</td>
          </tr>
          <tr height='10'></tr>
          <tr>
            <td style="font-size:13px;text-align: left; font-family: 微软雅黑; line-height: 24px;"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              如您计划参加2019年5月14日至16日举办的Intel<Sup></Sup> Partner Connect 2019活动，在您成功注册参加该活动之后至2019年4月22日，
              您可通过登录<a href="http://prc-points.inteltechnologyprovider.com/" target="_blank" rel="noopener noreferrer">英特尔<Sup></Sup>渠道积分网站</a> 使用积分兑换携程礼品卡（任我行）电子券，用于预订前往澳大利亚悉尼参加该活动的往返机票。
              该电子券有人民币100元/200元/300元/500元/1000元共计5个面值，每个面值您最多可兑换五张。请登录<a href="http://prc-points.inteltechnologyprovider.com/" target="_blank" rel="noopener noreferrer">英特尔<Sup></Sup>渠道积分网站</a>了解更多详情。
            </td>
          </tr>

        </StanceTable>

        <StanceTable hasBottom>
          <tr>
            <TCell :ostyle="{ 'font-size': '13px', 'line-height': '24px'}">
              <b>温馨提示：</b>
            </TCell>
          </tr>
          <tr height="10"></tr>
          <tr>
            <TCell>
              <ListTable :dataSource="dataSource1" :tStyle="{ 'font-size': '13px', 'line-height': '24px'}" ></ListTable>
            </TCell>
          </tr>
        </StanceTable>

        <StanceTable hasTop>
          <tr>
            <td style="font-size:13px;text-align: left; font-family: 微软雅黑; line-height: 24px;"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;再次衷心感谢您一直以来对英特尔的关心与支持，期待与您在澳大利亚悉尼活动现场会面。如对本函有疑问，请您联系英特尔<Sup></Sup>客户支持:</td>
          </tr>
        </StanceTable>
        <StanceTable hasTop>
          <tr>
            <TCell width="60"></TCell>
            <TCell :ostyle="{ 'font-size': '13px', 'line-height': '24px'}" width="74">服务电话：</TCell>
            <TCell :ostyle="{ 'font-size': '13px', 'line-height': '24px'}">
              <StanceTable width="500">
                <tr>
                  <TCell :ostyle="{ 'font-size': '13px', 'line-height': '24px'}" width="100">中国大陆：</TCell>
                  <TCell :ostyle="{ 'font-size': '13px', 'line-height': '24px'}">400-920-2200 （座机和手机皆可拨打）</TCell>
                </tr>
                <tr>
                  <TCell :ostyle="{ 'font-size': '13px', 'line-height': '24px'}" width="100"></TCell>
                  <TCell :ostyle="{ 'font-size': '13px', 'line-height': '24px'}">800-820-1100 （支持座机拨打）</TCell>
                </tr>
                <tr>
                  <TCell :ostyle="{ 'font-size': '13px', 'line-height': '24px'}" width="100">中国香港/澳门：</TCell>
                  <TCell :ostyle="{ 'font-size': '13px', 'line-height': '24px'}">（852）2-844-4456</TCell>
                </tr>
              </StanceTable>
            </TCell>
          </tr>
          <tr>
            <TCell width="60"></TCell>
            <TCell :ostyle="{ 'font-size': '13px', 'line-height': '24px'}" width="74">联系邮箱：</TCell>
            <TCell :ostyle="{ 'font-size': '13px', 'line-height': '24px'}"><a href="mailto:programs@intel.com">programs@intel.com</a> </TCell>
          </tr>
          <tr>
            <TCell width="60"></TCell>
            <TCell :ostyle="{ 'font-size': '13px', 'line-height': '24px'}" width="74">服务时间：</TCell>
            <TCell :ostyle="{ 'font-size': '13px', 'line-height': '24px'}">周一至周五，上午9:00 – 下午17:00（法定节假日除外）</TCell>
          </tr>
          <tr height="20"></tr>
        </StanceTable>
        <Footer></Footer>
      </td>
    </tr>
  </table>
</template>

<script>

import {
  Nav, StanceTable, ListTable, LinkBtn, ImageRow, Sup, IconText, Footer1 as Footer, TCell,
} from '@/components/edm'

export const dataSource1 = [
  {
    text: "携程礼品卡（任我行）电子券兑换<b>截止日期为2019年4月22日（含）</b>，请于此日期前登录<a href='http://prc-points.inteltechnologyprovider.com/' target='_blank'>英特尔<sup>®</sup>渠道积分网站</a>兑换，逾期该礼品将下架。"
  },
  {
    text:"成功兑换后，您将在两周左右收到携程礼品卡（任我行）电子券；为确保您能及时预订机票，请尽早兑换携程礼品卡（任我行）电子券并开始预订行程。"
  },
  {
    text:"成功兑换的携程礼品卡（任我行）电子券将以短息形式发送至您的手机号码（包含礼品卡券号和密码），请务必确保下单时所填手机号码正确，以保障您的权益。如因兑换时手机号码填写错误导致您权益受损，请理解英特尔将不承担任何责任。"
  },
  {
    text:"携程礼品卡（任我行）电子券使用方法：登录携程旅行网<a href='www.ctrip.com' target='_blank'>www.ctrip.com</a> 或者进入“携程旅行APP”，点击“礼品卡”频道，点击“领用礼品卡”，输入券号和密码即可开始使用；"
  },
  {
    text:"如您是国有企业员工或者其他《美国海外反腐败法》（Foreign Corrupt Practices Act）所定义的“外国政府公务员”（Foreign Government Officials），请您按照英特尔所要求的方式，向英特尔书面告知您的姓名、职务与所属单位。英特尔将根据您提供的信息，自行判断是否可以为您提供本次活动中的礼品。"
  },
  {
    text:"此兑换活动仅可由参加Intel<sup>®</sup> Partner Connect 2019活动的英特尔<sup>®</sup>合作伙伴尊享，转发无效。"
  },
];



export default {
  data() {
    return {
      dataSource1,
    };
  },
  components: {
    Nav,
    StanceTable,
    ListTable,
    LinkBtn,
    ImageRow,
    Sup,
    IconText,
    Footer,
    TCell,
  }
};
</script>

