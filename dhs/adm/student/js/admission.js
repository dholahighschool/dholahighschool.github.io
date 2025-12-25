// Initialize Firebase (ADD YOUR OWN DATA)
var uid = "";
var currentYear="vtoix2026";
function appidset(){
var parameters = location.search.substring(1).split("=");
uid = parameters[1];
flag=0;
document.title = "Dhola High School_Online Admission Portal_" + uid;
document.getElementById("previewForm").src = "login/preview.html?uid=" + uid;
document.getElementById("idset").innerHTML = "Application form regarding Application ID: <b>" + uid + "</b> is successfully submitted. ((অ্যাপ্লিকেশন আইডি : " + uid + " সম্পর্কিত আবেদন ফর্ম সফলভাবে জমা দেওয়া হয়েছে।))";
}
/*
function appidset(){
	var date = new Date();
	var timestamp = date.getTime();
	appid = timestamp;
  document.getElementById("idset").innerHTML = "Your Application ID is: " + appid;
  document.getElementById("appidsetval").value = appid;
}
*/
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



/*-------------------------------------*/
$(document).ready(function(){
let timerInterval
Swal.fire({
  title: 'Please wait...',
  html: '<img src=\'loading.gif\' width=\'100px\' height=\'auto\'>',
  timer: 2000,
  timerProgressBar: true,
  allowOutsideClick:false,
  allowEscapeKey:false,
  showConfirmButton:false
}).then((result) => {
  /* Read more about handling dismissals below */
  if (result.dismiss === Swal.DismissReason.timer && flag==0) {
    document.getElementById("slowInternet").style.display = "block";
  }
})
var rootRef = firebase.database().ref(currentYear);

rootRef.on("child_added", snap => {

var name = snap.child("name").val();
var dob = snap.child("dob").val();
//var psd = dob.replace(/-/g,'');
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
var pvschool = snap.child("pvschool").val();
var pvsec = snap.child("pvsec").val();
var pvroll = snap.child("pvroll").val();
var pvstream = snap.child("pvstream").val();
var medium = snap.child("medium").val();
var vill = snap.child("vill").val();
var medium = snap.child("medium").val();
var habitation = snap.child("habitation").val();
var district = snap.child("district").val();
var municipality = snap.child("municipality").val();
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
var cwsntyp = snap.child("cwsntyp").val();

var bname = snap.child("bname").val();

var bcode = snap.child("bcode").val();
var bifsc = snap.child("bifsc").val();
var acno = snap.child("acno").val();
var appid = snap.child("appid").val();

var updphoto = snap.child("updphoto").val();
var updbproof = snap.child("updbproof").val();
var updbpass = snap.child("updbpass").val();
var updslc = snap.child("updslc").val();
var updaadhaarpic = snap.child("updaadhaarpic").val();
var updcaste = snap.child("updcaste").val();
var updmark = snap.child("updmark").val();

if(appid==uid)
{
flag=1;

document.getElementById("basicInformation").style.display = "block";
document.getElementById("slowInternet").style.display = "none";
$('#appidsetval').val(appid);
$('#name').val(name);
$('#dob').val(dob);
$('#dobreg').val(dobreg);
$('#gender').val(gender);
$('#category').val(category);
$('#religion').val(religion);
$('#mothertongue').val(mothertongue);
$('#nationality').val(nationality);
$('#aadhaar').val(aadhaar);
$('#bloodgroup').val(bloodgroup);
$('#healthid').val(healthid);
$('#idmark').html(idmark);
$('#acyear').val(acyear);
$('#prclass').val(prclass);
$('#praddl').val(praddl);
$('#prstream').val(prstream);
$('#prfcomp1').val(prfcomp1);
$('#prfcomp2').val(prfcomp2);
$('#prfsub1').val(prfsub1);
$('#prfsub2').val(prfsub2);
$('#prfsub3').val(prfsub3);
$('#prfsub4').val(prfsub4);
$('#pvclass').val(pvclass);
$('#pvschool').val(pvschool);
if(pvsec!="NA")
$('#pvsec').val(pvsec);
else
{}
$('#pvroll').val(pvroll);
$('#pvstream').val(pvstream);
$('#medium').val(medium);
$('#vill').val(vill);
$('#habitation').val(habitation);
$('#district').val(district);
$('#municipality').val(municipality);
$('#panchayat').val(panchayat);
$('#po').val(po);
$('#ps').val(ps);
$('#pin').val(pin);
$('#phone').val(phone);
$('#email').val(email);
$('#fname').val(fname);
$('#mname').val(mname);
$('#gname').val(gname);
$('#relationship').val(relationship);
$('#aincome').val(aincome);
$('#gqualification').val(gqualification);
$('#gvill').val(gvill);
$('#ghabitation').val(ghabitation);
$('#gdistrict').val(gdistrict);
$('#gblock').val(gblock);
$('#gpanchayat').val(gpanchayat);
$('#gpo').val(gpo);
$('#gps').val(gps);
$('#gpin').val(gpin);
$('#gphone').val(gphone);
$('#gemail').val(gemail);
$('#bplstatus').val(bplstatus);
if(bplno != ""){
	$('#bplno').val(bplno);
	$('#bplno').css("display", "block");
}
$('#cwsn').val(cwsn);
if(cwsntyp != ""){
	$('#cwsntyp').val(cwsntyp);
	$('#cwsntyp').css("display", "block");
}
$('#bname').val(bname);
$('#bcode').val(bcode);
$('#bifsc').val(bifsc);
$('#acno').val(acno);

/*-------------------*/

$("#photo").attr("src",updphoto);
$("#bproof").attr("src",updbproof);
$("#bpass").attr("src",updbpass);

$('#updphoto').val(updphoto);
$("#updbproof").val(updbproof);
$("#updbpass").val(updbpass);

if(updslc!=""){
$("#slc").attr("src",updslc);
$('#updslc').val(updslc);}
else{}

if(updaadhaarpic!=""){
$("#aadhaarpic").attr("src",updaadhaarpic);
$('#updaadhaarpic').val(updaadhaarpic);}
else{}

if(updcaste!=""){
$("#caste").attr("src",updcaste);
$('#updcaste').val(updcaste);}
else{}

if(updmark!=""){
$("#mark").attr("src",updmark);
$('#updmark').val(updmark);}
else{}

/*-------------------*/
}
});
});


/*--------------------------------------*/


