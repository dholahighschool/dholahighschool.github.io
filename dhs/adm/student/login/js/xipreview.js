var ary = localStorage.ud.split("splt");
    console.log(ary[0]);
    console.log(ary[1]);
            //pswd = pswd.substring(1,4) + "-" + pswd.substring(5,6);
            //alert(pswd);
            document.title = "Application Form " + ary[0];
	    //cnt = 0;
            //$("#clsdtls").html("Application ID : " + uid + "<br>");
			
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

var rootRef = firebase.database().ref('xi2020/' + ary[1]);

rootRef.on("child_added", snap => {

var name = snap.child("name").val();
var dob = snap.child("dob").val();
var psd = dob.replace(/-/g,'');
var dobreg = snap.child("dobreg").val();
var gender  = snap.child("gender").val();
var category = snap.child("category").val();
var religion = snap.child("religion").val();
var mothertongue = snap.child("mothertongue").val();
var nationality = snap.child("nationality").val();
var aadhaar = snap.child("aadhaar").val();
var bloodgroup = snap.child("bloodgroup").val();
var healthid = snap.child("healthid").val();
var idmark = snap.child("idmark").val();
var acyear = snap.child("acyear").val();
var admno = snap.child("admno").val();
var admdate = snap.child("admdate").val();
var cat = snap.child("cat").val();
var prclass = snap.child("prclass").val();
var praddl = snap.child("praddl").val();
var prsec = snap.child("prsec").val();
var prroll = snap.child("prroll").val();
var prstream = snap.child("prstream").val();
var prfcomp1 = snap.child("prfcomp1").val();
var prfcomp2 = snap.child("prfcomp2").val();
var prfsub1 = snap.child("prfsub1").val();
var prfsub2 = snap.child("prfsub2").val();
var prfsub3 = snap.child("prfsub3").val();
var prfsub4 = snap.child("prfsub4").val();
var pvclass = snap.child("pvclass").val();
var pvaddl = snap.child("pvaddl").val();
var pvschool = snap.child("pvschool").val();
var pvsec = snap.child("pvsec").val();
var pvroll = snap.child("pvroll").val();
var pvstream = snap.child("pvstream").val();
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
var cwsntyp = snap.child("cwsntyp").val().replace(/-/g,' ');

var rv = snap.child("bname").val();
var bname = rv.replace(/-/g, ' ');

var bcode = snap.child("bcode").val();
var bifsc = snap.child("bifsc").val();
var acno = snap.child("acno").val();
var appid = snap.child("appid").val();

var updphoto = snap.child("updphoto").val();
var updsign = snap.child("updsign").val();

var mpboard = snap.child("mpboard").val();
var mpbengali = snap.child("mpbengali").val();
var mpenglish = snap.child("mpenglish").val();
var mpmath = snap.child("mpmath").val();
var mpphysc = snap.child("mpphysc").val();
var mplfsc = snap.child("mplfsc").val();
var mpgeo = snap.child("mpgeo").val();
var mphist = snap.child("mphist").val();
var mparabic = snap.child("mparabic").val();
var mpfiqh = snap.child("mpfiqh").val();
var mphadith = snap.child("mphadith").val();
var mptafsir = snap.child("mptafsir").val();
var mptotal = snap.child("mptotal").val();
var mpprc = snap.child("mpprc").val();
var mpaddl = snap.child("mpaddl").val();




if(appid==ary[0])
{
flag=1;
$('#nappid').html("Application ID: <b>" + appid + "</b>");
$('#nname').html("Name: <b>" + name + "</b>");
$('#ndob').html("Date of Birth: <b>" + dob + "</b>");
if(dobreg!="")
$('#ndobreg').html("DOB Registration No.: " + dobreg);
else
$('#ndobreg').css('display','none');
$('#ngender').html("Gender: <b>" + gender + "</b>");
$('#ncategory').html("Category: <b>" + category + "</b>");
if(religion!="NA")
$('#nreligion').html("Religion: " + religion);
else
$('#nreligion').css('display','none');
$('#nmothertongue').html("Mothertongue: " + mothertongue);
$('#nnationality').html("Nationality: " + nationality);
if(aadhaar!="")
$('#naadhaar').html("Aadhaar No.: " + aadhaar);
else
$('#naadhaar').css('display','none');
if(bloodgroup!="NA")
$('#nbloodgroup').html("Blood Group: " + bloodgroup);
else
$('#nbloodgroup').css('display','none');
if(healthid!="")
$('#nhealthid').html("Health ID: " + healthid);
else
$('#nhealthid').css('display','none');
if(idmark!="")
$('#nidmark').html("Identification Mark: " + idmark);
else
$('#nidmark').css('display','none');
$('#nacyear').html("Academic Year: <b>" + acyear + "</b>");
$('#npstream').html("Applied for :<b>" + prstream + "</b>");
$('#nadmdate').html("<u><b>" + admdate + "</b></u>");
$('#ncat').html("Admission Category: <b>" + cat + "</b>");
$('#nprclass').html("Applied for Class : <b>" + prclass + "</b>");
$('#nprsec').html("Alloted Section:______");
$('#nprroll').html("Alloted Roll No.:______");
if(pvaddl!="NULL")
$('#npraddl').html("Additional Subject: <b>" + pvaddl + "</b>");
else
$('#npraddl').css('display','none');
if(prstream!="NA")
$('#nprstream').html("Applied for Stream: <b>" + prstream + "</b>");
else
$('#nprstream').css('display','none');
if(prfcomp1!="")
$('#nprfcomp1').html("Applied for Compulsory Subject 1: <b>" + prfcomp1 + "</b>");
else
$('#nprfcomp1').css('display','none');
if(prfcomp2!="")
$('#nprfcomp2').html("Applied for Compulsory Subject 2: <b>" + prfcomp2 + "</b>");
else
$('#nprfcomp2').css('display','none');
if(prfsub1!="")
$('#nprfsub1').html("Choosen Subject 1: <b>" + prfsub1 + "</b>");
else
$('#nprfsub1').css('display','none');
if(prfsub2!="")
$('#nprfsub2').html("Choosen Subject 2: <b>" + prfsub2 + "</b>");
else
$('#nprfsub2').css('display','none');
if(prfsub3!="")
$('#nprfsub3').html("Choosen Subject 3: <b>" + prfsub3 + "</b>");
else
$('#nprfsub3').css('display','none');
if(prfsub4!="")
$('#nprfsub4').html("Choosen Subject 4: <b>" + prfsub4 + "</b>");
else
$('#nprfsub4').css('display','none');
$('#npvclass').html("Previously Attended in Class : <b>" + pvclass + "</b>");
$('#npvschool').html("Previously Attended School : <b>" + pvschool + "</b>");
$('#nmpschool').html("<b>" + pvschool + "</b>");
$('#npvsec').html("Section of Previous Class attended: <b>" + pvsec + "</b>");
if(pvroll!=""){
$('#npvroll').html("MP Roll No.: <b>" + pvroll + "</b>");
$('#nnmproll').html("<b>" + pvroll + "</b>");}
else
$('#npvroll').css('display','none');
if(pvstream!="NA" || pvstream!=null)
$('#npvstream').html("Stream of Previous Class attended: <b>" + pvstream + "</b>");
else
$('#npvstream').css('display','none');
$('#nmedium').html("Medium: " + medium);
$('#nvill').html("Village: " + vill);
$('#nhabitation').html("Habitation / Locality: " + habitation);
$('#ndistrict').html("District: " + district);
$('#nblock').html("Block: " + block);
if(panchayat!="")
$('#npanchayat').html("Panchayat: " + panchayat);
else
$('#npanchayat').css('display','none');
$('#npo').html("Post Office: " + po);
$('#nps').html("Police Station: " + ps);
$('#npin').html("PIN CODE: " + pin);
if(phone!="")
$('#nphone').html("Contact No.: " + phone);
else
$('#nphone').css('display','none');
if(email!="")
$('#nemail').html("Email ID: " + email);
$('#nemail').css('display','none');
if(fname!="")
$('#nfname').html("Father's Name: " + fname);
else
$('#nfname').css('display','none');
if(mname!="")
$('#nmname').html("Mother's Name: " + mname);
else
$('#nmname').css('display','none');
$('#ngname').html("Guardian's Name: " + gname);

$('#nrelationship').html("Relationship(with Guardian): " + relationship);
if(aincome!="")
$('#nainome').html("Annual Family Income: " + aincome);
else
$('#naincome').css('display','none');

if(gqualification!="")
$('#ngqualification').html("Guardian's Qualification: " + gqualification);
else
$('#ngqualification').css('display','none');

$('#ngvill').html("Village: " + gvill);
$('#nghabitation').html("Habitation / Locality: " + ghabitation);
$('#ngdistrict').html("District: " + gdistrict);
$('#ngblock').html("Block: " + gblock);

if(gpanchayat!="")
$('#ngpanchayat').html("Panchayat: " + gpanchayat);
else
$('#ngpanchayat').css('display','none');

$('#ngpo').html("Post Office: " + gpo);
$('#ngps').html("Police Station: " + gps);
$('#ngpin').html("PIN CODE: " + gpin);
$('#ngphone').html("Contact No.: " + gphone);

if(email!="")
$('#ngemail').html("Email ID: " + gemail);
$('#ngemail').css('display','none');

if(bplstatus!="")
$('#nbplstatus').html("BPL Status: " + bplstatus);
else
$('#nbplstatus').css('display','none');

if(bplno!="")
$('#nbplno').html("BPL NO.: " + nbplno);
else
$('#nbplno').css('display','none');

if(cwsn!="")
$('#ncwsn').html("Children With Special Need: " + cwsn);
else
$('#ncwsn').css('display','none');

if(cwsntyp!="")
$('#ncwsntyp').html("Type of Disability: " + cwsntyp);
else
$('#ncwsntyp').css('display','none');

if(bname!="")
$('#nbname').html("Bank Name: " + bname);
else
$('#nbname').css('display','none');

if(bcode!="")
$('#nbcode').html("Bank branch Code: " + bcode);
else
$('#nbcode').css('display','none');

if(bifsc!="")
$('#nbifsc').html("IFSC: " + bifsc);
else
$('#nbifsc').css('display','none');

if(acno!="")
$('#nacno').html("Account No.: " + acno);
else
$('#nacno').css('display','none');


$("#nupdphoto").attr("src",updphoto);
$("#nupdsign").attr("src",updsign);

$('#nmpboard').html("" + mpboard);
$('#nmpbengali').html("" + mpbengali);
$('#nmpenglish').html(mpenglish);
$('#nmpmath').html(mpmath);
$('#nmphist').html(mphist);
$('#nmpgeo').html(mpgeo);
$('#nmpphysc').html(mpphysc);
$('#nmplfsc').html(mplfsc);
$('#nmptafsir').html(mptafsir);
$('#nmparabic').html(mparabic);
$('#nmpfiqh').html(mpfiqh);
$('#nmphadith').html(mphadith);
$('#nnmpaddl').html(mpaddl);
$('#nmptotal').html(mptotal);
$('#nmpprc').html(mpprc);





$("#loadinglay").css("display","none");

}
});
});
