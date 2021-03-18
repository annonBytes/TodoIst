import firebase from 'firebase'



const firebaseConfig = {
    apiKey: "AIzaSyCfrqXhOjGiKMTND7hAkTrpOfcnUliY5Hg",
    authDomain: "todoist-clone-a712e.firebaseapp.com",
    projectId: "todoist-clone-a712e",
    storageBucket: "todoist-clone-a712e.appspot.com",
    messagingSenderId: "885716576684",
    appId: "1:885716576684:web:542087974576ad5113b209",
    measurementId: "G-Q2WS4DNTZZ"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore()
  const auth = firebase.auth();

  export {db, auth}