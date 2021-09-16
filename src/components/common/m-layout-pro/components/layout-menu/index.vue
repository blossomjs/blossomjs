<template>
  <div>
    <template v-for="navMenu in navMenus">
      <el-menu-item v-if="!navMenu.children" :key="navMenu.id" :index="navMenu.id">
        <template #title>{{ navMenu.name }}</template>
      </el-menu-item>
      <el-sub-menu v-else :key="navMenu.id" :index="navMenu.id">
        <template #title>{{ navMenu.name }}</template>
        <layout-menu :navMenus="navMenu.children"></layout-menu>
      </el-sub-menu>
    </template>
  </div>
</template>

<script>
export default {
  name: "layout-menu",
  props: {
    navMenus: Array,
  },
}
</script>
