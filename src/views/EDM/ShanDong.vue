<template>
  <table align="center" style="text-align: center; font-family: 微软雅黑; margin: 0 auto;">
    <tr>
      <td>
        <Nav></Nav>

        <ImageRow
          imgUrl="http://show.easeye.com.cn/fckattach/2019-11-22/e3b9e77152a2095d72521d1898764e2d/image/face9686a126c31e936870d7c956b970_easeyethumbnail.jpg"
        ></ImageRow>

        <StanceTable hasTop hasBottom>
          <tr>
            <td style="font-size:12px;text-align: left; font-family: 微软雅黑; line-height: 24px;">
              尊敬的英特尔
              <Sup></Sup>区域商用系统集成商渠道技术合作伙伴
            </td>
          </tr>
          <tr>
            <TCell>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;首先感谢您一直以来对英特尔
              <Sup></Sup>公司的支持，为了更好地支持广大技术合作伙伴把握机遇，迎接挑战，我们诚挚得邀请大家参加2019年第四季度英特尔
              <Sup></Sup>区域商用系统集成商渠道技术合作伙伴积分奖励计划。
            </TCell>
          </tr>
        </StanceTable>

        <StanceTable>
          <IconText title="活动名称" :imgUrl="iconUrl">
            2019年第四季度英特尔
            <Sup></Sup>区域商用系统集成商渠道技术合作伙伴积分奖励计划
          </IconText>
          <IconText title="活动时间" :imgUrl="iconUrl">2019年11月1日-2019年12月28日</IconText>
          <IconText title="目标产品" :imgUrl="iconUrl">
            英特尔
            <Sup></Sup>酷睿™&奔腾™CPU系列产品
          </IconText>
          <IconText title="参与资格" :imgUrl="iconUrl">
            英特尔
            <Sup></Sup>区域商用系统集成商渠道技术合作伙伴
          </IconText>
          <IconText title="活动内容" :imgUrl="iconUrl">
            招募英特尔
            <Sup></Sup>区域商用系统集成商渠道技术合作伙伴加入英特尔
            <Sup></Sup>区域商用系统集成商渠道技术合作伙伴计划，并给予相应的“英特尔
            <Sup></Sup>渠道积分”支持，以及其他市场活动支持和技术支持
          </IconText>
        </StanceTable>

        <StanceTable hasTop>
          <tr>
            <td
              width="35"
              style="font-size:13px;text-align: left; font-family: 微软雅黑; line-height: 22px;color: #000000; font-weight: 600"
            >一、</td>
            <td
              style="font-size:13px;text-align: left; font-family: 微软雅黑; line-height: 22px;color: #000000; font-weight: 600"
            >
              英特尔
              <Sup></Sup>区域商用系统集成商渠道技术合作伙伴的资格条件:
            </td>
          </tr>
          <tr>
            <td width="35"></td>
            <td>
              <ListTable listType="√" :dataSource="dataSource1" width="598"></ListTable>
            </td>
          </tr>
        </StanceTable>

        <StanceTable hasTop>
          <tr>
            <td
              width="35"
              style="font-size:13px;text-align: left; font-family: 微软雅黑; line-height: 22px;color: #000000; font-weight: 600"
            >二、</td>
            <td
              style="font-size:13px;text-align: left; font-family: 微软雅黑; line-height: 22px;color: #000000; font-weight: 600"
            >
              英特尔
              <Sup></Sup>区域商用系统集成商渠道技术合作伙伴的分级和对应销售要求:
            </td>
          </tr>
          <tr>
            <td width="35"></td>
            <td style="font-size:12px;text-align: left; font-family: 微软雅黑; line-height: 20px;">
              <DataTable
                :column="column1"
                :dataSource="tableData1"
                width="598"
                :headStyle="{ height: '30px', 'background-color': '#D8D8D8', color: '#000000' }"
              ></DataTable>
            </td>
          </tr>
          <tr>
            <td
              width="35"
              style="font-size:12px;text-align: left; font-family: 微软雅黑; line-height: 22px;color: #000000; font-weight: 600"
            ></td>
            <td
              style="font-size:12px;text-align: left; font-family: 微软雅黑; line-height: 22px;color: #000000; font-weight: 600"
            >说明：</td>
            <!-- <td></td> -->
          </tr>
          <tr>
            <td width="35"></td>
            <td>
              <ListTable listType="√" :dataSource="dataSource2" width="598"></ListTable>
            </td>
          </tr>
        </StanceTable>

        <StanceTable hasTop hasBottom>
          <tr>
            <td
              width="35"
              style="font-size:13px;text-align: left; font-family: 微软雅黑; line-height: 22px;color: #000000; font-weight: 600"
            >三、</td>
            <td
              style="font-size:13px;text-align: left; font-family: 微软雅黑; line-height: 22px;color: #000000; font-weight: 600"
            >渠道的升降级</td>
          </tr>
          <tr>
            <td width="35"></td>
            <td>
              <StanceTable width="598">
                <tr>
                  <TCell :ostyle="{ 'font-size': '13px'}">
                    1)&nbsp;&nbsp;
                    <b>铂金渠道</b>升级、降级
                  </TCell>
                </tr>
                <tr>
                  <td>
                    <ListTable listType="√" :dataSource="dataSource3" width="598"></ListTable>
                  </td>
                </tr>
                <tr>
                  <TCell :ostyle="{ 'font-size': '13px'}">
                    2)&nbsp;&nbsp;
                    <b>金牌渠道</b>升级、降级
                  </TCell>
                </tr>
                <tr>
                  <td>
                    <ListTable listType="√" :dataSource="dataSource4" width="598"></ListTable>
                  </td>
                </tr>
                <tr>
                  <TCell :ostyle="{ 'font-size': '13px'}">
                    3)&nbsp;&nbsp;
                    <b>注册级</b>
                  </TCell>
                </tr>
                <tr>
                  <td>
                    <ListTable listType="√" :dataSource="dataSource5" width="598"></ListTable>
                  </td>
                </tr>
              </StanceTable>
            </td>
          </tr>
        </StanceTable>
        <!-- 数据表格 -->
        <StanceTable hasTop>
          <tr>
            <td
              width="35"
              style="font-size:13px;text-align: left; font-family: 微软雅黑; line-height: 22px;color: #000000; font-weight: 600"
            >四、</td>
            <td
              style="font-size:13px;text-align: left; font-family: 微软雅黑; line-height: 22px;color: #000000; font-weight: 600"
            >
              英特尔
              <Sup></Sup>区域商用系统集成商渠道技术合作伙伴计划产品积分奖励细则：
            </td>
          </tr>
        </StanceTable>

        <table
          border="1"
          style="border-collapse:collapse;font-size: 12px;;font-family: 微软雅黑;margin: 0 auto;width: 634px;text-align: center;line-height: 22px;table-layout: fixed"
        >
          <tr>
            <td
              rowspan="2"
              style="font-family: 微软雅黑;text-align: center;width:60px;font-weight: 700;"
            >类别</td>
            <td
              rowspan="2"
              style="font-family: 微软雅黑;text-align: center;width:100px;font-weight: 700;"
            >描述</td>
            <td
              rowspan="2"
              style="font-family: 微软雅黑;text-align: center;width:220px;font-weight: 700;"
            >要求</td>
            <td
              colspan="2"
              style="font-family: 微软雅黑;text-align: center;width:252px;font-weight: 700;"
            >奖励标准</td>
          </tr>
          <tr>
            <td style="font-family: 微软雅黑;text-align: center;font-weight: 700;">金牌</td>
            <td style="font-family: 微软雅黑;text-align: center;font-weight: 700;">铂金</td>
          </tr>
          <tr>
            <td style="font-family: 微软雅黑;text-align: center;line-height: 22px;">产品积分</td>
            <td style="font-family: 微软雅黑;text-align: center;line-height: 22px;">产品促销奖励</td>
            <td
              style="font-family: 微软雅黑;text-align: center;line-height: 22px;"
            >符合销售要求的有效数据，同时超额部分没有奖励</td>
            <td
              colspan="2"
              style="font-family: 微软雅黑;text-align: center;line-height: 22px;"
            >具体奖励标准和要求参见本季度“产品积分奖励补充说明”</td>
          </tr>
          <tr>
            <td colspan="3" style="font-family: 微软雅黑;text-align: center;line-height: 22px;">产品积分上限</td>
            <td style="font-family: 微软雅黑;text-align: center;line-height: 22px;">季度上限6000分</td>
            <td style="font-family: 微软雅黑;text-align: center;line-height: 22px;">季度上限40000分</td>
          </tr>
        </table>

        <StanceTable hasTop hasBottom>
          <tr>
            <td
              style="font-size:15px;text-align: left; font-family: 微软雅黑; line-height: 13px; color: #000000; font-weight: 600; "
            >
              <b>特别说明</b>
            </td>
          </tr>
        </StanceTable>

        <StanceTable>
          <IconText :imgUrl="iconUrl">
            会员的产品积分可在英特尔积分网站
            <a
              href="https://prc-points.inteltechnologyprovider.com"
              target="_blank"
            >https://prc-points.inteltechnologyprovider.com</a>进行礼品兑换，积分有效期一年。
          </IconText>
          <IconText :imgUrl="iconUrl">
            <u>
              <b>请贵司确保参与活动前会员账户已为激活状态；</b>
            </u>如未激活，贵司将无法参与积分奖励计划，获取积分奖励；如对激活流程有任何问题，请点击
            <a href="https://prc-points.inteltechnologyprovider.com/sites/static/public/proc/How%20To%20Enroll%20Points%20Aug%202018-ITP.pdf" target="_blank">
              《英特尔
              <Sup></Sup>渠道积分会员账户激活流程》
            </a>或联系英特尔
            <Sup></Sup>客户经理寻求帮助。
          </IconText>
          <IconText :imgUrl="iconUrl">活动费用有限，先到先得，用完截止。</IconText>
          <IconText :imgUrl="iconUrl">英特尔保有核查相关销售数据和其他奖励依据的真实性和准确性的权利，并有权根据核查结果确定、调整或取消相关奖励内容、结果。</IconText>
          <IconText
            :imgUrl="iconUrl"
          >本奖励计划仅在本活动期间内有效，英特尔保留后续取消、修改、补充本计划具体内容的权利。同时在现行法律法规允许的最大范围内，本活动的最终解释权归英特尔所有。</IconText>
        </StanceTable>

        <StanceTable hasTop hasBottom>
          <tr>
            <td width="35"></td>
            <TCell :ostyle="{ 'text-align': 'right'}">英特尔中国区智能平台销售部商用渠道销售部</TCell>
          </tr>
          <tr>
            <td width="35"></td>
            <TCell :ostyle="{ 'text-align': 'right'}">2019年10月</TCell>
          </tr>
        </StanceTable>

        <StanceTable hasTop>
          <tr>
            <td
              style="font-size:13px;text-align: left; font-family: 微软雅黑; line-height: 22px;color: #000000; font-weight: 600"
            >产品积分奖励补充说明：</td>
          </tr>
          <tr>
            <TCell>
              <b>1. 产品积分奖励补充说明：</b>
            </TCell>
          </tr>
        </StanceTable>

        <StanceTable hasTop>
          <tr>
            <td width="135" style="vertical-align: top">
              <DataTable :column="column11" :dataSource="tableData2"></DataTable>
            </td>
          </tr>
        </StanceTable>

        <StanceTable hasTop hasBottom></StanceTable>

        <!-- <StanceTable hasTop>
          <tr>
            <TCell><b>2. 产品积分奖励说明</b></TCell>
          </tr>

        </StanceTable>
        <StanceTable hasBottom>
          <IconText :imgUrl="iconUrl">英特尔<Sup></Sup>区域商用系统集成商渠道技术合作伙伴季度销售产品台数以OEM出具出货凭证为其获得产品积分奖励的主要依据。</IconText>

        </StanceTable>-->

        <!-- <StanceTable hasBottom hasTop>
          <tr height="20"></tr>
          <tr>
            <TCell :ostyle="{ 'text-align': 'right'}">英特尔中国区智能平台销售部商用渠道销售部</TCell>
          </tr>
          <tr>
            <TCell :ostyle="{ 'text-align': 'right'}">2019年9月</TCell>
          </tr>
        </StanceTable>-->

        <Footer hasExplain></Footer>
      </td>
    </tr>
  </table>
