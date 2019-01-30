<template>
  <table align="center" style="text-align: center; font-family: 微软雅黑; margin: 0 auto;">
    <tr>
      <td>
        <Nav></Nav>

        <ImageRow imgUrl="http://show.easeye.com.cn/fckattach/2018-04-17/e3b9e77152a2095d72521d1898764e2d/image/face9686a126c31e936870d7c956b970.jpg"></ImageRow>

        <StanceTable hasTop hasBottom>
          <tr>
            <td style="font-size:12px;text-align: left; font-family: 微软雅黑; line-height: 22px;">尊敬的英特尔<Sup></Sup>增值分销合作伙伴:</td>
          </tr>
          <tr height='10'></tr>
          <tr>
            <td style="font-size:12px;text-align: left; font-family: 微软雅黑; line-height: 22px;"> 
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
              您好！非常感谢贵公司一直以来对英特尔的大力支持！特此告知您2019年第一季度全新第九代智能英特尔<Sup></Sup>酷睿™台式机处理器促销奖励计划，如下：
            </td>
          </tr>
        </StanceTable>

        <StanceTable>
          <tr>
            <TCell width="25" >1.</TCell>
            <TCell>
              本促销活动受以下条款和条件约束（“促销条款”），此外仍须遵守英特尔<Sup></Sup>技术合作伙伴的条款和条件，
              包括附录A与积分补充条款和条件（“英特尔<Sup></Sup>技术合作伙伴条款”），该条款为本促销条款的一部分，其详情可在此网址查询：
              <a href="https://www.intel.cn/content/www/cn/zh/technology-provider/legal/program-terms-and-conditions.html" target="_blank">https://www.intel.cn/content/www/cn/zh/technology-provider/legal/program-terms-and-conditions.html.</a>
              本次活动的具体要求和实施细则均以《2019 年第一季度英特尔增值分销合作伙伴扫描积分奖励计划》为准。以上各项促销条款、英特尔<Sup></Sup>技术合作伙伴条款及奖励计划，统称为“活动规则”。
            </TCell>
          </tr>
          <tr>
            <TCell width="25">2.</TCell>
            <TCell>本促销活动有效期为2019年2月10日至2019年3月31日（“促销活动时间”），适用对象为中华人民共和国（仅为本促销条款的目的，系指不包括香港、澳门和台湾的境内地区）的英特尔<Sup></Sup>技术合作伙伴中已激活的增值分销合作伙伴至尊会员及菁英会员（“合格会员”）。</TCell>
          </tr>
          <tr>
            <TCell width="25">3.</TCell>
            <TCell>在促销活动期间，合格会员成功扫描购买如下列表中的英特尔产品（“符合条件的英特尔<Sup></Sup>产品”），英特尔将实行以下积分奖励：</TCell>
          </tr>
        </StanceTable>

        <StanceTable hasTop hasBottom>
          <!-- <tr>
            <td>
              <DataTable :dataSource="tableData1" :column="column1"></DataTable>
            </td>
          </tr> -->
          <!-- <tr height="30"></tr> -->
          <tr>
            <td align="center">
              <DataTable :dataSource="tableData2" :column="column2" width="500"></DataTable>              
            </td>
          </tr>

        </StanceTable>


        <StanceTable>
          <tr>
            <TCell width="25">4.</TCell>
            <TCell>
             季度末完成考核后，英特尔将根据活动规则，向符合条件且遵守各项规则的增值分销合作伙伴发放在本次促销活动中获得的有效积分。
            </TCell>
          </tr>          
          <tr>
            <TCell width="25">5.</TCell>
            <TCell>
              合格会员将：
              <ListTable :dataSource="dataSource1" width="608" isLetter hasSpace></ListTable>
            </TCell>
          </tr>
          <tr>
            <TCell width="25">6.</TCell>
            <TCell>
              在不影响活动规则所规定的任何权利和救济措施以及法律规定的任何其他权利和救济措施的前提下，如果您未能遵守活动规则，英特尔有权选择：
              <ListTable :dataSource="dataSource2" width="608" isLetter hasSpace></ListTable>
            </TCell>
          </tr>
          <tr>
            <TCell width="25">7.</TCell>
            <TCell>活动规则以英文版本为准，且英文版优先于其他任何翻译版本。若本促销活动条款和条件与ITP项目条款和条件存在冲突，应以此促销条款和条件为准。
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
            <TCell>依照英特尔的网站使用条款<a href="https://www.intel.cn/content/www/cn/zh/legal/terms-of-use.html" target="_blank">（https://www.intel.cn/content/www/cn/zh/legal/terms-of-use.html）</a>，
            凡以您的账户在英特尔网站上进行的操作，均视为您的操作并由您负责；如果您的账户、密码等信息有误或发生泄露，导致您的权益受损，请理解英特尔将不承担任何责任。
            </TCell>
          </tr>
        </StanceTable>

        <!-- ------------------------------------english part -->
        <StanceTable hasTop hasBottom>
          <tr height="10"></tr>
          <tr>
            <TCell :ostyle="{ 'font-size': '13px', 'font-weight': '600'}">
             全新第九代智能英特尔<Sup></Sup>酷睿™台式机处理器（“促销活动”）条款和条件
            </TCell>
          </tr>
          <tr height="10"></tr>
        </StanceTable>

        <StanceTable>
          <tr>
            <TCell width="25" >1.</TCell>
            <TCell>
              This Promotion is governed by these terms and conditions (“Promotion Terms”), and the terms and conditions of Intel<Sup></Sup> Technology Provider, including Exhibit A, Points Terms and Conditions (“Intel<Sup></Sup> Technology Provider Terms”), which are incorporated herein and available at:
              <a href="https://www.intel.com/content/www/us/en/technology-provider/legal/program-terms-and-conditions.html" target="_blank">https://www.intel.com/content/www/us/en/technology-provider/legal/program-terms-and-conditions.html.</a>
              The Promotion Terms and the Intel<Sup></Sup> Technology Provider Terms are collectively, the “Rules”. Specific requirements and implementing rules of this Promotion are provided for in the Value-added Resale Partner Points Award Program for Q1 2019. The Promotion Terms, the Intel<Sup></Sup> Technology Provider Terms and the award program terms and conditions are collectively, the “Rules”.
            </TCell>
          </tr>
          <tr>
            <TCell width="25">2.</TCell>
            <TCell>
              This Promotion is effective from February 10th, 2019 until March 31st, 2019 (the “Promotion Period”) and available to active Platinum, Gold value-added resale partners of Intel<Sup></Sup> Technology Provider in the People’s Republic of China (excluding Hong Kong, Macao and Taiwan, for the purpose of the Promotion Terms)  (“Eligible Partners”).
            </TCell>
          </tr>
          <tr>
            <TCell width="25">3.</TCell>
            <TCell>Intel will award Eligible Partners the following Points per unit for purchases of the Intel products listed below (“Qualifying Intel Products”) by scanning successfully during the Promotion Period: </TCell>
          </tr>
        </StanceTable>

        <StanceTable hasTop hasBottom>
          <!-- <tr>
            <td>
              <DataTable :dataSource="tableData11" :column="column11"></DataTable>
            </td>
          </tr> -->
          <!-- <tr height="30"></tr> -->
          <tr>
            <td algin="center">
              <DataTable :dataSource="tableData2" :column="column22" width="500"></DataTable>
            </td>
          </tr>

        </StanceTable>

        <StanceTable hasBottom>
          <tr>
            <TCell width="25">4.</TCell>
            <TCell>
             Intel will award Points under this Promotion after the end of the Promotion, subject to Eligible Partner’s compliance with the Rules.
            </TCell>
          </tr>          
          <tr>
            <TCell width="25">5.</TCell>
            <TCell>
              Eligible Partners may:
              <ListTable :dataSource="dataSource3" width="608" isLetter hasSpace></ListTable>
            </TCell>
          </tr>
          <tr>
            <TCell width="25">6.</TCell>
            <TCell>
              Without prejudice to any right and remedy provided for in the Rules and any other right and remedy available at law, if an Eligible Partner does not comply with the Rules, Intel may:  
              <ListTable :dataSource="dataSource4" width="608" isLetter hasSpace></ListTable>
            </TCell>
          </tr>
          <tr>
            <TCell width="25">7.</TCell>
            <TCell>The English language version of the Rules shall prevail over any translation. If there is a conflict between the Promotion Terms and the ITP Program Terms,
               the Promotion Terms shall prevail. The terms of any Intel trademark license agreement(s) and/or Intel logo license agreement(s) shall prevail over the Promotion Terms with respect to the subject matter of such agreement(s). 
               Intel’s standard terms and conditions of sale shall govern any purchase or redemption of Points for Intel products made between the Eligible Partner and Intel and shall prevail over any other agreements unless in writing and signed by an authorized representative of Intel.
            </TCell>
          </tr>

          <tr>
            <TCell width="25">8.</TCell>
            <TCell>
              Capitalized terms which are not defined in these Promotion Terms shall have the meaning given to them in the ITP Program Terms.
            </TCell>
          </tr>
          <tr>
            <TCell width="25">9.</TCell>
            <TCell>Eligible Partner’s acceptance of the Points in this Promotion indicates Eligible Partner’s acceptance to the Promotion Terms.</TCell>
          </tr>
          <tr>
            <TCell width="25">10.</TCell>
            <TCell>Intel reserves the right to modify, suspend or terminate the Promotion at any time and for any reason with immediate effect, without prejudice to any rights that have already accrued under the Promotion but with no further liability, by giving notice in any form to Customer.</TCell>
          </tr>
          <tr>
            <TCell width="25">11.</TCell>
            <TCell>In accordance with Intel Terms of Use<a href="https://www.intel.cn/content/www/cn/zh/legal/terms-of-use.html" target="_blank">（https://www.intel.cn/content/www/cn/zh/legal/terms-of-use.html）</a>，
             you are entirely responsible for any and all activities that occur under your account at any Intel web site, and Intel will not be liable for any loss that you may incur as a result of any error in the information provided by you with regard to your account or password, or as a result of someone else using your account or password.
            </TCell>
          </tr>
        </StanceTable>

        <Footer></Footer>
      </td>
    </tr>
  </table>
