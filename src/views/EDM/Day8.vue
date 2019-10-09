<template>
  <table align="center" style="text-align: center; font-family: 微软雅黑; margin: 0 auto;">
    <tr>
      <td>
        <Nav></Nav>
        <ImageRow :imgUrl="imgSSD"></ImageRow>

        <StanceTable hasTop hasBottom>
          <tr>
            <td style="font-size:13px;text-align: left; font-family: 微软雅黑; line-height: 20px; font-weight: 600;">尊敬的英特尔<Sup></Sup>固态盘技术合作伙伴：</td>
          </tr>
          <tr height='10'></tr>
          <tr>
            <td style="font-size:12px;text-align: left; font-family: 微软雅黑; line-height: 24px;"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
              为了继续助力各位合作伙伴在新的季度里对英特尔<Sup></Sup>固态盘产品的销售，实现业务的快速增长，英特尔继续推出了“2019年第四季度英特尔<Sup></Sup>固态盘常规积分奖励计划”。通过该计划，贵司在参加英特尔<Sup></Sup>固态盘相关业务培训的基础上，通过销售指定型号的产品可获取丰厚的积分奖励，赶快行动吧！
            </td>
          </tr>
        </StanceTable>

        <StanceTable hasTop>
          <tr>
            <td width="95" style="font-size:13px;text-align: left; font-family: 微软雅黑; line-height: 22px;color: #000000; font-weight: 600">一、活动时间：</td>
            <td style="font-size:12px;text-align: left; font-family: 微软雅黑; line-height: 22px;">2019年第四季度</td>
          </tr>
          <tr>
            <td width="95" style="font-size:13px;text-align: left; font-family: 微软雅黑; line-height: 22px;color: #000000; font-weight: 600">二、参与资格</td>
            <td style="font-size:12px;text-align: left; font-family: 微软雅黑; line-height: 22px;">英特尔<Sup></Sup>固态盘技术合作伙伴至尊会员和菁英会员</td>
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
                  英特尔<Sup></Sup>固态盘技术合作伙伴<u>需参加符合英特尔所要求形式与数量的关于英特尔<Sup></Sup>固态盘产品的培训方可获得销售积分奖励资格；</u>
                </IconText>
                <IconText>
                  客户端固态盘产品（英特尔<Sup></Sup>傲腾™内存12款产品除外）以英特尔扫描系统的有效扫描数据作为奖励依据，其他产品以英特尔授权总代理提供的销售数据为奖励依据；具体要求详见以下奖励规则。
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
                <IconText>
                  如至尊会员或菁英会员连续2个季度未达到其会员级别最低要求，将会被降级为菁英会员或注册会员。如注册会员当季度达到菁英会员或至尊会员级别要求，下季度可被提名为菁英会员或至尊会员；如菁英会员当季度达到至尊会员要求，下季度可被提名为至尊会员。升降级生效时间为下一季度的第一个月底；具体会员级别要求如下：
                </IconText>
              </StanceTable>
            </td>
          </tr>
          <!-- 页面不同而多余的数据  -->
          <tr>
            <td width="30"></td>
            <td align="center">
              <DataTable :column="columnBefore" :dataSource="dataBefore" width="400"></DataTable>
            </td>
          </tr>
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

        <StanceTable>
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
        </StanceTable>

        <StanceTable>
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

        </StanceTable>


        <ListTable :dataSource="dataSource5" :indexAddNumber="2"></ListTable>


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
  {"text1":"销售收益要求($)","text2":"≥0","text3":"≥62,500"},{"text1":"培训积分要求","text2":"≥13","text3":"≥25"}
]
const column = [
  {
    title: '奖励依据类型',
    dataIndex: 'text1',
    align: 'left',
    width: 60,
  },
  {
    title: "产品系列",
    dataIndex: "text2",
    align: 'left'
  },
  {
    title: "产品型号",
    dataIndex: "text3",
    align: 'left',
    width: 125,
  },
  {
    title: "积分奖励",
    dataIndex: "text4",
    width: 35,
  },
  {
    title: "积分上限",
    dataIndex: "text5",
    width: 80,
    rowspan: 199,
  },
 
];

