<template>
  <table align="center" style="text-align: center; font-family: 微软雅黑; margin: 0 auto;">
    <tr>
      <td>

        <Nav></Nav>

        <ImageRow imgUrl="http://show.easeye.com.cn/fckattach/2018-12-13/e3b9e77152a2095d72521d1898764e2d/image/2382c315a6ba396be1932dd8dafaff52.png"></ImageRow>

        <StanceTable hasTop hasBottom>
          <tr>
            <TCell :ostyle="{ 'font-size': '14px', 'line-height': '26px'}"><b>尊敬的英特爾<Sup></Sup>技術合作夥伴：</b></TCell>
          </tr>
          <tr height="5"></tr>
          <tr>
            <TCell :ostyle="{ 'font-size': '14px', 'line-height': '26px'}">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;您好！感謝貴公司一直以來對英特爾的大力支持，在此我們很高興地通知您，
              英特爾<Sup></Sup>渠道積分網站已經正式向香港和澳門地區的英特爾<Sup></Sup>技術合作夥伴開放。我們誠摯地邀請您登錄英特爾<Sup></Sup>渠道積分網站，開啟您的積分兌換之旅！</TCell>
          </tr>
          <tr height="5"></tr>
          <tr>
            <TCell :ostyle="{ 'font-size': '14px', 'line-height': '26px'}">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;英特爾<Sup></Sup>渠道積分是為英特爾<Sup></Sup>技術合作夥伴提供的一項會員權益。您可以登錄<a style="text-decoration: underline" href="https://prc-points.inteltechnologyprovider.com/" target="_blank" rel="noopener noreferrer">英特爾<Sup></Sup>渠道積分網站</a>查看會員權益，
              獲取當季度符合條件的英特爾產品清單、最新的促銷活動等資訊，並可使用您的積分兌換禮品。</TCell>
          </tr>
          <tr height="5"></tr>
          <tr>
            <TCell :ostyle="{ 'font-size': '14px', 'line-height': '26px'}">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;當前可供兌換的禮品為英特爾總代理電子代金券-聯強國際代金券。如您有足夠積分
              ，可使用積分兌換聯強國際代金券。您在香港從聯強國際購買英特爾<Sup></Sup>盒裝處理器時，
              可使用該代金券抵扣您需要付款的金額。關於如何兌換和使用聯強國際代金券，請點擊 <a style="text-decoration: underline" href="https://prc-points.inteltechnologyprovider.com/sites/static/public/proc/Voucher%20Redeem%20%26%20Usage%20Process-Synnex.pdf" target="_blank" rel="noopener noreferrer">此處</a> 查看。</TCell>
          </tr>
          <tr height="5"></tr>
          <tr>
            <TCell :ostyle="{ 'font-size': '14px', 'line-height': '26px'}">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;想更多瞭解英特爾<Sup></Sup>技術合作夥伴計畫及相關權益，請點擊查看<a style="text-decoration: underline" href="https://prc-points.inteltechnologyprovider.com/sites/static/public/proc/Intel%20Technology%20Provider%20Program%20Introduction-%20for%20HK%20Macau.pdf" target="_blank" rel="noopener noreferrer">《英特爾<Sup></Sup>技術合作夥伴計劃指南》</a>。</TCell>
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
              <ListTable :dataSource="listData1" hasSpace :tStyle="{ 'font-size': '14px', 'line-height': '26px'}"></ListTable>
            </td>
          </tr>
        </StanceTable>

        <StanceTable>
          <tr>
            <td width="40"></td>
            <TCell :ostyle="{ 'font-size': '13px', 'line-height': '24px'}">服務電話：（852）2-844-4456</TCell>
          </tr>
          <tr>
            <td width="40"></td>
            <TCell :ostyle="{ 'font-size': '13px', 'line-height': '24px'}">聯繫郵箱：<a style="text-decoration:underline;" href="mailto:programs@intel.com ">programs@intel.com</a>  </TCell>
          </tr>
          <tr>
            <td width="40"></td>
            <TCell :ostyle="{ 'font-size': '13px', 'line-height': '24px'}">服務時間：週一至週五，上午9:00 - 下午17:00（法定公休日除外）</TCell>
          </tr>
          <tr height="20"></tr>
        </StanceTable>
        
        <Footer isHongKong></Footer>

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
  { text: '請確保您的會員帳戶已為激活狀態。如未激活，您將無法參與積分獎勵計畫，獲取積分獎勵；如對激活流程有任何問題，請點擊<a style="text-decoration: underline" href="https://prc-points.inteltechnologyprovider.com/sites/static/public/proc/How%20To%20Enroll%20Points%20Aug%202018-ITP.pdf" target="_blank">《英特爾<sup>®</sup>渠道積分會員帳戶激活流程》</a>或聯繫英特爾<sup>®</sup>客戶支持尋求幫住。'},
  { text: '英特爾<sup>®</sup>渠道積分有效期為<b><u>一年</u></b>，每季度末，系統將自動清零您帳戶中本季度到期的積分，請您定期關注並及時消費您的積分。'},
  { text: '請確保您的帳戶資訊安全。 依照英特爾的網站使用條款<a style="text-decoration: underline" href="https://www.intel.cn/content/www/cn/zh/legal/terms-of-use.html" target="_blank">（https://www.intel.cn/content/www/cn/zh/legal/terms-of-use.html）</a>，凡以您的帳戶在英特爾網站上進行的操作，均視為您的操作並由您負責；如果您的帳戶、密碼等資訊有誤或發生洩露，導致您的權益受損，請理解英特爾將不承擔任何責任。'},
  { text: '如您有疑問，請點擊查看<a style="text-decoration: underline" href="https://prc-points.inteltechnologyprovider.com/help-support/faq" target="_blank">英特爾<sup>®</sup>渠道積分常見問題解答。</a>'},
  { text: '如有其他問題，請您聯繫英特爾<sup>®</sup>客戶支持：'},
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

