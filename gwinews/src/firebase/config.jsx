import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyBlo_upI2kwLPk3GBKez86KnpZ2kPhxmyY",
    authDomain: "gwinews-e715f.firebaseapp.com",
    projectId: "gwinews-e715f",
    storageBucket: "gwinews-e715f.appspot.com",
    messagingSenderId: "1049545143586",
    appId: "1:1049545143586:web:5e69fb8d76ed9849ef617b",
    measurementId: "G-BXRDN9KNWT"
};

const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
const db = getFirestore(app)

export {db}