export default function registerUser(
 login: string,
 password: string,
 firstName: string,
 lastName: string
) {
 return fetch(
  process.env.VUE_APP_API_HOST +
   `/user/create?login=${login}&password=${password}&firstName=${firstName}&lastName=${lastName}`
 ).then((e) => {
  return e.json();
 });
}
