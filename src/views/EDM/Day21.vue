<template>
  <table align="center" style="text-align: center; font-family: 微软雅黑; margin: 0 auto;">
    <tr>
      <td>

        <Nav></Nav>

        <ImageRow imgUrl="http://show.easeye.com.cn/fckattach/2018-04-17/e3b9e77152a2095d72521d1898764e2d/image/face9686a126c31e936870d7c956b970.jpg"></ImageRow>

        <StanceTable hasTop hasBottom>
          <tr>
            <TCell :ostyle="{ 'font-size': '14px', 'line-height': '26px'}"><b>尊敬的英特尔<Sup></Sup>技术合作伙伴：</b></TCell>
          </tr>
          <tr height="5"></tr>
          <tr>
            <TCell :ostyle="{ 'font-size': '14px', 'line-height': '26px'}">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;您好！为加强英特尔与您的合作，共同探构一个共联、共享、共赢的生态，英特尔特别推出“京东E卡等您来领——立即更新英特尔<Sup></Sup>技术合作伙伴账户信息”活动。</TCell>
          </tr>
        </StanceTable>

        <StanceTable>
          <tr height="20">
            
          </tr>
          <tr>
            <td width="434" valign="top">
              <StanceTable width="434">
                <tr>
                  <TCell :ostyle="{ 'font-size': '14px', 'line-height': '26px'}">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;即日起至2018年12月31日，动动手指完成以下两个动作，您即有机会获得由英特尔赠送的100元面值京东E卡
                  </TCell>
                </tr>
                <tr height="15"></tr>
                <tr>
                  <td align="center" valgin='top'>
                    <StanceTable width="434" :ostyle="{ 'font-size': '14px', 'line-height': '26px'}">
                      <IconText hasSpace imgUrl="http://show.easeye.com.cn/fckattach/2018-06-28/e3b9e77152a2095d72521d1898764e2d/image/c81e728d9d4c2f636f067f89cc14862c.jpg">更新您的英特尔<Sup></Sup>技术合作伙伴账户信息</IconText>
                      <IconText hasSpace imgUrl="http://show.easeye.com.cn/fckattach/2018-06-28/e3b9e77152a2095d72521d1898764e2d/image/c81e728d9d4c2f636f067f89cc14862c.jpg">扫描右侧二维码，关注“英特尔合作伙伴集结号”微信公众号并绑定会员账号</IconText>
                    </StanceTable>
                  </td>
                </tr>
              </StanceTable>
            </td>
            <td width="200" align="center" valign="middle">
              <img width ="160" src="http://show.easeye.com.cn/fckattach/2018-12-12/e3b9e77152a2095d72521d1898764e2d/image/2382c315a6ba396be1932dd8dafaff52.png" alt="">
            </td>
          </tr>
        </StanceTable>
        
        <StanceTable>
          <tr height="20"></tr>
          <tr>
            <TCell :ostyle="{ 'font-size': '14px', 'line-height': '26px'}">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;请确保您在绑定会员账号时提供的信息与您在<a style="text-decoration: underline;" href="https://www.intel.com/content/www/cn/zh/secure/my-intel/profile.html" target="_blank" rel="noopener noreferrer">英特尔<SUp></SUp>技术合作伙伴网站</a>中提供的信息一致。京东E卡赠送以信息一致的会员账号绑定时间为准，数量有限，送完即止。
            </TCell>
          </tr>
          <tr height="20"></tr>
          <tr>
            <TCell :ostyle="{ 'font-size': '14px', 'line-height': '26px'}">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;具体如何操作，请点击<a href="https://prc-points.inteltechnologyprovider.com/sites/static/public/proc/%E4%B8%89%E6%AD%A5%E8%B5%B0%EF%BC%8C%E5%85%8D%E8%B4%B9%E8%8E%B7%E5%BE%97%E4%BA%AC%E4%B8%9CE%E5%8D%A1-Final.pdf" target="_blank" rel="noopener noreferrer">此处</a>查看。赠送将在2019年1月中旬通过“英特尔合作伙伴集结号”微信公众号发放，届时将有微信消息通知获赠的会员，敬请关注并及时领取。
            </TCell>
          </tr>
        </StanceTable>

        <StanceTable>
          <tr height="20"></tr>
          <tr>
            <TCell :ostyle="{ 'font-size': '14px', 'line-height': '26px'}">
              <b>温馨提示：</b>
            </TCell>
          </tr>
          <tr height='10'></tr>
          <tr>
            <td>
              <ListTable :dataSource="listData1" hasSpace listType="●" :tStyle="{ 'font-size': '14px', 'line-height': '26px'}"></ListTable>
            </td>
          </tr>
        </StanceTable>

        <StanceTable>
          <tr>
            <td width="40"></td>
            <TCell :ostyle="{ 'font-size': '13px', 'line-height': '24px'}">服务电话：400-920-2200（座机和手机皆可拨打）；800-820-1100（支持座机拨打）</TCell>
          </tr>
          <tr>
            <td width="40"></td>
            <TCell :ostyle="{ 'font-size': '13px', 'line-height': '24px'}">联系邮箱：<a style="text-decoration:underline;" href="mailto:programs@intel.com ">programs@intel.com</a>  </TCell>
          </tr>
          <tr>
            <td width="40"></td>
            <TCell :ostyle="{ 'font-size': '13px', 'line-height': '24px'}">服务时间：周一至周五，上午9:00 - 下午17:00（法定节假日除外）</TCell>
          </tr>
        </StanceTable>

        <StanceTable>
          <tr height="20"></tr>
          <tr>
            <TCell :ostyle="{ 'font-size': '14px', 'line-height': '26px'}">
              <b>说明&条款</b>
            </TCell>
          </tr>
          <tr height="20"></tr>
          <tr>
            <TCell :ostyle="{ 'font-size': '14px', 'line-height': '26px'}">
              如您扫描以上英特尔合作伙伴集结号微信号二维码，您将同意英特尔通过本微信号向您发送有关产品推广、市场调研、业务培训和其他市场活动的信息。
              您可在任何时候取消关注本微信号。英特尔的微信号、网站、所发送信息及其对个人信息的使用，均遵循英特尔的<a style="text-decoration: underline" href="https://www.intel.com/content/www/us/en/privacy/intel-privacy-notice.html" target="_blank" rel="noopener noreferrer">隐私条款</a>和<a style="text-decoration: underline" href="https://www.intel.com/content/www/us/en/legal/terms-of-use.html" target="_blank" rel="noopener noreferrer">使用条款</a> 。
            </TCell>
          </tr>
          <tr height="30"></tr>
        </StanceTable>
        <Footer></Footer>
        <StanceTable>
          <tr>
            <TCell :ostyle="{ 'font-size': '14px', 'line-height': '26px'}">本活动最终解释权归英特尔所有。</TCell>
          </tr>
        </StanceTable>
      </td>
    </tr>
  </table>
