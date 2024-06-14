import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"
import { getAuth } from "firebase/auth"
import credentials from "../../credentials.json"

const firebaseConfig = {
    apiKey: credentials.DEV_API.REACT_APP_DEV_API_KEY,
    authDomain: credentials.DEV_API.REACT_APP_DEV_AUTH_DOMAIN,
    projectId: credentials.DEV_API.REACT_APP_DEV_PROJECT_ID,
    storageBucket: credentials.DEV_API.REACT_APP_DEV_STORAGE_BUCKET,
    messagingSenderId: credentials.DEV_API.REACT_APP_DEV_MESSAGING_SENDER_ID,
    appId: credentials.DEV_API.REACT_APP_DEV_APP_ID,
    measurementId: credentials.DEV_API.REACT_APP_DEV_MEASUREMENT_ID
};

const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
const dbDev = getFirestore(app)
const storageDev = getStorage(app)
const authDev = getAuth(app)

export { dbDev }
export { storageDev }
export { authDev }