<template>
  <table align="center" style="text-align: center; font-family: 微软雅黑; margin: 0 auto;">
    <tr>
      <td>
        <Nav></Nav>

        <ImageRow imgUrl="http://show.easeye.com.cn/fckattach/2018-04-17/e3b9e77152a2095d72521d1898764e2d/image/face9686a126c31e936870d7c956b970.jpg"></ImageRow>

        <StanceTable hasTop hasBottom>
          <tr>
            <td style="font-size:12px;text-align: left; font-family: 微软雅黑; line-height: 20px;"> 尊敬的英特尔中小企业渠道合作伙伴：</td>
          </tr>
          <tr height='10'></tr>
          <tr>
            <td style="font-size:12px;text-align: left; font-family: 微软雅黑; line-height: 20px;"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;大家好！感谢您一直以来对英特尔公司的支持。您的合作和信任是我们的动力和基础。我们将共同把握机遇，迎接新的挑战。</td>
          </tr>
          <tr>
            <td style="font-size:12px;text-align: left; font-family: 微软雅黑; line-height: 20px;"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;新季度新目标，英特尔将继续深入推进“英特尔中小企业解决方案”，支持合作伙伴搭建“英特尔中小企业解决方案平台”。我们将与您携手，依托平台，联合SI (系统集成商)， 持续推出以英特尔解决方案为基础的新产品和新技术。</td>
          </tr>
          <tr>
            <td style="font-size:12px;text-align: left; font-family: 微软雅黑; line-height: 20px;"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;现公布合作伙伴招募计划如下： </td>
          </tr>
        </StanceTable>

        <StanceTable hasTop>
          <tr>
            <td width='35' style="font-size:13px;text-align: left; font-family: 微软雅黑; line-height: 22px;color: #000000; font-weight: 600">一、</td>
            <td style="font-size:13px;text-align: left; font-family: 微软雅黑; line-height: 22px;color: #000000; font-weight: 600">英特尔针对中小企业解决方案伙伴支持政策：</td>
          </tr>
          <tr>
            <td width="35"></td>
            <td style="font-size:12px;text-align: left; font-family: 微软雅黑; line-height: 20px;">
              <ListTable :dataSource="dataSource1" width="598"></ListTable>
            </td>
          </tr>
        </StanceTable>

        <StanceTable hasTop>
          <tr>
            <td width='35' style="font-size:13px;text-align: left; font-family: 微软雅黑; line-height: 22px;color: #000000; font-weight: 600">二、</td>
            <td style="font-size:13px;text-align: left; font-family: 微软雅黑; line-height: 22px;color: #000000; font-weight: 600">英特尔针对中小企业解决平台招募标准：</td>
          </tr>
          <tr>
            <td width="35"></td>
            <td style="font-size:12px;text-align: left; font-family: 微软雅黑; line-height: 20px;">
              <ListTable listType="√" :dataSource="dataSource2" width="598"></ListTable>
            </td>
          </tr>
        </StanceTable>

        <StanceTable hasTop>
          <tr>
            <td width='35' style="font-size:13px;text-align: left; font-family: 微软雅黑; line-height: 22px;color: #000000; font-weight: 600">三、</td>
            <td style="font-size:13px;text-align: left; font-family: 微软雅黑; line-height: 22px;color: #000000; font-weight: 600">英特尔针对中小企业解决方案支持计划：</td>
          </tr>
          <tr>
            <td width="35"></td>
            <td style="font-size:12px;text-align: left; font-family: 微软雅黑; line-height: 20px;">
              1.&nbsp;&nbsp;该合作伙伴连续2个季度有扫描销售产生
              <br> 2.&nbsp;&nbsp;该合作伙伴已建立与SI的正式合作链接
            </td>
          </tr>
        </StanceTable>

        <StanceTable hasBottom>
          <tr>
            <td style="font-size:12px;text-align: left; font-family: 微软雅黑; line-height: 20px;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如合作伙伴经英特尔确认已达到以上标准，则英特尔销售经理CAM提名，销售上级经理审核，最终项目经理批准后，英特尔将针对该合作伙伴，推出以下合作方案， 并按照会员的级别给予不同的支持：
            </td>
          </tr>
        </StanceTable>
        <!-- 数据表格 -->
        <table border="1" width="634" style="border-collapse:collapse; font-size: 12px;;font-family: 微软雅黑;margin: 0 auto; text-align: center;line-height: 20px;border-spacing: 2px;">
          <tr>
            <td rowspan="2" style="font-size:12px;text-align: center; font-family: 微软雅黑; line-height: 25px;">项目</td>
            <td rowspan="2" style="font-size:12px;text-align: center; font-family: 微软雅黑; line-height: 25px;">优选级</td>
            <td rowspan="2" style="font-size:12px;text-align: center; font-family: 微软雅黑; line-height: 25px;">菁英级</td>
            <td colspan="2" style="font-size:12px;text-align: center; font-family: 微软雅黑; line-height: 25px;">至尊级</td>
          </tr>
          <tr>
            <td style="font-size:12px;text-align: center; font-family: 微软雅黑; line-height: 25px;">NON-PT</td>
            <td style="font-size:12px;text-align: center; font-family: 微软雅黑; line-height: 25px;">PT</td>
          </tr>
          <tr>
            <td style="font-size:12px;text-align: center; font-family: 微软雅黑; line-height: 25px;">覆盖SI客户数量（PT客户需要考核）</td>
            <td style="font-size:12px;text-align: center; font-family: 微软雅黑; line-height: 25px;">N</td>
            <td style="font-size:12px;text-align: center; font-family: 微软雅黑; line-height: 25px;">N</td>
            <td style="font-size:12px;text-align: center; font-family: 微软雅黑; line-height: 25px;">N</td>
            <td style="font-size:12px;text-align: center; font-family: 微软雅黑; line-height: 25px;">≥30</td>
          </tr>
          <tr>
            <td style="font-size:12px;text-align: center; font-family: 微软雅黑; line-height: 25px;">定期参加行业会议/培训/沙龙（可选）</td>
            <td style="font-size:12px;text-align: center; font-family: 微软雅黑; line-height: 25px;">Y</td>
            <td style="font-size:12px;text-align: center; font-family: 微软雅黑; line-height: 25px;">Y</td>
            <td style="font-size:12px;text-align: center; font-family: 微软雅黑; line-height: 25px;">Y</td>
            <td style="font-size:12px;text-align: center; font-family: 微软雅黑; line-height: 25px;">Y</td>
          </tr>
          <tr>
            <td style="font-size:12px;text-align: center; font-family: 微软雅黑; line-height: 25px;">季度有效扫描的中国盒产品的台数</td>
            <td style="font-size:12px;text-align: center; font-family: 微软雅黑; line-height: 25px;">≥30</td>
            <td style="font-size:12px;text-align: center; font-family: 微软雅黑; line-height: 25px;">≥150</td>
            <td colspan="2" style="font-size:12px;text-align: center; font-family: 微软雅黑; line-height: 25px;">≥600</td>
          </tr>
          <tr>
            <td style="font-size:12px;text-align: center; font-family: 微软雅黑; line-height: 25px;">积分上限</td>
            <td style="font-size:12px;text-align: center; font-family: 微软雅黑; line-height: 25px;">2000</td>
            <td style="font-size:12px;text-align: center; font-family: 微软雅黑; line-height: 25px;">6000</td>
            <td style="font-size:12px;text-align: center; font-family: 微软雅黑; line-height: 25px;">14000</td>
            <td style="font-size:12px;text-align: center; font-family: 微软雅黑; line-height: 25px;">100000</td>
          </tr>
          <tr>
            <td style="font-size:12px;text-align: center; font-family: 微软雅黑; line-height: 25px;">培训学分要求</td>
            <td style="font-size:12px;text-align: center; font-family: 微软雅黑; line-height: 25px;">≥13</td>
            <td style="font-size:12px;text-align: center; font-family: 微软雅黑; line-height: 25px;">≥13</td>
            <td style="font-size:12px;text-align: center; font-family: 微软雅黑; line-height: 25px;">≥25</td>
            <td style="font-size:12px;text-align: center; font-family: 微软雅黑; line-height: 25px;">≥25</td>
          </tr>
        </table>

        <StanceTable hasTop></StanceTable>

        <ListTable listType="■" :dataSource="dataSource3"></ListTable>

        <StanceTable hasTop>
          <tr>
            <td width='35' style="font-size:13px;text-align: left; font-family: 微软雅黑; line-height: 22px;color: #000000; font-weight: 600">四、</td>
            <td style="font-size:13px;text-align: left; font-family: 微软雅黑; line-height: 22px;color: #000000; font-weight: 600">渠道的升降级：</td>
          </tr>
          <tr>
            <td width="35"></td>
            <td style="font-size:12px;text-align: left; font-family: 微软雅黑; line-height: 20px;">
              <ListTable listType="√" :dataSource="dataSource4" width="598"></ListTable>
            </td>
          </tr>
        </StanceTable>

        <StanceTable hasTop hasBottom>
          <tr>
            <td width='35' style="font-size:13px;text-align: left; font-family: 微软雅黑; line-height: 22px;color: #000000; font-weight: 600">五、</td>
            <td style="font-size:13px;text-align: left; font-family: 微软雅黑; line-height: 22px;color: #000000; font-weight: 600">单颗产品奖励细则</td>
          </tr>
        </StanceTable>
        <!-- 数据 ----------------------------------------------------- -->
        <DataTable :column="column" :dataSource="tableData" :headStyle="{'background-color': '#0070C0', color: '#ffffff'}"></DataTable>

        <StanceTable hasTop hasBottom>
          <tr>
            <td style="font-size:12px;text-align: left; font-family: 微软雅黑; line-height: 20px;">K，X型号以及i5+8400， i5+8500，i7+8700不设积分上限。</td>
          </tr>
        </StanceTable>

        <!-- <DataTable :column="column2" :dataSource="tableData2" :headStyle="{'background-color': '#0070C0', color: '#ffffff'}" width="400"></DataTable> -->
        
        <StanceTable hasTop></StanceTable>

        <ListTable listType="■" :dataSource="dataSource5"></ListTable>

        <StanceTable hasTop>
          <tr>
            <td width='35' style="font-size:13px;text-align: left; font-family: 微软雅黑; line-height: 22px;color: #000000; font-weight: 600">六、</td>
            <td style="font-size:13px;text-align: left; font-family: 微软雅黑; line-height: 22px;color: #000000; font-weight: 600">说明</td>
          </tr>
          <tr>
            <td width="35"></td>
            <td style="font-size:12px;text-align: left; font-family: 微软雅黑; line-height: 20px;">
              <StanceTable width="598" hasTop>
                <tr>
                  <td style="font-size:12px;text-align: left; font-family: 微软雅黑; line-height: 20px;">1、费用有限，先扫先得，用完为止。</td>
                </tr>
                <tr>
                  <td style="font-size:12px;text-align: left; font-family: 微软雅黑; line-height: 20px;">2、本活动计划对各个渠道级别的标准和要求，均为相应渠道级别所应满足的最低标准。英特尔可以根据本活动计划以及
                    <a href="https://www.intel.cn/content/www/cn/zh/technology-provider/legal/program-terms-and-conditions.html?_ga=2.177383013.1721527907.1521687917-1782132059.1444618124&elq_cid=1498511&erpm_id=2886134" target="_blank">英特尔技术合作伙伴计划条款与条件</a>的内容，对客户进行评估，并进行相应的升级、降级。如本活动计划与
                    <a href="https://www.intel.cn/content/www/cn/zh/technology-provider/legal/program-terms-and-conditions.html?_ga=2.177383013.1721527907.1521687917-1782132059.1444618124&elq_cid=1498511&erpm_id=2886134" target="_blank">英特尔技术合作伙伴计划条款与条件</a>存在冲突，均以本活动计划为准。
                  </td>
                </tr>
                <tr>
                  <td style="font-size:12px;text-align: left; font-family: 微软雅黑; line-height: 20px;">3、英特尔保有核查相关销售数据和其它奖励依据的真实性和准确性的权利，并有权根据核查结果确定、调整或取消相关奖励内容、结果。</td>
                </tr>
                <tr>
                  <td style="font-size:12px;text-align: left; font-family: 微软雅黑; line-height: 20px;">4、本活动计划仅在本次活动期间内有效，英特尔保留后续取消、修改、补充本活动计划具体内容的权利。</td>
                </tr>
                <tr>
                  <td style="font-size:12px;text-align: left; font-family: 微软雅黑; line-height: 20px;">5、在现行法律法规允许的最大范围内，本活动计划的最终解释权归英特尔所有。英特尔有权通过书面通知的方式，终止、取消或不再执行本活动。</td>
                </tr>
                <tr>
                  <td style="font-size:12px;text-align: left; font-family: 微软雅黑; line-height: 20px;">6、依照英特尔的网站使用条款
                    <a href="https://www.intel.cn/content/www/cn/zh/legal/terms-of-use.html" target="_blank">（https://www.intel.cn/content/www/cn/zh/legal/terms-of-use.html）</a>，
                    <b>凡以您的账户在英特尔网站上进行的操作</b>，均视为您的操作并由您负责；如果您的账户、密码等信息有误或发生泄露，导致您的权益受损，请理解英特尔将不承担任何责任。</td>
                </tr>
                <tr>
                  <td style="font-size:12px;text-align: left; font-family: 微软雅黑; line-height: 20px;">7、未尽事宜，均依照
                    <a href="https://www.intel.cn/content/www/cn/zh/technology-provider/legal/program-terms-and-conditions.html?_ga=2.177383013.1721527907.1521687917-1782132059.1444618124&elq_cid=1498511&erpm_id=2886134" target="_blank">英特尔技术合作伙伴计划条款与条件</a>执行。</td>
                </tr>
              </StanceTable>
            </td>
          </tr>
        </StanceTable>

        <StanceTable hasBottom>
          <tr height="20"></tr>
          <tr>
            <td style="font-size:12px;text-align: left; font-family: 微软雅黑; line-height: 20px;">&nbsp;&nbsp;英特尔真诚地欢迎您加入“2019年第二季度英特尔中小企业渠道合作计划”。让我们携手并进，共创辉煌！</td>
          </tr>
          <tr height="10"></tr>
          <tr>
            <td style="font-size:12px;text-align: right; font-family: 微软雅黑; line-height: 20px;">英特尔中国区域销售运营与战略项目部</td>
          </tr>

          <tr>
            <td style="font-size:12px;text-align: right; font-family: 微软雅黑; line-height: 20px;">2019年3月</td>
          </tr>
        </StanceTable>
        <Footer></Footer>
      </td>
    </tr>
  </table>
