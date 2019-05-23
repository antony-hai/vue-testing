<template>
  <div class="about">
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
    // console.log(this.secondMenu)
    // if (this.secondMenu) {
    //   return;
    // }
    const path = this.$route.path;
    if (path) {
      const menuObj = menu.find(item => path.includes(item.path)) || {};
      this.secondMenu = menuObj.children || [];
    }
  },
  mounted() {
    console.log("------------------mounted");
  },
  watch: {
    // 提醒一下，当使用路由参数时，例如从 /user/foo 导航到 /user/bar，原来的组件实例会被复用。
    // 因为两个路由都渲染同个组件，比起销毁再创建，复用则显得更加高效。不过，这也意味着组件的生命周期钩子不会再被调用。
    '$route' (to, from) {
      const path = to.path
      const menuObj = menu.find(item => path.includes(item.path)) || {};
      this.secondMenu = menuObj.children || [];
    }
  }
  // beforeRouteEnter(to, from, next) {
  //   // 在当前路由改变，但是该组件被复用时调用
  //   // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
  //   // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
  //   // 可以访问组件实例 `this`
  //   // console.log(to);
  //   const path = to.path;
  //   let menuObj = {};
  //   if (path) {
  //     menuObj = menu.find(item => path.includes(item.path)) || {};
  //   }
  //   next(vm => {
  //     console.log(vm)
  //     vm.secondMenu = menuObj.children || [];
  //   });
  //   console.log("----------router enter");
  // },
  // beforeRouteEnter() {
  //   console.log('--router enter')
  // },
  // beforeRouteLeave() {
  //   console.log('----route leave')
  // }
  // beforeRouteUpdate(to, form, next) {
  //   console.log('route-update')
  //   next()
  // }

};
</script>

