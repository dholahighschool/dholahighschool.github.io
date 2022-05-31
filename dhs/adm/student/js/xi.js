var ars = 317;
var scs = 75;
var cms = 15;

  // Initialize Firebase
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
            
$(document).ready(function dtlsload(){

var rootRef = firebase.database().ref('mpadmin');

rootRef.on("child_added", snap => {

var cat= snap.child("cat").val();

var arm = snap.child("arm").val();
var arst = conv(snap.child("arst").val());
var arend = conv(snap.child("arend").val());

var scm = snap.child("scm").val();
var scst = conv(snap.child("scst").val());
var scend = conv(snap.child("scend").val());

var cmm = snap.child("cmm").val();
var cmst = conv(snap.child("cmst").val());
var cmend = conv(snap.child("cmend").val());


$('#all' + cat).html("Arts: <b>" + arm + "</b>&nbsp; Science: <b>" + scm + "</b>&nbsp; Commerce: <b>" + cmm + "</b>");
$('#ar' + cat).html("<u>Arts</u><br>Start: <b>" + arst + "</b>&nbsp; and End: <b>" + arend + "</b>");
$('#sc' + cat).html("<u>Science</u><br>Start: <b>" + scst + "</b>&nbsp; and End: <b>" + scend + "</b>");
$('#cm' + cat).html("<u>Commerce</u><br>Start: <b>" + cmst + "</b>&nbsp; and End: <b>" + cmend + "</b>");
$('#xi' + cat).attr("data-st", Math.min(new Date(arst).getTime(),new Date(scst).getTime(),new Date(cmst).getTime()));
$('#xi' + cat).attr("data-end", Math.max(new Date(arend).getTime(),new Date(scend).getTime(),new Date(cmend).getTime()));
});

},
checkdtls(), arl(), scl(), cml()
);


function checkdtls(){

var rootRef = firebase.database().ref('mpadmin');

rootRef.on("child_changed", snap => {

var cat= snap.child("cat").val();

var arm = snap.child("arm").val();
var arst = conv(snap.child("arst").val());
var arend = conv(snap.child("arend").val());

var scm = snap.child("scm").val();
var scst = conv(snap.child("scst").val());
var scend = conv(snap.child("scend").val());

var cmm = snap.child("cmm").val();
var cmst = conv(snap.child("cmst").val());
var cmend = conv(snap.child("cmend").val());


$('#all' + cat).html("Arts: <b>" + arm + "</b>&nbsp; Science: <b>" + scm + "</b>&nbsp; Commerce: <b>" + cmm + "</b>");
$('#ar' + cat).html("<u>Arts</u><br>Start: <b>" + arst + "</b>&nbsp; and End: <b>" + arend + "</b>");
$('#sc' + cat).html("<u>Science</u><br>Start: <b>" + scst + "</b>&nbsp; and End: <b>" + scend + "</b>");
$('#cm' + cat).html("<u>Commerce</u><br>Start: <b>" + cmst + "</b>&nbsp; and End: <b>" + cmend + "</b>");
$('#xi' + cat).attr("data-st", Math.min(new Date(arst).getTime(),new Date(scst).getTime(),new Date(cmst).getTime()));
$('#xi' + cat).attr("data-end", Math.max(new Date(arend).getTime(),new Date(scend).getTime(),new Date(cmend).getTime()));
});

}

