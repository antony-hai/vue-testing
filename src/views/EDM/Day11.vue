<template>
  <table align="center" style="text-align: center; font-family: 微软雅黑; margin: 0 auto;">
    <tr>
      <td>
        <!-- 固定好的标题 -->
        <Nav></Nav>
        <!-- 抬头的图片 -->
        <ImageRow :imgUrl="headImgUrl"></ImageRow>
        <!-- 通用的表格  站位表格 -->
        <StanceTable hasTop>
          <tr>
            <TCell>尊敬的英特尔<Sup></Sup>发烧友PC专家{[CS-CompanyName]}：</TCell>
          </tr>
          <tr height="10"></tr>
          <tr>
            <TCell>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;恭喜！贵公司已成为一名英特尔<Sup></Sup>技术合作伙伴发烧友级 PC 专家！在此为您带来英特尔特为发烧友 PC 专家制定的常规积分奖励计划及促销奖励计划。如下所示：</TCell>
          </tr>
        </StanceTable>

        <StanceTable hasTop hasBottom>
          <tr>
            <TCell :ostyle="{ 'font-size': '14px', 'line-height': '24px' }"><b>常规积分奖励计划</b></TCell>
          </tr>
        </StanceTable>

        <ListTable :dataSource="dataSource1" listType="●" hasSpace></ListTable>

        <StanceTable hasTop>
          <tr>
            <TCell>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;通过销售符合条件的英特尔<Sup></Sup>奔腾<Sup></Sup>处理器、英特尔<Sup></Sup>酷睿™处理器、英特尔<Sup></Sup>NUC和英特尔®傲腾™固态盘，
              贵公司可获得无上限限制的积分奖励。具体条款及符合条件的产品请点击查看 <a href="https://www.intel.com/content/www/cn/zh/secure/technology-provider/local/buying/promotions/enthusiast-pc-specialty-promo-point-earning-q4.html" target="_blank" style="text-decoration: underline; color: #018BD3">英特尔<Sup></Sup>发烧友PC专家常规积分奖励计划规则</a> 。</TCell>
          </tr>
        </StanceTable>

        <StanceTable hasTop hasBottom>
          <tr>
            <TCell :ostyle="{ 'font-size': '14px', 'line-height': '24px' }"><b>常规积分奖励计划</b></TCell>
          </tr>
        </StanceTable>

        <!-- 最基本的数据表格 -->
        <ListTable :dataSource="dataSource2" listType="●" hasSpace></ListTable>

        <StanceTable hasTop hasBottom>
          <tr>
            <TCell>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;通过销售符合条件的英特尔<Sup></Sup>酷睿™ X & K系列处理器、英特尔<Sup></Sup>NUC产品和最新客户端英特尔<Sup></Sup>傲腾™固态盘，您可获得额外积分奖励，
              具体条款及符合条件的产品详情请点击查看<a href="https://www.intel.com/content/www/cn/zh/secure/technology-provider/local/buying/promotions/enthusiast-pc-specialty-promo-point-earning-q4.html" target="_blank" style="text-decoration: underline; color: #018BD3">英特尔<Sup></Sup>发烧友PC专家常规积分奖励计划规则</a> 。</TCell>
          </tr>
          <tr height="10"></tr>
          <tr>
            <TCell>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;另外，别忘记访问<a href="https://www.intel.com/content/www/cn/zh/secure/technology-provider/enthusiast-qualified/qualified-enthusiast-pc-specialty-benefits.html?_ga=2.115493765.226570556.1532343736-1035472380.1529501129" target="_blank" style="text-decoration: underline; color: #018BD3">英特尔<Sup></Sup>发烧友PC专家专属网页</a>！您可在此为贵公司获取专家徽章以及其它专属权益。 </TCell>
          </tr>
        </StanceTable>

        <ImageRow :imgUrl="footImgUrl"></ImageRow>
      </td>
    </tr>

  </table>
</template>

<script>
import { Nav, ImageRow, StanceTable, Sup, DataTable, ListTable, TCell } from '@/components/edm'

const dataSource1 = [
  { text: '<b>活动时间：</b> 2018年10月1日至2018年12月31日'},
  { text: '<b>适用对象：</b> 中华人民共和国（仅为本奖励计划条款的目的，系指不包括香港、澳门和台湾的境内地区）的英特尔<sup>®</sup>技术合作伙伴中已激活的至尊发烧友PC专家会员'},
  { text: '<b>奖励积分上限：</b> 在本奖励计划中赚取无上限积分'},
]
const dataSource2 = [
  { text: '<b>活动时间：</b> 2018年10月1日至2018年12月31日'},
  { text: '<b>适用对象：</b> 中华人民共和国（仅为本促销条款的目的，系指不包括香港、澳门和台湾的境内地区）的英特尔<sup>®</sup>技术合作伙伴中已激活的至尊发烧友PC专家会员'},
  { text: '<b>奖励积分上限：</b> 在本次促销活动中最多可赚取50万积分'},
]

const headstyle = { "background-color": "#0070C0", 'font-size': '13px' }

export default {
  data() {
    return {
      headImgUrl:
        "http://show.easeye.com.cn/fckattach/2018-09-29/e3b9e77152a2095d72521d1898764e2d/image/2382c315a6ba396be1932dd8dafaff52.png",
      dataSource1,
      dataSource2,
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
    TCell,
  },
  computed: {
    // tableHeadStyle() {
    //   return headstyle;
    // }
  }
};
</script>
