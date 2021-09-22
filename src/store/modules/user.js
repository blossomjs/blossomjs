import req from "@/api/public-access" // eslint-disable-line
import { storage } from "@/utils"

export default {
  namespaced: true,
  state: {
    token: "",
    loginId: "",
    info: {},
    hasLogin: false,
  },
  getters: {},
  mutations: {
    SET_TOKEN: (state, value) => {
      state.token = value
    },
    SET_HASLOGIN: (state, value) => {
      state.hasLogin = value
    },
    SET_USERINFO: (state, value) => {
      state.info = value
      storage.local.set("userInfo", value)
    },
  },
  actions: {
    async login({ commit }, { username = "", password = "" }) {
      await req("login", { username, password }).then((res) => {
        storage.local.set("token", res)
        commit("SET_TOKEN", res)
        commit("SET_HASLOGIN", !!res)
      })
    },
    async getUserInfo({ commit }) {
      let userInfo = storage.local.get("userInfo")
      if (userInfo) {
        commit("SET_USERINFO", userInfo)
        return
      }
      const res = await req("getUserInfo")
      commit("SET_USERINFO", res)
    },
  },
}
