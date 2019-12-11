function getParams(){
                var idx = document.URL.indexOf('?');
                var params = new Array();
                if (idx != -1) {
                    var pairs = document.URL.substring(idx+1, document.URL.length).split('&');
                    for (var i=0; i<pairs.length; i++){
                        nameVal = pairs[i].split('=');
                        params[nameVal[0]] = nameVal[1];
                    }
                }
                return params;
            }
            params = getParams();
            strm = unescape(params["pclass"]);
            //ccode = unescape(params["ccode"]);
            
	    cnt = 0;
            $("#clsdtls").html("Details of Students Applied & Admitted in Class : <b>" + strm + "</b><br>");

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

var admstatus = snap.child("admstatus").val();
var prclass = snap.child("prclass").val();
var prsec = snap.child("prsec").val();
var prroll = snap.child("prroll").val();
var updphoto = snap.child("updphoto").val();
var updsign = snap.child("updsign").val();
var updbproof = snap.child("updbproof").val();
var updslc = snap.child("updslc").val();
var updaadhaarpic = snap.child("updaadhaarpic").val();
var updbpass = snap.child("updbpass").val();
var updcaste = snap.child("updcaste").val();
var appid = snap.child("appid").val();


if(prclass==strm)
{
$("#table_body").append("<tr><td>" + appid + "</td><td>CLASS " + prclass + "</td><td>" + prsec + "</td><td>" + prroll + "</td><td><img src=\"" + updphoto + "\" download=\"" + appid + ".jpg\" height=100 width=100></img></td><td><img src=\"" + updsign + "\"  height=100 width=100></img></td><td><img src=\"" + updbproof + "\"  height=100 width=100></img></td><td><img src=\"" + updslc + "\"  height=100 width=100></img></td><td><img src=\"" + updaadhaarpic + "\"  height=100 width=100></img></td><td><img src=\"" + updbpass + "\"  height=100 width=100></img></td><td><img src=\"" + updcaste + "\"  height=100 width=100></img></td></tr>");
}

});

});


function myFunction() {
  var rowCount = $('#table_body tr').length;
$("#rowscnt").text("Total No. of Students = " + rowCount +"");
}
