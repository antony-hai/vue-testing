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
            <td></td>
          </tr>
          <tr>
            <td style="color:#0071C5;text-align: left;font-family: 微软雅黑; font-size: 13px;">
              组合采购英特尔
              <Sup></Sup>Xeon至强
              <Sup></Sup>处理器，最高可赚取300,000积分。
            </td>
          </tr>
        </StanceTable>
        <!-- 右边边有图片的视图 -->
        <!-- <StanceTable>
          <tr>
            <TCell width="434px">
              抓紧时机赚取更多积分，用以充盈贵司的英特尔
              <Sup></Sup>渠道积分账户。
              采购第九代英特尔
              <Sup></Sup>酷睿™F系列处理器，层级式的积分赚取方式使得这一目标更易实现。
              单个产品贵司采购的数量越多，所赚取的积分越多，从贵司采购的第100个产品开始，每单位产品将按下表实行积分奖励：
              <br />

              <ListTable :dataSource="listData" listType="●" hasSpace width="434"></ListTable>
            </TCell>
            <td width="200" align="right" valign="top">
              <img
                width="180"
                src="http://show.easeye.com.cn/fckattach/2019-12-22/e3b9e77152a2095d72521d1898764e2d/image/448a94929572d9bc18fb57fc52089fb5.jpg"
              />
            </td>
          </tr>
        </StanceTable>-->

        <StanceTable hasTop>
          <tr>
            <td style="text-align: left;font-family: 微软雅黑;">
              组合采购第二代英特尔
              <Sup></Sup>Xeon至强
              <Sup></Sup>可扩展处理器数据中心产品，有两种方式赚取积分。
            </td>
          </tr>

          <!-- <tr height="10"></tr>
          <tr>
            <TCell>
              <ListTable :dataSource="listData" listType="●" hasSpace></ListTable>
            </TCell>
          </tr>-->
          <tr height="10"></tr>
          <tr>
            <TCell>
              首先，组合采购一个符合条件的英特尔
              <Sup></Sup>Xeon至强
              <Sup></Sup>可扩展金牌或铂金处理器和一个符合条件的英特尔
              <Sup></Sup>固态盘，每个单位组合可赚取300积分，赚取的积分总额最高可达300,000积分。
            </TCell>
          </tr>
          <tr height="10"></tr>
          <tr>
            <TCell>其次，完成培训也可以赚取积分。贵司完成一次组合采购后， 完成以下任一课程，即可赚取200积分，最高可赚取400积分：</TCell>
          </tr>
          <tr height="10"></tr>
          <tr>
            <TCell>
              <ListTable :dataSource="subListData" listType="●" hasSpace></ListTable>
            </TCell>
          </tr>
          <!-- <tr height="10"></tr>
          <tr>
            <TCell>最重要的是，贵司最高可赚取500,000积分。</TCell>
          </tr>-->
          <tr height="10"></tr>
          <tr>
            <TCell>畅享更多积分、更多知识以及更好的产品组合。立刻采购吧。</TCell>
          </tr>
          <tr height="10"></tr>
          <tr>
            <TCell>此促销活动时间为2020年1月1日至2020年3月31日。</TCell>
          </tr>
          <tr height="10"></tr>
          <tr>
            <TCell>
              欲了解更多关于此促销活动和其他促销活动的信息，请访问
              <a
                href="https://prc-points.inteltechnologyprovider.com/earnpoints/current-promotions"
                target="_blank"
                rel="noopener noreferrer"
              >https://prc-points.inteltechnologyprovider.com/earnpoints/current-promotions</a>
            </TCell>
          </tr>
        </StanceTable>

        <StanceTable hasTop>
          <tr>
            <TCell width="25">1.</TCell>
            <TCell>
              本促销活动受以下条款和条件约束（“促销条款”），此外仍须遵守英特尔
              <Sup></Sup>技术合作伙伴的条款和条件，
              包括附录A与积分补充条款和条件（“英特尔
              <Sup></Sup>技术合作伙伴条款”），该条款为本促销条款的一部分，其详情可在此网址查询：
              <a
                href="https://www.intel.cn/content/www/cn/zh/technology-provider/legal/program-terms-and-conditions.html"
                target="_blank"
              >https://www.intel.cn/content/www/cn/zh/technology-provider/legal/program-terms-and-conditions.html.</a>
              促销条款和英特尔
              <Sup></Sup>技术合作伙伴条款统称为“活动规则”。
            </TCell>
          </tr>
          <tr>
            <TCell width="25">2.</TCell>
            <TCell>
              本促销活动有效期为2020年1月1日至2020年3月31日（“促销活动时间”），
              适用对象为中华人民共和国（仅为本促销条款的目的，系指不包括香港、澳门和台湾）的英特尔
              <Sup></Sup>技术合作伙伴中已激活的至尊会员及菁英会员（“合格会员”）。
            </TCell>
          </tr>
          <tr>
            <TCell width="25">3.</TCell>
            <TCell>
              在促销活动期间，对合格会员采购如下列表中的英特尔
              <Sup></Sup>产品（“符合条件的英特尔
              <Sup></Sup>产品”），英特尔将按下表实行积分奖励：
            </TCell>
          </tr>
        </StanceTable>

        <DataTable :dataSource="dataExplain" :column="columnExplain" :headStyle="tableHeadStyle"></DataTable>
        <!-- 最基本的数据表格 -->
        <DataTable :dataSource="dataSource1" :column="column1" :headStyle="tableHeadStyle"></DataTable>

        <StanceTable hasTop hasBottom>
          <tr>
            <TCell>完成一次组合采购后，合格会员有资格通过完成培训课程赚取积分。积分以业务ID（GID）为单位发放，多次完成同一课程只能赚取一次积分。</TCell>
          </tr>
        </StanceTable>

        <DataTable :dataSource="dataLesson" :column="columnLesson" :headStyle="tableHeadStyle"></DataTable>

        <StanceTable hasTop>
          <tr>
            <TCell width="25">4.</TCell>
            <TCell>在此次促销活动中，最终结果以英特尔扫描系统的有效数据作为奖励依据。英特尔将在促销结束后60（六十）天内，向符合条件且遵守“活动规则”的合作伙伴发放在本次促销活动中奖励的积分。</TCell>
          </tr>
          <tr>
            <TCell width="25">5.</TCell>
            <TCell>
              合格会员将：
              <ListTable :dataSource="dataSource3" listType="●" width="610" isLetter></ListTable>
            </TCell>
          </tr>
        </StanceTable>

        <StanceTable hasTop hasBottom></StanceTable>

        <Footer1 hasExplain></Footer1>
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
import Footer1 from "@/components/edm/Footer1.vue";
import TCell from "@/components/edm/TCell.vue";

