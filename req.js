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
  
  var requestFormDB = firebase.database().ref('requestForm');
  
  document.getElementById('requestForm').addEventListener('submit',submitForm);
  
  function submitForm(e){
    e.preventDefault();
  
    var name = getElementVal('name');
    var emailid = getElementVal('emailid');
    var address = getElementVal('address');
    var telephone = getElementVal('telephone');
  
   saveMessages(name,emailid,address,telephone);
  
  
   document.querySelector('.alert').style.display = "block";
  
   setTimeout(()=>{
            document.querySelector('.alert').style.display = "none";
   },3000);
  
  
   document.getElementById('requestForm').requestFullscreen();
  
  }
  
  
  const saveMessages = (name,emailid,address,telephone)=>{
    var newRequestForm = requestFormDB.push();
  
    newRequestForm.set({
        name : name,
        emailid : emailid,
        address : address,
        telephone : telephone,
    })
  };
  
  
  
  const getElementVal = (id)=>{
    return document.getElementById(id).value;
  }