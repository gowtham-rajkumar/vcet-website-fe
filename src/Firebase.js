import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyC3b9cU28Gl6iOzgIYqQ1PgRINCzK2WSOY",
  authDomain: "sample-project-7e655.firebaseapp.com",
  projectId: "sample-project-7e655",
  storageBucket: "sample-project-7e655.appspot.com",
  messagingSenderId: "866695909706",
  appId: "1:866695909706:web:172a767edd5696b94271b3",
  measurementId: "G-3F34ENF31V"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth =app.auth();

export default  app;