const dataSource3 = [
  {
    text: "在此促销活动中最高可赚取300,400积分"
  },
  {
    text: "可同时参与本次活动和其他积分活动；"
  },
  {
    text:
      "不可同时参加针对本次促销活动中符合条件的英特尔产品所进行的其他英特尔通知的折扣或促销活动，不论折扣或促销活动是针对本促销活动的合格会员，或是代表合格会员的第三方；"
  },
  {
    text: "不可以转让此次促销活动中赚取的积分；且"
  },
  {
    text: "不可以变现此次促销活动中赚取的积分。"
  }
];
// 抓取到的数据

const column1 = [
  {
    title:
      "Qualifying Intel<sup>®</sup> Xeon Processors <br/>符合条件的英特尔<sup>®</sup>Xeon至强<sup>®</sup>处理器",
    dataIndex: "text1",
    align: "left"
  }
  // {
  //   title: "符合条件的英特尔<sup>®</sup>产品",
  //   dataIndex: "text2",
  //   width: 400,
  //   align: "left"
  // },
  // {
  //   title: "积分",
  //   dataIndex: "text3",
  //   width: 80
  // }
];
const dataSource1 = [
  {
    text1:
      "Intel<sup>®</sup> Xeon<sup>®</sup> Gold 6226\n  Processor (CD8069504283404)"
  },
  {
    text1:
      "Intel<sup>®</sup> Xeon<sup>®</sup> Gold 6230\n  Processor (BX806956230)"
  },
  {
    text1:
      "Intel<sup>®</sup> Xeon<sup>®</sup> Gold 6230\n  Processor (CD8069504193701)"
  },
  {
    text1:
      "Intel<sup>®</sup> Xeon<sup>®</sup> Gold 6230\n  Processor (CD8069503959702)"
  },
  {
    text1:
      "Intel<sup>®</sup> Xeon<sup>®</sup> Gold\n  6230N Processor (CD8069504283604)"
  },
  {
    text1:
      "Intel<sup>®</sup> Xeon<sup>®</sup> Gold\n  6230T Processor (CD8069504283704)"
  },
  {
    text1:
      "Intel<sup>®</sup> Xeon<sup>®</sup> Gold 6234\n  Processor (BX806956234)"
  },
  {
    text1:
      "Intel<sup>®</sup> Xeon<sup>®</sup> Gold 6234\n  Processor (CD8069504283304)"
  },
  {
    text1:
      "Intel<sup>®</sup> Xeon<sup>®</sup> Gold 6238\n  Processor (BX806956238)"
  },
  {
    text1:
      "Intel<sup>®</sup> Xeon<sup>®</sup> Gold 6238\n  Processor (CD8069504283104)"
  },
  {
    text1:
      "Intel<sup>®</sup> Xeon<sup>®</sup> Gold\n  6238L Processor (CD8069504284704)"
  },
  {
    text1:
      "Intel<sup>®</sup> Xeon<sup>®</sup> Gold 6238M\n  Processor (CD8069504284604)"
  },
  {
    text1:
      "Intel<sup>®</sup> Xeon<sup>®</sup> Gold\n  6238T Processor (CD8069504200401)"
  },
  {
    text1:
      "Intel<sup>®</sup> Xeon<sup>®</sup> Gold\n  6238T Processor (CD8069503960202)"
  },
  {
    text1:
      "Intel<sup>®</sup> Xeon<sup>®</sup> Gold 6240\n  Processor (BX806956240)"
  },
  {
    text1:
      "Intel<sup>®</sup> Xeon<sup>®</sup> Gold 6240\n  Processor (CD8069504194001)"
  },
  {
    text1:
      "Intel<sup>®</sup> Xeon<sup>®</sup> Gold 6240\n  Processor (CD8069503958300)"
  },
  {
    text1:
      "Intel<sup>®</sup> Xeon<sup>®</sup> Gold\n  6240L Processor (CD8069504284503)"
  },
  {
    text1:
      "Intel<sup>®</sup> Xeon<sup>®</sup> Gold\n  6240M Processor (CD8069504284403)"
  },
  {
    text1:
      "Intel<sup>®</sup> Xeon<sup>®</sup> Gold\n  6240Y Processor (CD8069504200501)"
  },
  {
    text1:
      "Intel<sup>®</sup> Xeon<sup>®</sup> Gold 6242\n  Processor (BX806956242)"
  },
  {
    text1:
      "Intel<sup>®</sup> Xeon<sup>®</sup> Gold 6242\n  Processor (CD8069504194101)"
  },
  {
    text1:
      "Intel<sup>®</sup> Xeon<sup>®</sup> Gold 6242\n  Processor (CD8069503958400)"
  },
  {
    text1:
      "Intel<sup>®</sup> Xeon<sup>®</sup> Gold 6244\n  Processor (CD8069503961203 )8069503961203 )"
  },
  {
    text1:
      "Intel<sup>®</sup> Xeon<sup>®</sup> Gold 6244\n  Processor (CD8069504194202)"
  },
  {
    text1:
      "Intel<sup>®</sup> Xeon<sup>®</sup> Gold 6246\n  Processor (CD8069504282905)"
  },
  {
    text1:
      "Intel<sup>®</sup> Xeon<sup>®</sup> Gold 6248\n  Processor (BX806956248)"
  },
  {
    text1:
      "Intel<sup>®</sup> Xeon<sup>®</sup> Gold 6248\n  Processor (CD8069503959201)"
  },
  {
    text1:
      "Intel<sup>®</sup> Xeon<sup>®</sup> Gold 6248\n  Processor (CD8069504194301)"
  },
  {
    text1:
      "Intel<sup>®</sup> Xeon<sup>®</sup> Gold 6252\n  Processor (BX806956252)"
  },
  {
    text1:
      "Intel<sup>®</sup> Xeon<sup>®</sup> Gold 6252\n  Processor (CD8069503959002)"
  },
  {
    text1:
      "Intel<sup>®</sup> Xeon<sup>®</sup> Gold 6252\n  Processor (CD8069504194401)"
  },
  {
    text1:
      "Intel<sup>®</sup> Xeon<sup>®</sup> Gold\n  6252N Processor (CD8069504283503)"
  },
  {
    text1:
      "Intel<sup>®</sup> Xeon<sup>®</sup> Gold 6254\n  Processor (CD8069504194501)"
  },
  {
    text1:
      "Intel<sup>®</sup> Xeon<sup>®</sup> Gold 6254\n  Processor (CD8069503960001)"
  },
  {
    text1:
      "Intel<sup>®</sup> Xeon<sup>®</sup> Gold 6262V\n  Processor (CD8069504285004)"
  },
  {
    text1:
      "Intel<sup>®</sup> Xeon<sup>®</sup> Platinum\n  8253 Processor (CD8069504194601 )8069504194601 )"
  },
  {
    text1:
      "Intel<sup>®</sup> Xeon<sup>®</sup> Platinum\n  8256 Processor (BX806958256)"
  },
  {
    text1:
      "Intel<sup>®</sup> Xeon<sup>®</sup> Platinum\n  8256 Processor (CD8069504194701 )8069504194701 )"
  },
  {
    text1:
      "Intel<sup>®</sup> Xeon<sup>®</sup> Platinum\n  8260 Processor (CD8069504201101 )8069504201101 )"
  },
  {
    text1:
      "Intel<sup>®</sup> Xeon<sup>®</sup> Platinum\n  8260 Processor (CD8069503958602)"
  },
  {
    text1:
      "Intel<sup>®</sup> Xeon<sup>®</sup> Platinum\n  8260L Processor (CD8069503993501)"
  },
  {
    text1:
      "Intel<sup>®</sup> Xeon<sup>®</sup> Platinum\n  8260L Processor (CD8069504201001 )8069504201001 )"
  },
  {
    text1:
      "Intel<sup>®</sup> Xeon<sup>®</sup> Platinum\n  8260M Processor (CD8069504201201 )8069504201201 )"
  },
  {
    text1:
      "Intel<sup>®</sup> Xeon<sup>®</sup> Platinum\n  8260M Processor (CD8069503959401)"
  },
  {
    text1:
      "Intel<sup>®</sup> Xeon<sup>®</sup> Platinum\n  8260Y Processor (CD8069504200902 )8069504200902 )"
  },
  {
    text1:
      "Intel<sup>®</sup> Xeon<sup>®</sup> Platinum\n  8268 Processor (CD8069503957700)"
  },
  {
    text1:
      "Intel<sup>®</sup> Xeon<sup>®</sup> Platinum\n  8268 Processor (CD8069504195101 )8069504195101 )"
  },
  {
    text1:
      "Intel<sup>®</sup> Xeon<sup>®</sup> Platinum\n  8270 Processor (CD8069503957603)"
  },
  {
    text1:
      "Intel<sup>®</sup> Xeon<sup>®</sup> Platinum\n  8270 Processor (CD8069504195201 )8069504195201 )"
  },
  {
    text1:
      "Intel<sup>®</sup> Xeon<sup>®</sup> Platinum\n  8276 Processor (CD8069504195501 )8069504195501 )"
  },
  {
    text1:
      "Intel<sup>®</sup> Xeon<sup>®</sup> Platinum\n  8276 Processor (CD8069503957401)"
  },
  {
    text1:
      "Intel<sup>®</sup> Xeon<sup>®</sup> Platinum\n  8276L Processor (CD8069504195301 )8069504195301 )"
  },
  {
    text1:
      "Intel<sup>®</sup> Xeon<sup>®</sup> Platinum\n  8276L Processor (CD8069504079401)"
  },
  {
    text1:
      "Intel<sup>®</sup> Xeon<sup>®</sup> Platinum\n  8276M Processor (CD8069503957101)"
  },
  {
    text1:
      "Intel<sup>®</sup> Xeon<sup>®</sup> Platinum\n  8276M Processor (CD8069504195401 )8069504195401 )"
  },
  {
    text1:
      "Intel<sup>®</sup> Xeon<sup>®</sup> Platinum\n  8280 Processor (CD8069504129800)"
  },
  {
    text1:
      "Intel<sup>®</sup> Xeon<sup>®</sup> Platinum\n  8280 Processor (CD8069504228001 )8069504228001 )"
  },
  {
    text1:
      "Intel<sup>®</sup> Xeon<sup>®</sup> Platinum\n  8280L Processor (CD8069504134100)"
  },
  {
    text1:
      "Intel<sup>®</sup> Xeon<sup>®</sup> Platinum\n  8280L Processor (CD8069504228201 )8069504228201 )"
  },
  {
    text1:
      "Intel<sup>®</sup> Xeon<sup>®</sup> Platinum\n  8280M Processor (CD8069504134200)"
  },
  {
    text1:
      "Intel<sup>®</sup> Xeon<sup>®</sup> Platinum\n  8280M Processor (CD8069504228101 )8069504228101 )"
  },
  {
    text1: "Qualifying Intel<sup>®</sup> SSD\n  Products",
    text2: "符合条件的英特尔<sup>®</sup>固态盘产品<sup>®</sup>"
  },
  {
    text1:
      "Intel<sup>®</sup> Optane™ SSD DC P4800X Series 1.5TB (SSDPE21K015TA01)Optane"
  },
  {
    text1:
      "Intel<sup>®</sup> Optane™ SSD DC P4800X Series 1.5TB (SSDPE21K015TA10)Optane"
  },
  {
    text1:
      "Intel<sup>®</sup> Optane™ SSD DC P4800X Series 1.5TB (SSDPED1K015TA01)Optane"
  },
  {
    text1:
      "Intel<sup>®</sup> Optane™ SSD DC P4800X Series 1.5TB (SSDPED1K015TA10)Optane"
  },
  {
    text1:
      "Intel<sup>®</sup> Optane™ SSD DC P4800X Series 375GB (SSDPD21K375GA01)Optane"
  },
  {
    text1:
      "Intel<sup>®</sup> Optane™ SSD DC P4800X Series 375GB (SSDPE21K375GA01)Optane"
  },
  {
    text1:
      "Intel<sup>®</sup> Optane™ SSD DC P4800X Series 375GB (SSDPE21K375GA10)Optane"
  },
  {
    text1:
      "Intel<sup>®</sup> Optane™ SSD DC P4800X Series 375GB (SSDPED1K375GA01)Optane"
  },
  {
    text1:
      "Intel<sup>®</sup> Optane™ SSD DC P4800X Series 375GB (SSDPED1K375GA10)Optane"
  },
  {
    text1:
      "Intel<sup>®</sup> Optane™ SSD DC P4800X Series 750GB (SSDPE21K750GA01)Optane"
  },
  {
    text1:
      "Intel<sup>®</sup> Optane™ SSD DC P4800X Series 750GB (SSDPE21K750GA10)Optane"
  },
  {
    text1:
      "Intel<sup>®</sup> Optane™ SSD DC P4800X Series 750GB (SSDPED1K750GA01)Optane"
  },
  {
    text1:
      "Intel<sup>®</sup> Optane™ SSD DC P4800X Series 750GB (SSDPED1K750GA10)Optane"
  },
  {
    text1:
      "Intel<sup>®</sup> Optane™ SSD DC P4800X Series with Intel<sup>®</sup> Memory Drive\n  Technology 1.5TB (MDTPE21K015TA01)Optane"
  },
  {
    text1:
      "Intel<sup>®</sup> Optane™ SSD DC P4800X Series with Intel<sup>®</sup> Memory Drive\n  Technology 1.5TB (MDTPE21K015TA10)Optane"
  },
  {
    text1:
      "Intel<sup>®</sup> Optane™ SSD DC P4800X Series with Intel<sup>®</sup> Memory Drive\n  Technology 1.5TB (MDTPED1K015TA01)Optane"
  },
  {
    text1:
      "Intel<sup>®</sup> Optane™ SSD DC P4800X Series with Intel<sup>®</sup> Memory Drive\n  Technology 1.5TB (MDTPED1K015TA10)Optane"
  },
  {
    text1:
      "Intel<sup>®</sup> Optane™ SSD DC P4800X Series with Intel<sup>®</sup> Memory Drive\n  Technology 375GB (MDTPE21K375GA01)Optane"
  },
  {
    text1:
      "Intel<sup>®</sup> Optane™ SSD DC P4800X Series with Intel<sup>®</sup> Memory Drive\n  Technology 375GB (MDTPE21K375GA10)Optane"
  },
  {
    text1:
      "Intel<sup>®</sup> Optane™ SSD DC P4800X Series with Intel<sup>®</sup> Memory Drive\n  Technology 375GB (MDTPED1K375GA01)Optane"
  },
  {
    text1:
      "Intel<sup>®</sup> Optane™ SSD DC P4800X Series with Intel<sup>®</sup> Memory Drive\n  Technology 375GB (MDTPED1K375GA10)Optane"
  },
  {
    text1:
      "Intel<sup>®</sup> Optane™ SSD DC P4800X Series with Intel<sup>®</sup> Memory Drive\n  Technology 750GB (MDTPE21K750GA01)Optane"
  },
  {
    text1:
      "Intel<sup>®</sup> Optane™ SSD DC P4800X Series with Intel<sup>®</sup> Memory Drive\n  Technology 750GB (MDTPE21K750GA10)Optane"
  },
  {
    text1:
      "Intel<sup>®</sup> Optane™ SSD DC P4800X Series with Intel<sup>®</sup> Memory Drive\n  Technology 750GB (MDTPED1K750GA01)Optane"
  },
  {
    text1:
      "Intel<sup>®</sup> Optane™ SSD DC P4800X Series with Intel<sup>®</sup> Memory Drive\n  Technology 750GB (MDTPED1K750GA10)Optane"
  },
  {
    text1:
      "Intel<sup>®</sup> Optane™ SSD DC P4801X Series 100GB (SSDPE21K100GA01)Optane"
  },
  {
    text1:
      "Intel<sup>®</sup> Optane™ SSD DC P4801X Series 100GB (SSDPE21K100GA10)Optane"
  },
  {
    text1:
      "Intel<sup>®</sup> Optane™ SSD DC P4801X Series 100GB (SSDPEL1K100GA01)Optane"
  },
  {
    text1:
      "Intel<sup>®</sup> Optane™ SSD DC P4801X Series 200GB (SSDPEL1K200GA01)Optane"
  },
  {
    text1:
      "Intel<sup>®</sup> Optane™ SSD DC P4801X Series 375GB (SSDPEL1K375GA01)Optane"
  }
];