// Listen for form submit
document.getElementById('vtoixForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
var	name = getInputVal('name');
var	dob = getInputVal('dob');
var	dobreg = getInputVal('dobreg');
var	gender = getInputVal('gender');
var	category = getInputVal('category');
var	religion = getInputVal('religion');
var	mothertongue = getInputVal('mothertongue');
var	nationality = getInputVal('nationality');
var	aadhaar = getInputVal('aadhaar');
var	bloodgroup = getInputVal('bloodgroup');
var	healthid = getInputVal('healthid');
var	idmark = getInputVal('idmark');
var	acyear = getInputVal('acyear');
var	admno = getInputVal('admno');
var admstatus = getInputVal('admstatus');
var admdate = getInputVal('admdate');
var	prclass = getInputVal('prclass');
var pvschool = getInputVal('pvschool');
var	prsec = getInputVal('prsec');
var	prroll = getInputVal('prroll');
var praddl = getInputVal('praddl');
var	prstream = getInputVal('prstream');
var	prfcomp1 = getInputVal('prfcomp1');
var	prfcomp2 = getInputVal('prfcomp2');
var	prfsub1 = getInputVal('prfsub1');
var	prfsub2 = getInputVal('prfsub2');
var	prfsub3 = getInputVal('prfsub3');
var	prfsub4 = getInputVal('prfsub4');
var	pvclass = getInputVal('pvclass');
var	pvsec = getInputVal('pvsec');
var	pvroll = getInputVal('pvroll');
var	pvstream = getInputVal('pvstream');
var pvaddl = getInputVal('pvaddl');
var	medium = getInputVal('medium');
var	vill = getInputVal('vill');
var	habitation = getInputVal('habitation');
var	district = getInputVal('district');
var	municipality = getInputVal('municipality');
var	panchayat = getInputVal('panchayat');
var	po = getInputVal('po');
var	ps = getInputVal('ps');
var	pin = getInputVal('pin');
var	phone = getInputVal('phone');
var	email = getInputVal('email');
var	fname = getInputVal('fname');
var	mname = getInputVal('mname');
var	gname = getInputVal('gname');
var	relationship = getInputVal('relationship');
var	aincome = getInputVal('aincome');
var	gqualification = getInputVal('gqualification');
var	gvill = getInputVal('gvill');
var	ghabitation = getInputVal('ghabitation');
var	gdistrict = getInputVal('gdistrict');
var	gblock = getInputVal('gblock');
var	gpanchayat = getInputVal('gpanchayat');
var	gpo = getInputVal('gpo');
var	gps = getInputVal('gps');
var	gpin = getInputVal('gpin');
var	gphone = getInputVal('gphone');
var	gemail = getInputVal('gemail');
var	bplstatus = getInputVal('bplstatus');
var	bplno = getInputVal('bplno');
var	cwsn = getInputVal('cwsn');
var	cwsntyp = getInputVal('cwsntyp');
var	bname = getInputVal('bname');
var	bcode = getInputVal('bcode');
var	bifsc = getInputVal('bifsc');
var	acno = getInputVal('acno');
var appid = getInputVal('appidsetval');
var updphoto = getInputVal('updphoto');
var updmark = getInputVal('updmark');
var updbproof = getInputVal('updbproof');
var updslc = getInputVal('updslc');
var updaadhaarpic = getInputVal('updaadhaarpic');
var updbpass = getInputVal('updbpass');
var updcaste = getInputVal('updcaste');

 // Save message
  saveMessage(name,dob,dobreg,gender,category,religion,mothertongue,nationality,aadhaar,bloodgroup,healthid,idmark,acyear,admno,admstatus,admdate,prclass,pvschool,prsec,prroll,praddl,prstream,prfcomp1,prfcomp2,prfsub1,prfsub2,prfsub3,prfsub4,pvclass,pvsec,pvroll,pvstream,pvaddl,medium,vill,habitation,district,municipality,panchayat,po,ps,pin,phone,email,fname,mname,gname,relationship,aincome,gqualification,gvill,ghabitation,gdistrict,gblock,gpanchayat,gpo,gps,gpin,gphone,gemail,bplstatus,bplno,cwsn,cwsntyp,bname,bcode,bifsc,acno,appid,updphoto,updmark,updbproof,updslc,updaadhaarpic,updbpass,updcaste);


  document.getElementById("vtoixForm").style.display = 'none';
  document.getElementById("instructions").style.display = 'none';
  document.getElementById("thankyou").style.display = 'block';

  document.getElementById('vtoixForm').reset();
}

