import { createRouter, createWebHashHistory } from "vue-router";
import checkout from "../views/checkout/index.vue";
import finish from "../views/finish/index.vue";
const router = createRouter({
  //模式
  history: createWebHashHistory(),
  linkActiveClass: "is-active",
  routes: [
    {
      path: "/pay",
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
      component: finish,
    },
    {
      path: "/",
      component: () => import("../views/home/index.vue"),
    },
    {
      path: "/drink",
      component: () => import("../views/drink/index.vue"),
    },
    {
      path: "/cake",
      component: () => import("../views/cake/index.vue"),
    },
    {
      path: "/about",
      component: () => import("../views/about.vue"),
    },

    {
      path: "/:no",
      name: "itemdetail",
      component: () => import("../views/itemDetail/index.vue"),
    },

    {
      path: "/:domain(.*)*",
      name: "NotFound",
      component: import("../views/notFound.vue"),
    },
  ],
});

export default router;
