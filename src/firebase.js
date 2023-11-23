import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyA4JV_IW1FGyzhqPSZWU3unSzMDDZi91tY",
    authDomain: "adduser-b03cd.firebaseapp.com",
    projectId: "adduser-b03cd",
    storageBucket: "adduser-b03cd.appspot.com",
    messagingSenderId: "29729753326",
    appId: "1:29729753326:web:4c078bbe24ac0911d78bff",
    measurementId: "G-9WB9H2WX7E",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { app, auth };