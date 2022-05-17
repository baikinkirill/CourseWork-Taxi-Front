import { setState } from '@/store/StateWorker';

export default function getToken(
 login?: string,
 password?: string
): Promise<string> | string {
 const token = localStorage.getItem('ACCESS_TOKEN');
 if (token) {
  return token;
 }

 return new Promise((resolve, reject) => {
  fetch(
   process.env.VUE_APP_API_HOST +
    `/user/getToken?login=${login}&password=${password}`
  )
   .then((e) => {
    if (e.status !== 201) {
     reject('Неправильный логин или пароль');
    } else {
     return e.json();
    }
   })
   .then((data) => {
    setState({ user: data.response.user, token: data.response.token });
    localStorage.setItem('ACCESS_TOKEN', data.response.token);
    resolve(data.response.token);
   })
   .catch(() => {
    reject('Произошла какая-то ошибка');
   });
 });
}

export function getId(): number {
 const token = localStorage.getItem('ACCESS_TOKEN');
 if (token) {
  return Number.parseInt(parseJwt(token).sub);
 } else {
  return -1;
 }
}

export function deleteToken() {
 localStorage.setItem('ACCESS_TOKEN', '');
}

export function parseJwt(token: string) {
 const base64Url = token.split('.')[1];
 const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
 const jsonPayload = decodeURIComponent(
  atob(base64)
   .split('')
   .map(function (c) {
    return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
   })
   .join('')
 );

 return JSON.parse(jsonPayload);
}
