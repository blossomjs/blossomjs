import { createStore } from "vuex"
import user from "./modules/user"
import managementAccess from "./modules/management_access"

export default createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    user,
    managementAccess,
  },
})
