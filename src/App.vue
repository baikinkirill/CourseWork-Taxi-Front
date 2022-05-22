<template>
 <div id="app">
  <MainContainer>
   <router-view />
  </MainContainer>
 </div>
</template>

<script>
import Vue from 'vue';
import Antv from 'antv';
import 'antv/dist/antv.css';
Vue.use(Antv);
</script>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import MainContainer from '@/components/MainContainer/MainContainer.vue';
@Component({
 components: {
  MainContainer,
 },
})
export default class Registration extends Vue {}
</script>
<style lang="scss">
#app {
 font-family: Avenir, Helvetica, Arial, sans-serif;
 -webkit-font-smoothing: antialiased;
 -moz-osx-font-smoothing: grayscale;
 text-align: center;
 color: #2c3e50;
}

body {
 padding: 0;
 margin: 0;
}
</style>
