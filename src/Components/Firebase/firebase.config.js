import {initializeApp} from "firebase/app";
import {getAnalytics} from "firebase/analytics";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBFRJYKFyR_IP8yx6K0D_M_QGEAG9n-1Wg",
    authDomain: "ecommerce-eaa30.firebaseapp.com",
    projectId: "ecommerce-eaa30",
    storageBucket: "ecommerce-eaa30.appspot.com",
    messagingSenderId: "142306608250",
    appId: "1:142306608250:web:8b732caefb3ea5ae8ae7c3",
    measurementId: "G-FPWN0HVL15"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

const auth = getAuth(app);
const storage = getStorage(app);

export {
    auth,
    storage,
    db
};