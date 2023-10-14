import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyALFt6-IuVnFubkEJVR3j0RK_uumtG5KIc",
  authDomain: "e-libraryapp-2b5ef.firebaseapp.com",
  projectId: "e-libraryapp-2b5ef",
  storageBucket: "e-libraryapp-2b5ef.appspot.com",
  messagingSenderId: "517753957510",
  appId: "1:517753957510:web:6bc8ee2de8e54b76b03507"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
