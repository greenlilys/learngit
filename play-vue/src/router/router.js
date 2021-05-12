import { createRouter, createWebHashHistory } from "vue-router";
const routes = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    name: "Home",
    component: () => import("@/views/Home.vue"),
    meta: {},
  },
  {
    path: "/policySearch",
    name: "PolicySearch",
    component: () => import("@/views/PolicySearch.vue"),
    meta: {},
  },
  {
    path: "/payForSearch",
    name: "PayForSearch",
    component: () => import("@/views/PayForSearch.vue"),
    meta: {},
  },
  {
    path: "/guarantee",
    name: "Guarantee",
    component: () => import("@/views/Guarantee.vue"),
    meta: {},
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
