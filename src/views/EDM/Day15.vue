<template>
  <table align="center" style="text-align: center; font-family: 微软雅黑; margin: 0 auto;">
    <tr>
      <td>
        <Nav></Nav>

        <ImageRow imgUrl="http://show.easeye.com.cn/fckattach/2018-04-17/e3b9e77152a2095d72521d1898764e2d/image/face9686a126c31e936870d7c956b970.jpg"></ImageRow>

        <StanceTable hasTop hasBottom>
          <tr>
            <td style="font-size:12px;text-align: left; font-family: 微软雅黑; line-height: 22px;">尊敬的英特尔<Sup></Sup>技术合作伙伴：</td>
          </tr>
          <tr height='10'></tr>
          <tr>
            <td style="font-size:12px;text-align: left; font-family: 微软雅黑; line-height: 22px;"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;您好！非常感谢贵公司一直以来对英特尔的大力支持！在Q4'18NUC季度常规积分奖励计划及促销奖励计划基础上，中国区特进行搭载Windows<Sup></Sup>10的英特尔<Sup></Sup>NUC 迷你电脑特别促销奖励计划，如下：</td>
          </tr>
        </StanceTable>

        <StanceTable>
          <tr>
            <TCell width="25" >1.</TCell>
            <TCell>
              本促销活动受以下条款和条件约束（“促销条款”），此外仍须遵守英特尔<Sup></Sup>技术合作伙伴的条款和条件，包括附录A与积分补充条款和条件（“英特尔<Sup></Sup>技术合作伙伴条款”），该条款为本促销条款的一部分，其详情可在此网址查询：
              <a href="https://www.intel.com/content/www/us/en/technology-provider/legal/program-terms-and-conditions.html" target="_blank">https://www.intel.com/content/www/us/en/technology-provider/legal/program-terms-and-conditions.html</a>
              促销条款和英特尔<Sup></Sup>技术合作伙伴条款统称为“活动规则”。
            </TCell>
          </tr>
          <tr>
            <TCell width="25">2.</TCell>
            <TCell>本促销活动有效期为2018年11月4日至2018年12月15日（“促销活动时间”），适用对象为中华人民共和国（仅为本促销条款的目的，系指不包括香港、澳门和台湾的境内地区）的英特尔<Sup></Sup>技术合作伙伴中已激活的NUC产品至尊会员及菁英会员（“合格会员”）。</TCell>
          </tr>
          <tr>
            <TCell width="25">3.</TCell>
            <TCell>在促销活动期间，对合格会员从英特尔<Sup></Sup>授权总代理（“IAD”）、英特尔<Sup></Sup>授权集成供应商（“IACS”）或 <br/>英特尔<Sup></Sup>认可供应商（“IAS”） [视具体情况而定]购买如下列表中的英特尔产品（“符合条件的英特尔<Sup></Sup>产品”），英特尔将实行以下积分奖励：</TCell>
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

        <!-- ------------------------------------english part -->


        <Footer></Footer>
      </td>
    </tr>
  </table>
</template>

<script>

import { TCell, Nav, StanceTable, ListTable, DataTable, Footer1, Sup, ImageRow } from '@/components/edm'

