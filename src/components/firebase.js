import firebase from "firebase/compat/app";
import "firebase/compat/database";

const firebaseConfig = {
    apiKey: "AIzaSyAEBZkj9eoT5kXPaPheJGfECUHP30oH8CQ",
    authDomain: "bookcabs-57ba5.firebaseapp.com",
    projectId: "bookcabs-57ba5",
    storageBucket: "bookcabs-57ba5.appspot.com",
    messagingSenderId: "942385576176",
    appId: "1:942385576176:web:4d3bf31c08510c4c156a35",
    measurementId: "G-5Q02D5XGE9"
};

firebase.initializeApp(firebaseConfig);

export const dataref = firebase.database();
export default firebase;