</template>

<script>
import Nav from "@/components/edm/Nav.vue";
import StanceTable from "@/components/edm/StanceTable.vue";
import ListTable from "@/components/edm/ListTable.vue";
import LinkBtn from "@/components/edm/LinkBtn.vue";
import ImageRow from "@/components/edm/ImageRow.vue";
import Sup from "@/components/edm/Sup.vue";
import IconText from "@/components/edm/IconText.vue";
import Footer from "@/components/edm/Footer1.vue";
import DataTable from "@/components/edm/DataTable.vue";

const dataSource1 = [
  { text: "提供针对性的行业客户解决方案以及相关培训" },
  { text: "定期举办行业客户交流会" },
  { text: "重点客户的体验中心建设" },
  { text: "与平台建立连接的会员渠道给予积分支持（与原渠道奖励计划不可兼得）" }
];
const dataSource2 = [
  { text: "1）考核时间：2019年1月1日至2019年3月31日" },
  {
    text: "2）考核指标："
  },
  { text: "建立与英特尔的战略合作并接受英特尔的行业解决方案" },
  { text: "销售英特尔认证标准配置的机型并产生实际销售" },
  { text: "定期参加或举办英特尔行业会议/培训/沙龙" }
];
const dataSource3 = [
  {
    text:
      "针对平台客户，覆盖SI的数量，由英特尔地区销售经理在季度末决算前，以邮件的形式给到项目组做确认；"
  },
  {
    text: "季度扫描中国盒数量，以SMS系统数据为准，单颗奖励细则请参考以下内容"
  },
  { text: "积分上限为对应级别的会员渠道可以在当季度享受的最高积分数量。" },
  { text: "针对非平台客户，完成中国盒产品扫描后，需将对应产品包装盒在扫描完成的7天内，邮寄给英特尔或其指定的中小企业审核项目组，外包装不可涂抹，条码保持清晰完整，待审核完成后才为有效扫描的中国盒产品数量。" }
];

