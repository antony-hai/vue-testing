<template>
  <table align="center" style="text-align: center; font-family: 微软雅黑; margin: 0 auto;">
    <tr>
      <td>
        <Nav></Nav>
        <ImageRow imgUrl="http://show.easeye.com.cn/fckattach/2018-04-17/e3b9e77152a2095d72521d1898764e2d/image/face9686a126c31e936870d7c956b970.jpg"></ImageRow>

        <StanceTable hasTop hasBottom>
          <tr>
            <td style="font-size:13px;text-align: left; font-family: 微软雅黑; line-height: 20px; font-weight: 600;"> 尊敬的英特尔<Sup></Sup>服务器技术合作伙伴</td>
          </tr>
          <tr height='10'></tr>
          <tr>
            <td style="font-size:12px;text-align: left; font-family: 微软雅黑; line-height: 24px;"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
              新的一年，新的季度，为了继续帮助大家实现英特尔<Sup></Sup>服务器产品的业务持续快速增长，英特尔推出了“2019年第一季度英特尔<Sup></Sup>服务器常规积分奖励计划”。
              通过该计划，您在参加英特尔<Sup></Sup>服务器相关业务培训的基础上，通过销售指定型号的服务器可获取丰厚的积分奖励，赶快行动吧！</td>
          </tr>
        </StanceTable>

        <StanceTable hasTop>
          <tr>
            <td width="95" style="font-size:13px;text-align: left; font-family: 微软雅黑; line-height: 22px;color: #000000; font-weight: 600">一、活动时间：</td>
            <td style="font-size:12px;text-align: left; font-family: 微软雅黑; line-height: 22px;">2019年第一季度</td>
          </tr>
          <tr>
            <td width="95" style="font-size:13px;text-align: left; font-family: 微软雅黑; line-height: 22px;color: #000000; font-weight: 600">二、活动对象：</td>
            <td style="font-size:12px;text-align: left; font-family: 微软雅黑; line-height: 22px;">英特尔<Sup></Sup>服务器技术合作伙伴
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
                  英特尔<Sup></Sup>服务器技术合作伙伴<u>需参加符合英特尔所要求形式与数量的关于英特尔<Sup></Sup>服务器产品的培训方可获得销售积分奖励资格</u> ；
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
                  <b><u>请您确保参与活动前会员账户已为激活状态</u></b>；如未激活，您将无法参与积分奖励计划，获取积分奖励；如对激活流程有任何问题，请点击
                  <a href="https://prc-points.inteltechnologyprovider.com/sites/static/public/proc/How%20To%20Enroll%20Points%20Aug%202018-ITP.pdf" target="_blank"><u>《英特尔<Sup></Sup>渠道积分会员账户激活流程》</u></a>或联系英特尔<Sup></Sup>客户支持寻求帮助。
                </IconText>
                <IconText>
                  如至尊会员或菁英会员连续2个季度未达到其会员级别最低要求，将会被降级为菁英会员或注册会员，具体会员级别要求，请咨询您的客户经理。
                </IconText>
              </StanceTable>
            </td>
          </tr>
        </StanceTable>

        <StanceTable>
          <tr>
            <td style="font-size:13px;text-align: left; font-family: 微软雅黑; line-height: 22px;color: #000000; font-weight: 600;">五、奖励规则：</td>
          </tr>
        </StanceTable>
        
        <StanceTable hasBottom>
          <tr>
            <td width="30"></td>
            <TCell><b>注：以下产品，HPC数据中心专家和云数据中心专家可额外赚取20%的奖励积分，且额外赚取奖励积分无上限限制。</b></TCell>
          </tr>
        </StanceTable>

        <!-- 数据 ----------------------------------------------------- -->
        <DataTable :column="column" :dataSource="tableData" :headStyle="{ height: '40px', 'background-color': '#0070C0', color: '#ffffff'}"></DataTable>

        <StanceTable hasTop hasBottom>
          <tr>
            <td style="font-size:12px;text-align: left; font-family: 微软雅黑; line-height: 22px;color: #000000; font-weight: 600;">六、温馨提示</td>
          </tr>
        </StanceTable>

        <StanceTable>
          <tr>
            <td width="20" style="font-size:12px;text-align: left; font-family: 微软雅黑; line-height: 22px;color: #000000;">1.</td>
            <td style="font-size:12px;text-align: left; font-family: 微软雅黑; line-height: 22px;color: #000000;">
              如下状况您的英特尔<Sup></Sup>技术合作伙伴(简称ITP)账户将会自动失效：
            </td>
          </tr>
          <tr>
            <td width="20"></td>
            <td style="font-size:12px;text-align: left; font-family: 微软雅黑; line-height: 22px;color: #000000;">
              <StanceTable width="598">
                <tr>
                  <td width="20" style="font-size:13px;text-align: left; font-family: 微软雅黑; line-height: 22px; vertical-align: top">a.</td>
                  <td style="font-size:12px;text-align: left; font-family: 微软雅黑; line-height: 22px;">
                    新会员自获得GID号之日起，超过45天从未登录英特尔<Sup></Sup>技术合作伙伴网站
                    <a href="https://www.intel.com/technologyprovider" target="_blank" rel="noopener noreferrer">(https://www.intel.com/technologyprovider)</a> 或者英特尔<Sup></Sup>渠道积分网站 
                    <a href="https://prc-points.inteltechnologyprovider.com/" target="_blank" rel="noopener noreferrer">(https://prc-points.inteltechnologyprovider.com/)</a>
                  </td>
                </tr>
                <tr>
                  <td width="20" style="font-size:12px;text-align: left; font-family: 微软雅黑; line-height: 22px; vertical-align: top">b.</td>
                  <td style="font-size:12px;text-align: left; font-family: 微软雅黑; line-height: 22px;">
                    非新会员超过18个月从未登录英特尔<Sup></Sup>技术合作伙伴网站 
                    <a href="https://www.intel.com/technologyprovider" target="_blank" rel="noopener noreferrer">(https://www.intel.com/technologyprovider)</a> 或者英特尔<Sup></Sup>渠道积分网站 
                    <a href="https://prc-points.inteltechnologyprovider.com/" target="_blank" rel="noopener noreferrer">(https://prc-points.inteltechnologyprovider.com/)</a>
                  </td>

                </tr>

              </StanceTable>
            </td>
          </tr>
        </StanceTable>

        <StanceTable>
          <tr>
            <td width="20" style="font-size:12px;text-align: left; font-family: 微软雅黑; line-height: 22px;color: #000000; vertical-align: top">2.</td>
            <td style="font-size:12px;text-align: left; font-family: 微软雅黑; line-height: 22px;color: #000000;">
              当您的ITP账户失效时，您将不能享受英特尔为您量身定制的ITP会员权益，同时您将失去访问英特尔<Sup></Sup>渠道积分网站的资格，影响您在该网站账户中的积分。如您希望再次成为ITP会员，请联系英特尔客户支持寻求帮助：
            </td>
          </tr>
          <tr>
            <td width="20" style="font-size:12px;text-align: left; font-family: 微软雅黑; line-height: 22px;color: #000000;"></td>
            <td style="font-size:12px;text-align: left; font-family: 微软雅黑; line-height: 22px;color: #000000;">
              服务电话：400-920-2200 （座机和手机皆可拨打）；800-820-1100 （支持座机拨打）
            </td>
          </tr>
          <tr>
            <td width="20" style="font-size:12px;text-align: left; font-family: 微软雅黑; line-height: 22px;color: #000000;"></td>
            <td style="font-size:12px;text-align: left; font-family: 微软雅黑; line-height: 22px;color: #000000;">
              联系邮箱：<a href="mailto:programs@intel.com">programs@intel.com</a>  
            </td>
          </tr>
          <tr>
            <td width="20" style="font-size:12px;text-align: left; font-family: 微软雅黑; line-height: 22px;color: #000000;"></td>
            <td style="font-size:12px;text-align: left; font-family: 微软雅黑; line-height: 22px;color: #000000;">
              服务时间：周一至周五，上午9:00 – 下午17:00（节假日除外）
            </td>
          </tr>

        </StanceTable>


        <ListTable :dataSource="dataSource5"></ListTable>


        <StanceTable hasTop hasBottom>
          <tr>
            <td style="font-size:15px;text-align: left; font-family: 微软雅黑; line-height: 20px; font-weight: 600;"> 温馨提示：请确保您的账户信息安全。</td>
          </tr>
          <tr height='10'></tr>
          <tr>
            <td style="font-size:12px;text-align: left; font-family: 微软雅黑; line-height: 24px;"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
              依照英特尔的网站使用条款 <a href="https://www.intel.cn/content/www/cn/zh/legal/terms-of-use.html" target="_blank">（https://www.intel.cn/content/www/cn/zh/legal/terms-of-use.html）</a>，
              凡以您的账户在英特尔网站上进行的操作，均视为您的操作并由您负责；如果您的账户、密码等信息有误或发生泄露，导致您的权益受损，请理解英特尔将不承担任何责任。 </td>
          </tr>
          <tr height="20"></tr>
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
  Sup,
  ImageRow,
  Footer1,
  TCell,
} from "@/components/edm";



const column = [
  {
    title: "产品名称",
    dataIndex: "text1",
    width: 270,
    align: 'left',
  },
  {
    title: "产品代码",
    dataIndex: "text2",
    align: 'left',
  },
  {
    title: "积分奖励（分/台）",
    dataIndex: "text3",
    width: 110,
  },
  {
    title: "积分上限",
    dataIndex: "text4",
    rowspan: 73,
  },
 
];
const tableData = [
  {"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Gold 6144 Processor","text2":"CD8067303843000","text3":"150","text4":"至尊会员和<br/>菁英会员：<br/>80,000积分"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Gold 6146 Processor","text2":"CD8067303657201","text3":"150"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Gold 6126 Processor","text2":"CD8067303405900","text3":"150"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Gold 6126F Processor","text2":"CD8067303593400","text3":"150"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Gold 6126T Processor","text2":"CD8067303593100","text3":"150"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Gold 6128 Processor","text2":"BX806736128","text3":"150"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Gold 6128 Processor","text2":"CD8067303592600","text3":"150"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Gold 6128 Processor","text2":"WX806736128","text3":"150"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Gold 6130 Processor","text2":"BX806736130","text3":"150"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Gold 6130 Processor","text2":"CD8067303409000","text3":"150"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Gold 6130 Processor","text2":"WX806736130","text3":"150"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Gold 6130F Processor","text2":"CD8067303593300","text3":"150"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Gold 6130T Processor","text2":"CD8067303593000","text3":"150"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Gold 6132 Processor","text2":"CD8067303592500","text3":"150"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Gold 6133 Processor","text2":"CD8067303589900","text3":"150"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Gold 6134 Processor","text2":"BX806736134","text3":"150"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Gold 6134 Processor","text2":"CD8067303330302","text3":"150"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Gold 6134 Processor","text2":"WX806736134","text3":"150"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Gold 6134M Processor","text2":"CD8067303330402","text3":"150"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Gold 6136 Processor","text2":"CD8067303330201","text3":"150"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Gold 6136 Processor","text2":"CD8067303405800","text3":"150"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Gold 6138 Processor","text2":"BX806736138","text3":"150"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Gold 6138 Processor","text2":"CD8067303406100","text3":"150"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Gold 6138 Processor","text2":"WX806736138","text3":"150"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Gold 6138F Processor","text2":"CD8067303593900","text3":"150"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Gold 6138T Processor","text2":"CD8067303592900","text3":"150"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Gold 6140 Processor","text2":"BX806736140","text3":"150"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Gold 6140 Processor","text2":"CD8067303405200","text3":"150"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Gold 6140 Processor","text2":"WX806736140","text3":"150"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Gold 6140M Processor","text2":"CD8067303405500","text3":"150"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Gold 6142 Processor","text2":"BX806736142","text3":"150"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Gold 6142 Processor","text2":"CD8067303405400","text3":"150"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Gold 6142 Processor","text2":"WX806736142","text3":"150"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Gold 6142F Processor","text2":"CD8067303593700","text3":"150"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Gold 6142M Processor","text2":"CD8067303405700","text3":"150"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Gold 6144 Processor","text2":"CD8067303657302","text3":"150"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Platinum 8176F Processor","text2":"CD8067303694600","text3":"450"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Platinum 8176M Processor","text2":"CD8067303133605","text3":"450"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Platinum 8180 Processor","text2":"BX806738180","text3":"450"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Platinum 8180 Processor","text2":"CD8067303314400","text3":"450"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Platinum 8180 Processor","text2":"WX806738180","text3":"450"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Platinum 8180M Processor","text2":"CD8067303192101","text3":"450"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Gold 6148 Processor","text2":"WX806736148","text3":"150"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Gold 6148F Processor","text2":"CD8067303593800","text3":"150"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Platinum 8164 Processor","text2":"BX806738164","text3":"450"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Platinum 8164 Processor","text2":"CD8067303408800","text3":"450"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Platinum 8164 Processor","text2":"WX806738164","text3":"450"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Platinum 8168 Processor","text2":"CD8067303327701","text3":"450"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Platinum 8170 Processor","text2":"BX806738170","text3":"450"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Platinum 8170 Processor","text2":"CD8067303327601","text3":"450"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Platinum 8170 Processor","text2":"WX806738170","text3":"450"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Platinum 8170M Processor","text2":"CD8067303319201","text3":"450"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Platinum 8176 Processor","text2":"BX806738176","text3":"450"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Platinum 8176 Processor","text2":"CD8067303314700","text3":"450"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Platinum 8176 Processor","text2":"WX806738176","text3":"450"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Gold 6150 Processor","text2":"CD8067303328000","text3":"150"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Gold 6152 Processor","text2":"BX806736152","text3":"150"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Gold 6152 Processor","text2":"CD8067303406000","text3":"150"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Gold 6152 Processor","text2":"WX806736152","text3":"150"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Gold 6154 Processor","text2":"CD8067303316400","text3":"150"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Gold 6154 Processor","text2":"CD8067303592700","text3":"150"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Platinum 8153 Processor","text2":"CD8067303408900","text3":"450"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Platinum 8156 Processor","text2":"CD8067303368800","text3":"450"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Platinum 8158 Processor","text2":"CD8067303406500","text3":"450"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Platinum 8160 Processor","text2":"BX806738160","text3":"450"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Platinum 8160 Processor","text2":"CD8067303314302","text3":"450"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Platinum 8160 Processor","text2":"CD8067303405600","text3":"450"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Platinum 8160 Processor","text2":"WX806738160","text3":"450"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Platinum 8160F Processor","text2":"CD8067303593600","text3":"450"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Platinum 8160M Processor","text2":"CD8067303406600","text3":"450"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Platinum 8160T Processor","text2":"CD8067303592800","text3":"450"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Gold 6148 Processor","text2":"BX806736148","text3":"150"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Gold 6148 Processor","text2":"CD8067303406200","text3":"150"}
]

const dataSource5 = [
  { text: "3．本季度积分将在<b>本季度</b>核算，并上传至您的<a href='https://prc-points.inteltechnologyprovider.com' target='_blank'>英特尔<sup>®</sup>渠道积分</a>账户，积分有效期为一年；" },
  {
    text:
      "4．您可以登录<a href='https://prc-points.inteltechnologyprovider.com'\
       target='_blank'>英特尔<sup>®</sup>渠道积分</a>查询积分并进行礼品兑换，可兑换的礼品有多种面值的亚马逊电子礼品卡\
       Intel产品等多种礼品；为了确保礼品能准确及时的发送给您，请尽快登录<a href='http://www.intel.com/technologyprovider'\
       target='_blank'>英特尔<sup>®</sup>技术合作伙伴网站</a> 或 <a href='https://prc-points.inteltechnologyprovider.com' target='_blank'>英特尔<sup>®</sup>渠道积分网站</a>核实并更新您的联系信息；"
  },
  {
    text: "5．在您成功兑换礼品后，我们将尽快安排礼品发送（如兑换亚马逊电子礼品卡，则由亚马逊通过电子邮件的方式发送充值密码）；如您在1个月内未收到礼品，请立即联系英特尔客户支持。由于订单量较大，我们无法保证能够查询到超过2个月的订单递送情况，若有任何不便之处请谅解；"
  },
  { text: "凡参加本活动规则所描述活动，或兑换本活动规则所列积分，即表明您同意受本活动规则中各项条款的调整和约束，并遵守英特尔<sup>®</sup>技术合作伙伴（“ITP”）项目的条款和条件，包括附录A与积分补充条款和条件（“ITP项目条款”）。该ITP项目条款为本活动规则的一部分，其详情可在此网址查询：\
        <a href='https://www.intel.cn/content/www/cn/zh/technology-provider/legal/program-terms-and-conditions.html?_ga=2.161268861.1386006631.1522205920-1782132059.1444618124&elq_cid=1498511&erpm_id=2886134；' target='_blank'>https://www.intel.cn/content/www/cn/zh/technology-provider/legal/program-terms-and-conditions.html?_ga=2.161268861.1386006631.1522205920-1782132059.1444618124&elq_cid=1498511&erpm_id=2886134； </a>"
  },
  {
    text:
      "7．英特尔可以根据本活动规则以及ITP项目条款的内容，对您的级别状态进行定期评估，并按照本活动规则以及ITP项目条款进行相应的升级、降级操作。若本活动规则中的任何内容，与ITP项目条款存在冲突，应以本活动规则为准。任何英特尔商标许可协议和/或英特尔标识许可协议的条款均应优先于本活动规则中涉及上述协议内容的条款。除非英特尔授权代表以书面形式与您另有约定，英特尔的标准销售条款和条件将适用于任何英特尔产品购买或积分兑换等交易，且在适用中优先于任何其他协议；"
  },
  {
    text:
      "8．在适用法律所允许的范围内，本活动规则的最终解释权归英特尔所有；"
  },
  {
    text:
      "9．英特尔保留进一步调整、修改本活动规则的权利。"
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
    DataTable,
    ImageRow,
    Footer: Footer1,
    TCell,
  }
};
</script>