</template>

<script>
const dataSource1 = [
  { text: "关注与商用PC市场，提供相关的IT技术解决方案；" },
  {
    text:
      "在英特尔ITP网站注册，获取英特尔业务GID号，并与英特尔签署相应的保密协议（CNDA）；"
  },
  {
    text:
      "每季度向英特尔<sup>®</sup>承诺销量并提交商用销售项目信息，英特尔保留检查项目信息真实性的权利；"
  },
  { text: "愿意配合英特尔<sup>®</sup>在相关领域进行拓展和市场活动；" },
  {
    text:
      "参加本积分奖励计划的渠道每个季度至少参加一次英特尔组织的产品技术培训或行业会议。"
  }
];

const dataSource2 = [
  {
    text:
      "贵司只有在同时满足上述金牌或者铂金的资格条件的各项具体要求时，才可以成为英特尔<sup>®</sup>认可的区域商用系统集成商渠道技术合作伙伴，并享有本奖励计划中的各项政策与支持。"
  },

  { text: "季度交单时间区间为：2019年11月1日-2019年12月31日" },
  {
    text:
      "本计划中所要求的的英特尔<sup>®</sup>CPU系列产品为OEM出厂预装计算机中所含CPU产品，型号详情见“产品积分奖励补充说明”。"
  }
];
const dataSource3 = [
  {
    text:
      "金牌渠道如当季度业绩达到铂金标准，区域英特尔<sup>®</sup>销售人员（AE）可提名其升级为铂金渠道。铂金渠道的业务核心应基于解决方案，而非单纯的交易型业务；"
  },
  {
    text:
      "AE以电子邮件提交新增铂金渠道升级建议书供销售团队经理及本次活动项目经理审核，审核通过后即可升级；"
  },
  {
    text: "铂金渠道如连续两个季度业绩未达标，会于下季度自动降级为金牌渠道；"
  },
  { text: "升降级的生效时间均为每一业绩考核季的下一季度第一个月月底。" }
];
const dataSource4 = [
  {
    text:
      "注册级渠道如当季度业绩达到金牌标准，区域英特尔<sup>®</sup>销售人员（AE）可提名其升级为金牌渠道；"
  },
  {
    text:
      "AE以电子邮件提交新增金牌渠道升级建议书供销售团队经理及本次活动项目经理审核，审核通过后即可升级；"
  },
  {
    text: "金牌渠道如连续两个季度业绩未达标，会于下季度自动降级为注册级渠道；"
  },
  { text: "升降级的生效时间均为每一业绩考核季的下一季度第一个月月底；" },
  {
    text:
      "金牌渠道降级为注册级渠道后，自降级生效日起，其账户中的英特尔<sup>®</sup>渠道积分在60个日历天内仍可有效使用，逾期积分将自动清零。"
  }
];
const dataSource5 = [
  {
    text:
      "新增渠道，在当季度未能达到金牌会员或以上标准，季度决算后，将当季度资格设定为注册级渠道；"
  },
  { text: "注册级渠道不享受当季度任何奖励积分；" },
  { text: "注册级渠道对应渠道积分管理平台Registered级别。" }
];
const dataSource6 = [
  {
    text: "网吧渠道提供假的订单信息"
  },
  {
    text:
      "网吧渠道的有效扫描条码，在首次扫描后的180天之内被其他集分宝、中小企业渠道或网吧渠道账户再次扫描，视为违反促销活动规则销售行为"
  },
  { text: "经确切证据证明的条码涂改、拆盒等行为，视为违反促销规则销售行为" },
  { text: "其他违规行为。" }
];
const column1 = [
  {
    title: "项目",
    dataIndex: "text1",
    width: 320,
    align: "left"
  },
  {
    title: "金牌",
    dataIndex: "text2"
  },
  {
    title: "铂金",
    dataIndex: "text3"
  }
];
const tableData1 = [
  {
    text1: "季度交单中满足要求的英特尔<sup>®</sup>CPU系列产品台数",
    text2: "≥150",
    text3: "≥600"
  }
];