const dataSource4 = [
  { text: "1)至尊渠道升级、降级" },
  {
    text:
      "优选级级渠道和/或菁英渠道如当季业绩和培训达到至尊标准，区域英特尔<sup>®</sup>销售人员可提名其升级为至尊渠道。至尊渠道的业务核心应基于解决方案，而非单纯的交易型业务;"
  },
  {
    text:
      "CAM电子邮件提交新增至尊渠道升级建议书供RSM及VAR项目经理审核，审核通过后可升级;"
  },
  {
    text:
      "至尊渠道如连续两个季度业绩或培训未达标，SMS系统会于下季度自动将其降级为菁英渠道;"
  },
  { text: "升降级的生效时间均为每一业绩考核季的下一季度第一个月月底;" },
  { text: "2)菁英渠道升级、降级" },
  {
    text:
      "优选级渠道如当季业绩和培训达到菁英级标准，区域英特尔®销售人员可以提名其升级为菁英渠道；"
  },
  {
    text:
      "CAM电子邮件提交新菁英尊渠道升级建议书供RSM及VAR项目经理审核，审核通过后可升级;"
  },
  {
    text:
      "如某菁英渠道如连续两个季度业绩或培训未达标，SMS系统会于下季度自动将其降级为优选级渠道;"
  },
  { text: "升降级的生效时间均为每一业绩考核季的下一季度第一个月月底;" },
  { text: "3)优选渠道升级、降级" },
  {
    text:
      "注册级渠道如当季业绩和培训达到优选级标准，区域英特尔®销售人员可以提名其升级为优选级渠道；"
  },
  {
    text:
      "CAM电子邮件提交新优选级渠道升级建议书供RSM及VAR项目经理审核，审核通过后可升级;"
  },
  {
    text:
      "如某优选级渠道如连续两个季度业绩或培训未达标，SMS系统会于下季度自动将其降级为注册级渠道;"
  },
  { text: "升降级的生效时间均为每一业绩考核季的下一季度第一个月月底;" },
  {
    text:
      "优选级渠道降级为注册级渠道后，自降级生效日起，其账户中的英特尔®渠道积分在60天内仍可有效使用，逾期积分将自动清零"
  },
  { text: "4)注册级渠道" },
  {
    text:
      "新增渠道，在当季度未能达到优选级会员以上标准，季度决算后，当季度资格设定为注册级渠道"
  },
  { text: "注册级渠道不享受当季度任何扫描积分；" },
  { text: "注册级渠道对应渠道积分管理平台Registered 级别" }
];

