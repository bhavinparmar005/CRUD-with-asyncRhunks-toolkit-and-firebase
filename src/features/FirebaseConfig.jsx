// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyChqtReOSEVl6x47jTIESc8ZzhIovtXji0",
  authDomain: "asyncthunks.firebaseapp.com",
  projectId: "asyncthunks",
  storageBucket: "asyncthunks.firebasestorage.app",
  messagingSenderId: "764121142944",
  appId: "1:764121142944:web:c874b868986a3cf837dbc5",
  measurementId: "G-ZZY6YW8WDN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)