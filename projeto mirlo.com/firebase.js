import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js"
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js"
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js"

const firebaseConfig = {
  apiKey: "AIzaSyDTrGcW0vnZvgVtZneELOzWRiwvxN5DsHE",
  authDomain: "nexusbloxk.firebaseapp.com",
  projectId: "nexusbloxk",
  storageBucket: "nexusbloxk.appspot.com",
  messagingSenderId: "612297736592",
  appId: "1:612297736592:web:cc394e608a5ba55c367315",
  measurementId: "G-Z19Y5BCR43"
}

const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)
export const auth = getAuth(app)