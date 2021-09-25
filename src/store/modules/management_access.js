import { storage } from "@/utils"

export default {
  namespaced: true,
  state: {
    accessList: [],
  },
  mutations: {
    ACCESS_LIST: (state, value) => {
      state.accessList = value || []
      storage.local.set("accessList", state.accessList)
    },
  },
  actions: {
    getAccessList: ({ commit, state }) => {
      if (state.accessList.length) {
        return state.accessList
      }
      let list = storage.local.get("accessList")
      if (list && list.length) {
        commit("ACCESS_LIST", list)
        return list
      }
      return commit("ACCESS_LIST", [
        {
          id: 0,
          name: "首页",
          icon: "home",
          url: "/management/home",
        },
        {
          id: 1,
          name: "系统管理",
          icon: "setting",
          url: "/management/system",
          children: [
            { id: 2, name: "菜单管理", url: "/management/system/menu" },
            { id: 3, name: "用户管理", url: "/management/system/user" },
            { id: 4, name: "角色管理", url: "/management/system/role" },
          ],
        },
      ])
    },
  },
}
