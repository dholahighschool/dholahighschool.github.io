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

var topics = snap.child("topics").val();
var sdtls = snap.child("sdtls").val();
var ndate = snap.child("ndate").val();
var fdtls = snap.child("fdtls").val();
var noticeupd = snap.child("noticeupd").val();
var ntcupd = "chkdn('" + noticeupd + "')";
  $("#table_body").append("<tr><td><h3>" + topics + "</h3></td><td>" + ndate + "</td><td><b>" + sdtls + "</b></td><td>" + fdtls + "<br><button class=\"button\" onclick=" + ntcupd + "> More Detials if any</button></h5></td></tr>");

});
setTimeout(function(){
        $("#loadinglay").fadeOut(500);
    }, 1000);
});



$(window).on("load resize ", function() {
  var scrollWidth = $('.tbl-content').width() - $('.tbl-content table').width();
  $('.tbl-header').css({'padding-right':scrollWidth});
}).resize();


        function chkdn(parameter) { 
           if(parameter=="#" || parameter=="#"){
            swal("Dhola High School","No more Detials Available","info");
           }
           else{
            window.open(parameter,'_blank');
           }
        } 