const dataSource1 = [
  { text: "在本次促销活动中可赚取无上限限制的积分；" },
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
    title: "符合条件的英特尔产品",
    dataIndex: "text1",
    align: 'left',
  },
  {
    title: "积分/单位",
    dataIndex: "text2",
    width: 120,
  },

];
const column11 = [
  {
    title: "Volume tier (units) ",
    dataIndex: "text1"
  },
  {
    title: "Points per unit per Tier ",
    dataIndex: "text2"
  },

];
const tableData1 = [
  {"text1":"Boxed Intel<sup>®</sup> NUC Kit - BOXNUC7I3BNH","text2":"40"},{"text1":"Boxed Intel<sup>®</sup> NUC Kit - BOXNUC7I3BNHL","text2":"40"},{"text1":"Boxed Intel<sup>®</sup> NUC Kit - BOXNUC7i3BNHR","text2":"40"},{"text1":"Intel<sup>®</sup> NUC Kit with Intel<sup>®</sup> Optane™ Memory - BOXNUC7I3BNHX1L","text2":"40"},{"text1":"Intel<sup>®</sup> NUC 7 Home, a Mini PC with Windows<sup>®</sup> 10 – NUC7i3BNHXF","text2":"40"},{"text1":"Intel<sup>®</sup> NUC 7 Home, a Mini PC with Windows<sup>®</sup> 10 – NUC7i3BNHXFL","text2":"40"},{"text1":"Boxed Intel<sup>®</sup> NUC Kit - BOXNUC7I3BNK","text2":"40"},{"text1":"Boxed Intel<sup>®</sup> NUC Kit - BOXNUC7I3BNKL","text2":"40"},{"text1":"Boxed Intel<sup>®</sup> NUC Kit - BOXNUC7i3BNKR","text2":"40"},{"text1":"Boxed Intel<sup>®</sup> NUC Kit - BOXNUC7I5BNH","text2":"60"},{"text1":"Boxed Intel<sup>®</sup> NUC Kit - BOXNUC7I5BNHL","text2":"60"},{"text1":"Boxed Intel<sup>®</sup> NUC Kit - BOXNUC7i5BNHR","text2":"60"},{"text1":"Intel<sup>®</sup> NUC Kit with Intel<sup>®</sup> Optane™ Memory - BOXNUC7I5BNHX1L","text2":"60"},{"text1":"Intel<sup>®</sup> NUC 7 Home, a Mini PC with Windows<sup>®</sup> 10 – BOXNUC7i5BNHXF","text2":"60"},{"text1":"Intel<sup>®</sup> NUC 7 Home, a Mini PC with Windows<sup>®</sup> 10 – BOXNUC7i5BNHXFL","text2":"60"},{"text1":"Boxed Intel<sup>®</sup> NUC Kit - BOXNUC7I5BNK","text2":"60"},{"text1":"Boxed Intel<sup>®</sup> NUC Kit - BOXNUC7I5BNKL","text2":"60"},{"text1":"Intel<sup>®</sup> NUC 7 Home, a Mini PC with Windows 10 - BOXNUC7i5BNKP","text2":"60"},{"text1":"Intel<sup>®</sup> NUC 7 Home, a Mini PC with Windows 10 - BOXNUC7i5BNKPL","text2":"60"},{"text1":"Intel<sup>®</sup> NUC 7 Home, a Mini PC with Windows 10 - BOXNUC7i5BNKPR","text2":"60"},{"text1":"Boxed Intel<sup>®</sup> NUC Kit - BOXNUC7i5BNKR","text2":"60"},{"text1":"Boxed Intel<sup>®</sup> NUC Kit - BOXNUC7I7BNH","text2":"80"},{"text1":"Boxed Intel<sup>®</sup> NUC Kit - BOXNUC7I7BNHL","text2":"80"},{"text1":"Boxed Intel<sup>®</sup> NUC Kit - BOXNUC7i7BNHR","text2":"80"},{"text1":"Intel<sup>®</sup> NUC Kit with Intel<sup>®</sup> Optane™ Memory - BOXNUC7I7BNHX1L","text2":"80"},{"text1":"Intel<sup>®</sup> NUC 7 Home, a Mini PC with Windows<sup>®</sup> 10 – BOXNUC7i7BNHXG","text2":"80"},{"text1":"Intel<sup>®</sup> NUC 7 Home, a Mini PC with Windows<sup>®</sup> 10 – BOXNUC7i7BNHXGL","text2":"80"},{"text1":"Intel<sup>®</sup> NUC Kit with 8th Gen Intel<sup>®</sup> Core™ Processors - BOXNUC8i3BEH","text2":"40"},{"text1":"Intel<sup>®</sup> NUC Kit with 8th Gen Intel<sup>®</sup> Core™ Processors - BOXNUC8i3BEK","text2":"40"},{"text1":"Intel<sup>®</sup> NUC 8 Home, a Mini PC with Windows<sup>®</sup> 10 - BOXNUC8I3CYSM","text2":"40"},{"text1":"Intel<sup>®</sup> NUC 8 Home, a Mini PC with Windows<sup>®</sup> 10 - BOXNUC8I3CYSN","text2":"40"},{"text1":"Intel<sup>®</sup> NUC Kit with 8th Gen Intel<sup>®</sup> Core™ Processors - BOXNUC8i5BEH","text2":"60"},{"text1":"Intel<sup>®</sup> NUC Kit with 8th Gen Intel<sup>®</sup> Core™ Processors - BOXNUC8i5BEK","text2":"60"},{"text1":"Intel<sup>®</sup> NUC Kit with 8th Gen Intel<sup>®</sup> Core™ Processors - BOXNUC8i7BEH","text2":"80"},{"text1":"Boxed Intel<sup>®</sup> NUC Kit - BOXNUC8i7HNK","text2":"80"},{"text1":"Intel<sup>®</sup> NUC 8 Business Mini PC with Windows<sup>®</sup> 10 - BOXNUC8i7HNKQC","text2":"80"},{"text1":"Boxed Intel<sup>®</sup> NUC Kit - BOXNUC8I7HVK","text2":"80"},{"text1":"Boxed Intel<sup>®</sup> NUC Kit - BOXNUC8i7HVK6","text2":"80"},{"text1":"Intel<sup>®</sup> NUC 8 Enthusiast Mini PC with Windows<sup>®</sup> 10 - BOXNUC8i7HVKVA","text2":"80"},{"text1":"Intel<sup>®</sup> NUC 8 Enthusiast Mini PC with Windows<sup>®</sup> 10 - BOXNUC8i7HVKVA6","text2":"80"}
]
const tableData11 = [
  {"text1":"1-5","text2":"30 pts per unit "},{"text1":"6-15","text2":"40 pts per unit "},{"text1":"16-30","text2":"50 pts per unit "},{"text1":"31-50","text2":"60 pts per unit "},{"text1":"51-100","text2":"70 pts per unit "},{"text1":"101+","text2":"80 pts per unit "}
]
const column2 = [
  {
    title: "符合条件的英特尔产品",
    dataIndex: "text1"
  },

]

