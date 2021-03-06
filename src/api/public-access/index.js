import request from "../index.js"

export const config = {
  login: {
    url: "/auth/login",
    method: "post",
  },
  getUserInfo: {
    url: "/user/info",
    method: "get",
  },
}

export default function req(funcName, data, isToken = true, isCancel = true) {
  return request(config, funcName, data, isToken, isCancel)
}
