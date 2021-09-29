<template>
  <m-layout-page>
    <m-panel-group>
      <m-panel :panelProps="asideProps" width="200px" style="margin-right: 0" title="菜单树">
        <el-tree
          ref="menuTree"
          class="menu-tree"
          :data="menuTree"
          :props="{ children: 'children', label: 'name' }"
          :accordion="true"
          :highlight-current="true"
          :expand-on-click-node="true"
          node-key="menuId"
          @node-click="
            (data, node) => {
              proxyOperation(clickTree, data, node)
            }
          "
        ></el-tree>
      </m-panel>
      <m-panel :panelProps="mainProps" class="panel-right" title="菜单详情">
        <m-form v-bind:formProps="formProps" ref="form">
          <m-form-item label="菜单名称" prop="name">
            <el-input v-model="formProps.model.name"></el-input>
          </m-form-item>
          <m-form-item label="菜单编码" prop="code">
            <el-input v-model="formProps.model.code"></el-input>
          </m-form-item>
          <m-form-item label="访问地址" prop="url">
            <el-input v-model="formProps.model.url"></el-input>
          </m-form-item>
          <m-form-item label="顺序" prop="orderIndex">
            <el-input v-model="formProps.model.orderIndex"></el-input>
          </m-form-item>
          <m-form-item v-if="!formProps.isReadonly">
            <el-button type="primary" @click="save">保存</el-button>
            <el-button @click="cancelSave">取消</el-button>
          </m-form-item>
        </m-form>
      </m-panel>
    </m-panel-group>
  </m-layout-page>
</template>

<script>
import { mapGetters, mapState } from "vuex"
import req from "@/api/management/system"

export default {
  name: "menuManagement",
  computed: {
    ...mapGetters("managementAccess", ["menuTree"]),
    ...mapState("managementAccess", ["accessList"]),
  },
  data() {
    return {
      editModel: "",
      selNode: null,
      asideProps: {
        toolbar: [
          () => ({
            text: "新增",
            on: {
              onClick: () => this.proxyOperation(this.addCurrent),
            },
            key: "SYS_MENU_ADD",
          }),
          () => ({
            text: "删除",
            on: {
              onClick: () => this.proxyOperation(this.deleteCurrent),
            },
            key: "SYS_MENU_DELETE",
          }),
        ],
      },
      mainProps: {
        toolbar: [
          () => ({
            text: "编辑",
            on: {
              onClick: () => this.proxyOperation(this.modifyCurrent),
            },
            props: {
              hidden: !!this.editModel || !this.selNode,
            },
            key: "SYS_MENU_EDIT",
          }),
        ],
      },
      formProps: {
        isReadonly: true,
        model: this.FormInit(),
        rules: {
          name: [{ required: true, message: "不能为空", trigger: "blur" }],
          code: [{ required: true, message: "不能为空", trigger: "blur" }],
          url: [{ required: true, message: "不能为空", trigger: "blur" }],
          orderIndex: [{ required: true, message: "不能为空", trigger: "blur" }],
        },
      },
    }
  },
  methods: {
    FormInit() {
      return {
        menuId: "",
        name: "",
        code: "",
        url: "",
        orderIndex: "",
      }
    },
    async proxyOperation(done) {
      Array.prototype.shift.apply(arguments)
      if (this.editModel) {
        await this.$confirm("该操作将不保存已填写的表单数据", "提示", {
          confirmButtonText: "确认",
          cancelButtonText: "取消",
          type: "warning",
        })
        this.$refs.menuTree.remove(this.formProps.model.menuId)
        this.editModel = ""
        this.formProps.model = this.FormInit()
      }
      done(...arguments)
    },
    clickTree(data, node) {
      if (this.isNewNode(data)) return
      this.selNode = node
      Object.keys(this.formProps.model).forEach((key) => {
        this.formProps.model[key] = data[key]
      })
      this.formProps.model.menuId = node.data.menuId
    },
    appendNode(data) {
      const nodeData = this.$refs.menuTree.getCurrentNode()
      const node = this.$refs.menuTree.getNode(nodeData)
      const append = () => {
        node.insertChild({
          data,
          parent: node,
        })
        this.$nextTick(() => {
          this.$refs.menuTree.setCurrentKey(data.menuId)
        })
      }

      if (!node) {
        const lastNode = this.$refs.menuTree.getNode(this.menuTree[this.menuTree.length - 1])
        this.$refs.menuTree.insertAfter(data, lastNode)
        this.$nextTick(() => {
          this.$refs.menuTree.setCurrentKey(data.menuId)
        })
      } else if (node.childNodes.length) {
        append()
      } else {
        node.expand(() => {
          append()
        })
      }
    },
    isNewNode(data) {
      return data.id > 15e11
    },
    addCurrent() {
      const currentNode = this.$refs.menuTree.getCurrentNode()
      this.editModel = "add"
      this.formProps.model = this.FormInit()
      this.formProps.model.menuId = new Date().getTime()
      this.formProps.model.parentId = currentNode ? currentNode.menuId : ""
      this.formProps.model.name = "新建菜单"
      this.appendNode(this.formProps.model)
    },
    modifyCurrent() {
      this.editModel = "modify"
    },
    async deleteCurrent() {
      await req("deleteMenu", {
        menuId: this.formProps.model.menuId,
      })
      const accessList = await req("getMenuList")
      this.$store.commit("managementAccess/ACCESS_LIST", accessList)
      this.selNode = null
      this.$refs.menuTree.setCurrentKey(null)
    },
    async save() {
      const params = { ...this.formProps.model }
      if (this.editModel === "add") {
        delete params.menuId
      }
      const menuId = await req(`${this.editModel}Menu`, params)
      const accessList = await req("getMenuList")
      this.$store.commit("managementAccess/ACCESS_LIST", accessList)
      if (this.editModel === "add") {
        this.formProps.model.menuId = menuId
      }
      this.$nextTick(() => {
        this.$refs.menuTree.setCurrentKey(this.formProps.model.menuId)
      })
      this.editModel = ""
    },
    cancelSave() {
      this.selNode = null
      this.$refs.menuTree.setCurrentKey(null)
      if (this.editModel === "add") {
        this.$refs.menuTree.remove(this.formProps.model.menuId)
      }
      this.editModel = ""
      this.formProps.model = this.FormInit()
    },
  },
  watch: {
    editModel(type) {
      this.formProps.isReadonly = !type
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
