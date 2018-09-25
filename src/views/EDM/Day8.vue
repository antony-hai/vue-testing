<template>
  <table align="center" style="text-align: center; font-family: 微软雅黑; margin: 0 auto;">
    <tr>
      <td>
        <Nav></Nav>

        <StanceTable hasTop hasBottom>
          <tr>
            <td style="font-size:12px;text-align: left; font-family: 微软雅黑; line-height: 20px; font-weight: 600;"> 尊敬的英特尔
              <Sup></Sup>服务器技术合作伙伴</td>
          </tr>
          <tr height='10'></tr>
          <tr>
            <td style="font-size:12px;text-align: left; font-family: 微软雅黑; line-height: 24px;"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 在新的季度里，为了继续帮助大家实现英特尔
              <Sup></Sup>服务器产品的业务持续快速增长，英特尔推出了“2018年第四季度英特尔
              <Sup></Sup>服务器常规积分奖励计划”。通过该计划，您在参加英特尔
              <Sup></Sup>服务器相关业务培训的基础上，通过销售指定型号的服务器可获取丰厚的积分奖励，赶快行动吧！ </td>
          </tr>
        </StanceTable>

        <StanceTable hasTop>
          <tr>
            <td width="95" style="font-size:13px;text-align: left; font-family: 微软雅黑; line-height: 22px;color: #000000; font-weight: 600">一、活动时间：</td>
            <td style="font-size:13px;text-align: left; font-family: 微软雅黑; line-height: 22px;">2018年第四季度</td>
          </tr>
          <tr>
            <td width="95" style="font-size:13px;text-align: left; font-family: 微软雅黑; line-height: 22px;color: #000000; font-weight: 600">二、活动对象：</td>
            <td style="font-size:13px;text-align: left; font-family: 微软雅黑; line-height: 22px;">英特尔<Sup></Sup>服务器技术合作伙伴
              <u>至尊会员和菁英会员</u>（具体参与资格请咨询您的客户经理）</td>
          </tr>
          <tr>
            <td width="95" style="font-size:13px;text-align: left; font-family: 微软雅黑; line-height: 22px;color: #000000; font-weight: 600;">三、活动要求：</td>
          </tr>
        </StanceTable>

        <StanceTable>
          <tr>
            <td width="30"></td>
            <td>
              <StanceTable width="604">
                <IconText>
                  英特尔<Sup></Sup>服务器技术合作伙伴<u>需参加符合英特尔所要求形式与数量的关于英特尔<Sup></Sup>服务器产品的培训方可获得销售积分奖励资格</u>；
                </IconText>
                <IconText>
                  最终结果以英特尔授权总代理提供的销售数据作为奖励依据。
                </IconText>
              </StanceTable>
            </td>
          </tr>
        </StanceTable>


        <StanceTable>
          <tr>
            <td width="95" style="font-size:13px;text-align: left; font-family: 微软雅黑; line-height: 22px;color: #000000; font-weight: 600;">四、温馨提示: </td>
          </tr>
        </StanceTable>
        <StanceTable>
          <tr>
            <td width="30"></td>
            <td>
              <StanceTable width="604">
                <IconText>
                  <b>请您确保参与活动前会员账户已为激活状态</b>；如未激活，您将无法参与积分奖励计划，获取积分奖励；如对激活流程有任何问题，请点击
                  <a href="https://prc-points.inteltechnologyprovider.com/sites/static/public/proc/How%20To%20Enroll%20Points%20Aug%202018-ITP.pdf" target="_blank">《英特尔<Sup></Sup>渠道积分会员账户激活流程》</a>或联系英特尔客户支持寻求帮助。
                </IconText>
                <IconText>
                  如至尊会员或菁英会员连续2个季度未达到其会员级别最低要求，将会被降级为菁英会员或注册会员，具体会员级别要求，请咨询您的客户经理。
                </IconText>
              </StanceTable>
            </td>
          </tr>
        </StanceTable>

        <StanceTable hasBottom>
          <tr>
            <td style="font-size:13px;text-align: left; font-family: 微软雅黑; line-height: 22px;color: #000000; font-weight: 600;">五、奖励规则：</td>
          </tr>
          <tr>
            <td style="font-size:13px;text-align: left; font-family: 微软雅黑; line-height: 22px;color: #000000; font-weight: 600;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;注：以下产品，HPC数据中心专家和云数据中心专家可额外赚取20%的奖励积分，且额外赚取奖励积分无上限限制。</td>
          </tr>
        </StanceTable>


        <!-- 数据 ----------------------------------------------------- -->
        <DataTable :column="column" :dataSource="tableData" :headStyle="{ height: '40px', 'background-color': '#0070C0'}"></DataTable>

        <StanceTable hasTop hasBottom>
          <tr>
            <td style="font-size:13px;text-align: left; font-family: 微软雅黑; line-height: 22px;color: #000000; font-weight: 600;">六、温馨提示</td>
          </tr>
        </StanceTable>


        <ListTable :dataSource="dataSource5"></ListTable>


        <StanceTable hasBottom>
          <tr height="20"></tr>
          <tr>
            <td style="font-size:12px;text-align: left; font-family: 微软雅黑; line-height: 20px;">&nbsp;&nbsp;英特尔真诚地欢迎您加入“2018年第四季度英特尔中小企业渠道合作计划”。让我们携手并进，共创辉煌！</td>
          </tr>
          <tr height="10"></tr>
          <tr>
            <td style="font-size:12px;text-align: right; font-family: 微软雅黑; line-height: 20px;">英特尔中国区域销售运营与战略项目部</td>
          </tr>

          <tr>
            <td style="font-size:12px;text-align: right; font-family: 微软雅黑; line-height: 20px;">2018年9月</td>
          </tr>
        </StanceTable>
        <Footer></Footer>
      </td>
    </tr>
  </table>
