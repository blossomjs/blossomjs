import request from "../../index.js"

export const config = {
  getUserList: {
    url: "/user/list",
    method: "get",
  },
}

export default function req(funcName, data, isToken = true, isCancel = true) {
  return request(config, funcName, data, isToken, isCancel)
}