</template>

<script>

import { TCell, Nav, StanceTable, ListTable, DataTable, Footer1, Sup, ImageRow } from '@/components/edm'

const dataSource1 = [
  { text: "在本次促销活动中可赚取无上限限制的积分；" },
  { text: "可同时参与本次活动和其他积分活动；" },
  { text: "不可同时参加针对本次促销活动中符合条件的英特尔产品所进行的其他英特尔通知的折扣或促销活动，不论折扣或促销活动是针对本促销活动的合格会员，或是代表合格会员的第三方；" },
  { text: "不可以转让此次促销活动中赚取的积分；且" },
  { text: "不可以变现此次促销活动中赚取的积分。" },
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
    text:"earn up to  Unlimited Points under this Promotion;"
  },
  {
    text: "combine this Promotion with other Points offers;"
  },
  { text: "not combine this Promotion with other discounts or promotions on Qualifying Intel Products whether offered to the Eligible Partner, or to a third party on its behalf, as notified by Intel;" },
  { text: "not transfer Points under this Promotion; and" },
  { text: "not receive cash alternatives for Points under this Promotion." },
];

const dataSource4 = [
  { text: "withhold the Points that would otherwise be awarded to Eligible Partner under the Promotion;" },
  { text: "adjust the number of Points to be awarded to Eligible Partner under the Promotion;" },
  { text: "refuse to allow redemption of Points awarded under the Promotion; " },
  { text: "set–off the entire (or part) value of the Points awarded under the Promotion that Eligible Partner has redeemed, against Eligible Partner’s existing or future credit claims; and/or" },
  { text: "obtain reimbursement of the entire (or part) value of the Points awarded to Eligible Partner under the Promotion that Eligible Partner has redeemed." },
];

