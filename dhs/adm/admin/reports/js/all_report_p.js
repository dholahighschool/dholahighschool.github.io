var cls = ""; 
function getClass(){
var parameters = location.search.substring(1).split("=");
cls = parameters[1];
$("#clsdtls").html(" <i> Details of Students (With Documents) applied for Class </i>: <b> " + cls + " </b> <br>");
}       
cnt = 0;


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



$(document).ready(function(){

var rootRef = firebase.database().ref('vtoix2026').orderByValue();

rootRef.on("child_added", snap => {

var name = snap.child("name").val();
var dob = snap.child("dob").val();
var dobreg = snap.child("dobreg").val();
var gender  = snap.child("gender").val();
var category = snap.child("category").val();
var religion = snap.child("religion").val();
var mothertongue = snap.child("mothertongue").val();
var nationality = snap.child("nationality").val();
var aadhaar = snap.child("aadhaar").val();
var bloodgroup = snap.child("bloodgroup").val();
var healthid = snap.child("healthid").val();
var identification = snap.child("identification").val();
var acyear = snap.child("acyear").val();
var admno = snap.child("admno").val();
var admdate = snap.child("admdate").val();
var prclass = snap.child("prclass").val();
var prsec = snap.child("prsec").val();
var prroll = snap.child("prroll").val();
var prstream = snap.child("prstream").val();
var prfcomp1 = snap.child("prfcomp1").val();
var prfcomp2 = snap.child("prfcomp2").val();
var prfsub1 = snap.child("prfsub1").val();
var prfsub2 = snap.child("prfsub2").val();
var prfsub3 = snap.child("prfsub3").val();
var prfsub4 = snap.child("prfsub4").val();
var pvschool = snap.child("pvschool").val();
var pvclass = snap.child("pvclass").val();
var pvsec = snap.child("pvsec").val();
var pvroll = snap.child("pvroll").val();
var pvstream = snap.child("pvstream").val();
var pvfcomp1 = snap.child("pvfcomp1").val();
var pvfcomp2 = snap.child("pvfcomp2").val();
var pvsub1 = snap.child("pvfsub1").val();
var pvsub2 = snap.child("pvfsub2").val();
var pvsub3 = snap.child("pvfsub3").val();
var pvsub4 = snap.child("pvfsub4").val();
var medium = snap.child("medium").val();
var vill = snap.child("vill").val();
var medium = snap.child("medium").val();
var habitation = snap.child("habitation").val();
var district = snap.child("district").val();
var block = snap.child("block").val();
var panchayat = snap.child("panchayat").val();
var po = snap.child("po").val();
var ps = snap.child("ps").val();
var pin = snap.child("pin").val();
var phone = snap.child("phone").val();
var email = snap.child("email").val();
var fname = snap.child("fname").val();
var mname = snap.child("mname").val();
var gname = snap.child("gname").val();
var relationship = snap.child("relationship").val();
var aincome = snap.child("aincome").val();
var gqualification = snap.child("gqualification").val();
var gvill = snap.child("gvill").val();
var ghabitation = snap.child("ghabitation").val();
var gdistrict = snap.child("gdistrict").val();
var gblock = snap.child("gblock").val();
var gpanchayat = snap.child("gpanchayat").val();
var gpo = snap.child("gpo").val();
var gps = snap.child("gps").val();
var gpin = snap.child("gpin").val();
var gphone = snap.child("gphone").val();
var gemail = snap.child("gemail").val();
var bplstatus = snap.child("bplstatus").val();
var bplno = snap.child("bplno").val();
var cwsn = snap.child("cwsn").val();
var cwsntyp = snap.child("cwsntyp").val();
var bname= snap.child("bname").val();
var bcode = snap.child("bcode").val();
var bifsc = snap.child("bifsc").val();
var acno = snap.child("acno").val();
var appid = snap.child("appid").val();
var finalSubmit = snap.child("finalSubmit").val();
var updphoto = snap.child("updphoto").val();
var updbproof = snap.child("updbproof").val();
var updslc = snap.child("updslc").val();
var updmark = snap.child("updmark").val();
var updbpass = snap.child("updbpass").val();
var updcaste = snap.child("updcaste").val();
var updaadhaarpic = snap.child("updaadhaarpic").val();

if(finalSubmit == "Done"){
if(prclass == cls || cls == "ALL"){
  $("#table_body").append("<tr><td>" + appid + "</td><td>" + name + "</td><td>" + dob + "</td><td>" + dobreg + "</td><td>" + gender + "</td><td>" + category + "</td><td>" + religion + "</td><td>" + mothertongue + "</td><td>" + nationality + "</td><td>" + aadhaar + "</td><td>" + bloodgroup + "</td><td>" + healthid + "</td><td>" + identification + "</td><td>" + acyear + "</td><td>" + admno + "</td><td>" + admdate + "</td><td>CLASS " + prclass + "</td><td>" + prsec + "</td><td>" + prroll + "</td><td>" + prstream + "</td><td>" + prfcomp1 + "</td><td>" + prfcomp2 + "</td><td>" + prfsub1 + "</td><td>" + prfsub2 + "</td><td>" + prfsub3 + "</td><td>" + prfsub4 + "</td><td>" + pvschool + "</td><td>CLASS " + pvclass + "</td><td>" + pvsec + "</td><td>" + pvroll + "</td><td>" + pvstream + "</td><td>" + pvfcomp1 + "</td><td>" + pvfcomp2 + "</td><td>" + pvsub1 + "</td><td>" + pvsub2 + "</td><td>" + pvsub3 + "</td><td>" + pvsub4 + "</td><td>" + medium + "</td><td>" + vill + "</td><td>" + habitation + "</td><td>" + district + "</td><td>" + block + "</td><td>" + panchayat + "</td><td>" + po + "</td><td>" + ps + "</td><td>" + pin + "</td><td>" + phone + "</td><td>" + email + "</td><td>" + fname + "</td><td>" + mname + "</td><td>" + gname + "</td><td>" + relationship + "</td><td>" + aincome + "</td><td>" + gqualification + "</td><td>" + gvill + "</td><td>" + ghabitation + "</td><td>" + gdistrict + "</td><td>" + gblock + "</td><td>" + gpanchayat + "</td><td>" + gpo + "</td><td>" + gps + "</td><td>" + gpin + "</td><td>" + gphone + "</td><td>" + gemail + "</td><td>" + bplstatus + "</td><td>" + bplno + "</td><td>" + cwsn + "</td><td>" + cwsntyp + "</td><td>" + bname + "</td><td>" + bcode + "</td><td>" + bifsc + "</td><td>" + acno + "</td><td><img src=\"" + updphoto + "\" height=100 width=100></img><br><a href=\"" + updphoto + "\" target=\"_blank\">Download</a></td><td><img src=\"" + updbproof + "\" height=100 width=100></img><br><a href=\"" + updbproof + "\" target=\"_blank\" target=\"_blank\">Download</a></td><td><img src=\"" + updslc + "\" height=100 width=100></img><br><a href=\"" + updslc + "\" target=\"_blank\">Download</a></td><td><img src=\"" + updmark + "\" height=100 width=100></img><br><a href=\"" + updmark + "\" target=\"_blank\">Download</a></td><td><img src=\"" + updbpass + "\" height=100 width=100></img><br><a href=\"" + updbpass + "\" target=\"_blank\">Download</a></td><td><img src=\"" + updcaste + "\" height=100 width=100></img><br><a href=\"" + updcaste + "\" target=\"_blank\">Download</a></td><td><img src=\"" + updaadhaarpic + "\" height=100 width=100></img><br><a href=\"" + updaadhaarpic + "\" download=\"" + appid + ".jpg\" target=\"_blank\">Download</a></td></tr>");
} 
}



});

});


function myFunction() {
  var rowCount = $('#table_body tr').length;
$("#rowscnt").text("Total No. of Students applied for admission is = " + rowCount +"");
}

function getTable(){
    tableToExcel('tab_report', cls);
}

