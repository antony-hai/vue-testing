<template>
  <table align="center" style="text-align: center; font-family: 微软雅黑; margin: 0 auto;">
    <tr>
      <td>
        <Nav></Nav>

        <ImageRow imgUrl="http://show.easeye.com.cn/fckattach/2018-04-17/e3b9e77152a2095d72521d1898764e2d/image/face9686a126c31e936870d7c956b970.jpg"></ImageRow>

        <StanceTable hasTop hasBottom>
          <tr>
            <td style="font-size:12px;text-align: left; font-family: 微软雅黑; line-height: 22px;">尊敬的英特尔<SUp></SUp>品牌零售合作伙伴{[CS-CompanyName]}：</td>
          </tr>
          <tr height='10'></tr>
          <tr>
            <td style="font-size:12px;text-align: left; font-family: 微软雅黑; line-height: 22px;"> 
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
              您好！非常感谢贵公司一直以来对英特尔的大力支持！特此告知您2019年第二季度常规奖励计划，如下：
            </td>
          </tr>
        </StanceTable>

        <StanceTable>
          <tr>
            <TCell width="25" >1.</TCell>
            <TCell>
              本奖励计划受以下条款和条件约束（“奖励计划条款”），此外仍须遵守英特尔<Sup></Sup>技术合作伙伴的条款和条件，
              包括附录A与积分补充条款和条件（“英特尔<Sup></Sup>技术合作伙伴条款”），该条款为本奖励计划条款的一部分，其详情可在此网址查询： 
              <a href="https://www.intel.cn/content/www/cn/zh/technology-provider/legal/program-terms-and-conditions.html" target="_blank">https://www.intel.cn/content/www/cn/zh/technology-provider/legal/program-terms-and-conditions.html.</a>
              奖励计划条款和英特尔<Sup></Sup>技术合作伙伴条款统称为“活动规则”。
            </TCell>
          </tr>
          <tr>
            <TCell width="25">2.</TCell>
            <TCell>本奖励计划有效期为2019年4月1日至2019年6月30日（“活动期间”），适用对象为中华人民共和国（仅为本奖励计划条款的目的，系指不包括香港、澳门和台湾的境内地区）的英特尔<Sup></Sup>技术合作伙伴中已激活的 （“合格会员”）</TCell>
          </tr>
          <tr>
            <TCell width="25">3.</TCell>
            <TCell>请您确保参与活动前会员账户已为激活状态；如未激活，您将无法参与积分奖励计划，获取积分奖励；如对激活流程有任何问题，请点击《英特尔<Sup></Sup>渠道积分会员账户激活流程》或联系英特尔<Sup></Sup>客户支持寻求帮助。</TCell>
          </tr>
          <tr>
            <TCell width="25">4.</TCell>
            <TCell>
              如至尊会员或菁英会员连续2个季度未达到其会员级别最低要求，将会被降级为菁英会员或注册会员。如注册会员当季度达到菁英会员或至尊会员级别要求，
              下季度可被提名为菁英会员或至尊会员；如菁英会员当季度达到至尊会员要求，下季度可被提名为至尊会员。升降级生效时间为下一季度的第一个月底；具体会员级别要求如下:
            </TCell>
          </tr>
        </StanceTable>

        <StanceTable hasTop hasBottom>
          <tr>
            <td align="center">
              <DataTable :dataSource="tableData2" :column="column2" width="500"></DataTable>              
            </td>
          </tr>
        </StanceTable>

        <StanceTable>
          <tr>
            <TCell width="25">5.</TCell>
            <TCell>
             在活动期间，英特尔以会员的销售系统数据进行核算，并且只针对线下零售店面的覆盖，购买的如下列表中的英特尔产品，英特尔将实行以下积分奖励。在季度结束后第一个月内，会员必须提供销售系统数据报告。
            </TCell>
          </tr> 
        </StanceTable>

        <StanceTable hasTop hasBottom>
          <tr>
            <td align="center">
              <DataTable :dataSource="tableData1" :column="column1" width="500" :headStyle="{'background-color': '#0070C0', color: '#ffffff'}"></DataTable>              
            </td>
          </tr>
        </StanceTable>

        <StanceTable hasBottom>
          <tr>
            <TCell width="25">6.</TCell>
            <TCell>
              在本奖励计划中，购买参与活动英特尔产品的积分赚取日期为购买英特尔产品的发票开具日期。英特尔将在促销结束后60（六十）天内，根据规则，向符合条件且遵守各项规则的合作伙伴发放在本奖励计划中奖励的积分。
            </TCell>
          </tr>
          <tr>
            <TCell width="25">7.</TCell>
            <TCell>
              合格会员将：
              <ListTable :dataSource="dataSource1" width="608" isLetter hasSpace></ListTable>
            </TCell>
          </tr>
          <tr>
            <TCell width="25">8.</TCell>
            <TCell>
              在不影响活动规则所规定的任何权利和救济措施以及法律规定的任何其他权利和救济措施的前提下，如果您未能遵守活动规则，英特尔有权选择：
              <ListTable :dataSource="dataSource2" width="608" isLetter hasSpace></ListTable>
            </TCell>
          </tr>
          <tr>
            <TCell width="25">9.</TCell>
            <TCell>
              若本奖励计划条款和条件与ITP项目条款和条件存在冲突，应以此奖励计划条款和条件为准。
              任何英特尔商标许可协议和/或英特尔标识许可协议的条款均应优先于本奖励计划条款和条件中涉及上述协议内容的条款。
              除非英特尔授权代表书面签署，英特尔的标准销售条款和条件将适用于任何合格会员与英特尔之间发生的英特尔产品购买或积分兑换等交易，且在适用中优先于任何其他协议。
            </TCell>
          </tr>

          <tr>
            <TCell width="25">10.</TCell>
            <TCell>
               本奖励计划条款中未另行定义的大写术语与在ITP项目条款中的大写术语具有相同含义。
            </TCell>
          </tr>
          <tr>
            <TCell width="25">11.</TCell>
            <TCell>合格会员接受本促销活动中的积分表示您接受此奖励计划条款和条件。</TCell>
          </tr>
          <tr>
            <TCell width="25">12.</TCell>
            <TCell>
              英特尔保留以任何形式通知客户的方式，随时修改、暂停或终止此次促销活动的权利，且上述修改、暂停或终止应立即生效，
              但不影响奖励计划中已累积的任何权益，除此之外英特尔不因上述修改、暂停或终止而承担任何责任。
            </TCell>
          </tr>
          <tr>
            <TCell width="25">13.</TCell>
            <TCell>依照英特尔的网站使用条款<a href="https://www.intel.cn/content/www/cn/zh/legal/terms-of-use.html" target="_blank">（https://www.intel.cn/content/www/cn/zh/legal/terms-of-use.html）</a>，
            凡以您的账户在英特尔网站上进行的操作，均视为您的操作并由您负责；如果您的账户、密码等信息有误或发生泄露，导致您的权益受损，请理解英特尔将不承担任何责任。
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
  { text: "可同时参与本次活动和其他积分活动；" },
  { text: "不可同时参加针对本奖励计划中符合条件的英特尔产品所进行的其他英特尔通知的折扣或促销活动，不论折扣或促销活动是针对本奖励计划的合格会员，或是代表合格会员的第三方；" },
  { text: "不可以转让此次奖励计划中赚取的积分；且" },
  { text: "不可以变现此次奖励计划中赚取的积分。" },
];
const dataSource2 = [
  { text: "撤销合格会员在此次奖励计划中原可获得的积分奖励；" },
  {
    text: "调整合格会员在此次奖励计划中获取积分奖励的数额；"
  },
  { text: "不允许您兑换在此次促销活动中获取的奖励积分；" },
  { text: "用合格会员现有的积分或未来赚取的积分抵销合格会员通过此次促销活动赚取并已用于兑换的全部（或部分）奖励积分；并且/或" },
  { text: "索回合格会员在本次促销活动中赚取的且已用于兑换的全部（或部分）奖励积分之价值。" }
];


