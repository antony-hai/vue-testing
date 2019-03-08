<template>
  <table align="center" style="text-align: center; font-family: 微软雅黑; margin: 0 auto;">
    <tr>
      <td>
        <Nav></Nav>

        <ImageRow imgUrl="http://show.easeye.com.cn/fckattach/2018-12-13/e3b9e77152a2095d72521d1898764e2d/image/359d8326db866babedd853726d79ff11.png"></ImageRow>

        <StanceTable hasTop hasBottom>
          <tr>
            <td style="font-size:12px;text-align: left; font-family: 微软雅黑; line-height: 22px;">尊敬的英特爾<Sup></Sup>技術合作夥伴：</td>
          </tr>
          <tr height='10'></tr>
          <tr>
            <td style="font-size:12px;text-align: left; font-family: 微软雅黑; line-height: 22px;">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              您好！非常感謝貴公司一直以來對英特爾的大力支持！特此告知您2019年第二季度英特爾<Sup></Sup>香港澳門地區常規積分獎勵計劃，如下：
            </td>
          </tr>
        </StanceTable>

        <StanceTable>
          <tr>
            <TCell width="25" >1.</TCell>
            <TCell>
              本獎勵計劃受以下條款和條件約束（“獎勵計劃條款”），此外仍須遵守英特爾<Sup></Sup>技術合作夥伴的條款和條件，包括附錄A與積分補充條款和條件（“英特爾<Sup></Sup>技術合作夥伴條款”），該條款為本獎勵計劃條款的一部分，其詳情可在此網址查詢：
              <a href="https://www.intel.com/content/www/cn/zh/technology-provider/legal/program-terms-and-conditions.html" target="_blank">https://www.intel.com/content/www/cn/zh/technology-provider/legal/program-terms-and-conditions.html.</a>
              獎勵計劃條款和英特爾<Sup></Sup>技術合作夥伴條款統稱為“活動規則”。
            </TCell>
          </tr>
          <tr>
            <TCell width="25">2.</TCell>
            <TCell>本獎勵計劃有效期為2019年04月01日至2019年06月30日（“活動期間”），適用對象為中華人民共和國香港特別行政區、澳門特別行政區的英特爾<Sup></Sup>技術合作夥伴中已激活的至尊會員、菁英會員（“合格會員”）。</TCell>
          </tr>
          <tr>
            <TCell width="25">3.</TCell>
            <TCell>
              會員的季度考核以及升降級規則
            </TCell>
          </tr>
        </StanceTable>
        <StanceTable hasTop>
          <tr>
            <td width="25"></td>
            <td>
              <DataTable :dataSource="tableData1" :column="column1" width="608"></DataTable>
              <StanceTable hasTop width="608">
                <tr>
                  <TCell>
                    菁英級會員如果當季度達到以上至尊級要求，英特爾銷售人員下個季度可提名其為至尊級會員；
                    註冊級會員如果當季度達到以上菁英或至尊級要求，英特爾銷售人員下個季度可提名其為菁英級或至尊級會員。
                  </TCell>
                </tr>
                <tr height="10"></tr>
                <tr>
                  <TCell>菁英級會員如果連續兩個季度沒有達到以上要求，下個季度會被降級為註冊級會員；至尊級會員如果連續兩個季度沒有達到以上要求，下個季度會被降級為菁英級會員。</TCell>
                </tr>
                <tr height="10"></tr>
                <tr>
                  <TCell>升降級生效時間為下一季度的第一個月底。</TCell>
                </tr>
              </StanceTable>
            </td>
          </tr>
        </StanceTable>

        <StanceTable hasTop>
          <tr>
            <TCell width="25">4.</TCell>
            <TCell>
              在活動期間，對合格會員從英特爾<Sup></Sup>授權總代理（“IAD”）、英特爾<Sup></Sup>授權集成供應商（“IACS”）或英特爾<Sup></Sup>批準供應商（“IAS”）[視具體情況而定]購買的如下列表中的英特爾產品（“符合條件的英特爾<Sup></Sup>產品”），英特爾將實行以下積分獎勵：<br>
            </TCell>
          </tr>
        </StanceTable>

        <StanceTable hasTop>
          <tr>
            <td width="25"></td>
            <td>
              <DataTable :column="column2" :dataSource="tableData2" width="608" :headStyle="{ height: '40px', 'background-color': '#0070C0', color: '#ffffff' }"></DataTable>
            </td>
          </tr>
        </StanceTable>
          
        <StanceTable hasTop>
          <tr>
            <TCell width="25">5.</TCell>
            <TCell>	在本獎勵計劃中，購買參與活動英特爾產品的積分賺取日期為購買英特爾產品的發票開具日期。英特爾將在促銷結束後60（六十）天內，根據規則，
              向符合條件且遵守各項規則的合作夥伴發放在本獎勵計劃中獎勵的積分。
            </TCell>
          </tr>
          <tr>
            <TCell width="25">6.</TCell>
            <TCell>
              合格會員將：
              <ListTable :dataSource="dataSource1" width="608" hasSpace isLetter></ListTable>
            </TCell>
          </tr>
          <tr>
            <TCell width="25">7.</TCell>
            <TCell>
              在不影響活動規則所規定的任何權利和救濟措施以及法律規定的任何其他權利和救濟措施的前提下，如果您未能遵守活動規則，英特爾有權選擇：
              <ListTable :dataSource="dataSource2" width="608" hasSpace></ListTable>
            </TCell>
          </tr>
          <tr>
            <TCell width="25">8.</TCell>
            <TCell>
              活動規則以英文版本為準，且英文版優先於其他任何翻譯版本。若本獎勵計劃條款和條件與ITP項目條款和條件存在沖突，應以此獎勵計劃條款和條件為準。
              任何英特爾商標許可協議和/或英特爾標識許可協議的條款均應優先於本獎勵計劃條款和條件中涉及上述協議內容的條款。
              除非英特爾授權代表書面簽署，英特爾的標準銷售條款和條件將適用於任何合格會員與英特爾之間發生的英特爾產品購買或積分兌換等交易，且在適用中優先於任何其他協議。
            </TCell>
          </tr>
          <tr>
            <TCell width="25">9.</TCell>
            <TCell>本獎勵計劃條款中未另行定義的大寫術語與在ITP項目條款中的大寫術語具有相同含義。</TCell>
          </tr>
          <tr>
            <TCell width="25">10.</TCell>
            <TCell>合格會員接受本促銷活動中的積分表示您接受此獎勵計劃條款和條件。</TCell>
          </tr>
          <tr>
            <TCell width="25">11.</TCell>
            <TCell>英特爾保留以任何形式通知客戶的方式，隨時修改、暫停或終止此次促銷活動的權利，且上述修改、暫停或終止應立即生效，
              但不影響獎勵計劃中已累積的任何權益，除此之外英特爾不因上述修改、暫停或終止而承擔任何責任。</TCell>
          </tr>
        </StanceTable>

        <!-- ------------------------------------english part -->
        <StanceTable hasTop hasBottom>
          <tr height="10"></tr>
          <tr>
            <TCell :ostyle="{ 'font-size': '13px', 'font-weight': '600'}">
              2019 2nd Quarter Regular Points Program for Intel<Sup></Sup> Technology Providers in HK and Macao
            </TCell>
          </tr>
          <tr height="10"></tr>
        </StanceTable>

        <StanceTable>
          <tr>
            <TCell width="25" >1.</TCell>
            <TCell>
               This Promotion is governed by these terms and conditions (“Promotion Terms”), and the terms and conditions of Intel<Sup></Sup> Technology Provider,
                including Exhibit A, Points Terms and Conditions (“Intel<Sup></Sup> Technology Provider Terms”), which are incorporated herein and available at: 
              <a href="https://www.intel.com/content/www/us/en/technology-provider/legal/program-terms-and-conditions.html " target="_blank">https://www.intel.com/content/www/us/en/technology-provider/legal/program-terms-and-conditions.html. </a>
              The Promotion Terms and the Intel<Sup></Sup> Technology Provider Terms are collectively, the “Rules”.
            </TCell>
          </tr>
          <tr>
            <TCell width="25">2.</TCell>
            <TCell>
              This Promotion is effective from Apr 1<sup>st</sup>, 2019 until Jun 30<sup>th</sup>, 2019 (the “Promotion Period”) and available to active Platinum and Gold level partners of Intel<Sup></Sup> Technology Provider in Hong Kong Special Administrative Region of the People’s Republic of China,
               and Macau Special Administrative Region of the People’s Republic of China (“Eligible Partners”). 
            </TCell>
          </tr>
          <tr>
            <TCell width="25">3.</TCell>
            <TCell>
              Membership quarterly performance and renewal guidance: 
              
            </TCell>
          </tr>
        </StanceTable>

        <StanceTable hasTop>
          <tr>
            <td width="25"></td>
            <td>
              <DataTable :dataSource="tableData11" :column="column11" width="608"></DataTable>
              <StanceTable hasTop width="608"> 
                <tr>
                  <TCell>
                    If a Gold Member achieves the Platinum Member criteria in the current quarter, Intel may nominate the Gold Member as a Platinum Member in the first month of the next quarter; if a Registered Member achieves the Gold Member or Platinum Member criteria in the current quarter,
                     Intel may nominate the Registered Member as a Gold Member or Platinum Member in the first month of the next quarter.
                  </TCell>
                </tr>
                <tr height="10"></tr>
                <tr>
                  <TCell>
                    If a Gold Member fails to achieve the Gold Member criteria for two successive quarters, the Gold Member may be downgraded to a Registered Member in the next quarter; if a Platinum Member fails to achieve the Platinum Member criteria for two successive quarters, 
                    the Platinum Member may be downgraded to a Gold Member in the next quarter.
                  </TCell>
                </tr>
                <tr height="10"></tr>
                <tr>
                  <TCell>Any upgrade or downgrade in membership level will become effective in the first month of the next quarter.</TCell>
                </tr>
              </StanceTable>
            </td>
          </tr>
        </StanceTable>

        <StanceTable hasTop>
          <tr>
            <TCell width="25">4.</TCell>
            <TCell>
              Intel will award Eligible Partners the following Points per unit for purchases of the Intel products listed below (“Qualifying Intel Products”) from an Intel<Sup></Sup> Authorized Distributor (“IAD”), Intel Authorized Component Supplier (“IACS”), or Intel<Sup></Sup> Approved Supplier (“IAS”) during the Promotion Period:
            </TCell>
          </tr>
        </StanceTable>

        <StanceTable hasTop>
          <tr>
            <td width="25"></td>
            <td>
              <DataTable :column="column22" :dataSource="tableData2" width="608" :headStyle="{ height: '40px', 'background-color': '#0070C0', color: '#ffffff' }"></DataTable>
            </td>
          </tr>
        </StanceTable>

       

        <StanceTable hasTop hasBottom>
          <tr>
            <TCell width="25">5.</TCell>
            <TCell>
              In this Promotion the relevant date used for establishing the Points earned for the purchase of any Qualifying Intel Product is the invoice date for the Qualifying Intel Product. 
              Intel will award Points under this Promotion within 60 (sixty) days of the end of the Promotion Period, subject to Eligible Partner’s compliance with the Rules. 
            </TCell>
          </tr>
          <tr>
            <TCell width="25">6.</TCell>
            <TCell>
              Eligible Partners may:
              <ListTable :dataSource="dataSource3" width="608" hasSpace isLetter></ListTable>
            </TCell>
          </tr>
          <tr>
            <TCell width="25">7.</TCell>
            <TCell>
              Without prejudice to any right and remedy provided for in the Rules and any other right and remedy available at law, if an Eligible Partner does not comply with the Rules, Intel may:
              <ListTable :dataSource="dataSource4" width="608" hasSpace isLetter></ListTable>
            </TCell>
          </tr>
          <tr>
            <TCell width="25">8.</TCell>
            <TCell>
              The English language version of the Rules shall prevail over any translation. 
              If there is a conflict between the Promotion Terms and the ITP Program Terms, the Promotion Terms shall prevail.
              The terms of any Intel trademark license agreement(s) and/or Intel logo license agreement(s) shall prevail over the Promotion Terms with respect to the subject matter of such agreement(s). Intel’s standard terms and conditions of sale shall govern any purchase or redemption of Points for Intel products made between the Eligible Partner and Intel and shall prevail over any other agreements unless in writing and signed by an authorized representative of Intel.
            </TCell>
          </tr>
          <tr>
            <TCell width="25">9.</TCell>
            <TCell>Capitalized terms which are not defined in these Promotion Terms shall have the meaning given to them in the ITP Program Terms.</TCell>
          </tr>
          <tr>
            <TCell width="25">10.</TCell>
            <TCell>Eligible Partner’s acceptance of the Points in this Promotion indicates Eligible Partner’s acceptance to the Promotion Terms.</TCell>
          </tr>
          <tr>
            <TCell width="25">11.</TCell>
            <TCell>
              Intel reserves the right to modify, suspend or terminate the Promotion at any time and for any reason with immediate effect,
              without prejudice to any rights that have already accrued under the Promotion but with no further liability, by giving notice in any form to Customer.
            </TCell>
          </tr>
          <tr height="10"></tr>
        </StanceTable>

        <Footer isHongKong></Footer>
      </td>
    </tr>
  </table>
