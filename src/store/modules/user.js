import req from "@/api/public-access" // eslint-disable-line
import axios from "axios"
import { storage } from "@/utils"

export default {
  namespaced: true,
  state: {
    token: "",
    loginId: "",
    info: {},
    hasLogin: true,
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
    login({ commit }, { username = "", password = "" }) {
      return axios({
        url: `auth/login`,
        method: "post",
        data: { username, password },
      }).then((res) => {
        if (res.data.code === 200) {
          storage.local.set("token", res.data.token)
          commit("SET_TOKEN", res.data.token)
          commit("SET_HASLOGIN", !!res.data.token)
        }
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
