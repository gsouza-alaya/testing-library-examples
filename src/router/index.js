import Vue from "vue";
import VueRouter from "vue-router";
import Example1 from "../views/Example1.vue";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: import.meta.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Example1,
    },
    {
      path: "/example1",
      name: "example1",
      component: () => import("../views/Example1.vue"),
    },
    {
      path: "/example2",
      name: "example2",
      component: () => import("../views/Example2.vue"),
    },
  ],
});

export default router;