const column1 = [
  {
    title: "购买量级别划分（单位）",
    dataIndex: "text1"
  },
  {
    title: "不同级别单位积分赚取",
    dataIndex: "text2"
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
  {"text1":"1-5","text2":"每单位30积分"},{"text1":"6-15","text2":"每单位40积分"},{"text1":"16-30","text2":"每单位50积分"},{"text1":"31-50","text2":"每单位60积分"},{"text1":"51-100","text2":"每单位70积分"},{"text1":"101+","text2":"每单位80积分"}
]
const tableData11 = [
  {"text1":"1-5","text2":"30 pts per unit "},{"text1":"6-15","text2":"40 pts per unit "},{"text1":"16-30","text2":"50 pts per unit "},{"text1":"31-50","text2":"60 pts per unit "},{"text1":"51-100","text2":"70 pts per unit "},{"text1":"101+","text2":"80 pts per unit "}
]
const column2 = [
  {
    title: "符合条件的英特尔产品",
    dataIndex: "text1",
    align: 'left',
  },
  {
    title: '积分/单位',
    dataIndex: 'text2',
    width: 100,
  }

]
const column22 = [
  {
    title: "Qualifying Intel Products",
    dataIndex: "text1",
    align: 'left',
  },
  {
    title: 'Points per unit',
    dataIndex: 'text2',
    width: 100,
  }

]

const tableData2 = [
 {"text1":"Intel<sup>®</sup> Core™ I9-9900KF Desktop Processor - BXC80684I99900KF","text2":"60"},{"text1":"Intel<sup>®</sup> Core™ I9-9900KF Desktop Processor - CM8068403873927","text2":"60"},{"text1":"Intel<sup>®</sup> Core™ I7-9700KF Desktop Processor - BXC80684I79700KF","text2":"45"},{"text1":"Intel<sup>®</sup> Core™ I7-9700KF Desktop Processor - CM8068403874219","text2":"45"},{"text1":"Intel<sup>®</sup> Core™ I5-9600KF Desktop Processor - BXC80684I59600KF","text2":"70"},{"text1":"Intel<sup>®</sup> Core™ I5-9600KF Desktop Processor - CM8068403874409","text2":"70"},{"text1":"Intel<sup>®</sup> Core™ I3-9350KF Desktop Processor - BXC80684I39350KF","text2":"50"},{"text1":"Intel<sup>®</sup> Core™ I3-9350KF Desktop Processor - CM8068403376823","text2":"50"},{"text1":"Intel<sup>®</sup> Core™ I3-8100F Desktop Processor - BXC80684I38100F","text2":"40"},{"text1":"Intel<sup>®</sup> Core™ I3-8100F Desktop Processor - CM8068403377323","text2":"40"}
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
      column22,
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

