<template>
  <table align="center" style="text-align: center; font-family: 微软雅黑; margin: 0 auto;">
    <tr>
      <td>
        <Nav></Nav>
        <ImageRow imgUrl="http://show.easeye.com.cn/fckattach/2018-04-17/e3b9e77152a2095d72521d1898764e2d/image/face9686a126c31e936870d7c956b970.jpg"></ImageRow>

        <StanceTable hasTop hasBottom>
          <tr>
            <td style="font-size:13px;text-align: left; font-family: 微软雅黑; line-height: 20px; font-weight: 600;">尊敬的英特尔<Sup></Sup>NUC技术合作伙伴:</td>
          </tr>
          <tr height='10'></tr>
          <tr>
            <td style="font-size:12px;text-align: left; font-family: 微软雅黑; line-height: 24px;"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
              在新的季度里，为了继续助力各位合作伙伴在英特尔<Sup></Sup>NUC产品的销售，实现业务持续快速增长，英特尔推出了“2019年第二季度英特尔<Sup></Sup>NUC常规积分奖励计划”。通过该计划，您在参加英特尔<Sup></Sup>NUC相关业务培训的基础上，通过销售指定型号的NUC可获取丰厚的积分奖励，赶快行动吧！
            </td>
          </tr>
        </StanceTable>

        <StanceTable hasTop>
          <tr>
            <td width="95" style="font-size:13px;text-align: left; font-family: 微软雅黑; line-height: 22px;color: #000000; font-weight: 600">一、活动时间：</td>
            <td style="font-size:12px;text-align: left; font-family: 微软雅黑; line-height: 22px;">2019年第二季度</td>
          </tr>
          <tr>
            <td width="95" style="font-size:13px;text-align: left; font-family: 微软雅黑; line-height: 22px;color: #000000; font-weight: 600">二、活动目标：</td>
            <td style="font-size:12px;text-align: left; font-family: 微软雅黑; line-height: 22px;">英特尔渠道销售经理根据上一季度的情况在系统中做出相应级别提名的英特尔<Sup></Sup>NUC技术合作伙伴</td>
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
                  英特尔<Sup></Sup>NUC技术合作伙伴<u>需参加符合英特尔所要求形式与数量的关于英特尔NUC产品的培训方可获得销售积分奖励资格；</u> ；
                </IconText>
                <IconText>
                  最终结果以英特尔扫描系统的有效扫描数据作为奖励依据
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



        <StanceTable>
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
            <td style="font-size:15px;text-align: left; font-family: 微软雅黑; line-height: 20px; font-weight: 600;">温馨提示：请确保您的账户信息安全。</td>
          </tr>
          <tr height='10'></tr>
          <tr>
            <td style="font-size:12px;text-align: left; font-family: 微软雅黑; line-height: 24px;"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
              依照英特尔的网站使用条款 <a href="https://www.intel.cn/content/www/cn/zh/legal/terms-of-use.html" target="_blank">（https://www.intel.cn/content/www/cn/zh/legal/terms-of-use.html）</a>，
              凡以您的账户在英特尔网站上进行的操作，均视为您的操作并由您负责；如果您的账户、密码等信息有误或发生泄露，导致您的权益受损，请理解英特尔将不承担任何责任。</td>
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
    title: "CPU型号",
    dataIndex: "text1",
    width: 130,
    // align: 'left'
  },
  {
    title: "产品型号",
    dataIndex: "text2",
    align: 'left',
  },
  {
    title: "积分奖励（分/台）",
    dataIndex: "text3",
    // align: 'left',
    width: 130,

  },
  {
    title: "积分上限",
    dataIndex: "text4",
    width: 100,
    rowspan: 167
  },
  // {
  //   title: "积分上限",
  //   dataIndex: "text5",
  //   width: 90,
  //   rowspan: 53,
  // },
 
];
const tableData = [
  {"text1":"Core i3","text2":"BLKNUC7i3BNB","text3":"14","text4":"至尊会员：<br/>100,000积分<br/>菁英会员：<br/>50,000积分"},{"text1":"Core i3","text2":"BLKNUC7i3DNBE","text3":"20"},{"text1":"Core i3","text2":"BLKNUC7i3DNH1E","text3":"20"},{"text1":"Core i3","text2":"BLKNUC7i3DNH2E","text3":"20"},{"text1":"Core i3","text2":"BLKNUC7i3DNH3E","text3":"20"},{"text1":"Core i3","text2":"BLKNUC7i3DNH4E","text3":"20"},{"text1":"Core i3","text2":"BLKNUC7i3DNHE","text3":"20"},{"text1":"Core i3","text2":"BLKNUC7i3DNHNC","text3":"20"},{"text1":"Core i3","text2":"BLKNUC7i3DNHNC1","text3":"20"},{"text1":"Core i3","text2":"BLKNUC7i3DNHNC2","text3":"20"},{"text1":"Core i3","text2":"BLKNUC7i3DNHNC3","text3":"20"},{"text1":"Core i3","text2":"BLKNUC7i3DNHNC4","text3":"20"},{"text1":"Core i3","text2":"BLKNUC7i3DNHNC5","text3":"20"},{"text1":"Core i3","text2":"BLKNUC7i3DNK1E","text3":"20"},{"text1":"Core i3","text2":"BLKNUC7i3DNK2E","text3":"20"},{"text1":"Core i3","text2":"BLKNUC7i3DNK3E","text3":"20"},{"text1":"Core i3","text2":"BLKNUC7i3DNK4E","text3":"20"},{"text1":"Core i3","text2":"BLKNUC7i3DNK9E","text3":"20"},{"text1":"Core i3","text2":"BLKNUC7i3DNKE","text3":"20"},{"text1":"Core i5","text2":"BLKNUC7i5BNB","text3":"21"},{"text1":"Core i5","text2":"BLKNUC7i5DNBE","text3":"30"},{"text1":"Core i5","text2":"BLKNUC7i5DNH1E","text3":"30"},{"text1":"Core i5","text2":"BLKNUC7i5DNH2E","text3":"30"},{"text1":"Core i5","text2":"BLKNUC7i5DNH3E","text3":"30"},{"text1":"Core i5","text2":"BLKNUC7i5DNH4E","text3":"30"},{"text1":"Core i5","text2":"BLKNUC7i5DNH6E","text3":"30"},{"text1":"Core i5","text2":"BLKNUC7i5DNH9E","text3":"30"},{"text1":"Core i5","text2":"BLKNUC7i5DNHE","text3":"30"},{"text1":"Core i5","text2":"BLKNUC7i5DNK1E","text3":"30"},{"text1":"Core i5","text2":"BLKNUC7i5DNK2E","text3":"30"},{"text1":"Core i5","text2":"BLKNUC7i5DNK3E","text3":"30"},{"text1":"Core i5","text2":"BLKNUC7i5DNK4E","text3":"30"},{"text1":"Core i5","text2":"BLKNUC7i5DNK6E","text3":"30"},{"text1":"Core i5","text2":"BLKNUC7i5DNK6EL","text3":"30"},{"text1":"Core i5","text2":"BLKNUC7i5DNKE","text3":"30"},{"text1":"Core i7","text2":"BLKNUC7i7DNBE","text3":"40"},{"text1":"Core i7","text2":"BLKNUC7i7DNH1E","text3":"40"},{"text1":"Core i7","text2":"BLKNUC7i7DNH2E","text3":"40"},{"text1":"Core i7","text2":"BLKNUC7i7DNH3E","text3":"40"},{"text1":"Core i7","text2":"BLKNUC7i7DNH4E","text3":"40"},{"text1":"Core i7","text2":"BLKNUC7i7DNHE","text3":"40"},{"text1":"Core i3","text2":"BOXNUC7i3BNH","text3":"14"},{"text1":"Core i3","text2":"BOXNUC7i3BNHL","text3":"14"},{"text1":"Core i3","text2":"BOXNUC7i3BNHXF","text3":"20"},{"text1":"Core i3","text2":"BOXNUC7i3BNHXFL","text3":"20"},{"text1":"Core i3","text2":"BOXNUC7i3BNK","text3":"14"},{"text1":"Core i3","text2":"BOXNUC7i3BNKL","text3":"14"},{"text1":"Core i5","text2":"BOXNUC7i5BNH","text3":"21"},{"text1":"Core i5","text2":"BOXNUC7i5BNHL","text3":"21"},{"text1":"Core i5","text2":"BOXNUC7i5BNHXF","text3":"30"},{"text1":"Core i5","text2":"BOXNUC7i5BNHXFL","text3":"30"},{"text1":"Core i5","text2":"BOXNUC7i5BNK","text3":"21"},{"text1":"Core i5","text2":"BOXNUC7i5BNKL","text3":"21"},{"text1":"Core i5","text2":"BOXNUC7i5BNKP","text3":"30"},{"text1":"Core i5","text2":"BOXNUC7i5BNKPL","text3":"30"},{"text1":"Core i7","text2":"BOXNUC7i7BNH","text3":"28"},{"text1":"Core i7","text2":"BOXNUC7i7BNHL","text3":"28"},{"text1":"Core i7","text2":"BOXNUC7i7BNHXG","text3":"40"},{"text1":"Core i7","text2":"BOXNUC7i7BNHXGL","text3":"40"},{"text1":"Core i7","text2":"BOXNUC7i7BNKQ","text3":"40"},{"text1":"Core i7","text2":"BOXNUC7i7BNKQL","text3":"40"},{"text1":"Core i3","text2":"BOXNUC8i3BEH","text3":"20"},{"text1":"Core i3","text2":"BOXNUC8i3BEH1","text3":"20"},{"text1":"Core i3","text2":"BOXNUC8i3BEH2","text3":"20"},{"text1":"Core i3","text2":"BOXNUC8i3BEH3","text3":"20"},{"text1":"Core i3","text2":"BOXNUC8i3BEH4","text3":"20"},{"text1":"Core i3","text2":"BOXNUC8i3BEHFA","text3":"20"},{"text1":"Core i3","text2":"BOXNUC8i3BEHFA1","text3":"20"},{"text1":"Core i3","text2":"BOXNUC8i3BEHFA2","text3":"20"},{"text1":"Core i3","text2":"BOXNUC8i3BEHFA3","text3":"20"},{"text1":"Core i3","text2":"BOXNUC8i3BEHFA4","text3":"20"},{"text1":"Core i3","text2":"BOXNUC8i3BEK","text3":"20"},{"text1":"Core i3","text2":"BOXNUC8i3BEK1","text3":"20"},{"text1":"Core i3","text2":"BOXNUC8i3BEK2","text3":"20"},{"text1":"Core i3","text2":"BOXNUC8i3BEK3","text3":"20"},{"text1":"Core i3","text2":"BOXNUC8i3BEK4","text3":"20"},{"text1":"Core i3","text2":"BOXNUC8i3CYSM","text3":"20"},{"text1":"Core i3","text2":"BOXNUC8i3CYSM1","text3":"20"},{"text1":"Core i3","text2":"BOXNUC8i3CYSM2","text3":"20"},{"text1":"Core i3","text2":"BOXNUC8i3CYSM3","text3":"20"},{"text1":"Core i3","text2":"BOXNUC8i3CYSM4","text3":"20"},{"text1":"Core i3","text2":"BOXNUC8i3CYSM6","text3":"20"},{"text1":"Core i3","text2":"BOXNUC8i3CYSN","text3":"20"},{"text1":"Core i3","text2":"BOXNUC8i3CYSN1","text3":"20"},{"text1":"Core i3","text2":"BOXNUC8i3CYSN2","text3":"20"},{"text1":"Core i3","text2":"BOXNUC8i3CYSN3","text3":"20"},{"text1":"Core i3","text2":"BOXNUC8i3CYSN4","text3":"20"},{"text1":"Core i3","text2":"BOXNUC8i3CYSN5","text3":"20"},{"text1":"Core i5","text2":"BOXNUC8i5BEH","text3":"30"},{"text1":"Core i5","text2":"BOXNUC8i5BEH1","text3":"30"},{"text1":"Core i5","text2":"BOXNUC8i5BEH2","text3":"30"},{"text1":"Core i5","text2":"BOXNUC8i5BEH3","text3":"30"},{"text1":"Core i5","text2":"BOXNUC8i5BEH4","text3":"30"},{"text1":"Core i5","text2":"BOXNUC8i5BEHFA","text3":"30"},{"text1":"Core i5","text2":"BOXNUC8i5BEHFA1","text3":"30"},{"text1":"Core i5","text2":"BOXNUC8i5BEHFA2","text3":"30"},{"text1":"Core i5","text2":"BOXNUC8i5BEHFA3","text3":"30"},{"text1":"Core i5","text2":"BOXNUC8i5BEHFA4","text3":"30"},{"text1":"Core i5","text2":"BOXNUC8i5BEK","text3":"30"},{"text1":"Core i5","text2":"BOXNUC8i5BEK1","text3":"30"},{"text1":"Core i5","text2":"BOXNUC8i5BEK2","text3":"30"},{"text1":"Core i5","text2":"BOXNUC8i5BEK3","text3":"30"},{"text1":"Core i5","text2":"BOXNUC8i5BEK4","text3":"30"},{"text1":"Core i5","text2":"BOXNUC8i5BEKPA","text3":"30"},{"text1":"Core i5","text2":"BOXNUC8i5BEKPA1","text3":"30"},{"text1":"Core i5","text2":"BOXNUC8i5BEKPA2","text3":"30"},{"text1":"Core i5","text2":"BOXNUC8i5BEKPA3","text3":"30"},{"text1":"Core i5","text2":"BOXNUC8i5BEKPA4","text3":"30"},{"text1":"Core i7","text2":"BOXNUC8i7BEH","text3":"40"},{"text1":"Core i7","text2":"BOXNUC8i7BEH1","text3":"40"},{"text1":"Core i7","text2":"BOXNUC8i7BEH2","text3":"40"},{"text1":"Core i7","text2":"BOXNUC8i7BEH3","text3":"40"},{"text1":"Core i7","text2":"BOXNUC8i7BEH4","text3":"40"},{"text1":"Core i7","text2":"BOXNUC8i7BEHGA","text3":"40"},{"text1":"Core i7","text2":"BOXNUC8i7BEHGA1","text3":"40"},{"text1":"Core i7","text2":"BOXNUC8i7BEHGA2","text3":"40"},{"text1":"Core i7","text2":"BOXNUC8i7BEHGA3","text3":"40"},{"text1":"Core i7","text2":"BOXNUC8i7BEHGA4","text3":"40"},{"text1":"Core i7","text2":"BOXNUC8i7BEKQA","text3":"40"},{"text1":"Core i7","text2":"BOXNUC8i7BEKQA1","text3":"40"},{"text1":"Core i7","text2":"BOXNUC8i7BEKQA2","text3":"40"},{"text1":"Core i7","text2":"BOXNUC8i7BEKQA3","text3":"40"},{"text1":"Core i7","text2":"BOXNUC8i7BEKQA4","text3":"40"},{"text1":"Core i7","text2":"BOXNUC8i7HNK","text3":"40"},{"text1":"Core i7","text2":"BOXNUC8i7HNK1","text3":"40"},{"text1":"Core i7","text2":"BOXNUC8i7HNK2","text3":"40"},{"text1":"Core i7","text2":"BOXNUC8i7HNK3","text3":"40"},{"text1":"Core i7","text2":"BOXNUC8i7HNK4","text3":"40"},{"text1":"Core i7","text2":"BOXNUC8i7HVK","text3":"40"},{"text1":"Core i7","text2":"BOXNUC8i7HVK1","text3":"40"},{"text1":"Core i7","text2":"BOXNUC8i7HVK2","text3":"40"},{"text1":"Core i7","text2":"BOXNUC8i7HVK3","text3":"40"},{"text1":"Core i7","text2":"BOXNUC8i7HVK4","text3":"40"},{"text1":"Core i7","text2":"BOXNUC8i7HVKVAW","text3":"40"},{"text1":"Core i3","text2":"BLKNUC7i3DNKTC","text3":"20"},{"text1":"Core i3","text2":"BLKNUC7i3DNKTC1","text3":"20"},{"text1":"Core i3","text2":"BLKNUC7i3DNKTC2","text3":"20"},{"text1":"Core i3","text2":"BLKNUC7i3DNKTC3","text3":"20"},{"text1":"Core i3","text2":"BLKNUC7i3DNKTC4","text3":"20"},{"text1":"Core i5","text2":"BLKNUC7i5DNKPC","text3":"30"},{"text1":"Core i5","text2":"BLKNUC7i5DNKPC1","text3":"30"},{"text1":"Core i5","text2":"BLKNUC7i5DNKPC2","text3":"30"},{"text1":"Core i5","text2":"BLKNUC7i5DNKPC3","text3":"30"},{"text1":"Core i5","text2":"BLKNUC7i5DNKPC4","text3":"30"},{"text1":"Core i7","text2":"BLKNUC7i7DNK1E","text3":"40"},{"text1":"Core i7","text2":"BLKNUC7i7DNK2E","text3":"40"},{"text1":"Core i7","text2":"BLKNUC7i7DNK3E","text3":"40"},{"text1":"Core i7","text2":"BLKNUC7i7DNK4E","text3":"40"},{"text1":"Core i7","text2":"BLKNUC7i7DNKE","text3":"40"},{"text1":"Core i7","text2":"BOXNUC8i7HNKQC","text3":"40"},{"text1":"Core i7","text2":"BOXNUC8i7HNKQC1","text3":"40"},{"text1":"Core i7","text2":"BOXNUC8i7HNKQC2","text3":"40"},{"text1":"Core i7","text2":"BOXNUC8i7HNKQC3","text3":"40"},{"text1":"Core i7","text2":"BOXNUC8i7HNKQC4","text3":"40"},{"text1":"Core i7","text2":"BOXNUC8i7HVKVA","text3":"40"},{"text1":"Core i7","text2":"BOXNUC8i7HVKVA1","text3":"40"},{"text1":"Core i7","text2":"BOXNUC8i7HVKVA2","text3":"40"},{"text1":"Core i7","text2":"BOXNUC8i7HVKVA3","text3":"40"},{"text1":"Core i7","text2":"BOXNUC8i7HVKVA4","text3":"40"},{"text1":"Core i7","text2":"BOXNUC8i7HVKVA6","text3":"40"},{"text1":"Core i7","text2":"BOXNUC8i7HVK6","text3":"40"},{"text1":"Core i7","text2":"BOXNUC8i7BEHGA6","text3":"40"},{"text1":"Core i5","text2":"BOXNUC8i5BEHFA6","text3":"30"},{"text1":"Core i3","text2":"BOXNUC8i3BEHFA6","text3":"20"},{"text1":"Core i7","text2":"BOXNUC8i7BEH6","text3":"40"},{"text1":"Core i5","text2":"BOXNUC8i5BEH6","text3":"30"},{"text1":"Core i3","text2":"BOXNUC8i3BEH6","text3":"20"}
]



