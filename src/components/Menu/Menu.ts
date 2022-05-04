import { Component, Prop, Vue } from 'vue-property-decorator';
import { getState, setState } from '@/store/StateWorker';
import ListButton from '@/components/ListButton/ListButton.vue';

@Component({
 components:{
  ListButton,
 }
})
export default class Menu extends Vue {
 @Prop() private show!: boolean;
 @Prop() private userName!: boolean;
 private state = getState();

 hideMenu = () => {
  setState({ menuShow: false });
 };

 openHistory = () => {
  setState({ menuShow: false });
  this.$router.push('history');
 };
}