const columnExplain = [
  {
    title: "Qualifying Bundles <br/>符合条件的组合",
    dataIndex: "text1",
    align: "left"
  },
  {
    title: "Total Points per bundle <br/>积分/组合",
    dataIndex: "text2",
    width: 180
  }
];

const dataExplain = [
  {
    text1:
      "Buy a qualifying Intel<sup>®</sup> Xeon Processor and a qualifying Intel<sup>®</sup> SSD Product <br/>组合采购英特尔<sup>®</sup>Xeon至强<sup>®</sup>处理器和符合条件的英特尔®固态盘产品",
    text2: "300"
  }
];

const listData = [
  { text: "采购数量级别为100-499台，每单位产品可赚取30积分" },
  { text: "采购数量级别为500-1000台，每单位产品可赚取40积分" },
  { text: "采购数量级别为1001-2000台，每单位产品可赚取50积分" },
  { text: "采购数量级别为2001台及以上，每单位产品可赚取60积" }
];

const subListData = [
  {
    text:
      "<a href='http://channeltraining.intel.com/diweb/gateway/init/1/f/catalog*2Fitem*2Feid*2F295829'>销售第二代智能英特尔<sup>® </sup>至强<sup>® </sup>可扩展处理器工作负载优化的 SKUS </a> "
  },
  {
    text:
      "<a href='http://channeltraining.intel.com/diweb/gateway/init/1/f/catalog*2Fitem*2Feid*2F348007'>英特尔<sup>® </sup>Deep Learning Boost 技术：深度剖析</a> "
  }

  // {
  //   text: "高耐用性"
  // }
];

