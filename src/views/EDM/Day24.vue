<template>
  <table align="center" style="text-align: center; font-family: 微软雅黑; margin: 0 auto;">
    <tr>
      <td>
        <!-- 固定好的标题 -->
        <Nav></Nav>
        <!-- 抬头的图片 -->
        <ImageRow :imgUrl="headImgUrl"></ImageRow>
        <!-- 通用的表格  站位表格 -->

        <StanceTable>
          <tr height="20"></tr>
          <tr>
            <td>
              <StanceTable width="414">
                <tr>
                  <td style="color:#0071C5;text-align: left;font-family: 微软雅黑; font-size: 13px;">
                   在此次促销活动期间，采购小型电脑，赚取丰厚积分，其中包括预装<WindowsSup></WindowsSup>10的英特尔<Sup></Sup>NUC 7和NUC 8家用迷你电脑。
                  </td>
                </tr>
                <tr height="10"></tr>
                <tr>
                  <TCell>
                    这些便携的机器外形小巧但功能强大，帮助您的客户改变他们的工作空间。这类电脑支持英特尔<Sup></Sup>傲腾™内存，拥有灵活的输入和输出选项，以“4×4”英寸的小巧外形安静运行。
                  </TCell>
                </tr>

                <tr height="10"></tr>
              </StanceTable>
            </td>
            <td width="220" align="center" valign="middle">
              <img width="200" src="http://show.easeye.com.cn/fckattach/2018-12-21/e3b9e77152a2095d72521d1898764e2d/image/6eb1c736507fceabee9cab3fe7f41da5.png" alt="">  
            </td>            
          </tr>
        </StanceTable>

        <StanceTable hasBottom hasTop>
          <tr>
            <TCell>本促销奖励活动期间，采购英特尔<Sup></Sup>NUC迷你电脑，每单位产品可赚取30至80积分，最多可赚取200,000积分。本促销活动将于2019年3月31日结束。</TCell>
          </tr>
          <tr height="10"></tr>
          <tr>
            <TCell><a href="https://prc-points.inteltechnologyprovider.com/node/1136" target="_blank">访问英特尔<Sup></Sup>渠道积分网站获取详情。</a></TCell>
          </tr>
          <tr height="10"></tr>
          <tr>
            <td style="text-align: left;font-family: 微软雅黑;">
              本促销活动有效期为2019年1月1日至2019年3月31日（“促销活动时间”），适用对象为中华人民共和国（仅为本促销条款的目的，系指不包括香港、澳门和台湾的境内地区）的英特尔<Sup></Sup>技术合作伙伴中已激活的至尊会员及菁英会员（“合格会员”）。
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
        <DataTable :dataSource="tableData" :column="column" :headStyle="tableHeadStyle" width="500"></DataTable>

        <StanceTable hasTop hasBottom>
          <!-- <tr>
            <TCell><b>产品列表二</b></TCell>
          </tr> -->
        </StanceTable>
        
        <DataTable :dataSource="tableData2" :column="column2" :headStyle="tableHeadStyle" width="500"></DataTable>

        <!-- <StanceTable hasTop hasBottom>
          <tr>
            <TCell>合格会员在完成一次组合采购后，将获得资格参与以下培训课程，完成培训课程后即可赚取积分。每个业务ID（GID）的附属用户完成同一节课程只能赚取一次积分。</TCell>
          </tr>
        </StanceTable> -->

        <!-- <DataTable :dataSource="tableData3" :column="column3" :headStyle="tableHeadStyle"></DataTable> -->
        

        <StanceTable hasTop>
          <tr>
            <TCell>在此次促销活动中，购买参与活动英特尔产品的积分赚取日期为购买英特尔产品的发票开具日期。英特尔将在促销结束后60（六十）天内，根据规则，向符合条件且遵守各项规则的合作伙伴发放在本次促销活动中奖励的积分。</TCell>
          </tr>
          <tr height="10"></tr>
          <tr>
            <TCell>合格会员将：</TCell>
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