</template>

<script>


const dataSource1 = [
  { text: "可同時參與本次活動和其他積分活動；" },
  { text: "不可同時參加針對本獎勵計劃中符合條件的英特爾產品所進行的其他英特爾通知的折扣或促銷活動，不論折扣或促銷活動是針對本獎勵計劃的合格會員，或是代表合格會員的第三方；" },
  { text: "不可以轉讓此次獎勵計劃中賺取的積分；且" },
  { text: "不可以變現此次獎勵計劃中賺取的積分。" }
];
const dataSource2 = [
  { text: "撤銷合格會員在此次獎勵計劃中原可獲得的積分獎勵" },
  {
    text: "調整合格會員在此次獎勵計劃中獲取積分獎勵的數額；"
  },
  { text: "不允許您兌換在此次獎勵計劃中獲取的獎勵積分；" },
  { text: "用合格會員現有的積分或未來賺取的積分抵銷合格會員通過此次獎勵計劃賺取並已用於兌換的全部（或部分）獎勵積分；並且/或" },
  { text: "索回合格會員在本次獎勵計劃中賺取的且已用於兌換的全部（或部分）獎勵積分之價值。" }
];
const dataSource3 = [
  {
    text:"combine this Promotion with other Points offers;"
  },
  {
    text: "be unable to combine this Promotion with other discounts or promotions on Qualifying Intel Products whether offered to the Eligible Partner, or to a third party on its behalf, as notified by Intel;"
  },
  { text: "not transfer Points under this Promotion; and" },
  { text: "not receive cash alternatives for Points under this Promotion." },
];

