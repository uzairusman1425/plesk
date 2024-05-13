import { initializeApp } from "firebase/app"
import { getAuth, GoogleAuthProvider } from "firebase/auth"

const firebaseConfig = {
	apiKey: "AIzaSyAxVThC9q2hQfVMA7n61AtuB7zjsXF3Jho",
	authDomain: "plesk-417720.firebaseapp.com",
	projectId: "plesk-417720",
	storageBucket: "plesk-417720.appspot.com",
	messagingSenderId: "876954833842",
	appId: "1:876954833842:web:67b5c27b458468b1e6caab",
	measurementId: "G-DWL83NGYW7"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

const auth = getAuth(app)

const provider = new GoogleAuthProvider()

export { auth, provider }
