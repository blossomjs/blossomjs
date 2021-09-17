<template>
  <el-container class="m-layout-pro">
    <el-header class="layout-header">
      <img :src="logo" class="layout-logo" />
    </el-header>
    <el-container class="layout-content">
      <el-aside class="layout-aside">
        <el-menu router unique-opened :default-active="$route.path">
          <layout-menu :navMenus="navMenus"></layout-menu>
        </el-menu>
      </el-aside>
      <el-container>
        <el-main class="layout-main">
          <router-view></router-view>
        </el-main>
        <el-footer class="layout-footer" height="40px">
          <layout-footer></layout-footer>
        </el-footer>
      </el-container>
    </el-container>
  </el-container>
</template>

<script>
import layoutMenu from "./components/layout-menu"
import layoutFooter from "./components/layout-footer"

export default {
  name: "MLayoutPro",
  components: {
    layoutMenu,
    layoutFooter,
  },
  props: {
    logo: String,
  },
  data() {
    return {
      navMenus: [
        {
          id: 1,
          name: "系统管理",
          icon: "setting",
          children: [
            { id: 2, name: "菜单管理", url: "/management/system/menu" },
            { id: 3, name: "用户管理", url: "/management/system/user" },
            { id: 4, name: "角色管理", url: "/management/system/role" },
          ],
        },
      ],
    }
  },
}
</script>

<style lang="scss">
.m-layout-pro {
  height: 100vh;
  overflow: hidden;
  background: #f0f2f5;
  .layout-header {
    background: linear-gradient(180deg, #243b55 0%, #141e30 100%);
    .layout-logo {
      height: 100%;
    }
  }
  .layout-content {
    overflow: hidden;
    .layout-aside {
      background: #fff;
    }
    .layout-main {
      overflow: auto;
    }
    .layout-footer {
      background: #fff;
      color: #8c8c8c;
      font-size: 12px;
      display: flex;
      align-items: center;
    }
  }
}
</style>
