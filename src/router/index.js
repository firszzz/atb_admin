import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/booking",
    name: "booking",
    component: function () {
      return import("../views/Booking.vue");
    },
  },
  {
    path: "/office",
    name: "office",
    component: function () {
      return import("../views/Office.vue");
    },
  },
  {
    path: "/employee",
    name: "employee",
    component: function () {
      return import("../views/Employee.vue");
    },
  },
  {
    path: "/support",
    name: "support",
    component: function () {
      return import("../views/Support.vue");
    },
  },
  {
    path: "/statistic",
    name: "statistic",
    component: function () {
      return import("../views/Statistic.vue");
    },
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
