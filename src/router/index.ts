import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import LoginPage from '../views/LoginPage/LoginPage.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
 {
  path: '/',
  name: 'login',
  component: LoginPage,
 },
 {
  path: '/home',
  name: 'home',
  component: () =>
   import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
 },
];

const router = new VueRouter({
 routes,
});

export default router;
