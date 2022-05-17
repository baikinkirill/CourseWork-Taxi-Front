import { Vue, Component } from 'vue-property-decorator';
import ListClickButton from '@/components/ListClickButton/ListClickButton.vue';
import getOrders from '@/services/getOrders';
import { setState } from '@/store/StateWorker';
import { OrderObject } from '@/types/Order';

@Component({
 components: { ListClickButton },
})
export default class OrderList extends Vue {
 public orderList: OrderObject[] = [];

 created() {
  getOrders('status', 'created').then((r) => {
   if (typeof r === 'object') {
    this.orderList = r;
   }
  });
 }
}
