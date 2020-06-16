var arr = ["00","01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31","32","33","34","35","36","37","38","39","40","41","42","43","44","45","46","47","48","49","50","51","52","53","54","55","56","57","58","59","60"];
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

var rootRef = firebase.database().ref('mpadmin');

rootRef.on("child_added", snap => {

var cat = snap.child("cat").val();

var arm = snap.child("arm").val();
var arst = snap.child("arst").val();
var arend = snap.child("arend").val();

var scm = snap.child("scm").val();
var scst = snap.child("scst").val();
var scend = snap.child("scend").val();

var cmm = snap.child("cmm").val();
var cmst = snap.child("cmst").val();
var cmend = snap.child("cmend").val();


$("#arm" + cat).val(arm);
$("#scm" + cat).val(scm);
$("#cmm" + cat).val(cmm);

$("#arsd" + cat).val(new Date(arst).getUTCFullYear() + "-" + arr[(new Date(arst).getUTCMonth()+1)] + "-" + arr[new Date(arst).getUTCDate()]);
$("#scsd" + cat).val(new Date(scst).getUTCFullYear() + "-" + arr[(new Date(scst).getUTCMonth()+1)] + "-" + arr[new Date(scst).getUTCDate()]);
$("#cmsd" + cat).val(new Date(cmst).getUTCFullYear() + "-" + arr[(new Date(cmst).getUTCMonth()+1)] + "-" + arr[new Date(cmst).getUTCDate()]);

$("#arst" + cat).val(arr[new Date(arst).getHours()] + ":" + arr[new Date(arst).getMinutes()]);

$("#scst" + cat).val(arr[new Date(arst).getHours()] + ":" + arr[new Date(arst).getMinutes()]);

$("#cmst" + cat).val(arr[new Date(arst).getHours()] + ":" + arr[new Date(arst).getMinutes()]);


$("#ared" + cat).val(new Date(arend).getUTCFullYear() + "-" + arr[(new Date(arend).getUTCMonth()+1)] + "-" + arr[new Date(arend).getUTCDate()]);
$("#sced" + cat).val(new Date(scend).getUTCFullYear() + "-" + arr[(new Date(scend).getUTCMonth()+1)] + "-" + arr[new Date(scend).getUTCDate()]);
$("#cmed" + cat).val(new Date(cmend).getUTCFullYear() + "-" + arr[(new Date(cmend).getUTCMonth()+1)] + "-" + arr[new Date(cmend).getUTCDate()]);

$("#aret" + cat).val(arr[new Date(arend).getHours()] + ":" + arr[new Date(arend).getMinutes()]);

$("#scet" + cat).val(arr[new Date(arend).getHours()] + ":" + arr[new Date(arend).getMinutes()]);

$("#cmet" + cat).val(arr[new Date(arend).getHours()] + ":" + arr[new Date(arend).getMinutes()]);


});
});




function updatedb(x){
	var cat = x.id;
	
	firebase.database().ref("mpadmin/" + cat).update({arm:document.getElementById("arm" + cat).value,arst:new Date(document.getElementById("arsd" + cat).value + " " + document.getElementById("arst" + cat).value).getTime(),arend:new Date(document.getElementById("ared" + cat).value + " " + document.getElementById("aret" + cat).value).getTime(),scm:document.getElementById("scm" + cat).value,scst:new Date(document.getElementById("scsd" + cat).value + " " + document.getElementById("scst" + cat).value).getTime(),scend:new Date(document.getElementById("sced" + cat).value + " " + document.getElementById("scet" + cat).value).getTime(),cmm:document.getElementById("cmm" + cat).value,cmst:new Date(document.getElementById("cmsd" + cat).value + " " + document.getElementById("cmst" + cat).value).getTime(),cmend:new Date(document.getElementById("cmed" + cat).value + " " + document.getElementById("cmet" + cat).value).getTime()});
    $("#" + cat +"sh").css("display", "block");
}