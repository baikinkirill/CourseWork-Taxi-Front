import { Vue, Component } from 'vue-property-decorator';
import ListButton from '@/components/ListButton/ListButton.vue';
import { getState } from '@/store/StateWorker';
import { OrderObject } from '@/types/Order';
import Order from '@/utils/Order';

@Component({
 components: {},
})
export default class OrderPage extends Vue {
 public state = getState();
 created() {
  if (!this.state.activeOrder) this.$router.push('account');
 }

 cancel() {
  if (this.state.activeOrder) {
   (<Order>this.state.activeOrder).done();
  }
 }
}
