import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyA5ERCfdlPVQPZ7wNZSCroARKNIiIjdaTU",
  authDomain: "e-commerce-react-e3b9d.firebaseapp.com",
  projectId: "e-commerce-react-e3b9d",
  storageBucket: "e-commerce-react-e3b9d.appspot.com",
  messagingSenderId: "752474691400",
  appId: "1:752474691400:web:93236dbf36bda7aa57457d",
  measurementId: "G-D514CEYMKE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)