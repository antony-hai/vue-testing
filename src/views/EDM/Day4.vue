<template>
  <table align="center" style="text-align: center; font-family: 微软雅黑; margin: 0 auto;">
    <tr>
      <td>
        <Nav></Nav>

        <ImageRow imgUrl="http://show.easeye.com.cn/fckattach/2018-04-17/e3b9e77152a2095d72521d1898764e2d/image/face9686a126c31e936870d7c956b970.jpg"></ImageRow>

        <StanceTable hasTop hasBottom>
          <tr>
            <td style="font-size:12px;text-align: left; font-family: 微软雅黑; line-height: 20px;"> 尊敬的英特尔-品牌零售菁英合作伙伴：</td>
          </tr>
          <tr height='10'></tr>
          <tr>
            <td style="font-size:12px;text-align: left; font-family: 微软雅黑; line-height: 20px;"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;感谢您长期以来对英特尔的关注与支持！</td>
          </tr>
          <tr height='10'></tr>
          <tr>
            <td style="font-size:12px;text-align: left; font-family: 微软雅黑; line-height: 20px;"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              为了帮助大家在2019年第二季度获得更好的销售成绩，在品牌OEM厂商的大力支持下，我们为英特尔<Sup></Sup>技术合作伙伴的核心渠道推出了菁英渠道产品销售积分奖励计划！在此活动期间，您可以通过销售指定产品获取高额积分奖励。赶快了解详情，即刻行动吧！
            </td>
          </tr>
          <tr height='10'></tr>
          <!-- <tr>
            <td style="font-size:12px;text-align: left; font-family: 微软雅黑; line-height: 20px;"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              经由品牌提名及英特尔审核后，您于2019年第二季度在英特尔<Sup></Sup>技术合作伙伴品牌零售项目中的合作伙伴等级为：<u>菁英XX级（例：菁英A级）</u> 合作伙伴 。
            </td>
          </tr> -->
          <tr height="10"></tr>
          <tr>
            <td style="font-size:15px;text-align: left; font-family: 微软雅黑; line-height: 25px; text-decoration: underline; color: #000000; font-weight: 600; ">销售奖励计划</td>
          </tr>
        </StanceTable>

        <StanceTable hasTop>
          <tr>
            <td width='35' style="font-size:13px;text-align: left; font-family: 微软雅黑; line-height: 22px;color: #000000; font-weight: 600">一、</td>
            <td style="font-size:13px;text-align: left; font-family: 微软雅黑; line-height: 22px;color: #000000; font-weight: 600">参与活动渠道资格：</td>
          </tr>
          <tr>
            <td width="35"></td>
            <td style="font-size:12px;text-align: left; font-family: 微软雅黑; line-height: 20px;">适用对象为中华人民共和国大陆地区（仅为本条款的目的，系指不包括香港、澳门和台湾的境内地区）已激活的英特尔-品牌零售渠道的
              <b><u>菁英</u></b>合作伙伴（“合格会员”）。</td>
          </tr>
        </StanceTable>

        <StanceTable hasTop>
          <tr>
            <td width='35' style="font-size:13px;text-align: left; font-family: 微软雅黑; line-height: 22px;color: #000000; font-weight: 600">二、</td>
            <td style="font-size:13px;text-align: left; font-family: 微软雅黑; line-height: 22px;color: #000000; font-weight: 600">活动说明：</td>
          </tr>
          <tr>
            <td width="35"></td>
            <td style="font-size:12px;text-align: left; font-family: 微软雅黑; line-height: 20px;">
              <StanceTable width="599">
                <IconText title="活动日期">
                  本活动有效期为2019年4月1日至2019年6月30日。
                </IconText>
                <IconText title="促销产品">
                  基于英特尔<Sup></Sup>架构（IA架构）的2in1，笔记本，台式机（含AIO）。
                </IconText>
                <IconText title="活动要求">
                  参加销售奖励的渠道在2019年6月30日完成进货，并在每月10日前提交上个月的销量报告至OEM厂商。
                </IconText>
                <IconText title="活动原则">
                  <ListTable listType="-" :dataSource="dataSource1" :tStyle="{ 'font-size': '12px', 'line-height': '20px' }" width="584"></ListTable>
                  <ListTable listType="◆" :dataSource="dataSource11" width="584"></ListTable>
                </IconText>
                <IconText title="合作伙伴权利与义务">
                  <ListTable listType="◆" :dataSource="dataSource111" width="584"></ListTable>
                </IconText>
                <IconText title="积分说明">
                  本次活动销售奖励积分将以电子邮件的形式通知到参与此次活动的渠道，收到通知后，各个渠道即可登录
                  <a href="http://prc-points.inteltechnologyprovider.com/" style="color: #071C5; text-decoration: underline" target="_blank">
                  英特尔<Sup></Sup>渠道积分网站</a>进行礼品兑换。
                </IconText>
                <IconText title="温馨提示">
                  此活动仅对英特尔
                  <Sup></Sup>渠道积分计划中的菁英A级和菁英B级合作伙伴开放，<b>请大家确保参与活动前已激活英特尔<Sup></Sup>渠道积分计划的会员账号</b>,
                  以保障活动奖励的正常享有；如果还未完成账号激活，请尽快登陆
                  <a href="http://prc-points.inteltechnologyprovider.com/" style="color: #071C5; text-decoration: underline" target="_blank">英特尔
                    <Sup></Sup>渠道积分网站</a>激活账户 (注册流程请咨询Intel客服中心热线800-820-1100)。
                </IconText>
                <IconText>
                  依照英特尔的网站使用条款
                  <a href="https://www.intel.cn/content/www/cn/zh/legal/terms-of-use.html" style="color: #071C5; text-decoration: underline" target="_blank">
                  （https://www.intel.cn/content/www/cn/zh/legal/terms-of-use.html）</a>，
                  凡以您的账户在英特尔网站上进行的操作，均视为您的操作并由您负责；如果您的账户、密码等信息有误或发生泄露，导致您的权益受损，请理解英特尔将不承担任何责任。
                </IconText>
              </StanceTable>

            </td>
          </tr>
        </StanceTable>

        <StanceTable hasTop>
          <tr>
            <td width='35' style="font-size:13px;text-align: left; font-family: 微软雅黑; line-height: 22px;color: #000000; font-weight: 600">三、</td>
            <td style="font-size:13px;text-align: left; font-family: 微软雅黑; line-height: 22px;color: #000000; font-weight: 600">常规奖励规则: </td>
          </tr>
          <tr>
            <td width="35"></td>
            <td style="font-size:12px;text-align: left; font-family: 微软雅黑; line-height: 20px;">在活动期间，对合格会员从英特尔OEM厂商授权渠道购买的如下列表中的英特尔产品（“符合条件的英特尔<Sup></Sup>产品”），英特尔将实行以下积分奖励：</td>
          </tr>
        </StanceTable>

        <table border="1" style="border-collapse:collapse;font-size: 12px;;font-family: 微软雅黑;margin: 0 auto;width: 634px;text-align: center;line-height: 20px;">
          <tr height="15"></tr>
          <tr style="background-color: #0070C0;">
            <td rowspan="2" style="font-family: 微软雅黑;text-align: center;color:#fff;width:120px;height: 30px;line-height: 30px;font-weight: 700;">积分奖励活动机型</td>
            <td rowspan="2" style="font-family: 微软雅黑;text-align: center;color:#fff;width:70px;height: 30px;line-height: 30px;font-weight: 700;">代</td>
            <td colspan="6" style="font-family: 微软雅黑;text-align: center;color:#fff;width:354px;height: 30px;line-height: 30px;font-weight: 700;">积分/每单位产品</td>
            <td rowspan="2" style="font-family: 微软雅黑;text-align: center;color:#fff;width:90px;height: 30px;line-height: 30px;font-weight: 700;">积分上限</td>
          </tr>
          <tr style="background-color: #0070C0;">
            <td style="text-align: center;font-family: 微软雅黑;color:#fff;width:60px;font-weight: 700;">奔腾</td>
            <td style="text-align: center;font-family: 微软雅黑;color:#fff;width:60px;font-weight: 700;">酷睿M</td>
            <td style="text-align: center;font-family: 微软雅黑;color:#fff;width:55px;font-weight: 700;">I3</td>
            <td style="text-align: center;font-family: 微软雅黑;color:#fff;width:55px;font-weight: 700;">I5</td>
            <td style="text-align: center;font-family: 微软雅黑;color:#fff;width:55px;font-weight: 700;">I7</td>
            <td style="text-align: center;font-family: 微软雅黑;color:#fff;width:55px;font-weight: 700;">I9</td>
          </tr>
          <tr>
            <td rowspan="2" style="text-align: center;font-family: 微软雅黑; color:#0070C0;">英特尔二合一产品</td>
            <td style="text-align: center;font-family: 微软雅黑; color:#0070C0;">8代</td>
            <td rowspan="2" style="text-align: center;font-family: 微软雅黑; color:#0070C0;">10</td>
            <td style="text-align: center;font-family: 微软雅黑; color:#0070C0;">10</td>
            <td style="text-align: center;font-family: 微软雅黑; color:#0070C0;">14</td>
            <td style="text-align: center;font-family: 微软雅黑; color:#0070C0;">21</td>
            <td style="text-align: center;font-family: 微软雅黑; color:#0070C0;">40</td>
            <td style="text-align: center;font-family: 微软雅黑; color:#0070C0;">-</td>
            <td rowspan="7" style="text-align: center;font-family: 微软雅黑;color:#0070C0;">菁英级<br>积分上限<br>5,000</td>
          </tr>
          <tr>
            <td style="text-align: center;font-family: 微软雅黑;color:#0070C0;">7代</td>
            <td style="text-align: center;font-family: 微软雅黑;color:#0070C0;">10</td>
            <td style="text-align: center;font-family: 微软雅黑;color:#0070C0;">14</td>
            <td style="text-align: center;font-family: 微软雅黑;color:#0070C0;">21</td>
            <td style="text-align: center;font-family: 微软雅黑;color:#0070C0;">40</td>
            <td style="text-align: center;font-family: 微软雅黑;color:#0070C0;">-</td>
          </tr>
          <tr>
            <td rowspan="2" style="text-align: center;font-family: 微软雅黑;color:#0070C0;">
              英特尔笔记本产品<br>(包含超轻薄，不包含二合一)
            </td>
            <td style="text-align: center;font-family: 微软雅黑;color:#0070C0;">8代</td>
            <td rowspan="2" style="text-align: center;font-family: 微软雅黑;color:#0070C0;">10</td>
            <td style="text-align: center;font-family: 微软雅黑; color:#0070C0;">10</td>
            <td style="text-align: center;font-family: 微软雅黑; color:#0070C0;">14</td>
            <td style="text-align: center;font-family: 微软雅黑; color:#0070C0;">21</td>
            <td style="text-align: center;font-family: 微软雅黑; color:#0070C0;">40</td>
            <td style="text-align: center;font-family: 微软雅黑; color:#0070C0;">60</td>
          </tr>
          <tr>
            <td style="text-align: center;font-family: 微软雅黑;color:#0070C0;">7代</td>
            <td style="text-align: center;font-family: 微软雅黑;color:#0070C0;">10</td>
            <td style="text-align: center;font-family: 微软雅黑;color:#0070C0;">14</td>
            <td style="text-align: center;font-family: 微软雅黑;color:#0070C0;">21</td>
            <td style="text-align: center;font-family: 微软雅黑;color:#0070C0;">40</td>
            <td style="text-align: center;font-family: 微软雅黑;color:#0070C0;">-</td>
          </tr>

          <tr>
            <td rowspan="3" style="text-align: center;font-family: 微软雅黑;color:#0070C0;">英特尔台式机产品<br>（包含一体机）</td>
            <td style="text-align: center;font-family: 微软雅黑;color:#0070C0;">9代</td>
            
            <td style="text-align: center;font-family: 微软雅黑;color:#0070C0;">-</td>
            <td style="text-align: center;font-family: 微软雅黑;color:#0070C0;">-</td>
            <td style="text-align: center;font-family: 微软雅黑;color:#0070C0;">-</td>
            <td style="text-align: center;font-family: 微软雅黑;color:#0070C0;">5</td>
            <td style="text-align: center;font-family: 微软雅黑;color:#0070C0;">10</td>
            <td style="text-align: center;font-family: 微软雅黑;color:#0070C0;">12</td>
          </tr>
          <tr>
            <td style="text-align: center;font-family: 微软雅黑;color:#0070C0;">8代</td>
            <td rowspan="2" style="text-align: center;font-family: 微软雅黑;color:#0070C0;">4</td>
            <td style="text-align: center;font-family: 微软雅黑;color:#0070C0;">-</td>
            <td style="text-align: center;font-family: 微软雅黑;color:#0070C0;">-</td>
            <td style="text-align: center;font-family: 微软雅黑;color:#0070C0;">5</td>
            <td style="text-align: center;font-family: 微软雅黑;color:#0070C0;">10</td>
            <td style="text-align: center;font-family: 微软雅黑;color:#0070C0;">-</td>
          </tr>
          <tr>
            <td style="text-align: center;font-family: 微软雅黑;color:#0070C0;">7代</td>
            <td style="text-align: center;font-family: 微软雅黑;color:#0070C0;">-</td>
            <td style="text-align: center;font-family: 微软雅黑;color:#0070C0;">-</td>
            <td style="text-align: center;font-family: 微软雅黑;color:#0070C0;">5</td>
            <td style="text-align: center;font-family: 微软雅黑;color:#0070C0;">10</td>
            <td style="text-align: center;font-family: 微软雅黑;color:#0070C0;">12</td>
          </tr>
        </table>

        <StanceTable hasTop>
          <tr>
            <td width='35' style="font-size:13px;text-align: left; font-family: 微软雅黑; line-height: 22px;color: #000000; font-weight: 600">四、</td>
            <td style="font-size:13px;text-align: left; font-family: 微软雅黑; line-height: 22px;color: #000000; font-weight: 600">特别促销奖励规则:</td>
          </tr>
          <tr>
            <td width="35"></td>
            <td style="font-size:12px;text-align: left; font-family: 微软雅黑; line-height: 20px;">
              <IconText>
                通过销售符合条件的英特尔<Sup></Sup>酷睿™ KBL-H及CFL-H系列处理器，您可以在获得季度性常规积分奖励的基础上获得额外积分奖励，
                具体条款及符合条件的产品详情请查看<a href="https://www.intel.com/content/www/cn/zh/secure/technology-provider/local/buying/promotions/sfr-h-series-special-promotion-plan-prc-q2-19.html" target="_blank">《2019年第二季度英特尔技术合作伙伴品牌零售H系列酷睿™处理器特别促销积分奖励计划-指定机型》</a> 。
              </IconText>
              <IconText>
                通过销售符合条件的含英特尔<Sup></Sup>傲腾™内存和英特尔<Sup></Sup>傲腾™固态盘 的产品机型，您可以在获得季度性常规积分奖励的基础上获得额外积分奖励，
                具体条款及符合条件的产品详情请查看<a href="https://www.intel.com/content/www/cn/zh/secure/technology-provider/local/buying/promotions/sfr-optane-special-promotion-plan-prc-q2-19.html" target="_blank">《2019年度第二季度英特尔<Sup></Sup>技术合作伙伴品牌零售英特尔<Sup></Sup>傲腾™ 特别促销积分奖励计划-指定机型》</a>。
              </IconText>
            </td>
          </tr>
        </StanceTable>

        <StanceTable hasTop hasBottom>
          <tr>
            <td style="font-size:15px;text-align: left; font-family: 微软雅黑; line-height: 25px; text-decoration: underline; color: #000000; font-weight: 600; ">注意事项</td>
          </tr>
        </StanceTable>
        <StanceTable hasBottom>
          <IconText>
            只有在本季度下发的符合条件的英特尔产品列表（Eligible SKU List ）中列明的产品型号，方可参与本季度的常规奖励及特别机型奖励活动。
          </IconText>
          <IconText>
            本活动受以上条款和条件限制（“活动条款”），此外仍须遵守英特尔<Sup></Sup>技术合作伙伴（“ITP”）项目的条款和条件，包括附录A与积分补充条款和条件（“ITP项目条款”）。该ITP项目条款为本活动条款的一部分，其详情可在此网址查询：
            <a href="https://www.intel.com/content/www/us/en/technology-provider/legal/program-terms-and-conditions.html" target="_blank">https://www.intel.com/content/www/us/en/technology-provider/legal/program-terms-and-conditions.html.</a>
            活动条款和ITP项目条款统称为“活动规则”。
          </IconText>

          <IconText>
            合格会员：
            <ListTable listType="-" :dataSource="dataSource2" :tStyle="{ 'font-size': '12px', 'line-height': '20px' }" width="620"></ListTable>
          </IconText>
          <IconText>
            在不影响活动规则所规定的任何权利和救济措施以及法律规定的任何其他权利和救济措施的前提下，如果您未能遵守活动规则，英特尔有权选择：
            <ListTable listType="-" :dataSource="dataSource3" :tStyle="{ 'font-size': '12px', 'line-height': '20px' }" width="620"></ListTable>
          </IconText>
          <IconText>
           本活动条款对特定渠道级别的标准和要求，为该渠道级别所应满足的最低标准。英特尔可以根据本活动条款以及ITP项目条款和条件的内容，对会员、渠道或客户的级别状态进行定期评估，并按照本活动条款进行相应的升级、降级操作。若本活动条款中的任何内容，与ITP项目条款和条件存在冲突，应以本活动条款为准。任何英特尔商标许可协议和/或英特尔标识许可协议的条款均应优先于本活动条款中涉及上述协议内容的条款。除非英特尔授权代表书面签署，英特尔的标准销售条款和条件将适用于任何合格会员与英特尔之间发生的英特尔产品购买或积分兑换等交易，且在适用中优先于任何其他协议。
          </IconText>
          <IconText>
            本活动条款中未定义的大写术语与在ITP项目条款中的大写术语具有相同含义。
          </IconText>
          <IconText>
            合格会员接受本活动中的积分表示您接受本活动条款。
          </IconText>
          <IconText>
            英特尔保留以任何形式通知客户的方式，随时修改、暂停或终止此次活动的权利，且上述修改、暂停或终止应立即生效，但不影响活动中已累积的任何权益，除此之外英特尔不因上述修改、暂停或终止而承担任何责任。
          </IconText>
          <IconText>
            如出现以下状况，则您的英特尔
            <Sup></Sup>技术合作伙伴(简称ITP)账户将会自动失效：
            <ListTable listType="-" :dataSource="dataSource4" :tStyle="{ 'font-size': '12px', 'line-height': '20px' }" width="620"></ListTable>
          </IconText>

        </StanceTable>
        <StanceTable hasBottom>
          <tr>
            <td width="40"></td>
            <td style="font-size:14px;text-align: left; font-family: 微软雅黑; line-height: 20px;">◆</td>
            <td style="font-size:12px;text-align: left; font-family: 微软雅黑; line-height: 20px;">&nbsp;&nbsp;服务电话：400-920-2200 （座机和手机皆可拨打）；800-820-1100 （支持座机拨打）</td>
          </tr>
          <tr>
            <td width="40"></td>
            <td style="font-size:14px;text-align: left; font-family: 微软雅黑; line-height: 20px;">◆</td>
            <td style="font-size:12px;text-align: left; font-family: 微软雅黑; line-height: 20px;">&nbsp;&nbsp;联系邮箱：<a href="mailto:programs@intel.com"></a> programs@intel.com</td>
          </tr>
          <tr>
            <td width="40"></td>
            <td style="font-size:14px;text-align: left; font-family: 微软雅黑; line-height: 20px;">◆</td>
            <td style="font-size:12px;text-align: left; font-family: 微软雅黑; line-height: 20px;">&nbsp;&nbsp;服务时间：周一至周五，上午9:00 – 下午17:00</td>
          </tr>
        </StanceTable>

        <StanceTable hasTop>
          <tr>
            <td width="20"></td>
            <td width="20" style="font-size:14px;text-align: left; font-family: 微软雅黑; line-height: 20px;" valign="top">-</td>
            <td style="font-size:12px;text-align: left; font-family: 微软雅黑; line-height: 20px;">当您的ITP账户失效时，您将不能享受英特尔为您量身定制的ITP会员权益，同时您将失去访问英特尔<Sup></Sup>渠道积分网站的资格， 影响您在该网站账户中的积分。</td>
          </tr>
        </StanceTable>
        <StanceTable hasTop hasBottom>
          <tr>
            <td style="font-size:12px;text-align: left; font-family: 微软雅黑; line-height: 20px;"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;英特尔真诚邀请您参与“2019年第二季度英特尔-品牌零售菁英渠道积分奖励计划“，让我们在2019年携手共进，共创佳绩！	</td>

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

