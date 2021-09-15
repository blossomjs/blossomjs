import axios from "axios"
import { storage } from "@/utils"
import { TIMEOUT_MILLISECONDS } from "@/config/api"

const instance = axios.create({
  timeout: TIMEOUT_MILLISECONDS,
})

instance.interceptors.request.use((config) => {
  const Token = storage.local.get("token") || ""
  config.headers = Object.assign({ blossomAuthorization: Token }, config.headers)
  return config
})

instance.interceptors.response.use(
  (response) => {
    if (response.data.code === 200) {
      return response.data.data
    }
  },
  async (err) => {
    return Promise.reject(err)
  }
)

export default instance
