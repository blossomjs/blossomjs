<template>
  <m-layout-page>
    <el-table :data="tableData" stripe style="width: 100%">
      <el-table-column prop="userId" label="编号"> </el-table-column>
      <el-table-column prop="name" label="昵称" width="180"> </el-table-column>
      <el-table-column prop="username" label="用户名" width="180"> </el-table-column>
      <el-table-column prop="email" label="邮箱" width="180"> </el-table-column>
      <el-table-column prop="enableStatus" label="状态"> </el-table-column>
      <el-table-column prop="gender" label="性别" width="180"> </el-table-column>
      <el-table-column prop="profileImg" label="头像" width="180"> </el-table-column>
      <el-table-column prop="userType" label="用户类型" width="180"> </el-table-column>
    </el-table>
  </m-layout-page>
</template>

<script>
import mLayoutPage from "@/components/common/m-layout-page"
import req from "@/api/management/system"

export default {
  name: "user",
  components: {
    mLayoutPage,
  },
  data() {
    return {
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄",
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
        },
      ],
    }
  },
  async created() {
    const res = await req("getUserList")
    this.tableData = res.records
  },
}
</script>

<style lang="scss"></style>