const tableData2 = [
  {"text1":"Intel<sup>®</sup> NUC 7 Business Mini PC with Windows<sup>®</sup> 10 Pro - BLKNUC7I3DNHNC"},{"text1":"Intel<sup>®</sup> NUC 7 Business Mini PC with Windows<sup>®</sup> 10 Pro - BLKNUC7I3DNHNC1"},{"text1":"Intel<sup>®</sup> NUC 7 Business Mini PC with Windows<sup>®</sup> 10 Pro - BLKNUC7I3DNHNC2"},{"text1":"Intel<sup>®</sup> NUC 7 Business Mini PC with Windows<sup>®</sup> 10 Pro - BLKNUC7I3DNHNC3"},{"text1":"Intel<sup>®</sup> NUC 7 Business Mini PC with Windows<sup>®</sup> 10 Pro - BLKNUC7I3DNHNC4"},{"text1":"Intel<sup>®</sup> NUC 7 Business Mini PC with Windows<sup>®</sup> 10 Pro - BLKNUC7I3DNHNC5"},{"text1":"Intel<sup>®</sup> NUC 7 Business Mini PC with Windows<sup>®</sup> 10 Pro BLKNUC7I3DNKTC"},{"text1":"Intel<sup>®</sup> NUC 7 Business Mini PC with Windows<sup>®</sup> 10 Pro BLKNUC7I3DNKTC1"},{"text1":"Intel<sup>®</sup> NUC 7 Business Mini PC with Windows<sup>®</sup> 10 Pro BLKNUC7I3DNKTC2"},{"text1":"Intel<sup>®</sup> NUC 7 Business Mini PC with Windows<sup>®</sup> 10 Pro BLKNUC7I3DNKTC3"},{"text1":"Intel<sup>®</sup> NUC 7 Business Mini PC with Windows<sup>®</sup> 10 Pro BLKNUC7I3DNKTC4"},{"text1":"Intel<sup>®</sup> NUC 7 Business, a Mini PC with Windows<sup>®</sup> 10 Pro - BLKNUC7I5DNKPC"},{"text1":"Intel<sup>®</sup> NUC 7 Business, a Mini PC with Windows<sup>®</sup> 10 Pro - BLKNUC7I5DNKPC1"},{"text1":"Intel<sup>®</sup> NUC 7 Business, a Mini PC with Windows<sup>®</sup> 10 Pro - BLKNUC7I5DNKPC2"},{"text1":"Intel<sup>®</sup> NUC 7 Business, a Mini PC with Windows<sup>®</sup> 10 Pro - BLKNUC7I5DNKPC3"},{"text1":"Intel<sup>®</sup> NUC 7 Business, a Mini PC with Windows<sup>®</sup> 10 Pro - BLKNUC7I5DNKPC4"},{"text1":"Intel<sup>®</sup> NUC 7 Home, a Mini PC with Windows<sup>®</sup> 10 – NUC7i3BNHXF"},{"text1":"Intel<sup>®</sup> NUC 7 Home, a Mini PC with Windows<sup>®</sup> 10 – NUC7i3BNHXFL"},{"text1":"Intel<sup>®</sup> NUC 7 Home, a Mini PC with Windows<sup>®</sup> 10 – BOXNUC7i5BNHXF"},{"text1":"Intel<sup>®</sup> NUC 7 Home, a Mini PC with Windows<sup>®</sup> 10 – BOXNUC7i5BNHXFL"},{"text1":"Intel<sup>®</sup> NUC 7 Home, a Mini PC with Windows 10 - BOXNUC7i5BNKP"},{"text1":"Intel<sup>®</sup> NUC 7 Home, a Mini PC with Windows 10 - BOXNUC7i5BNKPL"},{"text1":"Intel<sup>®</sup> NUC 7 Home, a Mini PC with Windows 10 - BOXNUC7i5BNKPR"},{"text1":"Intel<sup>®</sup> NUC 7 Home, a Mini PC with Windows<sup>®</sup> 10 – BOXNUC7i7BNHXG"},{"text1":"Intel<sup>®</sup> NUC 7 Home, a Mini PC with Windows<sup>®</sup> 10 – BOXNUC7i7BNHXGL"},{"text1":"Intel<sup>®</sup> NUC 7 Enthusiast, a Mini PC with Windows 10 - BOXNUC7i7BNKQ"},{"text1":"Intel<sup>®</sup> NUC 7 Enthusiast, a Mini PC with Windows 10 - BOXNUC7i7BNKQL"},{"text1":"Intel<sup>®</sup> NUC 7 Enthusiast, a Mini PC with Windows 10 - BOXNUC7i7BNKQR"},{"text1":"Intel<sup>®</sup> NUC 8 Home, a Mini PC with Windows<sup>®</sup> 10 - BOXNUC8I3CYSM"},{"text1":"Intel<sup>®</sup> NUC 8 Home, a Mini PC with Windows<sup>®</sup> 10 - BOXNUC8I3CYSM1"},{"text1":"Intel<sup>®</sup> NUC 8 Home, a Mini PC with Windows<sup>®</sup> 10 - BOXNUC8I3CYSM2"},{"text1":"Intel<sup>®</sup> NUC 8 Home, a Mini PC with Windows<sup>®</sup> 10 - BOXNUC8I3CYSM3"},{"text1":"Intel<sup>®</sup> NUC 8 Home, a Mini PC with Windows<sup>®</sup> 10 - BOXNUC8I3CYSM4"},{"text1":"Intel<sup>®</sup> NUC 8 Home, a Mini PC with Windows<sup>®</sup> 10 - BOXNUC8I3CYSN"},{"text1":"Intel<sup>®</sup> NUC 8 Home, a Mini PC with Windows<sup>®</sup> 10 - BOXNUC8I3CYSN1"},{"text1":"Intel<sup>®</sup> NUC 8 Home, a Mini PC with Windows<sup>®</sup> 10 - BOXNUC8I3CYSN2"},{"text1":"Intel<sup>®</sup> NUC 8 Home, a Mini PC with Windows<sup>®</sup> 10 - BOXNUC8I3CYSN3"},{"text1":"Intel<sup>®</sup> NUC 8 Home, a Mini PC with Windows<sup>®</sup> 10 - BOXNUC8I3CYSN4"},{"text1":"Intel<sup>®</sup> NUC 8 Business Mini PC with Windows<sup>®</sup> 10 - BOXNUC8i7HNKQC"},{"text1":"Intel<sup>®</sup> NUC 8 Business Mini PC with Windows<sup>®</sup> 10 - BOXNUC8i7HNKQC1"},{"text1":"Intel<sup>®</sup> NUC 8 Business Mini PC with Windows<sup>®</sup> 10 - BOXNUC8i7HNKQC2"},{"text1":"Intel<sup>®</sup> NUC 8 Business Mini PC with Windows<sup>®</sup> 10 - BOXNUC8i7HNKQC3"},{"text1":"Intel<sup>®</sup> NUC 8 Business Mini PC with Windows<sup>®</sup> 10 - BOXNUC8i7HNKQC4"},{"text1":"Intel<sup>®</sup> NUC 8 Enthusiast Mini PC with Windows<sup>®</sup> 10 - BOXNUC8i7HVKVA"},{"text1":"Intel<sup>®</sup> NUC 8 Enthusiast Mini PC with Windows<sup>®</sup> 10 - BOXNUC8i7HVKVA1"},{"text1":"Intel<sup>®</sup> NUC 8 Enthusiast Mini PC with Windows<sup>®</sup> 10 - BOXNUC8i7HVKVA2"},{"text1":"Intel<sup>®</sup> NUC 8 Enthusiast Mini PC with Windows<sup>®</sup> 10 - BOXNUC8i7HVKVA3"},{"text1":"Intel<sup>®</sup> NUC 8 Enthusiast Mini PC with Windows<sup>®</sup> 10 - BOXNUC8i7HVKVA4"},{"text1":"Intel<sup>®</sup> NUC 8 Enthusiast Mini PC with Windows<sup>®</sup> 10 - BOXNUC8i7HVKVA6"}
]


export default {
  data() {
    return {
      dataSource1,
      dataSource2,
      dataSource3,
      dataSource4,
      column1,
      column11,
      column2,
      tableData11,
      tableData1,
      tableData2,
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

