import getToken from '@/services/TokenManager';
import { UserObject } from '@/types/UserObject';

export default function getUser(): Promise<UserObject> {
 return fetch(process.env.VUE_APP_API_HOST + '/user?token=' + getToken())
  .then((e) => {
   return e.json();
  })
  .then((e) => {
   return e.response;
  });
}

export function getUserById(id: string | number): Promise<UserObject> {
 return fetch(
  process.env.VUE_APP_API_HOST +
   '/user/getById?token=' +
   getToken() +
   '&id=' +
   id.toString()
 )
  .then((e) => {
   return e.json();
  })
  .then((e) => {
   return e.response;
  });
}
