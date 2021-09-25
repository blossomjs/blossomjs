<template>
  <m-layout-pro :logo="logoSrc" :menu="accessList">
    <template v-slot:breadcrumb v-if="items.length">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item v-for="item in items" :key="item.url">
          <span class="item" style="cursor: auto">{{ item.name }}</span>
        </el-breadcrumb-item>
      </el-breadcrumb>
    </template>
  </m-layout-pro>
</template>

<script>
import { mapState } from "vuex"
import logo from "@/assets/images/management/logo.png"

export default {
  name: "ManagementLayout",
  data() {
    return {
      logoSrc: logo,
      items: [],
    }
  },
  computed: {
    ...mapState("managementAccess", ["accessList"]),
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
          return this.findMenuItem(this.accessList, item)
        })
        .filter((item) => !!item)
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
