var cls = "";
function getClass(){
var parameters = location.search.substring(1).split("=");
cls = parameters[1];
$("#clsdtls").html(" <i> Details of Students (Without Documents) applied for Class </i>: <b> " + cls + " </b> <br>");
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

var rootRef = firebase.database().ref('vtoix2022').orderByValue();

rootRef.on("child_added", snap => {

var name = snap.child("name").val();
var dob = snap.child("dob").val();
var gender  = snap.child("gender").val();
var category = snap.child("category").val();
var prclass = snap.child("prclass").val();

var appid = snap.child("appid").val();

var finalSubmit = snap.child("finalSubmit").val();

var updphoto = snap.child("updphoto").val();
var updbproof = snap.child("updbproof").val();
var updslc = snap.child("updslc").val();
var updmark = snap.child("updmark").val();
var updbpass = snap.child("updbpass").val();
var updcaste = snap.child("updcaste").val();
var updaadhaarpic = snap.child("updaadhaarpic").val();
var regID = snap.child("regID").val();
var meet = snap.child("meet").val();


if(prclass == cls || cls == "ALL"){
  $("#table_body").append("<tr><td>" + appid + "</td><td>" + regID + "</td><td>" + meet + "</td><td>" + name + "</td><td>" + dob + "</td><td>" + gender + "</td><td>" + category + "</td><td>CLASS " + prclass + "</td><td><img src=\"" + updphoto + "\" height=100 width=100></img><br><a href=\"" + updphoto + "\" target=\"_blank\">Download</a></td><td><img src=\"" + updbproof + "\" height=100 width=100></img><br><a href=\"" + updbproof + "\" target=\"_blank\" target=\"_blank\">Download</a></td><td><img src=\"" + updslc + "\" height=100 width=100></img><br><a href=\"" + updslc + "\" target=\"_blank\">Download</a></td><td><img src=\"" + updmark + "\" height=100 width=100></img><br><a href=\"" + updmark + "\" target=\"_blank\">Download</a></td><td><img src=\"" + updbpass + "\" height=100 width=100></img><br><a href=\"" + updbpass + "\" target=\"_blank\">Download</a></td><td><img src=\"" + updcaste + "\" height=100 width=100></img><br><a href=\"" + updcaste + "\" target=\"_blank\">Download</a></td><td><img src=\"" + updaadhaarpic + "\" height=100 width=100></img><br><a href=\"" + updaadhaarpic + "\" download=\"" + appid + ".jpg\" target=\"_blank\">Download</a></td></tr>");
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
