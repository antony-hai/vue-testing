<template>
  <table align="center" style="text-align: center; font-family: 微软雅黑; margin: 0 auto;">
    <tr>
      <td align="center">
        <Nav></Nav>

        <ImageRow
          imgUrl="http://show.easeye.com.cn/fckattach/2020-01-14/e3b9e77152a2095d72521d1898764e2d/image/698d51a19d8a121ce581499d7b701668(1)_easeyethumbnail.jpg"
        ></ImageRow>

        <StanceTable hasTop hasBottom>
          <tr>
            <td
              style="font-size:12px;text-align: left; font-family: 微软雅黑; line-height: 20px;"
            >尊敬的英特尔-品牌零售 Think品牌合作伙伴：</td>
          </tr>
          <tr height="10"></tr>
          <tr>
            <td
              style="font-size:12px;text-align: left; font-family: 微软雅黑; line-height: 20px;"
            >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;感谢您长期以来对英特尔的关注与支持！</td>
          </tr>
          <tr height="10"></tr>
          <tr>
            <td style="font-size:12px;text-align: left; font-family: 微软雅黑; line-height: 20px;">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              为了更好地支持广大技术合作伙伴在2020年第一季度把握机遇，迎接挑战，
              在Think品牌厂商的大力支持下，本季度推出“常规积分奖励计划”的基础上额外为您定制推出“Think品牌指定机型特别促销奖励计划”促销计划！
              活动期间，通过销售指定产品并根据贵司的品牌零售 Think品牌合作伙伴渠道级别限定，将获得不同层级的高额积分奖励
            </td>
          </tr>
          <tr>
            <td>
              <ListTable listType="●" hasSpace :dataSource="asideData"></ListTable>
            </td>
          </tr>
          <tr height="10"></tr>
          <tr>
            <td style="font-size:12px;text-align: left; font-family: 微软雅黑; line-height: 20px;">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              经由Think品牌提名及英特尔审核后，
              <b>
                2020年第一季度贵司在英特尔
                <Sup></Sup>
                技术合作伙伴品牌零售项目中的合作伙伴等级为{[CS-Tier]}级合作伙伴
              </b>
            </td>
          </tr>
          <tr height="10"></tr>
        </StanceTable>

        <StanceTable hasTop>
          <tr>
            <td
              width="35"
              style="font-size:13px;text-align: left; font-family: 微软雅黑; line-height: 22px;color: #000000; font-weight: 600"
            >一、</td>
            <td
              style="font-size:13px;text-align: left; font-family: 微软雅黑; line-height: 22px;color: #000000; font-weight: 600"
            >积分获取总攻略</td>
          </tr>
          <tr>
            <td width="35"></td>
            <td style="font-size:12px;text-align: left; font-family: 微软雅黑; line-height: 20px;">
              <StanceTable width="599">
                <IconText title="活动时间">2020年1月16日至2020年3月31日。</IconText>
                <IconText title="活动要求">
                  <ListTable listType="●" :dataSource="asideData2" width="584"></ListTable>
                </IconText>
                <IconText title="活动参与渠道资格">
                  活动参与渠道资格：适用对象为中华人民共和国大陆地区（仅为本条款的目的，系指不包括香港、澳门和台湾的境内地区）
                  已激活的英特尔-Think品牌零售渠道的至尊A/B级和菁英级合作伙伴（“合格会员”）。
                  在活动期间，对合格会员从英特尔OEM厂商授权渠道购买下表1中符合条件的英特尔
                  <Sup></Sup>产品，英特尔将实行以下积分奖励：
                </IconText>
              </StanceTable>
            </td>
          </tr>
        </StanceTable>

        <StanceTable>
          <tr>
            <TCell>
              <b>表1</b>
            </TCell>
          </tr>
        </StanceTable>

        <table
          align="center"
          border="1"
          style="border-collapse:collapse;font-size: 12px;;font-family: 微软雅黑;margin: 0 auto;width: 634px;text-align: center;line-height: 20px;table-layout:fixed; word-break: break-all;"
        >
          <colgroup>
            <col width="60px" />
          </colgroup>
          <tr style="background-color: #0070C0;">
            <td
              width="60"
              style="font-family: 微软雅黑;text-align: center;color:#fff;height: 30px;line-height: 30px;font-weight: 700;"
            >促销活动</td>
            <td
              colspan="2"
              style="font-family: 微软雅黑;text-align: center;color:#fff;height:30px;line-height: 30px;font-weight: 700;"
            >积分奖励活动机型</td>
            <td
              style="font-family: 微软雅黑;text-align: center;color:#fff;width:40px;height: 30px;line-height: 30px;font-weight: 700;"
            >奔腾</td>

            <td
              style="text-align: center;font-family: 微软雅黑;color:#fff;width:55px;font-weight: 700;"
            >酷睿™ m</td>
            <td
              style="text-align: center;font-family: 微软雅黑;color:#fff;width:55px;font-weight: 700;"
            >酷睿™ i3</td>
            <td
              style="text-align: center;font-family: 微软雅黑;color:#fff;width:55px;font-weight: 700;"
            >酷睿™ i5</td>
            <td
              style="text-align: center;font-family: 微软雅黑;color:#fff;width:55px;font-weight: 700;"
            >酷睿™ i7</td>
            <td
              style="text-align: center;font-family: 微软雅黑;color:#fff;width:55px;font-weight: 700;"
            >酷睿™ i9</td>

            <td
              style="font-family: 微软雅黑;text-align: center;color:#fff;width:70px;height: 30px;line-height: 30px;font-weight: 700;"
            >积分上限</td>
          </tr>
          <!-- 活动一------------------------------------ -->
          <tr>
            <td
              rowspan="6"
              style="text-align: center;font-family: 微软雅黑;color:#fff;width:60px;font-weight: 700;background-color: #003C71;"
            >活动1</td>
            <td rowspan="3" style="text-align: center;font-family: 微软雅黑; color:#003C71;" width="86">
              英特尔台式机产品
              <br />（包含一体机）
            </td>
            <td
              style="text-align: center;font-family: 微软雅黑; color:#003C71; width: 70px "
              width="70"
            >8代</td>
            <td rowspan="3" style="text-align: center;font-family: 微软雅黑; color:#003C71;">4</td>
            <td style="text-align: center;font-family: 微软雅黑; color:#003C71;">-</td>
            <td style="text-align: center;font-family: 微软雅黑; color:#003C71;">-</td>
            <td style="text-align: center;font-family: 微软雅黑; color:#003C71;">5</td>
            <td style="text-align: center;font-family: 微软雅黑; color:#003C71;">10</td>
            <td style="text-align: center;font-family: 微软雅黑; color:#003C71;">-</td>
            <td rowspan="6" style="text-align: center;font-family: 微软雅黑;color:#003C71;">
              至尊A/B级:
              <br />180,000
              <br />菁英级:
              <br />12,000
            </td>
          </tr>
          <tr>
            <td style="text-align: center;font-family: 微软雅黑;color:#003C71;">9代</td>
            <td style="text-align: center;font-family: 微软雅黑;color:#003C71;">-</td>
            <td style="text-align: center;font-family: 微软雅黑;color:#003C71;">-</td>
            <td style="text-align: center;font-family: 微软雅黑;color:#003C71;">5</td>
            <td style="text-align: center;font-family: 微软雅黑;color:#003C71;">10</td>
            <td style="text-align: center;font-family: 微软雅黑;color:#003C71;">12</td>
          </tr>
          <tr>
            <td style="text-align: center;font-family: 微软雅黑;color:#003C71;">10代</td>
            <td style="text-align: center;font-family: 微软雅黑; color:#003C71;">-</td>
            <td style="text-align: center;font-family: 微软雅黑; color:#003C71;">-</td>
            <td style="text-align: center;font-family: 微软雅黑; color:#003C71;">-</td>
            <td style="text-align: center;font-family: 微软雅黑; color:#003C71;">-</td>
            <td style="text-align: center;font-family: 微软雅黑; color:#003C71;">12</td>
          </tr>
          <tr>
            <td rowspan="3" style="text-align: center;font-family: 微软雅黑; color:#003C71;">
              英特尔笔记本产品
              <br />(包含超轻薄，不包含二合一)
            </td>
            <td style="text-align: center;font-family: 微软雅黑; color:#003C71;">8代</td>
            <td rowspan="3" style="text-align: center;font-family: 微软雅黑; color:#003C71;">10</td>
            <td style="text-align: center;font-family: 微软雅黑; color:#003C71;">10</td>
            <td style="text-align: center;font-family: 微软雅黑; color:#003C71;">18</td>
            <td style="text-align: center;font-family: 微软雅黑; color:#003C71;">21</td>
            <td style="text-align: center;font-family: 微软雅黑; color:#003C71;">40</td>
            <td style="text-align: center;font-family: 微软雅黑; color:#003C71;">-</td>
          </tr>

          <tr>
            <td style="text-align: center;font-family: 微软雅黑;color:#003C71;">9代</td>
            <td style="text-align: center;font-family: 微软雅黑;color:#003C71;">-</td>
            <td style="text-align: center;font-family: 微软雅黑;color:#003C71;">-</td>
            <td style="text-align: center;font-family: 微软雅黑;color:#003C71;">21</td>
            <td style="text-align: center;font-family: 微软雅黑;color:#003C71;">40</td>
            <td style="text-align: center;font-family: 微软雅黑;color:#003C71;">60</td>
          </tr>
          <tr>
            <td style="text-align: center;font-family: 微软雅黑;color:#003C71;">10代</td>
            <td style="text-align: center;font-family: 微软雅黑;color:#003C71;">-</td>
            <td style="text-align: center;font-family: 微软雅黑;color:#003C71;">20</td>
            <td style="text-align: center;font-family: 微软雅黑;color:#003C71;">21</td>
            <td style="text-align: center;font-family: 微软雅黑;color:#003C71;">40</td>
            <td style="text-align: center;font-family: 微软雅黑;color:#003C71;">-</td>
          </tr>
          <!-- 活动二----------------------------------------------------  -->
          <tr>
            <td
              style="text-align: center; font-family: 微软雅黑; color: #fff; background-color: #0071C5"
            >活动2</td>
            <td style="text-align: center;font-family: 微软雅黑;color:#0071C5;">
              英特尔笔记本产品
              <br />(包含超轻薄，不包含二合一)
            </td>
            <td style="text-align: center;font-family: 微软雅黑;color:#0071C5;">X1-Extreme</td>
            <td style="text-align: center;font-family: 微软雅黑;color:#0071C5;">-</td>
            <td style="text-align: center;font-family: 微软雅黑;color:#0071C5;">-</td>
            <td style="text-align: center;font-family: 微软雅黑;color:#0071C5;">-</td>
            <td style="text-align: center;font-family: 微软雅黑;color:#0071C5;">-</td>
            <td style="text-align: center;font-family: 微软雅黑;color:#0071C5;">30</td>
            <td style="text-align: center;font-family: 微软雅黑;color:#0071C5;">-</td>
            <td style="text-align: center;font-family: 微软雅黑;color:#0071C5;">
              至尊A/B级:
              <br />5,000
              <br />菁英级:
              <br />2,000
            </td>
          </tr>
          <!-- <tr>
            <td
              colspan="2"
              style="text-align: center;font-family: 微软雅黑;color:#0071C5;"
            >英特尔台式机产品（包含超轻薄，不包含二合一）</td>
            <td style="text-align: center;font-family: 微软雅黑;color:#0071C5;">-</td>
            <td style="text-align: center;font-family: 微软雅黑;color:#0071C5;">-</td>
            <td style="text-align: center;font-family: 微软雅黑;color:#0071C5;">-</td>
            <td style="text-align: center;font-family: 微软雅黑;color:#0071C5;">-</td>
            <td style="text-align: center;font-family: 微软雅黑;color:#0071C5;">30</td>
            <td style="text-align: center;font-family: 微软雅黑;color:#0071C5;">-</td>
          </tr>-->

          <!-- 活动三-------------------------------------- -->
          <!-- <tr>
            <td
              rowspan="3"
              style="text-align: center; font-family: 微软雅黑; color: #fff; background-color: #00AEEF"
            >活动3</td>
            <td colspan="2" style="text-align: center;font-family: 微软雅黑;color:#00AEEF;">Think小新系列机型笔记本</td>
            <td style="text-align: center;font-family: 微软雅黑;color:#00AEEF;">-</td>
            <td style="text-align: center;font-family: 微软雅黑;color:#00AEEF;">-</td>
            <td style="text-align: center;font-family: 微软雅黑;color:#00AEEF;">28</td>
            <td style="text-align: center;font-family: 微软雅黑;color:#00AEEF;">21</td>
            <td style="text-align: center;font-family: 微软雅黑;color:#00AEEF;">40</td>
            <td style="text-align: center;font-family: 微软雅黑;color:#00AEEF;">-</td>
            <td style="text-align: center;font-family: 微软雅黑;color:#00AEEF;" rowspan="3">
              至尊A/B级:
              <br />5,000
              <br />菁英级:
              <br />2,000
            </td>
          </tr>
          <tr>
            <td
              colspan="2"
              style="text-align: center;font-family: 微软雅黑;color:#00AEEF;"
            >Think小新Air系列机型笔记本</td>
            <td style="text-align: center;font-family: 微软雅黑;color:#00AEEF;">-</td>
            <td style="text-align: center;font-family: 微软雅黑;color:#00AEEF;">-</td>
            <td style="text-align: center;font-family: 微软雅黑;color:#00AEEF;">28</td>
            <td style="text-align: center;font-family: 微软雅黑;color:#00AEEF;">21</td>
            <td style="text-align: center;font-family: 微软雅黑;color:#00AEEF;">40</td>
            <td style="text-align: center;font-family: 微软雅黑;color:#00AEEF;">-</td>
          </tr>
          <tr>
            <td
              colspan="2"
              style="text-align: center;font-family: 微软雅黑;color:#00AEEF;"
            >Think小新pro系列机型笔记本</td>
            <td style="text-align: center;font-family: 微软雅黑;color:#00AEEF;">-</td>
            <td style="text-align: center;font-family: 微软雅黑;color:#00AEEF;">-</td>
            <td style="text-align: center;font-family: 微软雅黑;color:#00AEEF;">28</td>
            <td style="text-align: center;font-family: 微软雅黑;color:#00AEEF;">21</td>
            <td style="text-align: center;font-family: 微软雅黑;color:#00AEEF;">40</td>
            <td style="text-align: center;font-family: 微软雅黑;color:#00AEEF;">-</td>
          </tr>-->
          <!-- 活动4 ----------------------------------------------- -->
          <!-- <tr>
            <td
              rowspan="3"
              style="text-align: center;font-family: 微软雅黑;color:#fff;width:60px;background-color: #003C71;"
            >活动4</td>
            <td style="text-align: center;font-family: 微软雅黑; color:#003C71;" rowspan="2">
              英特尔笔记本产品
              <br />(包含一体机)
            </td>
            <td style="text-align: center;font-family: 微软雅黑; color:#003C71;" width="70">YOGA A940</td>
            <td style="text-align: center;font-family: 微软雅黑; color:#003C71;">-</td>
            <td style="text-align: center;font-family: 微软雅黑; color:#003C71;">-</td>
            <td style="text-align: center;font-family: 微软雅黑; color:#003C71;">-</td>
            <td style="text-align: center;font-family: 微软雅黑; color:#003C71;">-</td>
            <td style="text-align: center;font-family: 微软雅黑; color:#003C71;">30</td>
            <td style="text-align: center;font-family: 微软雅黑; color:#003C71;">30</td>
            <td style="text-align: center;font-family: 微软雅黑;color:#003C71;" rowspan="3">
              至尊A/B级:
              <br />5,000
              <br />菁英级:
              <br />2,000
            </td>
          </tr>
          <tr>
            <td style="text-align: center;font-family: 微软雅黑; color:#003C71;" width="70">GeekPro</td>
            <td style="text-align: center;font-family: 微软雅黑; color:#003C71;">-</td>
            <td style="text-align: center;font-family: 微软雅黑; color:#003C71;">-</td>
            <td style="text-align: center;font-family: 微软雅黑; color:#003C71;">-</td>
            <td style="text-align: center;font-family: 微软雅黑; color:#003C71;">-</td>
            <td style="text-align: center;font-family: 微软雅黑; color:#003C71;">30</td>
            <td style="text-align: center;font-family: 微软雅黑; color:#003C71;">-</td>
          </tr>
          <tr>
            <td style="text-align: center;font-family: 微软雅黑; color:#003C71;">
              英特尔笔记本产品
              <br />(包含超轻薄，不包含二合一)
            </td>
            <td style="text-align: center;font-family: 微软雅黑; color:#003C71;" width="70">Y9000</td>
            <td style="text-align: center;font-family: 微软雅黑; color:#003C71;">-</td>
            <td style="text-align: center;font-family: 微软雅黑; color:#003C71;">-</td>
            <td style="text-align: center;font-family: 微软雅黑; color:#003C71;">-</td>
            <td style="text-align: center;font-family: 微软雅黑; color:#003C71;">-</td>
            <td style="text-align: center;font-family: 微软雅黑; color:#003C71;">30</td>
            <td style="text-align: center;font-family: 微软雅黑; color:#003C71;">-</td>
          </tr>-->

          <!-- 活动5 ------------------------------------------------- -->
          <!-- <tr>
            <td
              rowspan="3"
              style="text-align: center; font-family: 微软雅黑; color: #fff; background-color: #0071C5"
            >活动5</td>
            <td
              style="text-align: center;font-family: 微软雅黑;color:#0071C5;"
              colspan="2"
            >S940 (Sicilia) – ICL</td>
            <td style="text-align: center;font-family: 微软雅黑;color:#0071C5;">-</td>
            <td style="text-align: center;font-family: 微软雅黑;color:#0071C5;">-</td>
            <td style="text-align: center;font-family: 微软雅黑;color:#0071C5;">-</td>
            <td style="text-align: center;font-family: 微软雅黑;color:#0071C5;">-</td>
            <td style="text-align: center;font-family: 微软雅黑;color:#0071C5;">40</td>
            <td style="text-align: center;font-family: 微软雅黑;color:#0071C5;">40</td>

            <td style="text-align: center;font-family: 微软雅黑;color:#0071C5;" rowspan="3">
              至尊A/B级:
              <br />5,000
              <br />菁英级:
              <br />2,000
            </td>
          </tr>
          <tr>
            <td
              style="text-align: center;font-family: 微软雅黑;color:#0071C5;"
              colspan="2"
            >C940 (Veyron) – ICL</td>
            <td style="text-align: center;font-family: 微软雅黑;color:#0071C5;">-</td>
            <td style="text-align: center;font-family: 微软雅黑;color:#0071C5;">-</td>
            <td style="text-align: center;font-family: 微软雅黑;color:#0071C5;">-</td>
            <td style="text-align: center;font-family: 微软雅黑;color:#0071C5;">-</td>
            <td style="text-align: center;font-family: 微软雅黑;color:#0071C5;">40</td>
            <td style="text-align: center;font-family: 微软雅黑;color:#0071C5;">40</td>
          </tr>
          <tr>
            <td
              style="text-align: center;font-family: 微软雅黑;color:#0071C5;"
              colspan="2"
            >S740 (Lugu) – ICL</td>
            <td style="text-align: center;font-family: 微软雅黑;color:#0071C5;">-</td>
            <td style="text-align: center;font-family: 微软雅黑;color:#0071C5;">-</td>
            <td style="text-align: center;font-family: 微软雅黑;color:#0071C5;">-</td>
            <td style="text-align: center;font-family: 微软雅黑;color:#0071C5;">-</td>
            <td style="text-align: center;font-family: 微软雅黑;color:#0071C5;">40</td>
            <td style="text-align: center;font-family: 微软雅黑;color:#0071C5;">40</td>
          </tr>-->

          <tr class="explain">
            <td
              colspan="10"
              style="font-family:微软雅黑;text-align: left;line-height: 24px; font-size: 12px; padding-left: 3px;"
            >
              * 请查看“本季度所有积分奖励计划及活动原则”部分，了解参与各活动详细产品列表
              <br />**参与本季度《2020年第一季度英特尔
              <Sup></Sup>技术合作伙伴品牌零售渠道积分奖励》项目，英特尔将以贵司在英特尔
              <Sup></Sup>渠道积分网站中所录入级别为准，提供至尊A/B级渠道每业务ID最高200,000积分奖励；菁英级渠道每业务ID最高20,000积分奖励。
            </td>
          </tr>
        </table>

        <StanceTable hasTop>
          <tr>
            <td
              width="35"
              style="font-size:13px;text-align: left; font-family: 微软雅黑; line-height: 22px;color: #000000; font-weight: 600"
            >二、</td>
            <td
              style="font-size:13px;text-align: left; font-family: 微软雅黑; line-height: 22px;color: #000000; font-weight: 600"
            >本季度所有积分奖励计划及活动原则</td>
          </tr>
          <tr>
            <td width="35"></td>
            <td>
              <StanceTable width="599">
                <!-- 活动一 ---------------------------------------------- -->
                <tr>
                  <TCell>
                    <u>
                      <b>活动1：常规积分奖励计划</b>
                    </u>
                    <br />
                    <u>
                      <b>促销产品：</b>
                    </u>基于英特尔
                    <Sup></Sup>架构（IA架构）的笔记本（包含超轻薄，不包含二合一），台式机（含AIO）。
                    只有在本季度下发的符合条件的英特尔产品列表（Eligible SKU List） 中列明的产品型号，方可参与本季度的常规积分奖励活动。点击链接“
                    <a
                      href="https://prc-points.inteltechnologyprovider.com/sites/static/public/proc/%E7%AC%A6%E5%90%88%E6%9D%A1%E4%BB%B6%E7%9A%84%E8%8B%B1%E7%89%B9%E5%B0%94%E4%BA%A7%E5%93%81%E5%88%97%E8%A1%A8.pdf"
                      target="_blank"
                    >
                      符合条件的英特尔
                      <Sup></Sup>产品
                    </a>”查看产品型号明细。
                  </TCell>
                </tr>

                <!-- 活动二 ---------------------------------------------- -->

                <!-- <tr>
                  <TCell>
                    <u>
                      <b>
                        活动2：英特尔
                        <Sup></Sup>傲腾™固态盘（英特尔
                        <Sup></Sup>傲腾TM增强型SSD）特别促销积分奖励计划
                      </b>
                    </u>
                    <br />活动期间，通过本促销计划，采购搭载英特尔
                    <Sup></Sup>傲腾™增强型SSD(H10) 产品并配置“
                    <a
                      href="https://prc-points.inteltechnologyprovider.com/sites/static/public/proc/%E7%AC%A6%E5%90%88%E6%9D%A1%E4%BB%B6%E7%9A%84%E8%8B%B1%E7%89%B9%E5%B0%94%E4%BA%A7%E5%93%81%E5%88%97%E8%A1%A8.pdf"
                      target="_blank"
                    >
                      符合条件的英特尔
                      <Sup></Sup>产品
                    </a>”
                    列表中的英特尔
                    <Sup></Sup>酷睿™ i3，酷睿™ i5 及酷睿™i7处理器的Think小新14、340C 及 510S系列笔记本产品，
                    将获得40积分(/每台笔记本)奖励，菁英级最高可赚取2,000积分，至尊A/B级最高可赚取5,000积分。
                  </TCell>
                </tr>-->
                <!-- 活动三 ---------------------------------------------- -->

                <!-- <tr>
                  <TCell>
                    <u>
                      <b>
                        活动3：英特尔
                        <Sup></Sup>酷睿™U系列处理器笔记本特别促销奖励计划
                      </b>
                    </u>
                    <br />活动期间，通过本促销计划采购搭载第八代英特尔
                    <Sup></Sup>酷睿™i3/i5/i7 U系列处理器的Think小新、
                    小新Air 和 小新pro系列机型笔记本产品，每单位产品将获得双倍积分奖励，
                    菁英级最高可赚取2,000奖励积分，至尊A/B级最高可赚取5,000奖励积分。参与本促销活动的英特尔
                    <Sup></Sup>产品请见下表2：
                  </TCell>
                </tr>-->

                <!-- <tr>
                  <TCell>
                    <b>表2:</b>
                  </TCell>
                </tr>-->

                <!-- <tr>
                  <td>
                    <table
                      width="599"
                      border="1"
                      style="border-collapse:collapse;font-size: 12px;;font-family: 微软雅黑;margin: 0 auto;width: 599px;text-align: center;line-height: 20px;"
                    >
                      <tr style="background-color: #0070C0;">
                        <td
                          colspan="2"
                          style="font-family: 微软雅黑;text-align: center;color:#fff;height: 30px;line-height: 30px;font-weight: 700;"
                        >
                          符合条件的英特尔
                          <Sup></Sup>产品
                        </td>
                        <td
                          width="80"
                          style="font-family: 微软雅黑;text-align: center;color:#fff;height: 30px;line-height: 30px;font-weight: 700;"
                        >积分(分/台)</td>
                      </tr>
                      <tr>
                        <td style="font-family: 微软雅黑;text-align: center;">
                          英特尔
                          <Sup></Sup>酷睿™ i3
                        </td>
                        <td style="font-family: 微软雅黑;text-align: center;">
                          i3-8130U&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          i3-8145U&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          i3-8245U
                        </td>
                        <td style="font-family: 微软雅黑;text-align: center;">28</td>
                      </tr>

                      <tr>

                        <td style="font-family: 微软雅黑;text-align: center;">
                          英特尔
                          <Sup></Sup>酷睿™ i5
                        </td>
                        <td style="font-family: 微软雅黑;text-align: center;">
                          i5-8250U&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          i5-8265U&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          i5-8350U
                        </td>

                        <td style="font-family: 微软雅黑;text-align: center;">21</td>
                      </tr>
                      <tr>

                        <td style="font-family: 微软雅黑;text-align: center;">
                          英特尔
                          <Sup></Sup>酷睿™ i7
                        </td>
                        <td style="font-family: 微软雅黑;text-align: center;">
                          i7-8550U&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          i7-8565U&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          i7-8650U
                        </td>

                        <td style="font-family: 微软雅黑;text-align: center;">40</td>
                      </tr>
                    </table>
                  </td>
                </tr>-->
                <!-- 活动四 ---------------------------------------------- -->

                <tr height="10"></tr>
                <tr>
                  <TCell>
                    <u>
                      <b>
                        活动2：
                        Think品牌指定机型特别促销奖励计划
                      </b>
                    </u>
                    <br />
                    活动期间，通过本促销计划采购搭载英特尔酷睿™i7处理器的Think品牌指定机型笔记本，
                    将获得每单位产品30积分奖励，菁英级最高可赚取2,000奖励积分，至尊A/B级最高可赚取5,000奖励积分。
                    参与本促销活动的英特尔产品请见下表2：
                  </TCell>
                </tr>

                <tr>
                  <TCell>
                    <b>表2:</b>
                  </TCell>
                </tr>

                <tr>
                  <td>
                    <DataTable
                      width="599"
                      :column="column"
                      :dataSource="tableData"
                      :headStyle="{'background-color': '#0070C0', color: '#ffffff'}"
                    ></DataTable>
                  </td>
                </tr>

                <!-- <tr>
                <td>
                  <table
                    width="599"
                    border="1"
                    style="border-collapse:collapse;font-size: 12px;;font-family: 微软雅黑;margin: 0 auto;width: 599px;text-align: center;line-height: 20px;"
                  >
                    <tr style="background-color: #0070C0;">
                      <td
                        width="150"
                        style="font-family: 微软雅黑;text-align: center;color:#fff;height: 30px;line-height: 30px;font-weight: 700;"
                      >产品机型</td>
                      <td
                        width="100"
                        style="font-family: 微软雅黑;text-align: center;color:#fff;height: 30px;line-height: 30px;font-weight: 700;"
                      >PC Sku</td>
                      <td
                        width="70"
                        style="font-family: 微软雅黑;text-align: center;color:#fff;height: 30px;line-height: 30px;font-weight: 700;"
                      >PC Model</td>
                      <td
                        style="font-family: 微软雅黑;text-align: center;color:#fff;height: 30px;line-height: 30px;font-weight: 700;"
                      >
                        符合条件的英特尔
                        <Sup></Sup>产品
                      </td>
                      <td
                        width="80"
                        style="font-family: 微软雅黑;text-align: center;color:#fff;height: 30px;line-height: 30px;font-weight: 700;"
                      >积分(分/台)</td>
                    </tr>
                    <tr>
                      <td style="font-family: 微软雅黑;text-align: left;">英特尔台式机产品（包含一体机）</td>
                      <td style="font-family: 微软雅黑;text-align: center;">PA90</td>
                      <td style="font-family: 微软雅黑;text-align: center;">PA90</td>
                      <td style="font-family: 微软雅黑;text-align: center;">i7 9700K</td>
                      <td style="font-family: 微软雅黑;text-align: center;">30</td>
                    </tr>
                  </table>
                </td>
                </tr>-->

                <tr height="10"></tr>
                <!-- 活动wu ---------------------------------------------- -->
                <!-- <tr>
                  <TCell>
                    <u>
                      <b>
                        活动5：英特尔
                        <Sup></Sup>酷睿™移动超能版特别促销奖励计划划
                      </b>
                    </u>
                    <br />活动期间，通过本促销计划采购搭载英特尔
                    <Sup></Sup>酷睿™ i7/i9处理器的ThinkS940、C940及S740机型笔记本，将获得每单位产品40积分奖励，菁英级最高可赚取2,000奖励积分，至尊A/B级最高可赚取5,000奖励积分。参与本促销活动的英特尔
                    <Sup></Sup>产品请见下表4：
                  </TCell>
                </tr>

                <tr>
                  <TCell>
                    <b>表4:</b>
                  </TCell>
                </tr>

                <tr>
                  <td>
                    <table
                      width="599"
                      border="1"
                      style="border-collapse:collapse;font-size: 12px;;font-family: 微软雅黑;margin: 0 auto;width: 599px;text-align: center;line-height: 20px;"
                    >
                      <tr style="background-color: #0070C0;">
                        <td
                          colspan="3"
                          style="font-family: 微软雅黑;text-align: center;color:#fff;height: 30px;line-height: 30px;font-weight: 700;"
                        >
                          符合条件的英特尔
                          <Sup></Sup>产品
                        </td>
                        <td
                          width="80"
                          style="font-family: 微软雅黑;text-align: center;color:#fff;height: 30px;line-height: 30px;font-weight: 700;"
                        >积分(分/台)</td>
                      </tr>
                      <tr>
                        <td
                          style="font-family: 微软雅黑;text-align: left; padding-left: 3px;"
                          width="200"
                          rowspan="2"
                        >
                          S940 (Sicilia) – ICL
                          <br />C940 (Veyron) – ICL
                          <br />S740 (Lugu) – ICL
                          <br />
                        </td>
                        <td style="font-family: 微软雅黑;text-align: center; width:110px">
                          英特尔
                          <Sup></Sup>酷睿™ i7
                        </td>
                        <td style="font-family: 微软雅黑;text-align: left; padding-left:3px;">
                          i7-8850H&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;i7-8750H
                          <br />i7-8850H&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;i7-9700
                        </td>
                        <td style="font-family: 微软雅黑;text-align: center;">40</td>
                      </tr>
                      <tr>
                        <td style="font-family: 微软雅黑;text-align: center;">
                          英特尔
                          <Sup></Sup>酷睿™ i9
                        </td>
                        <td style="font-family: 微软雅黑;text-align: left; padding-left:3px;">i9-9900</td>
                        <td style="font-family: 微软雅黑;text-align: center;">40</td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr height="10"></tr>-->
              </StanceTable>
            </td>
          </tr>
        </StanceTable>

        <StanceTable>
          <tr>
            <TCell :ostyle="{ 'font-size': '14px'}">
              <b>
                <u>活动原则</u>
              </b>
            </TCell>
          </tr>
        </StanceTable>

        <StanceTable>
          <IconText>现有ITP渠道将以英特尔ITP报告为准，非现有ITP渠道将以品牌提报销量报告为准进行积分核算；</IconText>
          <IconText>自2020年起，所有数据报告均要求为月度报告；</IconText>
          <IconText>
            积分核算过程中，您的英特尔-品牌零售渠道合作伙伴级别，以2020年第一季度末在
            英特尔
            <Sup></Sup>渠道积分网站中所录入级别为准；
            <br />
            <b>温馨提示：请贵司确保参与活动前会员账户已为激活状态；</b>如未激活，贵司将无法参与积分奖励计划，获取积分奖励；如对激活流程有任何问题，请点击
            <a
              href="https://prc-points.inteltechnologyprovider.com/sites/static/public/proc/How%20To%20Enroll%20Points%20Aug%202018-ITP.pdf"
              target="_blank"
            >
              《英特尔
              <Sup></Sup>渠道积分会员账户激活流程》
            </a>或联系英特尔客户支持寻求帮助。
          </IconText>
          <IconText>至尊A/B级英特尔品牌零售渠道合作伙伴下挂店面完成培训课程总数每季度不低于15门；菁英级英特尔品牌零售渠道合作伙伴下挂店面完成培训课程总数每季度不低于10门；</IconText>
          <IconText>至尊A/B级英特尔品牌零售渠道合作伙伴将由英特尔服务商对您下挂的任何一家英特尔体验店和英特尔星级店进行店面核查，菁英级英特尔品牌零售渠道合作伙伴将由英特尔呼叫中心对您下挂的任何一家英特尔体验店和英特尔星级店进行电话核查，每季度每个下挂店面至少完成体验环境、体验内容、产品上架、培训、iPOS中的其中至少两项店面行为，否则英特尔将有权冻结您本季度赚取品牌零售渠道各项积分奖励的资格，且该渠道及其下挂店面将无法参加未来2个季度的ITP积分及店面活动；</IconText>
          <IconText>若英特尔在规定时间内未收到渠道销售报告，或本季度渠道销量为零，则您将自动失去参与本季度渠道积分奖励计划的资格，且该渠道下挂的任何一家店面将自动失去英特尔体验店或英特尔星级店的身份；</IconText>
          <IconText>
            了解详细店面行为要求，请点击右侧超链接阅读
            <a
              href="https://prc-points.inteltechnologyprovider.com/sites/static/public/proc/2020%E5%B9%B4%E7%AC%AC%E4%B8%80%E5%AD%A3%E5%BA%A6%20%E8%8B%B1%E7%89%B9%E5%B0%94%20%E5%93%81%E7%89%8C%E9%9B%B6%E5%94%AE%E5%BA%97%E9%9D%A2%E6%B4%BB%E5%8A%A8%E8%AE%A1%E5%88%92.pdf"
              target="_blank"
            >《2020年第一季度 英特尔 品牌零售店面活动计划》</a>
          </IconText>
          <IconText>
            升/降级触发条件：
            <ListTable listType="◆" :dataSource="dataSource11" width="584"></ListTable>
          </IconText>

          <IconText title="合作伙伴权利与义务">
            <ListTable listType="◆" :dataSource="dataSource111" width="584"></ListTable>
          </IconText>
          <IconText title="积分说明">
            本次活动销售奖励积分将以电子邮件的形式通知到参与此次活动的渠道，收到通知后，各个渠道即可登录
            <a
              href="http://prc-points.inteltechnologyprovider.com/"
              style="color: #071C5; text-decoration: underline"
              target="_blank"
            >
              英特尔
              <Sup></Sup>渠道积分网站
            </a>进行礼品兑换。
          </IconText>
          <IconText title="温馨提示">
            此活动仅对英特尔
            <Sup></Sup>渠道积分计划中的菁英A级和菁英B级合作伙伴开放，
            <b>
              请大家确保参与活动前已激活英特尔
              <Sup></Sup>渠道积分计划的会员账号
            </b>,
            以保障活动奖励的正常享有；如果还未完成账号激活，请尽快登陆
            <a
              href="http://prc-points.inteltechnologyprovider.com/"
              style="color: #071C5; text-decoration: underline"
              target="_blank"
            >
              英特尔
              <Sup></Sup>渠道积分网站
            </a>激活账户 (注册流程请咨询Intel客服中心热线800-820-1100)。
          </IconText>
          <IconText>
            依照英特尔的网站使用条款
            <a
              href="https://www.intel.cn/content/www/cn/zh/legal/terms-of-use.html"
              style="color: #071C5; text-decoration: underline"
              target="_blank"
            >（https://www.intel.cn/content/www/cn/zh/legal/terms-of-use.html）</a>，
            凡以您的账户在英特尔网站上进行的操作，均视为您的操作并由您负责；如果您的账户、密码等信息有误或发生泄露，导致您的权益受损，请理解英特尔将不承担任何责任。
          </IconText>
        </StanceTable>

        <StanceTable hasTop hasBottom>
          <tr>
            <td
              style="font-size:15px;text-align: left; font-family: 微软雅黑; line-height: 25px; text-decoration: underline; color: #000000; font-weight: 600; "
            >注意事项</td>
          </tr>
        </StanceTable>

        <StanceTable hasBottom>
          <!-- <IconText>只有在本季度下发的符合条件的英特尔产品列表（Eligible SKU List ）中列明的产品型号，方可参与本季度的常规奖励及特别机型奖励活动。</IconText> -->
          <IconText>
            本活动受以上条款和条件限制（“活动条款”），此外仍须遵守英特尔
            <Sup></Sup>技术合作伙伴（“ITP”）项目的条款和条件，包括附录A与积分补充条款和条件（“ITP项目条款”）。该ITP项目条款为本活动条款的一部分，其详情可在此网址查询：
            <a
              href="https://www.intel.com/content/www/us/en/technology-provider/legal/program-terms-and-conditions.html"
              target="_blank"
            >https://www.intel.com/content/www/us/en/technology-provider/legal/program-terms-and-conditions.html.</a>
            活动条款和ITP项目条款统称为“活动规则”。
          </IconText>

          <IconText>
            合格会员：
            <ListTable
              listType="-"
              :dataSource="dataSource2"
              :tStyle="{ 'font-size': '12px', 'line-height': '20px' }"
              width="620"
            ></ListTable>
          </IconText>
          <IconText>
            在不影响活动规则所规定的任何权利和救济措施以及法律规定的任何其他权利和救济措施的前提下，如果您未能遵守活动规则，英特尔有权选择：
            <ListTable
              listType="-"
              :dataSource="dataSource3"
              :tStyle="{ 'font-size': '12px', 'line-height': '20px' }"
              width="620"
            ></ListTable>
          </IconText>
          <IconText>本活动条款对特定渠道级别的标准和要求，为该渠道级别所应满足的最低标准。英特尔可以根据本活动条款以及ITP项目条款和条件的内容，对会员、渠道或客户的级别状态进行定期评估，并按照本活动条款进行相应的升级、降级操作。若本活动条款中的任何内容，与ITP项目条款和条件存在冲突，应以本活动条款为准。任何英特尔商标许可协议和/或英特尔标识许可协议的条款均应优先于本活动条款中涉及上述协议内容的条款。除非英特尔授权代表书面签署，英特尔的标准销售条款和条件将适用于任何合格会员与英特尔之间发生的英特尔产品购买或积分兑换等交易，且在适用中优先于任何其他协议。</IconText>
          <IconText>本活动条款中未定义的大写术语与在ITP项目条款中的大写术语具有相同含义。</IconText>
          <IconText>合格会员接受本活动中的积分表示您接受本活动条款。</IconText>
          <IconText>英特尔保留以任何形式通知客户的方式，随时修改、暂停或终止此次活动的权利，且上述修改、暂停或终止应立即生效，但不影响活动中已累积的任何权益，除此之外英特尔不因上述修改、暂停或终止而承担任何责任。</IconText>
          <IconText>
            如出现以下状况，则您的英特尔
            <Sup></Sup>技术合作伙伴(简称ITP)账户将会自动失效：
            <ListTable
              listType="-"
              :dataSource="dataSource4"
              :tStyle="{ 'font-size': '12px', 'line-height': '20px' }"
              width="620"
            ></ListTable>
          </IconText>
        </StanceTable>
        <StanceTable hasBottom>
          <tr>
            <td width="40"></td>
            <td style="font-size:14px;text-align: left; font-family: 微软雅黑; line-height: 20px;">◆</td>
            <td
              style="font-size:12px;text-align: left; font-family: 微软雅黑; line-height: 20px;"
            >&nbsp;&nbsp;服务电话：400-920-2200 （座机和手机皆可拨打）；800-820-1100 （支持座机拨打）</td>
          </tr>
          <tr>
            <td width="40"></td>
            <td style="font-size:14px;text-align: left; font-family: 微软雅黑; line-height: 20px;">◆</td>
            <td style="font-size:12px;text-align: left; font-family: 微软雅黑; line-height: 20px;">
              &nbsp;&nbsp;联系邮箱：
              <a href="mailto:programs@intel.com"></a> programs@intel.com
            </td>
          </tr>
          <tr>
            <td width="40"></td>
            <td style="font-size:14px;text-align: left; font-family: 微软雅黑; line-height: 20px;">◆</td>
            <td
              style="font-size:12px;text-align: left; font-family: 微软雅黑; line-height: 20px;"
            >&nbsp;&nbsp;服务时间：周一至周五，上午9:00 – 下午17:00</td>
          </tr>
        </StanceTable>

        <StanceTable hasTop>
          <tr>
            <td width="20"></td>
            <td
              width="20"
              style="font-size:14px;text-align: left; font-family: 微软雅黑; line-height: 20px;"
              valign="top"
            >-</td>
            <td style="font-size:12px;text-align: left; font-family: 微软雅黑; line-height: 20px;">
              当您的ITP账户失效时，您将不能享受英特尔为您量身定制的ITP会员权益，同时您将失去访问英特尔
              <Sup></Sup>渠道积分网站的资格， 影响您在该网站账户中的积分。
            </td>
          </tr>
        </StanceTable>
        <StanceTable hasTop hasBottom>
          <tr>
            <td
              style="font-size:12px;text-align: left; font-family: 微软雅黑; line-height: 20px;"
            >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;英特尔真诚邀请您参与“2020年第一季度英特尔-品牌零售 Think品牌渠道积分奖励计划“，让我们在2020年携手共进，共创佳绩！</td>
          </tr>
        </StanceTable>

        <Footer hasExplain></Footer>
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
import TCell from "@/components/edm/TCell.vue";
import DataTable from "@/components/edm/DataTable";