const listData = [
  { text: '采购数量级别为1-5个，每个单品可赚取40积分'},
  { text: '采购数量级别为6-15个，每个单品可赚取50积分'},
  { text: '采购数量级别为16-30个，每个单品可赚取60积分'},
  { text: '采购数量级别为31-50个，每个单品可赚取80积分'},
  { text: '采购数量级别为51个及以上，每个单品可赚取100积分'},
]
const column = [
  {
    title: '购买量级别划分（单位）',
    dataIndex: 'text1',
    // align: 'left',
    // width: 400,
  },
  {
    title: '不同级别单位积分赚取',
    dataIndex: 'text2',
    // rowspan: 73,
    // width: 200,
  }
]

const tableData = [
  {"text1":"1-5","text2":"每单位30积分"},{"text1":"6-15","text2":"每单位40积分"},{"text1":"16-30","text2":"每单位50积分"},{"text1":"31-50","text2":"每单位60积分"},{"text1":"51-100","text2":"每单位70积分"},{"text1":"101+","text2":"每单位80积分"}
]

const column2 = [
  {
    title: '符合条件的英特尔产品',
    dataIndex: 'text1',
    // width: '80'
    align: 'left'
  },
  // {
  //   title: '积分/组合',
  //   dataIndex: 'text2',
  //   width: '200',
  //   rowspan: 44,
  // },
]
const tableData2 = [
  {"text1":"Intel<sup>®</sup> NUC 7 Business Mini PC with Windows<sup>®</sup> 10 Pro - BLKNUC7I3DNHNC"},{"text1":"Intel<sup>®</sup> NUC 7 Business Mini PC with Windows<sup>®</sup> 10 Pro - BLKNUC7I3DNHNC1"},{"text1":"Intel<sup>®</sup> NUC 7 Business Mini PC with Windows<sup>®</sup> 10 Pro - BLKNUC7I3DNHNC2"},{"text1":"Intel<sup>®</sup> NUC 7 Business Mini PC with Windows<sup>®</sup> 10 Pro - BLKNUC7I3DNHNC3"},{"text1":"Intel<sup>®</sup> NUC 7 Business Mini PC with Windows<sup>®</sup> 10 Pro - BLKNUC7I3DNHNC4"},{"text1":"Intel<sup>®</sup> NUC 7 Business Mini PC with Windows<sup>®</sup> 10 Pro - BLKNUC7I3DNHNC5"},{"text1":"Intel<sup>®</sup> NUC 7 Business Mini PC with Windows<sup>®</sup> 10 Pro - BLKNUC7I3DNKTC"},{"text1":"Intel<sup>®</sup> NUC 7 Business Mini PC with Windows<sup>®</sup> 10 Pro - BLKNUC7I3DNKTC1"},{"text1":"Intel<sup>®</sup> NUC 7 Business Mini PC with Windows<sup>®</sup> 10 Pro - BLKNUC7I3DNKTC2"},{"text1":"Intel<sup>®</sup> NUC 7 Business Mini PC with Windows<sup>®</sup> 10 Pro - BLKNUC7I3DNKTC3"},{"text1":"Intel<sup>®</sup> NUC 7 Business Mini PC with Windows<sup>®</sup> 10 Pro - BLKNUC7I3DNKTC4"},{"text1":"Intel<sup>®</sup> NUC 7 Business, a Mini PC with Windows<sup>®</sup> 10 Pro - BLKNUC7I5DNKPC"},{"text1":"Intel<sup>®</sup> NUC 7 Business, a Mini PC with Windows<sup>®</sup> 10 Pro - BLKNUC7I5DNKPC1"},{"text1":"Intel<sup>®</sup> NUC 7 Business, a Mini PC with Windows<sup>®</sup> 10 Pro - BLKNUC7I5DNKPC2"},{"text1":"Intel<sup>®</sup> NUC 7 Business, a Mini PC with Windows<sup>®</sup> 10 Pro - BLKNUC7I5DNKPC3"},{"text1":"Intel<sup>®</sup> NUC 7 Business, a Mini PC with Windows<sup>®</sup> 10 Pro - BLKNUC7I5DNKPC4"},{"text1":"Intel<sup>®</sup> NUC 7 Home, a mini PC with Windows<sup>®</sup> 10 - BOXNUC7I3BNHXF"},{"text1":"Intel<sup>®</sup> NUC 7 Home, a mini PC with Windows<sup>®</sup> 10 - BOXNUC7I3BNHXFL"},{"text1":"Intel<sup>®</sup> NUC 7 Home, a Mini PC with Windows<sup>®</sup> 10 - BOXNUC7i5BNHXF"},{"text1":"Intel<sup>®</sup> NUC 7 Home, a Mini PC with Windows<sup>®</sup> 10 - BOXNUC7i5BNHXFL"},{"text1":"Intel<sup>®</sup> NUC 7 Home, a Mini PC with Windows 10 - BOXNUC7i5BNKP"},{"text1":"Intel<sup>®</sup> NUC 7 Home, a Mini PC with Windows 10 - BOXNUC7i5BNKPL"},{"text1":"Intel<sup>®</sup> NUC 7 Home, a Mini PC with Windows<sup>®</sup> 10 - BOXNUC7i7BNHXG"},{"text1":"Intel<sup>®</sup> NUC 7 Home, a Mini PC with Windows<sup>®</sup> 10 - BOXNUC7i7BNHXGL"},{"text1":"Intel<sup>®</sup> NUC 7 Enthusiast, a Mini PC with Windows 10 - BOXNUC7i7BNKQ"},{"text1":"Intel<sup>®</sup> NUC 7 Enthusiast, a Mini PC with Windows 10 - BOXNUC7i7BNKQL"},{"text1":"Intel<sup>®</sup> NUC 8 Home, a Mini PC with Windows<sup>®</sup> 10 - BOXNUC8I3CYSM"},{"text1":"Intel<sup>®</sup> NUC 8 Home, a Mini PC with Windows<sup>®</sup> 10 - BOXNUC8I3CYSM1"},{"text1":"Intel<sup>®</sup> NUC 8 Home, a Mini PC with Windows<sup>®</sup> 10 - BOXNUC8I3CYSM2"},{"text1":"Intel<sup>®</sup> NUC 8 Home, a Mini PC with Windows<sup>®</sup> 10 - BOXNUC8I3CYSM3"},{"text1":"Intel<sup>®</sup> NUC 8 Home, a Mini PC with Windows<sup>®</sup> 10 - BOXNUC8I3CYSM4"},{"text1":"Intel<sup>®</sup> NUC 8 Home, a mini PC with Windows<sup>®</sup> 10 - BOXNUC8i3CYSM6"},{"text1":"Intel<sup>®</sup> NUC 8 Home, a Mini PC with Windows<sup>®</sup> 10 - BOXNUC8I3CYSN"},{"text1":"Intel<sup>®</sup> NUC 8 Home, a Mini PC with Windows<sup>®</sup> 10 - BOXNUC8I3CYSN1"},{"text1":"Intel<sup>®</sup> NUC 8 Home, a Mini PC with Windows<sup>®</sup> 10 - BOXNUC8I3CYSN2"},{"text1":"Intel<sup>®</sup> NUC 8 Home, a Mini PC with Windows<sup>®</sup> 10 - BOXNUC8I3CYSN3"},{"text1":"Intel<sup>®</sup> NUC 8 Home, a Mini PC with Windows<sup>®</sup> 10 - BOXNUC8I3CYSN4"},{"text1":"Intel<sup>®</sup> NUC 8 Home, a mini PC with Windows<sup>®</sup> 10 - BOXNUC8i3CYSN5"},{"text1":"Intel<sup>®</sup> NUC 8 Business Mini PC with Windows<sup>®</sup> 10 - BOXNUC8i7HNKQC"},{"text1":"Intel<sup>®</sup> NUC 8 Business Mini PC with Windows<sup>®</sup> 10 - BOXNUC8i7HNKQC1"},{"text1":"Intel<sup>®</sup> NUC 8 Business Mini PC with Windows<sup>®</sup> 10 - BOXNUC8i7HNKQC2"},{"text1":"Intel<sup>®</sup> NUC 8 Business Mini PC with Windows<sup>®</sup> 10 - BOXNUC8i7HNKQC3"},{"text1":"Intel<sup>®</sup> NUC 8 Business Mini PC with Windows<sup>®</sup> 10 - BOXNUC8i7HNKQC4"},{"text1":"Intel<sup>®</sup> NUC 8 Enthusiast Mini PC with Windows<sup>®</sup> 10 - BOXNUC8i7HVKVA"},{"text1":"Intel<sup>®</sup> NUC 8 Enthusiast Mini PC with Windows<sup>®</sup> 10 - BOXNUC8i7HVKVA1"},{"text1":"Intel<sup>®</sup> NUC 8 Enthusiast Mini PC with Windows<sup>®</sup> 10 - BOXNUC8i7HVKVA2"},{"text1":"Intel<sup>®</sup> NUC 8 Enthusiast Mini PC with Windows<sup>®</sup> 10 - BOXNUC8i7HVKVA3"},{"text1":"Intel<sup>®</sup> NUC 8 Enthusiast Mini PC with Windows<sup>®</sup> 10 - BOXNUC8i7HVKVA4"},{"text1":"Intel<sup>®</sup> NUC 8 Enthusiast, a Mini PC with Windows 10 Home - BOXNUC8i7HVKVAW"},{"text1":"Intel<sup>®</sup> NUC 8 Home, a Mini PC with Windows 10 - BOXNUC8I5BEKPA"},{"text1":"Intel<sup>®</sup> NUC 8 Home, a Mini PC with Windows 10 - BOXNUC8I5BEKPA1"},{"text1":"Intel<sup>®</sup> NUC 8 Home, a Mini PC with Windows 10 - BOXNUC8I5BEKPA2"},{"text1":"Intel<sup>®</sup> NUC 8 Home, a Mini PC with Windows 10 - BOXNUC8I5BEKPA3"},{"text1":"Intel<sup>®</sup> NUC 8 Home, a Mini PC with Windows 10 - BOXNUC8I5BEKPA4"},{"text1":"Intel<sup>®</sup> NUC 8 Enthusiast, a Mini PC with Windows 10 - BOXNUC8I7BEKQA"},{"text1":"Intel<sup>®</sup> NUC 8 Enthusiast, a Mini PC with Windows 10 - BOXNUC8I7BEKQA1"},{"text1":"Intel<sup>®</sup> NUC 8 Enthusiast, a Mini PC with Windows 10 - BOXNUC8I7BEKQA2"},{"text1":"Intel<sup>®</sup> NUC 8 Enthusiast, a Mini PC with Windows 10 - BOXNUC8I7BEKQA3"},{"text1":"Intel<sup>®</sup> NUC 8 Enthusiast, a Mini PC with Windows 10 - BOXNUC8I7BEKQA4"}
]
const column3 = [
  {
    title: '培训课程名称',
    dataIndex: 'text1',
    align: 'left',
    // width: 400,
  },
  {
    title: '奖励积分/课程',
    dataIndex: 'text2',
    width: 150,
  }
]