export const dataSource1 = [
  {
    text: "现有ITP渠道将以英特尔ITP报告为准，非现有ITP渠道将以品牌提报销量报告为准进行积分核算；；"
  },
  {
    text:
      "自2019年起， 所有数据报告均要求为月度报告；"
  },
  {
    text:
      "积分核算过程中，您的英特尔-品牌零售渠道合作伙伴级别，以2019年第二季度末在英特尔<sup>®</sup>渠道积分网站中所录入级别为准；"
  },
  {
    text: '菁英级英特尔品牌零售渠道合作伙伴下挂店面完成培训课程总数每季度不低于15门；'
  },
  {
    text:
      "菁英级英特尔品牌零售渠道合作伙伴将由英特尔服务商对您下挂的任何一家英特尔体验店和英特尔星级店进行店面核查，每季度每个下挂店面至少完成体验环境、体验内容、产品上架、培训、iPOS中的其中至少两项店面行为，\
      否则英特尔将有权冻结您本季度赚取品牌零售渠道各项积分奖励的资格，且该渠道及其下挂店面将无法参加未来2个季度的ITP积分及店面活动；"
  },
  {
    text:
      "若英特尔在规定时间内未收到渠道销售报告，或本季度渠道销量为零，则您将自动失去参与本季度渠道积分奖励计划的资格，且该渠道下挂的任何一家店面将自动失去英特尔体验店或英特尔星级店的身份；"
  },
  { text: "了解详细店面行为要求，请点击右侧超链接阅读<a href='https://www.intel.com/content/www/cn/zh/technology-provider/local/brand-retailer-campaign-plan-q2-19.html' target='_black'>《2019年第二季度 英特尔 品牌零售店面活动计划》</a>。" },
  { text: "升/降级触发条件：" },
  // {
  //   text:
  //     "您若在任何连续两个季度上报销量少于30台（不含）/季度，则将在下一季度降级为普通会员；"
  // },
  // {
  //   text:
  //     "您的所属OEM厂商若以书面方式提出取消您参加英特尔®技术合作伙伴品牌零售积分奖励计划的资格，经英特尔审核后，您将在下一季度降级为普通会员。"
  // }
];

