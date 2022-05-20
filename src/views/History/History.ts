import { Vue, Component } from 'vue-property-decorator';
import ListItem from '@/components/ListItem/ListItem.vue';
import getOrders from '@/services/getOrders';
import { getState } from '@/store/StateWorker';
import getUser from '@/services/getUser';

@Component({
 components: {
  ListItem,
 },
})
export default class History extends Vue {
 private lists = [
  { time: '14:00', address: 'fdfd', date: 'Четверг', cost: '500' },
  { time: '14:00', address: 'fdfd', date: 'Четверг', cost: '500' },
  { time: '14:00', address: 'fdfd', date: 'Четверг', cost: '500' },
  { time: '14:00', address: 'fdfd', date: 'Четверг', cost: '500' },
 ];

 async created() {
  let orders: any = [];
  const user = await getUser();
  if (user.type === 'driver') {
   orders = await getOrders('driverId', user.id.toString());
  } else {
   orders = await getOrders('clientId', user.id.toString());
  }

  this.lists = orders;
 }
}
