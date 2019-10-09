<template>
  <table align="center" style="text-align: center; font-family: 微软雅黑; margin: 0 auto;">
    <tr>
      <td>
        <Nav></Nav>

        <ImageRow
          imgUrl="http://show.easeye.com.cn/fckattach/2019-09-25/e3b9e77152a2095d72521d1898764e2d/image/0bc8e08c2ceded8338986c3f7b0ee206_easeyethumbnail.png"
        ></ImageRow>

        <StanceTable hasTop hasBottom>
          <tr>
            <td style="font-size:12px;text-align: left; font-family: 微软雅黑; line-height: 22px;">
              尊敬的英特尔
              <Sup></Sup>技术合作伙伴：
            </td>
          </tr>
          <tr height="10"></tr>
          <tr>
            <td style="font-size:12px;text-align: left; font-family: 微软雅黑; line-height: 22px;">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
             您好！非常感谢贵公司一直以来对英特尔的大力支持！特此告知您2019年第四季度数据中心英特尔<Sup></Sup>Xeon至强<Sup></Sup>可扩展处理器组合促销奖励计划，如下：
            </td>
          </tr>
        </StanceTable>

        <StanceTable>
          <tr>
            <TCell width="25">1.</TCell>
            <TCell>
              本促销活动受以下条款和条件约束（“促销条款”），此外仍须遵守英特尔
              <Sup></Sup>技术合作伙伴的条款和条件，包括附录A与积分补充条款和条件（“英特尔
              <Sup></Sup>技术合作伙伴条款”），该条款为本促销条款的一部分，其详情可在此网址查询：
              <a
                href="https://www.intel.com/content/www/us/en/technology-provider/legal/program-terms-and-conditions.html"
                target="_blank"
              >https://www.intel.com/content/www/us/en/technology-provider/legal/program-terms-and-conditions.html</a>
              促销条款和英特尔
              <Sup></Sup>技术合作伙伴条款统称为“活动规则”。
            </TCell>
          </tr>
          <tr>
            <TCell width="25">2.</TCell>
            <TCell>
              本奖励计划有效期为2019年10月1日至2019年12月31日（“活动期间”），
              适用对象为中华人民共和国（仅为本促销条款的目的，系指不包括香港、澳门和台湾）的英特尔
              <Sup></Sup>技术合作伙伴中已激活的至尊会员及菁英会员（“合格会员”）。
            </TCell>
          </tr>
          <tr>
            <TCell width="25">3.</TCell>
            <TCell>
              在促销活动期间，对合格会员采购如下列表中的英特尔<Sup></Sup>产品（“符合条件的英特尔<Sup></Sup>产品”），英特尔将实行以下积分奖励：
            </TCell>
          </tr>
          <tr height="10"></tr>
        </StanceTable>

        <StanceTable hasTop>
          <!-- <tr>
            <td width="25"></td>
            <td>表一：</td>
          </tr> -->
          <!-- <tr>
            <td width="25"></td>
            <td>
              <DataTable :dataSource="beforeData" :column="columnBefore" width="608"></DataTable>
            </td>
          </tr> -->
          <!-- <tr>
            <td width="25"></td>
            <td>表二：</td>
          </tr> -->
          <tr>
            <td width="25"></td>
            <td>
              <DataTable :dataSource="productData" :column="columnProduce" width="608" :headStyle="{ 'background-color': '#0070C0', color: '#ffffff' }"></DataTable>
            </td>
          </tr>
          <tr height="10"></tr>
          <tr>
            <td width="25"></td>
            <td>
              <DataTable
                :dataSource="usualData"
                :column="columnC"
                width="608"
                :headStyle="{ 'background-color': '#0070C0', color: '#ffffff' }"
              ></DataTable>
              <StanceTable hasTop width="608"></StanceTable>
              <DataTable
                :dataSource="usualDataExtend"
                :column="columnC"
                width="608"
                :headStyle="{ 'background-color': '#0070C0', color: '#ffffff' }"
              ></DataTable>
              <StanceTable hasTop width="608" hasBottom>
                <tr>
                  <TCell>
                    合格会员完成以下课程即可赚取高达100分的培训课程积分。积分以业务ID（GID）为单位发放，多次完成同一课程只能赚取一次积分。
                  </TCell>
                </tr>
              </StanceTable>
              <DataTable :dataSource="AfterData" :column="columnAfter4C" width="608" :headStyle="{ 'background-color': '#0070C0', color: '#ffffff' }"></DataTable>
              
            </td>
          </tr>
        </StanceTable>

        <StanceTable hasTop hasBottom>
          <tr>
            <TCell width="25">4.</TCell>
            <TCell>
              在此次促销活动中，购买参与活动英特尔产品的积分赚取日期为购买英特尔产品的发票开具日期。
              英特尔将在促销结束后60（六十）天内，根据规则，向符合条件且遵守各项规则的合作伙伴发放在本次促销活动中奖励的积分。
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
            <TCell>
              活动规则以英文版本为准，且英文版优先于其他任何翻译版本。若本促销活动条款和条件与ITP项目条款和条件存在冲突，应以此促销条款和条件为准。
              任何英特尔商标许可协议和/或英特尔标识许可协议的条款均应优先于本促销活动条款和条件中涉及上述协议内容的条款。
              除非英特尔授权代表书面签署，英特尔的标准销售条款和条件将适用于任何合格会员与英特尔之间发生的英特尔产品购买或积分兑换等交易，且在适用中优先于任何其他协议。
            </TCell>
          </tr>

          <tr>
            <TCell width="25">8.</TCell>
            <TCell>本促销条款中未另行定义的大写术语与在ITP项目条款中的大写术语具有相同含义。</TCell>
          </tr>
          <tr>
            <TCell width="25">9.</TCell>
            <TCell>合格会员接受本促销活动中的积分表示您接受此促销活动条款和条件。</TCell>
          </tr>
          <tr>
            <TCell width="25">10.</TCell>
            <TCell>
              英特尔保留以任何形式通知客户的方式，随时修改、暂停或终止此次促销活动的权利，且上述修改、暂停或终止应立即生效，
              但不影响促销活动中已累积的任何权益，除此之外英特尔不因上述修改、暂停或终止而承担任何责任。
            </TCell>
          </tr>
          <tr>
            <TCell width="25">11.</TCell>
            <TCell>
              依照英特尔的网站使用条款
              <a
                href="https://www.intel.cn/content/www/cn/zh/legal/terms-of-use.html"
                target="_blank"
              >（https://www.intel.cn/content/www/cn/zh/legal/terms-of-use.html）</a>，
              凡以您的账户在英特尔网站上进行的操作，均视为您的操作并由您负责；如果您的账户、密码等信息有误或发生泄露，导致您的权益受损，请理解英特尔将不承担任何责任。
            </TCell>
          </tr>
        </StanceTable>

        <!-- ------------------------------------ english part -->
        <StanceTable hasTop hasBottom>
          <tr height="10"></tr>
          <tr>
            <TCell :ostyle="{ 'font-size': '13px', 'font-weight': '600'}">
              Data Center Intel<Sup></Sup> Xeon<Sup></Sup> Scalable Processor Bundles (“Promotion”) Terms and Conditions 
            </TCell>
          </tr>
          <tr height="10"></tr>
        </StanceTable>

        <StanceTable>
          <tr>
            <TCell width="25">1.</TCell>
            <TCell>
              This Promotion is governed by these terms and conditions (“Promotion Terms”), and the terms and conditions of Intel
              <Sup></Sup>Technology Provider, including Exhibit A,
              Points Terms and Conditions (“Intel
              <Sup></Sup>Technology Provider Terms”),which are incorporated herein and available at:
              <a
                href="https://www.intel.com/content/www/us/en/technology-provider/legal/program-terms-and-conditions.html "
                target="_blank"
              >https://www.intel.com/content/www/us/en/technology-provider/legal/program-terms-and-conditions.html.</a>
              The Promotion Terms and the Intel
              <Sup></Sup>Technology Provider Terms are collectively, the “Rules”.
            </TCell>
          </tr>
          <tr>
            <TCell width="25">2.</TCell>
            <TCell>
              This Promotion is effective from October 1, 2019 until December 31,
              2019 (the “Promotion Period”) and available to active Platinum and Gold partners
              of Intel
              <Sup></Sup>Technology Provider in the People’s Republic of China (excluding Hong Kong, Macao and Taiwan,
              for the purpose of the Promotion Terms) (“Eligible Partners”).
            </TCell>
          </tr>
          <tr>
            <TCell width="25">3.</TCell>
            <TCell>
              Intel will award Eligible Partners the following points per unit for purchases of the Intel<Sup></Sup> products listed below (“Qualifying Intel Products”) during the Promotion Period:
            </TCell>
          </tr>
        </StanceTable>

        <StanceTable hasTop>

          <!-- <tr>
            <td width="25"></td>
            <td>
              <DataTable :dataSource="beforeData" :column="columnBefore" width="608"></DataTable>
            </td>
          </tr>
          <tr height="10"></tr> -->
          <tr>
            <td width="25"></td>
            <td>
              <DataTable :dataSource="productData" :column="columnProduce" width="608" :headStyle="{ 'background-color': '#0070C0', color: '#ffffff' }"></DataTable>
            </td>
          </tr>
          <tr height="10"></tr>
          <tr>
            <td width="25"></td>
            <td>
              <DataTable
                :dataSource="usualData"
                :column="columnE"
                width="608"
                :headStyle="{ 'background-color': '#0070C0', color: '#ffffff' }"
              ></DataTable>
              <StanceTable hasTop width="608"></StanceTable>
              <DataTable
                :dataSource="usualDataExtend"
                :column="columnE"
                width="608"
                :headStyle="{ 'background-color': '#0070C0', color: '#ffffff' }"
              ></DataTable>
              <StanceTable hasTop width="608" hasBottom>
                <tr>
                  <TCell>
                    After purchasing 1 bundle, eligible partners qualify to earn points on training courses. Points are awarded per business ID.
                  </TCell>
                </tr>
              </StanceTable>
              <DataTable :dataSource="AfterData" :column="columnAfter4E" width="608" :headStyle="{ 'background-color': '#0070C0', color: '#ffffff' }"></DataTable>
              
            </td>
          </tr>
        </StanceTable>

        <StanceTable hasTop>
          <tr>
            <TCell width="25">4.</TCell>
            <TCell>In this Promotion, final Points awarded is based on the valid data from Intel scanning system. Intel will award Points under this Promotion within 60 (sixty) days of the end of the Promotion Period, subject to Eligible Partner’s compliance with the Rules.</TCell>
          </tr>
        </StanceTable>

        <StanceTable hasTop hasBottom>
          <tr>
            <TCell width="25">5.</TCell>
            <TCell>
              Eligible Partners may:
              <ListTable :dataSource="dataSource3" width="608" hasSpace isLetter></ListTable>
            </TCell>
          </tr>
          <tr>
            <TCell width="25">6.</TCell>
            <TCell>
              Without prejudice to any right and remedy provided for in the Rules and any other right and remedy available at law, if an Eligible Partner does not comply with the Rules, Intel may:
              <ListTable :dataSource="dataSource4" width="608" hasSpace isLetter></ListTable>
            </TCell>
          </tr>
          <tr>
            <TCell width="25">7.</TCell>
            <TCell>
              The English language version of the Rules shall prevail over any translation. If there is a conflict between the Promotion Terms and the ITP Program Terms,
              the Promotion Terms shall prevail. The terms of any Intel trademark license agreement(s) and/or Intel logo license agreement(s) shall prevail over the Promotion Terms with respect to the subject matter of such agreement(s). Intel’s standard terms and conditions of sale shall govern any purchase or redemption of Points for Intel products made between
              the Eligible Partner and Intel and shall prevail over any other agreements unless in writing and signed by an authorized representative of Intel.
            </TCell>
          </tr>
          <tr>
            <TCell width="25">8.</TCell>
            <TCell>Capitalized terms which are not defined in these Promotion Terms shall have the meaning given to them in the ITP Program Terms.</TCell>
          </tr>
          <tr>
            <TCell width="25">9.</TCell>
            <TCell>Eligible Partner’s acceptance of the Points in this Promotion indicates Eligible Partner’s acceptance to the Promotion Terms.</TCell>
          </tr>
          <tr>
            <TCell width="25">10.</TCell>
            <TCell>
              Intel reserves the right to modify, suspend or terminate the Promotion at any time and for any reason with immediate effect,
              without prejudice to any rights that have already accrued under the Promotion but with no further liability, by giving notice in any form to Customer.
            </TCell>
          </tr>
          <tr>
            <TCell width="25">11.</TCell>
            <TCell>
              In accordance with Intel Terms of Use
              （
              <a
                href="(https://www.intel.com/content/www/us/en/legal/terms-of-use.html"
                target="_blank"
              >(https://www.intel.com/content/www/us/en/legal/terms-of-use.html</a>）,
              you are entirely responsible for any and all activities that occur under your account at any Intel web site, and Intel will not be liable for any loss that you may incur as a result of any error in the information provided by you with regard to your account or password, or as a result of someone else using your account or password.
            </TCell>
          </tr>
          <tr height="10"></tr>
        </StanceTable>

        <Footer hasExplain></Footer>
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
  DataTable,
  Footer1,
  Sup,
  ImageRow
} from "@/components/edm";

