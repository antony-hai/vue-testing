<template>
  <table align="center" style="text-align: center; font-family: 微软雅黑; margin: 0 auto;">
    <tr>
      <td>
        <Nav></Nav>
        <ImageRow imgUrl="http://show.easeye.com.cn/fckattach/2018-04-17/e3b9e77152a2095d72521d1898764e2d/image/face9686a126c31e936870d7c956b970.jpg"></ImageRow>

        <StanceTable hasTop hasBottom>
          <tr>
            <td style="font-size:13px;text-align: left; font-family: 微软雅黑; line-height: 20px; font-weight: 600;">尊敬的英特尔<Sup></Sup>服务器技术合作伙伴：</td>
          </tr>
          <tr height='10'></tr>
          <tr>
            <td style="font-size:12px;text-align: left; font-family: 微软雅黑; line-height: 24px;"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
              在新的季度，为了继续帮助大家实现英特尔<Sup></Sup>服务器产品的业务持续快速增长，英特尔推出了“2019年第三季度英特尔<Sup></Sup>服务器常规积分奖励计划”。
              通过该计划，贵司在参加英特尔<Sup></Sup>服务器相关业务培训的基础上，通过销售指定型号的服务器可获取丰厚的积分奖励，赶快行动吧！
            </td>
          </tr>
        </StanceTable>

        <StanceTable hasTop>
          <tr>
            <td width="95" style="font-size:13px;text-align: left; font-family: 微软雅黑; line-height: 22px;color: #000000; font-weight: 600">一、活动时间：</td>
            <td style="font-size:12px;text-align: left; font-family: 微软雅黑; line-height: 22px;">2019年第三季度</td>
          </tr>
          <tr>
            <td width="95" style="font-size:13px;text-align: left; font-family: 微软雅黑; line-height: 22px;color: #000000; font-weight: 600">二、活动对象：</td>
            <td style="font-size:12px;text-align: left; font-family: 微软雅黑; line-height: 22px;">英特尔<Sup></Sup>服务器技术合作伙伴<u>至尊会员和菁英会员</u></td>
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
                  英特尔<Sup></Sup>服务器技术合作伙伴<u>需参加符合英特尔所要求形式与数量的关于英特尔<Sup></Sup>服务器产品的培训方可获得销售积分奖励资格；</u>
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
                  <b><u>请贵司确保参与活动前会员账户已为激活状态</u></b>；如未激活，贵司将无法参与积分奖励计划，获取积分奖励；如对激活流程有任何问题，请点击
                  <a href="https://prc-points.inteltechnologyprovider.com/sites/static/public/proc/How%20To%20Enroll%20Points%20Aug%202018-ITP.pdf" target="_blank"><u>《英特尔<Sup></Sup>渠道积分会员账户激活流程》</u></a>或联系英特尔<Sup></Sup>客户支持寻求帮助。
                </IconText>
                <!-- <IconText>
                  如至尊会员或菁英会员连续2个季度未达到其会员级别最低要求，将会被降级为菁英会员或注册会员。如注册会员当季度达到菁英会员或至尊会员级别要求，下季度可被提名为菁英会员或至尊会员；如菁英会员当季度达到至尊会员要求，下季度可被提名为至尊会员。升降级生效时间为下一季度的第一个月底；具体会员级别要求如下：
                </IconText> -->
              </StanceTable>
            </td>
          </tr>
          <!-- 页面不同而多余的数据  -->
          <!-- <tr>
            <td width="30"></td>
            <td align="center">
              <DataTable :column="columnBefore" :dataSource="dataBefore" width="400"></DataTable>
            </td>
          </tr> -->
        </StanceTable>



        <StanceTable hasBottom>
          <tr>
            <td style="font-size:13px;text-align: left; font-family: 微软雅黑; line-height: 22px;color: #000000; font-weight: 600;">五、奖励规则：</td>
          </tr>
        </StanceTable>
        
        <!-- <StanceTable hasBottom>
          <tr>
            <td width="30"></td>
            <TCell><b>注：以下产品，HPC数据中心专家和云数据中心专家可额外赚取20%的奖励积分，且额外赚取奖励积分无上限限制。</b></TCell>
          </tr>
        </StanceTable> -->

        <!-- 数据 ----------------------------------------------------- -->
        <DataTable :column="column" :dataSource="tableData" :headStyle="{ height: '40px', 'background-color': '#0070C0', color: '#ffffff'}"></DataTable>

        <StanceTable hasTop hasBottom>
          <tr>
            <td style="font-size:12px;text-align: left; font-family: 微软雅黑; line-height: 22px;color: #000000; font-weight: 600;">六、温馨提示</td>
          </tr>
        </StanceTable>

        <!-- <StanceTable>
          <tr>
            <td width="20" style="font-size:12px;text-align: left; font-family: 微软雅黑; line-height: 22px;color: #000000;">1.</td>
            <td style="font-size:12px;text-align: left; font-family: 微软雅黑; line-height: 22px;color: #000000;">
              如下状况贵司的英特尔<Sup></Sup>技术合作伙伴(简称ITP)账户将会自动失效：
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
        </StanceTable> -->

        <!-- <StanceTable>
          <tr>
            <td width="20" style="font-size:12px;text-align: left; font-family: 微软雅黑; line-height: 22px;color: #000000; vertical-align: top">2.</td>
            <td style="font-size:12px;text-align: left; font-family: 微软雅黑; line-height: 22px;color: #000000;">
              当贵司的ITP账户失效时，贵司将不能享受英特尔为贵司量身定制的ITP会员权益，同时贵司将失去访问英特尔<Sup></Sup>渠道积分网站的资格，
              影响贵司在该网站账户中的积分。如贵司希望再次成为ITP会员,请联系英特尔客户支持寻求帮助：
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
              服务时间：周一至周五，上午9:00 – 下午17（节假日除外）
            </td>
          </tr>

        </StanceTable> -->


        <ListTable :dataSource="dataSource5" :indexAddNumber="0"></ListTable>


        <StanceTable hasTop hasBottom>
          <tr>
            <td style="font-size:15px;text-align: left; font-family: 微软雅黑; line-height: 20px; font-weight: 600;">温馨提示：请确保贵司的账户信息安全。</td>
          </tr>
          <tr height='10'></tr>
          <tr>
            <td style="font-size:12px;text-align: left; font-family: 微软雅黑; line-height: 24px;"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
              依照英特尔的网站使用条款 <a href="https://www.intel.cn/content/www/cn/zh/legal/terms-of-use.html" target="_blank">（https://www.intel.cn/content/www/cn/zh/legal/terms-of-use.html）</a>，
              凡以贵司的账户在英特尔网站上进行的操作，均视为贵司的操作并由贵司负责；如果贵司的账户、密码等信息有误或发生泄露，导致贵司的权益受损，请理解英特尔将不承担任何责任。</td>
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