function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase   
function saveMessage(name,dob,dobreg,gender,category,religion,mothertongue,nationality,aadhaar,bloodgroup,healthid,idmark,acyear,admno,admstatus,admdate,prclass,pvschool,prsec,prroll,praddl,prstream,prfcomp1,prfcomp2,prfsub1,prfsub2,prfsub3,prfsub4,pvclass,pvsec,pvroll,pvstream,pvaddl,medium,vill,habitation,district,municipality,panchayat,po,ps,pin,phone,email,fname,mname,gname,relationship,aincome,gqualification,gvill,ghabitation,gdistrict,gblock,gpanchayat,gpo,gps,gpin,gphone,gemail,bplstatus,bplno,cwsn,cwsntyp,bname,bcode,bifsc,acno,appid,updphoto,updmark,updbproof,updslc,updaadhaarpic,updbpass,updcaste){
  /*
  var newMessageRef = messagesRef.push();
  MessageRef.set({
  */
  firebase.database().ref(currentYear + '/' + appid).update({
appid:appid,
name:name,
dob:dob,
dobreg:dobreg,
gender:gender,
category:category,
religion:religion,
mothertongue:mothertongue,
nationality:nationality,
aadhaar:aadhaar,
bloodgroup:bloodgroup,
healthid:healthid,
idmark:idmark,
acyear:acyear,
admno:admno,
admstatus:admstatus,
admdate:admdate,
prclass:prclass,
pvschool:pvschool,
prsec:prsec,
prroll:prroll,
praddl:praddl,
prstream:prstream,
prfcomp1:prfcomp1,
prfcomp2:prfcomp2,
prfsub1:prfsub1,
prfsub2:prfsub2,
prfsub3:prfsub3,
prfsub4:prfsub4,
pvclass:pvclass,
pvsec:pvsec,
pvroll:pvroll,
pvstream:pvstream,
pvaddl:pvaddl,
medium:medium,
vill:vill,
habitation:habitation,
district:district,
municipality:municipality,
panchayat:panchayat,
po:po,
ps:ps,
pin:pin,
phone:phone,
email:email,
fname:fname,
mname:mname,
gname:gname,
relationship:relationship,
aincome:aincome,
gqualification:gqualification,
gvill:gvill,
ghabitation:ghabitation,
gdistrict:gdistrict,
gblock:gblock,
gpanchayat:gpanchayat,
gpo:gpo,
gps:gps,
gpin:gpin,
gphone:gphone,
gemail:gemail,
bplstatus:bplstatus,
bplno:bplno,
cwsn:cwsn,
cwsntyp:cwsntyp,
bname:bname,
bcode:bcode,
bifsc:bifsc,
acno:acno,
updphoto:updphoto,
updmark:updmark,
updbproof:updbproof,
updslc:updslc,
updaadhaarpic:updaadhaarpic,
updbpass:updbpass,
updcaste:updcaste,
finalSubmit:"Done"
  });
}

	var fbBucketName1 = currentYear;

		var uploader1 = document.getElementById('uploader1');
		var fileButton1 = document.getElementById('fileButton1');
		fileButton1.addEventListener('change', function (e1) {

			console.log('file upload event', e1);

			var FileSize = e1.target.files[0].size / 1024 / 1024; // in MB
        	if (FileSize > 0.0195) 
        	{
            	//swal('Oops..','File size exceeds 20 KB \n Please Choose a new Photo.','error');
				Swal.fire({title: 'Oops..',text: 'File size exceeds 20 KB \n Please Choose a new Photo.',icon: 'error'});
            	document.getElementById('fileButton1').value = "";
        	} 
        	else 
        	{
        		var file1 = e1.target.files[0];
        	}
        	var strt = (file1.type).substr(file1.type.length - (file1.type.length - (file1.type).lastIndexOf("/") -1)) ;
	
			var storageRef1 = firebase.storage().ref(`${fbBucketName1}/${uid}/${uid}photo.${strt}`);

			var uploadTask1 = storageRef1.put(file1);

			uploadTask1.on(firebase.storage.TaskEvent.STATE_CHANGED, 
				function (snapshot) {
					var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
					uploader1.value = progress;
					console.log('Upload is ' + progress + '% done');
					switch (snapshot.state) {
						case firebase.storage.TaskState.PAUSED: 
							console.log('Upload is paused');
							break;
						case firebase.storage.TaskState.RUNNING: 
							console.log('Upload is running');
							break;
					}
				}, function (error) {

						switch (error.code) {
						case 'storage/unauthorized':
							break;

						case 'storage/canceled':
							break;

						case 'storage/unknown':
							break;
					}
				}, function () {
					var downloadURL1 = uploadTask1.snapshot.downloadURL;
					console.log('downloadURL1', downloadURL1);
					var link1 = document.getElementById("photo");
					link1.setAttribute("src", downloadURL1);
					document.getElementById('updphoto').value = downloadURL1;
				});

		});


// var fbBucketName2 = currentYear;

// 		var uploader2 = document.getElementById('uploader2');
// 		var fileButton2 = document.getElementById('fileButton2');
// 		fileButton2.addEventListener('change', function (e2) {

// 			console.log('file upload event', e2);

// 			var FileSize = e2.target.files[0].size / 1024 / 1024; // in MB
//         	if (FileSize > 0.0195) 
//         	{
//             	swal('Oops..','File size exceeds 20 KB \n Please Choose a new Signature.','error');
//             	document.getElementById('fileButton2').value = "";
//         	} 
//         	else 
//         	{
//         		var file2 = e2.target.files[0];
//         	}

// 			var storageRef2 = firebase.storage().ref(`${fbBucketName2}/${uid}/sign`);

// 			var uploadTask2 = storageRef2.put(file2);

// 			uploadTask2.on(firebase.storage.TaskEvent.STATE_CHANGED, 
// 				function (snapshot) {
// 					var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
// 					uploader2.value = progress;
// 					console.log('Upload is ' + progress + '% done');
// 					switch (snapshot.state) {
// 						case firebase.storage.TaskState.PAUSED: 
// 							console.log('Upload is paused');
// 							break;
// 						case firebase.storage.TaskState.RUNNING: 
// 							console.log('Upload is running');
// 							break;
// 					}
// 				}, function (error) {

// 						switch (error.code) {
// 						case 'storage/unauthorized':
// 							break;

// 						case 'storage/canceled':
// 							break;

// 						case 'storage/unknown':
// 							break;
// 					}
// 				}, function () {
// 					var downloadURL2 = uploadTask2.snapshot.downloadURL;
// 					console.log('downloadURL2', downloadURL2);
// 					var link2 = document.getElementById("signature");
// 					link2.setAttribute("src", downloadURL2);
// 					document.getElementById('updsign').value = downloadURL2;
// 				});

// 		});


var fbBucketName3 = currentYear;

		var uploader3 = document.getElementById('uploader3');
		var fileButton3 = document.getElementById('fileButton3');
		fileButton3.addEventListener('change', function (e3) {

			console.log('file upload event', e3);

			var FileSize = e3.target.files[0].size / 1024 / 1024; // in MB
        	if (FileSize > 0.244) 
        	{
            	//swal('Oops..','File size exceeds 250 KB \n Please Choose a new Picture.','error');
				Swal.fire({title: 'Oops..',text: 'File size exceeds 250 KB \n Please Choose a new Picture.',icon: 'error'});
            	document.getElementById('fileButton3').value = "";
        	} 
        	else 
        	{
        		var file3 = e3.target.files[0];
        	}
        	var strt = (file3.type).substr(file3.type.length - (file3.type.length - (file3.type).lastIndexOf("/") -1)) ;
			var storageRef3 = firebase.storage().ref(`${fbBucketName3}/${uid}/${uid}bproof.${strt}`);

			var uploadTask3 = storageRef3.put(file3);

			uploadTask3.on(firebase.storage.TaskEvent.STATE_CHANGED, 
				function (snapshot) {
					var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
					uploader3.value = progress;
					console.log('Upload is ' + progress + '% done');
					switch (snapshot.state) {
						case firebase.storage.TaskState.PAUSED: 
							console.log('Upload is paused');
							break;
						case firebase.storage.TaskState.RUNNING: 
							console.log('Upload is running');
							break;
					}
				}, function (error) {

						switch (error.code) {
						case 'storage/unauthorized':
							break;

						case 'storage/canceled':
							break;

						case 'storage/unknown':
							break;
					}
				}, function () {
					var downloadURL3 = uploadTask3.snapshot.downloadURL;
					console.log('downloadURL3', downloadURL3);
					var link3 = document.getElementById("bproof");
					link3.setAttribute("src", downloadURL3);
					document.getElementById('updbproof').value = downloadURL3;
				});

		});


