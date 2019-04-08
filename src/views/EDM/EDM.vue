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
            借助一系列全新第九代英特尔<Sup></Sup>酷睿<sup>™</sup>处理器为您的客户带来全新的速度和性能体验。
          </td>
        </StanceTable>

        <StanceTable hasTop>
          <tr>
            <td>
              <StanceTable width="414">
                <!-- <td style="color:#0071C5;text-align: left;font-family: 微软雅黑; font-size: 12px;">
                   最好的英特尔<Sup></Sup>硬件可以更好地协同运行，正因如此，当您组合采购英特尔<Sup></Sup>XEON至强<Sup></Sup>可扩展处理器（包括第二代英特尔<Sup></Sup>XEON至强<Sup></Sup>Gold可扩展处理器及英特尔<Sup></Sup>XEON至强<Sup></Sup>Platinum可扩展处理器）和高性能的英特尔<Sup></Sup>固态盘时，我们会提供奖励积分
                </td>
                <tr height="10"></tr> -->
                <tr>
                  <TCell>
                    在此促销活动期间，采购符合条件的全新英特尔<Sup></Sup>酷睿™处理器，每单位产品最高可赚取60积分。我们最新的迭代产品采用强大的14纳米CPU架构，可为您客户亟需的技术提供更佳的性能和更快的速度。当您的客户在享受英特尔最新处理器技术的优势时，您采购的第九代英特尔<Sup></Sup>酷睿™处理器越多，获得积分就越多。根据采购数量，每单位产品可赚取层级式积分30-60分：
                  </TCell>
                </tr>
                <tr height="10"></tr>
                <tr>
                  <TCell>
                    <ListTable :dataSource="dataSource" listType="●" width="414"></ListTable>
                  </TCell>
                </tr>
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
            <td width="220" align="center" valign="top">
              <img width="190" src="http://show.easeye.com.cn/fckattach/2019-03-26/e3b9e77152a2095d72521d1898764e2d/image/d14fc00faae3d8ae77a0d459ede9073b_easeyethumbnail.png" alt="">  
            </td>            
          </tr>
        </StanceTable>

        <StanceTable hasBottom hasTop>
          <!-- <tr>
            <TCell>采购至少一个符合条件的处理器后，将有资格参加与该处理器相对应的培训课程，在完成培训课程后您可赚取额外的奖励积分。共有两个培训课程可供参加，每节课程可赚取200积分。</TCell>
          </tr>
          <tr height="10"></tr> -->
          <tr>
            <TCell>抓住机会，在本活动中多多采购英特尔最新的CPU产品，以赚取积分、开拓业务。此促销活动时间为2019年4月1日至2019年6月30日。</TCell>
          </tr>
          <tr height="10"></tr>
          <tr>
           <TCell><a href="https://prc-points.inteltechnologyprovider.com/node/1249" target="_blank">访问英特尔<Sup></Sup>渠道积分网站了解更多信息。</a></TCell>
          </tr>
          <tr height="10"></tr>
          <tr>
            <td style="text-align: left;font-family: 微软雅黑;">
              本促销活动有效期为2019年4月1日至2019年6月30日（“促销活动时间”），适用对象为中华人民共和国（仅为本促销条款的目的，系指不包括香港、澳门和台湾的境内地区）的英特尔<Sup></Sup>技术合作伙伴中已激活的增值分销合作伙伴至尊会员及菁英会员（“合格会员”）。
            </td>
          </tr>
          <tr style="height: 10px"></tr>
          <tr>
            <td style="text-align: left;font-family: 微软雅黑;">
              在促销活动期间，合格会员成功扫描购买如下列表中的英特尔产品（“符合条件的英特尔<Sup></Sup>产品”），英特尔将按下表根据采购数量的不同实行以下积分奖励：
            </td>
          </tr>
        </StanceTable>

        <!-- <StanceTable hasTop hasBottom>
          <tr>
            <td style="text-align: center; font-family: 微软雅黑; font-weight: 600">
              	从产品列表A和产品列表B中各采购一件产品，每个组合可赚取200积分
            </td>
          </tr>
        </StanceTable> -->
        <!-- 最基本的数据表格 -->
        <DataTable :dataSource="dataSource1" :column="column1" :headStyle="tableHeadStyle"></DataTable>

        <!-- <StanceTable hasTop hasBottom>
          <td style="text-align: left;font-family: 微软雅黑;">在促销活动期间，对合格会员从英特尔
            <sup>®</sup>授权总代理（“IAD”）或英特尔
            <sup>®</sup>批准供应商（“IAS”）采购如下列表中的英特尔产品（“符合条件的英特尔
            <sup>®</sup>产品”），英特尔将实行以下积分奖励：</td>
        </StanceTable> -->
        <!-- <StanceTable hasTop hasBottom>
          <tr>
            <TCell>合格会员在采购至少一个符合条件的英特尔产品后，将有资格参与以下培训课程，并在完成培训课程后赚取相应积分。积分以业务ID（GID）为单位发放，多次完成同一课程只能赚取一次积分。</TCell>
          </tr>
        </StanceTable> -->

        <DataTable :dataSource="dataSource2" :column="column2" :headStyle="tableHeadStyle"></DataTable>

        <StanceTable hasTop>
          <tr>
            <td style="text-align: left;font-family: 微软雅黑;">季度末完成考核后，英特尔将根据活动规则，向符合条件且遵守各项规则的增值分销合作伙伴发放在本次促销活动中获得的有效积分。</td>
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
  { text: '采购数量级别为100-499台，每单位产品可赚取30积分' },
  { text: '采购数量级别为500-1000台，每单位产品可赚取40积分' },
  { text: '采购数量级别为1001-2000台，每单位产品可赚取50积分' },
  { text: '采购数量级别为2001台及以上，每单位产品可赚取60积' },
  // { text: '采购数量级别为51个及以上，每个单品可赚取100积分' },
]
export const dataSource1 = [
  {"text1":"Intel<sup>®</sup> Core™ I5-9600KF Desktop Processor - BXC80684I59600KF"},{"text1":"Intel<sup>®</sup> Core™ I5-9600KF Desktop Processor - CM8068403874409"},{"text1":"Intel<sup>®</sup> Core™ I3-9350KF Desktop Processor - BXC80684I39350KF"},{"text1":"Intel<sup>®</sup> Core™ I3-9350KF Desktop Processor - CM8068403376823"},{"text1":"Intel<sup>®</sup> Core™ I5-9400F Desktop Processor - BXC80684I59400F"},{"text1":"Intel<sup>®</sup> Core™ I5-9400F Desktop Processor - CM8068403358819"},{"text1":"Intel<sup>®</sup> Core™ I3-9100F Desktop Processor - BXC80684I39100F"},{"text1":"Intel<sup>®</sup> Core™ I3-9100F Desktop Processor - CM8068403358820"}
]
export const dataSource2 = [
  {"text1":"数量为100-499：30积分/单位产品"},{"text1":"数量为500-1000：40积分/单位产品"},{"text1":"数量为1001-2000：50积分/单位产品"},{"text1":"数量为2001+：60积分/单位产品"}
]

