import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyAvSbLB3cZ7VQrwENJPi0OOZcnx50W96KQ",
  authDomain: "barter-system-890e5.firebaseapp.com",
  databaseURL: "https://barter-system-890e5.firebaseio.com",
  projectId: "barter-system-890e5",
  storageBucket: "barter-system-890e5.appspot.com",
  messagingSenderId: "601356973551",
  appId: "1:601356973551:web:c6d519fa77f827cc44f21a"
};
  // Initialize Firebase
  
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();