</template>

<script>
import {
  TCell,
  Nav,
  StanceTable,
  ListTable,
  LinkBtn,
  ImageRow,
  Sup,
  IconText,
  Footer1,
  DataTable,
} from "@/components/edm";

const column1 = [
  {
    title: "符合条件的七彩虹主板",
    dataIndex: "text1",
    align: 'left',
  },
  {
    title: "积分/单位",
    dataIndex: "text2"
  },

];
const tableData1 = [
  {"text1":"Colorful 战斧 C.Z370M-DH V20","text2":"30"},{"text1":"Colorful 网驰 B360M-E PRO V21","text2":"24"},{"text1":"Colorful 断剑 H310M-E V20","text2":"12"}
];

const column = [
  {
    title: "符合条件的英特尔产品(50积分/单位)",
    dataIndex: "text1",
    align: 'left'
  },
];
const tableData = [
  {"text1":"Intel<sup>®</sup> Optane™ Memory Series -MEMPEK1W016GA"},{"text1":"Intel<sup>®</sup> Optane™ Memory Series -MEMPEK1W016GAX1"},{"text1":"Intel<sup>®</sup> Optane™ Memory Series -MEMPEK1W016GAXT"},{"text1":"Intel<sup>®</sup> Optane™ Memory Series- MEMPEK1W032GA"},{"text1":"Intel<sup>®</sup> Optane™ Memory Series- MEMPEK1W032GAX1"},{"text1":"Intel<sup>®</sup> Optane™ Memory Series- MEMPEK1W032GAXT"},{"text1":"Intel<sup>®</sup> Optane™ Memory M10 Series- MEMPEK1J064GA"},{"text1":"Intel<sup>®</sup> Optane™ Memory M10 Series -MEMPEK1J016GA"},{"text1":"Intel<sup>®</sup> Optane™ Memory M10 Series -MEMPEK1J032GA "}
];

const listData1 = [
  { text: '本活动转发无效。'},
  { text: '本次活动仅对英特尔<sup>®</sup>技术合作伙伴开放，且相关奖励仅可由上述主体在英特尔<sup>®</sup>登记的主要联系人代表上述主体并以上述主体的名义领取。在本次活动中，上述主体及其主要联系人均将遵守对其适用的各项法律，包括有关反商业贿赂及反不正当竞争的各项法律法规。'},
  { text: '100元面值京东E卡的使用遵循京东E卡使用规则。'},
  { text: '如有任何问题，请联系英特尔<sup>®</sup>客户支持：'},
]
const listData2 = [
  { text: '在本次促销活动中赚取无上限积分；'},
  { text: '可同时参与本次促销活动和其他积分活动；'},
  { text: '不可同时参加针对本次促销活动中符合条件的英特尔产品所进行的其他英特尔通知的折扣或促销活动，不论折扣或促销活动是针对本促销活动的合格会员，或是代表合格会员的第三方；'},
  { text: '不可以转让此次促销活动中赚取的积分；且'},
  { text: '不可以变现此次促销活动中赚取的积分。'},
]
const listData3 = [
  { text: '撤销合格会员在此次促销活动中原可获得的积分奖励；'},
  { text: '调整合格会员在此次促销活动中获取积分奖励的数额；'},
  { text: '不允许您兑换在此次促销活动中获取的奖励积分；'},
  { text: '用合格会员现有的积分或未来赚取的积分抵销合格会员通过此次促销活动赚取并已用于兑换的全部（或部分）奖励积分；并且/或'},
  { text: '索回合格会员在本次促销活动中赚取的且已用于兑换的全部（或部分）奖励积分之价值。'},
]

export default {
  data() {
    return {
      column,
      column1,
      tableData,
      tableData1,
      listData1,
      listData2,
      listData3,
      iconUrl:
        "http://show.easeye.com.cn/fckattach/2018-06-28/e3b9e77152a2095d72521d1898764e2d/image/c81e728d9d4c2f636f067f89cc14862c.jpg"
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
    Footer: Footer1,
    DataTable,
    TCell
  }
};
</script>

