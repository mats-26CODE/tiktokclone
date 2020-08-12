import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBsnH8BLrx05OOpLk_ESVEYF1qzXVl5ho0",
    authDomain: "tiktokclone-18481.firebaseapp.com",
    databaseURL: "https://tiktokclone-18481.firebaseio.com",
    projectId: "tiktokclone-18481",
    storageBucket: "tiktokclone-18481.appspot.com",
    messagingSenderId: "192828227415",
    appId: "1:192828227415:web:c7c4cff8ea3f903e96c812"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;