const dataSource5 = [
  { text: "本季度积分将在<b><u>本季度</u></b>核算，并上传至您的<a href='https://prc-points.inteltechnologyprovider.com' target='_blank'>英特尔<sup>®</sup>渠道积分</a>账户，积分有效期为一年；" },
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
  { text: "凡参加本奖励计划所描述活动，或兑换本奖励计划所列积分，即表明您同意受本奖励计划中各项条款的调整和约束，并遵守英特尔®技术合作伙伴（“ITP”）项目的条款和条件，包括附录A与积分补充条款和条件（“ITP项目条款”）。该ITP项目条款为本奖励计划的一部分，其详情可在此网址查询：\
        <a href='https://www.intel.cn/content/www/cn/zh/technology-provider/legal/program-terms-and-conditions.html?_ga=2.161268861.1386006631.1522205920-1782132059.1444618124&elq_cid=1498511&erpm_id=2886134；' target='_blank'>https://www.intel.cn/content/www/cn/zh/technology-provider/legal/program-terms-and-conditions.html?_ga=2.161268861.1386006631.1522205920-1782132059.1444618124&elq_cid=1498511&erpm_id=2886134； </a>"
  },
  {
    text:
      "英特尔可以根据本奖励计划以及ITP项目条款的内容，对您的级别状态进行定期评估，并按照本奖励计划以及ITP项目条款进行相应的升级、降级操作。若本奖励计划中的任何内容，与ITP项目条款存在冲突，应以本奖励计划为准。任何英特尔商标许可协议和/或英特尔标识许可协议的条款均应优先于本奖励计划中涉及上述协议内容的条款。除非英特尔授权代表书面签署，英特尔的标准销售条款和条件将适用于任何英特尔产品购买或积分兑换等交易，且在适用中优先于任何其他协议；"
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

