<template>
  <div class="home-filter">
    <el-form inline>
      <el-form-item>
        <el-select v-model="params.effect">
          <el-option
            v-for="item in effectOptions"
            :key="item.value"
            :value="item.value"
            :label="item.label"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-select v-model="params.lan">
          <el-option v-for="item in lanOptions" :key="item.value" :value="item.value" :label="item.label"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-select v-model="params.color">
          <el-option v-for="item in colorOptions" :key="item.value" :value="item.value" :label="item.label"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-select v-model="params.theme">
          <el-option v-for="item in themeOptions" :key="item.value" :value="item.value" :label="item.label"></el-option>
        </el-select>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import { ref } from "vue"
export default {
  setup() {
    const effectOptions = ref([
      { label: "按钮特效", value: "按钮特效" },
      { label: "鼠标特效", value: "鼠标特效" },
      { label: "动画特效", value: "动画特效" },
      { label: "3D特效", value: "3D特效" },
      { label: "拟物特效", value: "拟物特效" },
      { label: "图表特效", value: "图表特效" },
      { label: "交互特效", value: "交互特效" },
    ])
    const lanOptions = ref([
      { label: "html", value: "html" },
      { label: "css", value: "css" },
      { label: "js", value: "js" },
      { label: "canvas", value: "canvas" },
      { label: "svg", value: "svg" },
      { label: "echarts", value: "echarts" },
      { label: "d3", value: "d3" },
    ])
    const colorOptions = ref([
      { label: "红色", value: "红色" },
      { label: "橙色", value: "橙色" },
      { label: "黄色", value: "黄色" },
      { label: "蓝色", value: "蓝色" },
      { label: "紫色", value: "紫色" },
    ])
    const themeOptions = ref([
      { label: "科技", value: "科技" },
      { label: "自然", value: "自然" },
      { label: "卡通", value: "卡通" },
      { label: "商务", value: "商务" },
      { label: "温馨", value: "温馨" },
    ])
    const params = ref({ effect: "按钮特效", lan: "js", color: "", theme: "" })
    return {
      effectOptions,
      lanOptions,
      colorOptions,
      themeOptions,
      params,
    }
  },
}
</script>
