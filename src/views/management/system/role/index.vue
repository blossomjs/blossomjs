<template>
  <m-layout-page>
    <m-panel>
      <el-table :data="tableData" stripe style="width: 100%" border>
        <el-table-column prop="userId" label="编号"> </el-table-column>
        <el-table-column prop="profileImg" label="角色名"> </el-table-column>
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
    const res = await req("getRoleList")
    this.tableData = res.records
  },
}
</script>

<style lang="scss"></style>