const headstyle = {
  "background-color": "rgb(0, 112, 192)",
  "font-size": "13px",
  color: "#ffffff"
};

const dataLesson = [{"text1":"销售第二代智能英特尔<sup>®</sup> 至强<sup>®</sup> 可扩展处理器工作负载优化的 SKU销销售第二代智能英特尔售第二代智能英特尔<sup>®</sup> 至强至强<sup>®</sup> 可可扩扩展展处处理器工作理器工作负载优负载优化的化的 SKU<br>介绍现在提供的全新第二代智能英特尔<sup>®</sup> 至强<sup>®</sup> 可扩展处理器的新类型 SKU。了解新的字母称号及它们支持的工作负载，并了解如何最佳地为您的客户定位。","text2":"200","link":"http://channeltraining.intel.com/diweb/gateway/init/1/f/catalog*2Fitem*2Feid*2F295829"},{"text1":"英特尔<sup>®</sup> Deep Learning Boost 技术：深度剖析英特尔<sup>®</sup> Deep Learning Boost 技术：深度剖析<br>第二代英特尔<sup>®</sup> 至强<sup>®</sup> 可扩展处理器采用独特的英特尔<sup>®</sup> Deep Learning\n  Boost 技术。深入了解该技术如何支持 AI/分析。在本课程中，英特尔专家将带您了解该技术的定义、工作原理以及为经销商带来的优势和灵活性，并为您提供演示，以帮助您更好地为客户提供关于如何充分利用 IT 基础设施的解决方案和建议，从而更充分地利用这一技术。","text2":"200","link":"http://channeltraining.intel.com/diweb/gateway/init/1/f/catalog*2Fitem*2Feid*2F348007"}]

const columnLesson = [
  {
    title: "培训课程名称",
    dataIndex: "text1",
    align: "left"
  },
  {
    title: "积分/课程",
    dataIndex: "text2",
    width: 80
  }
];

export default {
  data() {
    return {
      headImgUrl:
        "http://show.easeye.com.cn/fckattach/2019-12-22/e3b9e77152a2095d72521d1898764e2d/image/face9686a126c31e936870d7c956b970(2)_easeyethumbnail.jpg",
      dataSource1,
      dataSource3,
      dataExplain,
      column1,
      columnExplain,
      listData,
      dataLesson,
      columnLesson,
      subListData,
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
    Footer1,
    TCell
  },
  computed: {
    tableHeadStyle() {
      return headstyle;
    }
  }
};
</script>