const dataSource1 = [
  { text: "在此促销活动中最高可赚取300,400积分；" },
  { text: "可同时参与本次促销活动和其他积分活动；" },
  {
    text:
      "不可同时参加针对本次促销活动中符合条件的英特尔产品所进行的其他英特尔通知的折扣或促销活动，不论折扣或促销活动是针对本促销活动的合格会员，或是代表合格会员的第三方；"
  },
  { text: "不可以转让此次促销活动中赚取的积分；且" },
  { text: "不可以变现此次促销活动中赚取的积分。" }
];
const dataSource2 = [
  { text: "撤销合格会员在此次促销活动中原可获得的积分奖励；" },
  {
    text: "调整合格会员在此次促销活动中获取积分奖励的数额；"
  },
  { text: "不允许您兑换在此次促销活动中获取的奖励积分；" },
  {
    text:
      "用合格会员现有的积分或未来赚取的积分抵销合格会员通过此次促销活动赚取并已用于兑换的全部（或部分）奖励积分；并且/或"
  },
  {
    text:
      "索回合格会员在本次促销活动中赚取的且已用于兑换的全部（或部分）奖励积分之价值。"
  }
];
const dataSource3 = [
  {
    text: "earn up to 300,400 points under this Promotion;"
  },
  {
    text: "combine this Promotion with other Points offers;"
  },
  {
    text:
      "will not combine this Promotion with other discounts or promotions on Qualifying Intel Products whether offered to the Eligible Partner, or to a third party on its behalf, as notified by Intel;"
  },
  { text: "not transfer Points under this Promotion; and" },
  { text: "not receive cash alternatives for Points under this Promotion." }
];

