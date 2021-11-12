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
          { prop: "userId", label: "字典编号" },
          { prop: "profileImg", label: "字典名称" },
          { prop: "name", label: "所属模块" },
          { prop: "username", label: "描述" },
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
