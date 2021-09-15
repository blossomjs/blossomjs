import fetch from "@/utils/request"
import axios from "axios"
const CancelToken = axios.CancelToken

export default (function request() {
  let name = ""
  let cancels = {}
  let cancelParam = "default"

  return function () {
    let args = Array.from(arguments)

    const config = args[0]
    const funcName = args[1]
    const data = args[2]
    if (data) {
      cancelParam = data.cancelParam || "default"
    } else {
      cancelParam = "default"
    }

    const isCancel = args[4]

    if (isCancel && name === funcName) {
      cancels[cancelParam + funcName] &&
        cancels[cancelParam + funcName](
          `请求${name}被阻断，请检查是否重复发送同一请求，如需取消重复请求阻断，请配置api中isCancel为false`
        )
    }

    name = funcName
    if (typeof config[funcName] !== "object") {
      throw new Error("调用api函数函数错误，请检查函数名称是否错误")
    }
    var newConfig = JSON.parse(JSON.stringify(config[funcName]))

    if (data) {
      if (config[funcName].method.toLowerCase() === "get" || config[funcName].method === undefined) {
        newConfig.url = newConfig.url.replace(/\{([\d\w_-]+)\}/g, (word, $1) => {
          var res = data[$1]
          delete data[$1]
          return res
        })
        newConfig.params = data
      } else {
        newConfig.url = newConfig.url.replace(/\{([\d\w_-]+)\}/g, (word, $1) => {
          var res = data[$1]
          delete data[$1]
          return res
        })
        newConfig.data = data
        if (
          config[funcName].method.toLowerCase() === "post" &&
          config[funcName].headers &&
          config[funcName].headers["Content-Type"] === "application/x-www-form-urlencoded"
        ) {
          for (let key in newConfig.data) {
            if (Array.isArray(newConfig.data[key]) && newConfig.data[key].length > 8000) {
              newConfig.data[key] = newConfig.data[key].join(",")
            }
          }
        }
      }
    }
    if (isCancel) {
      newConfig.cancelToken = new CancelToken((c) => {
        cancels[cancelParam + funcName] = c
      })
    }

    return fetch(newConfig)
  }
})()
