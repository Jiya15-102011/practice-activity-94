
//ADD YOUR FIREBASE LINKS
var firebaseConfig = {
    apiKey: "AIzaSyAzMVFyN8eO7hkbqY1A6Qvqb9f9HQ3pIZk",
    authDomain: "kwitter-3995b.firebaseapp.com",
    databaseURL: "https://kwitter-3995b-default-rtdb.firebaseio.com",
    projectId: "kwitter-3995b",
    storageBucket: "kwitter-3995b.appspot.com",
    messagingSenderId: "908317783053",
    appId: "1:908317783053:web:faa58cb090e26dd6671144",
    measurementId: "G-050X7JMMJV"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  function j(){
r=document.getElementById("n").value; 
firebase.database().ref("/").child(r).set({
school:"A.E.C.S Kaiga",
bestfriend:"NIYATHI,MANASI"
});
firebase.database().ref("/").on('value',function(snapshot){
    console.log(snapshot.val());
});
}