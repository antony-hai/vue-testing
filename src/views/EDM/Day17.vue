<template>
  <table align="center" style="text-align: center; font-family: 微软雅黑; margin: 0 auto;">
    <tr>
      <td>
        <!-- <StanceTable width="670">
          <tr>
            <TCell :ostyle="{ 'text-align': 'center', color: '#959595'}">比较英特尔和 AMD 在数据中心领域的专业能力。</TCell>
          </tr>
        </StanceTable>-->
        <Nav width="670"></Nav>
        <StanceTable hasTop></StanceTable>
        <StanceTable hasTop hasBottom bgcolor="#0071C5" width="670">
          <tr height="10"></tr>
          <tr>
            <td style="text-align: center; vertical-align: middle">
              <img
                src="http://show.easeye.com.cn/fckattach/2018-11-07/e3b9e77152a2095d72521d1898764e2d/image/ae3cdc5a4f289a3ca45910c30b73b0ec.png"
                style="vertical-align:middle;"
                border="0"
                alt
              />
            </td>
          </tr>
          <tr height="10"></tr>
        </StanceTable>
        <ImageRow
          width="670"
          imgUrl="http://show.easeye.com.cn/fckattach/2019-12-02/e3b9e77152a2095d72521d1898764e2d/image/e9e8890d9bec6cb949cf9fad4fedb52a_easeyethumbnail.jpg"
        ></ImageRow>

        <StanceTable width="670">
          <tr height="30"></tr>
          <tr>
            <TCell
              :ostyle="{ 'text-align': 'center', color: '#515656', 'font-size': '16px', 'line-height': '26px' }"
            >
              全新英特尔<Sup></Sup>至强<Sup></Sup>处理器为您和您日益增长的中小型企业客户提供了新机会。<br>
              现在，您可以提供真正的服务器系统，<br>
              以实现显著的性能提升并帮助小型企业更快地获得洞察。<br>
              <p style="margin-top: 10px; margin-bottom: 10px; padding: 0;">了解新品牌的诸多优势，它与英特尔<Sup></Sup>至强<Sup></Sup>E3 处理器的区别以及新的编号系统。</p>
              
            </TCell>
          </tr>
          <tr height="10"></tr>

          <tr>
            <td align="center">
              <LinkBtn
                width="200"
                align="center"
                url="https://www.intel.cn/content/www/cn/zh/technology-provider/products-and-solutions/smb/transition-guide.html"
              >获取迁移指南</LinkBtn>
            </td>
          </tr>
          <!-- <tr height="20"></tr>
          <tr>
            <TCell
              :ostyle="{ 'text-align': 'center', color: '#959595', 'font-size': '18px', 'line-height': '26px' }"
            >
              推销全新第二代英特尔
              <Sup></Sup>至强
              <Sup></Sup>可扩展处理器，赢取多达 450 个积分，
              <br />并完成旨在帮助您提高销量的最新培训课程，赢取更多积分。
              <br />
            </TCell>
          </tr>-->
        </StanceTable>

        <!-- <StanceTable width="670">
          <tr>
            <td align="center">
              <LinkBtn
                width="320"
                align="center"
                url="https://www.intel.com/content/www/cn/zh/technology-provider/products-and-solutions/xeon-scalable-family/2gen-data-centric-computing-article.html"
              >阅读博客</LinkBtn>
            </td>
          </tr>
        </StanceTable>-->

        <!-- <StanceTable width="670">
      <tr><td><hr color="#e7e8e8" size="1"></td></tr>
      <tr>
        <td>
          <StanceTable width="670">
            <tr>
              <TCell :ostyle="{color: '#0071c5', 'font-size': '16px', 'line-height': '24px', 'padding-bottom': '15px', 'padding-left': '30px', 'padding-top': '25px'}">
                了解您如何通过基于英特尔至强可扩展平台、<br>
                经过验证且易于部署的解决方案，帮助客户扩展 IT，<br>
                优化其数据中心功能。
              </TCell>
              <td width="100" valign="middle" align="center">
                <a href="http://channeltraining.intel.com/diweb/gateway/init/1/f/catalog*2Fitem*2Feid*2F253604" target="_blank">
                  <img src="http://show.easeye.com.cn/fckattach/2018-11-07/e3b9e77152a2095d72521d1898764e2d/image/99edd5379663f5f3dd071cd080df7c05.png" alt="" style="vertical-align:middle;" border="0">
                </a>
              </td>
            </tr>
          </StanceTable>
        </td>
      </tr>
      <tr><td><hr color="#e7e8e8" size="1"></td></tr>
      <tr>
        <td>
          <StanceTable width="670">
            <tr>
              <TCell :ostyle="{color: '#0071c5', 'font-size': '16px', 'line-height': '24px', 'padding-bottom': '15px', 'padding-left': '30px', 'padding-top': '25px'}">
                观看此演示，<br>
                了解英特尔至强处理器顾问工具如何帮助您向客户展示整体考虑其 IT<br>
                计算、存储和网络解决方案的业务价值。
              </TCell>
              <td width="100" valign="middle" align="center">
                <a href="http://channeltraining.intel.com/diweb/gateway/init/1/f/catalog*2Fitem*2Feid*2F253606" target="_blank">
                  <img src="http://show.easeye.com.cn/fckattach/2018-11-07/e3b9e77152a2095d72521d1898764e2d/image/99edd5379663f5f3dd071cd080df7c05.png" alt="" style="vertical-align:middle;" border="0">
                </a>
              </td>
            </tr>
          </StanceTable>
        </td>
      </tr>
      <tr><td><hr color="#e7e8e8" size="1"></td></tr>
      <tr>
        <td>
          <StanceTable width="670">
            <tr>
              <TCell :ostyle="{color: '#0071c5', 'font-size': '16px', 'line-height': '24px', 'padding-bottom': '15px', 'padding-left': '30px', 'padding-top': '25px'}">
                使用英特尔至强处理器顾问工具套件，<br>
                比较数据中心解决方案并为您的客户提供总体拥有成本优势。<br>
              </TCell>
              <td width="100" valign="middle" align="center">
                <a href="https://sfederation.intel.com/federation2/sp/IntelXeonProcessorAdvisorSuite/dXJuOnByb2Q6ZXhhbHQ6eGVvbnByb2Nlc3NvcmFkdmlzb3I%3D" target="_blank">
                  <img src="http://show.easeye.com.cn/fckattach/2018-11-07/e3b9e77152a2095d72521d1898764e2d/image/99edd5379663f5f3dd071cd080df7c05.png" alt="" style="vertical-align:middle;" border="0">
                </a>
              </td>
            </tr>
          </StanceTable>
        </td>
      </tr>

        </StanceTable>-->

        <!-- <StanceTable hasTop hasBottom></StanceTable> -->

        <StanceTable bgcolor="#003C71" width="670">
          <tr>
            <td style="text-align: center; vertical-align: middle">
              <img
                src="http://show.easeye.com.cn/fckattach/2018-09-11/e3b9e77152a2095d72521d1898764e2d/image/eccbc87e4b5ce2fe28308fd9f2a7baf3.png"
                style="vertical-align:middle;"
                border="0"
                alt
                width="634"
              />
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
  StanceTable,
  ListTable,
  LinkBtn,
  TCell,
  ImageRow,
  Sup
} from "@/components/edm";

export const dataSource3 = [
  {
    text: "首款面向主流消费者的英特尔<Sup></Sup> 酷睿™ i9 台式机处理器"
  },
  {
    text: "高达 8 个内核，16 个线程，5.0 GHz"
  },
  {
    text: "改进的超频定制和焊接散热材料 (STIM)"
  }
];
export default {
  data() {
    return {
      dataSource: dataSource3
    };
  },
  components: {
    Nav,
    StanceTable,
    ListTable,
    LinkBtn,
    TCell,
    ImageRow,
    Sup
  }
};
</script>

