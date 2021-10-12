<template>
  <m-layout-page>
    <m-panel>
      <m-table :columns="table.columns" :data="table.data"></m-table>
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
        columns: [
          { prop: "userId", label: "编号" },
          { prop: "profileImg", label: "头像" },
          { prop: "name", label: "昵称" },
          { prop: "username", label: "用户名" },
          { prop: "email", label: "邮箱" },
          { prop: "enableStatus", label: "状态" },
          { prop: "gender", label: "性别" },
          { prop: "userType", label: "用户类型" },
        ],
        data: [],
      },
    }
  },
  async created() {
    const res = await req("getUserList")
    this.table.data = res.records
  },
}
</script>

<style lang="scss"></style>
