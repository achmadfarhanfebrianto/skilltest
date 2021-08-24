import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyBNGQTHr6J0iDS2Lkf807Bt48_BkteI35Q",
    authDomain: "socmed-9b8a8.firebaseapp.com",
    projectId: "socmed-9b8a8",
    storageBucket: "socmed-9b8a8.appspot.com",
    messagingSenderId: "1067033738456",
    appId: "1:1067033738456:web:fe4e78567b094a8cf62bad",
    measurementId: "G-Z3VNWT1KMR"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  export default firebase;