// config.js

// --- FIREBASE CONFIG ---
const firebaseConfig = {
    apiKey: "AIzaSyC1OBVxQYM7F87KNA1VrJPAnY-YZj8OA-s",
    authDomain: "kaira-voice-8719d.firebaseapp.com",
    projectId: "kaira-voice-8719d",
    storageBucket: "kaira-voice-8719d.firebasestorage.app",
    messagingSenderId: "1006702737635",
    appId: "1:1006702737635:web:b72c7c964950188a1eedd6",
    measurementId: "G-0H8KH54TQL"
};

// --- ZEGOCLOUD CONFIG ---
const zegoConfig = {
    appID: 123456789, // Replace with your Zego AppID
    serverSecret: "YOUR_ZEGO_SERVER_SECRET" // Replace with your Zego Secret
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();