const tableData = [
  {"text1":"以英特尔授权总代理提供的销售数据为奖励依据","text2":"Intel<sup>®</sup> Optane™ SSD DC P4800X Series with Intel<sup>®</sup> Memory Drive Technology 1.5TB ","text3":"MDTPE21K015TA01","text4":"60","text5":"数据中心级固态盘产品，至尊会员：100,000积分 菁英会员：50,000积分"},{"text1":"Intel<sup>®</sup> Optane™ SSD DC P4800X Series with Intel<sup>®</sup> Memory Drive Technology 1.5TB ","text2":"MDTPE21K015TA10","text3":"60"},{"text1":"Intel<sup>®</sup> Optane™ SSD DC P4800X Series with Intel<sup>®</sup> Memory Drive Technology 375GB ","text2":"MDTPE21K375GA01","text3":"20"},{"text1":"Intel<sup>®</sup> Optane™ SSD DC P4800X Series with Intel<sup>®</sup> Memory Drive Technology 375GB ","text2":"MDTPE21K375GA10","text3":"20"},{"text1":"Intel<sup>®</sup> Optane™ SSD DC P4800X Series with Intel<sup>®</sup> Memory Drive Technology 750GB ","text2":"MDTPE21K750GA01","text3":"30"},{"text1":"Intel<sup>®</sup> Optane™ SSD DC P4800X Series with Intel<sup>®</sup> Memory Drive Technology 750GB ","text2":"MDTPE21K750GA10","text3":"30"},{"text1":"Intel<sup>®</sup> Optane™ SSD DC P4800X Series with Intel<sup>®</sup> Memory Drive Technology 1.5TB ","text2":"MDTPED1K015TA01","text3":"60"},{"text1":"Intel<sup>®</sup> Optane™ SSD DC P4800X Series with Intel<sup>®</sup> Memory Drive Technology 1.5TB ","text2":"MDTPED1K015TA10","text3":"60"},{"text1":"Intel<sup>®</sup> Optane™ SSD DC P4800X Series with Intel<sup>®</sup> Memory Drive Technology 375GB ","text2":"MDTPED1K375GA01","text3":"20"},{"text1":"Intel<sup>®</sup> Optane™ SSD DC P4800X Series with Intel<sup>®</sup> Memory Drive Technology 375GB ","text2":"MDTPED1K375GA10","text3":"20"},{"text1":"Intel<sup>®</sup> Optane™ SSD DC P4800X Series with Intel<sup>®</sup> Memory Drive Technology 750GB ","text2":"MDTPED1K750GA01","text3":"30"},{"text1":"Intel<sup>®</sup> Optane™ SSD DC P4800X Series with Intel<sup>®</sup> Memory Drive Technology 750GB ","text2":"MDTPED1K750GA10","text3":"30"},{"text1":"Intel<sup>®</sup> Optane™ SSD DC P4800X Series 375GB ","text2":"SSDPD21K375GA01","text3":"70"},{"text1":"Intel<sup>®</sup> Optane™ SSD DC P4800X Series 1.5TB ","text2":"SSDPE21K015TA01","text3":"400"},{"text1":"Intel<sup>®</sup> Optane™ SSD DC P4800X Series 1.5TB ","text2":"SSDPE21K015TA10","text3":"400"},{"text1":"Intel<sup>®</sup> Optane™ SSD DC P4801X Series 100GB ","text2":"SSDPE21K100GA01","text3":"25"},{"text1":"Intel<sup>®</sup> Optane™ SSD DC P4801X Series 100GB ","text2":"SSDPE21K100GA10","text3":"25"},{"text1":"Intel<sup>®</sup> Optane™ SSD DC P4800X Series 375GB ","text2":"SSDPE21K375GA01","text3":"70"},{"text1":"Intel<sup>®</sup> Optane™ SSD DC P4800X Series 375GB ","text2":"SSDPE21K375GA10","text3":"70"},{"text1":"Intel<sup>®</sup> Optane™ SSD DC P4800X Series 750GB ","text2":"SSDPE21K750GA01","text3":"150"},{"text1":"Intel<sup>®</sup> Optane™ SSD DC P4800X Series 750GB ","text2":"SSDPE21K750GA10","text3":"150"},{"text1":"Intel<sup>®</sup> SSD DC P4610 Series 1.6TB ","text2":"SSDPE2KE016T801","text3":"70"},{"text1":"Intel<sup>®</sup> SSD DC P4610 Series 3.2TB ","text2":"SSDPE2KE032T801","text3":"140"},{"text1":"Intel<sup>®</sup> SSD DC P4610 Series 6.4TB ","text2":"SSDPE2KE064T801","text3":"300"},{"text1":"Intel<sup>®</sup> SSD DC P4610 Series 7.6TB ","text2":"SSDPE2KE076T801","text3":"400"},{"text1":"Intel<sup>®</sup> SSD DC P4510 Series 1.0TB ","text2":"SSDPE2KX010T801","text3":"60"},{"text1":"Intel<sup>®</sup> SSD DC P4510 Series 1.0TB ","text2":"SSDPE2KX010T810","text3":"60"},{"text1":"Intel<sup>®</sup> SSD DC P4510 Series 2.0TB ","text2":"SSDPE2KX020T801","text3":"110"},{"text1":"Intel<sup>®</sup> SSD DC P4510 Series 2.0TB ","text2":"SSDPE2KX020T810","text3":"110"},{"text1":"Intel<sup>®</sup> SSD DC P4510 Series 4.0TB ","text2":"SSDPE2KX040T801","text3":"220"},{"text1":"Intel<sup>®</sup> SSD DC P4510 Series 4.0TB ","text2":"SSDPE2KX040T810","text3":"220"},{"text1":"Intel<sup>®</sup> SSD DC P4510 Series 8.0TB ","text2":"SSDPE2KX080T801","text3":"440"},{"text1":"Intel<sup>®</sup> SSD DC P4510 Series 8.0TB ","text2":"SSDPE2KX080T810","text3":"440"},{"text1":"Intel<sup>®</sup> SSD D5 P4420 Series 7.6TB ","text2":"SSDPE2NU076T801","text3":"200"},{"text1":"Intel<sup>®</sup> SSD D5 P4320 Series 7.6TB ","text2":"SSDPE2NV076T801","text3":"180"},{"text1":"Intel<sup>®</sup> SSD D5 P4320 Series 7.6TB ","text2":"SSDPE2NV076T810","text3":"180"},{"text1":"Intel<sup>®</sup> SSD D5 P4326 Series 15TB ","text2":"SSDPE2NV153T801","text3":"330"},{"text1":"Intel<sup>®</sup> SSD D5 P4326 Series 15TB ","text2":"SSDPE2NV153T810","text3":"330"},{"text1":"Intel<sup>®</sup> SSD DC P4608 Series 6.4TB ","text2":"SSDPECKE064T701","text3":"80"},{"text1":"Intel<sup>®</sup> SSD DC P4608 Series 6.4TB ","text2":"SSDPECKE064T710","text3":"80"},{"text1":"Intel<sup>®</sup> Optane™ SSD DC P4800X Series 1.5TB ","text2":"SSDPED1K015TA01","text3":"400"},{"text1":"Intel<sup>®</sup> Optane™ SSD DC P4800X Series 1.5TB ","text2":"SSDPED1K015TA10","text3":"400"},{"text1":"Intel<sup>®</sup> Optane™ SSD DC P4800X Series 375GB ","text2":"SSDPED1K375GA01","text3":"70"},{"text1":"Intel<sup>®</sup> Optane™ SSD DC P4800X Series 375GB ","text2":"SSDPED1K375GA10","text3":"70"},{"text1":"Intel<sup>®</sup> Optane™ SSD DC P4800X Series 750GB ","text2":"SSDPED1K750GA01","text3":"150"},{"text1":"Intel<sup>®</sup> Optane™ SSD DC P4800X Series 750GB ","text2":"SSDPED1K750GA10","text3":"150"},{"text1":"Intel<sup>®</sup> SSD DC P4101 Series 1.0TB ","text2":"SSDPEKKA010T801","text3":"30"},{"text1":"Intel<sup>®</sup> SSD DC P4101 Series 2.0TB ","text2":"SSDPEKKA020T801","text3":"60"},{"text1":"Intel<sup>®</sup> SSD DC P4101 Series 128GB ","text2":"SSDPEKKA128G801","text3":"5"},{"text1":"Intel<sup>®</sup> SSD DC P4101 Series 256GB ","text2":"SSDPEKKA256G801","text3":"10"},{"text1":"Intel<sup>®</sup> SSD DC P4101 Series 512GB ","text2":"SSDPEKKA512G801","text3":"15"},{"text1":"Intel<sup>®</sup> Optane™ SSD DC P4801X Series 100GB ","text2":"SSDPEL1K100GA01","text3":"25"},{"text1":"Intel<sup>®</sup> Optane™ SSD DC P4801X Series 200GB ","text2":"SSDPEL1K200GA01","text3":"50"},{"text1":"Intel<sup>®</sup> Optane™ SSD DC P4801X Series 375GB ","text2":"SSDPEL1K375GA01","text3":"110"},{"text1":"Intel<sup>®</sup> SSD D3-S4510 Series 1.9TB","text2":"SSDSC2KB019T8","text3":"50"},{"text1":"Intel<sup>®</sup> SSD D3-S4510 Series 1.9TB","text2":"SSDSC2KB019T801","text3":"50"},{"text1":"Intel<sup>®</sup> SSD D3-S4510 Series 3.8TB","text2":"SSDSC2KB038T8","text3":"90"},{"text1":"Intel<sup>®</sup> SSD D3-S4510 Series 3.8TB","text2":"SSDSC2KB038T801","text3":"90"},{"text1":"Intel<sup>®</sup> SSD D3-S4510 Series 240GB","text2":"SSDSC2KB240G8","text3":"10"},{"text1":"Intel<sup>®</sup> SSD D3-S4510 Series 240GB","text2":"SSDSC2KB240G801","text3":"10"},{"text1":"Intel<sup>®</sup> SSD D3-S4510 Series 480GB","text2":"SSDSC2KB480G8","text3":"15"},{"text1":"Intel<sup>®</sup> SSD D3-S4510 Series 480GB","text2":"SSDSC2KB480G801","text3":"15"},{"text1":"Intel<sup>®</sup> SSD D3-S4510 Series 960G","text2":"SSDSC2KB960G8","text3":"25"},{"text1":"Intel<sup>®</sup> SSD D3-S4510 Series 960GB","text2":"SSDSC2KB960G801","text3":"25"},{"text1":"Intel<sup>®</sup> SSD D3-S4610 Series 1.9TB","text2":"SSDSC2KG019T8","text3":"70"},{"text1":"Intel<sup>®</sup> SSD D3-S4610 Series 1.9TB","text2":"SSDSC2KG019T801","text3":"70"},{"text1":"Intel<sup>®</sup> SSD D3-S4610 Series 3.8TB","text2":"SSDSC2KG038T801","text3":"140"},{"text1":"Intel<sup>®</sup> SSD D3-S4610 Series 240GB","text2":"SSDSC2KG240G8","text3":"10"},{"text1":"Intel<sup>®</sup> SSD D3-S4610 Series 240GB","text2":"SSDSC2KG240G801","text3":"10"},{"text1":"Intel<sup>®</sup> SSD D3-S4610 Series 480G","text2":"SSDSC2KG480G8","text3":"20"},{"text1":"Intel<sup>®</sup> SSD D3-S4610 Series 480GB","text2":"SSDSC2KG480G801","text3":"20"},{"text1":"Intel<sup>®</sup> SSD D3-S4610 Series 960GB","text2":"SSDSC2KG960G8","text3":"35"},{"text1":"Intel<sup>®</sup> SSD D3-S4610 Series 960GB","text2":"SSDSC2KG960G801","text3":"35"},{"text1":"Intel<sup>®</sup> Optane™ Memory M10 Series 16GB ","text2":"MEMPEK1J016GA","text3":"10","text4":"客户端固态盘产品，至尊会员：50,000积分菁英会员：20,000积分"},{"text1":"Intel<sup>®</sup> Optane™ Memory M10 Series 16GB ","text2":"MEMPEK1J016GA01","text3":"10"},{"text1":"Intel<sup>®</sup> Optane™ Memory M10 Series 32GB ","text2":"MEMPEK1J032GA","text3":"20"},{"text1":"Intel<sup>®</sup> Optane™ Memory M10 Series 32GB ","text2":"MEMPEK1J032GA01","text3":"20"},{"text1":"Intel<sup>®</sup> Optane™ Memory M10 Series 64GB ","text2":"MEMPEK1J064GA","text3":"40"},{"text1":"Intel<sup>®</sup> Optane™ Memory M10 Series 64GB ","text2":"MEMPEK1J064GA01","text3":"40"},{"text1":"Intel<sup>®</sup> Optane™ Memory M10 Series 64GB ","text2":"MEMPEK1J064GAXT","text3":"40"},{"text1":"Intel<sup>®</sup> Optane™ Memory Series 16GB ","text2":"MEMPEK1W016GA","text3":"10"},{"text1":"Intel<sup>®</sup> Optane™ Memory Series 16GB ","text2":"MEMPEK1W016GAXT","text3":"10"},{"text1":"Intel<sup>®</sup> Optane™ Memory Series 32GB ","text2":"MEMPEK1W032GA","text3":"20"},{"text1":"Intel<sup>®</sup> Optane™ Memory Series 32GB ","text2":"MEMPEK1W032GA01","text3":"20"},{"text1":"Intel<sup>®</sup> Optane™ Memory Series 32GB ","text2":"MEMPEK1W032GAXT","text3":"20"},{"text1":"以英特尔扫描系统的有效扫描数据作为奖励依据","text2":"Intel<sup>®</sup> Optane™ SSD 905P Series 1.5TB ","text3":"SSDPE21D015TAM3","text4":"200"},{"text1":"Intel<sup>®</sup> Optane™ SSD 905P Series 1.5TB ","text2":"SSDPE21D015TAX1","text3":"200"},{"text1":"Intel<sup>®</sup> Optane™ SSD 900P Series 280GB ","text2":"SSDPE21D280GAM3","text3":"35"},{"text1":"Intel<sup>®</sup> Optane™ SSD 900P Series 280GB ","text2":"SSDPE21D280GASM","text3":"35"},{"text1":"Intel<sup>®</sup> Optane™ SSD 900P Series 280GB ","text2":"SSDPE21D280GASX","text3":"35"},{"text1":"Intel<sup>®</sup> Optane™ SSD 900P Series 280GB ","text2":"SSDPE21D280GAX1","text3":"35"},{"text1":"Intel<sup>®</sup> Optane™ SSD 905P Series 480GB ","text2":"SSDPE21D480GAM3","text3":"60"},{"text1":"Intel<sup>®</sup> Optane™ SSD 905P Series 480GB ","text2":"SSDPE21D480GAX1","text3":"60"},{"text1":"Intel<sup>®</sup> Optane™ SSD 905P Series 960GB ","text2":"SSDPE21D960GAM3","text3":"130"},{"text1":"Intel<sup>®</sup> Optane™ SSD 905P Series 960GB ","text2":"SSDPE21D960GAX1","text3":"130"},{"text1":"Intel<sup>®</sup> Optane™ SSD 905P Series 1.5TB ","text2":"SSDPED1D015TAX1","text3":"200"},{"text1":"Intel<sup>®</sup> Optane™ SSD 900P Series 280GB ","text2":"SSDPED1D280GASX","text3":"35"},{"text1":"Intel<sup>®</sup> Optane™ SSD 900P Series 280GB ","text2":"SSDPED1D280GAX1","text3":"35"},{"text1":"Intel<sup>®</sup> Optane™ SSD 900P Series 480GB ","text2":"SSDPED1D480GASX","text3":"55"},{"text1":"Intel<sup>®</sup> Optane™ SSD 900P Series 480GB ","text2":"SSDPED1D480GAX1","text3":"55"},{"text1":"Intel<sup>®</sup> Optane™ SSD 905P Series 960GB ","text2":"SSDPED1D960GAX1","text3":"130"},{"text1":"Intel<sup>®</sup> Optane™ SSD 800P Series 60GB ","text2":"SSDPEK1W060GA","text3":"10"},{"text1":"Intel<sup>®</sup> Optane™ SSD 800P Series 60GB ","text2":"SSDPEK1W060GA01","text3":"10"},{"text1":"Intel<sup>®</sup> Optane™ SSD 800P Series 60GB ","text2":"SSDPEK1W060GAXT","text3":"10"},{"text1":"Intel<sup>®</sup> Optane™ SSD 800P Series 120GB ","text2":"SSDPEK1W120GA","text3":"20"},{"text1":"Intel<sup>®</sup> Optane™ SSD 800P Series 120GB ","text2":"SSDPEK1W120GA01","text3":"20"},{"text1":"Intel<sup>®</sup> Optane™ SSD 800P Series 120GB ","text2":"SSDPEK1W120GAX1","text3":"20"},{"text1":"Intel<sup>®</sup> Optane™ SSD 800P Series 120GB ","text2":"SSDPEK1W120GAXT","text3":"20"},{"text1":"Intel<sup>®</sup> SSD 760p Series 1.0TB ","text2":"SSDPEKKW010T8X1","text3":"35"},{"text1":"Intel<sup>®</sup> SSD 760p Series 2.0TB ","text2":"SSDPEKKW020T8X1","text3":"45"},{"text1":"Intel<sup>®</sup> SSD 760p Series 128GB ","text2":"SSDPEKKW128G801","text3":"10"},{"text1":"Intel<sup>®</sup> SSD 760p Series 128GB ","text2":"SSDPEKKW128G8XT","text3":"10"},{"text1":"Intel<sup>®</sup> SSD 760p Series 256GB ","text2":"SSDPEKKW256G801","text3":"20"},{"text1":"Intel<sup>®</sup> SSD 760p Series 256GB ","text2":"SSDPEKKW256G8XT","text3":"20"},{"text1":"Intel<sup>®</sup> SSD 760p Series 512GB ","text2":"SSDPEKKW512G801","text3":"30"},{"text1":"Intel<sup>®</sup> SSD 760p Series 512GB ","text2":"SSDPEKKW512G8XT","text3":"30"},{"text1":"Intel<sup>®</sup> SSD 660p Series 1.0TB ","text2":"SSDPEKNW010T801","text3":"20"},{"text1":"Intel<sup>®</sup> SSD 660p Series 1.0TB ","text2":"SSDPEKNW010T8X1","text3":"20"},{"text1":"Intel<sup>®</sup> SSD 660p Series 1.0TB ","text2":"SSDPEKNW010T8XT","text3":"20"},{"text1":"Intel<sup>®</sup> SSD 660p Series 2.0TB ","text2":"SSDPEKNW020T801","text3":"30"},{"text1":"Intel<sup>®</sup> SSD 660p Series 2.0TB ","text2":"SSDPEKNW020T8X1","text3":"30"},{"text1":"Intel<sup>®</sup> SSD 660p Series 2.0TB ","text2":"SSDPEKNW020T8XT","text3":"30"},{"text1":"Intel<sup>®</sup> SSD 660p Series 512GB ","text2":"SSDPEKNW512G801","text3":"10"},{"text1":"Intel<sup>®</sup> SSD 660p Series 512GB ","text2":"SSDPEKNW512G810","text3":"10"},{"text1":"Intel<sup>®</sup> SSD 660p Series 512GB ","text2":"SSDPEKNW512G8X1","text3":"10"},{"text1":"Intel<sup>®</sup> SSD 660p Series 512GB ","text2":"SSDPEKNW512G8XT","text3":"10"},{"text1":"Intel<sup>®</sup> Optane™ SSD 905P Series 380GB ","text2":"SSDPEL1D380GA01","text3":"50"},{"text1":"Intel<sup>®</sup> Optane™ SSD 905P Series 380GB ","text2":"SSDPEL1D380GAX1","text3":"50"}
]



const dataSource5 = [
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
      imgNUC: 'http://show.easeye.com.cn/fckattach/2019-09-20/e3b9e77152a2095d72521d1898764e2d/image/9bf1eb21f2a3a5fb7fc955e0c7fc0a7a_easeyethumbnail.png',
      imgSSD: 'http://show.easeye.com.cn/fckattach/2019-09-25/e3b9e77152a2095d72521d1898764e2d/image/7d459ca44713460c593152d1869be9b1_easeyethumbnail.png',
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

