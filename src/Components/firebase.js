import firebase from 'firebase/compat/app';
import 'firebase/compat/database';

const firebaseConfig = {
    apiKey: "AIzaSyCjiVRuw4HjrQMT_tEh-iEkY2-dj5fQMVc",
    authDomain: "major-project-62cc9.firebaseapp.com",
    projectId: "major-project-62cc9",
    storageBucket: "major-project-62cc9.appspot.com",
    messagingSenderId: "1017367158661",
    appId: "1:1017367158661:web:a2cfd73eda60df2590aeec"
};

firebase.initializeApp(firebaseConfig);
export const dataref = firebase.database();
export default firebase;
