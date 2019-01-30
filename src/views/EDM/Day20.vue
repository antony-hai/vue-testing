<template>
  <table align="center" style="text-align: center; font-family: 微软雅黑; margin: 0 auto;">
    <tr>
      <td>

        <Nav></Nav>

        <ImageRow imgUrl="http://show.easeye.com.cn/fckattach/2018-04-17/e3b9e77152a2095d72521d1898764e2d/image/face9686a126c31e936870d7c956b970.jpg"></ImageRow>

        <StanceTable hasTop hasBottom>
          <tr>
            <td style="font-size:12px;text-align: left; font-family: 微软雅黑; line-height: 24px;">尊敬的英特尔<Sup></Sup>网吧技术合作伙伴：</td>
          </tr>
          <tr>
            <TCell>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;您好！非常感谢贵公司一直以来对英特尔的大力支持！特此告知您2019年第一季度英特尔<Sup></Sup>与微星网吧联合促销奖励计划，如下：</TCell>
          </tr>
        </StanceTable>

        <StanceTable hasBottom>
          <tr>
            <TCell width="25">1.</TCell>
            <TCell>本促销活动受以下条款和条件约束（“促销条款”），此外仍须遵守英特尔<Sup></Sup>技术合作伙伴的条款和条件，
              包括附录A与积分补充条款和条件（“英特尔<Sup></Sup>技术合作伙伴条款”），
              该条款为本促销条款的一部分，其详情可在此网址查询： 
              <a href="https://www.intel.cn/content/www/cn/zh/technology-provider/legal/program-terms-and-conditions.html" target="_blank">https://www.intel.cn/content/www/cn/zh/technology-provider/legal/program-terms-and-conditions.html</a>. 
              促销条款和英特尔<Sup></Sup>技术合作伙伴条款统称为“活动规则”。
            </TCell>
          </tr>
          <tr>
            <TCell width="25">2.</TCell>
            <TCell>本促销活动有效期为2019年1月30日至2019年3月31日（“促销活动时间”），
              可参加本促销活动的客户仅限于在中国（仅为本促销条款的目的，系指不包括香港、澳门和台湾的境内地区）直接向网吧销售包含英特尔产品的电脑设备的客户（“授权客户”）。
               授权客户需为英特尔<Sup></Sup>技术合作伙伴中已激活的至尊会员及菁英会员。上述“网吧”系指营业场所位于中国境内，在该营业场所配备个人电脑，并通过个人电脑向公众提供有偿互联网上网服务的终端用户。
            </TCell>
          </tr>
          <tr>
            <TCell width="25">3.</TCell>
            <TCell>
              在促销活动期间，对授权客户购买的如下列表中的主板（“符合条件的微星主板”）和英特尔产品（“符合条件的英特尔产品”）组合（“组合一”）以及显卡（“符合条件的微星显卡”）和英特尔产品（“符合条件的英特尔产品”）组合（“组合二”），
              将获得以下积分奖励。如下产品需整合于同一台电脑设备中才可计算为一个组合；积分以组合为单位计算。所有产品采购需从英特尔及微星厂商认可的渠道进货，否则视为不符合条件产品组合。
              <table  cellspacing="0" cellpadding="0" border="0" align="center" width="608">
                <tr>
                  <TCell><b>组合一：</b></TCell>
                </tr>
                <tr>
                  <td align="center" valign="top">
                    <DataTable :column="column1" :dataSource="tableData1" width="470"></DataTable>
                    <br>
                    <DataTable :column="column" :dataSource="tableData" width="470"></DataTable>
                  </td>
                </tr>
              </table>
              <table  cellspacing="0" cellpadding="0" border="0" align="center" width="608">
                <tr>
                  <TCell><b>组合二：</b></TCell>
                </tr>
                <tr>
                  <td align="center" valign="top">
                    <DataTable :column="column1" :dataSource="tableData11" width="470"></DataTable>
                    <br>
                    <DataTable :column="column1" :dataSource="tableData2" width="470"></DataTable>
                  </td>
                </tr>
              </table>
            </TCell>
          </tr>
          <tr height="20"></tr>
          <tr>
            <TCell width="25">4.</TCell>
            <TCell>
              授权客户须按指定流程提交网吧赢单信息给英特尔， 赢单信息应包含具体配置、主板品牌型号、傲腾型号、显卡品牌型号、处理器型号等；英特尔销售团队每周核实提交的网吧赢单信息和捆绑销售情况，
              跟踪进度，直到确认赢单采购完成。主板厂商销售团队每周核实网吧赢单销售数量报告是否真实；英特尔产品经理将按季度核实网吧销售报告是否真实。
            </TCell>
          </tr>
          <tr>
            <TCell width="25">5.</TCell>
            <TCell>英特尔和微星将分别进行神秘访客现场抽查。如发现虚假赢单信息，将扣减客户当季度奖励或取消资格。 </TCell>
          </tr>
          <tr>
            <TCell width="25">6.</TCell>
            <TCell>
              以下情节视为虚假赢单：
              <ListTable :dataSource="listData1" hasSpace width="609" listType="●"></ListTable>
            </TCell>
          </tr>
          <tr>
            <TCell width="25">7.</TCell>
            <TCell>
              英特尔将在促销结束后90（九十）天内，根据规则，向符合条件且遵守各项规则的授权客户发放在本次促销活动中奖励的积分。英特尔有权根据授权客户提供的资料以及其他信息，
              自行判断某一授权客户是否具备参加本促销活动的资格，及其所应获得积分的数量。参加本促销活动的授权客户均同意英特尔作出的上述判断。 
            </TCell>
          </tr>
          <tr>
            <TCell width="25">8.</TCell>
            <TCell>
              <b>先到先得原则</b>：本次促销活动中积分奖励的总量，存在英特尔设定的上限。英特尔将按照“先到先得”的原则，按照授权客户提交网吧赢单信息的日期，
              确定发放上述积分奖励的先后顺序。具体而言，英特尔将根据经核实确属真实有效的网吧赢单赢单信息，
              确定您实际达成的组合一及组合二的采购量与销售量，以及发放上述积分奖励的先后顺序。由于积分资源有限，英特尔有权根据资源使用情况随时终止本次促销活动。
            </TCell>
          </tr>
          <tr>
            <TCell width="25">9.</TCell>
            <TCell>奖励积分需在规定时间内兑换完毕，过期失效。具体兑换时间另行通知。</TCell>
          </tr>
          <tr>
            <TCell width="25">10.</TCell>
            <TCell>
              授权客户将：
              <ListTable :dataSource="listData2" hasSpace width="609" isLetter></ListTable>
            </TCell>
          </tr>
          <tr>
            <TCell width="25">11.</TCell>
            <TCell>
             在不影响活动规则所规定的任何权利和救济措施以及法律规定的任何其他权利和救济措施的前提下，如果您未能遵守活动规则，英特尔有权选择：
              <ListTable :dataSource="listData3" hasSpace width="609" isLetter></ListTable>
            </TCell>
          </tr>
          <tr>
            <TCell width="25">12.</TCell>
            <TCell>授权客户接受本促销活动中的积分表示您接受此促销活动条款和条件。</TCell>
          </tr>
          <tr>
            <TCell width="25">13.</TCell>
            <TCell>英特尔保留以任何形式通知客户的方式，随时修改、暂停或终止此次促销活动的权利，且上述修改、暂停或终止应立即生效，
              但不影响促销活动中已累积的任何权益，除此之外英特尔不因上述修改、暂停或终止而承担任何责任。</TCell>
          </tr>
          <tr>
            <TCell width="25">14.</TCell>
            <TCell>
              依照英特尔的网站使用条款 <a href="https://www.intel.cn/content/www/cn/zh/legal/terms-of-use.html" target="_blank">（https://www.intel.cn/content/www/cn/zh/legal/terms-of-use.html）</a>，
              凡以您的账户在英特尔网站上进行的操作，均视为您的操作并由您负责；如果您的账户、密码等信息有误或发生泄露，导致您的权益受损，请理解英特尔将不承担任何责任。  
            </TCell>
          </tr>
        </StanceTable>
        <!-- 数据表格 -->
        <StanceTable hasTop>
          <tr>
            <td width="25"></td>
            <td style="font-family: 微软雅黑; font-size: 14px; line-height: 26px"><b>温馨提示：如您对本促销奖励计划有任何问题，请联系您的英特尔渠道客户经理。</b></td>
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
  TCell,
  Nav,
  StanceTable,
  ListTable,
  LinkBtn,
  ImageRow,
  Sup,
  IconText,
  Footer1,
  DataTable
} from "@/components/edm";

