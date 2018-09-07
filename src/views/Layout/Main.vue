<template>
    <Layout>
        <Sider hide-trigger :style="{background: '#fff'}">
            <Menu :active-name="activeName" theme="light" width="auto" :open-names="[openName]">
                <Submenu v-for="(item, index) in secondMenu" :name="item.name" :key="index">
                    <template slot="title">
                        <Icon :type="item.icon_type"></Icon> {{ item.title}}
                    </template>
                    <MenuItem v-for="(menu, index) in item.children" :key="index" :to="menu.url" :name="menu.name"> {{ menu.title }}
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
    const secondMenuFirst = this.secondMenu[0] || {};
    const openName = secondMenuFirst.name;
    const thirdMenuFirst = secondMenuFirst.children
      ? secondMenuFirst.children[0]
      : {};
    const activeName = thirdMenuFirst.name;

    this.openName = openName;
    this.activeName = activeName;
  }
};
</script>
