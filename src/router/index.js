import { createRouter, createWebHashHistory } from "vue-router";
import checkout from "../views/checkout/index.vue";
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

      component: checkout,
    },
    {
      path: "/finish",
      component: () => import("../views/finish/index.vue"),
    },
  ],
});

export default router;
