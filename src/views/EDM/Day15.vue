<template>
  <table align="center" style="text-align: center; font-family: 微软雅黑; margin: 0 auto;">
    <tr>
      <td>
        <Nav></Nav>

        <ImageRow imgUrl="http://show.easeye.com.cn/fckattach/2018-04-17/e3b9e77152a2095d72521d1898764e2d/image/face9686a126c31e936870d7c956b970.jpg"></ImageRow>

        <StanceTable hasTop hasBottom>
          <tr>
            <td style="font-size:12px;text-align: left; font-family: 微软雅黑; line-height: 22px;">尊敬的英特尔<Sup></Sup>发烧友PC专家{[CS-CompanyName]}：</td>
          </tr>
          <tr height='10'></tr>
          <tr>
            <td style="font-size:12px;text-align: left; font-family: 微软雅黑; line-height: 22px;">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              贵司好！非常感谢贵公司一直以来对英特尔的大力支持！特此告知贵司2020年第三季度发烧友PC专家台式机常规奖励计划，如下：
            </td>
          </tr>
        </StanceTable>

        <StanceTable>
          <tr>
            <TCell width="25">1.</TCell>
            <TCell>
              本促销活动受以下条款和条件约束（“促销条款”），此外仍须遵守英特尔<Sup></Sup>技术合作伙伴的条款和条件，包括附录A与积分补充条款和条件（“英特尔<Sup></Sup>技术合作伙伴条款”），该条款为本促销条款的一部分，其详情可在此网址查询：
              <a href="https://www.intel.com/content/www/us/en/technology-provider/legal/program-terms-and-conditions.html" target="_blank">https://www.intel.com/content/www/us/en/technology-provider/legal/program-terms-and-conditions.html</a>
              促销条款和英特尔<Sup></Sup>技术合作伙伴条款统称为“活动规则”。
            </TCell>
          </tr>
          <tr>
            <TCell width="25">2.</TCell>
            <TCell>本奖励计划有效期为2020年1月1日至2020年3月31日（“活动期间”），适用对象为中华人民共和国（仅为本促销条款的目的，系指不包括香港、澳门和台湾的境内地区）的英特尔<Sup></Sup>技术合作伙伴中已激活的至尊发烧友PC专家会员</TCell>
          </tr>
          <tr>
            <TCell width="25">3.</TCell>
            <TCell>在活动期间，对合格会员从英特尔<Sup></Sup>授权总代理（“IAD”）、英特尔<Sup></Sup>授权集成供应商（“IACS”）或英特尔<Sup></Sup>批准供应商（“IAS”）[视具体情况而定]购买的如下列表中的英特尔产品（“符合条件的英特尔<Sup></Sup>产品”），英特尔将实行以下积分奖励：</TCell>
          </tr>
        </StanceTable>

        <StanceTable hasTop>
          <tr>
            <td>
              <DataTable :dataSource="tableData1" :column="column1" :headStyle="{'background-color': '#0070C0', color: '#ffffff'}"></DataTable>
            </td>
          </tr>
        </StanceTable>


        <StanceTable hasTop hasBottom>
          <tr>
            <TCell width="25">4.</TCell>
            <TCell>
              在此次促销活动中，购买参与活动英特尔产品的积分赚取日期为购买英特尔产品的发票开具日期。英特尔将在促销结束后60（六十）天内，根据规则，向符合条件且遵守各项规则的合作伙伴发放在本次促销活动中奖励的积分。
            </TCell>
          </tr>          
          <tr>
            <TCell width="25">5.</TCell>
            <TCell>
              合格会员将：
              <ListTable :dataSource="dataSource1" width="608" isLetter></ListTable>
            </TCell>
          </tr>
          <tr>
            <TCell width="25">6.</TCell>
            <TCell>
              在不影响活动规则所规定的任何权利和救济措施以及法律规定的任何其他权利和救济措施的前提下，如果您未能遵守活动规则，英特尔有权选择：
              <ListTable :dataSource="dataSource2" width="608" isLetter></ListTable>
            </TCell>
          </tr>
          <tr>
            <TCell width="25">7.</TCell>
            <TCell>若本促销活动条款和条件与ITP项目条款和条件存在冲突，应以此促销条款和条件为准。
              任何英特尔商标许可协议和/或英特尔标识许可协议的条款均应优先于本促销活动条款和条件中涉及上述协议内容的条款。除非英特尔授权代表书面签署，
              英特尔的标准销售条款和条件将适用于任何合格会员与英特尔之间发生的英特尔产品购买或积分兑换等交易，且在适用中优先于任何其他协议。
            </TCell>
          </tr>

          <tr>
            <TCell width="25">8.</TCell>
            <TCell>
              本促销条款中未另行定义的大写术语与在ITP项目条款中的大写术语具有相同含义。
            </TCell>
          </tr>
          <tr>
            <TCell width="25">9.</TCell>
            <TCell>合格会员接受本促销活动中的积分表示您接受此促销活动条款和条件。</TCell>
          </tr>
          <tr>
            <TCell width="25">10.</TCell>
            <TCell>英特尔保留以任何形式通知客户的方式，随时修改、暂停或终止此次促销活动的权利，且上述修改、暂停或终止应立即生效，但不影响促销活动中已累积的任何权益，除此之外英特尔不因上述修改、暂停或终止而承担任何责任。</TCell>
          </tr>
          <tr>
            <TCell width="25">11.</TCell>
            <TCell>依照英特尔的网站使用条款<a href="https://www.intel.cn/content/www/cn/zh/legal/terms-of-use.html" target="_blank">（https://www.intel.cn/content/www/cn/zh/legal/terms-of-use.html）</a>，凡以您的账户在英特尔网站上进行的操作，均视为您的操作并由您负责；如果您的账户、密码等信息有误或发生泄露，导致您的权益受损，请理解英特尔将不承担任何责任。</TCell>
          </tr>
        </StanceTable>

        <!-- ------------------------------------ english part -->


        <Footer hasExplain></Footer>
      </td>
    </tr>
  </table>
