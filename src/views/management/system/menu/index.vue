<template>
  <m-layout-page>
    <m-panel-group>
      <m-panel width="200px" style="margin-right: 0" title="菜单树">
        <el-tree
          ref="menuTree"
          class="menu-tree"
          :data="menuTree"
          :props="{ children: 'children', label: 'name' }"
          :accordion="true"
          :highlight-current="true"
          :expand-on-click-node="true"
          node-key="id"
          @node-click="proxyClickTree"
        ></el-tree>
      </m-panel>
      <m-panel class="panel-right" title="菜单详情">
        <m-form v-bind:formProps="formProps">
          <m-form-item label="菜单名称" prop="name">
            <el-input v-model="formProps.model.name"></el-input>
          </m-form-item>
          <m-form-item label="菜单编码" prop="code">
            <el-input v-model="formProps.model.code"></el-input>
          </m-form-item>
          <m-form-item label="访问地址" prop="url">
            <el-input v-model="formProps.model.url"></el-input>
          </m-form-item>
          <m-form-item label="顺序" prop="order">
            <el-input v-model="formProps.model.order"></el-input>
          </m-form-item>
          <m-form-item v-if="!formProps.isReadonly">
            <el-button type="primary">保存</el-button>
            <el-button>取消</el-button>
          </m-form-item>
        </m-form>
      </m-panel>
    </m-panel-group>
  </m-layout-page>
</template>

<script>
import { mapGetters, mapState } from "vuex"

export default {
  name: "menuManagement",
  computed: {
    ...mapGetters("managementAccess", ["menuTree"]),
    ...mapState("managementAccess", ["accessList"]),
  },
  data() {
    return {
      formProps: {
        isReadonly: true,
        model: {
          name: "",
          code: "",
          url: "",
          order: "",
        },
        rules: {
          name: [{ required: true, message: "不能为空", trigger: "blur" }],
          code: [{ required: true, message: "不能为空", trigger: "blur" }],
          url: [{ required: true, message: "不能为空", trigger: "blur" }],
          order: [{ required: true, message: "不能为空", trigger: "blur" }],
        },
      },
    }
  },
  created() {
    console.log(this.menuTree)
  },
  methods: {
    proxyClickTree(data, node, nodeVM) {
      this.menuId = data.id
      if (this.isNewNode(data)) return
      this.proxyOperation(this.handleClickTree, data, node, nodeVM)
    },
    isNewNode(data) {
      return data.id > 15e11
    },
    proxyOperation(done) {
      Array.prototype.shift.apply(arguments)
      done(...arguments)
    },
    handleClickTree(data, node) {
      // let treeNodesMap = this.$refs.menuTree.store.nodesMap
      // this.editModel = 'view'
      this.selNode = node // 树节点对象
      Object.keys(this.formProps.model).forEach((key) => {
        this.formProps.model[key] = data[key]
      })
      // if (this.form.parentId !== 0) {
      //   this.form.parentName = treeNodesMap[this.form.parentId].data.menuName
      // }
    },
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
