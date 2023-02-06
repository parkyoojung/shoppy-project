import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from 'firebase/auth';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();

export function login(){
  signInWithPopup(auth, provider)
  .then((result) => {
    const user = result.user;
    console.log(user);
  }).catch(console.error);
}
export function logout(){
  signOut(auth).then(() => null);
}

export function onUserStateChange(callback){
  onAuthStateChanged(auth, (user) => {
    callback(user);
  })
}
// Cart userId에 있는 cart 불어오기
// export async function getCart(userId){
//   return get(ref(database, `cart/${userId}`))
//   .then(snapshot => {
//     const items = snapshot.val() || {};
//     return Object.values(items);
//   })
// }
// // Cart 더하기
// export async function addOrUpdateToCart(userId, product) {
//   return set(ref(database, `cart/${userId}/${product.id}`), product)
// }
// // Cart 삭제
// export async function removeFromCart(userId, productId){
//   return remove(ref(database, `cart/${userId}/${productId}`))
// }

