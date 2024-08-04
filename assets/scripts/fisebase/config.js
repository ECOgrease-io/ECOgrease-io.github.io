import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
import {
  getDatabase,
  ref,
  update,
  get,
  set,
} from "https://www.gstatic.com/firebasejs/10.12.4/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyCjhIOlBCV633VX_MyZkfFz1AvJ0S-cgXs",
  authDomain: "ecogrease-f3e4d.firebaseapp.com",
  databaseURL: "https://ecogrease-f3e4d-default-rtdb.firebaseio.com",
  projectId: "ecogrease-f3e4d",
  storageBucket: "ecogrease-f3e4d.appspot.com",
  messagingSenderId: "327955062560",
  appId: "1:327955062560:web:97342e3bc9cb6cf95b8145",
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
export { app, db, ref, update, get, set };
