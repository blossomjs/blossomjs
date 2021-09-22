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
      {
        path: "login",
        component: () => import("@/views/public/login.vue"),
      },
      {
        path: "about",
        component: () => import("@/views/About.vue"),
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
