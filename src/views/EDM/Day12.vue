<template>
  <table align="center" style="text-align: center; font-family: 微软雅黑; margin: 0 auto;">
    <tr>
      <td>

        <Nav></Nav>

        <ImageRow imgUrl="http://show.easeye.com.cn/fckattach/2018-04-17/e3b9e77152a2095d72521d1898764e2d/image/face9686a126c31e936870d7c956b970.jpg"></ImageRow>

        <StanceTable hasTop hasBottom>
          <tr>
            <td style="font-size:12px;text-align: left; font-family: 微软雅黑; line-height: 24px;">尊敬的英特尔<Sup></Sup>网吧渠道技术合作伙伴：</td>
          </tr>
          <tr>
            <TCell>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;首先感谢您一直以来对英特尔<Sup></Sup>公司的支持，为了更好地支持广大网吧渠道技术合作伙伴把握机遇，服务及覆盖更多客户，我们诚挚地邀请大家参加2019年第二季度英特尔<Sup></Sup>网吧渠道技术合作伙伴积分奖励计划。</TCell>
          </tr>
        </StanceTable>

        <StanceTable>
          <IconText title="活动名称" :imgUrl="iconUrl"><b>2019年第二季度英特尔<Sup></Sup>网吧渠道合作伙伴积分奖励计划</b></IconText>
          <IconText title="活动时间" :imgUrl="iconUrl">2019年4月1日-2019年6月30日</IconText>
          <IconText title="目标产品" :imgUrl="iconUrl">英特尔<Sup></Sup>酷睿<Sup></Sup>处理器中国盒装产品</IconText>
          <IconText title="参与资格" :imgUrl="iconUrl">英特尔<Sup></Sup>网吧配件渠道及英特尔网吧系统集成商</IconText>
          <IconText title="活动内容" :imgUrl="iconUrl">招募英特尔<Sup></Sup>网吧渠道技术合作伙伴加入英特尔<Sup></Sup>网吧合作伙伴计划，并给予相应的“英特尔<Sup></Sup>渠道积分”支持，以及其他市场活动支持和技术支持；</IconText>
        </StanceTable>

        <StanceTable hasTop>
          <tr>
            <td width='35' style="font-size:13px;text-align: left; font-family: 微软雅黑; line-height: 22px;color: #000000; font-weight: 600">一、</td>
            <td style="font-size:13px;text-align: left; font-family: 微软雅黑; line-height: 22px;color: #000000; font-weight: 600">英特尔<Sup></Sup>网吧渠道合作伙伴的资格条件:</td>
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
            <td width='35' style="font-size:13px;text-align: left; font-family: 微软雅黑; line-height: 22px;color: #000000; font-weight: 600">二、</td>
            <td style="font-size:13px;text-align: left; font-family: 微软雅黑; line-height: 22px;color: #000000; font-weight: 600">英特尔<Sup></Sup>网吧渠道合作伙伴的分级和对应扫描要求：</td>
          </tr>
          <tr>
            <td width="35"></td>
            <td style="font-size:12px;text-align: left; font-family: 微软雅黑; line-height: 20px;">
              <DataTable :column="column1" :dataSource="tableData1" width="598" :headStyle="{ height: '30px', 'background-color': '#D8D8D8', color: '#000000' }"></DataTable>
            </td>
          </tr>
          <tr>
            <td width='35' style="font-size:12px;text-align: left; font-family: 微软雅黑; line-height: 22px;color: #000000; font-weight: 600"></td>
            <td style="font-size:12px;text-align: left; font-family: 微软雅黑; line-height: 22px;color: #000000; font-weight: 600">说明：</td>
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
            <td width='35' style="font-size:13px;text-align: left; font-family: 微软雅黑; line-height: 22px;color: #000000; font-weight: 600">三、</td>
            <td style="font-size:13px;text-align: left; font-family: 微软雅黑; line-height: 22px;color: #000000; font-weight: 600">渠道的提名，积分资格及升降级标准: </td>
          </tr>
          <tr>
            <td width="35"></td>
            <td>
              <StanceTable width="598">
                <tr>
                  <TCell>1)&nbsp;&nbsp;<b>至尊渠道</b>升级、降级</TCell>
                </tr>
                <tr>
                  <td>
                    <ListTable listType="√" :dataSource="dataSource3" width="598"></ListTable>
                  </td>
                </tr>
                <tr>
                  <TCell>1)&nbsp;&nbsp;<b>菁英渠道</b>升级、降级</TCell>
                </tr>
                <tr>
                  <td>
                    <ListTable listType="√" :dataSource="dataSource4" width="598"></ListTable>
                  </td>
                </tr>
                <tr>
                  <TCell>1)&nbsp;&nbsp;<b>注册级渠道</b></TCell>
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
            <td width='35' style="font-size:13px;text-align: left; font-family: 微软雅黑; line-height: 22px;color: #000000; font-weight: 600">四、</td>
            <td style="font-size:13px;text-align: left; font-family: 微软雅黑; line-height: 22px;color: #000000; font-weight: 600">英特尔<Sup></Sup>网吧渠道合作伙伴计划产品积分奖励细则：</td>
          </tr>
        </StanceTable>

        <table border="1" style="border-collapse:collapse;font-size: 12px;;font-family: 微软雅黑;margin: 0 auto;width: 634px;text-align: center;line-height: 22px;table-layout: fixed">
          <tr>
            <td rowspan="2" style="font-family: 微软雅黑;text-align: center;width:60px;font-weight: 700;">类别</td>
            <td rowspan="2" style="font-family: 微软雅黑;text-align: center;width:100px;font-weight: 700;">描述</td>
            <td rowspan="2" style="font-family: 微软雅黑;text-align: center;width:220px;font-weight: 700;">要求</td>
            <td colspan="2" style="font-family: 微软雅黑;text-align: center;width:252px;font-weight: 700;">奖励标准</td>
          </tr>
          <tr>
            <td style="font-family: 微软雅黑;text-align: center;font-weight: 700;">菁英级</td>
            <td style="font-family: 微软雅黑;text-align: center;font-weight: 700;">至尊级</td>
          </tr>
          <tr>
            <td style="font-family: 微软雅黑;text-align: center;line-height: 22px;">产品积分</td>
            <td style="font-family: 微软雅黑;text-align: center;line-height: 22px;">产品促销奖励</td>
            <td style="font-family: 微软雅黑;text-align: center;line-height: 22px;">*交单中的有效扫描的中国盒产品数量</td>
            <td colspan="2" style="font-family: 微软雅黑;text-align: center;line-height: 22px;">具体奖励标准和要求参见本季度“产品积分奖励补充说明”</td>
          </tr>
          <tr>
            <td colspan="3" style="font-family: 微软雅黑;text-align: center;line-height: 22px;">产品积分上限</td>
            <td style="font-family: 微软雅黑;text-align: center;line-height: 22px;">季度上限20000分</td>
            <td style="font-family: 微软雅黑;text-align: center;line-height: 22px;">季度上限120000分</td>
          </tr>
        </table>

        <StanceTable hasTop hasBottom>
          <tr>
            <td style="font-size:15px;text-align: left; font-family: 微软雅黑; line-height: 13px; color: #000000; font-weight: 600; "><b>特别说明</b></td>
          </tr>
        </StanceTable>

        <StanceTable>
          <IconText :imgUrl="iconUrl">会员的产品积分可在英特尔积分网站 <a href="https://prc-points.inteltechnologyprovider.com" target="_blank">https://prc-points.inteltechnologyprovider.com</a>进行礼品兑换，积分有效期一年。</IconText>
          <IconText :imgUrl="iconUrl">会员的培训通过英特尔技术合作伙伴网站上登陆:<a href="https://www.intel.cn/content/www/cn/zh/technology-provider/overview.html " target="_blank">https://www.intel.cn/content/www/cn/zh/technology-provider/overview.html </a></IconText>
          <IconText :imgUrl="iconUrl">活动费用有限，先扫先得，用完截止。中国盒实际决算数量，以英特尔扫描客户端体现的有效数字为主要依据。</IconText>
          <IconText :imgUrl="iconUrl">英特尔保有核查相关销售数据和其它奖励依据的真实性和准确性的权利，并有权根据核查结果确定、调整或取消相关奖励内容、结果。</IconText>
          <IconText :imgUrl="iconUrl">
            下列情况居其一将被视为违反促销规则，一经发现将取消渠道被发现季度相应的促销奖励，降级为注册级，并重新审核是否具备网吧渠道资格。
            <ListTable listType="●" :dataSource="dataSource6" :tStyle="{ 'font-size': '12px', 'line-height': '20px' }" width="620"></ListTable>
          </IconText>
          <IconText :imgUrl="iconUrl">
            参加以上所描述活动的会员、渠道或客户同意受本奖励计划调整和约束，此外仍须遵守英特尔<Sup></Sup>技术合作伙伴（“ITP”）项目的条款和条件，
            包括附录A与积分补充条款和条件（“ITP项目条款”）。该ITP项目条款为本奖励计划的一部分，其详情可在此网址查询：
            <a href=" https://www.intel.cn/content/www/cn/zh/technology-provider/legal/program-terms-and-conditions.html?_ga=2.161268861.1386006631.1522205920-1782132059.1444618124&elq_cid=1498511&erpm_id=2886134" target="_blank"> https://www.intel.cn/content/www/cn/zh/technology-provider/legal/program-terms-and-conditions.html?_ga=2.161268861.1386006631.1522205920-1782132059.1444618124&elq_cid=1498511&erpm_id=2886134</a>
          </IconText>
          <IconText :imgUrl="iconUrl">
            本奖励计划对特定渠道级别的标准和要求，为该渠道级别所应满足的最低标准。英特尔可以根据本奖励计划以及ITP项目条款和条件的内容，
            对会员、渠道或客户的级别状态进行定期评估，并按照本奖励计划进行相应的升级、降级操作。若本奖励计划中的任何内容，与ITP项目条款存在冲突，
            应以本奖励计划为准。任何英特尔商标许可协议和/或英特尔标识许可协议的条款均应优先于本奖励计划中涉及上述协议内容的条款。
            除非英特尔授权代表书面签署，英特尔的标准销售条款和条件将适用于任何英特尔产品购买或积分兑换等交易，且在适用中优先于任何其他协议。
          </IconText>
          <IconText :imgUrl="iconUrl">接受、兑换本活动中的积分，即表示接受本奖励计划与ITP项目条款，并同意受其约束。</IconText>
          <IconText :imgUrl="iconUrl">本奖励计划仅在本活动期间内有效，英特尔保留后续取消、修改、补充本计划具体内容的权利。同时在现行法律法规允许的最大范围内，本活动的最终解释权归英特尔所有。</IconText>
          <IconText :imgUrl="iconUrl">
            依照英特尔的网站使用条款 <a href="https://www.intel.cn/content/www/cn/zh/legal/terms-of-use.html" target="_blank">（https://www.intel.cn/content/www/cn/zh/legal/terms-of-use.html）</a>，
            凡以您的账户在英特尔网站上进行的操作，均视为您的操作并由您负责；如果您的账户、密码等信息有误或发生泄露，导致您的权益受损，请理解英特尔将不承担任何责任。
          </IconText>
        </StanceTable>

        <StanceTable hasTop>
          <tr>
            <td width='35' style="font-size:13px;text-align: left; font-family: 微软雅黑; line-height: 22px;color: #000000; font-weight: 600">五、</td>
            <td style="font-size:13px;text-align: left; font-family: 微软雅黑; line-height: 22px;color: #000000; font-weight: 600">本函未尽事宜，均按照“英特尔技术合作伙伴计划条款和条件”执行</td>
          </tr>
          <tr>
            <td width="35"></td>
            <TCell>
              英特尔真诚地欢迎您加入“2019年第二季度英特尔<Sup></Sup>网吧渠道技术合作伙伴积分奖励计划” <br>让我们在 2019年携手并进，共创辉煌！
            </TCell>
          </tr>
          <tr>
            <td width="35"></td>
            <TCell :ostyle="{ 'text-align': 'right'}">英特尔中国区域销售运营与战略项目部</TCell>
          </tr>
          <tr>
            <td width="35"></td>
            <TCell :ostyle="{ 'text-align': 'right'}">2019年4月</TCell>
          </tr>
        </StanceTable>

        <StanceTable hasTop>
          <tr>
            <td style="font-size:13px;text-align: left; font-family: 微软雅黑; line-height: 22px;color: #000000; font-weight: 600">产品积分奖励补充说明：</td>
          </tr>
          <tr>
            <TCell><b>1. 产品基础积分奖励标准</b></TCell>
          </tr>

        </StanceTable>

        <StanceTable hasTop>
          <tr>
            <td width="135" style="vertical-align: top">
              <DataTable :column="column11" :dataSource="tableData2" width="135"></DataTable>
            </td>
            <!-- <td width="135" style="vertical-align: top">
              <DataTable :column="column11" :dataSource="tableData3" width="135"></DataTable>
            </td>
            <td width="135" style="vertical-align: top">
              <DataTable :column="column11" :dataSource="tableData4" width="135"></DataTable>
            </td>
            <td width="135" style="vertical-align: top">
              <DataTable :column="column11" :dataSource="tableData5" width="135"></DataTable>
            </td> -->
          </tr>
          <!-- <tr height="20"></tr> -->
        </StanceTable>


        <!-- <StanceTable hasTop hasBottom>
          <tr>
            <TCell><b>2. 产品基础积分奖励标准</b></TCell>
          </tr>
          <tr>
            <TCell>&nbsp;&nbsp;&nbsp;■ &nbsp;&nbsp;&nbsp;I3-8350K， i5-8600K为网吧特殊支持型号，不受本奖励计划所称积分上限的限制。</TCell>
          </tr>
          <tr>
            <TCell>&nbsp;&nbsp;&nbsp;■ &nbsp;&nbsp;&nbsp;渠道合作伙伴在不违反促销规则前提下，除i7-9700K及i9-990K外，可以按照级别享受以下加倍奖励积分政策。</TCell>
          </tr>
        </StanceTable> -->

        <!-- <table border="1" style="border-collapse:collapse;font-size: 12px;;font-family: 微软雅黑;margin: 0 auto;width:634px;text-align: center;line-height: 22px;table-layout: fixed">
          <tr>
            <TCell width="80"></TCell>
            <TCell>英特尔网吧配件渠道</TCell>
            <TCell>英特尔网吧系统集成商</TCell>
          </tr>
          <tr>
            <TCell>至尊级</TCell>
            <TCell>2.5倍基础积分对网吧特殊支持型号；超过500u以上其他型号产品享受1.5倍基础积分</TCell>
            <TCell>3倍基础积分对网吧特殊支持型号；超过500u以上其他型号产品享受2倍基础积分</TCell>
          </tr>
          <tr>
            <TCell>菁英级</TCell>
            <TCell>2倍基础积分网吧特殊支持型号</TCell>
            <TCell>2.5倍基础积分对网吧特殊支持型号，1.5倍基础积分对其他型号产品</TCell>
          </tr>
        </table> -->

        <StanceTable hasBottom hasTop>
          <tr height="20"></tr>
          <tr>
            <td style="font-size:12px;text-align: left; font-family: 微软雅黑; line-height: 20px;">英特尔真诚地欢迎您加入“2019年第一季度英特尔网吧渠道合作计划”，让我们在 2019年携手并进，共创辉煌！</td>
          </tr>
          <tr height="10"></tr>
          <tr>
            <TCell :ostyle="{ 'text-align': 'right'}">英特尔中国区域销售运营与战略项目部</TCell>
          </tr>
          <tr>
            <TCell :ostyle="{ 'text-align': 'right'}">2019年4月</TCell>
          </tr>
        </StanceTable>

        <Footer></Footer>

      </td>
    </tr>
  </table>
