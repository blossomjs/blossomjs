export default [
  {
    path: "system",
    name: "system",
    component: () => import("@/components/Layout/router-view"),
    children: [
      {
        path: "user",
        name: "user",
        component: () => import("@/views/management/system/user"),
      },
      {
        path: "menu",
        name: "menu",
        component: () => import("@/views/management/system/menu"),
      },
      {
        path: "role",
        name: "role",
        component: () => import("@/views/management/system/role"),
      },
    ],
  },
]
