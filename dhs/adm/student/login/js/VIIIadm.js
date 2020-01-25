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

var prclass = snap.child("prclass").val();

var gname = snap.child("gname").val();

var appid = snap.child("appid").val();

var slstatus = snap.child("slstatus").val();

var admstatus = snap.child("admstatus").val();

if(slstatus=="YES" && prclass=="VIII")
{
$("#table_body").append("<tr><td>" + appid + "</td><td>" + name + "</td><td>" + prclass + "</td><td>" + gname + "</td><td><input style=\"width:70px;\"type=\"number\" id=\"" + appid + "rl\"></td><td><select id=\"" + appid + "sc\"><option value=\"A\">A</option><option value=\"B\">B</option><option value=\"C\">C</option><option value=\"D\">D</option></select></td><td><input type='submit' id='last' class='button' value='Accept' name='line' onclick=\"admitted(\'" + appid +"\',\'" + name +"\');\"> &nbsp;<input type='submit' id='last' class='button' value='Reject' name='line' onclick=\"rejected(\'" + appid +"\',\'" + name +"\');\"></td></tr>");
}

});
});


function admitted(appid,name)
{
  var rl = $("#"+appid+"rl").val();
  var sc = $("#"+appid+"sc").val();
  firebase.database().ref("users/" + appid).update({ admstatus: "YES",prroll:rl,prsec:sc});
  $("#"+appid+"rl").prop("disabled", true);
  $("#"+appid+"sc").prop("disabled", true);
  swal("Dhola High School","Admission for Application ID : " + appid + " & Name: " + name + " is successful.","success");
  
}
function rejected(appid,name)
{

  firebase.database().ref("users/" + appid).update({ admstatus: "NO",prroll:"",prsec:"NA"});
  $("#"+appid+"rl").prop("disabled", false);
  $("#"+appid+"sc").prop("disabled", false);
  swal("Dhola High School","Admission for Application ID : " + appid + " & Name: " + name + " is rejected.","error");
}
