// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyBMOYOwGVmNqN9MDoxkFoeyQzk_lbHQ7Gs",
    authDomain: "facebook-clone-ceabc.firebaseapp.com",
    projectId: "facebook-clone-ceabc",
    storageBucket: "facebook-clone-ceabc.appspot.com",
    messagingSenderId: "124660376537",
    appId: "1:124660376537:web:ec747f77222ca545de6fc8",
    measurementId: "G-Q8Y9P4CNXX"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { auth, provider }
export default db