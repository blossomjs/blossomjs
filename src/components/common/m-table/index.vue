<template>
  <el-table :data="data" stripe style="width: 100%" border>
    <el-table-column
      v-for="(item, index) in columns"
      :key="index"
      :prop="item.prop"
      :label="item.label"
    ></el-table-column>
  </el-table>
</template>

<script>
export default {
  name: "MTable",
  props: ["columns", "data"],
}
</script>

<style lang="scss"></style>