function arl() {
  var rootRef = firebase.database().ref('xi2022/ARTS/');

rootRef.on("child_added", snap => {

var cat = snap.child("prstream").val();
  ars = ars - 1;
  $('#seatlive').html("<center><b><i>Seats Available (LIVE): </i></b><br>Arts: <b>" + ars + "</b>&nbsp; Science: <b>" + scs + "</b>&nbsp; Commerce: <b>" + cms + "</b></center>");

});

}
function scl() {
  var rootRef = firebase.database().ref('xi2022/SCIENCE/');

rootRef.on("child_added", snap => {

var cat = snap.child("prstream").val();
  scs = scs - 1;
  $('#seatlive').html("<center><b><i>Seats Available (LIVE): </i></b><br>Arts: <b>" + ars + "</b>&nbsp; Science: <b>" + scs + "</b>&nbsp; Commerce: <b>" + cms + "</b></center>");

});

}
function cml() {
  var rootRef = firebase.database().ref('xi2022/COMMERCE/');

rootRef.on("child_added", snap => {

var cat = snap.child("prstream").val();
  cms = cms - 1;
  $('#seatlive').html("<center><b><i>Seats Available (LIVE): </i></b><br>Arts: <b>" + ars + "</b>&nbsp; Science: <b>" + scs + "</b>&nbsp; Commerce: <b>" + cms + "</b></center>");

});
}



function conv(val) {
  var d = new Date(val);
  var n = d.toDateString() + " " +  d.toLocaleTimeString();
  return n;
}
  
  function choice(x) {
    var hde = document.getElementsByClassName("inf");
      for(var i = 0; i < hde.length; i++){
          hde[i].style.display = "none";
      }
    if(x.value == "WB"){
      document.getElementById("wbc").style.display = "block";
      document.getElementById("hmc").style.display = "none";
    }
    else if (x.value == "MB") {
      document.getElementById("hmc").style.display = "block";
      document.getElementById("wbc").style.display = "none";
    }
    else{
      swal("Dhola High School", "Choose an option to proceed further", "info");
    }
  }

  function slct(slc) {
  var hde = document.getElementsByClassName("inf");
    for(var i = 0; i < hde.length; i++){
        hde[i].style.display = "none";
    }
    document.getElementById(slc.value + "sb").style.display = "block";
  }

  function xiadm(path) {
    chktm(document.getElementById(path.id).getAttribute("data-st"),document.getElementById(path.id).getAttribute("data-end"),path.id);
  }

  function chktm(y,z,p) {
        var d = new Date();
        var x = d.getTime();
        //fn = "js/" + p + ".js";
        
        if(+x >= +y && +x <= +z)
        {
          window.open("student/" + p + ".html");
            //localStorage.setItem("fn", fn);
//             if(p == "xiam" || p == "xihm"){
//               window.open("student/" + p + "G.html");
//             }
//             else{
//               window.open("student/" + p + ".html");  
//             }
            
        }
        else
        {
            swal("Dhola High School","Admission Portal is not available now. Check given times above","info");
        }
    }

function xilg() {
  var d = new Date();
  var y = d.getTime();
  var n = new Date("2021-06-07 10:00:00 AM"); //YYYY-MM-DD hh:mm:ss 
  var x = n.getTime();
if(+x >= +y){swal("Dhola High School","Admission Portal will be available from 7th July, 2021.","info");}
else{
  document.getElementById('xilg1').style.display='block';
}
}

function chklgin() {
  if(document.getElementById('udb').value!="NULL" && document.getElementById('uid').value.length!=0 && document.getElementById('psd').value.length!=0){
    chklgd(document.getElementById('udb').value,document.getElementById('uid').value,document.getElementById('psd').value);
  }
  else{
    swal("Dhola High School","Enter stream, Application ID & Date of Birth to proceed.","error");
  }
}

function chklgd(x,y,z) {

  var flaglg = 0;
  var rootRef = firebase.database().ref("xi2022/" + x);

rootRef.on("child_added", snap => {

var appid = snap.child("appid").val();
var dob = snap.child("dob").val();

if(appid == y && dob == z){
  flaglg ++;
  
}

});
 if(flaglg == 1){
  localStorage.ud = y + "splt" + x;
  document.getElementById('xilg1').style.display='none';
  resetg();
  window.open("student/xilogin.html");
 } 
 else{
  swal("Dhola High School","Wrong Credentials! Try again later.","error");
 }
}

function resetg() {
  document.getElementById('udb').value = "NULL";
  document.getElementById('uid').value = "";
  document.getElementById('psd').value = "";
}