const dataSource11 = [
  { text: '候选渠道须同时满足<u>基本销量</u>，<u>下挂店面数量</u>，<u>参加ITP时间</u>，<u>培训</u>及<u>其他有关</u>要求的，逐级升级；'},
  { text: '若在任何1个季度的ITP积分项目销量为<u>0</u>，则该渠道退出品牌零售ITP项目，且半年内不得再提名加入；'},
  { text: '若在任何1个季度渠道下挂店面为<u>0</u>，则该渠道退出品牌零售ITP项目，且半年内不得再提名加入；'},
  { text: '若品牌厂商对其<u>不合作渠道</u>，向英特尔提出要求退出品牌零售ITP项目的渠道，该渠道则退出项目且半年内不得再提名加入；'},
  { text: '若渠道连续2个季度ITP积分项目销量<u>不足所在级别要求</u>（菁英级100台/季度），则该渠道下降一级，直至退出；'},
  { text: '若连续2个季度渠道下挂店面数量<u>不满足所在级别要求</u>（菁英级下挂至少1个店面），则该渠道下降一级，直至退出品牌零售ITP项目。'},
  { text: '若连续2个季度渠道下挂店面完成培训课程总数均未达到10门，则该则该渠道下降一级，直至退出品牌零售ITP项目。'},
]
const dataSource111 = [
  { text: '菁英级合作伙伴享有参加ITP常规积分项目，品牌及英特尔联合物料支持，产品推广活动，网络培训机会的权利；'},
  { text: '应履行义务：'},
  { text: '应品牌方和英特尔要求，完成指定产品销售，店面行为及市场营销活动'},
  { text: '配合品牌方，按时提报月度销量及其他要求的市场报告，并对数据真实及完整性负责'},
  { text: '接受英特尔服务商的入店支持和核查'},
  // { text: '若连续2个季度渠道下挂店面数量<u>不满足所在级别要求</u>（菁英级下挂至少1个店面），则该渠道下降一级，直至退出品牌零售ITP项目。'},
]
const dataSource2 = [
  { text: "可将此次活动赚取积分与其他积分活动所得积分合并使用；" },
  {
    text:
      "不可将在本次活动中赚取的积分，与针对符合此次活动条件的英特尔产品的其他英特尔通知的折扣或促销活动所得积分合并使用，不论折扣或促销活动是针对合格会员，或是代表合格会员的第三方；"
  },
  { text: "不可转让此次活动中赚取的积分；且" },
  { text: "不可将此次活动中赚取的积分予以变现" }
];
const dataSource3 = [
  { text: "撤销合格会员在此次活动中原可获得的积分奖励；" },
  { text: "调整合格会员在此次活动中获取积分奖励的数额；" },
  { text: "不允许您兑换在此次活动中获取的奖励积分；" },
  {
    text:
      "用合格会员现有的积分或未来赚取的积分抵销合格会员通过此次活动赚取并已用于兑换的全部（或部分）奖励积分；并且/或"
  },
  {
    text:
      "索回合格会员在本次活动中赚取的且已用于兑换的全部（或部分）奖励积分之价值。"
  }
];
const dataSource4 = [
  {
    text:
      "新会员自获得GID号之日起，超过45天从未登录英特尔<sup>®</sup>技术合作伙伴网站 (https://www.intel.com/technologyprovider) 或者英特尔<sup>®</sup>渠道积分网站 (https://prc-points.inteltechnologyprovider.com/);"
  },
  {
    text:
      "非新会员超过18个月从未登录英特尔<sup>®</sup>技术合作伙伴网站 (https://www.intel.com/technologyprovider) 或者英特尔<sup>®</sup>渠道积分网站 (https://prc-points.inteltechnologyprovider.com/);"
  },
  {
    text:
      "当您的ITP账户失效时，您将不能享受英特尔为您量身定制的ITP会员权益，同时您将失去访问英特尔<sup>®</sup>渠道积分网站的资格， 影响您在该网站账户中的积分。"
  },
  { text: "如您希望再次成为ITP会员,请联系英特尔客服中心寻求帮助：" }
];

export default {
  data() {
    return {
      dataSource1,
      dataSource11,
      dataSource111,
      dataSource2,
      dataSource3,
      dataSource4
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
    Footer
  }
};
</script>

