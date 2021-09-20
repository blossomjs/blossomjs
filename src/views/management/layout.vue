<template>
  <m-layout-pro
    :logo="logoSrc"
    :menu="menu">
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
