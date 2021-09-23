import request from "../../index.js"

export const config = {
  getUserList: {
    url: "/user/list",
    method: "get",
  },
  getMenuList: {
    url: "/menu/list",
    method: "get",
  },
  getRoleList: {
    url: "/role/list?pageIndex={pageIndex}&pageSize={pageSize}",
    method: "get",
  },
}

export default function req(funcName, data, isToken = true, isCancel = true) {
  return request(config, funcName, data, isToken, isCancel)
}
