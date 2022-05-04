import { Component, Prop, Vue } from 'vue-property-decorator';
import { getState, setState } from '@/store/StateWorker';

@Component
export default class Menu extends Vue {
 @Prop() private show!: boolean;
 private state = getState();

 hideMenu = () => {
  setState({ menuShow: false });
 };

 openHistory = () => {
  setState({ menuShow: false });
  this.$router.push('history');
 };
}
