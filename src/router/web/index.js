export default [
  {
    path: "/",
    component: () => import("@/views/front/Layout/index.vue"),
    children: [
      {
        path: "",
        component: () => import("@/views/front/home/index.vue"),
      },
    ],
  },
]