</template>

<script>

import { TCell, Nav, StanceTable, ListTable, DataTable, Footer1, Sup, ImageRow } from '@/components/edm'

const dataSource1 = [
  { text: "在本次促销活动中最多可获取500,000积分；" },
  { text: "可同时参与本次促销活动和其他积分活动；" },
  { text: "不可同时参加针对本次促销活动中符合条件的英特尔产品所进行的其他英特尔通知的折扣或促销活动，不论折扣或促销活动是针对本促销活动的合格会员，或是代表合格会员的第三方；" },
  { text: "不可以转让此次促销活动中赚取的积分；且" },
  { text: "不可以变现此次促销活动中赚取的积分。" }
];
const dataSource2 = [
  { text: "撤销合格会员在此次促销活动中原可获得的积分奖励；" },
  {
    text: "调整合格会员在此次促销活动中获取积分奖励的数额；"
  },
  { text: "不允许您兑换在此次促销活动中获取的奖励积分；" },
  { text: "用合格会员现有的积分或未来赚取的积分抵销合格会员通过此次促销活动赚取并已用于兑换的全部（或部分）奖励积分；并且/或" },
  { text: "索回合格会员在本次促销活动中赚取的且已用于兑换的全部（或部分）奖励积分之价值。" }
];
const dataSource3 = [
  {
    text:"earn unlimited points under this Promotion;"
  },
  {
    text: "combine this Promotion with other Points offers;"
  },
  { text: "will not combine this Promotion with other discounts or promotions on Qualifying Intel Products whether offered to the Eligible Partner, or to a third party on its behalf, as notified by Intel;" },
  { text: "not transfer Points under this Promotion; and" },
  { text: "not receive cash alternatives for Points under this Promotion." },
];

const dataSource4 = [
  { text: "withhold the Points that would otherwise be awarded to Eligible Partner under the Promotion;  " },
  { text: "adjust the number of Points to be awarded to Eligible Partner under the Promotion;" },
  { text: "refuse to allow redemption of Points awarded under the Promotion; " },
  { text: "set–off the entire (or part) value of the Points awarded under the Promotion that Eligible Partner has redeemed, against Eligible Partner’s existing or future credit claims; and/or" },
  { text: "obtain reimbursement of the entire (or part) value of the Points awarded to Eligible Partner under the Promotion that Eligible Partner has redeemed." },
];

const column1 = [
  {
    title: "产品类型",
    dataIndex: "text1",
    align: 'left',
    width: 100,
  },
  {
    title: "产品型号",
    dataIndex: "text2",

  },
  {
    title: "产品积分",
    dataIndex: "text3",
    width: 100
  },
  {
    title: "额外积分",
    dataIndex: "text4",
    width: 100,
    // align: 'left',
  },
  // {
  //   title: "产品积分",
  //   dataIndex: "text5",
  //   width: 100,
  // },
  // {
  //   title: "额外积分",
  //   dataIndex: "text6",
  //   width: 100,
  // },


];

