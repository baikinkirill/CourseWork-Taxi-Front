<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <button @click="onButtonClick">Тест</button>
    <TestComponent msg="Welcome to Your Vue.js + TypeScript App" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import TestComponent from "@/components/TestComponent/TestComponent.vue";
import store from "@/store";
import StateWorker, {setState} from "@/store/StateWorker";

@Component({
  components: {
    TestComponent,
  },
})
export default class HomeView extends Vue {
  constructor() {
    super();
  }

  onButtonClick = () => {
    setState({f:"fdfd",fe:"eee"})
  };
}
</script>
