<template>
  <el-container class="m-layout-pro">
    <el-header class="layout-header"></el-header>
    <el-container class="layout-content">
      <el-aside class="layout-aside">
        <el-menu>
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
  data() {
    return {
      navMenus: [
        {
          id: 1,
          name: "系统管理",
          icon: "setting",
          children: [
            { id: 2, name: "菜单管理" },
            { id: 3, name: "用户管理" },
            { id: 4, name: "角色管理" },
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
    background: linear-gradient(180deg, #364d73 0%, #2a3c59 100%);
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