const column1 = [
  {
    title: "产品型号",
    dataIndex: "text1"
  },
  {
    title: "产品积分",
    dataIndex: "text2"
  },
  {
    title: "产品型号",
    dataIndex: "text3"
  },
  {
    title: "产品积分",
    dataIndex: "text4"
  },

];

const tableData1 = [
  {"text1":"i5-7200U","text2":"21","text3":"i7-7640X","text4":"10"},{"text1":"i5-7260U","text2":"21","text3":"i7-7660U","text4":"40"},{"text1":"i5-7267U","text2":"21","text3":"i7-7700","text4":"10"},{"text1":"i5-7287U","text2":"21","text3":"i7-7700HQ","text4":"40"},{"text1":"i5-7300HQ","text2":"21","text3":"i7-7700K","text4":"10"},{"text1":"i5-7300U","text2":"21","text3":"i7-7700T","text4":"10"},{"text1":"i5-7360U","text2":"21","text3":"i7-7740X","text4":"10"},{"text1":"i5-7440HQ","text2":"21","text3":"i7-7800X","text4":"10"},{"text1":"i5-7500","text2":"5","text3":"i7-7820HK","text4":"40"},{"text1":"i5-7500T","text2":"5","text3":"i7-7820HQ","text4":"40"},{"text1":"i5-7600","text2":"5","text3":"i7-7820X","text4":"10"},{"text1":"i5-7600K","text2":"5","text3":"i7-7920HQ","text4":"40"},{"text1":"i5-7600T","text2":"5","text3":"i7-7Y75","text4":"40"},{"text1":"i5-7640X","text2":"5","text3":"i7-8500Y","text4":"40"},{"text1":"i5-7Y54","text2":"21","text3":"i7-8550U","text4":"40"},{"text1":"i5-7Y57","text2":"21","text3":"i7-8565U","text4":"40"},{"text1":"i5-8200Y","text2":"21","text3":"i7-8650U","text4":"40"},{"text1":"i5-8250U","text2":"21","text3":"i7-8700","text4":"10"},{"text1":"i5-8265U","text2":"21","text3":"i7-8700K","text4":"10"},{"text1":"i5-8300H","text2":"21","text3":"i7-8700T","text4":"10"},{"text1":"i5-8305G","text2":"21","text3":"i7-8705G","text4":"40"},{"text1":"i5-8350U","text2":"21","text3":"i7-8706G","text4":"40"},{"text1":"i5-8400","text2":"5","text3":"i7-8709G","text4":"40"},{"text1":"i5-8400H","text2":"21","text3":"i7-8750H","text4":"40"},{"text1":"i5-8400T","text2":"5","text3":"i7-8809G","text4":"40"},{"text1":"i5-8500","text2":"5","text3":"i7-8850H","text4":"40"},{"text1":"i5-8500T","text2":"5","text3":"i7-9700","text4":"10"},{"text1":"i5-8600","text2":"5","text3":"i7-9700K","text4":"10"},{"text1":"i5-8600K","text2":"5","text3":"i7-9700T","text4":"10"},{"text1":"i5-8600T","text2":"5","text3":"I9-7900X","text4":"12"},{"text1":"i5-9400","text2":"5","text3":"I9-7920X","text4":"12"},{"text1":"i5-9400T","text2":"5","text3":"I9-7940X","text4":"12"},{"text1":"i5-9500","text2":"5","text3":"I9-7960X","text4":"12"},{"text1":"i5-9500T","text2":"5","text3":"I9-7980XE","text4":"12"},{"text1":"i5-9600","text2":"5","text3":"I9-8950HK","text4":"60"},{"text1":"i5-9600K","text2":"5","text3":"i9-9800X","text4":"12"},{"text1":"i5-9600T","text2":"5","text3":"i9-9820X","text4":"12"},{"text1":"i7-7500U","text2":"40","text3":"i9-9900K","text4":"12"},{"text1":"i7-7560U","text2":"40","text3":"i9-9900X","text4":"12"},{"text1":"i7-7567U","text2":"40","text3":"i9-9920X","text4":"12"},{"text1":"i7-7600U","text2":"40","text3":"i9-9940X","text4":"12"},{"text1":" ","text2":" ","text3":"i9-9960X","text4":"12"}
]

const column2 = [
  {
    title: "项目",
    dataIndex: "text1",
    align: 'left',
  },
  {
    title: '菁英级',
    dataIndex: 'text2',
  },
  {
    title: '至尊级',
    dataIndex: 'text3',
  },

]


const tableData2 = [
  {"text1":"销售收益要求($)","text2":"-","text3":"≥62,500"},{"text1":"培训积分要求","text2":"≥13","text3":"≥25"},{"text1":"积分上限要求","text2":"100,000","text3":"250,000"}
]


export default {
  data() {
    return {
      dataSource1,
      dataSource2,
      column1,
      column2,
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