const columnBefore = [
  {
    title: '项目',
    dataIndex: 'text1',
  },
  {
    title: '菁英级',
    dataIndex: 'text2',
  },
  {
    title: '至尊级',
    dataIndex: 'text3',
  },
]

const dataBefore = [
  {"text1":"销售收益要求($)","text2":"≥100,000","text3":"≥500,000"},{"text1":"培训积分要求","text2":"≥13","text3":"≥25"}
]
const column = [
  {
<<<<<<< Updated upstream
    title: "产品名称",
=======
    title: "符合条件的英特尔产品",
>>>>>>> Stashed changes
    dataIndex: "text1",
    align: 'left'
  },
  {
<<<<<<< Updated upstream
    title: "产品代码",
    dataIndex: "text2",
    align: 'left',
    width: 125,
=======
    title: "积分/单位",
    dataIndex: "text2",
>>>>>>> Stashed changes
  },
  {
    title: "符合条件的英特尔产品",
    dataIndex: "text3",
<<<<<<< Updated upstream
    width: 115,
=======
    align: 'left'
>>>>>>> Stashed changes
  },
  {
    title: "积分/单位",
    dataIndex: "text4",
<<<<<<< Updated upstream
    width: 90,
    rowspan: 121,
=======
>>>>>>> Stashed changes
  },

 
];
const tableData = [
<<<<<<< Updated upstream
 {"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Gold 6128 Processor","text2":"BX806736128","text3":"150","text4":"至尊会员<br/>和菁英会员：<br/>80,000积分"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Gold 6130 Processor","text2":"BX806736130","text3":"150"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Gold 6134 Processor","text2":"BX806736134","text3":"150"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Gold 6138 Processor","text2":"BX806736138","text3":"150"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Gold 6140 Processor","text2":"BX806736140","text3":"150"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Gold 6142 Processor","text2":"BX806736142","text3":"150"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Gold 6148 Processor","text2":"BX806736148","text3":"150"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Gold 6152 Processor","text2":"BX806736152","text3":"150"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Platinum 8160 Processor","text2":"BX806738160","text3":"450"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Platinum 8164 Processor","text2":"BX806738164","text3":"450"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Platinum 8170 Processor","text2":"BX806738170","text3":"450"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Platinum 8176 Processor","text2":"BX806738176","text3":"450"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Platinum 8180 Processor","text2":"BX806738180","text3":"450"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Gold 5218 Processor","text2":"BX806955218","text3":"100"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Gold 6230 Processor","text2":"BX806956230","text3":"150"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Gold 6240 Processor","text2":"BX806956240","text3":"150"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Gold 6242 Processor","text2":"BX806956242","text3":"150"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Gold 6248 Processor","text2":"BX806956248","text3":"150"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Gold 6252 Processor","text2":"BX806956252","text3":"150"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Platinum 8256 Processor","text2":"BX806958256","text3":"450"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Platinum 8176M Processor","text2":"CD8067303133605","text3":"450"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Platinum 8180M Processor","text2":"CD8067303192101","text3":"450"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Platinum 8160 Processor","text2":"CD8067303314302","text3":"450"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Platinum 8180 Processor","text2":"CD8067303314400","text3":"450"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Platinum 8176 Processor","text2":"CD8067303314700","text3":"450"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Gold 6154 Processor","text2":"CD8067303316400","text3":"150"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Platinum 8170M Processor","text2":"CD8067303319201","text3":"450"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Platinum 8170 Processor","text2":"CD8067303327601","text3":"450"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Platinum 8168 Processor","text2":"CD8067303327701","text3":"450"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Gold 6150 Processor","text2":"CD8067303328000","text3":"150"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Gold 6136 Processor","text2":"CD8067303330201","text3":"150"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Gold 6134 Processor","text2":"CD8067303330302","text3":"150"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Gold 6134M Processor","text2":"CD8067303330402","text3":"150"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Platinum 8156 Processor","text2":"CD8067303368800","text3":"450"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Gold 6140 Processor","text2":"CD8067303405200","text3":"150"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Gold 6142 Processor","text2":"CD8067303405400","text3":"150"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Gold 6140M Processor","text2":"CD8067303405500","text3":"150"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Platinum 8160 Processor","text2":"CD8067303405600","text3":"450"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Gold 6142M Processor","text2":"CD8067303405700","text3":"150"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Gold 6136 Processor","text2":"CD8067303405800","text3":"150"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Gold 6126 Processor","text2":"CD8067303405900","text3":"150"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Gold 6152 Processor","text2":"CD8067303406000","text3":"150"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Gold 6138 Processor","text2":"CD8067303406100","text3":"150"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Gold 6148 Processor","text2":"CD8067303406200","text3":"150"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Platinum 8158 Processor","text2":"CD8067303406500","text3":"450"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Platinum 8160M Processor","text2":"CD8067303406600","text3":"450"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Platinum 8164 Processor","text2":"CD8067303408800","text3":"450"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Platinum 8153 Processor","text2":"CD8067303408900","text3":"450"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Gold 6130 Processor","text2":"CD8067303409000","text3":"150"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Gold 6133 Processor","text2":"CD8067303589900","text3":"150"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Gold 6132 Processor","text2":"CD8067303592500","text3":"150"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Gold 6128 Processor","text2":"CD8067303592600","text3":"150"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Gold 6154 Processor","text2":"CD8067303592700","text3":"150"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Platinum 8160T Processor","text2":"CD8067303592800","text3":"450"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Gold 6138T Processor","text2":"CD8067303592900","text3":"150"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Gold 6130T Processor","text2":"CD8067303593000","text3":"150"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Gold 6126T Processor","text2":"CD8067303593100","text3":"150"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Gold 6130F Processor","text2":"CD8067303593300","text3":"150"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Gold 6126F Processor","text2":"CD8067303593400","text3":"150"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Platinum 8160F Processor","text2":"CD8067303593600","text3":"450"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Gold 6142F Processor","text2":"CD8067303593700","text3":"150"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Gold 6148F Processor","text2":"CD8067303593800","text3":"150"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Gold 6138F Processor","text2":"CD8067303593900","text3":"150"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Gold 6146 Processor","text2":"CD8067303657201","text3":"150"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Gold 6144 Processor","text2":"CD8067303657302","text3":"150"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Platinum 8176F Processor","text2":"CD8067303694600","text3":"450"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Gold 6144 Processor","text2":"CD8067303843000","text3":"150"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Gold 5218 Processor","text2":"CD8069504193301","text3":"100"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Gold 6230 Processor","text2":"CD8069504193701","text3":"150"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Gold 6240 Processor","text2":"CD8069504194001","text3":"150"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Gold 6242 Processor","text2":"CD8069504194101","text3":"150"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Gold 6244 Processor","text2":"CD8069504194202","text3":"150"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Gold 6248 Processor","text2":"CD8069504194301","text3":"150"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Gold 6252 Processor","text2":"CD8069504194401","text3":"150"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Gold 6254 Processor","text2":"CD8069504194501","text3":"150"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Platinum 8253 Processor","text2":"CD8069504194601 ","text3":"450"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Platinum 8256 Processor","text2":"CD8069504194701 ","text3":"450"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Platinum 8268 Processor","text2":"CD8069504195101 ","text3":"450"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Platinum 8270 Processor","text2":"CD8069504195201 ","text3":"450"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Platinum 8276L Processor","text2":"CD8069504195301 ","text3":"450"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Platinum 8276M Processor","text2":"CD8069504195401 ","text3":"450"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Platinum 8276 Processor","text2":"CD8069504195501 ","text3":"450"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Gold 6238T Processor","text2":"CD8069504200401","text3":"150"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Gold 6240Y Processor","text2":"CD8069504200501","text3":"150"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Platinum 8260Y Processor","text2":"CD8069504200902 ","text3":"450"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Platinum 8260L Processor","text2":"CD8069504201001 ","text3":"450"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Platinum 8260 Processor","text2":"CD8069504201101 ","text3":"450"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Platinum 8260M Processor","text2":"CD8069504201201 ","text3":"450"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Silver 4215 Processor","text2":"CD8069504212701","text3":"100"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Platinum 8280 Processor","text2":"CD8069504228001 ","text3":"450"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Platinum 8280M Processor","text2":"CD8069504228101 ","text3":"450"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Platinum 8280L Processor","text2":"CD8069504228201 ","text3":"450"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Gold 6246 Processor","text2":"CD8069504282905","text3":"150"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Gold 5220T Processor","text2":"CD8069504283006","text3":"150"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Gold 6238 Processor","text2":"CD8069504283104","text3":"150"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Gold 6234 Processor","text2":"CD8069504283304","text3":"150"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Gold 6226 Processor","text2":"CD8069504283404","text3":"150"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Gold 6252N Processor","text2":"CD8069504283503","text3":"150"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Gold 6230N Processor","text2":"CD8069504283604","text3":"150"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Gold 6230T Processor","text2":"CD8069504283704","text3":"150"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Gold 5220S Processor","text2":"CD8069504283804","text3":"150"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Gold 6240M Processor","text2":"CD8069504284403","text3":"150"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Gold 6240L Processor","text2":"CD8069504284503","text3":"150"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Gold 6238M Processor","text2":"CD8069504284604","text3":"150"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Gold 6238L Processor ","text2":"CD8069504284704","text3":"150"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Gold 6262V Processor","text2":"CD8069504285004","text3":"150"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Gold 6222V Processor","text2":"CD8069504285204","text3":"150"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Gold 6128 Processor","text2":"WX806736128","text3":"150"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Gold 6130 Processor","text2":"WX806736130","text3":"150"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Gold 6134 Processor","text2":"WX806736134","text3":"150"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Gold 6138 Processor","text2":"WX806736138","text3":"150"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Gold 6140 Processor","text2":"WX806736140","text3":"150"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Gold 6142 Processor","text2":"WX806736142","text3":"150"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Gold 6148 Processor","text2":"WX806736148","text3":"150"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Gold 6152 Processor","text2":"WX806736152","text3":"150"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Platinum 8160 Processor","text2":"WX806738160","text3":"450"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Platinum 8164 Processor","text2":"WX806738164","text3":"450"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Platinum 8170 Processor","text2":"WX806738170","text3":"450"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Platinum 8176 Processor","text2":"WX806738176","text3":"450"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Platinum 8180 Processor","text2":"WX806738180","text3":"450"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Gold 5218B Processor","text2":"CD8069504295701","text3":"100"}
=======
  {"text1":"BOXNUC7I3BNH","text2":"40","text3":"BOXNUC7i5BNKR","text4":"60"},{"text1":"BOXNUC7I3BNHL","text2":"40","text3":"BOXNUC7I7BNH","text4":"80"},{"text1":"BOXNUC7i3BNHR","text2":"40","text3":"BOXNUC7I7BNHL","text4":"80"},{"text1":"BOXNUC7I3BNHX1L","text2":"40","text3":"BOXNUC7i7BNHR","text4":"80"},{"text1":"NUC7i3BNHXF","text2":"40","text3":"BOXNUC7I7BNHX1L","text4":"80"},{"text1":"NUC7i3BNHXFL","text2":"40","text3":"BOXNUC7i7BNHXG","text4":"80"},{"text1":"BOXNUC7I3BNK","text2":"40","text3":"BOXNUC7i7BNHXGL","text4":"80"},{"text1":"BOXNUC7I3BNKL","text2":"40","text3":"BOXNUC8i3BEH","text4":"40"},{"text1":"BOXNUC7i3BNKR","text2":"40","text3":"BOXNUC8i3BEK","text4":"40"},{"text1":"BOXNUC7I5BNH","text2":"60","text3":"BOXNUC8I3CYSM","text4":"40"},{"text1":"BOXNUC7I5BNHL","text2":"60","text3":"BOXNUC8I3CYSN","text4":"40"},{"text1":"BOXNUC7i5BNHR","text2":"60","text3":"BOXNUC8i5BEH","text4":"60"},{"text1":"BOXNUC7I5BNHX1L","text2":"60","text3":"BOXNUC8i5BEK","text4":"60"},{"text1":"BOXNUC7i5BNHXF","text2":"60","text3":"BOXNUC8i7BEH","text4":"80"},{"text1":"BOXNUC7i5BNHXFL","text2":"60","text3":"BOXNUC8i7HNK","text4":"80"},{"text1":"BOXNUC7I5BNK","text2":"60","text3":"BOXNUC8i7HNKQC","text4":"80"},{"text1":"BOXNUC7I5BNKL","text2":"60","text3":"BOXNUC8I7HVK","text4":"80"},{"text1":"BOXNUC7i5BNKP","text2":"60","text3":"BOXNUC8i7HVK6","text4":"80"},{"text1":"BOXNUC7i5BNKPL","text2":"60","text3":"BOXNUC8i7HVKVA","text4":"80"},{"text1":"BOXNUC7i5BNKPR","text2":"60","text3":"BOXNUC8i7HVKVA6","text4":"80"}
>>>>>>> Stashed changes
]



