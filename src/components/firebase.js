import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, addDoc } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

// Tu configuración de Firebase (la que te dio la consola de Firebase)
const firebaseConfig = {
  apiKey: "AIzaSyASn5U5kMCBWdNeS5pZFtEkYQX_0ABaql8",
  authDomain: "indumentariar18.firebaseapp.com",
  projectId: "indumentariar18",
  storageBucket: "indumentariar18.firebasestorage.app",
  messagingSenderId: "410146865430",
  appId: "1:410146865430:web:16c46b3900c002ee065037",
  measurementId: "G-63B540RRXY"
};

// Inicializa Firebase con la configuración
const app = initializeApp(firebaseConfig);

// Inicializa Firestore
const db = getFirestore(app);

const analytics = getAnalytics(app);

export { db, collection, getDocs, addDoc };