const dataSource4 = [
  {
    text:
      "withhold the Points that would otherwise be awarded to Eligible Partner under the Promotion;  "
  },
  {
    text:
      "adjust the number of Points to be awarded to Eligible Partner under the Promotion;"
  },
  {
    text: "refuse to allow redemption of Points awarded under the Promotion; "
  },
  {
    text:
      "set–off the entire (or part) value of the Points awarded under the Promotion that Eligible Partner has redeemed, against Eligible Partner’s existing or future credit claims; and/or"
  },
  {
    text:
      "obtain reimbursement of the entire (or part) value of the Points awarded to Eligible Partner under the Promotion that Eligible Partner has redeemed."
  }
];

const columnBefore = [
  {
    title: "数量级别（单位产品）",
    dataIndex: "text1",
    width: 140
  },
  {
    title: "1TB",
    dataIndex: "text2"
  },
  {
    title: "2TB",
    dataIndex: "text3"
  },
  {
    title: "4TB",
    dataIndex: "text4"
  },
  {
    title: "8TB",
    dataIndex: "text5"
  },
  {
    title: "1.6TB",
    dataIndex: "text6"
  },
  {
    title: "3.2TB",
    dataIndex: "text7"
  },
  {
    title: "6.4TB",
    dataIndex: "text8"
  },
  {
    title: "7.6TB",
    dataIndex: "text9"
  }
];

