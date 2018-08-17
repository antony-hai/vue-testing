<template>
  <Header class="header">
    <div class="layout-logo"></div>
    <nav>
      <Menu mode="horizontal" theme="dark" active-name="1">
            <div class="layout-nav">
                <MenuItem 
                  v-for="(menu, index) in menuData" 
                  v-bind:key="index" 
                  v-bind:name="index + 1"
                  :to="menu.path"
                >
                  <Icon :type="menu.icon_type"></Icon>{{ menu.title }}
                </MenuItem>
            </div>
        </Menu>
    </nav>
  </Header>

</template>

<script>
  import { menu } from '@/constants'

  export default {
    name: 'layoutHeader',
    data() {
      return {
        menuData: menu,
      }
    },
  }
</script>

<style lang="less">
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .layout-logo {
      width: 100px;
      height: 30px;
      background: #5b6270;
    }
  }
</style>