const column = [
  {
    title: "本促销活动合格英特尔产品",
    dataIndex: "text1"
  },
  {
    title: "每台奖励积分",
    dataIndex: "text2"
  },
  {
    title: "积分上限 （分）",
    dataIndex: "text3",
    rowspan: 12
  }
];
const tableData = [
  {
    text1: "Intel<sup>®</sup>CoreTMi3-7100H Processor-Laptop",
    text2: "20",
    text3: "至尊：10,000<br>菁英: 2,000"
  },
  { text1: 'Intel<sup>®</sup>Core""i5-7300HQ Processor-Laptop', text2: "20" },
  { text1: 'Intel<sup>®</sup>Core""i5-7440HQ Processor-Laptop', text2: "20" },
  {
    text1:
      'Intel<sup>®</sup>Core""i7-7700HQ Processor_Laptop(ExcludeAppledevices)',
    text2: "20"
  },
  { text1: 'Intel<sup>®</sup>Core""i7-7820HKProcessor-Laptop', text2: "20" },
  {
    text1:
      'Intel<sup>®</sup>Core""i7-7820HQ Processor_Laptop(ExcludeAppledevices)',
    text2: "20"
  },
  {
    text1:
      'Intel<sup>®</sup>Core""i7-7920HQ Processor_Laptop(ExcludeAppledevices)',
    text2: "20"
  },
  { text1: 'Intel<sup>®</sup>Core""i7-8850H Processor-Laptop', text2: "20" },
  { text1: 'Intel<sup>®</sup>Core""i7-8750H Processor-Laptop', text2: "20" },
  { text1: 'Intel<sup>®</sup>Core""i5-8400H Processor-Laptop', text2: "20" },
  { text1: 'Intel<sup>®</sup>Core""i5-8300H Processor-Laptop', text2: "20" },
  { text1: 'Intel<sup>®</sup>Core""i9-8950HK Processor-Laptop', text2: "20" }
];

