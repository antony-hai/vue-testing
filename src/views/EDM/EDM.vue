<template>
  <table align="center" style="text-align: center; font-family: 微软雅黑; margin: 0 auto;">
    <tr>
      <td>
        <!-- 固定好的标题 -->
        <Nav></Nav>
        <!-- 抬头的图片 -->
        <ImageRow :imgUrl="headImgUrl"></ImageRow>
        <!-- 通用的表格  站位表格 -->
        <StanceTable hasTop>
          <td style="color:#0071C5;text-align: left;font-family: 微软雅黑; font-size: 13px;">
           让我们助力您推动数据中心硬件业务。如果您参加了Intel<Sup></Sup> Partner Connect，采购指定英特尔<Sup></Sup> XEON至强<Sup></Sup>可扩展处理器和英特尔<Sup></Sup>固态盘，可赚取积分。
          </td>
        </StanceTable>

        <StanceTable hasTop>
          <tr>
            <td>
              <StanceTable width="434">
                <!-- <td style="color:#0071C5;text-align: left;font-family: 微软雅黑; font-size: 12px;">
                   今年参加Intel<Sup></Sup> Partner Connect的每位英特尔<Sup></Sup>技术合作伙伴，采购高端发烧友台式机组件后均可享受这些专属积分促销活动带来的积分收益，例如第九代英特尔<Sup></Sup>酷睿™处理器最新产品和英特尔<Sup></Sup>酷睿™ X系列处理器。
                </td> -->
                <!-- <tr height="10"></tr> -->
                <tr>
                  <TCell>
                  采购指定第二代英特尔<Sup></Sup>XEON至强<Sup></Sup>Platinum可扩展处理器，每单位产品可赚取900积分；采购英特尔<Sup></Sup>XEON至强<Sup></Sup>Gold可扩展处理器，每单位产品最高可赚取500积分；采购英特尔<Sup></Sup>XEON至强<Sup></Sup>Silver可扩展处理器，每单位产品可赚取45积分；采购英特尔<Sup></Sup>固态盘，每单位产品最高亦可赚取800积分。
                  </TCell>
                </tr>
                <!-- <tr height="10"></tr>
                <tr>
                  <TCell>
                    <ListTable :dataSource="dataSource" listType="●" width="414"></ListTable>
                  </TCell>
                </tr> -->
                <!-- <tr height="10"></tr>
                <tr>
                  <TCell>在此促销活动中，您可以赚取无上限限制的积分，促销活动时间为即日起截至6月30日。</TCell>
                </tr> -->
                <!-- <tr height="10"></tr>
                <tr>
                  <TCell><a href="https://prc-points.inteltechnologyprovider.com/node/1249" target="_blank">访问英特尔<Sup></Sup>渠道积分网站了解更多信息。</a></TCell>
                </tr> -->
              </StanceTable>
            </td>
            <td width="200" align="right" valign="top">
              <img width="180" src="http://show.easeye.com.cn/fckattach/2019-05-07/e3b9e77152a2095d72521d1898764e2d/image/a7b888adf68b10e960ebbf64daa337b5_easeyethumbnail.png" alt="">  
            </td>            
          </tr>
        </StanceTable>

        <StanceTable hasBottom hasTop>
          <tr>
            <TCell>组合采购英特尔<Sup></Sup>XEON至强<Sup></Sup>可扩展处理器和英特尔<Sup></Sup>固态盘，每组合可赚取150积分！</TCell>
          </tr>
          <tr height="10"></tr>
          <tr>
            <TCell>
              在此促销活动中最高可赚取500,000积分，促销活动时间为2019年5月19日至2019年7月13日。此促销活动的积分收益值高于所有常规积分奖励活动及其他正在进行的促销活动。
            </TCell>
          </tr>
          <tr height="10"></tr>
          <tr>
           <TCell><a href="https://prc-points.inteltechnologyprovider.com/node/1249" target="_blank">访问英特尔<Sup></Sup>渠道积分网站了解更多信息。</a></TCell>
          </tr>
          <tr height="10"></tr>
          <tr>
            <td style="text-align: left;font-family: 微软雅黑;">
              本促销活动有效期为2019年5月19日至2019年7月13日（“促销活动时间”），适用对象为参加2019年5月14日至16日在澳大利亚悉尼会议中心举办的2019 Intel Partner Connect 活动的中华人民共和国（仅为本促销条款的目的，系指不包括香港、澳门和台湾的境内地区）的英特尔<Sup></Sup>技术合作伙伴中已激活的至尊会员及菁英会员（“合格会员”）。
            </td>
          </tr>
          <tr style="height: 10px"></tr>
          <tr>
            <td style="text-align: left;font-family: 微软雅黑;">
              在促销活动期间，对合格会员从英特尔<Sup></Sup>授权总代理（“IAD”）、英特尔<Sup></Sup>授权集成供应商（“IACS”）或英特尔<Sup></Sup>认可供应商（“IAS”） [视具体情况而定]购买的如下列表中的英特尔产品（“符合条件的英特尔<Sup></Sup>产品”），英特尔将实行以下积分奖励：
            </td>
          </tr>
        </StanceTable>

        <StanceTable>
          <!-- <tr height="10"></tr>
          <tr>
            <TCell :ostyle="{'font-size': '13px'}"><strong>目录A</strong></TCell>
          </tr> -->
          <tr height="10"></tr>
          <tr>
            <TCell>
              <DataTable :dataSource="tableData1" :column="cloumnFor1" :headStyle="tableHeadStyle"></DataTable>
            </TCell>
          </tr>
          <!-- <tr height="10"></tr>
          <tr>
            <TCell :ostyle="{'font-size': '13px'}"><strong>目录B</strong></TCell>
          </tr>
          <tr height="10"></tr>
          <tr>
            <TCell>
              <DataTable :dataSource="tableData2" :column="column1" :headStyle="tableHeadStyle"></DataTable>
            </TCell>
          </tr>
          <tr height="10"></tr>
          <tr>
            <TCell :ostyle="{'font-size': '13px'}"><strong>目录C</strong></TCell>
          </tr>
          <tr height="10"></tr>
          <tr>
            <TCell>
              <DataTable :dataSource="tableData3" :column="column1" :headStyle="tableHeadStyle"></DataTable>
            </TCell>
          </tr> -->
          <!-- <tr height="10"></tr>
          <tr>
            <TCell :ostyle="{'font-size': '13px'}"><strong>其他产品</strong></TCell>
          </tr> -->
          <tr height="10"></tr>
          <tr>
            <TCell>
              <DataTable :dataSource="tableData4" :column="cloumnFor2" :headStyle="tableHeadStyle"></DataTable>
            </TCell>
          </tr>
          
        </StanceTable>




        <!-- <DataTable :dataSource="dataSource2" :column="column2" :headStyle="tableHeadStyle"></DataTable> -->

        <StanceTable hasTop>
          <tr>
            <TCell><b>同时采购英特尔<Sup></Sup>至强<Sup></Sup>处理器和英特尔<Sup></Sup>固态盘（目录A和目录B），每个组合可赚取150积分。</b></TCell>
          </tr>
          <tr height="10"></tr>
          <tr>
            <td style="text-align: left;font-family: 微软雅黑;">在此次促销活动中，购买参与活动英特尔产品的积分赚取日期为购买英特尔产品的发票开具日期。英特尔将在促销结束后60（六十）天内，根据规则，向符合条件且遵守各项规则的合作伙伴发放在本次促销活动中奖励的积分。</td>
          </tr>
          <tr height="10"></tr>
          <tr>
            <TCell>合格会员将：</TCell>
          </tr>
        </StanceTable>

        <ListTable :dataSource="dataSource3" listType="●" hasSpace></ListTable>

        <StanceTable hasTop></StanceTable>

        <ImageRow :imgUrl="footImgUrl"></ImageRow>
      </td>
    </tr>

  </table>