const beforeData = [
  {
    text1: "1-5",
    text2: "60",
    text3: "110",
    text4: "220",
    text5: "440",
    text6: "70",
    text7: "140",
    text8: "300",
    text9: "400"
  },
  {
    text1: "6-15",
    text2: "70",
    text3: "120",
    text4: "230",
    text5: "450",
    text6: "80",
    text7: "150",
    text8: "310",
    text9: "410"
  },
  {
    text1: "16-30",
    text2: "80",
    text3: "130",
    text4: "240",
    text5: "460",
    text6: "90",
    text7: "160",
    text8: "320",
    text9: "420"
  },
  {
    text1: "31-50",
    text2: "100",
    text3: "150",
    text4: "260",
    text5: "480",
    text6: "110",
    text7: "180",
    text8: "340",
    text9: "440"
  },
  {
    text1: "51+",
    text2: "120",
    text3: "170",
    text4: "280",
    text5: "500",
    text6: "130",
    text7: "200",
    text8: "360",
    text9: "460"
  }
];

const columnProduce = [
  
  {
    title: "符合条件的英特尔<sup>®</sup>产品",
    dataIndex: "text1",
    // align: "left"
  },
  {
    title: "积分/组合",
    dataIndex: "text2",
    width: 100,
  },
]

const columnC = [  
  {
    title: "产品编号",
    dataIndex: "text1",
    width: 150,
    align: 'left',
  },
  {
    title: "积分赚取规则说明",
    dataIndex: "text2",
    align: "left"
  },
  // {
  //   title: "积分/单位产品",
  //   dataIndex: "text3",
  //   width: 80,
  // },

];

const columnE = [    
  {
    title: "Product Number",
    dataIndex: "text1",
    align: 'left',
    width: 150,
  },
  {
    title: "Earning Rule Description",
    dataIndex: "text2",
    align: "left"
  },
  // {
  //   title: "Points per Unit",
  //   dataIndex: "text3",
  //   width: 80,
  // },

];

