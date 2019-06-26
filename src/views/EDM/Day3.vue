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
              恭喜您成为一名英特尔®技术合作伙伴发烧友级 PC 专家！
            </td>
          </tr>
          <tr height="20"></tr>
          <tr>
            <td style="color: #959595; text-align: left;font-family: 微软雅黑; font-size: 14px; line-height: 24px;">
              由于全球 PC 玩家的数量已经突破 10 亿 1，市场正在快速发展，<br>
              您已经拥有了通过英特尔扩大客户群和实现创收的优势。
            </td>
          </tr>
          <tr height="20"></tr>
          <tr>
            <td style="color: #959595; text-align: left;font-family: 微软雅黑; font-size: 14px; line-height: 24px;">
              充分利用您现在可以享受的所有权益，包括：
            </td>
          </tr>
          <tr height="20"></tr>
          <!-- <tr>
            <TCell :ostyle="{'font-size': '13px'}"><b>步骤1：参加培训</b></TCell>
          </tr>
          <tr>
            <TCell>通过参加发烧友指定课程列表中的培训获得 25 个学分，培训课程包括：</TCell>
          </tr> -->
          <tr>
            <td>
              <ListTable :dataSource="dataSource1" listType="●" hasSpace :tStyle="{ 'font-size': '14px', 'line-height': '24px', color: '#959595'}"></ListTable>
            </td>
          </tr>
          <tr height="20"></tr>
          <!-- <tr>
            <TCell :ostyle="{'font-size': '13px'}"><b>步骤2：提交申请加入表格</b></TCell>
          </tr>
          <tr>
            <TCell><a href="https://techprovider.intel.com/us-en-enthusiast-specialty-qualify" target="_blank" rel="noopener noreferrer">填写并提交表格</a>正式成为发烧友PC专家，获得非凡的发烧友专享权益，如额外的积分促销活动、专属的发烧友PC专家称呼、当地电子竞技赛事入场券等。</TCell>
            
          </tr>
          <tr height="20"></tr>
          <tr>
            <TCell>相信您不久之后即可成功获得发烧友PC专家资格！</TCell>
          </tr>
          <tr height="20"></tr>
          <tr>
            <TCell><a href="http://channeltraining.intel.com/diweb/catalog/c/145/tas/1359" target="_blank" rel="noopener noreferrer">参加培训 ></a></TCell>
          </tr>
          <tr height="20"></tr>
          <tr>
            <TCell><a href="https://techprovider.intel.com/us-en-enthusiast-specialty-qualify" target="_blank" rel="noopener noreferrer">提交申请加入表格 ></a></TCell>
          </tr> -->
          <tr>
            <td style="color: #959595; text-align: left;font-family: 微软雅黑; font-size: 14px; line-height: 24px;">
              感谢您与英特尔合作。
            </td>
          </tr>
          <tr>
            <td height="85" valign="middle" align="left">
              <div>
            <!--[if gte mso 9]><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="https://www.intel.com/content/www/cn/zh/my-intel/reseller-login.html?source=https%3A%2F%2Fintel.maillist-service.com%2Fmaillist-serviceetracetime20180920%2FEventMail%2FSourceContent.aspx%3Fsign%3D51834C2C7A4E972596831484FDFCB9D25CD75279%26EASEYETEMPLATEID%3Dc746a542-b08a-44a7-9066-6907164b703b%26EASEYEUID%3D7729587-1847-312-22793%26s%3D30C1C43EE2D1A4C230E9ED96BB38F6941D44CC78&redirect=https%3A%2F%2Fwww.intel.com%2Fcontent%2Fwww%2Fcn%2Fzh%2Fsecure%2Ftechnology-provider%2Fenthusiast-qualified%2Fqualified-enthusiast-pc-specialty-benefits.html" style="height:40px;v-text-anchor:middle;width:120px;" arcsize="19%" stroke="f" fillcolor="#00aeef"><w:anchorlock/><center><!
            [endif]-->
            <a
              style="background-color:#00aeef;border-radius:3px;color:#ffffff;display:inline-block;font-family:sans-serif;font-size:14px;line-height:40px;mso-line-height-rule:exactly;text-align:center;text-decoration:none;width:120px;-webkit-text-size-adjust:none"
              href="https://www.intel.com/content/www/cn/zh/my-intel/reseller-login.html?source=https%3A%2F%2Fintel.maillist-service.com%2Fmaillist-serviceetracetime20180920%2FEventMail%2FSourceContent.aspx%3Fsign%3D51834C2C7A4E972596831484FDFCB9D25CD75279%26EASEYETEMPLATEID%3Dc746a542-b08a-44a7-9066-6907164b703b%26EASEYEUID%3D7729587-1847-312-22793%26s%3D30C1C43EE2D1A4C230E9ED96BB38F6941D44CC78&redirect=https%3A%2F%2Fwww.intel.com%2Fcontent%2Fwww%2Fcn%2Fzh%2Fsecure%2Ftechnology-provider%2Fenthusiast-qualified%2Fqualified-enthusiast-pc-specialty-benefits.html"
              target="_blank"
              >活的权益</a
            >
            <!--[if gte mso 9]></center></v:roundrect><![endif]-->
          </div>
            </td>
          </tr>

          <!-- <tr height="30"></tr> -->
        </StanceTable>

        <!-- <ImageRow width="670" imgUrl="http://show.easeye.com.cn/fckattach/2019-03-22/e3b9e77152a2095d72521d1898764e2d/image/b31bdb5e820b7243887e0c490238771d_easeyethumbnail.png"></ImageRow> -->
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
import {
  Nav,
  ImageRow,
  StanceTable,
  Sup,
  LinkBtn,
  ListTable,
  TCell
} from "@/components/edm";