const column1 = [
  {
    title: "符合条件的微星主板",
    dataIndex: "text1",
    align: 'left',
  },
  {
    title: "积分/单位",
    dataIndex: "text2",
    width: 80
  },

];
const tableData1 = [
  {"text1":"X299 RAIDER","text2":"72"},{"text1":"Z390M S01","text2":"43"},{"text1":"Z370 OC PRO","text2":"43"},{"text1":"Z370M S01","text2":"43"},{"text1":"B360M PRO VDH","text2":"43"},{"text1":"B360M ICAFE","text2":"29"},{"text1":"H310M PRO M.2 PLUS","text2":"14"},{"text1":"B250M PRO VD","text2":"14"}
];
const tableData11 = [
  {"text1":"GeForce RTX 2080 系列","text2":"87"},{"text1":"GeForce RTX 2070 系列","text2":"43"},{"text1":"GeForce RTX 2060 系列","text2":"43"}
]

const column = [
  {
    title: "符合条件的英特尔产品(50积分/单位)",
    dataIndex: "text1",
    align: 'left'
  },
];
const tableData = [
  {"text1":"Intel<sup>®</sup> Optane™ Memory Series -MEMPEK1W016GA"},{"text1":"Intel<sup>®</sup> Optane™ Memory Series -MEMPEK1W016GAX1"},{"text1":"Intel<sup>®</sup> Optane™ Memory Series -MEMPEK1W016GAXT"},{"text1":"Intel<sup>®</sup> Optane™ Memory Series- MEMPEK1W032GA"},{"text1":"Intel<sup>®</sup> Optane™ Memory Series- MEMPEK1W032GAX1"},{"text1":"Intel<sup>®</sup> Optane™ Memory Series- MEMPEK1W032GAXT"},{"text1":"Intel<sup>®</sup> Optane™ Memory M10 Series- MEMPEK1J064GA"},{"text1":"Intel<sup>®</sup> Optane™ Memory M10 Series -MEMPEK1J016GA"},{"text1":"Intel<sup>®</sup> Optane™ Memory M10 Series -MEMPEK1J032GA "}
];
const tableData2 = [
  {"text1":"Intel<sup>®</sup> Core™ I9-9900KF Desktop Processor - BXC80684I99900KF","text2":"60"},{"text1":"Intel<sup>®</sup> Core™ I7-9700KF Desktop Processor - BXC80684I79700KF","text2":"45"},{"text1":"Intel<sup>®</sup> Core™ I5-9600KF Desktop Processor - BXC80684I59600KF","text2":"70"},{"text1":"Intel<sup>®</sup> Core™ I3-9350KF Desktop Processor - BXC80684I39350KF","text2":"50"},{"text1":"Intel<sup>®</sup> Core™ I5-9400F Desktop Processor - BXC80684I59400F","text2":"60"}
]

const listData1 = [
  { text: '网吧实际使用数量比报单数量低。'},
  { text: '所提报网吧地址上并不存在相应网吧。'},
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
      tableData11,
      tableData2,
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

