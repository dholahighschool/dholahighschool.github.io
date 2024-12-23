var currentYear = "vtoix2025";
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

var flag=0;

var allID = [];
var allPass = [];
var allSubmit = [];

function getAllDetails() {
var rootRef = firebase.database().ref(currentYear);
rootRef.on("child_added", snap => {
var appid = snap.child("appid").val();
var finalSubmit = snap.child("finalSubmit").val();
var dob = snap.child("dob").val();
allID.push(appid);
allSubmit.push(finalSubmit);
allPass.push(dob);
});
}

function chkn() {
	var psd = document.getElementById("password").value;
	var userID = document.getElementById("username").value;
	var ast="";
	var finalSubmit = "";
	flag=0;
	if(allID.includes(userID) && allPass[allID.indexOf(userID)] == psd && allSubmit[allID.indexOf(userID)] == "Done"){
	Swal.fire({
  		title: 'Dhola high School',
  		html: 'Choose to proceed: <br><ul><li>For <i>print or preview</i> of Application Form click <b>Print</b></li><li>To <i>modify or edit</i> Application Form click <b>Modify</b></li></ol>',
  		showConfirmButton:true,
  		confirmButtonText:'Print',
  		showDenyButton:true,
  		denyButtonText:'Modify',
  		confirmButtonColor:'#3085d6',
  		denyButtonColor:'#20a614',
  		showCancelButton: true
	}).then((result) => {
  	if (result.isConfirmed) {
    	window.open("preview.html?uid=" + userID);
  	}
  	else if(result.isDenied){
  		window.open("../admission.html?uid=" + userID);
  		}
	});
	}
	else if(allID.includes(userID) && allPass[allID.indexOf(userID)] == psd && allSubmit[allID.indexOf(userID)] != "Done"){
		window.open("../admission.html?uid=" + userID);
	}
	else
	{
		Swal.fire("Dhola High School","Sorry! \n You entered wrong Application ID or Date of Birth!","error");
	}
}
