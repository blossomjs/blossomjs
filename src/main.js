import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"
import "normalize.css"
import "./assets/css/main.scss"
import installElementPlus from "./plugins/element"

const app = createApp(App)
installElementPlus(app)
app.use(store).use(router).mount("#app")
