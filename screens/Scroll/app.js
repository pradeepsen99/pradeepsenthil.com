// Initialize Firebase
var config ={
  apiKey: "AIzaSyCEmtGw8bbRb5FWp2RE4uFL46khLo1OGNk",
  authDomain: "scroll-f9e43.firebaseapp.com",
  databaseURL: "https://scroll-f9e43.firebaseio.com",
  projectId: "scroll-f9e43",
  storageBucket: "scroll-f9e43.appspot.com",
  messagingSenderId: "422097259298"
};
var dataspace = 'Users/TestUser/1/Notes';
firebase.initializeApp(config);
window.alert("Welcome to Scroll!");

console.log(firebase);

var db = firebase.database();
var ref = db.ref('Users/TestUser/1/Notes');

ref.on('value', snap=> firstmsg.innerText=snap.val());