const productData = [
  {
    text1: '组合采购符合条件的英特尔<sup>®</sup>Xeon至强@处理器和符合条件的英特尔<sup>®</sup>固态盘产品',
    text2: '300'
  }
]
const usualData = [
  {"text2":"符合条件的英特尔<sup>®</sup>Xeon至强<sup>®</sup>处理器", text1: 'up'},{"text1":"CD8069504198101 ","text2":"Intel<sup>®</sup> Xeon<sup>®</sup> Gold 6210U Processor - CD8069504198101 "},{"text1":"CD8069503993403","text2":"Intel<sup>®</sup> Xeon<sup>®</sup> Gold 6210U Processor - CD8069503993403 "},{"text1":"CD8069504198002 ","text2":"Intel<sup>®</sup> Xeon<sup>®</sup> Gold 6212U Processor - CD8069504198002 "},{"text1":"CD8069504285204","text2":"Intel<sup>®</sup> Xeon<sup>®</sup> Gold 6222V Processor - CD8069504285204"},{"text1":"CD8069504283404","text2":"Intel<sup>®</sup> Xeon<sup>®</sup> Gold 6226 Processor - CD8069504283404"},{"text1":"BX806956230","text2":"Intel<sup>®</sup> Xeon<sup>®</sup> Gold 6230 Processor - BX806956230"},{"text1":"CD8069504193701","text2":"Intel<sup>®</sup> Xeon<sup>®</sup> Gold 6230 Processor - CD8069504193701"},{"text1":"CD8069503959702","text2":"Intel<sup>®</sup> Xeon<sup>®</sup> Gold 6230 Processor - CD8069503959702 "},{"text1":"CD8069504283604","text2":"Intel<sup>®</sup> Xeon<sup>®</sup> Gold 6230N Processor - CD8069504283604"},{"text1":"CD8069504283704","text2":"Intel<sup>®</sup> Xeon<sup>®</sup> Gold 6230T Processor - CD8069504283704"},{"text1":"BX806956234","text2":"Intel<sup>®</sup> Xeon<sup>®</sup> Gold 6234 Processor - BX806956234"},{"text1":"CD8069504283304","text2":"Intel<sup>®</sup> Xeon<sup>®</sup> Gold 6234 Processor - CD8069504283304"},{"text1":"BX806956238","text2":"Intel<sup>®</sup> Xeon<sup>®</sup> Gold 6238 Processor - BX806956238"},{"text1":"CD8069504283104","text2":"Intel<sup>®</sup> Xeon<sup>®</sup> Gold 6238 Processor - CD8069504283104"},{"text1":"CD8069504284704","text2":"Intel<sup>®</sup> Xeon<sup>®</sup> Gold 6238L Processor - CD8069504284704"},{"text1":"CD8069504284604","text2":"Intel<sup>®</sup> Xeon<sup>®</sup> Gold 6238M Processor - CD8069504284604"},{"text1":"CD8069504200401 ","text2":"Intel<sup>®</sup> Xeon<sup>®</sup> Gold 6238T Processor - CD8069504200401 "},{"text1":"CD8069503960202","text2":"Intel<sup>®</sup> Xeon<sup>®</sup> Gold 6238T Processor - CD8069503960202"},{"text1":"BX806956240","text2":"Intel<sup>®</sup> Xeon<sup>®</sup> Gold 6240 Processor - BX806956240"},{"text1":"CD8069504194001","text2":"Intel<sup>®</sup> Xeon<sup>®</sup> Gold 6240 Processor - CD8069504194001"},{"text1":"CD8069503958300 ","text2":"Intel<sup>®</sup> Xeon<sup>®</sup> Gold 6240 Processor - CD8069503958300 "},{"text1":"CD8069504284503","text2":"Intel<sup>®</sup> Xeon<sup>®</sup> Gold 6240L Processor - CD8069504284503"},{"text1":"CD8069504284403","text2":"Intel<sup>®</sup> Xeon<sup>®</sup> Gold 6240M Processor - CD8069504284403"},{"text1":"CD8069504200501 ","text2":"Intel<sup>®</sup> Xeon<sup>®</sup> Gold 6240Y Processor - CD8069504200501 "},{"text1":"BX806956242","text2":"Intel<sup>®</sup> Xeon<sup>®</sup> Gold 6242 Processor - BX806956242"},{"text1":"CD8069504194101","text2":"Intel<sup>®</sup> Xeon<sup>®</sup> Gold 6242 Processor - CD8069504194101"},{"text1":"CD8069503958400 ","text2":"Intel<sup>®</sup> Xeon<sup>®</sup> Gold 6242 Processor - CD8069503958400 "},{"text1":"CD8069504194202","text2":"Intel<sup>®</sup> Xeon<sup>®</sup> Gold 6244 Processor - CD8069504194202"},{"text1":"CD8069503961203 ","text2":"Intel<sup>®</sup> Xeon<sup>®</sup> Gold 6244 Processor - CD8069503961203 "},{"text1":"CD8069504282905","text2":"Intel<sup>®</sup> Xeon<sup>®</sup> Gold 6246 Processor - CD8069504282905"},{"text1":"BX806956248","text2":"Intel<sup>®</sup> Xeon<sup>®</sup> Gold 6248 Processor - BX806956248"},{"text1":"CD8069503959201","text2":"Intel<sup>®</sup> Xeon<sup>®</sup> Gold 6248 Processor - CD8069503959201"},{"text1":"CD8069504194301 ","text2":"Intel<sup>®</sup> Xeon<sup>®</sup> Gold 6248 Processor - CD8069504194301 "},{"text1":"BX806956252","text2":"Intel<sup>®</sup> Xeon<sup>®</sup> Gold 6252 Processor - BX806956252"},{"text1":"CD8069503959002","text2":"Intel<sup>®</sup> Xeon<sup>®</sup> Gold 6252 Processor - CD8069503959002"},{"text1":"CD8069504194401 ","text2":"Intel<sup>®</sup> Xeon<sup>®</sup> Gold 6252 Processor - CD8069504194401 "},{"text1":"CD8069504283503","text2":"Intel<sup>®</sup> Xeon<sup>®</sup> Gold 6252N Processor - CD8069504283503"},{"text1":"CD8069504194501","text2":"Intel<sup>®</sup> Xeon<sup>®</sup> Gold 6254 Processor - CD8069504194501"},{"text1":"CD8069503960001 ","text2":"Intel<sup>®</sup> Xeon<sup>®</sup> Gold 6254 Processor - CD8069503960001 "},{"text1":"CD8069504285004","text2":"Intel<sup>®</sup> Xeon<sup>®</sup> Gold 6262V Processor - CD8069504285004"},{"text1":"CD8069504194601 ","text2":"Intel<sup>®</sup> Xeon<sup>®</sup> Platinum 8253 Processor - CD8069504194601 "},{"text1":"BX806958256","text2":"Intel<sup>®</sup> Xeon<sup>®</sup> Platinum 8256 Processor - BX806958256"},{"text1":"CD8069504194701 ","text2":"Intel<sup>®</sup> Xeon<sup>®</sup> Platinum 8256 Processor - CD8069504194701 "},{"text1":"CD8069504201101 ","text2":"Intel<sup>®</sup> Xeon<sup>®</sup> Platinum 8260 Processor - CD8069504201101 "},{"text1":"CD8069503958602","text2":"Intel<sup>®</sup> Xeon<sup>®</sup> Platinum 8260 Processor - CD8069503958602 "},{"text1":"CD8069503993501","text2":"Intel<sup>®</sup> Xeon<sup>®</sup> Platinum 8260L Processor - CD8069503993501 "},{"text1":"CD8069504201001 ","text2":"Intel<sup>®</sup> Xeon<sup>®</sup> Platinum 8260L Processor - CD8069504201001 "},{"text1":"CD8069503959401","text2":"Intel<sup>®</sup> Xeon<sup>®</sup> Platinum 8260M Processor - CD8069503959401 "},{"text1":"CD8069504201201 ","text2":"Intel<sup>®</sup> Xeon<sup>®</sup> Platinum 8260M Processor - CD8069504201201 "},{"text1":"CD8069504200902 ","text2":"Intel<sup>®</sup> Xeon<sup>®</sup> Platinum 8260Y Processor - CD8069504200902 "},{"text1":"CD8069503957700","text2":"Intel<sup>®</sup> Xeon<sup>®</sup> Platinum 8268 Processor - CD8069503957700 "},{"text1":"CD8069504195101 ","text2":"Intel<sup>®</sup> Xeon<sup>®</sup> Platinum 8268 Processor - CD8069504195101 "},{"text1":"CD8069503957603","text2":"Intel<sup>®</sup> Xeon<sup>®</sup> Platinum 8270 Processor - CD8069503957603 "},{"text1":"CD8069504195201 ","text2":"Intel<sup>®</sup> Xeon<sup>®</sup> Platinum 8270 Processor - CD8069504195201 "},{"text1":"CD8069504195501 ","text2":"Intel<sup>®</sup> Xeon<sup>®</sup> Platinum 8276 Processor - CD8069504195501 "},{"text1":"CD8069503957401","text2":"Intel<sup>®</sup> Xeon<sup>®</sup> Platinum 8276 Processor - CD8069503957401 "},{"text1":"CD8069504195301 ","text2":"Intel<sup>®</sup> Xeon<sup>®</sup> Platinum 8276L Processor - CD8069504195301 "},{"text1":"CD8069504079401","text2":"Intel<sup>®</sup> Xeon<sup>®</sup> Platinum 8276L Processor - CD8069504079401 "},{"text1":"CD8069503957101","text2":"Intel<sup>®</sup> Xeon<sup>®</sup> Platinum 8276M Processor - CD8069503957101 "},{"text1":"CD8069504195401 ","text2":"Intel<sup>®</sup> Xeon<sup>®</sup> Platinum 8276M Processor - CD8069504195401 "},{"text1":"CD8069504129800","text2":"Intel<sup>®</sup> Xeon<sup>®</sup> Platinum 8280 Processor - CD8069504129800 "},{"text1":"CD8069504228001 ","text2":"Intel<sup>®</sup> Xeon<sup>®</sup> Platinum 8280 Processor - CD8069504228001 "},{"text1":"CD8069504134100","text2":"Intel<sup>®</sup> Xeon<sup>®</sup> Platinum 8280L Processor - CD8069504134100 "},{"text1":"CD8069504228201 ","text2":"Intel<sup>®</sup> Xeon<sup>®</sup> Platinum 8280L Processor - CD8069504228201 "},{"text1":"CD8069504134200","text2":"Intel<sup>®</sup> Xeon<sup>®</sup> Platinum 8280M Processor - CD8069504134200 "},{"text1":"CD8069504228101 ","text2":"Intel<sup>®</sup> Xeon<sup>®</sup> Platinum 8280M Processor - CD8069504228101 "}
];
const usualDataExtend = [
  {"text2":"符合条件的英特尔<sup>®</sup>固态盘产品", text1: 'up'},{"text1":"SSDPE21K015TA01","text2":"Intel<sup>®</sup> Optane™ SSD DC P4800X Series 1.5TB"},{"text1":"SSDPE21K015TA10","text2":"Intel<sup>®</sup> Optane™ SSD DC P4800X Series 1.5TB"},{"text1":"SSDPED1K015TA01","text2":"Intel<sup>®</sup> Optane™ SSD DC P4800X Series 1.5TB"},{"text1":"SSDPED1K015TA10","text2":"Intel<sup>®</sup> Optane™ SSD DC P4800X Series 1.5TB"},{"text1":"SSDPD21K375GA01","text2":"Intel<sup>®</sup> Optane™ SSD DC P4800X Series 375GB"},{"text1":"SSDPE21K375GA01","text2":"Intel<sup>®</sup> Optane™ SSD DC P4800X Series 375GB"},{"text1":"SSDPE21K375GA10","text2":"Intel<sup>®</sup> Optane™ SSD DC P4800X Series 375GB"},{"text1":"SSDPED1K375GA01","text2":"Intel<sup>®</sup> Optane™ SSD DC P4800X Series 375GB"},{"text1":"SSDPED1K375GA10","text2":"Intel<sup>®</sup> Optane™ SSD DC P4800X Series 375GB"},{"text1":"SSDPE21K750GA01","text2":"Intel<sup>®</sup> Optane™ SSD DC P4800X Series 750GB"},{"text1":"SSDPE21K750GA10","text2":"Intel<sup>®</sup> Optane™ SSD DC P4800X Series 750GB"},{"text1":"SSDPED1K750GA01","text2":"Intel<sup>®</sup> Optane™ SSD DC P4800X Series 750GB"},{"text1":"SSDPED1K750GA10","text2":"Intel<sup>®</sup> Optane™ SSD DC P4800X Series 750GB"},{"text1":"MDTPED1K015TA10","text2":"Intel<sup>®</sup> Optane™ SSD DC P4800X Series with Intel<sup>®</sup> Memory Drive Technology 1.5TB"},{"text1":"MDTPED1K015TA01","text2":"Intel<sup>®</sup> Optane™ SSD DC P4800X Series with Intel<sup>®</sup> Memory Drive Technology 1.5TB"},{"text1":"MDTPE21K015TA10","text2":"Intel<sup>®</sup> Optane™ SSD DC P4800X Series with Intel<sup>®</sup> Memory Drive Technology 1.5TB"},{"text1":"MDTPE21K015TA01","text2":"Intel<sup>®</sup> Optane™ SSD DC P4800X Series with Intel<sup>®</sup> Memory Drive Technology 1.5TB"},{"text1":"MDTPED1K375GA10","text2":"Intel<sup>®</sup> Optane™ SSD DC P4800X Series with Intel<sup>®</sup> Memory Drive Technology 375GB"},{"text1":"MDTPED1K375GA01","text2":"Intel<sup>®</sup> Optane™ SSD DC P4800X Series with Intel<sup>®</sup> Memory Drive Technology 375GB"},{"text1":"MDTPE21K375GA10","text2":"Intel<sup>®</sup> Optane™ SSD DC P4800X Series with Intel<sup>®</sup> Memory Drive Technology 375GB"},{"text1":"MDTPE21K375GA01","text2":"Intel<sup>®</sup> Optane™ SSD DC P4800X Series with Intel<sup>®</sup> Memory Drive Technology 375GB"},{"text1":"MDTPED1K750GA10","text2":"Intel<sup>®</sup> Optane™ SSD DC P4800X Series with Intel<sup>®</sup> Memory Drive Technology 750GB"},{"text1":"MDTPED1K750GA01","text2":"Intel<sup>®</sup> Optane™ SSD DC P4800X Series with Intel<sup>®</sup> Memory Drive Technology 750GB"},{"text1":"MDTPE21K750GA10","text2":"Intel<sup>®</sup> Optane™ SSD DC P4800X Series with Intel<sup>®</sup> Memory Drive Technology 750GB"},{"text1":"MDTPE21K750GA01","text2":"Intel<sup>®</sup> Optane™ SSD DC P4800X Series with Intel<sup>®</sup> Memory Drive Technology 750GB"},{"text1":"SSDPE21K100GA10","text2":"Intel<sup>®</sup> Optane™ SSD DC P4801X Series 100GB"},{"text1":"SSDPE21K100GA01","text2":"Intel<sup>®</sup> Optane™ SSD DC P4801X Series 100GB"},{"text1":"SSDPEL1K100GA01","text2":"Intel<sup>®</sup> Optane™ SSD DC P4801X Series 100GB"},{"text1":"SSDPEL1K200GA01","text2":"Intel<sup>®</sup> Optane™ SSD DC P4801X Series 200GB"},{"text1":"SSDPEL1K375GA01","text2":"Intel<sup>®</sup> Optane™ SSD DC P4801X Series 375GB"},{"text1":"SSDPE2NV076T810 ","text2":"Intel<sup>®</sup> SSD D5-P4320 Series 7.6TB"},{"text1":"SSDPE2NV076T801 ","text2":"Intel<sup>®</sup> SSD D5-P4320 Series 7.6TB"},{"text1":"SSDPE2NU076T801","text2":"Intel<sup>®</sup> SSD D5 P4420 Series 7.6TB"},{"text1":"SSDPE2NV153T801","text2":"Intel<sup>®</sup> SSD D5 P4326 Series 15TB"},{"text1":"SSDPE2NV153T810","text2":"Intel<sup>®</sup> SSD D5 P4326 Series 15TB"},{"text1":"SSDPE2KE076T801","text2":"Intel<sup>®</sup> SSD DC P4610 Series 7.6TB - SSDPE2KE076T801"},{"text1":"SSDPE2KE016T801","text2":"Intel<sup>®</sup> SSD DC P4610 Series 1.6TB - SSDPE2KE016T801"},{"text1":"SSDPE2KE032T801","text2":"Intel<sup>®</sup> SSD DC P4610 Series 3.2.0TB - SSDPE2KE032T801"},{"text1":"SSDPE2KE064T801","text2":"Intel<sup>®</sup> SSD DC P4610 Series 6.4TB - SSDPE2KE064T801"},{"text1":"SSDPE2KX010T801","text2":"Intel<sup>®</sup> SSD DC P4510 Series 1.0TB - SSDPE2KX010T801"},{"text1":"SSDPE2KX010T810","text2":"Intel<sup>®</sup> SSD DC P4510 Series 1.0TB - SSDPE2KX010T810"},{"text1":"SSDPE2KX020T801","text2":"Intel<sup>®</sup> SSD DC P4510 Series 2.0TB - SSDPE2KX020T801"},{"text1":"SSDPE2KX020T810","text2":"Intel<sup>®</sup> SSD DC P4510 Series 2.0TB - SSDPE2KX020T810"},{"text1":"SSDPE2KX040T801","text2":"Intel<sup>®</sup> SSD DC P4510 Series 4.0TB - SSDPE2KX040T801"},{"text1":"SSDPE2KX040T810","text2":"Intel<sup>®</sup> SSD DC P4510 Series 4.0TB - SSDPE2KX040T810"},{"text1":"SSDPE2KX080T801","text2":"Intel<sup>®</sup> SSD DC P4510 Series 8.0TB - SSDPE2KX080T801"},{"text1":"SSDPE2KX080T810","text2":"Intel<sup>®</sup> SSD DC P4510 Series 8.0TB - SSDPE2KX080T810"}
]
const columnAfter4C = [
  {
    title: "培训课程名称",
    dataIndex: "text1",
    align: 'left'
  },
  // {
  //   title: "课程链接",
  //   dataIndex: "text2",
  //   width: 300,
  //   linkTarget: true
  // },
  {
    title: "积分/课程",
    dataIndex: "text2",
    width: 80
  }
];
const columnAfter4E = [
  {
    title: "Course Title",
    dataIndex: "text1",
    align: 'left',
  },
  // {
  //   title: "Link",
  //   dataIndex: "text2",
  //   width: 300,
  //   linkTarget: true
  // },
  {
    title: "Points per course",
    dataIndex: "text2",
    width: 80
  }
];
const AfterData = [
  {
    text1:
      '<a href="http://channeltraining.intel.com/diweb/gateway/init/1/f/catalog*2Fitem*2Feid*2F295829" target="_blank">Selling 2nd Generation Intel<sup>®</sup> Xeon<sup>®</sup> Scalable processors Workload-Optimized skus</a><br/>An introduction to the new category of skus available with the new 2nd Gen Intel<sup>®</sup> Xeon<sup>®</sup> Scalable processors. Learn the new letter designators and which workloads they support and get insights on how to best position to your customers. <br/> <a href="http://channeltraining.intel.com/diweb/gateway/init/1/f/catalog*2Fitem*2Feid*2F295829" traget="_blank">http://channeltraining.intel.com/diweb/gateway/init/1/f/catalog*2Fitem*2Feid*2F295829</a>',

    text2: "200"
  },
  {
    text1: "Intel<sup>®</sup> Deep Learning Boost Technology: Deep Dive <br/>  Deep dive into the 2nd Gen Intel<sup>®</sup> Xeon<sup>®</sup>  Scalable processor's unique technology enabling AI/Analytics, Intel<sup>®</sup> Deep Learning Boost Technology. In this course Intel experts will take you through what the technology is, how it works, show a demonstration, and provide insights for the benefits and flexibility this offers resellers as you provide solutions and recommendations to customer for how they can make the most of their IT infrastructure. <br/> <a href='http://channeltraining.intel.com/diweb/gateway/init/1/f/catalog*2Fitem*2Feid*2F348007' target='_blank'>http://channeltraining.intel.com/diweb/gateway/init/1/f/catalog*2Fitem*2Feid*2F348007</a>",
    text2: "200"
  }
];

export default {
  data() {
    return {
      dataSource1,
      dataSource2,
      dataSource3,
      dataSource4,
      columnC,
      columnE,
      columnAfter4C,
      columnAfter4E,
      usualData,
      usualDataExtend,
      AfterData,
      beforeData,
      columnBefore,
      columnProduce,
      productData,
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
    TCell
  }
};
</script>

