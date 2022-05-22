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
 {
  path: '/history',
  name: 'history',
  component: () =>
   import(/* webpackChunkName: "about" */ '../views/History/History.vue'),
 },
 {
  path: '/orders',
  name: 'orders',
  component: () =>
   import(/* webpackChunkName: "about" */ '../views/OrderList/OrderList.vue'),
 },
 {
  path: '/account',
  name: 'account',
  component: () =>
   import(/* webpackChunkName: "about" */ '../views/Account/Account.vue'),
 },
 {
  path: '/order',
  name: 'orderPage',
  component: () =>
   import(/* webpackChunkName: "about" */ '../views/OrderPage/OrderPage.vue'),
 },
 {
  path: '/register',
  name: 'register',
  component: () =>
   import(
    /* webpackChunkName: "about" */ '../views/Registration/Registration.vue'
   ),
 },
];

const router = new VueRouter({
 routes,
});

export default router;
