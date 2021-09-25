<template>
  <m-layout-pro :logo="logoSrc" :menu="menu">
    <template v-slot:breadcrumb>
      <el-breadcrumb separator="/">
        <el-breadcrumb-item v-for="item in items" :key="item.url">
          <span class="item" style="cursor: auto">{{ item.name }}</span>
        </el-breadcrumb-item>
      </el-breadcrumb>
    </template>
  </m-layout-pro>
</template>

<script>
import logo from "@/assets/images/management/logo.png"

export default {
  name: "ManagementLayout",
  data() {
    return {
      logoSrc: logo,
      menu: [
        {
          id: 1,
          name: "系统管理",
          icon: "setting",
          url: "/management/system",
          children: [
            { id: 2, name: "菜单管理", url: "/management/system/menu" },
            { id: 3, name: "用户管理", url: "/management/system/user" },
            { id: 4, name: "角色管理", url: "/management/system/role" },
          ],
        },
      ],
      items: [],
    }
  },
  mounted() {
    this.getCrumbItems()
  },
  methods: {
    findMenuItem(menuList, item) {
      const menu = menuList.find((menu) => menu.url === item.path)
      if (menu) {
        return menu
      }
      const list = menuList
        .map((menu) => (menu.children ? this.findMenuItem(menu.children, item) : null))
        .filter((item) => !!item)
      if (list.length) {
        return list.shift()
      }
      return null
    },
    getCrumbItems() {
      this.items = this.$route.matched
        .map((item) => {
          return this.findMenuItem(this.menu, item)
        })
        .filter((item) => !!item)
      console.log(this.items)
    },
  },
  watch: {
    $route() {
      this.getCrumbItems()
    },
  },
}
</script>

<style lang="scss">
.el-breadcrumb {
  margin: 10px 12px;
}
</style>
