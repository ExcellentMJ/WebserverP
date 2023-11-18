 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
 import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-analytics.js";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
 const firebaseConfig = {
   apiKey: "AIzaSyDGpzUAoYUuxkbBXkMbNbc2VZiBolRvpqU",
   authDomain: "webserverclass.firebaseapp.com",
   projectId: "webserverclass",
   storageBucket: "webserverclass.appspot.com",
   messagingSenderId: "214129241212",
   appId: "1:214129241212:web:dedfe62cc78d1693192df9",
   measurementId: "G-SDM5HSWVDG"
 };

 // Initialize Firebase
 export const app = initializeApp(firebaseConfig);
 const analytics = getAnalytics(app);