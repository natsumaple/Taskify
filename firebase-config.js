import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-firestore.js";
import { getMessaging } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-messaging.js";

const firebaseConfig = {
    apiKey: "AIzaSyBZ2DSnOWUnC5bRK6TS_uRKSSTrQpcu9yo",
    authDomain: "taskify-92a86.firebaseapp.com",
    projectId: "taskify-92a86",
    storageBucket: "taskify-92a86.firebasestorage.app",
    messagingSenderId: "1003689124923",
    appId: "1:1003689124923:web:866fd6561a1c8f98e3281e"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const messaging = getMessaging(app);

export { app, auth, db, messaging };
