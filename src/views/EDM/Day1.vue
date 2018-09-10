<template>
  <table align="center" style="text-align: center; font-family: 微软雅黑; margin: 0 auto;">
    <tr>
      <td>
        <Nav></Nav>
        <StanceTable :specialStyle="{ 'background-color': 'rgb(0, 176, 240)'}" hasTop hasBottom>
          <tr>
            <td style="text-align: center; vertical-align: middle"><img src="@/assets/images/1.png" style="vertical-align:middle;" border="0" alt="" alt=""></td>
          </tr>
        </StanceTable>
        <StanceTable hasTop></StanceTable>
        <StanceTable :specialStyle="{ 'background-color': 'rgb(0, 176, 240)'}">
          <tr>
            <td>
              <StanceTable :specialStyle="{ 'width': '317px'}">

              </StanceTable>
            </td>
            <td style="text-align: center"><img width="317px" src="@/assets/images/2.png" style="vertical-align:middle;" border="0" alt=""></td>
          </tr>
        </StanceTable>
      </td>
    </tr>
  </table>
</template>

<script>
import Nav from "@/components/edm/Nav.vue";
import StanceTable from "@/components/edm/StanceTable.vue";


export default {
  components: {
    Nav,
    StanceTable,
  }
}
</script>

