<template>
  <el-container class="m-layout-pro">
    <el-header class="layout-header">
      <img :src="logo" class="layout-logo" />
    </el-header>
    <el-container class="layout-content">
      <el-aside class="layout-aside">
        <el-menu router unique-opened :default-active="$route.path">
          <layout-menu :navMenus="menu"></layout-menu>
        </el-menu>
      </el-aside>
      <el-container>
        <el-main class="layout-main">
          <slot name="breadcrumb"></slot>
          <keep-alive>
            <router-view v-if="$route.meta.keepAlive"></router-view>
          </keep-alive>
          <router-view v-if="!$route.meta.keepAlive"></router-view>
          <el-footer class="layout-footer" height="40px">
            <layout-footer></layout-footer>
          </el-footer>
        </el-main>
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
    menu: Array,
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
      padding: 4px;
      display: flex;
      flex-direction: column;
      align-items: stretch;
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