var fbBucketName4 = currentYear;

		var uploader4 = document.getElementById('uploader4');
		var fileButton4 = document.getElementById('fileButton4');
		fileButton4.addEventListener('change', function (e4) {

			console.log('file upload event', e4);

			var FileSize = e4.target.files[0].size / 1024 / 1024; // in MB
        	if (FileSize > 0.244) 
        	{
            	//swal('Oops..','File size exceeds 250 KB \n Please Choose a new Picture.','error');
				Swal.fire({title: 'Oops..',text: 'File size exceeds 250 KB \n Please Choose a new Picture.',icon: 'error'});
            	document.getElementById('fileButton4').value = "";
        	} 
        	else 
        	{
        		var file4 = e4.target.files[0];
        	}

        	var strt = (file4.type).substr(file4.type.length - (file4.type.length - (file4.type).lastIndexOf("/") -1)) ;
	
			var storageRef4 = firebase.storage().ref(`${fbBucketName4}/${uid}/${uid}slc.${strt}`);

			var uploadTask4 = storageRef4.put(file4);

			uploadTask4.on(firebase.storage.TaskEvent.STATE_CHANGED, 
				function (snapshot) {
					var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
					uploader4.value = progress;
					console.log('Upload is ' + progress + '% done');
					switch (snapshot.state) {
						case firebase.storage.TaskState.PAUSED: 
							console.log('Upload is paused');
							break;
						case firebase.storage.TaskState.RUNNING: 
							console.log('Upload is running');
							break;
					}
				}, function (error) {

						switch (error.code) {
						case 'storage/unauthorized':
							break;

						case 'storage/canceled':
							break;

						case 'storage/unknown':
							break;
					}
				}, function () {
					var downloadURL4 = uploadTask4.snapshot.downloadURL;
					console.log('downloadURL4', downloadURL4);
					var link4 = document.getElementById("slc");
					link4.setAttribute("src", downloadURL4);
					document.getElementById('updslc').value = downloadURL4;
				});

		});

var fbBucketName5 = currentYear;

		var uploader5 = document.getElementById('uploader5');
		var fileButton5 = document.getElementById('fileButton5');
		fileButton5.addEventListener('change', function (e5) {

			console.log('file upload event', e5);

			var FileSize = e5.target.files[0].size / 1024 / 1024; // in MB
        	if (FileSize > 0.244) 
        	{
            	//swal('Oops..','File size exceeds 250 KB \n Please Choose a new Picture.','error');
				Swal.fire({title: 'Oops..',text: 'File size exceeds 250 KB \n Please Choose a new Picture.',icon: 'error'});
            	document.getElementById('fileButton5').value = "";
        	} 
        	else 
        	{
        		var file5 = e5.target.files[0];
        	}
			var strt = (file5.type).substr(file5.type.length - (file5.type.length - (file5.type).lastIndexOf("/") -1)) ;
			var storageRef5 = firebase.storage().ref(`${fbBucketName5}/${uid}/${uid}aadhaarpic.${strt}`);

			var uploadTask5 = storageRef5.put(file5);

			uploadTask5.on(firebase.storage.TaskEvent.STATE_CHANGED, 
				function (snapshot) {
					var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
					uploader5.value = progress;
					console.log('Upload is ' + progress + '% done');
					switch (snapshot.state) {
						case firebase.storage.TaskState.PAUSED: 
							console.log('Upload is paused');
							break;
						case firebase.storage.TaskState.RUNNING: 
							console.log('Upload is running');
							break;
					}
				}, function (error) {

						switch (error.code) {
						case 'storage/unauthorized':
							break;

						case 'storage/canceled':
							break;

						case 'storage/unknown':
							break;
					}
				}, function () {
					var downloadURL5 = uploadTask5.snapshot.downloadURL;
					console.log('downloadURL5', downloadURL5);
					var link5 = document.getElementById("aadhaarpic");
					link5.setAttribute("src", downloadURL5);
					document.getElementById('updaadhaarpic').value = downloadURL5;
				});

		});


var fbBucketName6 = currentYear;

		var uploader6 = document.getElementById('uploader6');
		var fileButton6 = document.getElementById('fileButton6');
		fileButton6.addEventListener('change', function (e6) {

			console.log('file upload event', e6);

			var FileSize = e6.target.files[0].size / 1024 / 1024; // in MB
        	if (FileSize > 0.244) 
        	{
            	//swal('Oops..','File size exceeds 250 KB \n Please Choose a new Picture.','error');
				Swal.fire({title: 'Oops..',text: 'File size exceeds 250 KB \n Please Choose a new Picture.',icon: 'error'});
            	document.getElementById('fileButton6').value = "";
        	} 
        	else 
        	{
        		var file6 = e6.target.files[0];
        	}
			var strt = (file6.type).substr(file6.type.length - (file6.type.length - (file6.type).lastIndexOf("/") -1)) ;
			var storageRef6 = firebase.storage().ref(`${fbBucketName6}/${uid}/${uid}bpass.${strt}`);

			var uploadTask6 = storageRef6.put(file6);

			uploadTask6.on(firebase.storage.TaskEvent.STATE_CHANGED, 
				function (snapshot) {
					var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
					uploader6.value = progress;
					console.log('Upload is ' + progress + '% done');
					switch (snapshot.state) {
						case firebase.storage.TaskState.PAUSED: 
							console.log('Upload is paused');
							break;
						case firebase.storage.TaskState.RUNNING: 
							console.log('Upload is running');
							break;
					}
				}, function (error) {

						switch (error.code) {
						case 'storage/unauthorized':
							break;

						case 'storage/canceled':
							break;

						case 'storage/unknown':
							break;
					}
				}, function () {
					var downloadURL6 = uploadTask6.snapshot.downloadURL;
					console.log('downloadURL6', downloadURL6);
					var link6 = document.getElementById("bpass");
					link6.setAttribute("src", downloadURL6);
					document.getElementById('updbpass').value = downloadURL6;
				});

		});

