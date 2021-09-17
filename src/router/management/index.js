import system from "./system"

export default [
  {
    path: "/management",
    name: "management",
    component: () => import("@/views/management/layout"),
    redirect: "/management/home",
    children: [
      {
        path: "home",
        name: "home",
        component: () => import("@/views/management/home"),
      },
      ...system,
    ],
  },
]