const dataSource3 = [
  {
    text:
      " <a href='http://channeltraining.intel.com/diweb/catalog/item/eid/222693' target='_blank'>未锁频的英特尔®酷睿™处理器超频简介</a>"
  },
  {
    text:
      " <a href='https://channeltraining.intel.com/diweb/gateway/init/1/f/catalog*2Fitem*2Feid*2F37852?elqTrackId=a950aab611b24e11a5241d015dcb40b4&elqTrack=true' target='_blank'>Influencer Marketing: Cutting-Edge Tactics for Selling to Gamers</a>"
  },
  {
    text:
      " <a href='http://channeltraining.intel.com/diweb/catalog/item/eid/37849' target='_blank'>向游戏发烧友和内容创作者销售高端平台搭载英特尔<sup>®</sup>酷睿<sup>™</sup>X 系列处理器家族</a>"
  },
  {
    text:
      " <a href='http://channeltraining.intel.com/diweb/catalog/item/eid/237004' target='_blank'>发烧友级 PC 特惠资格认证的益处</a>"
  },
  {
    text:
      " <a href='http://channeltraining.intel.com/diweb/catalog/item/eid/228266' target='_blank'>英特尔<sup>®</sup> Software Distribution Hub 最佳实践</a>"
  },
  {
    text:
      " <a href='http://channeltraining.intel.com/diweb/catalog/c/145/tas/1359' target='_blank'>查看所有发烧友PC专家培训课程</a>"
  }
];

const dataSource1 = [
  {
    text:
      "采用英特尔<sup>®</sup> 酷睿™ X、K 和 H 系列处理器的产品提供额外积分促销"
  },
  { text: "发烧友级 PC 专属称号以及英特尔技术合作伙伴网页的访问权限" },
  { text: "英特尔专家举办的技术研讨会" },
  { text: "	一流的游戏和软件包" },
  { text: "本地电子竞技活动入场许可" }
];

export default {
  data() {
    return {
      dataSource3,
      dataSource1
    };
  },
  components: {
    Nav,
    ImageRow,
    StanceTable,
    Sup,
    LinkBtn,
    ListTable,
    TCell
  }
};
</script>
