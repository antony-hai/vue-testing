<template>
  <table align="center" style="text-align: center; font-family: 微软雅黑; margin: 0 auto;">
    <tr>
      <td>
        <!-- 固定好的标题 -->
        <Nav></Nav>
        <!-- 抬头的图片 -->
        <ImageRow :imgUrl="headImgUrl"></ImageRow>
        <!-- 通用的表格  站位表格 -->
        <!-- <StanceTable hasTop hasBottom>
          <td style="color:#0071C5;text-align: left;font-family: 微软雅黑; font-size: 13px;">
            对于试图满足客户需求的数据中心，英特尔<Sup></Sup>固态盘数据中心家族产品是至关重要的。这些固态盘旨在满足数据中心所需的速度和可靠性。
          </td>
        </StanceTable> -->

        <StanceTable hasTop>
          <tr>
            <td>
              <StanceTable width="374">
                <td style="color:#0071C5;text-align: left;font-family: 微软雅黑; font-size: 12px;">
                   在此次促销活动期间，采购小型电脑，赚取丰厚积分，其中包括预装Windows<Sup></Sup>10的英特尔<Sup></Sup>NUC 7和NUC 8家用迷你电脑。
                </td>
                <tr height="10"></tr>
                <tr>
                  <TCell>
                    这些便携的机器外形小巧但功能强大，帮助您的客户改变他们的工作空间。这类电脑支持英特尔<Sup></Sup>傲腾™内存，拥有灵活的输入和输出选项，以“4×4”英寸的小巧外形安静运行。
                  </TCell>
                </tr>
                <!-- <tr height="10"></tr>
                <tr>
                  <TCell>
                    <ListTable :dataSource="dataSource" listType="●" width="434"></ListTable>
                  </TCell>
                </tr> -->
                <!-- <tr height="10"></tr>
                <tr>
                  <TCell>在此促销活动中，您可以赚取无上限限制的积分，促销活动时间为即日起截至6月30日。</TCell>
                </tr>
                <tr height="10"></tr>
                <tr>
                  <TCell><a href="https://prc-points.inteltechnologyprovider.com/node/1249" target="_blank">访问英特尔<Sup></Sup>渠道积分网站了解更多信息。</a></TCell>
                </tr> -->
              </StanceTable>
            </td>
            <td width="260" align="center" valign="center">
              <img width="220" src="http://show.easeye.com.cn/fckattach/2019-03-25/e3b9e77152a2095d72521d1898764e2d/image/0c1e1e9c0ddbaacc8d88668192adcfa6_easeyethumbnail.png" alt="">  
            </td>            
          </tr>
        </StanceTable>

        <StanceTable hasBottom hasTop>
          <tr>
            <TCell>本促销奖励活动期间，采购英特尔<Sup></Sup>NUC迷你电脑，每单位产品可赚取30至80积分，最多可赚取200,000积分。本促销活动将于2019年6月30日结束。</TCell>
          </tr>
          <tr height="10"></tr>
          <tr>
           <TCell><a href="https://prc-points.inteltechnologyprovider.com/node/1249" target="_blank">访问英特尔<Sup></Sup>渠道积分网站了解更多信息。</a></TCell>
          </tr>
          <tr height="10"></tr>
          <tr>
            <td style="text-align: left;font-family: 微软雅黑;">
              本促销活动有效期为2019年4月1日至2019年6月30日（“促销活动时间”），适用对象为中华人民共和国（仅为本促销条款的目的，系指不包括香港、澳门和台湾的境内地区）的英特尔<Sup></Sup>技术合作伙伴中已激活的至尊会员及菁英会员（“合格会员”）。
            </td>
          </tr>
          <tr style="height: 10px"></tr>
          <tr>
            <td style="text-align: left;font-family: 微软雅黑;">
              在促销活动期间，对合格会员从英特尔<Sup></Sup>授权总代理（“IAD”）、英特尔<Sup></Sup>授权集成供应商（“IACS”）或英特尔<Sup></Sup>认可供应商（“IAS”） [视具体情况而定]购买如下列表中的英特尔产品（“符合条件的英特尔<Sup></Sup>产品”），英特尔将实行以下积分奖励：
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

        <DataTable :dataSource="dataSource2" :column="column2" :headStyle="tableHeadStyle"></DataTable>

        <StanceTable hasTop>
          <tr>
            <td style="text-align: left;font-family: 微软雅黑;">在此次促销活动中，购买参与活动英特尔产品的积分赚取日期为购买英特尔产品的发票开具日期。英特尔将在促销结束后60（六十）天内，根据规则，向符合条件且遵守各项规则的合作伙伴发放在本次促销活动中奖励的积分。</td>
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


