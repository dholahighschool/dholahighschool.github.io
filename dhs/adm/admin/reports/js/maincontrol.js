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
var aradmst = snap.child("aradmst").val();
var aradmend = snap.child("aradmend").val();

var scm = snap.child("scm").val();
var scst = snap.child("scst").val();
var scend = snap.child("scend").val();
var scadmst = snap.child("scadmst").val();
var scadmend = snap.child("scadmend").val();

var cmm = snap.child("cmm").val();
var cmst = snap.child("cmst").val();
var cmend = snap.child("cmend").val();
var cmadmst = snap.child("cmadmst").val();
var cmadmend = snap.child("cmadmend").val();


$("#arm" + cat).val(arm);
$("#scm" + cat).val(scm);
$("#cmm" + cat).val(cmm);

$("#arsd" + cat).val(new Date(arst).getUTCFullYear() + "-" + arr[(new Date(arst).getUTCMonth()+1)] + "-" + arr[new Date(arst).getUTCDate()]);
$("#scsd" + cat).val(new Date(scst).getUTCFullYear() + "-" + arr[(new Date(scst).getUTCMonth()+1)] + "-" + arr[new Date(scst).getUTCDate()]);
$("#cmsd" + cat).val(new Date(cmst).getUTCFullYear() + "-" + arr[(new Date(cmst).getUTCMonth()+1)] + "-" + arr[new Date(cmst).getUTCDate()]);

$("#arst" + cat).val(arr[new Date(arst).getHours()] + ":" + arr[new Date(arst).getMinutes()]);

$("#scst" + cat).val(arr[new Date(scst).getHours()] + ":" + arr[new Date(scst).getMinutes()]);

$("#cmst" + cat).val(arr[new Date(cmst).getHours()] + ":" + arr[new Date(cmst).getMinutes()]);


$("#ared" + cat).val(new Date(arend).getUTCFullYear() + "-" + arr[(new Date(arend).getUTCMonth()+1)] + "-" + arr[new Date(arend).getUTCDate()]);
$("#sced" + cat).val(new Date(scend).getUTCFullYear() + "-" + arr[(new Date(scend).getUTCMonth()+1)] + "-" + arr[new Date(scend).getUTCDate()]);
$("#cmed" + cat).val(new Date(cmend).getUTCFullYear() + "-" + arr[(new Date(cmend).getUTCMonth()+1)] + "-" + arr[new Date(cmend).getUTCDate()]);

$("#aret" + cat).val(arr[new Date(arend).getHours()] + ":" + arr[new Date(arend).getMinutes()]);

$("#scet" + cat).val(arr[new Date(scend).getHours()] + ":" + arr[new Date(scend).getMinutes()]);

$("#cmet" + cat).val(arr[new Date(cmend).getHours()] + ":" + arr[new Date(cmend).getMinutes()]);




$("#armsd" + cat).val(new Date(aradmst).getUTCFullYear() + "-" + arr[(new Date(aradmst).getUTCMonth()+1)] + "-" + arr[new Date(aradmst).getUTCDate()]);
$("#scmsd" + cat).val(new Date(scadmst).getUTCFullYear() + "-" + arr[(new Date(scadmst).getUTCMonth()+1)] + "-" + arr[new Date(scadmst).getUTCDate()]);
$("#cmmsd" + cat).val(new Date(cmadmst).getUTCFullYear() + "-" + arr[(new Date(cmadmst).getUTCMonth()+1)] + "-" + arr[new Date(cmadmst).getUTCDate()]);

$("#armst" + cat).val(arr[new Date(aradmst).getHours()] + ":" + arr[new Date(aradmst).getMinutes()]);

$("#scmst" + cat).val(arr[new Date(scadmst).getHours()] + ":" + arr[new Date(scadmst).getMinutes()]);

$("#cmmst" + cat).val(arr[new Date(cmadmst).getHours()] + ":" + arr[new Date(cmadmst).getMinutes()]);


$("#armed" + cat).val(new Date(aradmend).getUTCFullYear() + "-" + arr[(new Date(aradmend).getUTCMonth()+1)] + "-" + arr[new Date(aradmend).getUTCDate()]);
$("#scmed" + cat).val(new Date(scadmend).getUTCFullYear() + "-" + arr[(new Date(scadmend).getUTCMonth()+1)] + "-" + arr[new Date(scadmend).getUTCDate()]);
$("#cmmed" + cat).val(new Date(cmadmend).getUTCFullYear() + "-" + arr[(new Date(cmadmend).getUTCMonth()+1)] + "-" + arr[new Date(cmadmend).getUTCDate()]);

$("#armet" + cat).val(arr[new Date(aradmend).getHours()] + ":" + arr[new Date(aradmend).getMinutes()]);

$("#scmet" + cat).val(arr[new Date(scadmend).getHours()] + ":" + arr[new Date(scadmend).getMinutes()]);

$("#cmmet" + cat).val(arr[new Date(cmadmend).getHours()] + ":" + arr[new Date(cmadmend).getMinutes()]);


});
});




function updatedb(x){
	var cat = x.id;
	
	firebase.database().ref("mpadmin/" + cat).update({arm:document.getElementById("arm" + cat).value,arst:new Date(document.getElementById("arsd" + cat).value + " " + document.getElementById("arst" + cat).value).getTime(),arend:new Date(document.getElementById("ared" + cat).value + " " + document.getElementById("aret" + cat).value).getTime(),aradmst:new Date(document.getElementById("armsd" + cat).value + " " + document.getElementById("armst" + cat).value).getTime(),aradmend:new Date(document.getElementById("armed" + cat).value + " " + document.getElementById("armet" + cat).value).getTime(),scm:document.getElementById("scm" + cat).value,scst:new Date(document.getElementById("scsd" + cat).value + " " + document.getElementById("scst" + cat).value).getTime(),scend:new Date(document.getElementById("sced" + cat).value + " " + document.getElementById("scet" + cat).value).getTime(),scadmst:new Date(document.getElementById("scmsd" + cat).value + " " + document.getElementById("scmst" + cat).value).getTime(),scadmend:new Date(document.getElementById("scmed" + cat).value + " " + document.getElementById("scmet" + cat).value).getTime(),cmm:document.getElementById("cmm" + cat).value,cmst:new Date(document.getElementById("cmsd" + cat).value + " " + document.getElementById("cmst" + cat).value).getTime(),cmend:new Date(document.getElementById("cmed" + cat).value + " " + document.getElementById("cmet" + cat).value).getTime(),cmadmst:new Date(document.getElementById("cmmsd" + cat).value + " " + document.getElementById("cmmst" + cat).value).getTime(),cmadmend:new Date(document.getElementById("cmmed" + cat).value + " " + document.getElementById("cmmet" + cat).value).getTime()});
	$("#" + cat +"sh").css("display", "block");
}

function pmcodeupdate() {
	firebase.database().ref("mpadmin/pcode").update({pmcode:document.getElementById("pmcode").value});
	$("#pmcodeupdated").css("display", "block");
}
