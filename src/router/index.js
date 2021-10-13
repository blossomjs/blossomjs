import { createRouter, createWebHashHistory } from "vue-router"
import management from "./management"
import web from "./web"

const routes = [
  {
    path: "/login",
    component: () => import("@/views/public/login.vue"),
  },
  ...web,
  ...management,
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
