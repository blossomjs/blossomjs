import {
  ElContainer,
  ElHeader,
  ElAside,
  ElMain,
  ElFooter,
  ElMenu,
  ElSubMenu,
  ElMenuItem,
  ElTable,
  ElAvatar,
  ElButton,
  ElForm,
  ElFormItem,
  ElTree,
  ElBreadcrumb,
  ElInput,
  ElMessageBox,
} from "element-plus"

export default (app) => {
  app.use(ElContainer)
  app.use(ElHeader)
  app.use(ElAside)
  app.use(ElMain)
  app.use(ElFooter)
  app.use(ElMenu)
  app.use(ElSubMenu)
  app.use(ElMenuItem)
  app.use(ElTable)
  app.use(ElAvatar)
  app.use(ElButton)
  app.use(ElForm)
  app.use(ElFormItem)
  app.use(ElTree)
  app.use(ElBreadcrumb)
  app.use(ElInput)
  app.config.globalProperties.$confirm = ElMessageBox.confirm
}
