import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
 {
  path: '/',
  name: 'login',
  component: () =>
   import(/* webpackChunkName: "about" */ '../views/LoginPage/LoginPage.vue'),
 },
 {
  path: '/home',
  name: 'home',
  component: () =>
   import(/* webpackChunkName: "about" */ '../views/MainView/MainView.vue'),
 },
];

const router = new VueRouter({
 routes,
});

export default router;
