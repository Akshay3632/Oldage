import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyC-EC6X0O7dIoflIwhmPJlAUzlMzfZAUMQ",
    authDomain: "contactform-37103.firebaseapp.com",
    databaseURL: "https://contactform-37103-default-rtdb.firebaseio.com",
    projectId: "contactform-37103",
    storageBucket: "contactform-37103.appspot.com",
    messagingSenderId: "219402083589",
    appId: "1:219402083589:web:846d036b75b4bce1b6ab6c"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  const database = getDatabase(contactForm);
  const auth = getAuth();
  
  submitSignIn.addEventListener('click',(e)=>{

    var name = document.getElementById('name').value;
    var password = document.getElementById('password').value;

    createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    // ...
    alert('User Created');
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
    alert(errorMessage);
  });
  });