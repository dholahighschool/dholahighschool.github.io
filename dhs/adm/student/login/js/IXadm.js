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

if(slstatus=="YES" && prclass=="IX")
{
$("#table_body").append("<tr><td>" + appid + "</td><td>" + name + "</td><td>" + prclass + "</td><td>" + gname + "</td><td><input type='submit' id='last' class='button' value='Accept' name='line' onclick=\"admitted(\'" + appid +"\',\'" + name +"\');\"> &nbsp;<input type='submit' id='last' class='button' value='Reject' name='line' onclick=\"rejected(\'" + appid +"\',\'" + name +"\');\"></td></tr>");
}

});
});


function admitted(appid,name)
{
  

  firebase.database().ref("users/" + appid).update({ admstatus: "YES" });
  swal("Dhola High School","Admission for Application ID : " + appid + " & Name: " + name + " is successful.","success");
}
function rejected(appid,name)
{

  firebase.database().ref("users/" + appid).update({ admstatus: "NO" });
  swal("Dhola High School","Admission for Application ID : " + appid + " & Name: " + name + " is rejected.","error");
}