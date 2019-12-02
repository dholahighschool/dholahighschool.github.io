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

var rootRef = firebase.database().ref('notices');

rootRef.on("child_added", snap => {

var subject = snap.child("Subject").val();
var date = snap.child("Date").val();
var details = snap.child("Details").val();
var links = snap.child("Links").val();

$("#table_body").append("<tr><td>" + subject + "</td><td>" + date + "</td><td>" + details + "</td><td><a href=\"" + links + "\" target=\"_blank\">Details</a></td></tr>");

});

});

$(window).on("load resize ", function() {
  var scrollWidth = $('.tbl-content').width() - $('.tbl-content table').width();
  $('.tbl-header').css({'padding-right':scrollWidth});
}).resize();
