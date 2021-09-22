<template>
  <m-layout-page>
    <m-panel>
      <el-table :data="tableData" stripe style="width: 100%" border>
        <el-table-column prop="userId" label="编号"> </el-table-column>
        <el-table-column prop="profileImg" label="头像"> </el-table-column>
        <el-table-column prop="name" label="昵称"> </el-table-column>
        <el-table-column prop="username" label="用户名"> </el-table-column>
        <el-table-column prop="email" label="邮箱"> </el-table-column>
        <el-table-column prop="enableStatus" label="状态"> </el-table-column>
        <el-table-column prop="gender" label="性别"> </el-table-column>
        <el-table-column prop="userType" label="用户类型"> </el-table-column>
      </el-table>
    </m-panel>
  </m-layout-page>
</template>

<script>
import req from "@/api/management/system"

export default {
  name: "user",
  data() {
    return {
      tableData: [],
      table: {
        columns: [],
        data: [],
      },
    }
  },
  async created() {
    const res = await req("getUserList")
    this.tableData = res.records
  },
}
</script>

<style lang="scss"></style>
