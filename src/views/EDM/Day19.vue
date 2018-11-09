<template>
  <table align="center" style="text-align: center; font-family: 微软雅黑; margin: 0 auto;">
    <tr>
      <td>

        <Nav></Nav>

        <ImageRow imgUrl="http://show.easeye.com.cn/fckattach/2018-04-17/e3b9e77152a2095d72521d1898764e2d/image/face9686a126c31e936870d7c956b970.jpg"></ImageRow>

        <StanceTable hasTop hasBottom>
          <tr>
            <td style="font-size:12px;text-align: left; font-family: 微软雅黑; line-height: 24px;">尊敬的英特尔增值分销合作伙伴：</td>
          </tr>
          <tr>
            <TCell>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2018年第四季度，英特尔为推动高端产品销售，特别为增值分销合作伙伴推出了额外积分的奖励活动。在活动期间，客户在通过产品扫描享受常规积分奖励的基础上，还可以通过此计划获得额外积分奖励，只限奖励规则中指定产品。</TCell>
          </tr>
        </StanceTable>

        <StanceTable hasTop hasBottom>
          <tr>
            <TCell><b>一、活动期间：</b>2018年11月5日起至2018 年11月25日</TCell>
          </tr>
          <tr height="10"></tr>
          <tr>
            <TCell><b>二、参加资格：</b>英特尔<Sup></Sup>增值分销合作伙伴</TCell>
          </tr>
          <tr height="10"></tr>
          <tr>
            <TCell><b>三、活动内容：</b></TCell>
          </tr>
          <tr height="10"></tr>
          <tr>
            <TCell>1、活动要求和细则均以《2018年第四季度英特尔增值分销合作伙伴扫描积分奖励计划》为准，请遵照履行;</TCell>
          </tr>
          <tr>
            <TCell>2、特别奖励计划型号及积分如下：</TCell>
          </tr>
        </StanceTable>
        <!-- 数据表格 -->

        <StanceTable hasTop hasBottom>
          <tr>
            <td width="135" style="vertical-align: top">
              <DataTable :column="column" :dataSource="tableData2" width="135"></DataTable>
            </td>
            <td width="135" style="vertical-align: top">
              <DataTable :column="column" :dataSource="tableData3" width="135"></DataTable>
            </td>
            <td width="135" style="vertical-align: top">
              <DataTable :column="column" :dataSource="tableData4" width="135"></DataTable>
            </td>
            <td width="135" style="vertical-align: top">
              <DataTable :column="column" :dataSource="tableData5" width="135"></DataTable>
            </td>
          </tr>
          <tr height="30"></tr>
        </StanceTable>


        <Footer></Footer>

      </td>
    </tr>
  </table>
</template>

<script>
import {
  TCell,
  Nav,
  StanceTable,
  ListTable,
  LinkBtn,
  ImageRow,
  Sup,
  IconText,
  Footer1,
  DataTable
} from "@/components/edm";

const column1 = [
  {
    title: "级别",
    dataIndex: "text1",
    width: 150,
    align: 'left',
  },
  {
    title: "金牌",
    dataIndex: "text2"
  },
  {
    title: "银牌",
    dataIndex: "text3"
  },
  {
    title: "铜牌",
    dataIndex: "text4"
  },
];
const tableData1 = [
{"text1":"英特尔非酷睿盒装处理器销量积分上限","text2":"<=（整体POR-酷睿POR）*10点","text3":"<=（整体POR-酷睿POR）*9点","text4":"<=（整体POR-酷睿POR）*8点"},{"text1":"英特尔酷睿盒装处理器销量积分上限","text2":"<=酷睿POR*35点","text3":"<=酷睿POR*33点","text4":"<=酷睿POR*30点"}
];

const column = [
  {
    title: "型号",
    dataIndex: "text1"
  },
  {
    title: "积分",
    dataIndex: "text2"
  },
];
const tableData2 = [
  {"text1":"i3-7100","text2":"20"},{"text1":"i3-7100T","text2":"20"},{"text1":"i3-7300","text2":"20"},{"text1":"i3-7300T","text2":"20"},{"text1":"i3-7320","text2":"20"},{"text1":"i3-7350K","text2":"20"},{"text1":"i3-8100","text2":"20"},{"text1":"I3-8300","text2":"20"},{"text1":"i3-8350K","text2":"20"}
];
const tableData3 = [
  {"text1":"i5-7400","text2":"30"},{"text1":"i5-7400T","text2":"30"},{"text1":"i5-7500","text2":"30"},{"text1":"i5-7500T","text2":"30"},{"text1":"i5-7600","text2":"30"},{"text1":"i5-7600K","text2":"30"},{"text1":"i5-7600T","text2":"30"},{"text1":"i5-7640X","text2":"40"},{"text1":"i5-8400","text2":"30"},{"text1":"i5-8500","text2":"30"},{"text1":"i5-8600","text2":"30"},{"text1":"i5-8600K","text2":"30"},{"text1":"i5-9600K","text2":"30"}
]
const tableData4 = [
  {"text1":"i7-7700","text2":"40"},{"text1":"i7-7700K","text2":"40"},{"text1":"i7-7700T","text2":"40"},{"text1":"i7-7740X","text2":"60"},{"text1":"i7-7800X","text2":"60"},{"text1":"i7-7820X","text2":"60"},{"text1":"i7-8700","text2":"40"},{"text1":"i7-8700K","text2":"40"},{"text1":"i7-8086K","text2":"40"},{"text1":"i7-9700K","text2":"40"}
]
const tableData5 = [
  {"text1":"i9-7900X","text2":"100"},{"text1":"i9-7920X","text2":"100"},{"text1":"i9-7940X","text2":"100"},{"text1":"i9-7960X","text2":"100"},{"text1":"i9-7980XE","text2":"100"},{"text1":"i7-9900K","text2":"80"}
]

export default {
  data() {
    return {
      column,
      column1,
      tableData1,
      tableData2,
      tableData3,
      tableData4,
      tableData5,
      iconUrl:
        "http://show.easeye.com.cn/fckattach/2018-06-28/e3b9e77152a2095d72521d1898764e2d/image/c81e728d9d4c2f636f067f89cc14862c.jpg"
    };
  },
  components: {
    Nav,
    StanceTable,
    ListTable,
    LinkBtn,
    ImageRow,
    Sup,
    IconText,
    Footer: Footer1,
    DataTable,
    TCell
  }
};
</script>

