<template>
  <table align="center" style="text-align: center; font-family: 微软雅黑; margin: 0 auto;">
    <tr>
      <td>
        <Nav></Nav>
        <ImageRow imgUrl="http://show.easeye.com.cn/fckattach/2018-04-17/e3b9e77152a2095d72521d1898764e2d/image/face9686a126c31e936870d7c956b970.jpg"></ImageRow>

        <StanceTable hasTop hasBottom>
          <tr>
            <td style="font-size:13px;text-align: left; font-family: 微软雅黑; line-height: 20px; font-weight: 600;"> 尊敬的英特尔<Sup></Sup>固态盘技术合作伙伴：</td>
          </tr>
          <tr height='10'></tr>
          <tr>
            <td style="font-size:12px;text-align: left; font-family: 微软雅黑; line-height: 24px;"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
              为了继续助力各位合作伙伴在新的季度里对英特尔<Sup></Sup>固态盘产品的销售，实现业务的快速增长，英特尔继续推出了“2019年第一季度英特尔<Sup></Sup>固态盘常规积分奖励计划”。
              通过该计划，您在参加英特尔<Sup></Sup>固态盘相关业务培训的基础上，通过销售指定型号的产品可获取丰厚的积分奖励，赶快行动吧！</td>
          </tr>
        </StanceTable>

        <StanceTable hasTop>
          <tr>
            <td width="95" style="font-size:13px;text-align: left; font-family: 微软雅黑; line-height: 22px;color: #000000; font-weight: 600">一、活动时间：</td>
            <td style="font-size:12px;text-align: left; font-family: 微软雅黑; line-height: 22px;">2019年第一季度</td>
          </tr>
          <tr>
            <td width="95" style="font-size:13px;text-align: left; font-family: 微软雅黑; line-height: 22px;color: #000000; font-weight: 600">二、活动对象：</td>
            <td style="font-size:12px;text-align: left; font-family: 微软雅黑; line-height: 22px;">英特尔<Sup></Sup>固态盘技术合作伙伴
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
                  英特尔<Sup></Sup>固态盘技术合作伙伴<u>需参加符合英特尔所要求形式与数量的关于英特尔<Sup></Sup>固态盘产品的培训方可获得销售积分奖励资格</u> ；
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
                  如至尊会员或菁英会员连续2个季度未达到其会员级别最低要求，将会被降级为菁英会员或注册会员，具体会员级别要求请咨询您的客户经理。
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
<!--         
        <StanceTable hasBottom>
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


        <ListTable :dataSource="dataSource5" :indexAddNumber="2"></ListTable>


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
    title: "类型",
    dataIndex: "text1",
    width: 70,
    align: 'left'
  },
  {
    title: "产品系列",
    dataIndex: "text2",
    align: 'left',
  },
  {
    title: "产品型号",
    dataIndex: "text3",
    // align: 'left',
    width: 125,

  },
  {
    title: "积分奖励",
    dataIndex: "text4",
    width: 60,
  },
  {
    title: "积分上限",
    dataIndex: "text5",
    width: 80,
    rowspan: 72,
  },
 
];
const tableData = [
  {"text1":"数据中心级固态盘","text2":"Intel<sup>®</sup> Optane™ SSD DC P4800X Series 1.5TB  ","text3":"SSDPE21K015TA01","text4":"400","text5":"至尊会员：100,000积分 菁英会员：50,000积分"},{"text1":"Intel<sup>®</sup> Optane™ SSD DC P4800X Series 1.5TB  ","text2":"SSDPE21K015TA10","text3":"400"},{"text1":"Intel<sup>®</sup> Optane™ SSD DC P4800X Series 1.5TB  ","text2":"SSDPED1K015TA01","text3":"400"},{"text1":"Intel<sup>®</sup> Optane™ SSD DC P4800X Series 1.5TB  ","text2":"SSDPED1K015TA10","text3":"400"},{"text1":"Intel<sup>®</sup> Optane™ SSD DC P4800X Series 375GB ","text2":"SSDPD21K375GA01","text3":"70"},{"text1":"Intel<sup>®</sup> Optane™ SSD DC P4800X Series 375GB ","text2":"SSDPE21K375GA10","text3":"70"},{"text1":"Intel<sup>®</sup> Optane™ SSD DC P4800X Series 375GB ","text2":"SSDPED1K375GA10","text3":"70"},{"text1":"Intel<sup>®</sup> Optane™ SSD DC P4800X Series 750GB ","text2":"SSDPE21K750GA01","text3":"150"},{"text1":"Intel<sup>®</sup> Optane™ SSD DC P4800X Series 750GB ","text2":"SSDPE21K750GA10","text3":"150"},{"text1":"Intel<sup>®</sup> Optane™ SSD DC P4800X Series 750GB ","text2":"SSDPED1K750GA01","text3":"150"},{"text1":"Intel<sup>®</sup> Optane™ SSD DC P4800X Series 750GB ","text2":"SSDPED1K750GA10","text3":"150"},{"text1":"Intel<sup>®</sup> SSD DC P4500 Series 1.0TB ","text2":"SSDPE2KX010T701","text3":"30"},{"text1":"Intel<sup>®</sup> SSD DC P4500 Series 1.0TB ","text2":"SSDPE2KX010T710","text3":"30"},{"text1":"Intel<sup>®</sup> SSD DC P4500 Series 2.0TB ","text2":"SSDPE2KX020T710","text3":"60"},{"text1":"Intel<sup>®</sup> SSD DC P4500 Series 2.0TB","text2":"SSDPE2KX020T701","text3":"60"},{"text1":"Intel<sup>®</sup> SSD DC P4500 Series 4.0TB ","text2":"SSDPE2KX040T701","text3":"120"},{"text1":"Intel<sup>®</sup> SSD DC P4500 Series 4.0TB ","text2":"SSDPE2KX040T710","text3":"120"},{"text1":"Intel<sup>®</sup> SSD DC P4500 Series 4.0TB ","text2":"SSDPEDKX040T701","text3":"120"},{"text1":"Intel<sup>®</sup> SSD DC P4500 Series 4.0TB ","text2":"SSDPEDKX040T710","text3":"120"},{"text1":"Intel<sup>®</sup> SSD DC P4500 Series 4.0TB ","text2":"SSDPERKX040T701","text3":"120"},{"text1":"Intel<sup>®</sup> SSD DC P4500 Series 4.0TB ","text2":"SSDPERKX040T710","text3":"120"},{"text1":"Intel<sup>®</sup> SSD DC P4500 Series 8.0TB ","text2":"SSDPE2KX080T701","text3":"240"},{"text1":"Intel<sup>®</sup> SSD DC P4500 Series 8.0TB ","text2":"SSDPE2KX080T710","text3":"240"},{"text1":"Intel<sup>®</sup> SSD DC P4500 Series 8.0TB ","text2":"SSDPERKX080T701","text3":"240"},{"text1":"Intel<sup>®</sup> SSD DC P4500 Series 8.0TB ","text2":"SSDPERKX080T710","text3":"140"},{"text1":"Intel<sup>®</sup> SSD DC P4510 Series 1.0TB ","text2":"SSDPE2KX010T801","text3":"60"},{"text1":"Intel<sup>®</sup> SSD DC P4510 Series 1.0TB ","text2":"SSDPE2KX010T810","text3":"60"},{"text1":"Intel<sup>®</sup> SSD DC P4510 Series 2.0TB ","text2":"SSDPE2KX020T801","text3":"110"},{"text1":"Intel<sup>®</sup> SSD DC P4510 Series 2.0TB ","text2":"SSDPE2KX020T810","text3":"110"},{"text1":"Intel<sup>®</sup> SSD DC P4510 Series 4.0TB ","text2":"SSDPE2KX040T801","text3":"220"},{"text1":"Intel<sup>®</sup> SSD DC P4510 Series 4.0TB ","text2":"SSDPE2KX040T810","text3":"220"},{"text1":"Intel<sup>®</sup> SSD DC P4510 Series 8.0TB ","text2":"SSDPE2KX080T801","text3":"440"},{"text1":"Intel<sup>®</sup> SSD DC P4510 Series 8.0TB ","text2":"SSDPE2KX080T810","text3":"440"},{"text1":"Intel<sup>®</sup> SSD DC P4600 Series 1.0TB ","text2":"SSDPE2KE010T701","text3":"45"},{"text1":"Intel<sup>®</sup> SSD DC P4600 Series 1.0TB ","text2":"SSDPE2KE010T710","text3":"45"},{"text1":"Intel<sup>®</sup> SSD DC P4600 Series 1.6TB ","text2":"SSDPE2KE016T701","text3":"70"},{"text1":"Intel<sup>®</sup> SSD DC P4600 Series 1.6TB","text2":"SSDPE2KE016T710","text3":"70"},{"text1":"Intel<sup>®</sup> SSD DC P4600 Series 2.0TB ","text2":"SSDPE2KE020T701","text3":"80"},{"text1":"Intel<sup>®</sup> SSD DC P4600 Series 2.0TB ","text2":"SSDPE2KE020T710","text3":"80"},{"text1":"Intel<sup>®</sup> SSD DC P4600 Series 2.0TB ","text2":"SSDPEDKE020T701","text3":"80"},{"text1":"Intel<sup>®</sup> SSD DC P4600 Series 2.0TB ","text2":"SSDPEDKE020T710","text3":"80"},{"text1":"Intel<sup>®</sup> SSD DC P4600 Series 3.2TB ","text2":"SSDPE2KE032T701","text3":"140"},{"text1":"Intel<sup>®</sup> SSD DC P4600 Series 3.2TB ","text2":"SSDPE2KE032T710","text3":"140"},{"text1":"Intel<sup>®</sup> SSD DC P4600 Series 4.0TB ","text2":"SSDPEDKE040T701","text3":"160"},{"text1":"Intel<sup>®</sup> SSD DC P4600 Series 4.0TB ","text2":"SSDPEDKE040T710","text3":"160"},{"text1":"Intel<sup>®</sup> SSD DC P4600 Series 6.4TB ","text2":"SSDPE2KE064T701","text3":"300"},{"text1":"Intel<sup>®</sup> SSD DC P4600 Series 6.4TB ","text2":"SSDPE2KE064T710","text3":"300"},{"text1":"Intel<sup>®</sup> SSD DC P4608 Series 6.4TB ","text2":"SSDPECKE064T701","text3":"80"},{"text1":"Intel<sup>®</sup> SSD DC P4608 Series 6.4TB ","text2":"SSDPECKE064T710","text3":"80"},{"text1":"Intel<sup>®</sup> SSD DC P4610 Series 1.6TB ","text2":"SSDPE2KE016T801","text3":"70"},{"text1":"Intel<sup>®</sup> SSD DC P4610 Series 3.2TB ","text2":"SSDPE2KE032T801","text3":"140"},{"text1":"Intel<sup>®</sup> SSD DC P4610 Series 6.4TB ","text2":"SSDPE2KE064T801","text3":"300"},{"text1":"Intel<sup>®</sup> SSD DC P4610 Series 7.6TB ","text2":"SSDPE2K076T801","text3":"400"},{"text1":"Intel<sup>®</sup> SSD DC S4500 Series 1.9TB ","text2":"SSDSC2KB019T7","text3":"50"},{"text1":"Intel<sup>®</sup> SSD DC S4500 Series 1.9TB ","text2":"SSDSCKKB019T7","text3":"50"},{"text1":"Intel<sup>®</sup> SSD DC S4500 Series 240GB ","text2":"SSDSC2KB240G7","text3":"10"},{"text1":"Intel<sup>®</sup> SSD DC S4500 Series 240GB ","text2":"SSDSC2KB240G701","text3":"10"},{"text1":"Intel<sup>®</sup> SSD DC S4500 Series 3.8TB ","text2":"SSDSC2KB038T7","text3":"90"},{"text1":"Intel<sup>®</sup> SSD DC S4500 Series 3.8TB ","text2":"SSDSC2KB038T701","text3":"90"},{"text1":"Intel<sup>®</sup> SSD DC S4500 Series 480GB ","text2":"SSDSC2KB480G7","text3":"15"},{"text1":"Intel<sup>®</sup> SSD DC S4500 Series 480GB ","text2":"SSDSC2KB480G701","text3":"15"},{"text1":"Intel<sup>®</sup> SSD DC S4500 Series 7.6TB ","text2":"SSDSC2KB076T701","text3":"170"},{"text1":"Intel<sup>®</sup> SSD DC S4500 Series 960GB ","text2":"SSDSC2KB960G7","text3":"25"},{"text1":"Intel<sup>®</sup> SSD DC S4500 Series 960GB ","text2":"SSDSC2KB960G701","text3":"25"},{"text1":"Intel<sup>®</sup> SSD DC S4600 Series 1.9TB ","text2":"SSDSC2KG019T7","text3":"70"},{"text1":"Intel<sup>®</sup> SSD DC S4600 Series 1.9TB ","text2":"SSDSC2KG019T701","text3":"70"},{"text1":"Intel<sup>®</sup> SSD DC S4600 Series 240GB ","text2":"SSDSC2KG240G7","text3":"10"},{"text1":"Intel<sup>®</sup> SSD DC S4600 Series 240GB ","text2":"SSDSC2KG240G701","text3":"10"},{"text1":"Intel<sup>®</sup> SSD DC S4600 Series 480GB ","text2":"SSDSC2KG480G7","text3":"20"},{"text1":"Intel<sup>®</sup> SSD DC S4600 Series 480GB ","text2":"SSDSC2KG480G701","text3":"20"},{"text1":"Intel<sup>®</sup> SSD DC S4600 Series 960GB ","text2":"SSDSC2KG960G7","text3":"35"},{"text1":"Intel<sup>®</sup> SSD DC S4600 Series 960GB ","text2":"SSDSC2KG960G701","text3":"35"},{"text1":"客户端固态盘","text2":"Intel<sup>®</sup> Optane™ Memory 16GB ","text3":"MEMPEK1W016GA","text4":"10","text5":"至尊会员：50,000积分菁英会员：20,000积分"},{"text1":"Intel<sup>®</sup> Optane™ Memory 16GB ","text2":"MEMPEK1W016GAX1","text3":"10"},{"text1":"Intel<sup>®</sup> Optane™ Memory 16GB ","text2":"MEMPEK1W016GAXT","text3":"10"},{"text1":"Intel<sup>®</sup> Optane™ Memory 32GB ","text2":"MEMPEK1W032GA","text3":"20"},{"text1":"Intel<sup>®</sup> Optane™ Memory 32GB ","text2":"MEMPEK1W032GAXT","text3":"20"},{"text1":"Intel<sup>®</sup> Optane™ Memory M10 Series 16GB ","text2":"MEMPEK1J016GA","text3":"10"},{"text1":"Intel<sup>®</sup> Optane™ Memory M10 Series 16GB ","text2":"MEMPEK1J016GA01","text3":"10"},{"text1":"Intel<sup>®</sup> Optane™ Memory M10 Series 32GB ","text2":"MEMPEK1J032GA01","text3":"20"},{"text1":"Intel<sup>®</sup> Optane™ Memory M10 Series 64GB ","text2":"MEMPEK1J064GA","text3":"40"},{"text1":"Intel<sup>®</sup> Optane™ Memory M10 Series 64GB ","text2":"MEMPEK1J064GA01","text3":"40"},{"text1":"Intel<sup>®</sup> Optane™ Memory M10 Series 64GB ","text2":"MEMPEK1J064GAXT","text3":"40"},{"text1":"Intel<sup>®</sup> Optane™ SSD 800P Series 120GB ","text2":"SSDPEK1W120GA","text3":"20"},{"text1":"Intel<sup>®</sup> Optane™ SSD 800P Series 120GB ","text2":"SSDPEK1W120GA01","text3":"20"},{"text1":"Intel<sup>®</sup> Optane™ SSD 800P Series 120GB ","text2":"SSDPEK1W120GAX1","text3":"20"},{"text1":"Intel<sup>®</sup> Optane™ SSD 800P Series 120GB ","text2":"SSDPEK1W120GAXT","text3":"20"},{"text1":"Intel<sup>®</sup> Optane™ SSD  800P Series 60GB ","text2":"SSDPEK1W060GA","text3":"10"},{"text1":"Intel<sup>®</sup> Optane™ SSD  800P Series 60GB ","text2":"SSDPEK1W060GA01","text3":"10"},{"text1":"Intel<sup>®</sup> Optane™ SSD  800P Series 60GB ","text2":"SSDPEK1W060GAXT","text3":"10"},{"text1":"Intel<sup>®</sup> Optane™ SSD 900P 280GB ","text2":"SSDPE21D280GAM3","text3":"35"},{"text1":"Intel<sup>®</sup> Optane™ SSD 900P 280GB ","text2":"SSDPE21D280GASM","text3":"35"},{"text1":"Intel<sup>®</sup> Optane™ SSD 900P 280GB ","text2":"SSDPE21D280GASX","text3":"35"},{"text1":"Intel<sup>®</sup> Optane™ SSD 900P 280GB ","text2":"SSDPE21D280GAX1","text3":"35"},{"text1":"Intel<sup>®</sup> Optane™ SSD 900P 280GB ","text2":"SSDPED1D280GASX","text3":"35"},{"text1":"Intel<sup>®</sup> Optane™ SSD 900P 280GB ","text2":"SSDPED1D280GAX1","text3":"35"},{"text1":"Intel<sup>®</sup> Optane™ SSD 900P 480GB ","text2":"SSDPED1D480GASX","text3":"55"},{"text1":"Intel<sup>®</sup> Optane™ SSD 900P 480GB ","text2":"SSDPED1D480GAX1","text3":"55"},{"text1":"Intel<sup>®</sup> Optane™ SSD 905P Series 1.5TB ","text2":"SSDPE21D015TAM3","text3":"200"},{"text1":"Intel<sup>®</sup> Optane™ SSD 905P Series 1.5TB ","text2":"SSDPE21D015TAX1","text3":"200"},{"text1":"Intel<sup>®</sup> Optane™ SSD 905P Series 1.5TB ","text2":"SSDPED1D015TAX1","text3":"200"},{"text1":"Intel<sup>®</sup> Optane™ SSD 905P Series 380GB ","text2":"SSDPEL1D380GA01","text3":"50"},{"text1":"Intel<sup>®</sup> Optane™ SSD 905P Series 380GB ","text2":"SSDPEL1D380GAX1","text3":"50"},{"text1":"Intel<sup>®</sup> Optane™ SSD 905P Series 480GB ","text2":"SSDPE21D480GAM3","text3":"60"},{"text1":"Intel<sup>®</sup> Optane™ SSD 905P Series 480GB ","text2":"SSDPE21D480GAX1","text3":"60"},{"text1":"Intel<sup>®</sup> Optane™ SSD 905P Series 960GB ","text2":"SSDPE21D960GAM3","text3":"130"},{"text1":"Intel<sup>®</sup> Optane™ SSD 905P Series 960GB ","text2":"SSDPE21D960GAX1","text3":"130"},{"text1":"Intel<sup>®</sup> Optane™ SSD 905P Series 960GB ","text2":"SSDPED1D960GAX1","text3":"130"},{"text1":"Intel<sup>®</sup> SSD 660p Series 1TB ","text2":"SSDPEKNW010T801","text3":"20"},{"text1":"Intel<sup>®</sup> SSD 660p Series 1TB ","text2":"SSDPEKNW010T8X1","text3":"20"},{"text1":"Intel<sup>®</sup> SSD 660p Series 1TB ","text2":"SSDPEKNW010T8XT","text3":"20"},{"text1":"Intel<sup>®</sup> SSD 660p Series 2TB ","text2":"SSDPEKNW020T801","text3":"30"},{"text1":"Intel<sup>®</sup> SSD 660p Series 2TB ","text2":"SSDPEKNW020T8X1","text3":"30"},{"text1":"Intel<sup>®</sup> SSD 660p Series 2TB ","text2":"SSDPEKNW020T8XT","text3":"30"},{"text1":"Intel<sup>®</sup> SSD 660p Series 512GB ","text2":"SSDPEKNW512G801","text3":"10"},{"text1":"Intel<sup>®</sup> SSD 660p Series 512GB ","text2":"SSDPEKNW512G810","text3":"10"},{"text1":"Intel<sup>®</sup> SSD 660p Series 512GB ","text2":"SSDPEKNW512G8X1","text3":"10"},{"text1":"Intel<sup>®</sup> SSD 660p Series 512GB ","text2":"SSDPEKNW512G8XT","text3":"10"},{"text1":"Intel<sup>®</sup> SSD 760p Series 1.024TB ","text2":"SSDPEKKW010T8X1","text3":"35"},{"text1":"Intel<sup>®</sup> SSD 760p Series 128GB ","text2":"SSDPEKKW128G801","text3":"10"},{"text1":"Intel<sup>®</sup> SSD 760p Series 128GB ","text2":"SSDPEKKW128G8XT","text3":"10"},{"text1":"Intel<sup>®</sup> SSD 760p Series 2.048TB ","text2":"SSDPEKKW020T8X1","text3":"45"},{"text1":"Intel<sup>®</sup> SSD 760p Series 256GB ","text2":"SSDPEKKW256G801","text3":"20"},{"text1":"Intel<sup>®</sup> SSD 760p Series 256GB ","text2":"SSDPEKKW256G8XT","text3":"20"},{"text1":"Intel<sup>®</sup> SSD 760p Series 512GB ","text2":"SSDPEKKW512G801","text3":"30"},{"text1":"Intel<sup>®</sup> SSD 760p Series 512GB ","text2":"SSDPEKKW512G8XT","text3":"30"},{"text1":"Intel<sup>®</sup> SSD D3-S4510 Series 1.9TB ","text2":"SSDSC2KB019T8","text3":"50"},{"text1":"Intel<sup>®</sup> SSD D3-S4510 Series 1.9TB ","text2":"SSDSC2KB019T801","text3":"50"},{"text1":"Intel<sup>®</sup> SSD D3-S4510 Series 3.8TB ","text2":"SSDSC2KB038T8","text3":"90"},{"text1":"Intel<sup>®</sup> SSD D3-S4510 Series 3.8TB ","text2":"SSDSC2KB038T801","text3":"90"},{"text1":"Intel<sup>®</sup> SSD D3-S4610 Series 960GB ","text2":"SSDSC2KG960G801","text3":"35"},{"text1":"Intel<sup>®</sup> SSD P4800X Series 375GB ","text2":"SSDPE21K375GA01","text3":"70"},{"text1":"Intel<sup>®</sup> SSD P4800X Series 375GB","text2":"SSDPED1K375GA01","text3":"70"},{"text1":"Intel<sup>®</sup> SSD D3-S4510 Series 240GB ","text2":"SSDSC2KB240G8","text3":"10"},{"text1":"Intel<sup>®</sup> SSD D3-S4510 Series 240GB ","text2":"SSDSC2KB240G801","text3":"10"},{"text1":"Intel<sup>®</sup> SSD D3-S4510 Series 480GB ","text2":"SSDSC2KB480G8","text3":"15"},{"text1":"Intel<sup>®</sup> SSD D3-S4510 Series 480GB ","text2":"SSDSC2KB480G801","text3":"15"},{"text1":"Intel<sup>®</sup> SSD D3-S4510 Series 960GB ","text2":"SSDSC2KB960G8","text3":"25"},{"text1":"Intel<sup>®</sup> SSD D3-S4510 Series 960GB ","text2":"SSDSC2KB960G801","text3":"25"},{"text1":"Intel<sup>®</sup> SSD D3-S4610 Series 1.9TB ","text2":"SSDSC2KG019T8","text3":"70"},{"text1":"Intel<sup>®</sup> SSD D3-S4610 Series 1.9TB ","text2":"SSDSC2KG019T801","text3":"70"},{"text1":"Intel<sup>®</sup> SSD D3-S4610 Series 240GB ","text2":"SSDSC2KG240G8","text3":"10"},{"text1":"Intel<sup>®</sup> SSD D3-S4610 Series 240GB ","text2":"SSDSC2KG240G801","text3":"10"},{"text1":"Intel<sup>®</sup> SSD D3-S4610 Series 3.8TB ","text2":"SSDSC2KG038T801","text3":"140"},{"text1":"Intel<sup>®</sup> SSD D3-S4610 Series 480GB ","text2":"SSDSC2KG480G8","text3":"20"},{"text1":"Intel<sup>®</sup> SSD D3-S4610 Series 480GB ","text2":"SSDSC2KG480G801","text3":"20"},{"text1":"Intel<sup>®</sup> SSD D3-S4610 Series 960GB ","text2":"SSDSC2KG960G8","text3":"35"}
]