const column1 = [
  {
    title: "符合条件的英特尔产品",
    dataIndex: 'text1',
    align: 'left',
    // width: 420
  },
  // {
  //   title: '积分/单位',
  //   dataIndex: 'text2',
  //   // rowspan: 53,
  //   width: 150,
  // },
  // {
  //   title: '英特尔<sup>®</sup>HPC <br/>数据中心专家及<br/>云数据中心专家<br/>额外奖励积分',
  //   dataIndex: 'text3',
  //   width: 100,
  // }
]
const column2 = [
  {
    title: '积分/单位产品<br/>（随采购数量级别变化）',
    dataIndex: 'text1',
    align: 'left',
    // width: 420
  },
  // {
  //   title: '积分/课程',
  //   dataIndex: 'text2',
  //   width: 80,
  //   // rowspan:21,
  // },
  // {
  //   title: '英特尔<sup>®</sup>HPC <br/>数据中心专家及<br/>云数据中心专家<br/>额外奖励积分',
  //   dataIndex: 'text3',
  // }
]


const dataSource3 = [
  {
    text: '在本次促销活动中最多可赚取500,000积分；'
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

const headImgOptions = {
  1: 'http://show.easeye.com.cn/fckattach/2019-03-26/e3b9e77152a2095d72521d1898764e2d/image/f9f537a12a358d928c387ccb5770c882_easeyethumbnail.png',
  2: "http://show.easeye.com.cn/fckattach/2019-03-22/e3b9e77152a2095d72521d1898764e2d/image/25f5ec9740ce5112cd75e0a8861161fe_easeyethumbnail.png",
  3: 'http://show.easeye.com.cn/fckattach/2019-03-26/e3b9e77152a2095d72521d1898764e2d/image/1f69e1130eba998a3292314b6f717ffa_easeyethumbnail.png',
  4:'http://show.easeye.com.cn/fckattach/2019-03-26/e3b9e77152a2095d72521d1898764e2d/image/b27432b566391ef732dbec826230ec23_easeyethumbnail.png'
}
export default {
  data() {
    return {
      headImgUrl: headImgOptions[4],
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
