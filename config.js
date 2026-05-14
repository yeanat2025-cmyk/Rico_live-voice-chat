// config.js

// Firebase Config
const firebaseConfig = {
    apiKey: "AIzaSyC1OBVxQYM7F87KNA1VrJPAnY-YZj8OA-s",
    authDomain: "kaira-voice-8719d.firebaseapp.com",
    projectId: "kaira-voice-8719d",
    storageBucket: "kaira-voice-8719d.firebasestorage.app",
    messagingSenderId: "1006702737635",
    appId: "1:1006702737635:web:b72c7c964950188a1eedd6",
    measurementId: "G-0H8KH54TQL"
};

// Cloudinary Config (✅ Safe - No API Secret)
const cloudinaryConfig = {
    cloudName: 'ddswvell9',              // ✅ Your Cloud Name
    uploadPreset: 'kairalive'     // ✅ Create this in Cloudinary Dashboard
    // ❌ NEVER put api_key or api_secret here!
};

// Initialize Firebase
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

const auth = firebase.auth();
const db = firebase.firestore();