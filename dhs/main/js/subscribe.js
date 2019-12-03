var config = {
  apiKey: "AIzaSyC5hD8l1JE0G97zlflv8R8UZ4vcDv7JcsU",
    authDomain: "admission-2020.firebaseapp.com",
    databaseURL: "https://admission-2020.firebaseio.com",
    projectId: "admission-2020",
    storageBucket: "admission-2020.appspot.com",
    messagingSenderId: "319954780627",
    appId: "1:319954780627:web:e7619e9df08e54d703af26",
    measurementId: "G-K3CT148EJR"

};
firebase.initializeApp(config);

// Listen for form submit
document.getElementById('subscribe').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
var	name = getInputVal('subsname');
var	phone = getInputVal('subsphone');
var	email = getInputVal('subsemail');
var msg = getInputVal('subsmsg');
var subs = "YES";

 // Save message
  saveMessage(name,phone,email,subs,msg);


  document.getElementById("subscribe").style.display = 'none';
  document.getElementById("thanksubs").style.display = 'block';

  document.getElementById('contactForm').reset();
}

function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase   
function saveMessage(name,phone,email,subs,msg){
  /*
  var newMessageRef = messagesRef.push();
  MessageRef.set({
  */
  firebase.database().ref('subs/' + phone).set({

name:name,
phone:phone,
email:email,
subs:subs,
msg:msg
  });
}