</template>

<script>


const dataSource1 = [
  { text: "关注网吧行业，提供相应的IT技术解决方案；" },
  {
    text:
      "在英特尔ITP 网站注册，并获取英特尔业务GID 号，对于申请成为至尊会员的渠道，需要与英特尔签署相应的保密协议(CNDA)；"
  },
  {
    text:
      "每季度完成一定销量、完成课程培训、满足其他英特尔提出的要求并提交网吧项目信息，英特尔保留检查项目信息真实性的权利；"
  },
  { text: "愿意配合英特尔<sup>®</sup>在相关领域进行拓展和市场活动；" }
];

const dataSource2 = [
  {
    text:
      "贵公司只有在同时满足上述注册级、菁英级或者至尊级的资格条件的各项具体要求时，才可以成为英特尔<sup>®</sup>认可的网吧渠道技术合作伙伴，并享有本奖励计划中的各项政策与支持。"
  },
  {
    text:
      "交单中的英特尔<sup>®</sup>CPU数量及交单中的有效扫描的中国盒产品数量为当季度新装网吧机器数量。"
  },
  { text: "有效的产品数量累计即扫描时间区间为2019年4月1日-2019年6月30日。" },
  {
    text:
      "完成中国盒产品扫描后，需将对应产品包装盒在扫描完成的7天内，邮寄给英特尔或其指定的网吧审核项目组，外包装不可涂抹，条码保持清晰完整，待审核完成后才为有效扫描的中国盒产品数量。"
  }
];
const dataSource3 = [
  {
    text:
      "菁英渠道如当季业绩和培训达到至尊标准，区域英特尔<sup>®</sup>销售人员（CAM）可提名其升级为至尊渠道。"
  },
  {
    text:
      "CAM以电子邮件提交新增至尊渠道升级建议书供销售团队经理及网吧项目经理审核，审核通过后即可升级;"
  },
  {
    text:
      "至尊渠道如连续两个季度业绩或培训未达标，SMS系统会于下季度自动将其降级为菁英渠道;"
  },
  { text: "升降级的生效时间均为每一业绩考核季的下一季度第一个月月底;" }
];
const dataSource4 = [
  {
    text:
      "注册级渠道如当季业绩和培训达到菁英级标准，区域英特尔<sup>®</sup>销售人员（CAM）可以提名其升级为菁英渠道；"
  },
  {
    text:
      "CAM电子邮件提交新增菁英渠道升级建议书供销售团队经理及网吧项目经理审核，审核通过后即可升级;"
  },
  {
    text:
      "菁英渠道如连续两个季度业绩或培训未达标，SMS系统会于下季度自动将其降级为注册级渠道;"
  },
  { text: "升降级的生效时间均为每一业绩考核季的下一季度第一个月月底;" }
];
const dataSource5 = [
  {
    text:
      "新增渠道，在当季度未能达到菁英级会员或以上标准，季度决算后，将当季度资格设定为注册级渠道"
  },
  { text: "注册级渠道不享受当季度任何扫描积分；" },
  { text: "注册级渠道对应渠道积分管理平台中的“Registered” 级别" }
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
    width: 220,
    align: 'left'
  },
  {
    title: "菁英级",
    dataIndex: "text2"
  },
  {
    title: "至尊级",
    dataIndex: "text3"
  }
];
const tableData1 = [
  {
    text1: "交单中的英特尔<sup>®</sup>CPU数量",
    text2: "≥200u/季度",
    text3: "≥1000u/季度"
  },
  {
    text1: "*交单中的有效扫描的中国盒产品数量",
    text2: "≥100u/季度",
    text3: "≥500u/季度"
  },
  { text1: "培训课程要求", text2: "≥5门课程/季度", text3: "≥10门课程/季度" }
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
    title: '型号',
    dataIndex: 'text1',
    align: 'left',
  },
  {
    title: '积分',
    dataIndex: 'text2',
  }
]
const tableData2 = [
  {"text1":"i3-8350K","text2":"25"},{"text1":"i3-9350KF","text2":"25"},{"text1":"i5-8400","text2":"30"},{"text1":"i5-8500","text2":"30"},{"text1":"i5-8600","text2":"30"},{"text1":"i5-8600K","text2":"35"},{"text1":"i5-9400F","text2":"30"},{"text1":"i5-9600K","text2":"35"},{"text1":"i5-9600KF","text2":"35"},{"text1":"i7-8700","text2":"40"},{"text1":"i7-8700K","text2":"45"},{"text1":"i7-8086K","text2":"45"},{"text1":"i7-9700K","text2":"45"},{"text1":"i7-9700KF","text2":"45"},{"text1":"i9-9900K","text2":"60"},{"text1":"i9-9900KF","text2":"60"}
];
const tableData3 = [
  {"text1":"i5-8400","text2":"30"},{"text1":"i5-8500","text2":"30"},{"text1":"i5-8600","text2":"30"},{"text1":"i5-8600K","text2":"35"},{"text1":"i5-9600K","text2":"35"}
]
const tableData4 = [
  {"text1":"i7-8700","text2":"40"},{"text1":"i7-8700K","text2":"45"},{"text1":"i7-8086K","text2":"45"},{"text1":"i7-9700K","text2":"45"}
]
const tableData5 = [
 {"text1":"i9-9900K","text2":"60"}
]

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

