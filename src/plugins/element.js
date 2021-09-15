import { ElContainer, ElHeader, ElAside, ElMain, ElFooter, ElMenu, ElSubmenu, ElMenuItem, ElButton } from "element-plus"

export default (app) => {
  app.use(ElContainer)
  app.use(ElHeader)
  app.use(ElAside)
  app.use(ElMain)
  app.use(ElFooter)
  app.use(ElMenu)
  app.use(ElSubmenu)
  app.use(ElMenuItem)
  app.use(ElButton)
}
