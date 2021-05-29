import firebase from 'firebase/app';
import {firestore} from 'firebase';


var firebaseConfig = {
    apiKey: "AIzaSyBD2Aq1SfyZi957TsP2pV94E-6Eycxj-kI",
    authDomain: "timetracker-dc0a0.firebaseapp.com",
    projectId: "timetracker-dc0a0",
    storageBucket: "timetracker-dc0a0.appspot.com",
    messagingSenderId: "1044872348808",
    appId: "1:1044872348808:web:cee750ae7e1e646f56cb3d",
    measurementId: "G-5RZPHGWLWR"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  export default firebase;