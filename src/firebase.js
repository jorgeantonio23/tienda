import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore'

const app = firebase.initializeApp(
    {
        apiKey: "AIzaSyCSNZNUd2YkGJc7MUP7y2U5Tu5TCkgLJT0",
        authDomain: "e-comerce-2fb2f.firebaseapp.com",
        projectId: "e-comerce-2fb2f",
        storageBucket: "e-comerce-2fb2f.appspot.com",
        messagingSenderId: "1063580303426",
        appId: "1:1063580303426:web:316fa0ee239e5c91d4eddb",
        measurementId: "G-0XSVYHGL00"
    }
);


export const auth = firebase.auth();
export default app;

export const db = firebase.firestore();
console.log('Firebase Conectado')

