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
          <td style="color:#0071C5;text-align: left;font-family: 微软雅黑; font-size: 14px;">
            今年英特尔LOEM峰会的参与者独家专享——登记您在此次活动中产生的设计赢单，采购符合条件的英特尔产品，最多可赚取200,000促销积分。
          </td>
        </StanceTable>

        <StanceTable hasBottom>
          <tr>
            <td style="text-align: left;font-family: 微软雅黑;">
              本促销活动有效期为2018年9月11日至2019年3月31日（“促销活动时间”）。本促销活动适用对象仅为参加2018英特尔LOEM峰会的中华人民共和国（仅为本促销条款的目的，系指不包括香港、澳门和台湾的境内地区）的英特尔®技术合作伙伴计划中已激活的至尊会员和菁英会员（“合格会员”）。
            </td>
          </tr>
          <tr style="height: 10px"></tr>
          <tr>
            <td style="text-align: left;font-family: 微软雅黑;">
              在促销活动期间，对合格会员从符合条件的供应商采购如下列表中的英特尔产品（“符合条件的英特尔产品”），英特尔将实行以下积分奖励。为本促销活动之目的，“符合条件的供应商”系指参加2018Intel Connect-LOEM 峰会的ODM。
            </td>
          </tr>
        </StanceTable>
        <!-- 最基本的数据表格 -->
        <DataTable :dataSource="dataSource1" :column="column1" :headStyle="tableHeadStyle"></DataTable>

        <StanceTable hasTop hasBottom>
          <td style="text-align: left;font-family: 微软雅黑;">在促销活动期间，对合格会员从英特尔
            <sup>®</sup>授权总代理（“IAD”）或英特尔
            <sup>®</sup>批准供应商（“IAS”）采购如下列表中的英特尔产品（“符合条件的英特尔
            <sup>®</sup>产品”），英特尔将实行以下积分奖励：</td>
        </StanceTable>

        <DataTable :dataSource="dataSource2" :column="column1"></DataTable>

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
import {
  dataSource1,
  dataSource2,
  column1,
  dataSource3
} from "@/constants/tableData";

const headstyle = { "background-color": "#00B0F0", height: "80px" };
export default {
  data() {
    return {
      headImgUrl:
        "http://show.easeye.com.cn/fckattach/2018-09-05/e3b9e77152a2095d72521d1898764e2d/image/b8aacc0e9e810b4fc1fc94c1a9123a18(1).png",
      dataSource1,
      dataSource2,
      dataSource3,
      column1,
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
