<template>
  <div>
    <Main :secondMenu="secondMenu"></Main>
  </div>

</template>
<script>
import Main from "@/views/Layout/Main.vue";
import { menu } from "@/constants";

export default {
  components: {
    Main
  },
  data() {
    return {
      secondMenu: []
    };
  },
  created() {
    const path = this.$route.path;
    if (path) {
      const menuObj = menu.find(item => path.includes(item.path)) || {};
      this.secondMenu = menuObj.children || [];
    }
  }
}
</script>
