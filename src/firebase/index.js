import {initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBvBmdoUVlHT0WWtngX_XykMl5sixK9hdc",
    authDomain: "badass-todo-56644.firebaseapp.com",
    projectId: "badass-todo-56644",
    storageBucket: "badass-todo-56644.appspot.com",
    messagingSenderId: "542947624570",
    appId: "1:542947624570:web:43daf34b11367010dd5dc3"
};

const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export {
    db
};