const dataSource4 = [
  { text: "withhold the Points that would otherwise be awarded to Eligible Partner under the Promotion;  " },
  { text: "adjust the number of Points to be awarded to Eligible Partner under the Promotion;" },
  { text: "refuse to allow redemption of Points awarded under the Promotion;" },
  { text: "set–off the entire (or part) value of the Points awarded under the Promotion that Eligible Partner has redeemed, against Eligible Partner’s existing or future credit claims; and/or" },
  { text: "obtain reimbursement of the entire (or part) value of the Points awarded to Eligible Partner under the Promotion that Eligible Partner has redeemed." },
];

const column1 = [
  {
    title: "項目",
    dataIndex: "text1",
    align: 'left',
  },
  {
    title: "菁英級",
    align: 'left',
    dataIndex: "text2",
  },
  {
    title: "至尊級",
    align: 'left',
    dataIndex: "text3",
  },
];
const column11 = [
  {
    title: "Items",
    align: 'left',
    dataIndex: "text1"
  },
  {
    title: "Gold Member",
    align: 'left',
    dataIndex: "text2"
  },
  {
    title: "Platinum Member",
    align: 'left',
    dataIndex: "text3"
  },
];
const tableData1 = [
  {"text1":"銷售收益要求","text2":"-","text3":"≥$62,500"},{"text1":"培訓積分要求","text2":"≥13","text3":"≥25"},{"text1":"積分上限要求","text2":"20,000","text3":"60,000"}
]
const tableData11 = [
  {"text1":"Revenue Requirement","text2":"-","text3":"≥$62,500"},{"text1":"Training Credit Requirement","text2":"≥13","text3":"≥25"},{"text1":"Points Cap","text2":"20,000","text3":"60,000"}
]
const column2 = [
  {
    title: "符合條件的英特爾<sup>®</sup>產品",
    dataIndex: "text1",
    align: 'left',
  },
  {
    title: "常規積分/單位",
    dataIndex: "text2",
    width: 150,
  },
]
const column22 = [
  {
    title: "Intel Qualifying Products",
    dataIndex: "text1",
    align: 'left',
  },
  {
    title: "Points per Unit",
    dataIndex: "text2",
    width: 150,
  },
]

