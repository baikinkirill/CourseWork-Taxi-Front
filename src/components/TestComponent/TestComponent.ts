import { Component, Prop, Vue } from "vue-property-decorator";
import { getState } from "@/store/StateWorker";

@Component
export default class TestComponent extends Vue {
  @Prop() private msg!: string;
  private state = getState();
}