const dataSource5 = [
<<<<<<< Updated upstream
  { text: "本季度积分将在<b><u>本季度</u></b>核算，并上传至贵司的<a href='https://prc-points.inteltechnologyprovider.com' target='_blank'>英特尔<sup>®</sup>渠道积分</a>账户，积分有效期为一年；" },
  {
    text:
      "贵司可以登录<a href='https://prc-points.inteltechnologyprovider.com'\
       target='_blank'>英特尔<sup>®</sup>渠道积分</a>查询积分并进行礼品兑换，可兑换的礼品有英特尔产品、商务用品及生活休闲用品等；本项目积分可兑换礼品仅提供给公司并非提供给个人。\
       为了确保礼品能准确及时的发送给贵司，请尽快登录<a href='http://www.intel.com/technologyprovider'\
       target='_blank'>英特尔<sup>®</sup>技术合作伙伴网站</a> 或 <a href='https://prc-points.inteltechnologyprovider.com' target='_blank'>英特尔<sup>®</sup>渠道积分网站</a>核实并更新贵司的联系信息；"
  },
  {
    text: "在贵司成功兑换礼品后，我们将尽快安排礼品发送；如贵司在1个月内未收到礼品，请立即联系英特尔客户支持。由于订单量较大，我们无法保证能够查询到超过2个月的订单递送情况，若有任何不便之处请谅解；"
  },
  { text: "凡参加本奖励计划所描述活动，或兑换本奖励计划所列积分，即表明贵司同意受本奖励计划中各项条款的调整和约束，并遵守英特尔®技术合作伙伴（“ITP”）项目的条款和条件，包括附录A与积分补充条款和条件（“ITP项目条款”）。该ITP项目条款为本奖励计划的一部分，其详情可在此网址查询：\
=======
  // { text: "本季度积分将在<b><u>本季度</u></b>核算，并上传至您的<a href='https://prc-points.inteltechnologyprovider.com' target='_blank'>英特尔<sup>®</sup>渠道积分</a>账户，积分有效期为一年；" },
  // {
  //   text:
  //     "您可以登录<a href='https://prc-points.inteltechnologyprovider.com'\
  //      target='_blank'>英特尔<sup>®</sup>渠道积分</a>查询积分并进行礼品兑换，可兑换的礼品有多种面值的亚马逊电子礼品卡\
  //      Intel产品等多种礼品；为了确保礼品能准确及时的发送给您，请尽快登录<a href='http://www.intel.com/technologyprovider'\
  //      target='_blank'>英特尔<sup>®</sup>技术合作伙伴网站</a> 或 <a href='https://prc-points.inteltechnologyprovider.com' target='_blank'>英特尔<sup>®</sup>渠道积分网站</a>核实并更新您的联系信息；"
  // },
  // {
  //   text: "在您成功兑换礼品后，我们将尽快安排礼品发送（如兑换亚马逊电子礼品卡，则由亚马逊通过电子邮件的方式发送充值密码）；如您在1个月内未收到礼品，请立即联系英特尔客户支持。由于订单量较大，我们无法保证能够查询到超过2个月的订单递送情况，若有任何不便之处请谅解；"
  // },
  { text: "凡参加本奖励计划所描述活动，或兑换本奖励计划所列积分，即表明您同意受本奖励计划中各项条款的调整和约束，并遵守英特尔®技术合作伙伴（“ITP”）项目的条款和条件，包括附录A与积分补充条款和条件（“ITP项目条款”）。该ITP项目条款为本奖励计划的一部分，其详情可在此网址查询：\
>>>>>>> Stashed changes
        <a href='https://www.intel.cn/content/www/cn/zh/technology-provider/legal/program-terms-and-conditions.html?_ga=2.161268861.1386006631.1522205920-1782132059.1444618124&elq_cid=1498511&erpm_id=2886134；' target='_blank'>https://www.intel.cn/content/www/cn/zh/technology-provider/legal/program-terms-and-conditions.html?_ga=2.161268861.1386006631.1522205920-1782132059.1444618124&elq_cid=1498511&erpm_id=2886134； </a>"
  },
  {
    text:
      "英特尔可以根据本活动规则以及ITP项目条款的内容，对贵司的级别状态进行定期评估，并按照本活动规则以及ITP项目条款进行相应的升级、降级操作。若本活动规则中的任何内容，与ITP项目条款存在冲突，应以本活动规则为准。任何英特尔商标许可协议和/或英特尔标识许可协议的条款均应优先于本活动规则中涉及上述协议内容的条款。除非英特尔授权代表以书面形式与贵司另有约定，英特尔的标准销售条款和条件将适用于任何英特尔产品购买或积分兑换等交易，且在适用中优先于任何其他协议；"
  },
  {
    text:
      "在适用法律所允许的范围内，本活动规则的最终解释权归英特尔所有；"
  },
  {
    text:
      "英特尔保留进一步调整、修改本次活动规则的权利。"
  }
];

export default {
  data() {
    return {
      dataSource5,
      column,
      tableData,
      columnBefore,
      dataBefore,
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

