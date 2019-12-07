var noticeid = "";
function appidset(){
	var date = new Date();
	var timestamp = date.getTime();
	noticeid = timestamp;
}

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
document.getElementById('noticeAdd').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
var	topics = getInputVal('topics');
var	sdtls = getInputVal('sdtls');
var	ndate = getInputVal('ndate');
var fdtls = getInputVal('fdtls')

 // Save message
  saveMessage(topics,sdtls,ndate,fdtls);


  document.getElementById("noticeAdd").style.display = 'none';
  document.getElementById("thankyou").style.display = 'block';

  document.getElementById('noticeAdd').reset();
}

function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase   
function saveMessage(topics,sdtls,ndate,fdtls){
  /*
  var newMessageRef = messagesRef.push();
  MessageRef.set({
  */
  firebase.database().ref('notices/' + noticeid).set({
topics:topics,
sdtls:sdtls,
ndate:ndate,
fdtls:fdtls
  });
}

function opentab(evt, tabName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}