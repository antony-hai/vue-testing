<template>
  <table align="center" style="text-align: center; font-family: 微软雅黑; margin: 0 auto;">
    <tr>
      <td>
        <!-- 固定好的标题 -->
        <Nav></Nav>
        <!-- 抬头的图片 -->
        <ImageRow :imgUrl="headImgUrl"></ImageRow>
        <!-- 通用的表格  站位表格 -->
        <StanceTable hasTop hasBottom></StanceTable>
        <StanceTable>
          <tr height="10"></tr>
          <tr>
            <td style="text-align: left;font-family: 微软雅黑; font-size: 13px; line-height:22px;">
              英特尔<Sup></Sup>至强<Sup></Sup>可扩展处理器在与高性能的固态盘驱动器匹配使用时，可让处理器运行状态更佳。
              这正是为什么当您捆绑采购时我们会予以积分奖励。当您每采购一个至强处理器且搭配采购一个固态盘驱动器时，每个组合可赚取400积分。
            </td>
            <td width="210">
              <img width="200" src="http://show.easeye.com.cn/fckattach/2018-09-26/e3b9e77152a2095d72521d1898764e2d/image/a0ddea459ad73ee40c13ab63c72d30c2.png" alt="" border="0">
            </td>
          </tr>
        </StanceTable>

        <StanceTable hasTop hasBottom>
          <tr>
            <td style="text-align: left;font-family: 微软雅黑;">
              本促销活动中您可赚取无上限限制的积分。本促销活于12月31日结束。
            </td>
          </tr>
          <tr style="height: 10px"></tr>

          <tr>
            <td style="text-align: left;font-family: 微软雅黑;">
              <a href="https://prc-points.inteltechnologyprovider.com/node/1018" style="color: #0070C0; text-decoration: underline" target="_blank">访问英特尔<Sup></Sup>渠道积分网站以获取全部详细资料。</a>
            </td>
          </tr>
          <tr style="height: 10px"></tr>
          <tr>
            <td style="text-align: left;font-family: 微软雅黑;">
             本促销活动有效期为2018年10月1日至2018年12月31日（“促销活动时间”），
             适用对象为中华人民共和国（仅为本促销条款的目的，系指不包括香港、澳门和台湾的境内地区）的英特尔<Sup></Sup>技术合作伙伴计划中已激活的至尊会员和菁英会员（“合格会员”）。
            </td>
          </tr>
          <tr style="height: 10px"></tr>
          <tr>
            <td style="text-align: left;font-family: 微软雅黑;">
              在促销活动期间，对合格会员从英特尔®授权总代理（“IAD”）或英特尔<Sup></Sup>授权集成供应商（“IACS”） 
              [视具体情况而定]购买如下列表中的英特尔产品组合（“符合条件的英特尔<Sup></Sup>产品”），英特尔将实行以下积分奖励：
            </td>
          </tr>
          <tr height="10"></tr>
          <tr>
            <td style="text-align: left;font-family: 微软雅黑;">
              ●&nbsp;&nbsp;&nbsp;&nbsp;从产品列表一和产品列表二各采购一件产品，每个组合可赚取400积分。
            </td>
          </tr>
        </StanceTable>

        <StanceTable hasTop hasBottom>
          <tr>
            <td style="text-align: left;font-family: 微软雅黑; font-size: 15px;">
              <b>产品列表一</b>
            </td>
          </tr>
        </StanceTable>
        <!-- 最基本的数据表格 -->
        <DataTable :dataSource="dataSource1" :column="column1" :headStyle="tableHeadStyle"></DataTable>

        <StanceTable hasTop hasBottom>
          <tr>
            <td style="text-align: left;font-family: 微软雅黑; font-size: 15px;">
              <b>产品列表二</b>
            </td>
          </tr>
        </StanceTable>
        
        <DataTable :dataSource="dataSource2" :column="column2" :headStyle="tableHeadStyle"></DataTable>

        <StanceTable hasTop hasBottom>
          <tr>
            <td style="text-align: left;font-family: 微软雅黑;">在此次促销活动中，购买符合条件的英特尔产品的积分赚取日期为购买英特尔产品的发票开具日期。英特尔将在促销结束后60（六十）天内，根据规则，向符合条件且遵守各项规则的合作伙伴发放在本次促销活动中奖励的积分。
              </td>
          </tr>
          <tr height="10"></tr>
          <tr>
            <Cell>合格会员将：</Cell>
          </tr>
        </StanceTable>

        <ListTable :dataSource="dataSource3" listType="●"></ListTable>

        <StanceTable hasTop></StanceTable>

        <ImageRow :imgUrl="footImgUrl"></ImageRow>
      </td>
    </tr>

  </table>
