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
  addMenu: {
    url: "/menu/add",
    method: "post",
  },
  modifyMenu: {
    url: "/menu/modify",
    method: "post",
  },
  deleteMenu: {
    url: "/menu/delete?menuId={menuId}",
    method: "post",
  },
  getRoleList: {
    url: "/role/list?pageIndex={pageIndex}&pageSize={pageSize}",
    method: "get",
  },
}

export default function req(funcName, data, isToken = true, isCancel = true) {
  return request(config, funcName, data, isToken, isCancel)
}
