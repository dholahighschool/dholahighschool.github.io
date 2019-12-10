function getusername()
            {
                var username= parseInt(sessionStorage.getItem("username"));
                return username;
            }
            uid = getusername();
            flag=0;
            //pswd = pswd.substring(1,4) + "-" + pswd.substring(5,6);
            //alert(pswd);
            document.title = "Application Form " + uid;
	    //cnt = 0;
            //$("#clsdtls").html("Application ID : " + uid + "<br>");
			
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
            
$(document).ready(function(){

var rootRef = firebase.database().ref('users');

rootRef.on("child_added", snap => {

var name = snap.child("name").val();
var dob = snap.child("dob").val();
var psd = dob.replace(/-/g,'');
var gender  = snap.child("gender").val();
var category = snap.child("category").val();
var mothertongue = snap.child("mothertongue").val();
var nationality = snap.child("nationality").val();
var idmark = snap.child("idmark").val();
var acyear = snap.child("acyear").val();
var prclass = snap.child("prclass").val();
var praddl = snap.child("praddl").val();
var pvclass = snap.child("pvclass").val();
var pvschool = snap.child("pvschool").val();
var pvsec = snap.child("pvsec").val();
var pvroll = snap.child("pvroll").val();
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
var cwsntyp = snap.child("cwsntyp").val().replace(/-/g,' ');

var rv = snap.child("bname").val();
var bname = rv.replace(/-/g, ' ');

var bcode = snap.child("bcode").val();
var bifsc = snap.child("bifsc").val();
var acno = snap.child("acno").val();
var appid = snap.child("appid").val();

var updphoto = snap.child("updphoto").val();
var updsign = snap.child("updsign").val();



if(appid==uid)
{
flag=1;
$('#nappid').html("Application ID: <b>" + appid + "</b>");
$('#nname').html("Name: <b>" + name + "</b>");
$('#ndob').html("Date of Birth: <b>" + dob + "</b>");
$('#ngender').html("Gender: <b>" + gender + "</b>");
$('#ncategory').html("Category: <b>" + category + "</b>");
$('#nmothertongue').html("Mothertongue: " + mothertongue);
$('#nnationality').html("Nationality: " + nationality);
if(idmark!="")
$('#nidmark').html("Identification Mark: " + idmark);
else
$('#nidmark').css('display','none');
$('#nacyear').html("Academic Year: <b>" + acyear + "</b>");
$('#nprclass').html("Applied for Class : <b>" + prclass + "</b>");
$('#npvclass').html("Previously Attended in Class : <b>" + pvclass + "</b>");
$('#npvschool').html("Previously Attended School : <b>" + pvschool + "</b>");
$('#npvsec').html("Section of Previous Class attended: <b>" + pvsec + "</b>");
if(pvroll!="")
$('#npvroll').html("Roll No. of Previous Class attended: <b>" + pvroll + "</b>");
else
$('#npvroll').css('display','none');
if(praddl!="NA")
$('#npraddl').html("Additional Subject: <b>" + praddl + "</b>");
else
$('#npraddl').css('display','none');
$('#nmedium').html("Medium: " + medium);
$('#npin').html("PIN CODE: " + pin);
if(phone!="")
$('#nphone').html("Contact No.: " + phone);
else
$('#nphone').css('display','none');
$('#ngname').html("Guardian's Name: " + gname);

$('#nrelationship').html("Relationship(with Guardian): " + relationship);
$('#ngpin').html("PIN CODE: " + gpin);
$('#ngphone').html("Contact No.: " + gphone);

if(bplstatus!="")
$('#nbplstatus').html("BPL Status: " + bplstatus);
else
$('#nbplstatus').css('display','none');

if(bplno!="")
$('#nbplno').html("BPL NO.: " + nbplno);
else
$('#nbplno').css('display','none');

if(cwsn!="")
$('#ncwsn').html("Children With Special Need: " + cwsn);
else
$('#ncwsn').css('display','none');

if(cwsntyp!="")
$('#ncwsntyp').html("Type of Disability: " + cwsntyp);
else
$('#ncwsntyp').css('display','none');

$("#nupdphoto").attr("src",updphoto);
$("#nupdsign").attr("src",updsign);

$("#loadinglay").css("display","none");

}
});
});
