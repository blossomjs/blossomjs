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
}
