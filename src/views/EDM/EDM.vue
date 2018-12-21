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
          <td style="color:#0071C5;text-align: left;font-family: 微软雅黑; font-size: 13px;">
            截至3月31日，通过采购符合条件的英特尔<Sup></Sup>数据中心级固态盘，您可赚取相当于常规积分两倍的积分。 鼓励您的客户升级其数据中心硬件，每个单品您最多可赚取440积分。
          </td>
        </StanceTable>

        <StanceTable hasTop>
          <tr>
            <td>
              <StanceTable width="434">
                <tr>
                  <TCell>
                    鼓励您的客户升级其数据中心硬件，每个单品您最多可赚取440积分。
                  </TCell>
                </tr>
                <tr height="10"></tr>
                <tr>
                  <TCell>不仅如此，如果您是HPC数据中心专家或云数据中心专家，您可以在此次促销活动中赚取双倍积分。即每个单品最多可赚取880积分！还未成为HPC 数据中心专家或云数据中心专家？点击<a href="https://www.intel.cn/content/www/cn/zh/technology-provider/specialty-benefits/overview.html?_ga=2.247669191.1901382554.1545035323-531699578.1543304607&erpm_id=7633364" target="_blank">此处</a>了解如何获取专家资格。</TCell>
                </tr>
                <tr height="10"></tr>
                <tr>
                  <TCell>即刻行动吧——此次促销活动仅持续至3月31日。</TCell>
                </tr>
                <tr height="10"></tr>
                <tr>
                  <TCell><a href="https://prc-points.inteltechnologyprovider.com/node/1130" target="_blank">访问英特尔<Sup></Sup>渠道积分网站获取更多详情。</a></TCell>
                </tr>
              </StanceTable>
            </td>
            <td width="200" align="center" valign="top">
              <img width="160" src="http://show.easeye.com.cn/fckattach/2018-12-20/e3b9e77152a2095d72521d1898764e2d/image/f909cf78a7646f4d592d241ff3c17356.png" alt="">  
            </td>            
          </tr>
        </StanceTable>

        <StanceTable hasBottom hasTop>
          <tr>
            <td style="text-align: left;font-family: 微软雅黑;">
              本促销活动有效期为2019年1月1日至2019年3月31日（“促销活动时间”），适用对象为中华人民共和国（仅为本促销条款的目的，系指不包括香港、澳门和台湾的境内地区）的英特尔<Sup></Sup>技术合作伙伴中已激活的至尊会员及菁英会员（“合格会员”）。
            </td>
          </tr>
          <tr style="height: 10px"></tr>
          <tr>
            <td style="text-align: left;font-family: 微软雅黑;">
              在促销活动期间，对合格会员从英特尔<Sup></Sup>授权总代理（“IAD”）或英特尔<Sup></Sup>授权集成供应商（“IACS”） [视具体情况而定]购买的如下列表中的英特尔产品（“符合条件的英特尔<Sup></Sup>产品”），英特尔将按下表，实行积分奖励。英特尔<Sup></Sup>HPC 数据中心专家及云数据中心专家还可获得额外的奖励积分，具体如下：
            </td>
          </tr>
        </StanceTable>
        <!-- 最基本的数据表格 -->
        <DataTable :dataSource="dataSource1" :column="column1" :headStyle="tableHeadStyle"></DataTable>

        <!-- <StanceTable hasTop hasBottom>
          <td style="text-align: left;font-family: 微软雅黑;">在促销活动期间，对合格会员从英特尔
            <sup>®</sup>授权总代理（“IAD”）或英特尔
            <sup>®</sup>批准供应商（“IAS”）采购如下列表中的英特尔产品（“符合条件的英特尔
            <sup>®</sup>产品”），英特尔将实行以下积分奖励：</td>
        </StanceTable> -->

        <!-- <DataTable :dataSource="dataSource2" :column="column1" :headStyle="tableHeadStyle"></DataTable> -->

        <StanceTable hasTop>
          <tr>
            <td style="text-align: left;font-family: 微软雅黑;">在此次促销活动中，购买符合条件的英特尔产品的积分赚取日期为购买英特尔产品的发票开具日期。英特尔将在促销结束后60（六十）天内，根据规则，向符合条件且遵守各项规则的合作伙伴发放在本次促销活动中奖励的积分。</td>
          </tr>
          <tr height="10"></tr>
          <tr>
            <TCell>合格会员将：</TCell>
          </tr>
        </StanceTable>

        <ListTable :dataSource="dataSource3" listType="●" hasSpace></ListTable>

        <StanceTable hasTop></StanceTable>

        <ImageRow :imgUrl="footImgUrl"></ImageRow>
      </td>
    </tr>

  </table>
</template>

<script>

import {
  Nav, ImageRow, StanceTable, Sup, DataTable, ListTable, TCell,
} from '@/components/edm'

import {
  dataSource1,
  dataSource2,
  column1,
  dataSource3
} from "@/constants/tableData";

const headstyle = { 'background-color': '#0070C0', color: '#ffffff', 'line-height': '22px' };
export default {
  data() {
    return {
      headImgUrl:
        "http://show.easeye.com.cn/fckattach/2018-12-20/e3b9e77152a2095d72521d1898764e2d/image/08ade37d027eaef48a5f118f11f4645a.png",
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
    ListTable,
    TCell
  },
  computed: {
    tableHeadStyle() {
      return headstyle;
    }
  }
};
</script>
