import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyB-Y8ircjtPBINwjbAm34xVPcYfhH0O9hA",
  authDomain: "proyectofinal-coder-fbba2.firebaseapp.com",
  projectId: "proyectofinal-coder-fbba2",
  storageBucket: "proyectofinal-coder-fbba2.appspot.com",
  messagingSenderId: "224134454067",
  appId: "1:224134454067:web:6870f5737b886448bb3c46"
};

// Initialize 
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)