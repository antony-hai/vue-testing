<template>
  <Layout>
    <Sider
      hide-trigger
      :style="{background: '#fff'}"
    >
      <Menu
        :active-name="activeName"
        theme="light"
        width="auto"
        :open-names="[openName]"
      >
        <Submenu
          v-for="(item, index) in secondMenu"
          :name="item.name"
          :key="index"
        >
          <template slot="title">
            <Icon :type="item.icon_type"></Icon> {{ item.title}}
          </template>
          <MenuItem
            v-for="(menu, index) in item.children"
            :key="index"
            :to="menu.url"
            :name="menu.name"
          > {{ menu.title }}
          </MenuItem>
        </Submenu>
      </Menu>
    </Sider>
    <Layout :style="{padding: '20px'}">
      <Content :style="{padding: '24px', minHeight: '280px', background: '#fff'}">
        <router-view />
      </Content>
    </Layout>
  </Layout>
</template>

<script>
export default {
  name: "layoutMain",
  data() {
    return {
      openName: "",
      activeName: ""
    };
  },
  props: {
    secondMenu: Array
  },
  created() {

    const path = this.$route.path
    const pathInfo = path.split('/') || []
    const pathNeedInfo = pathInfo.slice('2')

    this.openName = pathNeedInfo[0];
    this.activeName = pathNeedInfo[1];
  },
  watch: {
    // 提醒一下，当使用路由参数时，例如从 /user/foo 导航到 /user/bar，原来的组件实例会被复用。
    // 因为两个路由都渲染同个组件，比起销毁再创建，复用则显得更加高效。不过，这也意味着组件的生命周期钩子不会再被调用。
    '$route' (to, from) {
      const path = to.path
      console.log(path)
      const pathInfo = path.split('/') || []
      const pathNeedInfo = pathInfo.slice('2')
      this.openName = pathNeedInfo[0];
      this.activeName = pathNeedInfo[1];
    }
  }

};
</script>