</template>

<script>

import {
  Nav, ImageRow, StanceTable, Sup, DataTable, ListTable, TCell,
} from '@/components/edm'


const headstyle = { 'background-color': '#0070C0', color: '#ffffff', 'line-height': '22px' };

const dataSource = [
  { text: '采购数量级别为100-499台，每单位产品可赚取30积分' },
  { text: '采购数量级别为500-1000台，每单位产品可赚取40积分' },
  { text: '采购数量级别为1001-2000台，每单位产品可赚取50积分' },
  { text: '采购数量级别为2001台及以上，每单位产品可赚取60积' },
  // { text: '采购数量级别为51个及以上，每个单品可赚取100积分' },
]
const tableData1 = [
 {"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Gold 6128 Processor - BX806736128","text2":"150"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Gold 6130 Processor - BX806736130","text2":"150"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Gold 6134 Processor - BX806736134","text2":"150"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Gold 6138 Processor - BX806736138","text2":"150"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Gold 6140 Processor - BX806736140","text2":"150"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Gold 6142 Processor - BX806736142","text2":"150"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Gold 6148 Processor - BX806736148","text2":"150"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Gold 6152 Processor - BX806736152","text2":"150"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Platinum 8160 Processor - BX806738160","text2":"450"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Platinum 8164 Processor - BX806738164","text2":"450"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Platinum 8170 Processor - BX806738170","text2":"450"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Platinum 8176 Processor - BX806738176","text2":"450"},{"text1":" Intel<sup>®</sup> Xeon<sup>®</sup> Platinum 8180 Processor - BX806738180","text2":"450"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Platinum 8176M Processor - CD8067303133605","text2":"450"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Platinum 8180M Processor - CD8067303192101","text2":"450"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Platinum 8160 Processor - CD8067303314302","text2":"450"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Platinum 8180 Processor - CD8067303314400","text2":"450"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Platinum 8176 Processor - CD8067303314700","text2":"450"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Gold 6154 Processor - CD8067303316400","text2":"150"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Platinum 8170M Processor - CD8067303319201","text2":"450"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Platinum 8170 Processor - CD8067303327601","text2":"450"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Platinum 8168 Processor - CD8067303327701","text2":"450"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Gold 6150 Processor - CD8067303328000","text2":"150"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Gold 6136 Processor - CD8067303330201","text2":"150"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Gold 6134 Processor - CD8067303330302","text2":"150"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Gold 6134M Processor - CD8067303330402","text2":"150"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Platinum 8156 Processor - CD8067303368800","text2":"450"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Gold 6140 Processor - CD8067303405200","text2":"150"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Gold 6142 Processor - CD8067303405400","text2":"150"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Gold 6140M Processor - CD8067303405500","text2":"150"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Platinum 8160 Processor - CD8067303405600","text2":"450"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Gold 6142M Processor - CD8067303405700","text2":"150"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Gold 6136 Processor - CD8067303405800","text2":"150"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Gold 6126 Processor - CD8067303405900","text2":"150"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Gold 6152 Processor - CD8067303406000","text2":"150"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Gold 6138 Processor - CD8067303406100","text2":"150"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Gold 6148 Processor - CD8067303406200","text2":"150"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Platinum 8158 Processor - CD8067303406500","text2":"450"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Platinum 8160M Processor - CD8067303406600","text2":"450"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Platinum 8164 Processor - CD8067303408800","text2":"450"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Platinum 8153 Processor - CD8067303408900","text2":"450"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Gold 6130 Processor - CD8067303409000","text2":"150"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Gold 6133 Processor - CD8067303589900","text2":"150"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Gold 6132 Processor - CD8067303592500","text2":"150"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Gold 6128 Processor - CD8067303592600","text2":"150"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Gold 6154 Processor - CD8067303592700","text2":"150"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Platinum 8160T Processor - CD8067303592800","text2":"450"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Gold 6138T Processor - CD8067303592900","text2":"150"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Gold 6130T Processor - CD8067303593000","text2":"150"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Gold 6126T Processor - CD8067303593100","text2":"150"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Gold 6130F Processor - CD8067303593300","text2":"150"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Gold 6126F Processor - CD8067303593400","text2":"150"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Platinum 8160F Processor - CD8067303593600","text2":"450"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Gold 6142F Processor - CD8067303593700","text2":"150"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Gold 6148F Processor - CD8067303593800","text2":"150"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Gold 6138F Processor - CD8067303593900","text2":"150"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Gold 6146 Processor - CD8067303657201","text2":"150"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Gold 6144 Processor - CD8067303657302","text2":"150"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Platinum 8176F Processor - CD8067303694600","text2":"450"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Gold 6144 Processor - CD8067303843000","text2":"150"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Gold 5218 Processor - BX806955218","text2":"300"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Gold 6230 Processor - BX806956230","text2":"500"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Gold 6240 Processor - BX806956240","text2":"500"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Gold 6242 Processor - BX806956242","text2":"500"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Gold 6248 Processor - BX806956248","text2":"500"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Gold 6252 Processor - BX806956252","text2":"500"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Platinum 8256 Processor - BX806958256","text2":"900"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Silver 4208 Processor - BX806954208","text2":"45"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Silver 4210 Processor - BX806954210","text2":"45"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Silver 4214 Processor - BX806954214","text2":"45"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Silver 4216 Processor - BX806954216","text2":"45"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Gold 5220 Processor - BX806955220","text2":"300"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Gold 6234 Processor - BX806956234","text2":"500"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Gold 6238 Processor - BX806956238","text2":"500"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Silver 4214 Processor - CD8069504212601 ","text2":"45"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Silver 4214Y Processor - CD8069504294401 ","text2":"45"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Silver 4215 Processor - CD8069504212701 ","text2":"45"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Silver 4216 Processor - CD8069504213901 ","text2":"45"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Gold 5215 Processor - CD8069504214002 ","text2":"300"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Gold 5215L Processor - CD8069504214202 ","text2":"300"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Gold 5215M Processor - CD8069504214102 ","text2":"300"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Gold 5217 Processor - CD8069504214302 ","text2":"300"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Gold 5218 Processor - CD8069504193301 ","text2":"300"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Gold 5218N  Processor - CD8069504289900 ","text2":"300"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Gold 5220 Processor - CD8069504214601 ","text2":"300"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Gold 5222 Processor - CD8069504193501 ","text2":"300"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Gold 6210U Processor - CD8069504198101 ","text2":"500"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Gold 6212U Processor - CD8069504198002 ","text2":"500"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Gold 6230 Processor - CD8069504193701 ","text2":"500"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Gold 6230N Processor - CD8069504202700 ","text2":"500"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Gold 6238T Processor - CD8069504200401 ","text2":"500"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Gold 6240 Processor - CD8069504194001 ","text2":"500"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Gold 6240Y Processor - CD8069504200501 ","text2":"500"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Gold 6242 Processor - CD8069504194101 ","text2":"500"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Gold 6244 Processor - CD8069504194202 ","text2":"500"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Gold 6248 Processor - CD8069504194301 ","text2":"500"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Gold 6252 Processor - CD8069504194401 ","text2":"500"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Gold 6254 Processor - CD8069504194501 ","text2":"500"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Platinum 8253 Processor - CD8069504194601 ","text2":"900"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Platinum 8256 Processor - CD8069504194701 ","text2":"900"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Platinum 8260 Processor - CD8069504201101 ","text2":"900"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Platinum 8260L Processor - CD8069504201001 ","text2":"900"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Platinum 8260M Processor - CD8069504201201 ","text2":"900"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Platinum 8260Y Processor - CD8069504200902 ","text2":"900"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Platinum 8268 Processor - CD8069504195101 ","text2":"900"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Platinum 8270 Processor - CD8069504195201 ","text2":"900"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Platinum 8276 Processor - CD8069504195501 ","text2":"900"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Platinum 8276L Processor - CD8069504195301 ","text2":"900"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Platinum 8276M Processor - CD8069504195401 ","text2":"900"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Platinum 8280 Processor - CD8069504228001 ","text2":"900"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Platinum 8280L Processor - CD8069504228201 ","text2":"900"},{"text1":"Intel<sup>®</sup> Xeon<sup>®</sup> Platinum 8280M Processor - CD8069504228101 ","text2":"900"}]
const tableData2 = [
  {"text1":"Intel<sup>®</sup> NUC Kit - BOXNUC8i7HNK","text2":"40"},{"text1":"Intel<sup>®</sup> NUC Kit - BOXNUC8i7HNK1","text2":"40"},{"text1":"Intel<sup>®</sup> NUC Kit - BOXNUC8i7HNK2","text2":"40"},{"text1":"Intel<sup>®</sup> NUC Kit - BOXNUC8i7HNK3","text2":"40"},{"text1":"Intel<sup>®</sup> NUC Kit - BOXNUC8i7HNK4","text2":"40"},{"text1":"Intel<sup>®</sup> NUC 8 Business Mini PC with Windows<sup>®</sup> 10 - BOXNUC8i7HNKQC","text2":"40"},{"text1":"Intel<sup>®</sup> NUC 8 Business Mini PC with Windows<sup>®</sup> 10 - BOXNUC8i7HNKQC1","text2":"40"},{"text1":"Intel<sup>®</sup> NUC 8 Business Mini PC with Windows<sup>®</sup> 10 - BOXNUC8i7HNKQC2","text2":"40"},{"text1":"Intel<sup>®</sup> NUC 8 Business Mini PC with Windows<sup>®</sup> 10 - BOXNUC8i7HNKQC3","text2":"40"},{"text1":"Intel<sup>®</sup> NUC 8 Business Mini PC with Windows<sup>®</sup> 10 - BOXNUC8i7HNKQC4","text2":"40"},{"text1":"Intel<sup>®</sup> NUC Kit - BOXNUC8I7HVK","text2":"40"},{"text1":"Intel<sup>®</sup> NUC Kit - BOXNUC8I7HVK1","text2":"40"},{"text1":"Intel<sup>®</sup> NUC Kit - BOXNUC8I7HVK2","text2":"40"},{"text1":"Intel<sup>®</sup> NUC Kit - BOXNUC8I7HVK3","text2":"40"},{"text1":"Intel<sup>®</sup> NUC Kit - BOXNUC8I7HVK4","text2":"40"},{"text1":"Intel<sup>®</sup> NUC Kit with 8th Gen Intel<sup>®</sup> Core™ Processors - BOXNUC8i7HVK6","text2":"40"},{"text1":"Intel<sup>®</sup> NUC 8 Enthusiast Mini PC with Windows<sup>®</sup> 10 - BOXNUC8i7HVKVA","text2":"40"},{"text1":"Intel<sup>®</sup> NUC 8 Enthusiast Mini PC with Windows<sup>®</sup> 10 - BOXNUC8i7HVKVA1","text2":"40"},{"text1":"Intel<sup>®</sup> NUC 8 Enthusiast Mini PC with Windows<sup>®</sup> 10 - BOXNUC8i7HVKVA2","text2":"40"},{"text1":"Intel<sup>®</sup> NUC 8 Enthusiast Mini PC with Windows<sup>®</sup> 10 - BOXNUC8i7HVKVA3","text2":"40"},{"text1":"Intel<sup>®</sup> NUC 8 Enthusiast Mini PC with Windows<sup>®</sup> 10 - BOXNUC8i7HVKVA4","text2":"40"},{"text1":"Intel<sup>®</sup> NUC 8 Enthusiast a Mini PC with Windows<sup>®</sup> 10 - BOXNUC8i7HVKVA6","text2":"40"},{"text1":"Intel<sup>®</sup> NUC 8 Enthusiast, a Mini PC with Windows 10 Home - BOXNUC8i7HVKVAW","text2":"40"}
]
const tableData3 =[
  {"text1":"Intel<sup>®</sup> Optane™ SSD  800P Series 60GB - SSDPEK1W060GA","text2":"20"},{"text1":"Intel<sup>®</sup> Optane™ SSD  800P Series 60GB - SSDPEK1W060GA01","text2":"20"},{"text1":"Intel<sup>®</sup> Optane™ SSD  800P Series 60GB - SSDPEK1W060GAXT","text2":"20"},{"text1":"Intel<sup>®</sup> Optane™ SSD 800P Series 120GB - SSDPEK1W120GA","text2":"40"},{"text1":"Intel<sup>®</sup> Optane™ SSD 800P Series 120GB - SSDPEK1W120GA01","text2":"40"},{"text1":"Intel<sup>®</sup> Optane™ SSD 800P Series 120GB - SSDPEK1W120GAX1","text2":"40"},{"text1":"Intel<sup>®</sup> Optane™ SSD 800P Series 120GB - SSDPEK1W120GAXT","text2":"40"},{"text1":"Intel<sup>®</sup> Optane™ SSD 900P 280GB - SSDPE21D280GAM3","text2":"70"},{"text1":"Intel<sup>®</sup> Optane™ SSD 900P 280GB - SSDPE21D280GASM","text2":"70"},{"text1":"Intel<sup>®</sup> Optane™ SSD 900P 280GB - SSDPE21D280GASX","text2":"70"},{"text1":"Intel<sup>®</sup> Optane™ SSD 900P 280GB - SSDPE21D280GAX1","text2":"70"},{"text1":"Intel<sup>®</sup> Optane™ SSD 900P 280GB - SSDPED1D280GAX1","text2":"70"},{"text1":"Intel<sup>®</sup> Optane™ SSD 900P 480GB - SSDPED1D480GASX","text2":"110"},{"text1":"Intel<sup>®</sup> Optane™ SSD 900P 480GB - SSDPED1D480GAX1","text2":"110"},{"text1":"Intel<sup>®</sup> Optane™ SSD 900P 280GB - SSDPED1D280GASX","text2":"70"},{"text1":"Intel<sup>®</sup> Optane™ SSD 905P Series 480GB - SSDPE21D480GAM3","text2":"120"},{"text1":"Intel<sup>®</sup> Optane™ SSD 905P Series 480GB - SSDPE21D480GAX1","text2":"120"},{"text1":"Intel<sup>®</sup> Optane™ SSD 905P Series 960GB - SSDPED1D960GAX1","text2":"260"},{"text1":"Intel<sup>®</sup> Optane™ SSD 905P Series 1.5TB - SSDPED1D015TAX1","text2":"400"},{"text1":"Intel<sup>®</sup> Optane™ SSD 905P Series 1.5TB - SSDPE21D015TAM3","text2":"400"},{"text1":"Intel<sup>®</sup> Optane™ SSD 905P Series 1.5TB - SSDPE21D015TAX1","text2":"400"},{"text1":"Intel<sup>®</sup> Optane™ SSD 905P Series 960GB - SSDPE21D960GAM3","text2":"260"},{"text1":"Intel<sup>®</sup> Optane™ SSD 905P Series 960GB - SSDPE21D960GAX1","text2":"260"},{"text1":"Intel<sup>®</sup> Optane™ SSD 905P Series 380GB - SSDPEL1D380GA01","text2":"100"},{"text1":"Intel<sup>®</sup> Optane™ SSD 905P Series 380GB - SSDPEL1D380GAX1","text2":"100"}
]
const tableData4 =[
  {"text1":"Intel<sup>®</sup> Optane™ SSD DC P4800X Series 1.5TB","text2":"800"},{"text1":"Intel<sup>®</sup> Optane™ SSD DC P4800X Series 375GB","text2":"140"},{"text1":"Intel<sup>®</sup> Optane™ SSD DC P4800X Series 750GB","text2":"300"},{"text1":"Intel<sup>®</sup> Optane™ SSD DC P4800X Series 375GB","text2":"140"},{"text1":"Intel<sup>®</sup> Optane™ SSD DC P4800X Series with Intel<sup>®</sup> Memory Drive  1.5TB","text2":"120"},{"text1":"Intel<sup>®</sup> Optane™ SSD DC P4800X Series with Intel<sup>®</sup> Memory Drive  375GB","text2":"40"},{"text1":"Intel<sup>®</sup> Optane™ SSD DC P4800X Series with Intel<sup>®</sup> Memory Drive  750GB","text2":"60"},{"text1":"Intel<sup>®</sup> Optane™ SSD DC P4801X Series 100GB","text2":"50"},{"text1":"Intel<sup>®</sup> Optane™ SSD DC P4801X Series 200GB","text2":"100"},{"text1":"Intel<sup>®</sup> Optane™ SSD DC P4801X Series 375GB","text2":"220"},{"text1":"Intel<sup>®</sup> SSD D5-P4320 Series 7.6TB","text2":"360"},{"text1":"Intel<sup>®</sup> SSD D5 P4420 Series 7.6TB","text2":"400"},{"text1":"Intel<sup>®</sup> SSD D5 P4326 Series 15TB","text2":"660"},{"text1":"Intel<sup>®</sup> SSD DC P4610 Series 7.6TB - SSDPE2K076T801","text2":"400"},{"text1":"Intel<sup>®</sup> SSD DC P4610 Series 1.6TB - SSDPE2KE016T801","text2":"70"},{"text1":"Intel<sup>®</sup> SSD DC P4610 Series 3.2.0TB - SSDPE2KE032T801","text2":"140"},{"text1":"Intel<sup>®</sup> SSD DC P4610 Series 6.4TB - SSDPE2KE064T801","text2":"300"},{"text1":"Intel<sup>®</sup> SSD DC P4510 Series 1.0TB - SSDPE2KX010T801","text2":"60"},{"text1":"Intel<sup>®</sup> SSD DC P4510 Series 2.0TB - SSDPE2KX020T801","text2":"110"},{"text1":"Intel<sup>®</sup> SSD DC P4510 Series 4.0TB - SSDPE2KX040T801","text2":"220"},{"text1":"Intel<sup>®</sup> SSD DC P4510 Series 8.0TB - SSDPE2KX080T810","text2":"440"}
]
const column1 = [
  {
    title: "符合条件的英特尔产品",
    dataIndex: 'text1',
    align: 'left',
    // width: 420
  },
  {
    title: '积分/单位',
    dataIndex: 'text2',
    // rowspan: 53,
    width: 100,
  },
  // {
  //   title: '英特尔<sup>®</sup>HPC <br/>数据中心专家及<br/>云数据中心专家<br/>额外奖励积分',
  //   dataIndex: 'text3',
  //   width: 100,
  // }
]
const column2 = [
  {
    title: '积分/单位产品<br/>（随采购数量级别变化）',
    dataIndex: 'text1',
    align: 'left',
    // width: 420
  },
  // {
  //   title: '积分/课程',
  //   dataIndex: 'text2',
  //   width: 80,
  //   // rowspan:21,
  // },
  // {
  //   title: '英特尔<sup>®</sup>HPC <br/>数据中心专家及<br/>云数据中心专家<br/>额外奖励积分',
  //   dataIndex: 'text3',
  // }
]

const cloumnFor1 = [
  {
    title: '符合条件的英特尔产品—目录A 英特尔<sup>®</sup>至强<sup>®</sup>处理器',
    dataIndex: 'text1',
    align: 'left',
  },
  {
    title: '积分/单位',
    dataIndex: 'text2',
    // rowspan: 53,
    width: 100,
  },
]
const cloumnFor2 = [
  {
    title: '符合条件的英特尔产品—目录B 英特尔<sup>®</sup> 固态盘 DC',
    dataIndex: 'text1',
    align: 'left',
  },
  {
    title: '积分/单位',
    dataIndex: 'text2',
    // rowspan: 53,
    width: 100,
  },
]


const dataSource3 = [
  {
    text: '在本次促销活动中最多可赚取500,000积分；'
  },
  {
    text: '可同时参与本次活动和其他积分活动；'
  },
  {
    text: '不可同时参加针对本次促销活动中符合条件的英特尔产品所进行的其他英特尔通知的折扣或促销活动，不论折扣或促销活动是针对本促销活动的合格会员，或是代表合格会员的第三方；'
  },
  {
    text: '不可以转让此次促销活动中赚取的积分；且'
  },
  {
    text: '不可以变现此次促销活动中赚取的积分。'
  },
]

const headImgOptions = {
  1: 'http://show.easeye.com.cn/fckattach/2019-05-07/e3b9e77152a2095d72521d1898764e2d/image/686d1fa2932bbffeb8bb951f7e17fa2c_easeyethumbnail.png',
}
export default {
  data() {
    return {
      headImgUrl: headImgOptions[1],
      dataSource,
      dataSource3,
      column1,
      column2,
      cloumnFor1,
      cloumnFor2,
      tableData1,
      tableData2,
      tableData3,
      tableData4,
      footImgUrl:
        "http://show.easeye.com.cn/fckattach/2019-03-22/e3b9e77152a2095d72521d1898764e2d/image/b31bdb5e820b7243887e0c490238771d_easeyethumbnail.png"
    };
  },
  components: {
    Nav,
    ImageRow,
    StanceTable,
    Sup,
    DataTable,
    ListTable,
    TCell
  },
  computed: {
    tableHeadStyle() {
      return headstyle;
    }
  }
};
</script>