const tableData2 = [
  {"text1":"Intel<sup>®</sup> Core™ i5+ 8400 Processor - BO80684i58400","text2":"40"},{"text1":"Intel<sup>®</sup> Core™ i5+ 8500 Processor - BO80684i58500","text2":"40"},{"text1":"Intel<sup>®</sup> Core™ i7+ 8700 Processor - BO80684I78700","text2":"50"},{"text1":"Intel<sup>®</sup> Pentium<sup>®</sup> Processor G4400 - BX80662G4400","text2":"10"},{"text1":"Intel<sup>®</sup> Core™ i7-7800X X-series Processor - BX80673I77800X","text2":"60"},{"text1":"Intel<sup>®</sup> Core™ i7-7820X X-series Processor - BX80673I77820X","text2":"60"},{"text1":"Intel<sup>®</sup> Core™ i7-9800X X-series Processor - BX80673I79800X","text2":"60"},{"text1":"Intel<sup>®</sup> Core™ i9-7900X X-series Processor - BX80673I97900X","text2":"100"},{"text1":"Intel<sup>®</sup> Core™ i9-7920X X-series Processor - BX80673I97920X","text2":"100"},{"text1":"Intel<sup>®</sup> Core™ i9-7940X X-series Processor - BX80673I97940X","text2":"100"},{"text1":"Intel<sup>®</sup> Core™ i9-7960X X-series Processor - BX80673I97960X","text2":"100"},{"text1":"Intel<sup>®</sup> Core™ i9-7980XE X-series Processor - BX80673I97980X","text2":"100"},{"text1":"Intel<sup>®</sup> Core™ i9-9820X X-series Processor - BX80673I99820X","text2":"100"},{"text1":"Intel<sup>®</sup> Core™ i9-9900X X-series Processor - BX80673I99900X","text2":"100"},{"text1":"Intel<sup>®</sup> Core™ i9-9920X X-series Processor - BX80673I99920X","text2":"100"},{"text1":"Intel<sup>®</sup> Core™ i9-9940X X-series Processor - BX80673I99940X","text2":"100"},{"text1":"Intel<sup>®</sup> Core™ i9-9960X X-series Processor - BX80673I99960X","text2":"100"},{"text1":"Intel<sup>®</sup> Core™ i9-9980XE Extreme Edition Processor - BX80673I99980X","text2":"100"},{"text1":"Intel<sup>®</sup> Pentium<sup>®</sup> Processor G4560 - BX80677G4560","text2":"12"},{"text1":"Intel<sup>®</sup> Core™ i5-7400 Processor - BX80677I57400","text2":"21"},{"text1":"Intel<sup>®</sup> Core™ i5-7400T Processor - BX80677I57400T","text2":"21"},{"text1":"Intel<sup>®</sup> Core™ i5-7500 Processor - BX80677I57500","text2":"21"},{"text1":"Intel<sup>®</sup> Core™ i5-7500T Processor - BX80677I57500T","text2":"21"},{"text1":"Intel<sup>®</sup> Core™ i5-7600 Processor - BX80677I57600","text2":"21"},{"text1":"Intel<sup>®</sup> Core™ i5-7600K Processor - BX80677I57600K","text2":"21"},{"text1":"Intel<sup>®</sup> Core™ i5-7600T Processor - BX80677I57600T","text2":"21"},{"text1":"Intel<sup>®</sup> Core™ i5-7640X X-series Processor - BX80677I57640X","text2":"40"},{"text1":"Intel<sup>®</sup> Core™ i7-7700 Processor - BX80677I77700","text2":"28"},{"text1":"Intel<sup>®</sup> Core™ i7-7700K Processor - BX80677I77700K","text2":"28"},{"text1":"Intel<sup>®</sup> Core™ i7-7700T Processor - BX80677I77700T","text2":"28"},{"text1":"Intel<sup>®</sup> Core™ i7-7740X X-series Processor - BX80677I77740X","text2":"60"},{"text1":"Intel<sup>®</sup> Pentium<sup>®</sup> Gold Processor G5400 - BX80684G5400","text2":"10"},{"text1":"Intel<sup>®</sup> Pentium<sup>®</sup> Gold Processor G5500 - BX80684G5500","text2":"12"},{"text1":"Intel<sup>®</sup> Pentium<sup>®</sup> Gold Processor G5600 - BX80684G5600","text2":"12"},{"text1":"Intel<sup>®</sup> Core™ i3-8100 Processor - BX80684I38100","text2":"20"},{"text1":"Intel<sup>®</sup> Core™ i3-8300 Processor - BX80684I38300","text2":"20"},{"text1":"Intel<sup>®</sup> Core™ i3-8350K Processor - BX80684I38350K","text2":"25"},{"text1":"Intel<sup>®</sup> Core™ i3-9350KF Desktop Processor - BX80684I39350KF","text2":"25"},{"text1":"Intel<sup>®</sup> Core™ i5-8400 Processor - BX80684I58400","text2":"30"},{"text1":"Intel<sup>®</sup> Core™ i5-8500 Processor - BX80684I58500","text2":"30"},{"text1":"Intel<sup>®</sup> Core™ i5-8600 Processor - BX80684I58600","text2":"30"},{"text1":"Intel<sup>®</sup> Core™ i5-8600K Processor - BX80684I58600K","text2":"35"},{"text1":"Intel<sup>®</sup> Core™ i5-9400 Desktop Processor - BX80684I59400","text2":"30"},{"text1":"Intel<sup>®</sup> Core™ i5-9400F Processor - BX80684I59400F","text2":"30"},{"text1":"Intel<sup>®</sup> Core™ i5-9600K Processor - BX80684I59600K","text2":"35"},{"text1":"Intel<sup>®</sup> Core™ i5-9600KF Desktop Processor - BX80684I59600KF","text2":"35"},{"text1":"Intel<sup>®</sup> Core™ i7-8086K Processor - BX80684I78086K","text2":"45"},{"text1":"Intel<sup>®</sup> Core™ i7-8700 Processor - BX80684I78700","text2":"40"},{"text1":"Intel<sup>®</sup> Core™ i7-8700K Processor - BX80684I78700K","text2":"45"},{"text1":"Intel<sup>®</sup> Core™ i7-9700K Desktop Processor - BX80684I79700K","text2":"45"},{"text1":"Intel<sup>®</sup> Core™ i7-9700KF Desktop Processor - BX80684I79700KF","text2":"45"},{"text1":"Intel<sup>®</sup> Core™ i9-9900K Desktop Processor - BX80684I99900K","text2":"60"},{"text1":"Intel<sup>®</sup> Core™ i9-9900KF Desktop Processor - BX80684I99900KF","text2":"60"}
]


import { TCell, Nav, StanceTable, ListTable, DataTable, Footer1, Sup, ImageRow } from '@/components/edm'


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

