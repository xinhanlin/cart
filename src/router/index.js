import { createRouter, createWebHashHistory } from "vue-router";

import itemdetailCake from "../views/itemDetail/cake.vue";
import itemdetailDrink from "../views/itemDetail/drink.vue";
import checkout from "../views/checkout/index.vue";
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
      component: () => import("../views/finish/index.vue"),
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
      path: "/cake/:no(\\d+)",
      name: "itemdetail-cake",
      component: itemdetailCake,
    },
    {
      path: "/drink/:no(\\d+)",
      name: "itemdetail-drink",
      component: itemdetailDrink,
    },

    {
      path: "/:domain(.*)",
      name: "NotFound",
      component: import("../views/notFound.vue"),
    },
  ],
  scrollBehavior(savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});

export default router;
