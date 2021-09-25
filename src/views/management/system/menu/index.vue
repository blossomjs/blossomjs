<template>
  <m-layout-page>
    <m-panel-group>
      <m-panel width="200px" style="margin-right: 0" title="菜单树">
        <el-tree
          ref="menuTree"
          class="menu-tree"
          :data="menuLists"
          :props="{ children: 'children', label: 'name' }"
          :accordion="true"
          :highlight-current="true"
          :expand-on-click-node="true"
          node-key="id"
        ></el-tree>
      </m-panel>
      <m-panel class="panel-right" title="菜单详情"> </m-panel>
    </m-panel-group>
  </m-layout-page>
</template>

<script>
export default {
  name: "menu",
  data() {
    return {
      menuLists: [
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
.panel-right {
  flex: 1;
  margin-left: 0;
  border-left: solid 1px #e8e8e8;
}
</style>
