import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class ListClickButton extends Vue {
 @Prop() private from?: string;
 @Prop() private to?: string;
 @Prop() private cost?: string | number;
 private open = false;

 onOpen() {
  this.open = true;
 }
}
