import req from "@/api/management/system" // eslint-disable-line
import { storage } from "@/utils"
import { clone } from "@/utils/helper"
import { Datashaping } from "@/utils/transform"

export default {
  namespaced: true,
  state: {
    accessList: [],
  },
  getters: {
    menuTree: (state) => {
      let list = clone(state.accessList)
      return Datashaping(list, "menuId", "parentId", "children", "orderIndex", 1)
    },
  },
  mutations: {
    ACCESS_LIST: (state, value) => {
      state.accessList = value || []
      state.menuTree = storage.local.set("accessList", state.accessList)
    },
  },
  actions: {
    getAccessList: async ({ commit, state }) => {
      if (state.accessList.length) {
        return state.accessList
      }
      let list = storage.local.get("accessList")
      if (list && list.length) {
        commit("ACCESS_LIST", list)
        return list
      }
      return await req("getMenuList").then((res) => {
        commit("ACCESS_LIST", res)
      })
    },
  },
}
