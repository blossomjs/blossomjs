<template>
  <div class="publish-container">
    <div class="location">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item><a href="/usercenter">个人中心</a></el-breadcrumb-item>
        <el-breadcrumb-item>发布特效</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="edit-card">
      <el-form ref="formRef" label-width="120px" :model="form" :rules="rules">
        <el-form-item label="名称" prop="title">
          <el-input v-model="form.title"></el-input>
        </el-form-item>
        <el-form-item label="简介">
          <el-input v-model="form.description" type="textarea" rows="3"></el-input>
        </el-form-item>
        <el-form-item label="代码">
          <el-tabs v-model="codeTab" @tab-click="handleClick">
            <el-tab-pane label="Html" name="html">
              <el-input type="textarea" rows="12" v-model="form.html"></el-input>
            </el-tab-pane>
            <el-tab-pane label="Css" name="css">
              <el-input type="textarea" rows="12" v-model="form.css"></el-input>
            </el-tab-pane>
            <el-tab-pane label="Js" name="js">
              <el-input type="textarea" rows="12" v-model="form.js"></el-input>
            </el-tab-pane>
          </el-tabs>
        </el-form-item>
        <el-form-item label="">
          <el-button type="primary" size="small" @click="save">提交</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
import { ref } from "vue"
import { useRoute, useRouter } from "vue-router"
import req from "@/api/web/effect"

import { ElMessage } from "element-plus"
export default {
  setup() {
    const route = useRoute()
    const router = useRouter()
    const codeTab = ref("html")
    const formRef = ref()
    const form = ref({
      cover: "",
      css: "",
      description: "",
      html: "",
      js: "",
      title: "",
    })
    const rules = ref({
      title: [{ retuired: true, message: "名称不能为空" }],
    })
    //保存
    const save = async () => {
      formRef.value.validate(async (valid) => {
        if (valid) {
          const fun = form.value.effectId ? "modifyEffect" : "addEffect"
          await req(fun, form.value)
          ElMessage("保存成功")
          router.back()
        }
      })
    }
    //编辑
    const id = route.query.id
    const getData = async () => {
      //TODO 由于暂时没有详情接口，这里通过查询列表，再查询指定数据
      const res = await req("getEffectList", { pageIndex: 1, pageSize: 100 })
      const effect = res.records.find((a) => (a.effectId = id))
      if (effect) {
        for (let i in form.value) {
          form.value[i] = effect[i]
        }
        form.value["effectId"] = effect.effectId
      }
    }
    id && getData()
    return {
      codeTab,
      rules,
      form,
      formRef,
      save,
    }
  },
}
</script>
<style scoped lang="scss">
.location {
  padding: 15px 0;
}
.edit-card {
  background: #fff;
  padding: 15px;
  margin-bottom: 20px;
}
.publish-container {
  padding: 0 20px;
}
</style>
