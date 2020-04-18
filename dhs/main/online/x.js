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

var rootRef = firebase.database().ref('onlineclass');

rootRef.on("child_added", snap => {

var fclass = snap.child("fclass").val();
var tname = snap.child("teacher").val();
var teacher = tname.replace(/aHl99/g,'\'');

var sub = snap.child("sub").val();
var sub = sub.replace(/aHl99/g,'\'');

var tpc = snap.child("topic").val();
var topic = tpc.replace(/aHl99/g,'\'');

var vid = snap.child("vid").val();
var vlnk = snap.child("vlnk").val();
var dtype = snap.child("dtype").val();

if(fclass=="X" || sub.includes("X") || topic.includes("X"))
{
$("#table_body").append("<tr><td>CLASS " + fclass + "</td><td>" + sub + "</td><td>" + topic + "</td><td>" + teacher + "</td><td>" + dtype + "</td><td><input type='button' class='button' value='View / Download' name='line' onclick=\"openNav(\'" + vlnk +"\',\'" + tpc +"\',\'" + tname +"\');\"></td></tr>");
}

});

viewercount();
});


function openNav(lnk,tpc,tname) {
  tpic = tpc.replace(/aHl99/g,'\'');
  trname = tname.replace(/aHl99/g,'\'');
  document.getElementById("myNav").style.height = "100%";
  document.getElementById("myFrame").src = lnk;
  document.getElementById("dtls").innerHTML = tpic;
  document.getElementById("tdtls").innerHTML = "By " + trname;
}


function closeNav() {
  document.getElementById("myNav").style.height = "0%";
  document.getElementById("myFrame").src = "image.jpg";
}


function viewercount(){
  var rootRef = firebase.database().ref('viewer');

rootRef.on("child_added", snap => {

var page = snap.child("page").val();
var cnt = snap.child("cnt").val();
var cnt = cnt + 1;

if(page=="onlineclass")
{
$("#viewer").html("Total Viewer : " + cnt + ".");
}
firebase.database().ref("viewer/online").update({ cnt:cnt});

});
viewerupdate();
}

function viewerupdate(){
  var rootRef = firebase.database().ref('viewer');

rootRef.on("child_changed", snap => {

var page = snap.child("page").val();
var cnt = snap.child("cnt").val();

if(page=="onlineclass")
{
$("#viewer").html("Total Viewer : " + cnt + ".");
}

});
}