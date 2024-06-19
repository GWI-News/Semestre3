import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"
import { getAuth } from "firebase/auth"
import credentials from "../../credentials.json"

let firebaseConfig = {}
const environment = window.location.hostname

if (environment.includes('e715f')) {
    firebaseConfig = {
        apiKey: credentials.PROD_API.REACT_APP_PROD_API_KEY,
        authDomain: credentials.PROD_API.REACT_APP_PROD_AUTH_DOMAIN,
        projectId: credentials.PROD_API.REACT_APP_PROD_PROJECT_ID,
        storageBucket: credentials.PROD_API.REACT_APP_PROD_STORAGE_BUCKET,
        messagingSenderId: credentials.PROD_API.REACT_APP_PROD_MESSAGING_SENDER_ID,
        appId: credentials.PROD_API.REACT_APP_PROD_APP_ID,
        measurementId: credentials.PROD_API.REACT_APP_PROD_MEASUREMENT_ID
    }
} else {
    firebaseConfig = {
        apiKey: credentials.DEV_API.REACT_APP_DEV_API_KEY,
        authDomain: credentials.DEV_API.REACT_APP_DEV_AUTH_DOMAIN,
        projectId: credentials.DEV_API.REACT_APP_DEV_PROJECT_ID,
        storageBucket: credentials.DEV_API.REACT_APP_DEV_STORAGE_BUCKET,
        messagingSenderId: credentials.DEV_API.REACT_APP_DEV_MESSAGING_SENDER_ID,
        appId: credentials.DEV_API.REACT_APP_DEV_APP_ID,
        measurementId: credentials.DEV_API.REACT_APP_DEV_MEASUREMENT_ID
    }
}

const app = initializeApp(firebaseConfig)
export const analytics = getAnalytics(app)
export const db = getFirestore(app)
export const storage = getStorage(app)
export const auth = getAuth(app)