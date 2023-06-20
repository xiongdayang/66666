import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    redirect: "index",
    component: HomeView,
    children: [
      // 首页
      {
        path: "/index",
        name: "index",
        component: () => import("../views/home/home"),
      },
      // 课程
      {
        path: "/kecheng",
        name: "kecheng",
        component: () => import("../views/kecheng/kecheng"),
      },
      // 练习
      {
        path: "/lianxi",
        name: "lianxi",
        component: () => import("../views/lianxi/lianxi"),
      },
      // 预约课程
      {
        path: "/yukecheng",
        name: "yukecheng",
        component: () => import("../views/yukecheng/yukecheng"),
      },
      // 我的
      {
        path: "/my",
        name: "my",
        component: () => import("../views/my/my"),
      },
    ],
  },
  {
    path: "/about",
    name: "about",
    component: () => import("../views/AboutView.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
