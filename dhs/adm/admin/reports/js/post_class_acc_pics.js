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
	    var extn = ".jpg";
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
var n = updphoto.indexOf("token=");
var pht = updphoto.substring(n + 6, updphoto.length);

var n = updsign.indexOf("token=");
var sgn = updsign.substring(n + 6, updsign.length);

var n = updbpass.indexOf("token=");
var bps = updbpass.substring(n + 6, updbpass.length);

var n = updbproof.indexOf("token=");
var bpr = updbproof.substring(n + 6, updbproof.length);

if(prclass==strm)
{
$("#table_body").append("<tr><td>" + appid + "</td><td>CLASS " + prclass + "</td><td>" + prsec + "</td><td>" + prroll + "</td><td><img src=\"" + updphoto + "\" height=100 width=100></img><br><a href=\"" + updphoto + "\">Download</a></td><td><img src=\"" + updsign + "\"  height=100 width=100></img></td><td><img src=\"" + updbproof + "\"  height=100 width=100></img></td><td><img src=\"" + updslc + "\"  height=100 width=100></img></td><td><img src=\"" + updaadhaarpic + "\"  height=100 width=100></img></td><td><img src=\"" + updbpass + "\"  height=100 width=100></img></td><td><img src=\"" + updcaste + "\"  height=100 width=100></img></td><td><input type='submit' id='last' class='button' value='Download' name='line' onclick=\"addField(\'" + appid +"\',\'" + pht +"\',\'" + sgn +"\',\'" + bps +"\',\'" + bpr +"\');\"></td></tr>");
}

});

});


function myFunction() {
  var rowCount = $('#table_body tr').length;
$("#rowscnt").text("Total No. of Students = " + rowCount +"");
}
function addField(appid,updphoto,updsign,updbpass,updbproof){
  
  
  var files = [];
  files.push("https://firebasestorage.googleapis.com/v0/b/admission-2020.appspot.com/o/images%2F" + appid + "%2Fphoto?alt=media&token=" + updphoto);
  files.push("https://firebasestorage.googleapis.com/v0/b/admission-2020.appspot.com/o/images%2F" + appid + "%2Fsign?alt=media&token=" + updsign);
  files.push("https://firebasestorage.googleapis.com/v0/b/admission-2020.appspot.com/o/images%2F" + appid + "%2Fbpass?alt=media&token=" + updbpass);
  files.push("https://firebasestorage.googleapis.com/v0/b/admission-2020.appspot.com/o/images%2F" + appid + "%2Fbproof?alt=media&token=" + updbproof);
  for(var ii=0; ii<files.length; ii++){
    window.open(files[ii],'_blank');
  }
  /*
  
    //window.open(lnk);
  alert(lnk);

var myWindow = window.open("");
  myWindow.document.write("<title>Dhola High School</title><iframe width='100%' height='100%' src='" + lnk + "' frameborder='0' allowfullscreen></iframe>");

var lnk = "https://firebasestorage.googleapis.com/v0/b/admission-2020.appspot.com/o/images%2F" + appid + "%2Fphoto?alt=media&token=" + updphoto;
*/

}
