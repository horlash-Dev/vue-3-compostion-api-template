import { createRouter, createWebHistory } from "vue-router";
import DashboardView from "../views/DashboardView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: DashboardView,
    },
    {
      path: "/cards",
      name: "cards",
      component: () => import("../views/CardView.vue"),
    },
    {
      path: "/all-border",
      name: "borders",
      component: () => import("../views/Border.vue"),
    },
    {
      path: "/all/tables",
      name: "tables",
      component: () => import("../views/ListView.vue"),
    },
  ],
});

export default router;