const tableData3 = [
  {"text1":"充分利用 Microsoft* Windows Server* 2019 和英特尔<sup>®</sup>至强<sup>®</sup>可扩展平台提供的 IT 现代化机会","link":"http://channeltraining.intel.com/diweb/catalog/item/eid/273710","text2":"200"},{"text1":"Selling Server Refresh for Windows SQL Server* 2017 Optimized for Intel<sup>®</sup> Xeon<sup>®</sup> Scalable processor","link":"http://channeltraining.intel.com/diweb/catalog/item/eid/273709","text2":"200"}
]

import {
  Nav, ImageRow, StanceTable, Sup, DataTable, ListTable, TCell,
} from '@/components/edm'

import {
  dataSource1,
  dataSource2,
  dataSource3
} from "@/constants/tableData";

const headstyle = { 'background-color': '#0070C0', color: '#ffffff', 'line-height': '22px' };
export default {
  data() {
    return {
      headImgUrl:
        "http://show.easeye.com.cn/fckattach/2018-12-21/e3b9e77152a2095d72521d1898764e2d/image/54c1e427f2aa94517ec2991bf569f6f3.png",
      dataSource1,
      dataSource2,
      dataSource3,
      tableData,
      tableData2,
      tableData3,
      column,
      column2,
      column3,
      listData,
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
