<template>
  <m-layout-page>
    <m-panel>
      <el-table :data="tableData" stripe style="width: 100%" border>
        <el-table-column prop="roleId" label="编号"> </el-table-column>
        <el-table-column prop="roleName" label="角色名称"> </el-table-column>
        <el-table-column prop="description" label="角色描述"> </el-table-column>
        <el-table-column prop="creatorId" label="角色创建人"> </el-table-column>
        <el-table-column prop="editorId" label="角色修改人"> </el-table-column>
      </el-table>
    </m-panel>
  </m-layout-page>
</template>

<script>
import req from "@/api/management/system"

export default {
  name: "role",
  data() {
    return {
      table: {
        columns: [],
        data: [],
      },
    }
  },
  async created() {
    const res = await req("getRoleList", {
      pageIndex: 1,
      pageSize: 10,
    })
    this.tableData = res.records
  },
}
</script>

<style lang="scss"></style>
