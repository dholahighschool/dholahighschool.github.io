var catm = 0;
var cnt = 0;
function fldtls() {
    strm = document.getElementById("strmslct").value;
    srt = document.getElementById("srtslct").value;
    var sel =document.getElementById('srtslct');
    $("#clsdtls").html("Details of Students applied for <b>" + strm + " </b><br>Sorted by <b> " + sel.options[sel.selectedIndex].text + " </b>");
    if (sel.options[sel.selectedIndex] != 2) {
        catm = 0;
    }
    else{catm = 1;}
    cnt = 0;
    $("#table_body").empty();
    
    slctupd(strm,srt);
    }        

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


/*
$(document).ready(*/
    function slctupd(x,y){
    

var rootRef = firebase.database().ref('xi2025/' + x).orderByChild(y);

rootRef.on("child_added", snap => {

var cat = snap.child("cat").val();
var name = snap.child("name").val();
var dob = snap.child("dob").val();
var dobreg = snap.child("dobreg").val();
var gender  = snap.child("gender").val();
var category = snap.child("category").val();
var religion = snap.child("religion").val();
var mothertongue = snap.child("mothertongue").val();
var nationality = snap.child("nationality").val();
var aadhaar = snap.child("aadhaar").val();
var bloodgroup = snap.child("bloodgroup").val();
var healthid = snap.child("healthid").val();
var identification = snap.child("identification").val();
var acyear = snap.child("acyear").val();
var admno = snap.child("admno").val();
var admdate = snap.child("admdate").val();
var pvclass = snap.child("pvclass").val();
var pvaddl = snap.child("pvaddl").val();
var prclass = snap.child("prclass").val();
var pvroll = snap.child("pvroll").val();
var pvschool = snap.child("pvschool").val();
var mpboard = snap.child("mpboard").val();
var mpbengali = snap.child("mpbengali").val();
var mpenglish = snap.child("mpenglish").val();
var mpmath = snap.child("mpmath").val();
var mpphysc = snap.child("mpphysc").val();
var mplfsc = snap.child("mplfsc").val();
var mphist = snap.child("mphist").val();
var mpgeo = snap.child("mpgeo").val();
var mparabic = snap.child("mparabic").val();
var mpislp = snap.child("mpislp").val();
var mpfiqh = snap.child("mpfiqh").val();
var mphadith = snap.child("mphadith").val();
var mptafsir = snap.child("mptafsir").val();
var mpaddl = snap.child("mpaddl").val();
var mptotal = snap.child("mptotal").val();
var mpprc = snap.child("mpprc").val();
var mpperrev = snap.child("mpperrev").val();
var prstream = snap.child("prstream").val();
var prfcomp1 = snap.child("prfcomp1").val();
var prfcomp2 = snap.child("prfcomp2").val();
var prfsub1 = snap.child("prfsub1").val();
var prfsub2 = snap.child("prfsub2").val();
var prfsub3 = snap.child("prfsub3").val();
var prfsub4 = snap.child("prfsub4").val();
var prroll = snap.child("prroll").val();
var medium = snap.child("medium").val();
var vill = snap.child("vill").val();
var medium = snap.child("medium").val();
var habitation = snap.child("habitation").val();
var district = snap.child("district").val();
var block = snap.child("block").val();
var panchayat = snap.child("panchayat").val();
var po = snap.child("po").val();
var ps = snap.child("ps").val();
var pin = snap.child("pin").val();
var phone = snap.child("phone").val();
var email = snap.child("email").val();
var fname = snap.child("fname").val();
var mname = snap.child("mname").val();
var gname = snap.child("gname").val();
var relationship = snap.child("relationship").val();
var aincome = snap.child("aincome").val();
var gqualification = snap.child("gqualification").val();
var gvill = snap.child("gvill").val();
var ghabitation = snap.child("ghabitation").val();
var gdistrict = snap.child("gdistrict").val();
var gblock = snap.child("gblock").val();
var gpanchayat = snap.child("gpanchayat").val();
var gpo = snap.child("gpo").val();
var gps = snap.child("gps").val();
var gpin = snap.child("gpin").val();
var gphone = snap.child("gphone").val();
var gemail = snap.child("gemail").val();
var bplstatus = snap.child("bplstatus").val();
var bplno = snap.child("bplno").val();
var cwsn = snap.child("cwsn").val();
var cwsntyp = snap.child("cwsntyp").val().replace(/-/g, ' ');

var rv = snap.child("bname").val();
var bname = rv.replace(/-/g, ' ');

var bcode = snap.child("bcode").val();
var bifsc = snap.child("bifsc").val();
var acno = snap.child("acno").val();
var appid = snap.child("appid").val();


if (catm == 0) {
$("#table_body").append("<tr><td>" + appid + "</td><td>" + name + "</td><td>" + dob + "</td><td>" + dobreg + "</td><td>" + gender + "</td><td>" + category + "</td><td>" + religion + "</td><td>" + mothertongue + "</td><td>" + nationality + "</td><td>" + aadhaar + "</td><td>" + bloodgroup + "</td><td>" + healthid + "</td><td>" + identification + "</td><td>" + acyear + "</td><td>" + admno + "</td><td>" + admdate + "</td><td>CLASS " + pvclass + "</td><td>" + pvaddl + "</td><td>" + prclass + "</td><td>" + mpboard + "</td><td>" + pvroll + "</td><td>" + pvschool + "</td><td>" + mpbengali + "</td><td>" + mpenglish + "</td><td>" + mpmath + "</td><td>" + mpphysc + "</td><td>" + mplfsc + "</td><td>" + mphist + "</td><td>" + mpgeo + "</td><td>" + mparabic + "</td><td>" + mpislp + "</td><td>" + mpfiqh + "</td><td>" + mphadith + "</td><td>" + mptafsir + "</td><td>" + mpaddl + "</td><td>" + mptotal + "</td><td>" + mpprc + "</td><td>" + prstream + "</td><td>" + prfcomp1 + "</td><td>" + prfcomp2 + "</td><td>" + prfsub1 + "</td><td>" + prfsub2 + "</td><td>" + prfsub3 + "</td><td>" + prfsub4 + "</td><td>" + prroll + "</td><td>" + medium + "</td><td>" + vill + "</td><td>" + habitation + "</td><td>" + district + "</td><td>" + block + "</td><td>" + panchayat + "</td><td>" + po + "</td><td>" + ps + "</td><td>" + pin + "</td><td>" + phone + "</td><td>" + email + "</td><td>" + fname + "</td><td>" + mname + "</td><td>" + gname + "</td><td>" + relationship + "</td><td>" + aincome + "</td><td>" + gqualification + "</td><td>" + gvill + "</td><td>" + ghabitation + "</td><td>" + gdistrict + "</td><td>" + gblock + "</td><td>" + gpanchayat + "</td><td>" + gpo + "</td><td>" + gps + "</td><td>" + gpin + "</td><td>" + gphone + "</td><td>" + gemail + "</td><td>" + bplstatus + "</td><td>" + bplno + "</td><td>" + cwsn + "</td><td>" + cwsntyp + "</td><td>" + bname + "</td><td>" + bcode + "</td><td>" + bifsc + "</td><td>" + acno + "</td></tr>");
}
if(catm == 1){
    if(cat > cnt){
        $("#table_body").append("<tr><th colspan=\"1\" scope=\"colgroup\"> Category : " + cat + "</th></tr>");
        cnt ++;
    }
    $("#table_body").append("<tr><td>" + appid + "</td><td>" + name + "</td><td>" + dob + "</td><td>" + dobreg + "</td><td>" + gender + "</td><td>" + category + "</td><td>" + religion + "</td><td>" + mothertongue + "</td><td>" + nationality + "</td><td>" + aadhaar + "</td><td>" + bloodgroup + "</td><td>" + healthid + "</td><td>" + identification + "</td><td>" + acyear + "</td><td>" + admno + "</td><td>" + admdate + "</td><td>CLASS " + pvclass + "</td><td>" + pvaddl + "</td><td>" + prclass + "</td><td>" + mpboard + "</td><td>" + pvroll + "</td><td>" + pvschool + "</td><td>" + mpbengali + "</td><td>" + mpenglish + "</td><td>" + mpmath + "</td><td>" + mpphysc + "</td><td>" + mplfsc + "</td><td>" + mphist + "</td><td>" + mpgeo + "</td><td>" + mparabic + "</td><td>" + mpislp + "</td><td>" + mpfiqh + "</td><td>" + mphadith + "</td><td>" + mptafsir + "</td><td>" + mpaddl + "</td><td>" + mptotal + "</td><td>" + mpprc + "</td><td>" + prstream + "</td><td>" + prfcomp1 + "</td><td>" + prfcomp2 + "</td><td>" + prfsub1 + "</td><td>" + prfsub2 + "</td><td>" + prfsub3 + "</td><td>" + prfsub4 + "</td><td>" + prroll + "</td><td>" + medium + "</td><td>" + vill + "</td><td>" + habitation + "</td><td>" + district + "</td><td>" + block + "</td><td>" + panchayat + "</td><td>" + po + "</td><td>" + ps + "</td><td>" + pin + "</td><td>" + phone + "</td><td>" + email + "</td><td>" + fname + "</td><td>" + mname + "</td><td>" + gname + "</td><td>" + relationship + "</td><td>" + aincome + "</td><td>" + gqualification + "</td><td>" + gvill + "</td><td>" + ghabitation + "</td><td>" + gdistrict + "</td><td>" + gblock + "</td><td>" + gpanchayat + "</td><td>" + gpo + "</td><td>" + gps + "</td><td>" + gpin + "</td><td>" + gphone + "</td><td>" + gemail + "</td><td>" + bplstatus + "</td><td>" + bplno + "</td><td>" + cwsn + "</td><td>" + cwsntyp + "</td><td>" + bname + "</td><td>" + bcode + "</td><td>" + bifsc + "</td><td>" + acno + "</td></tr>");
}

});

}


function myFunction() {
  var rowCount = $('#table_body tr').length;
$("#rowscnt").text("Total No. of Students applied for admission is = " + rowCount +"");
}
