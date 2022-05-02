export default function getToken() {
 return new Promise((resolve, reject) => {
  setTimeout(() => {
   const TOKEN = 'abc';
   localStorage.setItem('ACCESS_TOKEN', TOKEN);

   resolve(TOKEN);
  }, 1500);
 });
}
