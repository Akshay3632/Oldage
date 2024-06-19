/* global firebase */

document.getElementById("loginform").addEventListener("submit",(event)=>{
    event.preventDefault();
});
firebase.auth().onAuthStatechanged((user)=>{
    if(user){
        location.replace("home.html");
    }
});


function login(){
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    firebase.auth().signInwithEmailAndPassword(email,password);
}