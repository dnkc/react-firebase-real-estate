// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDC7lO9fWcdzOIbKPAoyOqecVLYypr14ZA",
  authDomain: "house-marketplace-app-f6b3b.firebaseapp.com",
  projectId: "house-marketplace-app-f6b3b",
  storageBucket: "house-marketplace-app-f6b3b.appspot.com",
  messagingSenderId: "755250613681",
  appId: "1:755250613681:web:c60d5914ff2ca1686e8190",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore();

//firebase - original

// rules_version = '2';
// service cloud.firestore {
//   match /databases/{database}/documents {
//     match /{document=**} {
//       allow read, write: if
//           request.time < timestamp.date(2022, 2, 21);
//     }
//   }
// }

// storage - original

// rules_version = '2';
// service firebase.storage {
//   match /b/{bucket}/o {
//     match /{allPaths=**} {
//       allow read, write: if request.auth != null;
//     }
//   }
// }
