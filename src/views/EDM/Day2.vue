<template>
  <table align="center" style="text-align: center; font-family: 微软雅黑; margin: 0 auto;">
    <tr>
      <td>
        <!-- 固定好的标题 -->
        <Nav></Nav>
        <!-- 抬头的图片 -->
        <ImageRow :imgUrl="headImgUrl"></ImageRow>
        <!-- 通用的表格  站位表格 -->
        <StanceTable hasTop hasBottom>
          <tr>
            <td style="color:#0071C5;text-align: left;font-family: 微软雅黑; font-size: 13px;">
              我们将通过促销积分奖励您在购买、培训和推广上的努力！
            </td>
          </tr>
          <tr style="height: 10px;"></tr>
          <tr>
            <td style="text-align: left;font-family: 微软雅黑;">
              截至10月27日，购买符合条件的英特尔
              <Sup></Sup>酷睿™ K /X 系列台式机处理器，每个单品最多可赚取100积分；完成四门培训课程最多可赚取600积分。
            </td>
          </tr>
          <tr style="height: 10px"></tr>
          <tr>
            <td style="text-align: left;font-family: 微软雅黑;">
              <a href="https://prc-points.inteltechnologyprovider.com/node/1018" style="color: #071C5; text-decoration: underline" target="_blank">访问英特尔
                <Sup></Sup>渠道积分网站以获取全部详细资料。</a>
            </td>
          </tr>
          <tr style="height: 10px"></tr>
          <tr>
            <td style="text-align: left;font-family: 微软雅黑;">
              本促销活动有效期为2018年9月16日至2018年10月27日（“促销活动时间”），适用对象为中华人民共和国（仅为本促销条款的目的，系指不包括香港、澳门和台湾的境内地区）的英特尔
              <Sup></Sup>技术合作伙伴中已激活的至尊会员及菁英会员（“合格会员”）。
            </td>
          </tr>
          <tr style="height: 10px"></tr>
          <tr>
            <td style="text-align: left;font-family: 微软雅黑;">
              在促销活动期间，对合格会员从英特尔
              <Sup></Sup>授权总代理（“IAD”）或英特尔®授权集成供应商（“IACS”） [视具体情况而定]购买的如下列表中的英特尔产品（“符合条件的英特尔
              <Sup></Sup>产品”），英特尔将实行以下积分奖励：
            </td>
          </tr>
        </StanceTable>

        <!-- 最基本的数据表格 -->
        <DataTable :dataSource="dataSource1" :column="column1" :headStyle="tableHeadStyle"></DataTable>

        <StanceTable hasTop hasBottom>
          <td style="text-align: left;font-family: 微软雅黑;">另外，在2018年9月16日至10月27日促销活动期间，合格会员完成以下培训课程，最多可赚取600积分。</td>
        </StanceTable>

        <DataTable :dataSource="dataSource2" :column="column2" :headStyle="tableHeadStyle"></DataTable>

        <StanceTable hasTop hasBottom>
          <td style="text-align: left;font-family: 微软雅黑;">在此次促销活动中，购买符合条件的英特尔产品的积分赚取日期为购买英特尔产品的发票开具日期。英特尔将在促销结束后60（六十）天内，根据规则，向符合条件且遵守各项规则的合作伙伴发放在本次促销活动中奖励的积分。</td>
        </StanceTable>

        <ListTable :dataSource="dataSource3" listType="●"></ListTable>

        <StanceTable hasTop></StanceTable>

        <ImageRow :imgUrl="footImgUrl"></ImageRow>
      </td>
    </tr>

  </table>
</template>

<script>
import Nav from "@/components/edm/Nav.vue";
import ImageRow from "@/components/edm/ImageRow.vue";
import StanceTable from "@/components/edm/StanceTable.vue";
import Sup from "@/components/edm/Sup.vue";
import DataTable from "@/components/edm/DataTable.vue";
import ListTable from "@/components/edm/ListTable.vue";
import { dataSource3 } from "@/constants/tableData";
// 抓取到的数据
const dataSource1 = [
  {
    text1: "Boxed Intel<sup>®</sup> Core™ i3-8350K Processor - BXC80684I38350K",
    text2: "20"
  },
  {
    text1: "Intel<sup>®</sup> Core™ i3-8350K Processor - CM8068403376809",
    text2: "20"
  },
  {
    text1: "Boxed Intel<sup>®</sup> Core™ i5-8600K Processor - BXC80684I58600K",
    text2: "30"
  },
  {
    text1: "Intel<sup>®</sup> Core™ i5-8600K Processor - CM8068403358508",
    text2: "30"
  },
  {
    text1:
      "Intel<sup>®</sup> Core™ i9-7920X X-series Processor - BXC80673I97920X",
    text2: "100"
  },
  {
    text1:
      "Intel<sup>®</sup> Core™ i9-7920X X-series Processor - CD8067303753300",
    text2: "100"
  }
];

const column1 = [
  {
    title: "符合条件的英特尔产品",
    dataIndex: "text1",
    width: 480
  },
  {
    title: "积分/单位",
    dataIndex: "text2"
  }
];
const dataSource2 = [
  {
    text1: "客户端游戏和未锁频的英特尔<sup>®</sup> 酷睿™ 处理器",
    link:
      "https://channeltraining-prc.intel.com/diweb/gateway/init/1/f/catalog*2Fitem*2Feid*2F263155",
    text2: "150"
  },
  {
    text1: "销售高性能未锁频的英特尔<sup>®</sup> 酷睿™ 处理器",
    link:
      "https://channeltraining-prc.intel.com/diweb/gateway/init/1/f/catalog*2Fitem*2Feid*2F263288",
    text2: "150"
  },
  {
    text1: "如何向创作者销售性能更强大的 PC",
    link:
      "https://channeltraining-prc.intel.com/diweb/gateway/init/1/f/catalog*2Fitem*2Feid*2F253191",
    text2: "150"
  },
  {
    text1: "在高速增长的发烧友市场细分中获胜的战略与策略",
    link:
      "https://channeltraining-prc.intel.com/diweb/gateway/init/1/f/catalog*2Fitem*2Feid*2F260988",
    text2: "150"
  }
];
const column2 = [
  {
    title: "符合条件的课程名称",
    dataIndex: "text1",
    width: 480
  },
  {
    title: "积分/单位",
    dataIndex: "text2"
  }
];

const headstyle = { "background-color": "#00B0F0", height: "40px", 'font-size': '13px' }

export default {
  data() {
    return {
      headImgUrl:
        "http://show.easeye.com.cn/fckattach/2018-09-14/e3b9e77152a2095d72521d1898764e2d/image/2382c315a6ba396be1932dd8dafaff52.png",
      dataSource1,
      dataSource2,
      dataSource3,
      column1,
      column2,
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
    ListTable
  },
  computed: {
    tableHeadStyle() {
      return headstyle;
    }
  }
};
</script>