</template>

<script>
import { Nav, ImageRow, StanceTable, Sup, DataTable, ListTable, Cell } from '@/components/edm'
// import { dataSource3 } from "@/constants/tableData";
// 抓取到的数据
const dataSource1 = [
  {"text1":"Intel<sup>®</sup> Gold Xeon<sup>®</sup> processors:  6126, 6126F, 6126T, 6128, 6130, 6130F, 6130T, 6132, 6134, 6134M, 6136, 6138, 6138F, 6138T, 6140, 6140M, 6142, 6142F, 6142M, 6144, 6146, 6148, 6148F, 6150, 6152, 6154","text2":"<b>从产品列表一和产品列表二各采购一件产品，每个组合可赚取400积分</b>"},{"text1":"Intel<sup>®</sup> Platinum Xeon<sup>®</sup> processors: 8153, 8156, 8158, 8160, 8160F, 8160M, 8160T, 8164, 8168, 8170, 8170M, 8176, 8176M, 8176F, 8180, 8180M"}
];

const column1 = [
  {
    title: "符合条件的英特尔产品",
    dataIndex: "text1",
  },
  {
    title: "积分/组合",
    dataIndex: "text2",    
    width: 165,
    rowspan: 2,
  },
];
const dataSource2 = [
  {"text1":"Intel<sup>®</sup> SSD D3-S4510 Series 1.9TB ","text2":"<b>从产品列表一和产品列表二各采购一件产品，每个组合可赚取400积分</b>"},{"text1":"Intel<sup>®</sup> SSD D3-S4510 Series 240GB "},{"text1":"Intel<sup>®</sup> SSD D3-S4510 Series 3.8TB "},{"text1":"Intel<sup>®</sup> SSD D3-S4510 Series 480GB"},{"text1":"Intel<sup>®</sup> SSD D3-S4510 Series 960GB "},{"text1":"Intel<sup>®</sup> SSD D3-S4610 Series 1.9TB "},{"text1":"Intel<sup>®</sup> SSD D3-S4610 Series 240GB"},{"text1":"Intel<sup>®</sup> SSD D3-S4610 Series 3.8TB "},{"text1":"Intel<sup>®</sup> SSD D3-S4610 Series 480GB "},{"text1":"Intel<sup>®</sup> SSD D3-S4610 Series 960GB"},{"text1":"Intel<sup>®</sup> SSD DC P4510 Series 1.0TB "},{"text1":"Intel<sup>®</sup> SSD DC P4510 Series 2.0TB "},{"text1":"Intel<sup>®</sup> SSD DC P4510 Series 4.0TB "},{"text1":"Intel<sup>®</sup> SSD DC P4510 Series 8.0TB "},{"text1":"Intel<sup>®</sup> SSD DC P4610 Series 1.6TB "},{"text1":"Intel<sup>®</sup> SSD DC P4610 Series 3.2TB "},{"text1":"Intel<sup>®</sup> SSD DC P4610 Series 6.4TB "},{"text1":"Intel<sup>®</sup> SSD DC P4610 Series 7.6TB "},{"text1":"Intel<sup>®</sup> SSD DC P4500 Series 1.0TB "},{"text1":"Intel<sup>®</sup> SSD DC P4500 Series 2.0TB"},{"text1":"Intel<sup>®</sup> SSD DC P4500 Series 4.0TB"},{"text1":"Intel<sup>®</sup> SSD DC P4500 Series 4.0TB "},{"text1":"Intel<sup>®</sup> SSD DC P4500 Series 4.0TB "},{"text1":"Intel<sup>®</sup> SSD DC P4500 Series 8.0TB "},{"text1":"Intel<sup>®</sup> SSD DC P4500 Series 8.0TB "},{"text1":"Intel<sup>®</sup> SSD DC S4500 Series 1.9TB"},{"text1":"Intel<sup>®</sup> SSD DC S4500 Series 240GB "},{"text1":"Intel<sup>®</sup> SSD DC S4500 Series 3.8TB "},{"text1":"Intel<sup>®</sup> SSD DC S4500 Series 480GB "},{"text1":"Intel<sup>®</sup> SSD DC S4500 Series 7.6TB "},{"text1":"Intel<sup>®</sup> SSD DC S4500 Series 960GB "},{"text1":"Intel<sup>®</sup> SSD DC P4600 Series 1.0TB "},{"text1":"Intel<sup>®</sup> SSD DC P4600 Series 1.6TB"},{"text1":"Intel<sup>®</sup> SSD DC P4600 Series 2.0TB "},{"text1":"Intel<sup>®</sup> SSD DC P4600 Series 3.2TB"},{"text1":"Intel<sup>®</sup> SSD DC P4600 Series 4.0TB "},{"text1":"Intel<sup>®</sup> SSD DC P4600 Series 6.4TB "},{"text1":"Intel<sup>®</sup> SSD DC S4600 Series 1.9TB "},{"text1":"Intel<sup>®</sup> SSD DC S4600 Series 240GB "},{"text1":"Intel<sup>®</sup> SSD DC S4600 Series 480GB "},{"text1":"Intel<sup>®</sup> SSD DC S4600 Series 960GB "},{"text1":"Intel<sup>®</sup> Optane™ SSD DC P4800X Series 1.5TB  "},{"text1":"Intel<sup>®</sup> Optane™ SSD DC P4800X Series 375GB "},{"text1":"Intel<sup>®</sup> SSD P4800X Series 375GB"}
];
const column2 = [
  {
    title: "英特尔<sup>®</sup>固态盘产品",
    dataIndex: "text1",
  },
  {
    title: "积分/组合",
    dataIndex: "text2",
    width: 165,
    rowspan: 44,
  }
];
const dataSource3 = [
  { text: '在本次促销活动中可赚取无上限限制的积分；'},
  { text: '可同时参与本次促销活动和其他积分活动；'},
  { text: '不可同时参加针对本次促销活动中符合条件的英特尔产品所进行的其他英特尔通知的折扣或促销活动，不论折扣或促销活动是针对本促销活动的合格会员，或是代表合格会员的第三方；'},
  { text: '不可以转让此次促销活动中赚取的积分；且'},
  { text: '不可以变现此次促销活动中赚取的积分。'},
]

const headstyle = { "background-color": "#0070C0", 'font-size': '13px' }

export default {
  data() {
    return {
      headImgUrl:
        "http://show.easeye.com.cn/fckattach/2018-09-26/e3b9e77152a2095d72521d1898764e2d/image/4068d33e789cab23e1f34a58d2a07fd7.png",
      dataSource1,
      dataSource2,
      dataSource3,
      column1,
      column2,
      tableHeadStyle: headstyle,
      footImgUrl:
        "http://show.easeye.com.cn/fckattach/2018-07-10/e3b9e77152a2095d72521d1898764e2d/image/eccbc87e4b5ce2fe28308fd9f2a7baf3.jpg"
    };
  },
  components: {
    Nav,
    ImageRow,
    StanceTable,
    Sup,
    DataTable,
    ListTable,
    Cell,
  },
  computed: {
    // tableHeadStyle() {
    //   return headstyle;
    // }
  }
};
</script>
