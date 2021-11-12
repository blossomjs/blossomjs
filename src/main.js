import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"
import "normalize.css"
import "./assets/css/main.scss"
import installElementPlus from "./plugins/element"
import installM from "./plugins/m"
import 'element-plus/dist/index.css'

const NOT_FOUND_PATH = "/not-found"
router.beforeEach(async (to, from, next) => {
  if (to.matched[0]?.name === "management") {
    await store.dispatch("user/getUserInfo")
    if (store.state.user.info.userType === 1) {
      await store.dispatch("managementAccess/getAccessList")
      next()
    } else {
      next(NOT_FOUND_PATH)
    }
  } else {
    next()
  }
})

const app = createApp(App)
installElementPlus(app)
installM(app)
app.use(store).use(router).mount("#app")
