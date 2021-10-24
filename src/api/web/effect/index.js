import request from "../../index.js"

export const config = {
  getEffectList: {
    url: "/effect/list",
    method: "get",
  },
  addEffect: {
    url: "/effect/add",
    method: "post",
  },
  modifyEffect: {
    url: "/effect/modify",
    method: "post",
  },
  setEffectTag: {
    url: "/effect/setTag",
    method: "post",
  },
  setEffectType: {
    url: "/effect/setType",
    method: "post",
  },
}

export default function req(funcName, data, isToken = true, isCancel = true) {
  return request(config, funcName, data, isToken, isCancel)
}
