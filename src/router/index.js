import { createRouter, createWebHashHistory } from "vue-router"
import management from "./management"

const routes = [
  {
    path: "/",
    component: () => import("@/components/Layout/index.vue"),
    children: [
      {
        path: "",
        component: () => import("@/views/Home.vue"),
      },
    ],
  },
  ...management,
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