const dataSource5 = [
  { text: "本季度积分将在<b>本季度</b>核算，并上传至您的<a href='https://prc-points.inteltechnologyprovider.com' target='_blank'>英特尔<sup>®</sup>渠道积分</a>账户，积分有效期为一年；" },
  {
    text:
      "您可以登录<a href='https://prc-points.inteltechnologyprovider.com'\
       target='_blank'>英特尔<sup>®</sup>渠道积分</a>查询积分并进行礼品兑换，可兑换的礼品有多种面值的亚马逊电子礼品卡\
       Intel产品等多种礼品；为了确保礼品能准确及时的发送给您，请尽快登录<a href='http://www.intel.com/technologyprovider'\
       target='_blank'>英特尔<sup>®</sup>技术合作伙伴网站</a> 或 <a href='https://prc-points.inteltechnologyprovider.com' target='_blank'>英特尔<sup>®</sup>渠道积分网站</a>核实并更新您的联系信息；"
  },
  {
    text: "在您成功兑换礼品后，我们将尽快安排礼品发送（如兑换亚马逊电子礼品卡，则由亚马逊通过电子邮件的方式发送充值密码）；如您在1个月内未收到礼品，请立即联系英特尔客户支持。由于订单量较大，我们无法保证能够查询到超过2个月的订单递送情况，若有任何不便之处请谅解；"
  },
  { text: "凡参加本活动规则所描述活动，或兑换本活动规则所列积分，即表明您同意受本活动规则中各项条款的调整和约束，并遵守英特尔<sup>®</sup>技术合作伙伴（“ITP”）项目的条款和条件，包括附录A与积分补充条款和条件（“ITP项目条款”）。该ITP项目条款为本活动规则的一部分，其详情可在此网址查询：\
        <a href='https://www.intel.cn/content/www/cn/zh/technology-provider/legal/program-terms-and-conditions.html?_ga=2.161268861.1386006631.1522205920-1782132059.1444618124&elq_cid=1498511&erpm_id=2886134；' target='_blank'>https://www.intel.cn/content/www/cn/zh/technology-provider/legal/program-terms-and-conditions.html?_ga=2.161268861.1386006631.1522205920-1782132059.1444618124&elq_cid=1498511&erpm_id=2886134； </a>"
  },
  {
    text:
      "英特尔可以根据本活动规则以及ITP项目条款的内容，对您的级别状态进行定期评估，并按照本活动规则以及ITP项目条款进行相应的升级、降级操作。若本活动规则中的任何内容，与ITP项目条款存在冲突，应以本活动规则为准。任何英特尔商标许可协议和/或英特尔标识许可协议的条款均应优先于本活动规则中涉及上述协议内容的条款。除非英特尔授权代表以书面形式与您另有约定，英特尔的标准销售条款和条件将适用于任何英特尔产品购买或积分兑换等交易，且在适用中优先于任何其他协议；"
  },
  {
    text:
      "本次活动最终解释权归英特尔所有；"
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