const column = [
  {
    title: "型号",
    dataIndex: "text1",
    align: 'left',
  },
  {
    title: "积分/颗 ",
    dataIndex: "text2"
  },
  {
    title: "型号",
    dataIndex: "text3",
    align: 'left',
  },
  {
    title: "积分/颗 ",
    dataIndex: "text4"
  },
  {
    title: "型号",
    align: 'left',
    dataIndex: "text5"
  },
  {
    title: "积分/颗 ",
    dataIndex: "text6"
  },
  {
    title: "型号",
    align: 'left',
    dataIndex: "text7"
  },
  {
    title: "积分/颗 ",
    dataIndex: "text8"
  }
];
const tableData = [
  {"text1":"G4400","text2":"10","text3":"i5-7400","text4":"21","text5":"i7-7700","text6":"28","text7":"i9-7900X","text8":"100"},{"text1":"G4560","text2":"12","text3":"i5-7400T","text4":"21","text5":"i7-7700K","text6":"28","text7":"i9-7920X","text8":"100"},{"text1":"G5400","text2":"10","text3":"i5-7500","text4":"21","text5":"i7-7700T","text6":"28","text7":"i9-7940X","text8":"100"},{"text1":"G5500","text2":"12","text3":"i5-7500T","text4":"21","text5":"i7-7740X","text6":"60","text7":"i9-7960X","text8":"100"},{"text1":"G5600","text2":"12","text3":"i5-7600","text4":"21","text5":"i7-7800X","text6":"60","text7":"i9-7980XE","text8":"100"},{"text1":"i3-7100","text2":"14","text3":"i5-7600K","text4":"21","text5":"i7-7820X","text6":"60","text7":"i9-9900K","text8":"60"},{"text1":"i3-7100T","text2":"14","text3":"i5-7600T","text4":"21","text5":"i7-8700","text6":"40","text7":"i9-9900KF","text8":"60"},{"text1":"i3-7300","text2":"14","text3":"i5-7640X","text4":"40","text5":"i7-8700K","text6":"45","text7":"i9-9820X","text8":"100"},{"text1":"i3-7300T","text2":"14","text3":"i5-8400","text4":"30","text5":"i7-8086K","text6":"45","text7":"i9-9900X","text8":"100"},{"text1":"i3-7320","text2":"14","text3":"i5-8500","text4":"30","text5":"i7-9700K","text6":"45","text7":"i9-9920X","text8":"100"},{"text1":"i3-7350K","text2":"14","text3":"i5-8600","text4":"30","text5":"i7-9700KF","text6":"45","text7":"i9-9940X","text8":"100"},{"text1":"i3-8100","text2":"20","text3":"i5-8600K","text4":"35","text5":"i7-9800X","text6":"60","text7":"i9-9960X","text8":"100"},{"text1":"i3-8300","text2":"20","text3":"i5-9400","text4":"30","text5":" ","text6":" ","text7":"i9-9980XE","text8":"100"},{"text1":"i3-8350K","text2":"25","text3":"i5-9400F","text4":"30","text5":" ","text6":" ","text7":" ","text8":" "},{"text1":"i3-9350KF","text2":"25","text3":"i5-9600K","text4":"35","text5":" ","text6":" ","text7":" ","text8":" "},{"text1":" ","text2":" ","text3":"i5-9600KF","text4":"35","text5":" ","text6":" ","text7":" ","text8":" "}
]