const tableData1 = [
  {"text1":"Core i3","text2":"Intel<sup>®</sup>\n    Core™ i3-8100 Processor","text3":"20","text4":"　"},{"text1":"Intel<sup>®</sup>\n    Core™ i3-8100T Processor","text2":"20","text3":"　"},{"text1":"Intel<sup>®</sup>\n    Core™ i3-8300 Processor","text2":"20","text3":"　"},{"text1":"Intel<sup>®</sup>\n    Core™ i3-8300T Processor","text2":"20","text3":"　"},{"text1":"Intel<sup>®</sup>\n    Core™ i3-8350K Processor","text2":"25","text3":"5"},{"text1":"Intel<sup>®</sup>\n    Core™ i3-9100 Processor","text2":"20","text3":"　"},{"text1":"Intel<sup>®</sup>\n    Core™ i3-9100F Processor","text2":"20","text3":"　"},{"text1":"Intel<sup>®</sup>\n    Core™ i3-9100T Processor","text2":"20","text3":"　"},{"text1":"Intel<sup>®</sup>\n    Core™ i3-9300 Processor","text2":"20","text3":"　"},{"text1":"Intel<sup>®</sup>\n    Core™ i3-9300T Processor","text2":"20","text3":"　"},{"text1":"Intel<sup>®</sup>\n    Core™ i3-9320 Processor","text2":"20","text3":"　"},{"text1":"Intel<sup>®</sup>\n    Core™ i3-9350K Processor","text2":"25","text3":"5"},{"text1":"Intel<sup>®</sup>\n    Core™ i3-9350KF Processor","text2":"25","text3":"5"},{"text1":"Core i5","text2":"Intel<sup>®</sup>\n    Core™ i5-7400 Processor","text3":"21","text4":"　"},{"text1":"Intel<sup>®</sup>\n    Core™ i5-7400T Processor","text2":"21","text3":"　"},{"text1":"Intel<sup>®</sup>\n    Core™ i5-7500 Processor","text2":"21","text3":"　"},{"text1":"Intel<sup>®</sup>\n    Core™ i5-7500T Processor","text2":"21","text3":"　"},{"text1":"Intel<sup>®</sup>\n    Core™ i5-7600 Processor","text2":"21","text3":"　"},{"text1":"Intel<sup>®</sup>\n    Core™ i5-7600K Processor","text2":"21","text3":"5"},{"text1":"Intel<sup>®</sup>\n    Core™ i5-7600T Processor","text2":"21","text3":"　"},{"text1":"Intel<sup>®</sup>\n    Core™ i5-8400 Processor","text2":"30","text3":"　"},{"text1":"Intel<sup>®</sup>\n    Core™ i5-8400T Processor","text2":"30","text3":"　"},{"text1":"Intel<sup>®</sup>\n    Core™ i5-8500 Processor","text2":"30","text3":"　"},{"text1":"Intel<sup>®</sup>\n    Core™ i5-8500T Processor","text2":"30","text3":"　"},{"text1":"Intel<sup>®</sup>\n    Core™ i5-8600 Processor","text2":"30","text3":"　"},{"text1":"Intel<sup>®</sup>\n    Core™ i5-8600K Processor","text2":"35","text3":"7"},{"text1":"Intel<sup>®</sup>\n    Core™ i5-8600T Processor","text2":"30","text3":"　"},{"text1":"Intel<sup>®</sup>\n    Core™ i5-9400 Processor","text2":"30","text3":"　"},{"text1":"Intel<sup>®</sup>\n    Core™ i5-9400F Processor","text2":"30","text3":"　"},{"text1":"Intel<sup>®</sup>\n    Core™ i5-9400T Processor","text2":"30","text3":"　"},{"text1":"Intel<sup>®</sup>\n    Core™ i5-9500 Processor","text2":"30","text3":"　"},{"text1":"Intel<sup>®</sup>\n    Core™ i5-9500F Processor","text2":"30","text3":"　"},{"text1":"Intel<sup>®</sup>\n    Core™ i5-9500T Processor","text2":"30","text3":"　"},{"text1":"Intel<sup>®</sup>\n    Core™ i5-9600 Processor","text2":"30","text3":"　"},{"text1":"Intel<sup>®</sup>\n    Core™ i5-9600K Processor","text2":"35","text3":"7"},{"text1":"Intel<sup>®</sup>\n    Core™ i5-9600KF Processor","text2":"35","text3":"7"},{"text1":"Intel<sup>®</sup>\n    Core™ i5-9600T Processor","text2":"30","text3":"　"},{"text1":"Core i7","text2":"Intel<sup>®</sup>\n    Core™ i7-7700 Processor","text3":"28","text4":"　"},{"text1":"Intel<sup>®</sup>\n    Core™ i7-7700K Processor","text2":"28","text3":"6"},{"text1":"Intel<sup>®</sup>\n    Core™ i7-7700T Processor","text2":"28","text3":"　"},{"text1":"Intel<sup>®</sup>\n    Core™ i7-7800X Processor","text2":"60","text3":"12"},{"text1":"Intel<sup>®</sup>\n    Core™ i7-7820X Processor","text2":"60","text3":"12"},{"text1":"Intel<sup>®</sup>\n    Core™ i7-8086K Processor","text2":"45","text3":"9"},{"text1":"Intel<sup>®</sup>\n    Core™ i7-8700 Processor","text2":"40","text3":"　"},{"text1":"Intel<sup>®</sup>\n    Core™ i7-8700K Processor","text2":"45","text3":"9"},{"text1":"Intel<sup>®</sup>\n    Core™ i7-8700T Processor","text2":"40","text3":"　"},{"text1":"Intel<sup>®</sup>\n    Core™ i7-9700 Processor","text2":"40","text3":"　"},{"text1":"Intel<sup>®</sup>\n    Core™ i7-9700F Processor","text2":"40","text3":"　"},{"text1":"Intel<sup>®</sup>\n    Core™ i7-9700K Processor","text2":"45","text3":"9"},{"text1":"Intel<sup>®</sup>\n    Core™ i7-9700KF Processor","text2":"45","text3":"9"},{"text1":"Intel<sup>®</sup>\n    Core™ i7-9700T Processor","text2":"40","text3":"　"},{"text1":"Intel<sup>®</sup>\n    Core™ i7-9800X Processor","text2":"60","text3":"12"},{"text1":"Core i9","text2":"Intel<sup>®</sup>\n    Core™ i9-10900X Processor","text3":"100","text4":"20"},{"text1":"Intel<sup>®</sup>\n    Core™ i9-10920X Processor","text2":"100","text3":"20"},{"text1":"Intel<sup>®</sup>\n    Core™ i9-10940X Processor","text2":"100","text3":"20"},{"text1":"Intel<sup>®</sup>\n    Core™ i9-10980XE Processor","text2":"100","text3":"20"},{"text1":"Intel<sup>®</sup>\n    Core™ i9-7900X Processor","text2":"100","text3":"20"},{"text1":"Intel<sup>®</sup> Core™\n    i9-7920X Processor","text2":"100","text3":"20"},{"text1":"Intel<sup>®</sup>\n    Core™ i9-7940X Processor","text2":"100","text3":"20"},{"text1":"Intel<sup>®</sup>\n    Core™ i9-7960X Processor","text2":"100","text3":"20"},{"text1":"Intel<sup>®</sup>\n    Core™ i9-7980XE Processor","text2":"100","text3":"20"},{"text1":"Intel<sup>®</sup>\n    Core™ i9-9820X Processor","text2":"100","text3":"20"},{"text1":"Intel<sup>®</sup>\n    Core™ i9-9900 Processor","text2":"60","text3":"　"},{"text1":"Intel<sup>®</sup>\n    Core™ i9-9900K Processor","text2":"60","text3":"12"},{"text1":"Intel<sup>®</sup>\n    Core™ i9-9900KF Processor","text2":"60","text3":"12"},{"text1":"Intel<sup>®</sup>\n    Core™ i9-9900T Processor","text2":"60","text3":"　"},{"text1":"Intel<sup>®</sup>\n    Core™ i9-9900X Processor","text2":"100","text3":"20"},{"text1":"Intel<sup>®</sup>\n    Core™ i9-9920X Processor","text2":"100","text3":"20"},{"text1":"Intel<sup>®</sup>\n    Core™ i9-9940X Processor","text2":"100","text3":"20"},{"text1":"Intel<sup>®</sup>\n    Core™ i9-9960X Processor","text2":"100","text3":"20"},{"text1":"Intel<sup>®</sup>\n    Core™ i9-9980XE Processor","text2":"100","text3":"20"}
]






export default {
  data() {
    return {
      dataSource1,
      dataSource2,
      dataSource3,
      dataSource4,
      column1,
      tableData1,

    };
  },
  components: {
    Nav,
    StanceTable,
    ListTable,
    ImageRow,
    Sup,
    Footer: Footer1,
    DataTable,
    TCell,
  }
};
</script>

