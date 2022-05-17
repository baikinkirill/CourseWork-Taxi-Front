import { OrderObject } from '@/types/Order';
import { GetOrdersObject } from '@/types/getOrdersObject';
import getToken from '@/services/TokenManager';

export default function getOrders(
 column: string,
 pattern: string
): Promise<OrderObject[] | string> {
 return new Promise<OrderObject[] | string>((resolve, reject) => {
  fetch(
   process.env.VUE_APP_API_HOST +
    `/orders/filter/${column}/${pattern}?token=${getToken()}`
  )
   .then((e) => {
    switch (e.status) {
     case 401:
      reject('Ошибка авторизации');
      return null;
      break;
     default:
      return e.json();
      break;
    }
   })
   .then((data: GetOrdersObject) => {
    resolve(data.response);
   })
   .catch(() => {
    reject('Произошла ошибка');
   });
 });
}
