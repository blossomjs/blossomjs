export default [
  {
    path: "/",
    component: () => import("@/views/front/Layout/index.vue"),
    children: [
      {
        path: "",
        component: () => import("@/views/front/home/index.vue"),
      },
      {
        path: "usercenter",
        component: () => import("@/views/front/usercenter/layout.vue"),
        redirect: "/usercenter/effects",
        children: [
          {
            path: "effects",
            component: () => import("@/views/front/usercenter/effects/index.vue"),
          },
        ],
      },
      {
        path: "effects/publish",
        component: () => import("@/views/front/usercenter/effects/publish.vue"),
      },
    ],
  },
  {
    path: "/effects/show",
    component: () => import("@/views/front/usercenter/effects/show.vue"),
  },
]
