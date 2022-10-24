// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBAqZjP289zGYM0Q0qERpGR1Lxho2WaayA",
  authDomain: "code-academy-c19f9.firebaseapp.com",
  projectId: "code-academy-c19f9",
  storageBucket: "code-academy-c19f9.appspot.com",
  messagingSenderId: "1026922514513",
  appId: "1:1026922514513:web:8aff6834b7b7b93fab1070"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app