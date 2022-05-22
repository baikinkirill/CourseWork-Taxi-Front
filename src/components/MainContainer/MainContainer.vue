<template>
 <div :class="$style.parentContainer">
  <div :class="$style.parent">
   <slot></slot>
  </div>
 </div>
</template>

<script>
import Vue from 'vue';
import AtComponents from 'at-ui';
import 'at-ui-style'; // Import CSS
import { setState } from '@/store/StateWorker';

Vue.use(AtComponents);

function checkToken() {
 const route = this.$route.name;
 const ACCESS_TOKEN = localStorage.getItem('ACCESS_TOKEN');
 setState({ route: route, ACCESS_TOKEN });

 if ((route !== 'login' && route !== 'register') && !ACCESS_TOKEN) {
  this.$router.push('/');
 } else if (route === 'login' && ACCESS_TOKEN) {
  this.$router.push('home');
 }
}

export default {
 name: 'MainContainer',
 computed: {
  currentRouteName() {
   return this.$route.name;
  },
 },
 updated() {
  checkToken.call(this);
 },
 created() {
  checkToken.call(this);
 },
};
</script>

<style lang="scss" module src="./MainContainer.module.scss"></style>