var fbBucketName7 = currentYear;

		var uploader7 = document.getElementById('uploader7');
		var fileButton7 = document.getElementById('fileButton7');
		fileButton7.addEventListener('change', function (e7) {

			console.log('file upload event', e7);

			var FileSize = e7.target.files[0].size / 1024 / 1024; // in MB
        	if (FileSize > 0.244) 
        	{
            	//swal('Oops..','File size exceeds 250 KB \n Please Choose a new Picture.','error');
				Swal.fire({title: 'Oops..',text: 'File size exceeds 250 KB \n Please Choose a new Picture.',icon: 'error'});
            	document.getElementById('fileButton7').value = "";
        	} 
        	else 
        	{
        		var file7 = e7.target.files[0];
        	}
			var strt = (file7.type).substr(file7.type.length - (file7.type.length - (file7.type).lastIndexOf("/") -1)) ;
			var storageRef7 = firebase.storage().ref(`${fbBucketName7}/${uid}/${uid}caste.${strt}`);

			var uploadTask7 = storageRef7.put(file7);

			uploadTask7.on(firebase.storage.TaskEvent.STATE_CHANGED, 
				function (snapshot) {
					var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
					uploader7.value = progress;
					console.log('Upload is ' + progress + '% done');
					switch (snapshot.state) {
						case firebase.storage.TaskState.PAUSED: 
							console.log('Upload is paused');
							break;
						case firebase.storage.TaskState.RUNNING: 
							console.log('Upload is running');
							break;
					}
				}, function (error) {

						switch (error.code) {
						case 'storage/unauthorized':
							break;

						case 'storage/canceled':
							break;

						case 'storage/unknown':
							break;
					}
				}, function () {
					var downloadURL7 = uploadTask7.snapshot.downloadURL;
					console.log('downloadURL7', downloadURL7);
					var link7 = document.getElementById("caste");
					link7.setAttribute("src", downloadURL7);
					document.getElementById('updcaste').value = downloadURL7;
				});

		});

var fbBucketName8 = currentYear;

		var uploader8 = document.getElementById('uploader8');
		var fileButton8 = document.getElementById('fileButton8');
		fileButton8.addEventListener('change', function (e8) {

			console.log('file upload event', e8);

			var FileSize = e8.target.files[0].size / 1024 / 1024; // in MB
        	if (FileSize > 0.244) 
        	{
            	//swal('Oops..','File size exceeds 250 KB \n Please Choose a new Picture.','error');
				Swal.fire({title: 'Oops..',text: 'File size exceeds 250 KB \n Please Choose a new Picture.',icon: 'error'});
            	document.getElementById('fileButton8').value = "";
        	} 
        	else 
        	{
        		var file8 = e8.target.files[0];
        	}
			var strt = (file8.type).substr(file8.type.length - (file8.type.length - (file8.type).lastIndexOf("/") -1)) ;
			var storageRef8 = firebase.storage().ref(`${fbBucketName8}/${uid}/${uid}marksheet.${strt}`);

			var uploadTask8 = storageRef8.put(file8);

			uploadTask8.on(firebase.storage.TaskEvent.STATE_CHANGED, 
				function (snapshot) {
					var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
					uploader8.value = progress;
					console.log('Upload is ' + progress + '% done');
					switch (snapshot.state) {
						case firebase.storage.TaskState.PAUSED: 
							console.log('Upload is paused');
							break;
						case firebase.storage.TaskState.RUNNING: 
							console.log('Upload is running');
							break;
					}
				}, function (error) {

						switch (error.code) {
						case 'storage/unauthorized':
							break;

						case 'storage/canceled':
							break;

						case 'storage/unknown':
							break;
					}
				}, function () {
					var downloadURL8 = uploadTask8.snapshot.downloadURL;
					console.log('downloadURL8', downloadURL8);
					var link8 = document.getElementById("mark");
					link8.setAttribute("src", downloadURL8);
					document.getElementById('updmark').value = downloadURL8;
				});

		});


/*
function chkn() {
		//var userID = document.getElementById("finalusername").value;
		if (window.sessionStorage) 
				{
					sessionStorage.setItem("username", appid);
					
				}
}
*/
function pinlength(){
 		var plngt=document.getElementById("pin").value.length;
 		if(plngt!=6)
 		{

 			Swal.fire("Oops..","PIN Code must contain 6 digits. Please re-type.","error");
 			document.getElementById("pin").value ="";
 			document.getElementById("pin").focus();
 		}
 		
 	}
 	function gpinlength(){
 		var gplngt=document.getElementById("gpin").value.length;
 		if(gplngt!=6)
 		{
 			Swal.fire("Oops..","PIN Code must contain 6 digits. Please re-type.","error");
 			document.getElementById("gpin").value ="";
 			document.getElementById("gpin").focus();
 		}
 		
 	}
 	function aadhaarlength(){
 		var alngt=document.getElementById("aadhaar").value.length;
 		if(alngt!=12)
 		{
 			Swal.fire("Oops..","Aadhaar no. must contain 12 digits. Please re-type.","error");
 			document.getElementById("aadhaar").value ="";
 			document.getElementById("aadhaar").focus();
 		}
 		
 	}
 	function contactlength(){
 		var clngt=document.getElementById("phone").value.length;
 		if(clngt!=10)
 		{
 			Swal.fire("Oops..","Contact no. must contain 10 digits. Please re-type.","error");
 			document.getElementById("phone").value ="";
 			document.getElementById("phone").focus();
 		}
 		
 	}
 	function gcontactlength(){
 		var gclngt=document.getElementById("gphone").value.length;
 		if(gclngt!=10)
 		{
 			Swal.fire("Oops..","Contact no. must be 10 digits. Please re-type.","error");
 			document.getElementById("gphone").value ="";
 			document.getElementById("gphone").focus();
 		}
 		
 	}


