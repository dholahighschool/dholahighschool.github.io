document.getElementById('prclass').value = location.search.substring(1).split("=")[1].toUpperCase();
var meetDate = location.search.substring(1).split("=")[2].toUpperCase().split("%20").join(" ").split("%3CBR%3").join(" ");
  if(location.search.substring(1).split("=")[3] == 'admin'){
    document.getElementById('prclass').disabled = false;
  }
const cDate = new Date();
const timestamp = cDate.getTime();
var alluser = [];
var allid = [];
var flagcheck = 0;
//document.getElementById('registerForm').addEventListener('submit', submitForm);

// Submit form

function submitForm(){

//  e.preventDefault();

  // Get values
var	name = getInputVal('fname');
var	dob = getInputVal('dob');
var	gname = getInputVal('gname');
var	prclass = getInputVal('prclass');
var	schooltype = getInputVal('schooltype');
var	bsid = getInputVal('bsid');
var regID = getInputVal('regID');
var meet = meetDate;

 // Save message
  saveMessage(timestamp,name,dob,gname,prclass,schooltype,bsid,regID,meet);
  Swal.fire({
  title: 'Dhola High School',
  text: 'Registration Successful. Application ID: ' + timestamp + '. Note down for further use.',
  timerProgressBar: true,
  allowOutsideClick:false,
  allowEscapeKey:false
});
  //swal("Dhola High School","Registration Successful. Application ID: " + timestamp + ". Note down for further use.","success");

  document.getElementById('registerForm').reset();
}

function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase   
function saveMessage(appid,name,dob,gname,prclass,schooltype,bsid,regID,meet){
  /*
  var newMessageRef = messagesRef.push();
  MessageRef.set({
  */
  firebase.database().ref('vtoix2026/' + appid).update({
appid:appid.toString(),
name:name,
dob:dob,
gname:gname,
prclass:prclass,
schooltype:schooltype,
bsid:bsid,
regID:regID,
acyear:"2026",
meet:meet
  });
}

function getAllUser(){
Swal.fire({
  title: 'Dhola High School',
  html: 'Please wait...',
  timer: 2000,
  timerProgressBar: true,
  allowOutsideClick:false,
  allowEscapeKey:false
});
var rootRef = firebase.database().ref('vtoix2026');
rootRef.on("child_added", snap => {
var appid = snap.child("appid").val();
var regID = snap.child("regID").val();
alluser.push(regID);
allid.push(appid);
});
}

function verifyUser(){
  if(document.getElementById("dob").value!="" & document.getElementById("fname").value!="" & document.getElementById("gname").value!="" &document.getElementById("prclass").value!="" ){
document.getElementById('regID').value = (document.getElementById('dob').value.split("-").join("") + document.getElementById('fname').value.split(" ")[0] + document.getElementById('prclass').value + document.getElementById('gname').value.split(" ")[0]).toUpperCase();
document.getElementById("applicationid").innerHTML = "<b>Application ID: </b> <u>" + timestamp + "</u>";

  if(alluser.includes(document.getElementById('regID').value)){
  document.getElementById("appid").style.display = "none";
  document.getElementById("checkRegister").style.display = "block";
  document.getElementById("registerForm").style.display = "block";
  Swal.fire({
    title: 'Dhola High School',
    html: 'Student already exists.',
    icon: 'error',
    allowOutsideClick:false,
    allowEscapeKey:false
  });
  }
  else{
  Swal.fire({
  title: 'Dhola High School',
  text: 'Do you want to register with details provided?',
  showDenyButton: true,
  showCancelButton: true,
  confirmButtonText: `Register`,
  denyButtonText: `Modify`,
    allowOutsideClick:false,
    allowEscapeKey:false
}).then((result) => {
  /* Read more about isConfirmed, isDenied below */
  if (result.isConfirmed) {
  document.getElementById("appid").style.display = "block";
  document.getElementById("checkRegister").style.display = "none";
  document.getElementById("registerForm").style.display = "none";
    Swal.fire({
    title: 'Dhola High School',
    html: 'Registration Successful',
    icon: 'success',
    allowOutsideClick:false,
    allowEscapeKey:false
  });
    submitForm();
  } else if (result.isDenied) {
    //Do Nothing
  }
})
  }
}
else{
  Swal.fire({
    title: 'Dhola High School',
    html: 'Enter details to verify',
    icon: 'error',
    allowOutsideClick:false,
    allowEscapeKey:false
  });
}
}
  function schooltypechange(){
    if(document.getElementById("schooltype").value == "FPS"){
      document.getElementById("banglarsikshaid").style.display = "block";
    }
    else{
      document.getElementById("banglarsikshaid").style.display = "none";
    }
  }
  function fillupform(){
    window.location.assign('student/admission.html?uid=' + timestamp);
  }