const headstyle = { 'background-color': '#0070C0', color: '#ffffff', 'line-height': '22px' };

const dataSource = [
  { text: '采购数量级别为1-5个，每个单品可赚取40积分' },
  { text: '采购数量级别为6-15个，每个单品可赚取50积分' },
  { text: '采购数量级别为16-30个，每个单品可赚取60积分' },
  { text: '采购数量级别为31-50个，每个单品可赚取80积分' },
  { text: '采购数量级别为51个及以上，每个单品可赚取100积分' },
]
export const dataSource1 = [
  {"text1":"Intel<sup>®</sup> NUC 7 Business Mini PC with Windows<sup>®</sup> 10 Pro - BLKNUC7I3DNHNC"},{"text1":"Intel<sup>®</sup> NUC 7 Business Mini PC with Windows<sup>®</sup> 10 Pro - BLKNUC7I3DNHNC1"},{"text1":"Intel<sup>®</sup> NUC 7 Business Mini PC with Windows<sup>®</sup> 10 Pro - BLKNUC7I3DNHNC2"},{"text1":"Intel<sup>®</sup> NUC 7 Business Mini PC with Windows<sup>®</sup> 10 Pro - BLKNUC7I3DNHNC3"},{"text1":"Intel<sup>®</sup> NUC 7 Business Mini PC with Windows<sup>®</sup> 10 Pro - BLKNUC7I3DNHNC4"},{"text1":"Intel<sup>®</sup> NUC 7 Business Mini PC with Windows<sup>®</sup> 10 Pro - BLKNUC7I3DNHNC5"},{"text1":"Intel<sup>®</sup> NUC 7 Business Mini PC with Windows<sup>®</sup> 10 Pro - BLKNUC7I3DNKTC"},{"text1":"Intel<sup>®</sup> NUC 7 Business Mini PC with Windows<sup>®</sup> 10 Pro - BLKNUC7I3DNKTC1"},{"text1":"Intel<sup>®</sup> NUC 7 Business Mini PC with Windows<sup>®</sup> 10 Pro - BLKNUC7I3DNKTC2"},{"text1":"Intel<sup>®</sup> NUC 7 Business Mini PC with Windows<sup>®</sup> 10 Pro - BLKNUC7I3DNKTC3"},{"text1":"Intel<sup>®</sup> NUC 7 Business Mini PC with Windows<sup>®</sup> 10 Pro - BLKNUC7I3DNKTC4"},{"text1":"Intel<sup>®</sup> NUC 7 Business, a Mini PC with Windows<sup>®</sup> 10 Pro - BLKNUC7I5DNKPC"},{"text1":"Intel<sup>®</sup> NUC 7 Business, a Mini PC with Windows<sup>®</sup> 10 Pro - BLKNUC7I5DNKPC1"},{"text1":"Intel<sup>®</sup> NUC 7 Business, a Mini PC with Windows<sup>®</sup> 10 Pro - BLKNUC7I5DNKPC2"},{"text1":"Intel<sup>®</sup> NUC 7 Business, a Mini PC with Windows<sup>®</sup> 10 Pro - BLKNUC7I5DNKPC3"},{"text1":"Intel<sup>®</sup> NUC 7 Business, a Mini PC with Windows<sup>®</sup> 10 Pro - BLKNUC7I5DNKPC4"},{"text1":"Intel<sup>®</sup> NUC 7 Home, a mini PC with Windows<sup>®</sup> 10 - BOXNUC7I3BNHXF"},{"text1":"Intel<sup>®</sup> NUC 7 Home, a mini PC with Windows<sup>®</sup> 10 - BOXNUC7I3BNHXFL"},{"text1":"Intel<sup>®</sup> NUC 7 Home, a Mini PC with Windows<sup>®</sup> 10 - BOXNUC7i5BNHXF"},{"text1":"Intel<sup>®</sup> NUC 7 Home, a Mini PC with Windows<sup>®</sup> 10 - BOXNUC7i5BNHXFL"},{"text1":"Intel<sup>®</sup> NUC 7 Home, a Mini PC with Windows 10 - BOXNUC7i5BNKP"},{"text1":"Intel<sup>®</sup> NUC 7 Home, a Mini PC with Windows 10 - BOXNUC7i5BNKPL"},{"text1":"Intel<sup>®</sup> NUC 7 Home, a Mini PC with Windows<sup>®</sup> 10 - BOXNUC7i7BNHXG"},{"text1":"Intel<sup>®</sup> NUC 7 Home, a Mini PC with Windows<sup>®</sup> 10 - BOXNUC7i7BNHXGL"},{"text1":"Intel<sup>®</sup> NUC 7 Enthusiast, a Mini PC with Windows 10 - BOXNUC7i7BNKQ"},{"text1":"Intel<sup>®</sup> NUC 7 Enthusiast, a Mini PC with Windows 10 - BOXNUC7i7BNKQL"},{"text1":"Intel<sup>®</sup> NUC 8 Home, a Mini PC with Windows<sup>®</sup> 10 - BOXNUC8I3CYSM"},{"text1":"Intel<sup>®</sup> NUC 8 Home, a Mini PC with Windows<sup>®</sup> 10 - BOXNUC8I3CYSM1"},{"text1":"Intel<sup>®</sup> NUC 8 Home, a Mini PC with Windows<sup>®</sup> 10 - BOXNUC8I3CYSM2"},{"text1":"Intel<sup>®</sup> NUC 8 Home, a Mini PC with Windows<sup>®</sup> 10 - BOXNUC8I3CYSM3"},{"text1":"Intel<sup>®</sup> NUC 8 Home, a Mini PC with Windows<sup>®</sup> 10 - BOXNUC8I3CYSM4"},{"text1":"Intel<sup>®</sup> NUC 8 Home, a mini PC with Windows<sup>®</sup> 10 - BOXNUC8i3CYSM6"},{"text1":"Intel<sup>®</sup> NUC 8 Home, a Mini PC with Windows<sup>®</sup> 10 - BOXNUC8I3CYSN"},{"text1":"Intel<sup>®</sup> NUC 8 Home, a Mini PC with Windows<sup>®</sup> 10 - BOXNUC8I3CYSN1"},{"text1":"Intel<sup>®</sup> NUC 8 Home, a Mini PC with Windows<sup>®</sup> 10 - BOXNUC8I3CYSN2"},{"text1":"Intel<sup>®</sup> NUC 8 Home, a Mini PC with Windows<sup>®</sup> 10 - BOXNUC8I3CYSN3"},{"text1":"Intel<sup>®</sup> NUC 8 Home, a Mini PC with Windows<sup>®</sup> 10 - BOXNUC8I3CYSN4"},{"text1":"Intel<sup>®</sup> NUC 8 Home, a mini PC with Windows<sup>®</sup> 10 - BOXNUC8i3CYSN5"},{"text1":"Intel<sup>®</sup> NUC 8 Business Mini PC with Windows<sup>®</sup> 10 - BOXNUC8i7HNKQC"},{"text1":"Intel<sup>®</sup> NUC 8 Business Mini PC with Windows<sup>®</sup> 10 - BOXNUC8i7HNKQC1"},{"text1":"Intel<sup>®</sup> NUC 8 Business Mini PC with Windows<sup>®</sup> 10 - BOXNUC8i7HNKQC2"},{"text1":"Intel<sup>®</sup> NUC 8 Business Mini PC with Windows<sup>®</sup> 10 - BOXNUC8i7HNKQC3"},{"text1":"Intel<sup>®</sup> NUC 8 Business Mini PC with Windows<sup>®</sup> 10 - BOXNUC8i7HNKQC4"},{"text1":"Intel<sup>®</sup> NUC 8 Enthusiast Mini PC with Windows<sup>®</sup> 10 - BOXNUC8i7HVKVA"},{"text1":"Intel<sup>®</sup> NUC 8 Enthusiast Mini PC with Windows<sup>®</sup> 10 - BOXNUC8i7HVKVA1"},{"text1":"Intel<sup>®</sup> NUC 8 Enthusiast Mini PC with Windows<sup>®</sup> 10 - BOXNUC8i7HVKVA2"},{"text1":"Intel<sup>®</sup> NUC 8 Enthusiast Mini PC with Windows<sup>®</sup> 10 - BOXNUC8i7HVKVA3"},{"text1":"Intel<sup>®</sup> NUC 8 Enthusiast Mini PC with Windows<sup>®</sup> 10 - BOXNUC8i7HVKVA4"},{"text1":"Intel<sup>®</sup> NUC 8 Enthusiast, a Mini PC with Windows 10 Home - BOXNUC8i7HVKVAW"},{"text1":"Intel<sup>®</sup> NUC 8 Home, a Mini PC with Windows 10 - BOXNUC8I5BEKPA"},{"text1":"Intel<sup>®</sup> NUC 8 Home, a Mini PC with Windows 10 - BOXNUC8I5BEKPA1"},{"text1":"Intel<sup>®</sup> NUC 8 Home, a Mini PC with Windows 10 - BOXNUC8I5BEKPA2"},{"text1":"Intel<sup>®</sup> NUC 8 Home, a Mini PC with Windows 10 - BOXNUC8I5BEKPA3"},{"text1":"Intel<sup>®</sup> NUC 8 Home, a Mini PC with Windows 10 - BOXNUC8I5BEKPA4"},{"text1":"Intel<sup>®</sup> NUC 8 Enthusiast, a Mini PC with Windows 10 - BOXNUC8I7BEKQA"},{"text1":"Intel<sup>®</sup> NUC 8 Enthusiast, a Mini PC with Windows 10 - BOXNUC8I7BEKQA1"},{"text1":"Intel<sup>®</sup> NUC 8 Enthusiast, a Mini PC with Windows 10 - BOXNUC8I7BEKQA2"},{"text1":"Intel<sup>®</sup> NUC 8 Enthusiast, a Mini PC with Windows 10 - BOXNUC8I7BEKQA3"},{"text1":"Intel<sup>®</sup> NUC 8 Enthusiast, a Mini PC with Windows 10 - BOXNUC8I7BEKQA4"}
]
export const dataSource2 = [
 {"text1":"购买量级别划分（单位）","text2":"不同级别单位积分赚取"},{"text1":"1-5","text2":"30积分/单位产品"},{"text1":"6-15","text2":"40积分/单位产品"},{"text1":"16-30","text2":"50积分/单位产品"},{"text1":"31-50","text2":"60积分/单位产品"},{"text1":"51-100","text2":"70积分/单位产品"},{"text1":"101+","text2":"80积分/单位产品"}
]

