const RouterView = () => import("@/components/Layout/router-view")

export default [
  {
    path: "/management",
    component: RouterView,
    name: "management",
    redirect: "/management/home",
    children: [
      {
        path: "home",
        name: "home",
        component: () => import("@/views/management/home"),
      },
    ],
  },
]
