export default function getToken(login: string, password: string) {
 return new Promise((resolve, reject) => {
  setTimeout(() => {
   const TOKEN = 'abc';
   localStorage.setItem('ACCESS_TOKEN', TOKEN);

   resolve(TOKEN);
  }, 1500);
 });
}

export function deleteToken() {
 localStorage.setItem('ACCESS_TOKEN', '');
}