function toggleCheckbox(element)
 {	
 if(document.getElementById("name").value==="" || document.getElementById("name").value==="NA"){
   element.checked = !element.checked;
   Swal.fire("Oops..","Enter your Full Name","error");
   hideAllSection();
   document.getElementById('basicInformation').style.display = "block";
   document.getElementById("name").focus();}
 	else if(document.getElementById("dob").value==="" || document.getElementById("dob").value==="NA"){
   element.checked = !element.checked;
   Swal.fire("Oops..","Enter your Date of Birth","error");
   hideAllSection();
   document.getElementById('basicInformation').style.display = "block";
   document.getElementById("dob").focus();}
   	else if(document.getElementById("gender").value==="" || document.getElementById("gender").value==="NA"){
   element.checked = !element.checked;
   Swal.fire("Oops..","Choose your Gender","error");
   hideAllSection();
   document.getElementById('basicInformation').style.display = "block";
   document.getElementById("gender").focus();}
   	else if(document.getElementById("category").value==="" || document.getElementById("category").value==="NA"){
   element.checked = !element.checked;
   Swal.fire("Oops..","Choose your Social Category","error");
   hideAllSection();
   document.getElementById('basicInformation').style.display = "block";
   document.getElementById("category").focus();}
	else if(document.getElementById("mothertongue").value==="" || document.getElementById("mothertongue").value==="NA"){
   element.checked = !element.checked;
   Swal.fire("Oops..","Choose your Mother Tongue","error");
   hideAllSection();
   document.getElementById('basicInformation').style.display = "block";
   document.getElementById("mothertongue").focus();}
	else if(document.getElementById("nationality").value==="" || document.getElementById("nationality").value==="NA"){
   element.checked = !element.checked;
   Swal.fire("Oops..","Choose your Nationality","error");
   hideAllSection();
   document.getElementById('basicInformation').style.display = "block";
   document.getElementById("nationality").focus();}
   
   
	else if(document.getElementById("prclass").value==="" || document.getElementById("prclass").value==="NA"){
   element.checked = !element.checked;
   Swal.fire("Oops..","Choose your Class to Apply for","error");
   hideAllSection();
   document.getElementById('educationalInformation').style.display = "block";
   document.getElementById("prclass").focus();}
	 else if(document.getElementById("pvschool").value==="" || document.getElementById("pvschool").value==="NA"){
   element.checked = !element.checked;
   Swal.fire("Oops..","Enter name of your Previous school attended.","error");
   hideAllSection();
   document.getElementById('educationalInformation').style.display = "block";
   document.getElementById("pvschool").focus();}
	else if(document.getElementById("pvclass").value==="" || document.getElementById("pvclass").value==="NA"){
   element.checked = !element.checked;
   Swal.fire("Oops..","Choose your Previous Class attended","error");
   hideAllSection();
   document.getElementById('educationalInformation').style.display = "block";
   document.getElementById("pvclass").focus();}
	else if(document.getElementById("pvsec").value===""){
   element.checked = !element.checked;
   Swal.fire("Oops..","Choose your Section of previous class attended","error");
   hideAllSection();
   document.getElementById('educationalInformation').style.display = "block";
   document.getElementById("pvsec").focus();}
	else if(document.getElementById("medium").value==="" || document.getElementById("medium").value==="NA"){
   element.checked = !element.checked;
   Swal.fire("Oops..","Choose your Medium of Study","error");
   hideAllSection();
   document.getElementById('educationalInformation').style.display = "block";
   document.getElementById("medium").focus();}


   	else if(document.getElementById("habitation").value==="" || document.getElementById("habitation").value==="NA"){
   element.checked = !element.checked;
   Swal.fire("Oops..","Enter your Habitation or Locality","error");
   hideAllSection();
   document.getElementById('contactInformation').style.display = "block";
   document.getElementById("habitation").focus();}
   	else if(document.getElementById("district").value==="" || document.getElementById("district").value==="NA"){
   element.checked = !element.checked;
   Swal.fire("Oops..","Choose your District","error");
   hideAllSection();
   document.getElementById('contactInformation').style.display = "block";
   document.getElementById("district").focus();}
   	else if(document.getElementById("municipality").value==="" || document.getElementById("municipality").value==="NA"){
   element.checked = !element.checked;
   Swal.fire("Oops..","Enter your Block or Municipality name","error");
   hideAllSection();
   document.getElementById('contactInformation').style.display = "block";
   document.getElementById("municipality").focus();}
   	else if(document.getElementById("po").value==="" || document.getElementById("po").value==="NA"){
   element.checked = !element.checked;
   Swal.fire("Oops..","Enter your Post Office","error");
   hideAllSection();
   document.getElementById('contactInformation').style.display = "block";
   document.getElementById("po").focus();}
   	else if(document.getElementById("ps").value==="" || document.getElementById("ps").value==="NA"){
   element.checked = !element.checked;
   Swal.fire("Oops..","Enter your Police Station","error");
   hideAllSection();
   document.getElementById('contactInformation').style.display = "block";
   document.getElementById("ps").focus();}
   	else if(document.getElementById("pin").value==="" || document.getElementById("pin").value==="NA"){
   element.checked = !element.checked;
   Swal.fire("Oops..","Enter your Area PIN Code","error");
   hideAllSection();
   document.getElementById('contactInformation').style.display = "block";
   document.getElementById("pin").focus();}


   	else if(document.getElementById("gname").value==="" || document.getElementById("gname").value==="NA"){
   element.checked = !element.checked;
   Swal.fire("Oops..","Enter your Guardian's Name","error");
   hideAllSection();
   document.getElementById('guardianDetails').style.display = "block";
   document.getElementById("gname").focus();}
   	else if(document.getElementById("relationship").value==="" || document.getElementById("relationship").value==="NA"){
   element.checked = !element.checked;
   Swal.fire("Oops..","Choose your Relationship with your Guardian","error");
   hideAllSection();
   document.getElementById('guardianDetails').style.display = "block";
   document.getElementById("relationship").focus();}


   	else if(document.getElementById("ghabitation").value==="" || document.getElementById("ghabitation").value==="NA"){
   element.checked = !element.checked;
   Swal.fire("Oops..","Enter your Guardian's Habitation or Locality","error");
   hideAllSection();
   document.getElementById('guardianContactInformation').style.display = "block";
   document.getElementById("ghabitation").focus();}
   	else if(document.getElementById("gdistrict").value==="" || document.getElementById("gdistrict").value==="NA"){
   element.checked = !element.checked;
   Swal.fire("Oops..","Choose your Guardian's District","error");
   hideAllSection();
   document.getElementById('guardianContactInformation').style.display = "block";
   document.getElementById("gdistrict").focus();}
   	else if(document.getElementById("gblock").value==="" || document.getElementById("gblock").value==="NA"){
   element.checked = !element.checked;
   Swal.fire("Oops..","Enter your Guardian's Block or Municipality name","error");
   hideAllSection();
   document.getElementById('guardianContactInformation').style.display = "block";
   document.getElementById("gblock").focus();}
   	else if(document.getElementById("gpo").value==="" || document.getElementById("gpo").value==="NA"){
   element.checked = !element.checked;
   Swal.fire("Oops..","Enter your Guardian's Post Office","error");
   hideAllSection();
   document.getElementById('guardianContactInformation').style.display = "block";
   document.getElementById("gpo").focus();}
   	else if(document.getElementById("gps").value==="" || document.getElementById("gps").value==="NA"){
   element.checked = !element.checked;
   Swal.fire("Oops..","Enter your Guardian's Police Station","error");
   hideAllSection();
   document.getElementById('guardianContactInformation').style.display = "block";
   document.getElementById("gps").focus();}
   	else if(document.getElementById("gpin").value==="" || document.getElementById("gpin").value==="NA"){
   element.checked = !element.checked;
   Swal.fire("Oops..","Enter your Guardian's Area PIN Code","error");
   hideAllSection();
   document.getElementById('guardianContactInformation').style.display = "block";
   document.getElementById("gpin").focus();}


	 else if(document.getElementById("bname").value==="" || document.getElementById("bname").value==="NA"){
   element.checked = !element.checked;
   Swal.fire("Oops..","Choose Bank Name","error");
   hideAllSection();
   document.getElementById('bankDetails').style.display = "block";
   document.getElementById("bname").focus();}
	 else if(document.getElementById("bcode").value==="" || document.getElementById("bcode").value==="NA"){
   element.checked = !element.checked;
   Swal.fire("Oops..","Enter Bank Branch Code","error");
   hideAllSection();
   document.getElementById('bankDetails').style.display = "block";
   document.getElementById("bcode").focus();}
	 else if(document.getElementById("bifsc").value==="" || document.getElementById("bifsc").value==="NA"){
   element.checked = !element.checked;
   Swal.fire("Oops..","Enter Bank Branch IFSC Code","error");
   hideAllSection();
   document.getElementById('bankDetails').style.display = "block";
   document.getElementById("bifsc").focus();}
	 else if(document.getElementById("acno").value==="" || document.getElementById("acno").value==="NA"){
   element.checked = !element.checked;
   Swal.fire("Oops..","Enter your Bank Account No.","error");
   hideAllSection();
   document.getElementById('bankDetails').style.display = "block";
   document.getElementById("acno").focus();}

	 // else if(document.getElementById("prsec").value==="" || document.getElementById("prsec").value==="NA"){
  //  element.checked = !element.checked;
  //  swal("Oops..","Enter Alloted Section","error");
  //  document.getElementById("prsec").focus();}
  //  	 else if(document.getElementById("prroll").value==="" || document.getElementById("prroll").value==="NA"){
  //  element.checked = !element.checked;
  //  swal("Oops..","Enter Alloted Roll No.","error");
  //  document.getElementById("prroll").focus();}
  //  	 else if(document.getElementById("admno").value==="" || document.getElementById("admno").value==="NA"){
  //  element.checked = !element.checked;
  //  swal("Oops..","Enter Admission No.","error");
  //  document.getElementById("admno").focus();}
  //  	 else if(document.getElementById("admdate").value==="" || document.getElementById("admdate").value==="NA"){
  //  element.checked = !element.checked;
  //  swal("Oops..","Enter Admission Date","error");
  //  document.getElementById("admdate").focus();}
  //  	 else if(document.getElementById("admstatus").value==="" || document.getElementById("admstatus").value==="NA"){
  //  element.checked = !element.checked;
  //  swal("Oops..","Enter Admission Status","error");
  //  document.getElementById("admstatus").focus();}

	else if(document.getElementById("updphoto").value===""){
   element.checked = !element.checked;
   Swal.fire("Oops..","Upload your Photo to proceed","error");
   hideAllSection();
   document.getElementById('yourUploads').style.display = "block";
   document.getElementById("fileButton1").focus();}

     else if(document.getElementById("updbproof").value===""){
   element.checked = !element.checked;
   Swal.fire("Oops..","Upload birth certificate to proceed","error");
   hideAllSection();
   document.getElementById('yourUploads').style.display = "block";
   document.getElementById("fileButton3").focus();}

     else if(document.getElementById("updbpass").value===""){
   element.checked = !element.checked;
   Swal.fire("Oops..","Upload your Bank Pass Book to proceed","error");
   hideAllSection();
   document.getElementById('yourUploads').style.display = "block";
   document.getElementById("fileButton6").focus();}


	 // else if(ffn == 0){
  //  element.checked = !element.checked;
  //  swal("Oops..","Check admission Schedule to proceed. For details open admission.dholahighschool.in","error");
  //  document.getElementById("fileButton6").focus();}
  	
   	else{
   element.checked = element.checked;
   document.getElementById("submitbtn").disabled = !element.checked;
   Swal.fire("Dhola High School","Check all details carefully before Final Submit. (ফাইনাল জমা দেওয়ার আগে সমস্ত বিবরণ সাবধানে পরীক্ষা করে দেখুন।)","info");
   }
 }
 function previewall(){
 Swal.fire("Dhola High School", "Application form regarding Application ID: <b>" + uid + "</b> is successfully submitted. (অ্যাপ্লিকেশন আইডি : " + uid + " সম্পর্কিত আবেদন ফর্ম সফলভাবে জমা দেওয়া হয়েছে।)", "success")
.then((value) => {
  window.open("login/preview.html?uid=" + uid);
});
 }

 function saveBasicInformation(){
 	firebase.database().ref(currentYear + '/' + uid).update({
name:document.getElementById('name').value,
dob:document.getElementById('dob').value,
dobreg:document.getElementById('dobreg').value,
gender:document.getElementById('gender').value,
category:document.getElementById('category').value,
religion:document.getElementById('religion').value,
mothertongue:document.getElementById('mothertongue').value,
nationality:document.getElementById('nationality').value,
aadhaar:document.getElementById('aadhaar').value,
bloodgroup:document.getElementById('bloodgroup').value,
healthid:document.getElementById('healthid').value,
idmark:document.getElementById('idmark').value
});
 	document.getElementById('educationalInformation').style.display = "block";
 	document.getElementById('basicInformation').style.display = "none";
 	document.getElementById('educationalInformation').scrollIntoView();
 }
 function prevBasicInformation(){
 	document.getElementById('basicInformation').style.display = "block";
 	document.getElementById('educationalInformation').style.display = "none";
 	document.getElementById('basicInformation').scrollIntoView();
 }

 function saveEducationalInformation(){
 	firebase.database().ref(currentYear + '/' + uid).update({
acyear:document.getElementById('acyear').value,
admno:document.getElementById('admno').value,
admstatus:document.getElementById('admstatus').value,
admdate:document.getElementById('admdate').value,
prclass:document.getElementById('prclass').value,
pvschool:document.getElementById('pvschool').value,
prsec:document.getElementById('prsec').value,
prroll:document.getElementById('prroll').value,
praddl:document.getElementById('praddl').value,
prstream:prstream,
prfcomp1:prfcomp1,
prfcomp2:prfcomp2,
prfsub1:prfsub1,
prfsub2:prfsub2,
prfsub3:prfsub3,
prfsub4:prfsub4,
pvclass:document.getElementById('pvclass').value,
pvsec:document.getElementById('pvsec').value,
pvroll:document.getElementById('pvroll').value,
pvstream:pvstream,
pvaddl:document.getElementById('pvaddl').value,
medium:document.getElementById('medium').value
});
 	document.getElementById('contactInformation').style.display = "block";
 	document.getElementById('educationalInformation').style.display = "none";
 	document.getElementById('contactInformation').scrollIntoView();
 }