const column1 = [
  {
    title: '符合条件的英特尔产品',
    dataIndex: 'text1',
    align: 'left',
    // width: 420
  },
  // {
  //   title: '积分/单位',
  //   dataIndex: 'text2',
  //   // rowspan: 25,
  //   width: 80,
  // },
  // {
  //   title: '英特尔<sup>®</sup>HPC <br/>数据中心专家及<br/>云数据中心专家<br/>额外奖励积分',
  //   dataIndex: 'text3',
  //   width: 100,
  // }
]
const column2 = [
  {
    title: '购买量级别划分（单位）',
    dataIndex: 'text1',
    align: 'left',
    // width: 420
  },
  {
    title: '不同级别单位积分赚取',
    dataIndex: 'text2',
    // width: 90
  },
  // {
  //   title: '英特尔<sup>®</sup>HPC <br/>数据中心专家及<br/>云数据中心专家<br/>额外奖励积分',
  //   dataIndex: 'text3',
  // }
]


const dataSource3 = [
  {
    text: '在本次促销活动中最多可赚取200,000积分；'
  },
  {
    text: '可同时参与本次活动和其他积分活动；'
  },
  {
    text: '不可同时参加针对本次促销活动中符合条件的英特尔产品所进行的其他英特尔通知的折扣或促销活动，不论折扣或促销活动是针对本促销活动的合格会员，或是代表合格会员的第三方；'
  },
  {
    text: '不可以转让此次促销活动中赚取的积分；且'
  },
  {
    text: '不可以变现此次促销活动中赚取的积分。'
  },
]
export default {
  data() {
    return {
      headImgUrl:
        "http://show.easeye.com.cn/fckattach/2019-03-22/e3b9e77152a2095d72521d1898764e2d/image/25f5ec9740ce5112cd75e0a8861161fe_easeyethumbnail.png",
      dataSource,
      dataSource1,
      dataSource2,
      dataSource3,
      column1,
      column2,
      footImgUrl:
        "http://show.easeye.com.cn/fckattach/2019-03-22/e3b9e77152a2095d72521d1898764e2d/image/b31bdb5e820b7243887e0c490238771d_easeyethumbnail.png"
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
