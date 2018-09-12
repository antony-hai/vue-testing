<template>
  <table align="center" style="text-align: center; font-family: 微软雅黑; margin: 0 auto;">
    <tr>
      <td>
        <Nav></Nav>
        <StanceTable hasTop hasBottom bgcolor="#0071C5">
          <tr>
            <td style="text-align: center; vertical-align: middle"><img src="http://show.easeye.com.cn/fckattach/2018-09-11/e3b9e77152a2095d72521d1898764e2d/image/6512bd43d9caa6e02c990b0a82652dca.png" style="vertical-align:middle;" border="0" alt=""></td>
          </tr>
        </StanceTable>

        <StanceTable hasTop></StanceTable>

        <StanceTable bgcolor="#003C71">
          <tr>
            <td>
              <StanceTable width="317" bgcolor="#003C71">
                <tr>
                  <td width=35></td>
                  <td style="text-align: left;font-family: 微软雅黑;font-size: 24px; line-height: 40px; font-weight: 400; color: #ffffff">仅适用于至尊会员</td>
                </tr>
                <tr height=25></tr>
                <tr>
                  <td width=35></td>

                  <td style="text-align: left;font-family: 微软雅黑;font-size: 24px; line-height: 40px; font-weight: 400; color: #ffffff">诚邀您加入</td>
                </tr>
                <tr>
                  <td width=35></td>
                  <td style="text-align: left;font-family: 微软雅黑;font-size: 24px; line-height: 40px; font-weight: 400; color: #ffffff">英特尔
                    <sup>®</sup>解决方案目录！</td>
                </tr>
                <tr height=25></tr>
                <tr>
                  <td width=35></td>
                  <table>
                    <tr>
                      <td width="120" style="background:#00AEEF; border:0 solid #00AEEF; width:120px; text-align: left">
                        <a target="_blank" href="mailto:intelconnectsupport@intel.com?subject=%E7%94%B3%E8%AF%B7%E5%8A%A0%E5%85%A5%E8%8B%B1%E7%89%B9%E5%B0%94%E8%A7%A3%E5%86%B3%E6%96%B9%E6%A1%88%E7%9B%AE%E5%BD%95&body=%3Ch2%3E%E8%8B%B1%E7%89%B9%E5%B0%94%3C%2Fh2%3E" style="color:#fefefe;display:block; font-family:微软雅黑;font-size:15px;line-height:25px;margin:0;padding:8px 25px 8px 25px;text-align:center;text-decoration:none">即刻加入</a>
                      </td>

                    </tr>
                  </table>

                </tr>

              </StanceTable>
            </td>
            <td style="text-align: center"><img width="317px" src="http://show.easeye.com.cn/fckattach/2018-09-11/e3b9e77152a2095d72521d1898764e2d/image/c20ad4d76fe97759aa27a0c99bff6710.png" style="vertical-align:middle;" border="0" alt=""></td>
          </tr>
        </StanceTable>

        <StanceTable hasTop>
          <tr>
            <td style="text-align: left;font-family: 微软雅黑;font-size: 16px; line-height: 40px; font-weight: 400; color: #00AEEF">亲爱的{[CS-CompanyName]},</td>
          </tr>
          <tr height="10"></tr>
          <tr>
            <td style="text-align: left;font-family: 微软雅黑;font-size: 12px; line-height: 20px;">
              <a href="http://app.plan.intel.com/e/er?cid=em-elq-38346&utm_source=elq&utm_medium=email&utm_campaign=38346&elq_cid=1688271&s=334284386&lid=111076&elqTrackId=8e44e774862049b19af18025e8913e08&elq=d4889e105cd844548f8cf70b5f1b1cfc&elqaid=38346&elqat=1" style="text-decoration: underline; color:#00AEEF; font-family: 微软雅黑">英特尔
                <sup style="text-decoration: none !important">®</sup>解决方案目录</a>是集结了以英特尔
              <sup>®</sup>最新技术为特色的行业领先解决方案的一站式服务中心。
            </td>
          </tr>
          <tr height="10"></tr>
          <tr>
            <td style="text-align: left;font-family: 微软雅黑;font-size: 15 px; line-height: 20px; color:#0071C5 ">作为英特尔
              <sup>®</sup>技术合作伙伴至尊会员，您现在可以：</td>
          </tr>
        </StanceTable>

        <StanceTable hasTop></StanceTable>

        <ListTable :dataSource="dataSource" listType="●"></ListTable>

        <StanceTable hasTop hasBottom>
          <tr>
            <td style="text-align: left;font-family: 微软雅黑;font-size: 12px; line-height: 20px;">充分借助这一机会，发掘更多扩展潜力，加速您的业务增长。</td>
          </tr>
        </StanceTable>

        <StanceTable bgcolor="003C71" hasBottom>
          <tr height=20></tr>
          <tr>
            <td style="text-align: center;font-family: 微软雅黑;font-size: 24px; line-height: 30px; color: #ffffff">注册步骤简易快捷！</td>
          </tr>
          <tr height=10></tr>
          <tr>
            <td style="text-align: center;font-family: 微软雅黑;font-size: 14px; line-height: 30px; color: #ffffff">仅需点击1次即可</td>
          </tr>
          <tr height=10></tr>
          <tr>
            <center>
              <LinkBtn url="mailto:intelconnectsupport@intel.com?subject=%E7%94%B3%E8%AF%B7%E5%8A%A0%E5%85%A5%E8%8B%B1%E7%89%B9%E5%B0%94%E8%A7%A3%E5%86%B3%E6%96%B9%E6%A1%88%E7%9B%AE%E5%BD%95&body=%3Ch2%3E%E8%8B%B1%E7%89%B9%E5%B0%94%3C%2Fh2%3E">
                点击即刻加入
              </LinkBtn>
            </center>
          </tr>
        </StanceTable>

        <StanceTable hasTop></StanceTable>

        <StanceTable bgcolor="#003C71">
          <tr>
            <td style="text-align: center; vertical-align: middle"><img src="http://show.easeye.com.cn/fckattach/2018-09-11/e3b9e77152a2095d72521d1898764e2d/image/eccbc87e4b5ce2fe28308fd9f2a7baf3.png" style="vertical-align:middle;" border="0" alt="" width="634"></td>
          </tr>
        </StanceTable>
      </td>
    </tr>
  </table>
</template>

<script>
import Nav from "@/components/edm/Nav.vue";
import StanceTable from "@/components/edm/StanceTable.vue";
import ListTable from "@/components/edm/ListTable.vue";
import LinkBtn from "@/components/edm/LinkBtn.vue";

export const dataSource3 = [
  {
    text: "从800+英特尔合作伙伴处获得8,000+的解决方案"
  },
  {
    text: "与解决方案提供商取得即时联系和互动"
  },
  {
    text: "获得基础组件，用于构建您自己的创新产品或解决方案"
  },
  {
    text: " 获得已就绪的系统和服务，实现技术解决方案快速部署"
  }
];
export default {
  data() {
    return {
      dataSource: dataSource3
    };
  },
  components: {
    Nav,
    StanceTable,
    ListTable,
    LinkBtn
  }
};
</script>

