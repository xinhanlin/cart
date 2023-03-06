import { createRouter, createWebHashHistory } from "vue-router";

const router = createRouter({
  //模式
  history: createWebHashHistory(),
  linkActiveClass: "is-active",
  routes: [
    {
      path: "/",
      component: () => import("../views/pay/index.vue"),
    },
    {
      path: "/nopay",
      component: () => import("../views/noPay/index.vue"),
    },
    {
      path: "/checkout",
      component: () => import("../views/checkout/index.vue"),
    },
    {
      path: "/finish",
      component: () => import("../views/finish/index.vue"),
    },
  ],
});

export default router;
