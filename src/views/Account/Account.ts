import { Vue, Component } from 'vue-property-decorator';
import ListButton from '@/components/ListButton/ListButton.vue';
import { getState, setState } from '@/store/StateWorker';
import getUser from '@/services/getUser';
import { getId } from '@/services/TokenManager';
import getOrders from '@/services/getOrders';
import Order from '@/utils/Order';
import { OrderObject } from '@/types/Order';

@Component({
 components: {
  ListButton,
 },
})
export default class Account extends Vue {
 constructor() {
  super();
 }
 async created() {
  const user = await getUser();
  const activeOrder: Order = new Order();
  if (user.activeOrder) {
   activeOrder.init(<OrderObject>user.activeOrder);
  }
  setState({ user: user, activeOrder });
  if (user.activeOrder) {
   this.$router.push('order');
  }
 }
}