function prevEductionalInformation(){
	document.getElementById('educationalInformation').style.display = "block";
 	document.getElementById('contactInformation').style.display = "none";
 	document.getElementById('educationalInformation').scrollIntoView();
}

 function saveContactInformation(){
 	firebase.database().ref(currentYear + '/' + uid).update({
vill:document.getElementById('vill').value,
habitation:document.getElementById('habitation').value,
district:document.getElementById('district').value,
municipality:document.getElementById('municipality').value,
panchayat:document.getElementById('panchayat').value,
po:document.getElementById('po').value,
ps:document.getElementById('ps').value,
pin:document.getElementById('pin').value,
phone:document.getElementById('phone').value,
email:document.getElementById('email').value
});
 	document.getElementById('guardianDetails').style.display = "block";
 	document.getElementById('contactInformation').style.display = "none";
 	document.getElementById('guardianDetails').scrollIntoView();
 }

function prevContactInformation(){
	document.getElementById('contactInformation').style.display = "block";
 	document.getElementById('guardianDetails').style.display = "none";
 	document.getElementById('contactInformation').scrollIntoView();
}

 function saveGuardianDetails(){
 	firebase.database().ref(currentYear + '/' + uid).update({
fname:document.getElementById('fname').value,
mname:document.getElementById('mname').value,
gname:document.getElementById('gname').value,
relationship:document.getElementById('relationship').value,
aincome:document.getElementById('aincome').value,
gqualification:document.getElementById('gqualification').value
});
 	document.getElementById('guardianContactInformation').style.display = "block";
 	document.getElementById('guardianDetails').style.display = "none";
 	document.getElementById('guardianContactInformation').scrollIntoView();
 }

