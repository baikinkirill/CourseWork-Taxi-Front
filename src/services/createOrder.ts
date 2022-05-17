import Order from '@/utils/Order';
import getToken from '@/services/TokenManager';
import { OrderObject } from '@/types/Order';

export default function createOrder(ord: Order): Promise<OrderObject> {
 return fetch(
  process.env.VUE_APP_API_HOST +
   '/orders?token=' +
   getToken() +
   '' +
   ord.toRequestString(),
  {
   method: 'POST',
  }
 ).then((e) => {
  if (e.status === 201) {
   return e.json();
  } else {
   throw 'Ошибка';
  }
 });
}