const asideData = [
  { text: "至尊A级品牌零售合作伙伴本季度最高可获得 200,000 积分奖励；" },
  { text: "至尊B级品牌零售合作伙伴本季度最高可获得 200,000 积分奖励；" },
  { text: "菁英级品牌零售合作伙伴本季度最高可获得20,000 积分奖励；" }
];
const asideData2 = [
  {
    text:
      "参加销售奖励的渠道在2020年3月31日完成进货，并在每月10日前提交上个月的销量报告至OEM厂商。"
  },
  {
    text:
      "至尊A/B级英特尔品牌零售渠道合作伙伴下挂店面完成培训课程总数每季度不低于15门，菁英级英特尔品牌零售渠道合作伙伴下挂店面完成培训课程总数每季度不低于10门。"
  },
  { text: "配合品牌方和英特尔，完成指定产品销售，店面行为及市场营销活动。" }
];

export const dataSource1 = [
  {
    text:
      "现有ITP渠道将以英特尔ITP报告为准，非现有ITP渠道将以品牌提报销量报告为准进行积分核算；"
  },
  {
    text: "自2020年起， 所有数据报告均要求为月度报告；"
  },
  {
    text:
      "积分核算过程中，您的英特尔-品牌零售渠道合作伙伴级别，以2020年第二季度末在英特尔<sup>®</sup>渠道积分网站中所录入级别为准；"
  },
  {
    text:
      "菁英级英特尔品牌零售渠道合作伙伴下挂店面完成培训课程总数每季度不低于15门；"
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
  {
    text:
      "了解详细店面行为要求，请点击右侧超链接阅读<a href='https://www.intel.com/content/www/cn/zh/technology-provider/local/brand-retailer-campaign-plan-q2-19.html' target='_black'>《2019年第二季度 英特尔 品牌零售店面活动计划》</a>。"
  }
  // { text: "升/降级触发条件：" }
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
  {
    text:
      "候选渠道须同时满足<u>基本销量</u>，<u>下挂店面数量</u>，<u>参加ITP时间</u>，<u>培训</u>及<u>其他有关</u>要求的，逐级升级；"
  },
  {
    text:
      "若在任何1个季度的ITP积分项目销量为<u>0</u>，则该渠道退出品牌零售ITP项目，且半年内不得再提名加入；"
  },
  {
    text:
      "若在任何1个季度渠道下挂店面为<u>0</u>，则该渠道退出品牌零售ITP项目，且半年内不得再提名加入；"
  },
  {
    text:
      "若品牌厂商对其<u>不合作渠道</u>，向英特尔提出要求退出品牌零售ITP项目的渠道，该渠道则退出项目且半年内不得再提名加入；"
  },
  {
    text:
      "若渠道连续2个季度ITP积分项目销量<u>不足所在级别要求</u>（至尊A级2500台/季度；至尊B级1000台/季度；菁英级100台/季度），则该渠道下降一级，直至退出；"
  },
  {
    text:
      "若连续2个季度渠道下挂店面数量<u>不满足所在级别要求</u>（至尊A级10个；至尊B级5个；菁英级1个），则该渠道下降一级，直至退出品牌零售ITP项目。"
  },
  {
    text:
      "若连续2个季度渠道下挂店面完成培训课程总数均未达到15门，则该则该渠道下降一级，直至退出品牌零售ITP项目。"
  }
];
const dataSource111 = [
  {
    text:
      "至尊A/B级享有获得英特尔客户团队的支持，优先获得品牌及英特尔联合物料支持，优先参加产品推广活动，优先参加英特尔各项会议及面对面的培训机会；"
  },
  {
    text:
      "菁英级合作伙伴享有参加ITP常规积分项目，品牌及英特尔联合物料支持，产品推广活动，网络培训机会的权利；"
  },
  { text: "应履行义务：" },
  { text: "应品牌方和英特尔要求，完成指定产品销售，店面行为及市场营销活动" },
  {
    text:
      "配合品牌方，按时提报月度销量及其他要求的市场报告，并对数据真实及完整性负责"
  },
  { text: "接受英特尔服务商的入店支持和核查" }
  // { text: '若连续2个季度渠道下挂店面数量<u>不满足所在级别要求</u>（菁英级下挂至少1个店面），则该渠道下降一级，直至退出品牌零售ITP项目。'},
];
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

const column = [
  {
    title: "产品机型",
    dataIndex: "text1",
    rowspan: 2,
  },
  {
    title: 'PC SkuSku"',
    dataIndex: "text2"
  },
  {
    title: 'PC Model"',
    dataIndex: "text3"
  },
  {
    title: "符合条件的英特尔<sup>®</sup>产品",
    dataIndex: "text4",
    width: 140
  },
  {
    title: "积分(分/台)",
    dataIndex: "text5",
    width: 80
  }
];

const tableData = [
  {
    text1: "英特尔笔记本产品(包含超轻薄，不包含二合一)",
    text2: "X1-Extreme",
    text3: "X1-Extreme",
    text4: "i7-8850H",
    text5: "30"
  },
  { text1: "i7-8750H", text2: "30" }
];

export default {
  data() {
    return {
      dataSource1,
      dataSource11,
      dataSource111,
      dataSource2,
      dataSource3,
      dataSource4,
      asideData,
      asideData2,
      column,
      tableData
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
    TCell,
    DataTable
  }
};
</script>