const column11 = [
  {
    title: "型号",
    dataIndex: "text1",
    align: "left"
  },
  {
    title: "积分",
    dataIndex: "text2",
    width: 80
  },
  {
    title: "型号",
    dataIndex: "text3",
    align: "left"
  },
  {
    title: "积分",
    dataIndex: "text4",
    width: 80
  },
  {
    title: "型号",
    dataIndex: "text5",
    align: "left"
  },
  {
    title: "积分",
    dataIndex: "text6",
    width: 80
  }
];
const tableData2 = [
  {
    text1: "i5-1035G1",
    text2: "21",
    text3: "4410Y",
    text4: "10",
    text5: "i7-9700KF",
    text6: "10"
  },
  {
    text1: "i5-1035G4",
    text2: "21",
    text3: "4415U",
    text4: "10",
    text5: "i7-9700T",
    text6: "10"
  },
  {
    text1: "i5-1035G7",
    text2: "21",
    text3: "5405U",
    text4: "10",
    text5: "i7-9800X",
    text6: "10"
  },
  {
    text1: "i5-8200Y",
    text2: "21",
    text3: "N5000",
    text4: "10",
    text5: "i9-9820X",
    text6: "12"
  },
  {
    text1: "i5-8250U",
    text2: "21",
    text3: "i5-1035G1",
    text4: "21",
    text5: "i9-9900",
    text6: "12"
  },
  {
    text1: "i5-8265U",
    text2: "21",
    text3: "4471U",
    text4: "10",
    text5: "i9-9900K",
    text6: "12"
  },
  {
    text1: "i5-8300H",
    text2: "21",
    text3: "i5-8400",
    text4: "5",
    text5: "i9-9900KF",
    text6: "12"
  },
  {
    text1: "i5-8305G",
    text2: "21",
    text3: "i5-8400T",
    text4: "5",
    text5: "i9-9900T",
    text6: "12"
  },
  {
    text1: "i5-8400H",
    text2: "21",
    text3: "i5-8500",
    text4: "5",
    text5: "i9-9900X",
    text6: "12"
  },
  {
    text1: "i5-9300H",
    text2: "21",
    text3: "i5-8500T",
    text4: "5",
    text5: "i9-9920X",
    text6: "12"
  },
  {
    text1: "i5-9400H",
    text2: "21",
    text3: "i5-8600",
    text4: "5",
    text5: "i9-9940X",
    text6: "12"
  },
  {
    text1: "i7-1065G7",
    text2: "40",
    text3: "i5-8600K",
    text4: "5",
    text5: "i9-9960X",
    text6: "12"
  },
  {
    text1: "i7-8500Y",
    text2: "40",
    text3: "i5-8600T",
    text4: "5",
    text5: "G4400",
    text6: "4"
  },
  {
    text1: "i7-8565U",
    text2: "40",
    text3: "i5-9400",
    text4: "5",
    text5: "G4400T",
    text6: "4"
  },
  {
    text1: "i7-8705G",
    text2: "40",
    text3: "i5-9400F",
    text4: "5",
    text5: "G4500",
    text6: "4"
  },
  {
    text1: "i7-8706G",
    text2: "40",
    text3: "i5-9400T",
    text4: "5",
    text5: "G4500T",
    text6: "4"
  },
  {
    text1: "i7-8709G",
    text2: "40",
    text3: "i5-9500",
    text4: "5",
    text5: "G4520",
    text6: "4"
  },
  {
    text1: "i7-8750H",
    text2: "40",
    text3: "i5-9500F",
    text4: "5",
    text5: "G4560",
    text6: "4"
  },
  {
    text1: "i7-8809G",
    text2: "40",
    text3: "i5-9500T",
    text4: "5",
    text5: "G4560T",
    text6: "4"
  },
  {
    text1: "i7-8850H",
    text2: "40",
    text3: "i5-9600",
    text4: "5",
    text5: "G4600",
    text6: "4"
  },
  {
    text1: "i7-9750H",
    text2: "40",
    text3: "i5-9600K",
    text4: "5",
    text5: "G4600T",
    text6: "4"
  },
  {
    text1: "i7-9750HF",
    text2: "40",
    text3: "i5-9600T",
    text4: "5",
    text5: "G4620",
    text6: "4"
  },
  {
    text1: "i7-9850H",
    text2: "40",
    text3: "i7-8700",
    text4: "10",
    text5: "G5400T",
    text6: "4"
  },
  {
    text1: "i9-8950HK",
    text2: "60",
    text3: "i7-8700K",
    text4: "10",
    text5: "G5500T",
    text6: "4"
  },
  {
    text1: "i9-9880H",
    text2: "60",
    text3: "i7-8700T",
    text4: "10",
    text5: "J3710",
    text6: "4"
  },
  {
    text1: "i9-9980HK",
    text2: "60",
    text3: "i7-9700",
    text4: "10",
    text5: "J4205",
    text6: "4"
  },
  {
    text1: "m3-8100Y",
    text2: "10",
    text3: "i7-9700F",
    text4: "10",
    text5: " ",
    text6: " "
  },
  {
    text1: "4405Y",
    text2: "10",
    text3: "i7-9700K",
    text4: "10",
    text5: " ",
    text6: " "
  }
];

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

export default {
  data() {
    return {
      dataSource1,
      dataSource2,
      dataSource3,
      dataSource4,
      dataSource5,
      dataSource6,
      column,
      column1,
      column11,
      tableData1,
      tableData,
      tableData2,
      iconUrl:
        "http://show.easeye.com.cn/fckattach/2019-09-24/e3b9e77152a2095d72521d1898764e2d/image/46739f8ac4e6fac381c3f4c639113508.png"
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