const dataSource5 = [
  { text: "中国盒实际决算数量，以英特尔扫描客户端体现的有效数字为主要依据；" },
  {
    text:
      "中小企业渠道的有效扫描条码，在首次扫描后的180天之内被其他集分宝、中小企业渠道或网吧渠道账户再次扫描，视为违反促销活动规则销售行为。"
  },
  {
    text: "对于经确切证据证明的条码涂改、拆盒等行为，视为违反促销规则销售行为。"
  },
  // { text: "中国盒实际决算数量，以英特尔扫描客户端体现的有效数字为主要依据；" },
  {
    text:
      "对于违反促销规则的渠道取消被发现季度相应的促销奖励，降级为注册级，并重新考核是否具备中小企业渠道资格。"
  }
];

const column2 = [
  {
    title: '型号',
    align: 'left',
    dataIndex: 'text1',
  },
  {
    title: '积分/颗',
    dataIndex: 'text2',
    width: 80,
  }
]

const tableData2 = [
  {"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Gold 6128 Processor","text2":"150"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Gold 6130 Processor","text2":"150"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Gold 6134 Processor","text2":"150"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Gold 6138 Processor","text2":"150"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Gold 6140 Processor","text2":"150"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Gold 6142 Processor","text2":"150"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Gold 6148 Processor","text2":"150"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Gold 6152 Processor","text2":"150"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Platinum 8160 Processor","text2":"450"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Platinum 8164 Processor","text2":"450"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Platinum 8170 Processor","text2":"450"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Platinum 8176 Processor","text2":"450"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Platinum 8180 Processor","text2":"450"}
]

export default {
  data() {
    return {
      dataSource1,
      dataSource2,
      dataSource3,
      dataSource4,
      dataSource5,
      column,
      column2,
      tableData,
      tableData2,
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
    Footer,
    DataTable
  }
};
</script>

