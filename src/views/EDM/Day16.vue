<template>
  <table align="center" style="text-align: center; font-family: 微软雅黑; margin: 0 auto;">
    <tr>
      <td>
        <StanceTable width="670">
    <tr>
      <TCell :ostyle="{ 'text-align': 'center'}">为发烧友客户提供全新性能。</TCell>
    </tr>
    </StanceTable>
    <Nav width="670"></Nav>
    <StanceTable hasTop></StanceTable>

    <ImageRow width="670" imgUrl="http://show.easeye.com.cn/fckattach/2018-11-07/e3b9e77152a2095d72521d1898764e2d/image/c6bf8bc9d322265cae7116f89dac3255_easeyethumbnail.jpg"></ImageRow>

    <StanceTable>
      <tr height="30"></tr>
      <tr>
        <TCell :ostyle="{ 'text-align': 'center', color: '#0071c5', 'font-size': '24px', 'font-weight': 700 }">立即开始体验第九代智能英特尔<Sup></Sup> 酷睿™ 处理器</TCell>
      </tr>
      <tr height="30"></tr>
      <tr>
        <TCell :ostyle="{ 'text-align': 'center', color: '#555554', 'font-size': '16px', 'line-height': '24px' }">
          第九代智能英特尔<Sup></Sup>酷睿™ 处理器现已上市，<br>
          您可随时购买这些未锁频的台式机处理器！<br>
          了解您的游戏和创作客户将获得哪些令人兴奋的新功能，包括：
        </TCell>
      </tr>
      <tr height="30"></tr>
    </StanceTable>

    <ListTable width="330" :dataSource="dataSource" listType="●" :tStyle="{ color: '#555554', 'font-size': '16px', 'line-height': '24px' }"></ListTable>

    <StanceTable hasTop hasBottom></StanceTable>

    <StanceTable>
      <tr>
        <td>
          <center>
            <LinkBtn width="320" url="https://www.intel.cn/content/www/cn/zh/technology-provider/products-and-solutions/whats-new.html">
              了解更多信息
            </LinkBtn>
          </center>
        </td>
      </tr>
      <tr height="40"></tr>
    </StanceTable>

    <StanceTable width="615">
      <tr>
        <td style="border-top:1px solid #e7e8e8;"></td>
      </tr>
       <tr height="30"></tr>
      <tr>
        <TCell :ostyle="{ 'text-align': 'center', color: '#0071c5', 'font-size': '24px', 'font-weight': 700 }">为领先的创造力打开大门</TCell>
      </tr>
      <tr height="30"></tr>
      <tr>
        <TCell :ostyle="{ 'text-align': 'center', color: '#555554', 'font-size': '16px', 'line-height': '24px' }">
          这一点毫无疑问。全新英特尔<Sup></Sup>酷睿™ X 系列处理器助力打造终极创作者 PC <br>
          平台。这些处理器专为密集的多线程工作负载而设计，<br>
          可为创作者提供尖端技术和专业功能，帮助其加速工作流程。
        </TCell>
      </tr>
      <tr height='30'></tr>
    </StanceTable>

    <StanceTable>
      <tr>
        <td>
          <center>
            <LinkBtn width="320" url="https://www.intel.cn/content/www/cn/zh/technology-provider/products-and-solutions/whats-new.html">
              了解更多信息
            </LinkBtn>
          </center>
        </td>
      </tr>
      <tr height="40"></tr>
    </StanceTable>

    <StanceTable bgcolor="#003C71" width="670">
      <tr>
        <td style="text-align: center; vertical-align: middle"><img src="http://show.easeye.com.cn/fckattach/2018-09-11/e3b9e77152a2095d72521d1898764e2d/image/eccbc87e4b5ce2fe28308fd9f2a7baf3.png" style="vertical-align:middle;" border="0" alt="" width="634"></td>
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
    text: "首款面向主流消费者的英特尔® 酷睿™ i9 台式机处理器"
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

