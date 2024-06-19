/* global firebase */

firebase.auth().onAuthStatechanged((user)=>{
   
    if(!user){
        location.replace("index.html");
    }
});