function prevGuardianDetails(){
	document.getElementById('guardianDetails').style.display = "block";
 	document.getElementById('guardianContactInformation').style.display = "none";
 	document.getElementById('guardianDetails').scrollIntoView();
}

 function saveGuardianContactInformation(){
 	firebase.database().ref(currentYear + '/' + uid).update({
gvill:document.getElementById('gvill').value,
ghabitation:document.getElementById('ghabitation').value,
gdistrict:document.getElementById('gdistrict').value,
gblock:document.getElementById('gblock').value,
gpanchayat:document.getElementById('gpanchayat').value,
gpo:document.getElementById('gpo').value,
gps:document.getElementById('gps').value,
gpin:document.getElementById('gpin').value,
gphone:document.getElementById('gphone').value,
gemail:document.getElementById('gemail').value
});
 	document.getElementById('otherInformation').style.display = "block";
 	document.getElementById('guardianContactInformation').style.display = "none";
 	document.getElementById('otherInformation').scrollIntoView();
 }
function prevGuardianContactInformation(){
	document.getElementById('guardianContactInformation').style.display = "block";
 	document.getElementById('otherInformation').style.display = "none";
 	document.getElementById('guardianContactInformation').scrollIntoView();
}

 function saveOtherInformation(){
 	firebase.database().ref(currentYear + '/' + uid).update({
bplstatus:document.getElementById('bplstatus').value,
bplno:document.getElementById('bplno').value,
cwsn:document.getElementById('cwsn').value,
cwsntyp:document.getElementById('cwsntyp').value
});
 	document.getElementById('bankDetails').style.display = "block";
 	document.getElementById('otherInformation').style.display = "none";
 	document.getElementById('bankDetails').scrollIntoView();
 }

function prevOtherInformation(){
	document.getElementById('otherInformation').style.display = "block";
 	document.getElementById('bankDetails').style.display = "none";
 	document.getElementById('otherInformation').scrollIntoView();
}


 function saveBankDetails(){
 	firebase.database().ref(currentYear + '/' + uid).update({
bname:document.getElementById('bname').value,
bcode:document.getElementById('bcode').value,
bifsc:document.getElementById('bifsc').value,
acno:document.getElementById('acno').value
});
 	document.getElementById('yourUploads').style.display = "block";
 	document.getElementById('bankDetails').style.display = "none";
 	document.getElementById('yourUploads').scrollIntoView();
 }

function prevBankDetails(){
	document.getElementById('bankDetails').style.display = "block";
 	document.getElementById('yourUploads').style.display = "none";
 	document.getElementById('bankDetails').scrollIntoView();
}

function saveYourUploads(){
 	firebase.database().ref(currentYear + '/' + uid).update({
updphoto:document.getElementById('updphoto').value,
updmark:document.getElementById('updmark').value,
updbproof:document.getElementById('updbproof').value,
updslc:document.getElementById('updslc').value,
updaadhaarpic:document.getElementById('updaadhaarpic').value,
updbpass:document.getElementById('updbpass').value,
updcaste:document.getElementById('updcaste').value
});
 	document.getElementById('finalPreviewSubmit').style.display = "block";
 	document.getElementById('yourUploads').style.display = "none";
 	document.getElementById('finalPreviewSubmit').scrollIntoView();
 }
function modifyApplicationForm(){
 	document.getElementById('basicInformation').style.display = "block";
 	document.getElementById('finalPreviewSubmit').style.display = "none";
 	document.getElementById('basicInformation').scrollIntoView();
}

function hideAllSection(){
	document.getElementById('basicInformation').style.display = "none";
	document.getElementById('educationalInformation').style.display = "none";
	document.getElementById('contactInformation').style.display = "none";
	document.getElementById('guardianDetails').style.display = "none";
	document.getElementById('guardianContactInformation').style.display = "none";
	document.getElementById('otherInformation').style.display = "none";
	document.getElementById('bankDetails').style.display = "none";
	document.getElementById('yourUploads').style.display = "none";
	document.getElementById('finalPreviewSubmit').style.display = "none";
}

function showAllSection(){
	document.getElementById('basicInformation').style.display = "block";
	document.getElementById('educationalInformation').style.display = "block";
	document.getElementById('contactInformation').style.display = "block";
	document.getElementById('guardianDetails').style.display = "block";
	document.getElementById('guardianContactInformation').style.display = "block";
	document.getElementById('otherInformation').style.display = "block";
	document.getElementById('bankDetails').style.display = "block";
	document.getElementById('yourUploads').style.display = "block";
	document.getElementById('finalPreviewSubmit').style.display = "block";
}

 //document.getElementById('').value


