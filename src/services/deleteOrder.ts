import getToken from '@/services/TokenManager';

export default function deleteOrder(userId: number) {
 return fetch(
  process.env.VUE_APP_API_HOST + '/orders/delete?token=' + getToken(),
  {
   method: 'GET',
  }
 );
}
