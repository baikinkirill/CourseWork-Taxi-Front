import { Vue, Component, Prop } from 'vue-property-decorator';
import Order from '@/utils/Order';
import createOrder from '@/services/createOrder';
import { OrderObject } from '@/types/Order';

@Component
export default class ListClickButton extends Vue {
 @Prop() private from?: string;
 @Prop() private to?: string;
 @Prop() private cost?: string | number;
 @Prop() private orderId?: number;
 private open = false;

 onOpen() {
  this.open = true;
 }

 confirmOrder() {
  const ord = new Order();
  if (this.orderId == undefined) return;

  ord.id = this.orderId;
  createOrder(ord).then((r) => {
   const result: OrderObject = r;
   console.log(result);
  });
 }
}
