import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"
import { getAuth } from "firebase/auth"
import credentials from "../../credentials.json"

const firebaseConfig = {
    apiKey: credentials.PROD_API.REACT_APP_PROD_API_KEY,
    authDomain: credentials.PROD_API.REACT_APP_PROD_AUTH_DOMAIN,
    projectId: credentials.PROD_API.REACT_APP_PROD_PROJECT_ID,
    storageBucket: credentials.PROD_API.REACT_APP_PROD_STORAGE_BUCKET,
    messagingSenderId: credentials.PROD_API.REACT_APP_PROD_MESSAGING_SENDER_ID,
    appId: credentials.PROD_API.REACT_APP_PROD_APP_ID,
    measurementId: credentials.PROD_API.REACT_APP_PROD_MEASUREMENT_ID
};

const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
const db = getFirestore(app)
const storage = getStorage(app)
const auth = getAuth(app)

export {db}
export {storage}
export {auth}