import { Component, Vue } from 'vue-property-decorator';
import ListButton from '@/components/ListButton/ListButton.vue';
import { setState } from '@/store/StateWorker';
import getUser from '@/services/getUser';
import Order from '@/utils/Order';
import { OrderObject } from '@/types/Order';
import { UserObject } from '@/types/UserObject';
import { UserType } from '@/enums/UserType';

@Component({
 components: {
  ListButton,
 },
})
export default class Account extends Vue {
 user: UserObject = {
  id: 0,
  firstName: '',
  lastName: '',
  type: UserType.CLIENT,
  activeOrder: 0,
 };

 constructor() {
  super();
 }
 async created() {
  this.user = await getUser();
  const activeOrder: Order = new Order();
  if (this.user.activeOrder) {
   activeOrder.init(<OrderObject>this.user.activeOrder);
  }
  setState({ user: this.user, activeOrder });
  if (this.user.activeOrder) {
   this.$router.push('order');
  }
 }
}
