<template>
  <table align="center" style="text-align: center; font-family: 微软雅黑; margin: 0 auto;">
    <tr>
      <td>
        <StanceTable width="670">
          <td style="color: #959595; text-align: center;font-family: 微软雅黑; font-size: 14px; line-height: 20px; ">
            欢迎加入发烧友级 PC 专家计划，您将获得扩大业务规模的全新机遇。
            <br /> 我们非常期待加深我们之间的工作关系。
          </td>
        </StanceTable>
        <!-- 固定好的标题 -->
        <Nav width="670"></Nav>
        <!-- 抬头的图片 -->
        <StanceTable width="670" bgcolor="#0071c5" hasTop>
          <tr height="30"></tr>
          <tr>
            <td style="color: #fefefe; text-align: center;font-family: 微软雅黑; font-size: 24px; line-height: 32px; margin-bottom: 5px;">
              您已满足了要求！
            </td>
          </tr>
          <tr>
            <td style="color: #fefefe; text-align: center;font-family: 微软雅黑;">
              <a href="https://www.intel.com/content/www/cn/zh/secure/technology-provider/enthusiast-qualified/qualified-enthusiast-pc-specialty-benefits.html" target="_blank" style="Margin:0;color:#8CDAFA;font-family:微软雅黑;font-weight:400;line-height:23.4px;margin:0;padding:0;text-align:left;text-decoration:none">获得权益 &gt;</a>
            </td>
          </tr>
          <tr height="30"></tr>
        </StanceTable>
        <!-- 图片行 -->
        <ImageRow width="670" imgUrl="http://images.plan.intel.com/EloquaImages/clients/IntelCorporation/%7B4913b410-1328-4089-95a4-b0af78b55f99%7D_C-MKA-333_T-MKA-1698-hero-4.jpg"></ImageRow>
        <!-- 通用的表格  站位表格 -->

        <StanceTable width="600">
          <tr height="20"></tr>
          <tr>
            <td style="color: #0071c5; text-align: left;font-family: 微软雅黑; font-size: 18px; line-height: 24px; margin-bottom: 5px;">{[CS-CompanyName]}：</td>
          </tr>
          <tr>
            <td style="color: #959595; text-align: left;font-family: 微软雅黑; font-size: 14px; line-height: 24px;">
              恭喜您成为一名英特尔
              <Sup></Sup>技术合作伙伴发烧友级 PC 专家！
              <br />
              <br /> 由于全球 PC 玩家的数量已经突破 10 亿 1，市场正在快速发展，
              <br /> 您已经拥有了通过英特尔扩大客户群和实现创收的优势。
              <br />
              <br /> 充分利用您现在可以享受的所有权益，包括：
              <br />
              <br />
            </td>
          </tr>
          <tr>
            <td>
              <ListTable :dataSource="dataSource3" listType="●"></ListTable>
            </td>
          </tr>
          <tr height="15"></tr>
          <tr>
            <td style="color: #959595; text-align: left;font-family: 微软雅黑; font-size: 14px; line-height: 20px;">
              感谢您与英特尔合作。
            </td>
          </tr>
          <tr height="15"></tr>
          <tr height="15"></tr>
          <tr>
            <td>
              <LinkBtn width="120" url="https://www.intel.com/content/www/cn/zh/secure/technology-provider/enthusiast-qualified/qualified-enthusiast-pc-specialty-benefits.html">获得权益</LinkBtn>
            </td>
          </tr>
          <tr height="30"></tr>
        </StanceTable>
        <StanceTable width="670" bgcolor="#003c71">
          <tr height="60"></tr>
        </StanceTable>
        <StanceTable width="670">
          <tr height="40"></tr>
        </StanceTable>
        <StanceTable hasBottom>
          <tr>
            <td style="color: #959595; text-align: center;font-family: 微软雅黑; font-size: 12px; line-height: 24px;">
              基准性能测试结果均在实施近期软件补丁和固件更新（旨在解决称为“Spectre”和“Meltdown”所造成的漏洞）
              <br /> 之前完成。这些更新的实施可能会导致这些结果不适用于您的设备或系统。
              <br />
              <br /> 在性能检测过程中涉及的软件及其性能只有在英特尔
              <Sup></Sup>微处理器的架构下方能得到优化。SYSmark* 和 MobileMark*
              <br /> 等性能测试使用特定的计算机系统、组件、软件、操作和功能进行测量。
              <br /> 上述任何要素的变动都有可能导致测试结果的变化。
              <br /> 您应该参考其他信息和性能测试以帮助您全面评估正在考虑的采购，包括产品在与其他产品结合使用时的性能。
              <br /> 若要获得更完整的信息，请访问
              <a href="https://www.intel.cn/content/www/cn/zh/benchmarks/benchmark.html" _target="blank" style="color: #00AEEF; font-family: 微软雅黑">http://www.intel.com/benchmarks</a>.
              <br />

            </td>
          </tr>
        </StanceTable>
      </td>
    </tr>

  </table>
</template>

<script>
import Nav from "@/components/edm/Nav.vue";
import ImageRow from "@/components/edm/ImageRow.vue";
import StanceTable from "@/components/edm/StanceTable.vue";
import Sup from "@/components/edm/Sup.vue";
import LinkBtn from "@/components/edm/LinkBtn.vue";
import ListTable from "@/components/edm/ListTable.vue";

const dataSource3 = [
  { text: "采用英特尔® 酷睿™ X、K 和 H 系列处理器的产品提供额外积分促销" },
  { text: "发烧友级 PC 专属称号以及英特尔技术合作伙伴网页的访问权限" },
  { text: "英特尔专家举办的技术研讨会" },
  { text: "一流的游戏和软件包" },
  { text: "本地电子竞技活动入场许可" }
];

export default {
  data() {
    return {
      dataSource3,
    };
  },
  components: {
    Nav,
    ImageRow,
    StanceTable,
    Sup,
    LinkBtn,
    ListTable
  }
};
</script>
