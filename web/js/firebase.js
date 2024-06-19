 import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
                  import { getDatabase,ref,set,get,child  } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
                 

                  // Your web app's Firebase configuration
                  const firebaseConfig = {
                    apiKey: "AIzaSyAP5HHXm2HxLxf51-_omKgnoO6pxh3VG84",
                    authDomain: "oldeage-b361b.firebaseapp.com",
                    databaseURL: "https://oldeage-b361b-default-rtdb.firebaseio.com",
                    projectId: "oldeage-b361b",
                    storageBucket: "oldeage-b361b.appspot.com",
                    messagingSenderId: "345455592917",
                    appId: "1:345455592917:web:bb9f436072694c4af3e95c"
                  };

                  // Initialize Firebase
                  const app = initializeApp(firebaseConfig);


                //get ref to database services
                const db = initiakizeApp(app);

                document.getElementById("submit").addEventListener('click',function(e){
                    e.preventDefault();
                    set(ref(db,'user/' + document.getElementById("username").value),{
                    usrname:document.getElementById("username").value,  
                    email:document.getElementById("email").value,
                    PhoneNumber:document.getElementById("phone").value
                    });
                    alert("Login Successfull !");
                });