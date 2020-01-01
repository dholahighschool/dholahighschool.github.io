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


if(slstatus=="YES" && prclass =="VIII")
{
$("#table_body").append("<tr><td>" + appid + "</td><td>" + name + "</td><td>" + prclass + "</td><td>" + gname + "</td></tr>");
}

});

});