</template>

<script>
import {
  Nav,
  StanceTable,
  ListTable,
  DataTable,
  IconText,
  Sup
} from "@/components/edm";



const column = [
  {
    title: "产品名称",
    dataIndex: "text1"
  },
  {
    title: "产品代码",
    dataIndex: "text2"
  },
  {
    title: "积分奖励（分/台）",
    dataIndex: "text3",
    width: 80,
  },
  {
    title: "积分上限",
    dataIndex: "text4",
    rowspan: 73,
  },
 
];
const tableData = [
  {"text1":"Intel<sup>®</sup> Xeon® Gold 6128 Processor","text2":"BX806736128","text3":"150","text4":"至尊会员<br>和菁英会员：<br>80,000积分"},{"text1":"Intel<sup>®</sup> Xeon® Gold 6130 Processor","text2":"BX806736130","text3":"150"},{"text1":"Intel<sup>®</sup> Xeon® Gold 6134 Processor","text2":"BX806736134","text3":"150"},{"text1":"Intel<sup>®</sup> Xeon® Gold 6138 Processor","text2":"BX806736138","text3":"150"},{"text1":"Intel<sup>®</sup> Xeon® Gold 6140 Processor","text2":"BX806736140","text3":"150"},{"text1":"Intel<sup>®</sup> Xeon® Gold 6142 Processor","text2":"BX806736142","text3":"150"},{"text1":"Intel<sup>®</sup> Xeon® Gold 6148 Processor","text2":"BX806736148","text3":"150"},{"text1":"Intel<sup>®</sup> Xeon® Gold 6152 Processor","text2":"BX806736152","text3":"150"},{"text1":"Intel<sup>®</sup> Xeon® Platinum 8160 Processor","text2":"BX806738160","text3":"450"},{"text1":"Intel<sup>®</sup> Xeon® Platinum 8164 Processor","text2":"BX806738164","text3":"450"},{"text1":"Intel<sup>®</sup> Xeon® Platinum 8170 Processor","text2":"BX806738170","text3":"450"},{"text1":"Intel<sup>®</sup> Xeon® Platinum 8176 Processor","text2":"BX806738176","text3":"450"},{"text1":"Boxed Intel<sup>®</sup> Xeon® Platinum 8180 Processor","text2":"BX806738180","text3":"450"},{"text1":"Intel<sup>®</sup> Xeon® Platinum 8176M Processor","text2":"CD8067303133605","text3":"450"},{"text1":"Intel<sup>®</sup> Xeon® Platinum 8180M Processor","text2":"CD8067303192101","text3":"450"},{"text1":"Intel<sup>®</sup> Xeon® Platinum 8160 Processor","text2":"CD8067303314302","text3":"450"},{"text1":"Intel<sup>®</sup> Xeon® Platinum 8180 Processor","text2":"CD8067303314400","text3":"450"},{"text1":"Intel<sup>®</sup> Xeon® Platinum 8176 Processor","text2":"CD8067303314700","text3":"450"},{"text1":"Intel<sup>®</sup> Xeon® Gold 6154 Processor","text2":"CD8067303316400","text3":"150"},{"text1":"Intel<sup>®</sup> Xeon® Platinum 8170M Processor","text2":"CD8067303319201","text3":"450"},{"text1":"Intel<sup>®</sup> Xeon® Platinum 8170 Processor","text2":"CD8067303327601","text3":"450"},{"text1":"Intel<sup>®</sup> Xeon® Platinum 8168 Processor","text2":"CD8067303327701","text3":"450"},{"text1":"Intel<sup>®</sup> Xeon® Gold 6150 Processor","text2":"CD8067303328000","text3":"150"},{"text1":"Intel<sup>®</sup> Xeon® Gold 6136 Processor","text2":"CD8067303330201","text3":"150"},{"text1":"Intel<sup>®</sup> Xeon® Gold 6134 Processor","text2":"CD8067303330302","text3":"150"},{"text1":"Intel<sup>®</sup> Xeon® Gold 6134M Processor","text2":"CD8067303330402","text3":"150"},{"text1":"Intel<sup>®</sup> Xeon® Platinum 8156 Processor","text2":"CD8067303368800","text3":"450"},{"text1":"Intel<sup>®</sup> Xeon® Gold 6140 Processor","text2":"CD8067303405200","text3":"150"},{"text1":"Intel<sup>®</sup> Xeon® Gold 6142 Processor","text2":"CD8067303405400","text3":"150"},{"text1":"Intel<sup>®</sup> Xeon® Gold 6140M Processor","text2":"CD8067303405500","text3":"150"},{"text1":"Intel<sup>®</sup> Xeon® Platinum 8160 Processor","text2":"CD8067303405600","text3":"450"},{"text1":"Intel<sup>®</sup> Xeon® Gold 6142M Processor","text2":"CD8067303405700","text3":"150"},{"text1":"Intel<sup>®</sup> Xeon® Gold 6136 Processor","text2":"CD8067303405800","text3":"150"},{"text1":"Intel<sup>®</sup> Xeon® Gold 6126 Processor","text2":"CD8067303405900","text3":"150"},{"text1":"Intel<sup>®</sup> Xeon® Gold 6152 Processor","text2":"CD8067303406000","text3":"150"},{"text1":"Intel<sup>®</sup> Xeon® Gold 6138 Processor","text2":"CD8067303406100","text3":"150"},{"text1":"Intel<sup>®</sup> Xeon® Gold 6148 Processor","text2":"CD8067303406200","text3":"150"},{"text1":"Intel<sup>®</sup> Xeon® Platinum 8158 Processor","text2":"CD8067303406500","text3":"450"},{"text1":"Intel<sup>®</sup> Xeon® Platinum 8160M Processor","text2":"CD8067303406600","text3":"450"},{"text1":"Intel<sup>®</sup> Xeon® Platinum 8164 Processor","text2":"CD8067303408800","text3":"450"},{"text1":"Intel<sup>®</sup> Xeon® Platinum 8153 Processor","text2":"CD8067303408900","text3":"450"},{"text1":"Intel<sup>®</sup> Xeon® Gold 6130 Processor","text2":"CD8067303409000","text3":"150"},{"text1":"Intel<sup>®</sup> Xeon® Gold 6133 Processor","text2":"CD8067303589900","text3":"150"},{"text1":"Intel<sup>®</sup> Xeon® Gold 6132 Processor","text2":"CD8067303592500","text3":"150"},{"text1":"Intel<sup>®</sup> Xeon® Gold 6128 Processor","text2":"CD8067303592600","text3":"150"},{"text1":"Intel<sup>®</sup> Xeon® Gold 6154 Processor","text2":"CD8067303592700","text3":"150"},{"text1":"Intel<sup>®</sup> Xeon® Platinum 8160T Processor","text2":"CD8067303592800","text3":"450"},{"text1":"Intel<sup>®</sup> Xeon® Gold 6138T Processor","text2":"CD8067303592900","text3":"150"},{"text1":"Intel<sup>®</sup> Xeon® Gold 6130T Processor","text2":"CD8067303593000","text3":"150"},{"text1":"Intel<sup>®</sup> Xeon® Gold 6126T Processor","text2":"CD8067303593100","text3":"150"},{"text1":"Intel<sup>®</sup> Xeon® Gold 6130F Processor","text2":"CD8067303593300","text3":"150"},{"text1":"Intel<sup>®</sup> Xeon® Gold 6126F Processor","text2":"CD8067303593400","text3":"150"},{"text1":"Intel<sup>®</sup> Xeon® Platinum 8160F Processor","text2":"CD8067303593600","text3":"450"},{"text1":"Intel<sup>®</sup> Xeon® Gold 6142F Processor","text2":"CD8067303593700","text3":"150"},{"text1":"Intel<sup>®</sup> Xeon® Gold 6148F Processor","text2":"CD8067303593800","text3":"150"},{"text1":"Intel<sup>®</sup> Xeon® Gold 6138F Processor","text2":"CD8067303593900","text3":"150"},{"text1":"Intel<sup>®</sup> Xeon® Gold 6146 Processor","text2":"CD8067303657201","text3":"150"},{"text1":"Intel<sup>®</sup> Xeon® Gold 6144 Processor","text2":"CD8067303657302","text3":"150"},{"text1":"Intel<sup>®</sup> Xeon® Platinum 8176F Processor","text2":"CD8067303694600","text3":"450"},{"text1":"Intel<sup>®</sup> Xeon® Gold 6144 Processor","text2":"CD8067303843000","text3":"150"},{"text1":"Intel<sup>®</sup> Xeon® Gold 6128 Processor","text2":"WX806736128","text3":"150"},{"text1":"Intel<sup>®</sup> Xeon® Gold 6130 Processor","text2":"WX806736130","text3":"150"},{"text1":"Intel<sup>®</sup> Xeon® Gold 6134 Processor","text2":"WX806736134","text3":"150"},{"text1":"Intel<sup>®</sup> Xeon® Gold 6138 Processor","text2":"WX806736138","text3":"150"},{"text1":"Intel<sup>®</sup> Xeon® Gold 6140 Processor","text2":"WX806736140","text3":"150"},{"text1":"Intel<sup>®</sup> Xeon® Gold 6142 Processor","text2":"WX806736142","text3":"150"},{"text1":"Intel<sup>®</sup> Xeon® Gold 6148 Processor","text2":"WX806736148","text3":"150"},{"text1":"Intel<sup>®</sup> Xeon® Gold 6152 Processor","text2":"WX806736152","text3":"150"},{"text1":"Intel<sup>®</sup> Xeon® Platinum 8160 Processor","text2":"WX806738160","text3":"450"},{"text1":"Intel<sup>®</sup> Xeon® Platinum 8164 Processor","text2":"WX806738164","text3":"450"},{"text1":"Intel<sup>®</sup> Xeon® Platinum 8170 Processor","text2":"WX806738170","text3":"450"},{"text1":"Intel<sup>®</sup> Xeon® Platinum 8176 Processor","text2":"WX806738176","text3":"450"},{"text1":"Intel<sup>®</sup> Xeon® Platinum 8180 Processor","text2":"WX806738180","text3":"450"}
]

const dataSource5 = [
  { text: "1．如下状况您的英特尔®技术合作伙伴(简称ITP)账户将会自动失效：" },
  {
    text:
      "1．如下状况您的英特尔®技术合作伙伴(简称ITP)账户将会自动失效："
  },
  {
    text: "对于经确切证据证明的条码涂改、拆盒等行为，视为违反促销规则销售行为。"
  },
  { text: "中国盒实际决算数量，以英特尔扫描客户端体现的有效数字为主要依据；" },
  {
    text:
      "对于违反促销规则的渠道取消被发现季度相应的促销奖励，降级为注册级，并重新考核是否具备中小企业渠道资格。"
  }
];

export default {
  data() {
    return {
      dataSource5,
      column,
      tableData
    };
  },
  components: {
    Nav,
    StanceTable,
    ListTable,
    Sup,
    IconText,
    DataTable
  }
};
</script>

